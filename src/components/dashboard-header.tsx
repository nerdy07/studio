'use client';

import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Bell } from 'lucide-react';
import { userProfile } from '@/lib/data';
import { Logo } from './logo';

export function DashboardHeader() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center gap-4 bg-primary px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex-none">
        <Logo />
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <div className="relative">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Bell className="h-6 w-6" />
                <span className="sr-only">Notifications</span>
            </Button>
            <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-primary"></div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={userProfile.details.passportPhotoUrl} alt={userProfile.fullName} data-ai-hint="person face" />
                <AvatarFallback>{getInitials(userProfile.fullName)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userProfile.fullName}</p>
                <p className="text-xs leading-none text-muted-foreground">{userProfile.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
         <div className="text-primary-foreground hidden md:block">
            <p className="font-semibold">{userProfile.fullName}</p>
            <p className="text-sm">Party</p>
        </div>
      </div>
    </header>
  );
}
