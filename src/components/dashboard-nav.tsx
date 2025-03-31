"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
} from "lucide-react";

export function DashboardNav() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      title: "Brand",
      href: "/dashboard/brand",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Vision",
      href: "/dashboard/vision",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      title: "Strategy",
      href: "/dashboard/strategy",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Research",
      href: "/dashboard/research",
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Content",
      href: "/dashboard/content",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Social",
      href: "/dashboard/social",
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      title: "SEO",
      href: "/dashboard/seo",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Website",
      href: "/dashboard/website",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Inbox",
      href: "/dashboard/inbox",
      icon: <MessageSquare className="h-5 w-5" />,
    },
  ];

  return (
    <ScrollArea className="h-full py-6">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Dashboard
        </h2>
        <div className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "w-full justify-start",
                pathname === item.href
                  ? "bg-secondary text-white hover:bg-secondary/90"
                  : ""              )}
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
