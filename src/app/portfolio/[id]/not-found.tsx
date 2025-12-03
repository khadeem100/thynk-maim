import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Project niet gevonden</h1>
        <p className="text-muted-foreground mb-8">
          Het project dat je zoekt bestaat niet of is verwijderd.
        </p>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar Portfolio
        </Link>
      </div>
    </div>
  );
}

