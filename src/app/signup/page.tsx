import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 sm:border sm:rounded-xl">
          <div className="text-center">
            <div className="flex justify-center">
              <Link href="/">
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
              </Link>
            </div>
            <h2 className="mt-6 text-3xl font-bold">Create an account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign up to get started with Brandium
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="hello@example.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" autoCapitalize="none" autoComplete="new-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
            </div>
            <div>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </div>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
