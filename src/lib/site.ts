export const siteConfig = {
  name: 'TynkTech',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://tynktech.nl',
  description: 'TynkTech – Moderne Websites, Webapplicaties, Cloud & Cybersecurity. Innovatief technologiebedrijf gespecialiseerd in het ontwikkelen van moderne websites, webapplicaties en digitale oplossingen op maat.',
  links: {
    twitter: 'https://x.com/tynktech',
    github: 'https://github.com/tynktech',
    linkedin: 'https://www.linkedin.com/company/tynktech/',
  },
};

export type SiteConfig = typeof siteConfig;
