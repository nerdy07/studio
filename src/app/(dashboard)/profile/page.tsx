"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadCloud } from "lucide-react";
import { userProfile } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import FormField from "@/components/ui/FormField";
import { Logo } from "@/components/logo";

export default function ProfilePage() {
  const [profile, setProfile] = useState(userProfile.details);

  // A mock state to simulate if any affidavit has been approved.
  const [isLocked] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    setProfile((prev) => ({ ...prev, [id]: value }));
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
      router.push("/affidavits/new");
    }, 1500);
  };

  return (
    <div className="  bg-[#f5f6fa] flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-6xl h-[550px] ">
        {/* Left Panel */}
        <div
          className="relative hidden md:flex flex-col justify-between bg-cover bg-center text-white p-10"
          style={{ backgroundImage: "url('/assets/user.webp')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0 rounded-l-2xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <Logo />
            <div className="space-y-4 mt-auto text-foreground">
              <blockquote className="text-lg font-semibold leading-snug">
                Judicial Services, Simplified and Secure.
              </blockquote>
              <p className="text-sm text-black/80">
                The official Zamfara State Judiciary platform for seamless and
                secure online legal services. Built for convenience, speed, and
                trust.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}

        <div className="flex justify-center px-4 py-12  scrollbar-hidden overflow-y-auto ">
          <div className="w-full max-w-3xl space-y-10 h-auto">
            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight font-headline">
                My Profile
              </h1>
              <p className="text-muted-foreground text-sm">
                Manage your personal information and documents.
              </p>
              {isLocked && (
                <div className="text-sm text-destructive mt-2">
                  Your profile is locked for editing because you have an
                  approved affidavit.
                </div>
              )}
            </div>
            {/* Tabs Card */}
            <div className="rounded-lg p-6 bg-white">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid grid-cols-2 w-full bg-muted p-1 rounded-md mb-6">
                  <TabsTrigger value="personal">
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                {/* Personal Info Tab */}
                <TabsContent value="personal">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="National Identification Number (NIN)"
                        id="nin"
                        value={profile.nin}
                        onChange={handleInputChange}
                        disabled={isLocked}
                      />
                      <FormField
                        label="Occupation"
                        id="occupation"
                        value={profile.occupation}
                        onChange={handleInputChange}
                        disabled={isLocked}
                      />
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          value={profile.gender}
                          onValueChange={handleSelectChange("gender")}
                          disabled={isLocked}
                        >
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
                        <Select
                          value={profile.religion}
                          onValueChange={handleSelectChange("religion")}
                          disabled={isLocked}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select religion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="christianity">
                              Christianity
                            </SelectItem>
                            <SelectItem value="islam">Islam</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormField
                        label="State of Origin"
                        id="state"
                        value={profile.state}
                        onChange={handleInputChange}
                        disabled={isLocked}
                      />
                      <FormField
                        label="LGA"
                        id="lga"
                        value={profile.lga}
                        onChange={handleInputChange}
                        disabled={isLocked}
                      />
                    </div>
                    <FormField
                      label="Residential Address"
                      id="address"
                      value={profile.address}
                      onChange={handleInputChange}
                      disabled={isLocked}
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleSaveChanges} disabled={isLocked}>
                        Save and Continue
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                {/* Documents Tab */}
                <TabsContent value="documents">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <DocumentUploadField
                        label="Passport Photo"
                        currentImage={profile.passportPhotoUrl}
                        isLocked={isLocked}
                        aiHint="person face"
                      />
                      <DocumentUploadField
                        label="ID Card"
                        currentImage={profile.idCardUrl}
                        isLocked={isLocked}
                        aiHint="identification card"
                      />
                      <DocumentUploadField
                        label="Signature"
                        currentImage={profile.signatureUrl}
                        isLocked={isLocked}
                        aiHint="signature"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={handleSaveChanges} disabled={isLocked}>
                        Save and Continue
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentUploadField({
  label,
  currentImage,
  isLocked,
  aiHint,
}: {
  label: string;
  currentImage: string;
  isLocked: boolean;
  aiHint: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="aspect-video rounded-md border border-dashed flex items-center justify-center relative overflow-hidden">
        {currentImage ? (
          <Image
            src={currentImage}
            alt={label}
            layout="fill"
            objectFit="cover"
            data-ai-hint={aiHint}
          />
        ) : (
          <div className="text-center text-muted-foreground">
            <UploadCloud className="mx-auto h-10 w-10" />
            <p className="text-sm mt-2">No image uploaded</p>
          </div>
        )}
      </div>
      <Input type="file" className="text-sm" disabled={isLocked} />
    </div>
  );
}
