'use client';

import { Changelog } from "@/components/home/sections/changelog";
import { FooterSection } from '@/components/home/sections/footer-section';

export default function ChangelogPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full">
        <section id="changelog" className="w-full py-16 px-6">
          <Changelog />
        </section>
        <FooterSection />
      </div>
    </main>
  );
}