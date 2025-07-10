
'use client';

import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AffidavitDocument } from '@/components/affidavit-document';
import { applications, userProfile } from '@/lib/data';
import { Printer, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AgentApplicationDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const appId = params.id as string;
  
  const application = applications.find(app => app.id === appId);

  if (!application) {
    return (
      <div className="flex items-center justify-center h-screen">
        Application not found.
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center no-print">
            <h1 className="text-2xl font-bold">Application Details</h1>
            <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => router.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Back to Dashboard
                </Button>
                <Button onClick={handlePrint}>
                    <Printer className="mr-2 h-4 w-4" />
                    Print Affidavit
                </Button>
            </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
             <AffidavitDocument application={application} user={userProfile} />
        </div>
      
        <footer className="text-center text-xs text-muted-foreground mt-8 no-print">
            Powered by Century Information Systems. All rights Reserved
        </footer>
    </div>
  );
}
