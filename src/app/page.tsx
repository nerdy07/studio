
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/logo';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
    return (
        <Card className="flex flex-col text-center items-center p-8 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-primary/10">
            <div className="p-4 bg-primary/10 rounded-full mb-4 ring-8 ring-primary/5">
                {icon}
            </div>
            <CardHeader className="p-0">
                <CardTitle className="text-xl font-headline text-primary">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-4">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
};

const EAffidavitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

const EVerificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 22a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2zM19 15a4 4 0 0 0-8 0c0 1.5.8 2.8 2 3.5v-3.5a2 2 0 1 1 4 0v3.5c1.2-.7 2-2 2-3.5zM12 11a6 6 0 0 1 6-6h.5a3.5 3.5 0 1 1 0 7h-.5a6 6 0 0 1-6-6zM8.5 7A3.5 3.5 0 1 0 5 3.5a3.5 3.5 0 0 0 3.5 3.5z"></path>
        <path d="m2 16 3-3"></path>
        <path d="M4 11 2 9"></path>
    </svg>
);

const AccreditedAgentsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <path d="M20 8v6"></path>
        <path d="M23 11h-6"></path>
    </svg>
);


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
        <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-white">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Gombe State Judiciary Building"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            data-ai-hint="courthouse building"
            priority
          />
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20">
                <div className="mb-4">
                    <Image
                        src="https://placehold.co/120x120.png"
                        alt="Gombe State High Court Logo"
                        width={100}
                        height={100}
                        className="rounded-full shadow-2xl border-4 border-white/50 mx-auto"
                        data-ai-hint="court seal"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                    Gombe State Judiciary e-Affidavit
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                    A seamless and secure platform to apply for, process, and obtain official affidavits online. Built for convenience, speed, and trust.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
                    <Link href="/signup">
                        Get Started Now <ArrowRight className="ml-2" />
                    </Link>
                    </Button>
                </div>
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
                        icon={<EAffidavitIcon />}
                        title="E-Affidavit"
                        description="A written Statement in which a deponent swears oath or affirms his/her Statement."
                    />
                    <FeatureCard
                        icon={<EVerificationIcon />}
                        title="E-Verification"
                        description="Verify all affidavits quickly and securely online, ensuring authenticity and compliance with legal standards."
                    />
                    <FeatureCard
                        icon={<AccreditedAgentsIcon />}
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
