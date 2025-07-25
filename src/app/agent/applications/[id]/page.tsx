
'use client';

import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AffidavitDocument } from '@/components/affidavit-document';
import { applications, userProfile } from '@/lib/data';
import { Printer, ArrowLeft } from 'lucide-react';
import AgentLayout from '../../layout';

export default function AgentApplicationDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const appId = params.id as string;
  
  const application = applications.find(app => app.id === appId);

  if (!application) {
    return (
      <AgentLayout>
        <div className="flex items-center justify-center h-full">
          Application not found.
        </div>
      </AgentLayout>
    );
  }

  const handlePrint = () => {
    const printWindow = window.open(`/applications/${appId}/print`, '_blank');
    printWindow?.focus();
  };

  return (
    <AgentLayout>
        <div className="space-y-6">
        <div className="flex justify-between items-center">
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

            <div className="bg-gray-100 p-8 rounded-lg print-container">
                <AffidavitDocument application={application} user={userProfile} isPrintMode={false} />
            </div>
        
            <footer className="text-center text-xs text-muted-foreground mt-8">
                Powered by <a href="https://echobitstech.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">echobitstech</a>. All rights Reserved
            </footer>
        </div>
    </AgentLayout>
  );
}
