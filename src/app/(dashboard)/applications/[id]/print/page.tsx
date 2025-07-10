'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AffidavitDocument } from '@/components/affidavit-document';
import { applications, userProfile } from '@/lib/data';
import { Printer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrintApplicationPage() {
  const params = useParams();
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
    <div>
        <div className="bg-background py-4 px-8 flex justify-between items-center no-print shadow-md">
            <Button variant="outline" asChild>
                <Link href="/applications">
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Back to Applications
                </Link>
            </Button>
            <h1 className="text-lg font-bold font-headline">Print Affidavit</h1>
            <Button onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print Document
            </Button>
        </div>
        <div className="p-4 sm:p-8 md:p-16">
            <AffidavitDocument application={application} user={userProfile} />
        </div>
    </div>
  );
}
