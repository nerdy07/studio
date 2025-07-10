
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UploadCloud } from 'lucide-react';
import { userProfile } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const [profile, setProfile] = useState(userProfile.details);
  
  // A mock state to simulate if any affidavit has been approved.
  const [isLocked] = useState(false); 
  const router = useRouter();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveChanges = () => {
    // In a real app, you would have an API call here to save the data.
    // We'll just simulate it.
    toast({
      title: "Profile Updated",
      description: "Your personal information has been saved.",
    });

    // Mark profile as complete after first save.
    // In a real app, this would be based on server state.
    userProfile.isProfileComplete = true;

    setTimeout(() => {
      router.push('/affidavits/new');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and documents.</p>
        {isLocked && (
            <p className="text-sm text-destructive mt-2">Your profile is locked for editing because you have an approved affidavit.</p>
        )}
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nin">National Identification Number (NIN)</Label>
                  <Input id="nin" value={profile.nin} onChange={handleInputChange} disabled={isLocked} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" value={profile.occupation} onChange={handleInputChange} disabled={isLocked} />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={profile.gender} onValueChange={handleSelectChange('gender')} disabled={isLocked}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="religion">Religion</Label>
                  <Select value={profile.religion} onValueChange={handleSelectChange('religion')} disabled={isLocked}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="christianity">Christianity</SelectItem>
                      <SelectItem value="islam">Islam</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="state">State of Origin</Label>
                  <Input id="state" value={profile.state} onChange={handleInputChange} disabled={isLocked} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lga">LGA</Label>
                  <Input id="lga" value={profile.lga} onChange={handleInputChange} disabled={isLocked} />
                </div>
              </div>
               <div className="space-y-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Input id="address" value={profile.address} onChange={handleInputChange} disabled={isLocked} />
                </div>
                 <div className="flex justify-end">
                    <Button onClick={handleSaveChanges} disabled={isLocked}>Save and Continue</Button>
                </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
             <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Upload your identification and signature.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DocumentUploadField label="Passport Photo" currentImage={profile.passportPhotoUrl} isLocked={isLocked} aiHint="person face" />
                    <DocumentUploadField label="ID Card" currentImage={profile.idCardUrl} isLocked={isLocked} aiHint="identification card" />
                    <DocumentUploadField label="Signature" currentImage={profile.signatureUrl} isLocked={isLocked} aiHint="signature" />
                </div>
                 <div className="flex justify-end">
                    <Button onClick={handleSaveChanges} disabled={isLocked}>Save and Continue</Button>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function DocumentUploadField({ label, currentImage, isLocked, aiHint }: { label: string, currentImage: string, isLocked: boolean, aiHint: string }) {
    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            <div className="aspect-video rounded-md border border-dashed flex items-center justify-center relative overflow-hidden">
                {currentImage ? (
                    <Image src={currentImage} alt={label} layout="fill" objectFit="cover" data-ai-hint={aiHint}/>
                ) : (
                    <div className="text-center text-muted-foreground">
                        <UploadCloud className="mx-auto h-10 w-10"/>
                        <p className="text-sm mt-2">No image uploaded</p>
                    </div>
                )}
            </div>
            <Input type="file" className="text-sm" disabled={isLocked} />
        </div>
    );
}

