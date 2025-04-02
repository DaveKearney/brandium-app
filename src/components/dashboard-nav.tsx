"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { supabase } from '@/lib/auth'

import {
  Briefcase,
  LineChart,
  MessageSquare,
  Layers,
  Search,
  Share2,
  Target,
  Lightbulb,
  Globe,
  ChevronLeft,
  ChevronRight,
  LogOut, 
} from "lucide-react";

export function DashboardNav() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      title: "Inbox",
      href: "/inbox",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Brand",
      href: "/brand",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Vision",
      href: "/vision",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: "Strategy",
      href: "/strategy",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Research",
      href: "/research",
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Content",
      href: "/content",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Social",
      href: "/social",
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      title: "SEO",
      href: "/seo",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Website",
      href: "/website",
      icon: <Layers className="h-5 w-5" />,
    },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleSignOut = async () => {
    console.log('Attempting to sign out');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out error:', error);
      throw error;
    }

    console.log('Successfully signed out');
    window.location.href = "/login";
  };
  
  return (
    <div className={cn(
      "flex flex-col h-full border-r transition-all duration-300",
      isCollapsed ? "w-[70px]" : "w-[240px]"
    )}>
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
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
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-grow py-6">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={isActive(item.href) ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "w-full justify-start",
                  isActive(item.href)
                    ? "bg-secondary text-white hover:bg-secondary/90"
                    : "",
                  isCollapsed && "justify-center px-2"
                )}
                asChild
              >
                <Link href={item.href}>
                  {item.icon}
                  {!isCollapsed && (
                    <span className="ml-2">{item.title}</span>
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
      
      {/* Account Section at bottom */}
      <div className="border-t mt-auto p-4">
        <div className="flex items-center gap-3 mb-3 px-2">
          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-medium truncate">Your Account</p>
            </div>
          )}
        <br />
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start hover:bg-muted"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          {!isCollapsed && <span>Sign out</span>}
        </Button>
        </div>
      </div>
    </div>
  );
}