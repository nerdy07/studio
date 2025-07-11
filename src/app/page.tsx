
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, ArrowRight, CheckCircle, Edit3, FileText } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/logo';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
    return (
        <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary/10">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-primary">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{description}</p>
                </div>
            </div>
        </div>
    );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
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
        <section className="relative py-20 md:py-32 overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-5">
                <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Abstract background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                    data-ai-hint="abstract pattern"
                />
                 <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>
            </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                     <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
                        Modern Affidavits, <br />
                        Simplified.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                        A seamless and secure platform to apply for, process, and obtain official affidavits online. Built for convenience, speed, and trust.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform hover:scale-105 transition-transform">
                            <Link href="/signup">
                                Get Started <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                         <Button size="lg" variant="outline" asChild>
                            <Link href="#how-it-works">
                                Learn More
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <Card className="shadow-2xl hover:shadow-primary/20 transition-shadow duration-500 bg-card/80 backdrop-blur-md border-primary/20 transform-gpu rotate-3 hover:rotate-1">
                        <CardHeader>
                            <CardTitle className="text-primary">E-Affidavit Application</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                                <Image src="https://placehold.co/40x40.png" alt="User Avatar" width={40} height={40} className="rounded-full" data-ai-hint="person avatar"/>
                                <div>
                                    <p className="font-semibold text-sm">Musa Adekunle</p>
                                    <p className="text-xs text-muted-foreground">Affidavit for Change of Name</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4 p-3 bg-green-500/10 text-green-700 rounded-lg border border-green-500/20">
                                <CheckCircle className="w-6 h-6"/>
                                <div>
                                    <p className="font-semibold text-sm">Status: Approved</p>
                                    <p className="text-xs">Your document is ready for download.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
             </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">A Simple, Secure Process</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Obtain your official affidavit in just three easy steps.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                         <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4 border-2 border-primary/20">1</div>
                         <h3 className="text-xl font-bold text-primary mb-2">Create Account</h3>
                         <p className="text-muted-foreground">Sign up with your details to create a secure personal account.</p>
                    </div>
                     <div className="flex flex-col items-center">
                         <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4 border-2 border-primary/20">2</div>
                         <h3 className="text-xl font-bold text-primary mb-2">Fill Application</h3>
                         <p className="text-muted-foreground">Select the affidavit type you need and fill in the required information accurately.</p>
                    </div>
                     <div className="flex flex-col items-center">
                         <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4 border-2 border-primary/20">3</div>
                         <h3 className="text-xl font-bold text-primary mb-2">Download & Print</h3>
                         <p className="text-muted-foreground">Once approved, make your payment and instantly download the official document.</p>
                    </div>
                </div>
            </div>
        </section>

         <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Everything You Need</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Our platform provides secure and efficient digital solutions for all your needs.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<FileText className="w-6 h-6" />}
                        title="E-Affidavit"
                        description="A written Statement in which a deponent swears oath or affirms his/her Statement."
                    />
                    <FeatureCard
                        icon={<CheckCircle className="w-6 h-6" />}
                        title="E-Verification"
                        description="Verify all affidavits quickly and securely online, ensuring authenticity and compliance."
                    />
                    <FeatureCard
                        icon={<UserPlus className="w-6 h-6" />}
                        title="Accredited Agents"
                        description="Authorized individuals to submit requests to the court on your behalf."
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
