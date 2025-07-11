
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import Image from 'next/image';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
        <Image
            src="https://placehold.co/1920x1080.png"
            alt="Zamfara State Judiciary Building"
            fill
            className="absolute inset-0 z-0 opacity-20 object-cover"
            data-ai-hint="courthouse building"
        />
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="relative z-20 w-full max-w-md">
             <div className="flex justify-center mb-6">
                <Logo />
            </div>
            <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Create an Account</CardTitle>
                <CardDescription>Enter your details to get started.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSignup}>
                <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" type="text" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="08012345678" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                <Button type="submit" className="w-full">Create Account</Button>
                <div className="text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="underline text-primary">
                    Login
                    </Link>
                </div>
                </CardFooter>
            </form>
            </Card>
        </div>
    </div>
  );
}
