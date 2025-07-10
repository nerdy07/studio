'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Plus, Link as LinkIcon, FileText, AlertCircle, FileQuestion, FileCheck } from 'lucide-react';
import { ProfileCompletionDialog } from '@/components/profile-completion-dialog';
import { applications, userProfile } from '@/lib/data';

const StatCard = ({ title, value, icon, link, colorClass }: { title: string, value: number, icon: React.ElementType, link: string, colorClass: string }) => {
  const Icon = icon;
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`w-4 h-4 text-muted-foreground ${colorClass}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
         <Link href={link} className="text-xs text-muted-foreground hover:underline mt-1 block">
          View all
        </Link>
      </CardContent>
    </Card>
  );
}


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

  const pendingApplications = applications.filter(a => a.status === 'Paid').length;
  const queriedApplications = applications.filter(a => a.status === 'Rejected').length;

  return (
    <>
    <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {userProfile.fullName}!</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={handleCreateAffidavitClick}>
                <Plus className="mr-2 h-4 w-4"/>
                New Application
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
                <LinkIcon className="mr-2 h-4 w-4"/>
                Quick Links
            </Button>
        </div>
    </div>
    <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Approved Affidavits" value={applications.filter(a => a.status === 'Approved').length} icon={FileCheck} link="/applications" colorClass="text-green-500" />
            <StatCard title="Total Applications" value={applications.length} icon={FileText} link="/applications" colorClass="text-blue-500"/>
            <StatCard title="Pending Applications" value={pendingApplications} icon={AlertCircle} link="/applications" colorClass="text-orange-500" />
            <StatCard title="Queried Applications" value={queriedApplications} icon={FileQuestion} link="/applications" colorClass="text-red-500"/>
        </div>
    </div>
     <ProfileCompletionDialog open={showProfileDialog} onOpenChange={setShowProfileDialog} />
    </>
  );
}
