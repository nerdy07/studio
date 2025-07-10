import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, Scale } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">
              <LogIn />
              Login
            </Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/signup">
              <UserPlus />
              Sign Up
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <Scale className="h-24 w-24 mb-6 text-primary" strokeWidth={1.5} />
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
          Gombe State Judiciary e-Affidavit System
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/80">
          A seamless and secure platform to apply for, process, and obtain official affidavits online. Built for convenience, speed, and trust.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </main>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Gombe State Judiciary. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
