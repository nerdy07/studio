'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, FileCheck, FileClock, FileQuestion, FileText, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { applications, userProfile } from '@/lib/data';
import { useState } from 'react';
import { ProfileCompletionDialog } from '@/components/profile-completion-dialog';

const StatCard = ({ title, value, icon: Icon, detail, change }: { title: string, value: string, icon: React.ElementType, detail: string, change?: string }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{detail}</p>
        {change && (
          <div className="flex items-center gap-1 text-xs text-green-600 mt-2">
            <ArrowUpRight className="h-4 w-4" />
            {change}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const chartData = [
  { month: 'January', approved: 18, pending: 12, rejected: 4 },
  { month: 'February', approved: 30, pending: 15, rejected: 5 },
  { month: 'March', approved: 22, pending: 18, rejected: 2 },
  { month: 'April', approved: 45, pending: 20, rejected: 8 },
  { month: 'May', approved: 38, pending: 25, rejected: 5 },
  { month: 'June', approved: 52, pending: 22, rejected: 3 },
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

  const recentActivities = [
    {
      id: 1,
      type: 'New Application',
      description: 'You submitted an Affidavit for Change of Name.',
      time: '2 hours ago',
      icon: FileText
    },
    {
      id: 2,
      type: 'Application Approved',
      description: 'Your Affidavit of Age Declaration was approved.',
      time: '1 day ago',
      icon: FileCheck
    },
    {
      id: 3,
      type: 'Application Queried',
      description: 'Your application for Loss of ID was queried.',
      time: '3 days ago',
      icon: FileQuestion
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userProfile.fullName.split(' ')[0]}!</h1>
            <p className="text-muted-foreground">Here&apos;s a summary of your activities and applications.</p>
          </div>
          <Button onClick={handleCreateAffidavitClick}>
            <Plus className="-ml-1 mr-2 h-4 w-4" />
            New Application
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Applications" value={String(applications.length)} icon={FileText} detail="All time applications" change="+5 this month" />
          <StatCard title="Approved" value={String(applications.filter(a => a.status === 'Approved').length)} icon={FileCheck} detail="Successfully processed" />
          <StatCard title="Pending" value={String(applications.filter(a => a.status === 'Paid').length)} icon={FileClock} detail="Awaiting review" />
          <StatCard title="Queried/Rejected" value={String(applications.filter(a => a.status === 'Rejected').length)} icon={FileQuestion} detail="Require your attention" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Application Overview</CardTitle>
              <CardDescription>A 6-month summary of your application statuses.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="approved" fill="var(--color-approved)" radius={4} />
                  <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
                  <Bar dataKey="rejected" fill="var(--color-rejected)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>A log of your most recent actions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <div className="bg-muted rounded-full p-2">
                      <activity.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
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
