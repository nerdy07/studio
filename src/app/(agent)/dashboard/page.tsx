'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FilePlus, Search, Users, FileCheck, Clock, FileX } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

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

const recentApplications = [
  { id: 'CL-001', name: 'Amina Yusuf', type: 'Change of Name', status: 'Approved' },
  { id: 'CL-002', name: 'Bello Ibrahim', type: 'Age Declaration', status: 'Pending' },
  { id: 'CL-003', name: 'Chidinma Okoro', type: 'Loss of Document', status: 'Approved' },
  { id: 'CL-004', name: 'David Adewale', type: 'Proof of Ownership', status: 'Rejected' },
  { id: 'CL-005', name: 'Fatima Garba', type: 'Change of Name', status: 'Pending' },
];

export default function AgentDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-semibold">Agent Dashboard</h1>
            <p className="text-muted-foreground">Manage applications on behalf of your clients.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <FilePlus className="mr-2 h-4 w-4" />
            New Application
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Clients" value="24" icon={Users} />
        <StatCard title="Approved Applications" value="48" icon={FileCheck} />
        <StatCard title="Pending Applications" value="12" icon={Clock} />
        <StatCard title="Rejected Applications" value="3" icon={FileX} />
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Recent Client Applications</CardTitle>
            <CardDescription>An overview of the latest applications you have submitted.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search clients or applications..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-card"
                />
              </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client ID</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Application Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.id}</TableCell>
                  <TableCell>{app.name}</TableCell>
                  <TableCell>{app.type}</TableCell>
                  <TableCell>
                    <Badge variant={
                        app.status === 'Approved' ? 'default' :
                        app.status === 'Pending' ? 'secondary' :
                        'destructive'
                    } className={
                        app.status === 'Approved' ? 'bg-green-600 text-white' :
                        app.status === 'Pending' ? 'bg-yellow-500 text-white' :
                        ''
                    }>{app.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">View Details</Button>
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
