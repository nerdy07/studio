'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FilePlus, FileText } from 'lucide-react';
import { ProfileCompletionDialog } from '@/components/profile-completion-dialog';
import { applications, userProfile } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  const [isProfileComplete] = useState(userProfile.isProfileComplete);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const router = useRouter();

  const handleCreateAffidavitClick = () => {
    if (isProfileComplete) {
      router.push('/affidavits/new');
    } else {
      setShowProfileDialog(true);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome, {userProfile.fullName}!</h1>
        <p className="text-muted-foreground">Here&apos;s a summary of your activities.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 bg-primary text-primary-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <FilePlus className="w-8 h-8" />
              <span>Start a New Application</span>
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Ready to begin? Complete your profile to create a new affidavit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              size="lg" 
              onClick={handleCreateAffidavitClick}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Create New Affidavit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <CardTitle>Application Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Applications</span>
                <span className="font-bold text-2xl">{applications.length}</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Approved</span>
                <span className="font-bold text-2xl text-green-600">{applications.filter(a => a.status === 'Approved').length}</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Pending</span>
                <span className="font-bold text-2xl text-orange-500">{applications.filter(a => a.status !== 'Approved' && a.status !== 'Rejected').length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>A quick look at your most recent submissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {applications.slice(0, 3).map((app) => (
              <li key={app.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">{app.affidavitType}</p>
                    <p className="text-sm text-muted-foreground">Ref: {app.id}</p>
                  </div>
                </div>
                <Badge variant={
                    app.status === 'Approved' ? 'default' :
                    app.status === 'Paid' ? 'secondary' :
                    app.status === 'Draft' ? 'outline' :
                    'destructive'
                } className={cn(
                    app.status === 'Approved' && 'bg-green-600 text-white',
                )}>{app.status}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <ProfileCompletionDialog open={showProfileDialog} onOpenChange={setShowProfileDialog} />
    </div>
  );
}
