
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, FileCheck, FileClock, FileQuestion, FileText, Plus, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { applications, userProfile } from '@/lib/data';
import { useState } from 'react';
import { ProfileCompletionDialog } from '@/components/profile-completion-dialog';
import { Input } from '@/components/ui/input';

const StatCard = ({ title, value, icon: Icon }: { title: string, value: string | number, icon: React.ElementType }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

const chartData = [
  { name: 'Approved', value: applications.filter(a => a.status === 'Approved').length, fill: 'var(--color-approved)' },
  { name: 'Pending', value: applications.filter(a => a.status === 'Paid').length, fill: 'var(--color-pending)' },
  { name: 'Rejected', value: applications.filter(a => a.status === 'Rejected').length, fill: 'var(--color-rejected)' },
];

const chartConfig = {
  approved: {
    label: 'Approved',
    color: 'hsl(var(--chart-1))',
  },
  pending: {
    label: 'Pending',
    color: 'hsl(var(--chart-2))',
  },
  rejected: {
    label: 'Rejected',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

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
  
  const totalApplications = applications.length;

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-2">
             <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-card"
              />
            </div>
            <Button onClick={handleCreateAffidavitClick}>
              <Plus className="mr-2 h-4 w-4" />
              New Application
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Applications" value={totalApplications} icon={FileText} />
          <StatCard title="Approved" value={chartData.find(d=>d.name==='Approved')?.value || 0} icon={FileCheck} />
          <StatCard title="Pending" value={chartData.find(d=>d.name==='Pending')?.value || 0} icon={FileClock} />
          <StatCard title="Rejected" value={chartData.find(d=>d.name==='Rejected')?.value || 0} icon={FileQuestion} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Application Stats</CardTitle>
              <CardDescription>A summary of all your application statuses.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ChartContainer config={chartConfig} className="h-[250px] w-full max-w-[300px]">
                <PieChart>
                  <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                     {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>
                You have {applications.length} applications in total.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.slice(0, 3).map((app) => (
                  <div key={app.id} className="flex items-center">
                     <Avatar className="h-9 w-9">
                      <AvatarImage src={`https://placehold.co/36x36/EBF5FF/1D4ED8?text=${userProfile.fullName.split(' ').map(n=>n[0]).join('')}`} alt="Avatar" data-ai-hint="person avatar"/>
                      <AvatarFallback>{userProfile.fullName.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{app.affidavitType}</p>
                      <p className="text-sm text-muted-foreground">
                        {app.id}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{app.status}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <ProfileCompletionDialog open={showProfileDialog} onOpenChange={setShowProfileDialog} />
    </>
  );
}
