import { Card } from "@/components/ui/card";

export default function InboxPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Inbox</h1>
        <p className="text-muted-foreground">
          View and manage your messages and notifications.
        </p>
      </div>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <p>Your messages will appear here.</p>
        </Card>
      </div>
    </div>
  );
}
