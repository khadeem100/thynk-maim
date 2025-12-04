'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useMusic } from '@/contexts/music-context';
import { useTheme } from 'next-themes';

// SoundCloud Widget API types
declare global {
  interface Window {
    SC: any;
  }
}

const STORAGE_KEY = 'tynktech-music-player';
const SOUNDCLOUD_URL = 'https://soundcloud.com/el-club-de-la-verdad/avicii-wake-me-up';
const START_TIME = 70; // 1:10 in seconds

// Global widget instance to persist across navigations
let globalWidget: any = null;
let globalWidgetRef: HTMLIFrameElement | null = null;

export function MusicPlayer() {
  const { isPlaying, setIsPlaying } = useMusic();
  const { setTheme } = useTheme();
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [widget, setWidget] = useState<any>(null);
  const widgetRef = useRef<HTMLIFrameElement | null>(null);
  const hasStartedRef = useRef(false);
  const isInitializingRef = useRef(false);

  // Load saved state from sessionStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        setVolume(state.volume ?? 0.5);
        setIsMuted(state.isMuted ?? false);
        setIsPlaying(state.isPlaying ?? false);
        hasStartedRef.current = state.hasStarted ?? false;
      }
    } catch (e) {
      console.error('Error loading music player state:', e);
    }
  }, []);

  // Save state to sessionStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        volume,
        isMuted,
        isPlaying,
        hasStarted: hasStartedRef.current,
      }));
    } catch (e) {
      console.error('Error saving music player state:', e);
    }
  }, [volume, isMuted, isPlaying]);

  // Load SoundCloud Widget API
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Use global widget if it exists
    if (globalWidget && globalWidgetRef) {
      widgetRef.current = globalWidgetRef;
      setWidget(globalWidget);
      setIsInitialized(true);
      
      // Restore play state if it was playing
      if (isPlaying) {
        setTimeout(() => {
          try {
            globalWidget.getPosition((position: number) => {
              // If position is 0 or very small, it might have reset
              if (position < 1000) {
                globalWidget.seekTo(START_TIME * 1000);
              }
            });
            // Check if actually playing, if not, play it
            globalWidget.isPaused((paused: boolean) => {
              if (paused) {
                globalWidget.play();
                setTheme('dark'); // Switch to dark mode when resuming
              } else {
                // Already playing, ensure dark mode
                setTheme('dark');
              }
            });
          } catch (e) {
            console.error('Error restoring play state:', e);
          }
        }, 200);
      } else {
        // Not playing, ensure light mode
        setTheme('light');
      }
      return;
    }

    // Check if SoundCloud Widget API is already loaded
    if (window.SC && widgetRef.current) {
      const timer = setTimeout(() => {
        initializeWidget();
      }, 100);
      return () => clearTimeout(timer);
    }

    // Load SoundCloud Widget API script
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    script.onload = () => {
      // Wait a bit for iframe to be ready
      setTimeout(() => {
        initializeWidget();
      }, 200);
    };
    
    // Check if script is already added
    const existingScript = document.querySelector('script[src="https://w.soundcloud.com/player/api.js"]');
    if (!existingScript) {
      document.body.appendChild(script);
    } else if (window.SC) {
      // Script already exists and loaded, initialize immediately
      setTimeout(() => {
        initializeWidget();
      }, 200);
    }

    return () => {
      // Don't cleanup on unmount - keep widget alive for navigation
      // Only cleanup on actual page unload
    };
  }, []);

  // Cleanup on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (globalWidget && window.SC) {
        try {
          globalWidget.unbind(window.SC.Widget.Events.READY);
          globalWidget.unbind(window.SC.Widget.Events.PLAY);
          globalWidget.unbind(window.SC.Widget.Events.PAUSE);
          globalWidget.unbind(window.SC.Widget.Events.FINISH);
        } catch (e) {
          // Ignore cleanup errors
        }
        globalWidget = null;
        globalWidgetRef = null;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const initializeWidget = () => {
    if (!window.SC || !widgetRef.current || widget || isInitializingRef.current) return;
    
    // Use global widget if it exists
    if (globalWidget && globalWidgetRef === widgetRef.current) {
      setWidget(globalWidget);
      setIsInitialized(true);
      return;
    }

    isInitializingRef.current = true;

    try {
      const scWidget = window.SC.Widget(widgetRef.current);
      
      // Store globally for persistence across navigations
      globalWidget = scWidget;
      globalWidgetRef = widgetRef.current;
      
      scWidget.bind(window.SC.Widget.Events.READY, () => {
        scWidget.setVolume(volume * 100); // SoundCloud uses 0-100
        setIsInitialized(true);
        isInitializingRef.current = false;
        
        // Restore play state if it was playing
        if (isPlaying) {
          setTimeout(() => {
            scWidget.play();
            if (!hasStartedRef.current) {
              scWidget.seekTo(START_TIME * 1000);
              hasStartedRef.current = true;
            }
          }, 100);
        }
      });

      scWidget.bind(window.SC.Widget.Events.PLAY, () => {
        setIsPlaying(true);
        setTheme('dark'); // Switch to dark mode when playing
        
        // Seek to start time (1:10) on first play
        if (!hasStartedRef.current) {
          setTimeout(() => {
            scWidget.seekTo(START_TIME * 1000); // Convert to milliseconds
            hasStartedRef.current = true;
          }, 200);
        }
      });

      scWidget.bind(window.SC.Widget.Events.PAUSE, () => {
        setIsPlaying(false);
        setTheme('light'); // Switch back to light mode when paused
      });

      scWidget.bind(window.SC.Widget.Events.FINISH, () => {
        // Restart from 1:10 when finished
        scWidget.seekTo(START_TIME * 1000);
        scWidget.play();
      });

      setWidget(scWidget);
    } catch (error) {
      console.error('Error initializing SoundCloud widget:', error);
      isInitializingRef.current = false;
    }
  };

  // Update volume when it changes
  useEffect(() => {
    if (widget && isInitialized) {
      widget.setVolume(isMuted ? 0 : volume * 100);
    }
  }, [volume, isMuted, widget, isInitialized]);


  const togglePlay = async () => {
    if (!widget || !isInitialized) return;

    try {
      if (isPlaying) {
        widget.pause();
        setTheme('light'); // Switch back to light mode
      } else {
        widget.play();
        setTheme('dark'); // Switch to dark mode
        // Ensure we start from 1:10 on first play
        if (!hasStartedRef.current) {
          setTimeout(() => {
            widget.seekTo(START_TIME * 1000);
            hasStartedRef.current = true;
          }, 100);
        }
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  // Close controls when clicking outside
  useEffect(() => {
    if (!showControls) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.music-player-container')) {
        setShowControls(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showControls]);

  // Ensure widgetRef is set to global ref if it exists
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if iframe already exists in DOM
    let iframe = document.getElementById('soundcloud-widget') as HTMLIFrameElement;
    
    if (iframe) {
      // Use existing iframe
      widgetRef.current = iframe;
      globalWidgetRef = iframe;
      
      // If widget is already initialized, use it
      if (globalWidget && window.SC) {
        setWidget(globalWidget);
        setIsInitialized(true);
      }
    } else if (!widgetRef.current) {
      // Create new iframe only if it doesn't exist
      iframe = document.createElement('iframe');
      iframe.id = 'soundcloud-widget';
      iframe.width = '0';
      iframe.height = '0';
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('frameBorder', 'no');
      iframe.setAttribute('allow', 'autoplay');
      iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
      iframe.style.position = 'absolute';
      iframe.style.visibility = 'hidden';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.title = 'SoundCloud Player';
      document.body.appendChild(iframe);
      widgetRef.current = iframe;
      globalWidgetRef = iframe;
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 music-player-container">
      {/* Hidden SoundCloud Widget */}
      <iframe
        ref={(el) => {
          if (el && !widgetRef.current) {
            // Check if iframe already exists
            const existing = document.getElementById('soundcloud-widget') as HTMLIFrameElement;
            if (existing && existing !== el) {
              // Use existing iframe instead
              widgetRef.current = existing;
              globalWidgetRef = existing;
            } else {
              widgetRef.current = el;
              globalWidgetRef = el;
            }
          }
        }}
        id="soundcloud-widget"
        width="0"
        height="0"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
        style={{ position: 'absolute', visibility: 'hidden', width: '0', height: '0' }}
        title="SoundCloud Player"
      />
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-4 min-w-[280px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Music className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Wake Me Up</p>
                    <p className="text-xs text-muted-foreground">Avicii</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="h-8 w-8"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <VolumeX className="h-3 w-3 text-muted-foreground" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <Volume2 className="h-3 w-3 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (isInitialized) {
              togglePlay();
              if (!isPlaying) {
                setShowControls(true);
              }
            }
          }}
          size="lg"
          disabled={!isInitialized}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg transition-all",
            isPlaying 
              ? "bg-primary text-primary-foreground hover:bg-primary/90 ring-2 ring-primary/20" 
              : "bg-background border border-border hover:bg-accent",
            !isInitialized && "opacity-50 cursor-not-allowed"
          )}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-0.5" />
          )}
        </Button>
      </motion.div>
    </div>
  );
}

