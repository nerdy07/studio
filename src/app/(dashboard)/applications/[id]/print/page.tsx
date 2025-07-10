'use client';

import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AffidavitDocument } from '@/components/affidavit-document';
import { applications, userProfile } from '@/lib/data';
import { Printer, ArrowLeft } from 'lucide-react';

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

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-t-lg shadow-md no-print">
            <h1 className="text-2xl font-bold text-primary">AFFIDAVIT</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
              <AffidavitDocument application={application} user={userProfile} />
          </div>
          <div className="w-full md:w-1/3 no-print">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4 sticky top-8">
               <Button onClick={handlePrint} className="w-full bg-primary hover:bg-primary/90">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Affidavit
              </Button>
              <Button variant="outline" onClick={() => router.back()} className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4"/>
                  Go Back
              </Button>
            </div>
          </div>
        </div>
        <footer className="text-center text-xs text-muted-foreground mt-8 no-print">
            Powered by Century Information Systems. All rights Reserved
        </footer>
      </div>
    </div>
  );
}
