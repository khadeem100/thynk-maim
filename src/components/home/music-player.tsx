'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

// SoundCloud Widget API types
declare global {
  interface Window {
    SC: any;
  }
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [widget, setWidget] = useState<any>(null);
  const widgetRef = useRef<HTMLIFrameElement | null>(null);
  const hasStartedRef = useRef(false);

  const SOUNDCLOUD_URL = 'https://soundcloud.com/el-club-de-la-verdad/avicii-wake-me-up';
  const START_TIME = 70; // 1:10 in seconds

  // Load SoundCloud Widget API
  useEffect(() => {
    if (typeof window === 'undefined') return;

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
    document.body.appendChild(script);

    return () => {
      if (widget && window.SC) {
        try {
          widget.unbind(window.SC.Widget.Events.READY);
          widget.unbind(window.SC.Widget.Events.PLAY);
          widget.unbind(window.SC.Widget.Events.PAUSE);
          widget.unbind(window.SC.Widget.Events.FINISH);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  const initializeWidget = () => {
    if (!window.SC || !widgetRef.current || widget) return;

    try {
      const scWidget = window.SC.Widget(widgetRef.current);
      
      scWidget.bind(window.SC.Widget.Events.READY, () => {
        scWidget.setVolume(volume * 100); // SoundCloud uses 0-100
        setIsInitialized(true);
      });

      scWidget.bind(window.SC.Widget.Events.PLAY, () => {
        setIsPlaying(true);
        
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
      });

      scWidget.bind(window.SC.Widget.Events.FINISH, () => {
        // Restart from 1:10 when finished
        scWidget.seekTo(START_TIME * 1000);
        scWidget.play();
      });

      setWidget(scWidget);
    } catch (error) {
      console.error('Error initializing SoundCloud widget:', error);
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
      } else {
        widget.play();
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

  return (
    <div className="fixed bottom-4 right-4 z-50 music-player-container">
      {/* Hidden SoundCloud Widget */}
      <iframe
        ref={widgetRef}
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

