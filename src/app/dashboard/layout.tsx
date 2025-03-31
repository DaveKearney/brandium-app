import { DashboardNav } from "@/components/dashboard-nav";
import { UserNav } from "@/components/user-nav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#106D7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 6-1 2-3 4-5.5 5.5-2.5 1.5-5.5 2-8 1.5-2.5-.5-4.5-2-6-4.5C-1 17 .5 13 2 10c1.5-3 4-6 7-7.5C12 1 15 1 17.5 2.5c2.5 1.5 4 4.5 4.5 7.5.5 3-1 6-3 8.5" />
              <path d="M13 13c-2 2-4 4-6 4" />
              <path d="M14 6c-1.5 1.5-3 3.5-4 6.5-1 3-1 5.5 0 8" />
            </svg>
            <span className="text-xl font-bold">Brandium</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r md:block">
          <DashboardNav />
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
