
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, FileText, BadgeCheck, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/logo';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
    return (
        <Card className="flex flex-col text-center items-center p-8 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/20">
            <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                <Icon className="w-10 h-10 text-primary" />
            </div>
            <CardHeader className="p-0">
                <CardTitle className="text-xl font-headline">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-4">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="absolute top-0 left-0 right-0 z-30 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/login">
                <LogIn className="mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/signup">
                <UserPlus className="mr-2" />
                Register
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Gombe State Judiciary Building"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            data-ai-hint="courthouse building"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-primary/40 z-10"></div>


          <div className="relative z-20 flex flex-col items-center justify-center text-center p-6 max-w-3xl">
            <div className="mb-6">
                <Image
                    src="https://placehold.co/120x120.png"
                    alt="Gombe State High Court Logo"
                    width={120}
                    height={120}
                    className="rounded-full shadow-2xl border-4 border-white/50"
                    data-ai-hint="court seal"
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-lg">
                Gombe State Judiciary e-Affidavit
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
                A seamless and secure platform to apply for, process, and obtain official affidavits online. Built for convenience, speed, and trust.
            </p>
            <div className="mt-8">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
                <Link href="/signup">
                    Get Started Now
                </Link>
                </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Core Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Simplifying legal processes with secure and efficient digital solutions.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={FileText}
                        title="E-Affidavit"
                        description="A written Statement in which a deponent swears oath or affirms his/her Statement."
                    />
                    <FeatureCard
                        icon={BadgeCheck}
                        title="E-Verification"
                        description="Verify all affidavits quickly and securely online, ensuring authenticity and compliance with legal standards."
                    />
                    <FeatureCard
                        icon={Briefcase}
                        title="Accredited Agents"
                        description="Authorized individuals or organizations to assist with submitting requests to the court on your behalf."
                    />
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Gombe State Judiciary. Powered by Century Information Systems. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
