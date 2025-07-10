'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';

interface ProfileCompletionDialogProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export function ProfileCompletionDialog({ open, onOpenChange }: ProfileCompletionDialogProps) {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Your Profile</AlertDialogTitle>
          <AlertDialogDescription>
            Your profile is incomplete. Please update your profile information before you can create a new affidavit.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => router.push('/profile')}>
            Go to Profile
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
