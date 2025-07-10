'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('citizen');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd have auth logic here.
    // On success, redirect based on the selected role.
    if (role === 'agent') {
      router.push('/agent/dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <RadioGroup defaultValue="citizen" onValueChange={setRole} className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="citizen" id="citizen" className="peer sr-only" />
              <Label
                htmlFor="citizen"
                className={cn(
                    "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                    role === 'citizen' && "border-primary"
                )}
              >
                Citizen
              </Label>
            </div>
            <div>
              <RadioGroupItem value="agent" id="agent" className="peer sr-only" />
              <Label
                htmlFor="agent"
                 className={cn(
                    "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                    role === 'agent' && "border-primary"
                )}
              >
                Agent
              </Label>
            </div>
          </RadioGroup>
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
          <Button type="submit" className="w-full">Login</Button>
          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline text-primary">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
