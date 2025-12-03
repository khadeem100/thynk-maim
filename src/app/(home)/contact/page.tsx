'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FooterSection } from '@/components/home/sections/footer-section';
import { Navbar } from '@/components/home/sections/navbar';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    bedrijfsnaam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to admin@thynktech.nl
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'admin@thynktech.nl',
          subject: `Contactformulier: ${formData.onderwerp || 'Nieuw bericht'}`,
          html: `
            <h2>Nieuw contactformulier bericht</h2>
            <p><strong>Naam:</strong> ${formData.naam}</p>
            <p><strong>Bedrijfsnaam:</strong> ${formData.bedrijfsnaam || 'Niet opgegeven'}</p>
            <p><strong>E-mail:</strong> ${formData.email}</p>
            <p><strong>Telefoon:</strong> ${formData.telefoon || 'Niet opgegeven'}</p>
            <p><strong>Onderwerp:</strong> ${formData.onderwerp || 'Geen onderwerp'}</p>
            <p><strong>Bericht:</strong></p>
            <p>${formData.bericht.replace(/\n/g, '<br>')}</p>
          `,
          text: `
Nieuw contactformulier bericht

Naam: ${formData.naam}
Bedrijfsnaam: ${formData.bedrijfsnaam || 'Niet opgegeven'}
E-mail: ${formData.email}
Telefoon: ${formData.telefoon || 'Niet opgegeven'}
Onderwerp: ${formData.onderwerp || 'Geen onderwerp'}

Bericht:
${formData.bericht}
          `,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Bericht verzonden! We nemen zo spoedig mogelijk contact met je op.');
        setFormData({
          naam: '',
          bedrijfsnaam: '',
          email: '',
          telefoon: '',
          onderwerp: '',
          bericht: '',
        });
      } else {
        throw new Error('Er is een fout opgetreden bij het verzenden');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Er is een fout opgetreden. Probeer het later opnieuw of stuur een e-mail naar admin@thynktech.nl');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance mb-4">
              <span className="text-primary">Neem contact</span>
              <br />
              <span className="text-secondary">met ons op</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Heb je vragen over onze diensten? We helpen je graag verder. Vul het formulier in en we nemen zo spoedig mogelijk contact met je op.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contactgegevens</CardTitle>
                  <CardDescription>
                    Neem direct contact met ons op
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <a href="mailto:admin@thynktech.nl" className="text-muted-foreground hover:text-primary transition-colors">
                        admin@thynktech.nl
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telefoon</p>
                      <a href="tel:+31612345678" className="text-muted-foreground hover:text-primary transition-colors">
                        +31 6 12 34 56 78
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Adres</p>
                      <p className="text-muted-foreground">
                        Nederland
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bereikbaarheid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We zijn bereikbaar van maandag tot vrijdag tussen 09:00 en 17:00 uur. 
                    Voor urgente zaken kun je altijd een e-mail sturen.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contactformulier</CardTitle>
                  <CardDescription>
                    Vul het formulier in en we nemen binnen 24 uur contact met je op
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="size-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">Bedankt voor je bericht!</h3>
                      <p className="text-muted-foreground mb-6">
                        We hebben je bericht ontvangen en nemen zo spoedig mogelijk contact met je op.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Nieuw bericht versturen
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="naam">Naam *</Label>
                          <Input
                            id="naam"
                            name="naam"
                            type="text"
                            required
                            value={formData.naam}
                            onChange={handleChange}
                            placeholder="Jouw naam"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bedrijfsnaam">Bedrijfsnaam</Label>
                          <Input
                            id="bedrijfsnaam"
                            name="bedrijfsnaam"
                            type="text"
                            value={formData.bedrijfsnaam}
                            onChange={handleChange}
                            placeholder="Jouw bedrijfsnaam"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mailadres *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jouw@email.nl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefoon">Telefoonnummer</Label>
                          <Input
                            id="telefoon"
                            name="telefoon"
                            type="tel"
                            value={formData.telefoon}
                            onChange={handleChange}
                            placeholder="+31 6 12 34 56 78"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="onderwerp">Onderwerp *</Label>
                        <Input
                          id="onderwerp"
                          name="onderwerp"
                          type="text"
                          required
                          value={formData.onderwerp}
                          onChange={handleChange}
                          placeholder="Waar kunnen we je mee helpen?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bericht">Bericht *</Label>
                        <Textarea
                          id="bericht"
                          name="bericht"
                          required
                          value={formData.bericht}
                          onChange={handleChange}
                          placeholder="Vertel ons meer over je vraag of project..."
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Verzenden...
                          </>
                        ) : (
                          <>
                            <Send className="size-4 mr-2" />
                            Verstuur bericht
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

