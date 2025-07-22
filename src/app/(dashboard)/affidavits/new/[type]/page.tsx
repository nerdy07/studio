"use client";

import { useParams, useRouter } from "next/navigation";
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
import { affidavitTypes } from "@/lib/data";
import { Logo } from "@/components/logo";

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
    router.push("/applications");
  };

  if (!affidavitType) {
    return <div>Affidavit type not found.</div>;
  }

  return (
    <div className="bg-[#f5f6fa] flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-6xl h-[550px]">
        {/* Left Panel */}
        <div
          className="relative hidden md:flex flex-col justify-between bg-cover bg-center text-white p-10"
          style={{ backgroundImage: "url('/assets/law-and-justice.webp')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-0 rounded-l-2xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
              {affidavitType.name}
            </h1>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex justify-center px-4 py-12 scrollbar-hidden overflow-y-auto">
          <div className="w-full max-w-3xl space-y-10 h-auto">
            {/* Header */}
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">
                Please fill in the required details below.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                  <CardDescription>
                    All fields are required. Please ensure accuracy.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {typeId === "change-of-name" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="oldName">Old Full Name</Label>
                        <Input
                          id="oldName"
                          placeholder="Enter your previous full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newName">New Full Name</Label>
                        <Input
                          id="newName"
                          placeholder="Enter your new full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reason">Reason for Change</Label>
                        <Input
                          id="reason"
                          placeholder="e.g., Marital status, personal preference"
                          required
                        />
                      </div>
                    </>
                  )}

                  {typeId !== "change-of-name" && (
                    <p className="text-center text-muted-foreground p-8">
                      Form fields for &quot;{affidavitType.name}&quot; would be
                      displayed here.
                    </p>
                  )}

                  <div className="flex justify-end pt-4">
                    <Button type="submit">Submit Application</Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
