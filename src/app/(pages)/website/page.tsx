import { Card } from "@/components/ui/card";

export default function WebsitePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Website</h1>
        <p className="text-muted-foreground">
          Manage your brand's website content and performance.
        </p>
      </div>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Website Dashboard</h2>
          <p>Website management tools will appear here.</p>
        </Card>
      </div>
    </div>
  );
}
