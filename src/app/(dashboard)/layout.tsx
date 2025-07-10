'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
