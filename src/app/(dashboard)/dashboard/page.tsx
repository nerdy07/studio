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
      <CardHeader className="pb-2">
        <div className="flex justify-end">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}>
                 <Icon className="w-6 h-6 text-white" />
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{value}</p>
        <p className="text-muted-foreground">{title}</p>
        <Link href={link} className="text-sm text-green-600 hover:underline mt-2 inline-block">
          Click to view list...
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
    <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <span>Modules</span>
                        <ChevronRight className="w-4 h-4"/>
                        <span>Affidavit Dashboard</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700" onClick={handleCreateAffidavitClick}>
                        <Plus className="mr-2 h-4 w-4"/>
                        New Application
                    </Button>
                    <Button className="bg-green-700 hover:bg-green-800">
                        <LinkIcon className="mr-2 h-4 w-4"/>
                        Quick Links
                    </Button>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
             <h2 className="text-xl font-bold text-primary-foreground">AFFIDAVIT</h2>
        </div>
    </div>
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Affidavits" value={applications.filter(a => a.status === 'Approved').length} icon={FileCheck} link="/applications" colorClass="bg-green-500" />
            <StatCard title="Total Applications" value={applications.length} icon={FileText} link="/applications" colorClass="bg-blue-500"/>
            <StatCard title="Pending Applications" value={pendingApplications} icon={AlertCircle} link="/applications" colorClass="bg-orange-500" />
            <StatCard title="Queried Applications" value={queriedApplications} icon={FileQuestion} link="/applications" colorClass="bg-red-500"/>
        </div>
    </main>
     <ProfileCompletionDialog open={showProfileDialog} onOpenChange={setShowProfileDialog} />
    </>
  );
}
