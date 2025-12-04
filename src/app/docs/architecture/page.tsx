'use client';

import * as React from 'react';
import { 
  DocsHeader,
  DocsCard,
  DocsBody,
} from '@/components/ui/docs-index';

const breadcrumbs = [
  { title: 'Documentation', onClick: () => window.location.href = '/docs' },
  { title: 'Platform Architecture' }
];

export default function ArchitecturePage() {
  return (
    <>
      <DocsHeader
        title="Technische Architectuur"
        subtitle="Inzicht in onze technische stack en ontwikkelingsaanpak"
        breadcrumbs={breadcrumbs}
        badge="Technical"
        lastUpdated="Januari 2025"
        showSeparator
        size="lg"
        className="mb-8 sm:mb-12"
      />

      <section id="architecture" className="mb-16">
        <DocsBody className="mb-8">
          <h2>🏗️ Onze Technische Stack</h2>
          <p className="text-lg mb-6">
            TynkTech gebruikt moderne, bewezen technologieën om robuuste en schaalbare oplossingen te bouwen:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DocsCard
            title="🌐 Frontend Development"
            description="React, Next.js, Vue.js met TypeScript voor moderne, responsive gebruikersinterfaces en optimale gebruikerservaring"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="⚙️ Backend Development"
            description="Node.js, Python, FastAPI voor robuuste API's, server-side logica en integraties met externe systemen"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="☁️ Cloud Infrastructure"
            description="AWS, Azure, Google Cloud voor schaalbare hosting, CDN, databases en managed services"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="🔒 Security & DevOps"
            description="Docker, CI/CD pipelines, security audits, monitoring en automatische deployments voor betrouwbare oplossingen"
            className="bg-accent/50 border-border"
          />
        </div>
      </section>

      <section id="tech-stack" className="mb-16">
        <DocsBody className="mb-8">
          <h2>🚀 Technology Stack</h2>
          <p className="text-lg mb-6">
            Moderne technologieën die we gebruiken voor onze projecten:
          </p>
        </DocsBody>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DocsCard
                title="Next.js 15+"
                description="App Router with TypeScript"
                className="bg-accent/30 border-border"
              />
              <DocsCard
                title="Tailwind CSS"
                description="Utility-first styling"
                className="bg-accent/30 border-border"
              />
              <DocsCard
                title="Radix UI"
                description="Accessible component primitives"
                className="bg-accent/30 border-border"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DocsCard
                title="FastAPI"
                description="Modern Python web framework"
                className="bg-accent/30 border-border"
              />
              <DocsCard
                title="LiteLLM"
                description="Multi-provider LLM integration"
                className="bg-accent/30 border-border"
              />
              <DocsCard
                title="Dramatiq"
                description="Background job processing"
                className="bg-accent/30 border-border"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DocsCard
                title="Supabase"
                description="Database and authentication"
                className="bg-accent/30 border-border"
              />
              <DocsCard
                title="Redis"
                description="Caching and message broker"
                className="bg-accent/30 border-border"
              />
              <DocsCard
                title="Docker"
                description="Containerization and isolation"
                className="bg-accent/30 border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="data-flow" className="mb-16">
        <DocsBody className="mb-8">
          <h2>🔄 Data Flow</h2>
          <p className="text-lg mb-6">
            Onze ontwikkelingsworkflow en projectaanpak:
          </p>
          
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <div>
                  <h4 className="font-semibold">Intake & Analyse</h4>
                  <p className="text-sm text-muted-foreground">We analyseren jouw behoeften en stellen een technisch plan op</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <div>
                  <h4 className="font-semibold">Ontwerp & Development</h4>
                  <p className="text-sm text-muted-foreground">We ontwikkelen jouw oplossing met moderne technologieën en best practices</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <div>
                  <h4 className="font-semibold">Testing & Optimalisatie</h4>
                  <p className="text-sm text-muted-foreground">Uitgebreide tests, performance optimalisatie en security checks</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                <div>
                  <h4 className="font-semibold">Deployment & Support</h4>
                  <p className="text-sm text-muted-foreground">Live zetten en continue monitoring, updates en ondersteuning</p>
                </div>
              </div>
            </div>
          </div>
        </DocsBody>
      </section>

      <section id="security" className="mb-16">
        <DocsBody className="mb-8">
          <h2>🔒 Security Architecture</h2>
          <p className="text-lg mb-6">
            Multi-layered security approach:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DocsCard
            title="🛡️ Authentication"
            description="JWT-based authentication with Supabase Auth, secure session management"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="🔐 Authorization"
            description="Row-level security policies, fine-grained access control"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="🏗️ Isolation"
            description="Docker containers for agent execution, network segmentation"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="🔑 Secrets Management"
            description="Encrypted storage of API keys and sensitive configuration"
            className="bg-accent/50 border-border"
          />
        </div>
      </section>

      <section id="deployment" className="mb-16">
        <DocsBody className="mb-8">
          <h2>🚀 Deployment Options</h2>
          <p className="text-lg mb-6">
            Flexible deployment strategies for different use cases:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DocsCard
            title="🐳 Docker Compose"
            description="Single-machine deployment with all services"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="☸️ Kubernetes"
            description="Scalable orchestration for production workloads"
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="☁️ Cloud Native"
            description="Serverless functions with managed services"
            className="bg-accent/50 border-border"
          />
        </div>
      </section>
    </>
  );
} 