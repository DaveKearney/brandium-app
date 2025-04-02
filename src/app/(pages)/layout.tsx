'use client'
import { DashboardNav } from "@/components/dashboard-nav";
import { ThemeProvider } from "@/components/theme-provider";
import AuthenticatedLayout from '@/components/AuthenticatedLayout'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthenticatedLayout>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen">
          <div className="flex h-[calc(100vh)]">
            <DashboardNav />
            <main className="flex-1 overflow-auto p-4">
              {children}
            </main>
          </div>
        </div>
      </ThemeProvider>
    </AuthenticatedLayout>
  );
}