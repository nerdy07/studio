'use client';

import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { affidavitTypes } from '@/lib/data';

export default function AffidavitFormPage() {
  const router = useRouter();
  const params = useParams();
  const typeId = params.type as string;

  const affidavitType = affidavitTypes
    .flatMap((category) => category.types)
    .find((type) => type.id === typeId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save form data as a 'Draft' would go here.
    router.push('/applications');
  };

  if (!affidavitType) {
    return <div>Affidavit type not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">{affidavitType.name}</h1>
        <p className="text-muted-foreground">Please fill in the required details below.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
            <CardDescription>All fields are required. Please ensure accuracy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* This is a sample form. A real app would have dynamic fields. */}
            {typeId === 'change-of-name' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="oldName">Old Full Name</Label>
                  <Input id="oldName" placeholder="Enter your previous full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newName">New Full Name</Label>
                  <Input id="newName" placeholder="Enter your new full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Change</Label>
                  <Input id="reason" placeholder="e.g., Marital status, personal preference" required />
                </div>
              </>
            )}
             {typeId !== 'change-of-name' && (
              <p className="text-center text-muted-foreground p-8">
                Form fields for &quot;{affidavitType.name}&quot; would be displayed here.
              </p>
            )}
            <div className="flex justify-end pt-4">
              <Button type="submit">Submit Application</Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
