import { Card } from "@/components/ui/card";

export default function SEOPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">SEO</h1>
        <p className="text-muted-foreground">
          Optimize your brand's search engine visibility and performance.
        </p>
      </div>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">SEO Dashboard</h2>
          <p>SEO tools and analytics will appear here.</p>
        </Card>
      </div>
    </div>
  );
}
