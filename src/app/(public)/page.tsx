import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, FileText, BadgeCheck, Briefcase } from 'lucide-react';
import Image from 'next/image';

const FeatureCard = ({ icon: Icon, title, description, buttonText, buttonLink }: { icon: React.ElementType, title: string, description: string, buttonText?: string, buttonLink?: string }) => {
    return (
        <Card className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-headline">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
            {buttonText && buttonLink && (
                <div className="p-6 pt-0">
                    <Button asChild>
                        <Link href={buttonLink}>{buttonText}</Link>
                    </Button>
                </div>
            )}
        </Card>
    );
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Gombe State Judiciary Building"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="courthouse building"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 max-w-2xl">
          <Image
            src="https://placehold.co/100x100.png"
            alt="Gombe State High Court Logo"
            width={100}
            height={100}
            className="mb-4 rounded-full"
            data-ai-hint="court seal"
          />
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Gombe State Judiciary
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Welcome to the Official Probate and Process Portal of Gombe State. Please use the links below for more information.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/login">
                <LogIn className="mr-2 h-5 w-5" />
                Login
              </Link>
            </Button>
            <Button size="lg" asChild variant="secondary">
              <Link href="/signup">
                <UserPlus className="mr-2 h-5 w-5" />
                Register
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
                icon={FileText}
                title="E-Affidavit"
                description="A written Statement in which a deponent swears oath or affirms his/her Statement."
            />
            <FeatureCard
                icon={BadgeCheck}
                title="E-Verification"
                description="E-Verification allows you to verify all affidavits quickly and securely online, ensuring authenticity and compliance with legal standards."
                buttonText="Verify Affidavit"
                buttonLink="#"
            />
            <FeatureCard
                icon={Briefcase}
                title="Accredited Agents"
                description="Accredited agents are individuals or organizations authorized to assist with submitting requests to the court on behalf of a party."
            />
        </div>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Gombe State Judiciary. Powered by Century Information Systems. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
