import Link from 'next/link';
import { Scale } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3 group" aria-label="Back to homepage">
      <div className="p-2 bg-white rounded-md text-primary group-hover:bg-gray-100 transition-colors">
        <Scale className="h-8 w-8" />
      </div>
      <div className="text-white hidden sm:block">
        <span className="font-bold text-lg  font-headline uppercase tracking-wider">
          Electronic Court
        </span>
        <br />
        <span className="font-bold text-lg font-headline uppercase tracking-wider -mt-2 block">
          Management System
        </span>
      </div>
    </Link>
  );
}
