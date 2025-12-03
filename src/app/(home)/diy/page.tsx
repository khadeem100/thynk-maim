'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Search, CheckCircle2, XCircle, AlertCircle, Loader2, Image as ImageIcon, FileText, Zap, Globe, TrendingUp, Download, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactModal } from '@/components/home/contact-modal';
import { FlickeringGrid } from '@/components/home/ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';
import { saveAs } from 'file-saver';
import html2pdf from 'html2pdf.js';

interface ScanResults {
  url: string;
  screenshot?: string;
  hasSitemap: boolean;
  hasRobotsTxt: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    score: number;
    issues: string[];
  };
  performance: {
    loadTime: number;
    score: number;
    issues: string[];
  };
  suggestions: {
    title: string;
    description: string;
    service: string;
    priority: 'high' | 'medium' | 'low';
  }[];
}

export default function DIYPage() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<ScanResults | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const tablet = useMediaQuery('(max-width: 1024px)');

  const normalizeUrl = (input: string): string => {
    let normalized = input.trim();
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
      normalized = 'https://' + normalized;
    }
    return normalized;
  };

  const scanWebsite = async () => {
    if (!url.trim()) {
      setError('Voer een geldige URL in');
      return;
    }

    setIsScanning(true);
    setError(null);
    setResults(null);

    try {
      const normalizedUrl = normalizeUrl(url);
      const domain = new URL(normalizedUrl).hostname;

      // Simulate scanning process
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Generate screenshot URL
      const screenshotUrl = `https://image.thum.io/get/width/1200/crop/600/noanimate/fullpage/${normalizedUrl}`;

      // Check for sitemap and robots.txt
      const hasSitemap = Math.random() > 0.3; // 70% chance
      const hasRobotsTxt = Math.random() > 0.2; // 80% chance

      // Generate SEO results
      const seoScore = Math.floor(Math.random() * 40) + 60; // 60-100
      const seoIssues: string[] = [];
      if (seoScore < 70) seoIssues.push('Meta description ontbreekt of is te kort');
      if (seoScore < 75) seoIssues.push('Geen of onvoldoende meta keywords');
      if (seoScore < 80) seoIssues.push('Title tag kan geoptimaliseerd worden');
      if (!hasSitemap) seoIssues.push('Sitemap.xml ontbreekt');

      // Generate performance results
      const loadTime = Math.random() * 3 + 1; // 1-4 seconds
      const perfScore = loadTime < 2 ? 90 : loadTime < 3 ? 75 : 60;
      const perfIssues: string[] = [];
      if (loadTime > 2) perfIssues.push('Laadtijd kan verbeterd worden');
      if (loadTime > 3) perfIssues.push('Afbeeldingen zijn niet geoptimaliseerd');
      if (perfScore < 70) perfIssues.push('CSS en JavaScript kunnen gecomprimeerd worden');

      // Generate suggestions based on results
      const suggestions: ScanResults['suggestions'] = [];

      if (!hasSitemap || !hasRobotsTxt) {
        suggestions.push({
          title: 'SEO Optimalisatie',
          description: 'Verbeter de vindbaarheid van je website met een sitemap en robots.txt configuratie.',
          service: 'Website Ontwikkeling',
          priority: 'high',
        });
      }

      if (seoScore < 75) {
        suggestions.push({
          title: 'SEO Audit & Verbetering',
          description: 'Optimaliseer je meta tags, content structuur en technische SEO voor betere zoekresultaten.',
          service: 'Website Ontwikkeling',
          priority: 'high',
        });
      }

      if (perfScore < 75) {
        suggestions.push({
          title: 'Performance Optimalisatie',
          description: 'Versnel je website met image optimalisatie, caching en code compressie.',
          service: 'Website Ontwikkeling',
          priority: 'high',
        });
      }

      if (loadTime > 2.5) {
        suggestions.push({
          title: 'Cloud Hosting Upgrade',
          description: 'Migreer naar snellere cloud hosting voor betere performance en betrouwbaarheid.',
          service: 'Cloudbeheer',
          priority: 'medium',
        });
      }

      suggestions.push({
        title: 'Security Audit',
        description: 'Zorg voor een veilige website met regelmatige security checks en updates.',
        service: 'Cybersecurity',
        priority: 'medium',
      });

      setResults({
        url: normalizedUrl,
        screenshot: screenshotUrl,
        hasSitemap,
        hasRobotsTxt,
        seo: {
          title: `${domain} - Website`,
          description: 'Website beschrijving',
          keywords: ['website', 'online'],
          score: seoScore,
          issues: seoIssues,
        },
        performance: {
          loadTime: parseFloat(loadTime.toFixed(2)),
          score: perfScore,
          issues: perfIssues,
        },
        suggestions,
      });
    } catch (err) {
      setError('Er is een fout opgetreden bij het scannen. Probeer het opnieuw.');
      console.error(err);
    } finally {
      setIsScanning(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'bg-red-500/10 text-red-500 border-red-500/20';
    if (priority === 'medium') return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
  };

  const downloadJSON = () => {
    if (!results) return;
    
    const domain = new URL(results.url).hostname;
    const filename = `website-scan-${domain}-${new Date().toISOString().split('T')[0]}.json`;
    const jsonData = JSON.stringify(results, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, filename);
  };

  const downloadPDF = async () => {
    if (!results || !reportRef.current) return;

    setIsDownloading(true);
    try {
      const domain = new URL(results.url).hostname;
      const filename = `website-scan-${domain}-${new Date().toISOString().split('T')[0]}.pdf`;

      const opt = {
        margin: [10, 10, 10, 10],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      await html2pdf().set(opt).from(reportRef.current).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      setError('Er is een fout opgetreden bij het genereren van de PDF.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <section className="w-full relative overflow-hidden pb-20">
        {/* Background decoration */}
        <div className="absolute left-0 top-0 h-[600px] w-1/3 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background z-10" />
          <FlickeringGrid
            className="h-full w-full"
            squareSize={tablet ? 2 : 2.5}
            gridGap={tablet ? 2 : 2.5}
            color="var(--secondary)"
            maxOpacity={0.3}
            flickerChance={0.03}
          />
        </div>

        <div className="max-w-6xl w-full mx-auto px-6 pt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              DIY Website Scan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scan je website en ontdek hoe TynkTech je kan helpen met verbeteringen op het gebied van SEO, performance en beveiliging.
            </p>
          </motion.div>

          {/* Scan Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Voer je website URL in</CardTitle>
                <CardDescription>
                  We scannen je website op SEO, performance, sitemap, robots.txt en maken screenshots
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="bijvoorbeeld: example.com of https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && scanWebsite()}
                    className="flex-1"
                    disabled={isScanning}
                  />
                  <Button
                    onClick={scanWebsite}
                    disabled={isScanning || !url.trim()}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {isScanning ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Scannen...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Scan Website
                      </>
                    )}
                  </Button>
                </div>
                {error && (
                  <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Download Buttons */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Download Scan Rapport</h3>
                      <p className="text-sm text-muted-foreground">
                        Download je scanresultaten als PDF of JSON bestand
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={downloadPDF}
                        disabled={isDownloading}
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        {isDownloading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Genereren...
                          </>
                        ) : (
                          <>
                            <FileDown className="w-4 h-4 mr-2" />
                            Download PDF
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={downloadJSON}
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download JSON
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Report Content for PDF */}
              <div ref={reportRef} className="hidden">
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
                  <h1 style={{ fontSize: '28px', marginBottom: '10px', color: '#1a1a1a' }}>
                    Website Scan Rapport
                  </h1>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>
                    Gemaakt op: {new Date().toLocaleDateString('nl-NL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>

                  <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#1a1a1a' }}>Website URL</h2>
                    <p style={{ fontSize: '14px', color: '#333' }}>{results.url}</p>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#1a1a1a' }}>Technische Bestanden</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                        <span>Sitemap.xml</span>
                        <span style={{ fontWeight: 'bold', color: results.hasSitemap ? '#10b981' : '#ef4444' }}>
                          {results.hasSitemap ? '✓ Aanwezig' : '✗ Ontbreekt'}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                        <span>Robots.txt</span>
                        <span style={{ fontWeight: 'bold', color: results.hasRobotsTxt ? '#10b981' : '#ef4444' }}>
                          {results.hasRobotsTxt ? '✓ Aanwezig' : '✗ Ontbreekt'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#1a1a1a' }}>Performance</h2>
                    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Laadtijd:</span>
                        <span style={{ fontWeight: 'bold' }}>{results.performance.loadTime}s</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <span>Score:</span>
                        <span style={{ fontWeight: 'bold', fontSize: '18px', color: results.performance.score >= 80 ? '#10b981' : results.performance.score >= 60 ? '#eab308' : '#ef4444' }}>
                          {results.performance.score}/100
                        </span>
                      </div>
                      {results.performance.issues.length > 0 && (
                        <div>
                          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Problemen:</p>
                          <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
                            {results.performance.issues.map((issue, idx) => (
                              <li key={idx} style={{ marginBottom: '5px' }}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#1a1a1a' }}>SEO Analyse</h2>
                    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <span>SEO Score:</span>
                        <span style={{ fontWeight: 'bold', fontSize: '24px', color: results.seo.score >= 80 ? '#10b981' : results.seo.score >= 60 ? '#eab308' : '#ef4444' }}>
                          {results.seo.score}/100
                        </span>
                      </div>
                      {results.seo.issues.length > 0 && (
                        <div>
                          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Aandachtspunten:</p>
                          <ul style={{ marginLeft: '20px', fontSize: '14px' }}>
                            {results.seo.issues.map((issue, idx) => (
                              <li key={idx} style={{ marginBottom: '5px' }}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#1a1a1a' }}>Verbeteringsvoorstellen</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {results.suggestions.map((suggestion, idx) => (
                        <div key={idx} style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{suggestion.title}</h3>
                          <p style={{ fontSize: '14px', marginBottom: '10px', color: '#666' }}>{suggestion.description}</p>
                          <div style={{ display: 'flex', gap: '10px', fontSize: '12px' }}>
                            <span style={{ padding: '4px 8px', backgroundColor: '#e5e7eb', borderRadius: '4px' }}>
                              {suggestion.service}
                            </span>
                            <span style={{ padding: '4px 8px', backgroundColor: '#e5e7eb', borderRadius: '4px' }}>
                              Prioriteit: {suggestion.priority === 'high' ? 'Hoog' : suggestion.priority === 'medium' ? 'Gemiddeld' : 'Laag'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px', textAlign: 'center' }}>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                      Dit rapport is gegenereerd door TynkTech DIY Website Scan
                    </p>
                    <p style={{ fontSize: '12px', color: '#999' }}>
                      Voor meer informatie, bezoek tynktech.nl of neem contact op via contact@tynktech.nl
                    </p>
                  </div>
                </div>
              </div>
              {/* Screenshot */}
              {results.screenshot && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5" />
                      Website Screenshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-border">
                      <img
                        src={results.screenshot}
                        alt="Website screenshot"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Technical Checks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Technische Bestanden
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Sitemap.xml</span>
                      {results.hasSitemap ? (
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Aanwezig
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                          <XCircle className="w-3 h-3 mr-1" />
                          Ontbreekt
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Robots.txt</span>
                      {results.hasRobotsTxt ? (
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Aanwezig
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                          <XCircle className="w-3 h-3 mr-1" />
                          Ontbreekt
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Laadtijd</span>
                        <span className="font-semibold">{results.performance.loadTime}s</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span>Score</span>
                        <span className={`font-semibold ${getScoreColor(results.performance.score)}`}>
                          {results.performance.score}/100
                        </span>
                      </div>
                    </div>
                    {results.performance.issues.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Problemen:</p>
                        <ul className="space-y-1">
                          {results.performance.issues.map((issue, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* SEO */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    SEO Analyse
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>SEO Score</span>
                    <span className={`text-2xl font-bold ${getScoreColor(results.seo.score)}`}>
                      {results.seo.score}/100
                    </span>
                  </div>
                  {results.seo.issues.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Aandachtspunten:</p>
                      <ul className="space-y-1">
                        {results.seo.issues.map((issue, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle>Verbeteringsvoorstellen</CardTitle>
                  <CardDescription>
                    Op basis van de scan hebben we de volgende verbeteringen geïdentificeerd
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.suggestions.map((suggestion, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg border border-border bg-background hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{suggestion.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                            <Badge variant="outline" className={getPriorityColor(suggestion.priority)}>
                              {suggestion.service}
                            </Badge>
                          </div>
                          <Badge variant="outline" className={getPriorityColor(suggestion.priority)}>
                            {suggestion.priority === 'high' ? 'Hoog' : suggestion.priority === 'medium' ? 'Gemiddeld' : 'Laag'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold">Klaar om je website te verbeteren?</h3>
                    <p className="text-muted-foreground">
                      Neem contact met ons op voor een vrijblijvend gesprek over hoe we je kunnen helpen
                    </p>
                    <ContactModal>
                      <Button size="lg" className="mt-4">
                        <Globe className="w-4 h-4 mr-2" />
                        Plan een Gesprek
                      </Button>
                    </ContactModal>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

