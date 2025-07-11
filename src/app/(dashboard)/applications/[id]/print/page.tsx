
'use client';

import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AffidavitDocument } from '@/components/affidavit-document';
import { applications, userProfile } from '@/lib/data';
import { Printer, ArrowLeft } from 'lucide-react';
import React from 'react';

export default function PrintApplicationPage() {
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
  
  React.useEffect(() => {
    // Automatically trigger print dialog when component mounts
    // setTimeout(handlePrint, 1000);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-t-lg shadow-md no-print flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Print Affidavit</h1>
            <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => router.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Go Back
                </Button>
                <Button onClick={handlePrint} className="w-full bg-primary hover:bg-primary/90">
                    <Printer className="mr-2 h-4 w-4" />
                    Print Affidavit
                </Button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full">
              <AffidavitDocument application={application} user={userProfile} isPrintMode={true}/>
          </div>
        </div>
        <footer className="text-center text-xs text-muted-foreground mt-8 no-print">
            Powered by echobitstech. All rights Reserved
        </footer>
      </div>
    </div>
  );
}
