import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarPlus, Clock, Send } from "lucide-react";
import { z } from "zod";

const TABLES = [
  { id: "1", label: "Table 1, Orbital Infrastructure" },
  { id: "2", label: "Table 2, Life Sciences in Space" },
  { id: "3", label: "Table 3, Advanced Manufacturing" },
  { id: "4", label: "Table 4, Investment & International Growth" },
  { id: "5", label: "Table 5, Future Infrastructure & Exploration" },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company required").max(160),
  position: z.string().trim().min(1, "Position required").max(160),
  table: z.string().min(1, "Please choose a table"),
  notes: z.string().max(800).optional(),
});

interface BookMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  speakerName: string;
  speakerOrg?: string;
}

const BookMeetingDialog = ({ open, onOpenChange, speakerName, speakerOrg }: BookMeetingDialogProps) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", position: "", table: "", notes: "" });
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please complete all required fields.");
      return;
    }
    setError(null);
    const tableLabel = TABLES.find((t) => t.id === form.table)?.label ?? form.table;
    const subject = `GOIS 2026, Meeting Request with ${speakerName}`;
    const body = [
      `Meeting Request, GOIS Executive B2B Matchmaking`,
      `Date: June 24, 2026`,
      `Time: 16:20 to 17:00 CET`,
      `Speaker: ${speakerName}${speakerOrg ? ` (${speakerOrg})` : ""}`,
      `Requested Table: ${tableLabel}`,
      ``,
      `Requester:`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Position: ${form.position}`,
      ``,
      `Notes:`,
      form.notes || "(none)",
    ].join("\n");
    window.location.href = `mailto:contact@ssip-pl.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg glass-panel border-primary/30">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <CalendarPlus className="w-5 h-5 text-primary" />
            Book a Meeting
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Request a 1:1 introduction with <span className="text-foreground font-medium">{speakerName}</span> during the GOIS Executive B2B Matchmaking session.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 flex items-start gap-3">
          <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-display">Session</p>
            <p className="text-sm text-foreground font-medium">16:20 to 17:00, GOIS Executive B2B Matchmaking</p>
            <p className="text-xs text-muted-foreground">June 24, 2026, Technopark Luzern</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="bm-name">Full Name</Label>
            <Input id="bm-name" value={form.name} onChange={(e) => update("name")(e.target.value)} maxLength={120} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bm-email">Email</Label>
            <Input id="bm-email" type="email" value={form.email} onChange={(e) => update("email")(e.target.value)} maxLength={255} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bm-company">Company</Label>
            <Input id="bm-company" value={form.company} onChange={(e) => update("company")(e.target.value)} maxLength={160} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="bm-position">Position</Label>
            <Input id="bm-position" value={form.position} onChange={(e) => update("position")(e.target.value)} maxLength={160} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="bm-table">Preferred Table</Label>
            <Select value={form.table} onValueChange={update("table")}>
              <SelectTrigger id="bm-table">
                <SelectValue placeholder="Choose a roundtable" />
              </SelectTrigger>
              <SelectContent>
                {TABLES.map((t) => (
                  <SelectItem key={t.id} value={t.id}>{t.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="bm-notes">Topics or Notes (optional)</Label>
            <Textarea id="bm-notes" value={form.notes} onChange={(e) => update("notes")(e.target.value)} maxLength={800} rows={3} placeholder="What would you like to discuss?" />
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-full">Cancel</Button>
          <Button onClick={submit} className="gradient-primary text-primary-foreground font-display tracking-wider rounded-full">
            <Send className="w-4 h-4 mr-2" />
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookMeetingDialog;
