'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Printer, CreditCard, Eye } from 'lucide-react';
import { applications as initialApplications, Application } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<Application[]>(initialApplications);
    const { toast } = useToast();
    const router = useRouter();


    const handlePayment = (appId: string) => {
        // Simulate payment API call
        toast({
            title: "Processing Payment...",
            description: "Please wait while we process your payment.",
        });

        setTimeout(() => {
            setApplications(prevApps =>
                prevApps.map(app =>
                    app.id === appId ? { ...app, status: 'Paid', paymentStatus: 'Paid' } : app
                )
            );
            toast({
                title: "Payment Successful!",
                description: `Payment for application ${appId} has been confirmed.`,
            });
        }, 2000);
    };

    const handlePreview = (appId: string) => {
        router.push(`/applications/${appId}/print`);
    };


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Applications</h1>
        <p className="text-muted-foreground">Track and manage all your affidavit applications.</p>
      </div>
      <Card>
         <CardHeader>
            <CardTitle>Application History</CardTitle>
            <CardDescription>A list of all your submitted applications.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Reference ID</TableHead>
                    <TableHead>Affidavit Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {applications.map((app) => (
                    <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.id}</TableCell>
                    <TableCell>{app.affidavitType}</TableCell>
                    <TableCell>{app.date}</TableCell>
                    <TableCell>
                        <Badge variant={
                            app.status === 'Approved' ? 'default' :
                            app.status === 'Paid' ? 'secondary' :
                            app.status === 'Draft' ? 'outline' :
                            'destructive'
                        } className={cn(
                            app.status === 'Approved' && 'bg-green-600 text-white hover:bg-green-700',
                            app.status === 'Rejected' && 'bg-red-600 text-white hover:bg-red-700'
                        )}>{app.status}</Badge>
                    </TableCell>
                    <TableCell>
                         <Badge variant={app.paymentStatus === 'Paid' ? 'default' : 'outline'} className={cn(app.paymentStatus === 'Paid' && 'bg-blue-500 text-white hover:bg-blue-600')}>{app.paymentStatus}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handlePreview(app.id)}>
                                <Eye className="mr-2 h-4 w-4" />
                                Preview Sample
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                                onClick={() => handlePayment(app.id)}
                                disabled={app.status !== 'Draft'}
                            >
                                <CreditCard className="mr-2 h-4 w-4" />
                                Proceed to Payment
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                                onClick={() => handlePreview(app.id)}
                                disabled={app.status !== 'Approved'}
                            >
                                <Printer className="mr-2 h-4 w-4" />
                                Print Affidavit
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
