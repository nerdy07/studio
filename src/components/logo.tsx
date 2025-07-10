import Link from 'next/link';
import { Scale } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Back to homepage">
      <div className="p-2 bg-primary rounded-lg text-primary-foreground group-hover:bg-primary/90 transition-colors">
        <Scale className="h-6 w-6" />
      </div>
      <span className="font-bold text-lg text-primary font-headline hidden sm:inline-block">
        GombeJudiciary e-Affidavit
      </span>
    </Link>
  );
}
