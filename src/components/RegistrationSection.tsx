import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2, Loader2 } from "lucide-react";

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL as string | undefined;

const tierOptions = [
  {
    value: "platinum" as const,
    label: "2-Day Full Access",
    price: "1,000 CHF",
    duration: "June 24–25",
    bg: "bg-gradient-to-br from-[hsl(220,8%,78%)] via-[hsl(220,12%,86%)] to-[hsl(215,10%,92%)]",
    text: "text-slate-900",
    border: "border-[hsl(220,10%,80%)]/60",
    ring: "ring-slate-600",
  },
  {
    value: "gold" as const,
    label: "1-Day Full Access",
    price: "500 CHF",
    duration: "June 25",
    bg: "bg-gradient-to-br from-[hsl(43,80%,60%)] to-[hsl(38,70%,75%)]",
    text: "text-amber-950",
    border: "border-amber-400/50",
    ring: "ring-amber-500",
  },
  {
    value: "silver" as const,
    label: "1-Day Summit",
    price: "375 CHF",
    duration: "June 25",
    bg: "bg-gradient-to-br from-[hsl(0,0%,62%)] via-[hsl(0,0%,68%)] to-[hsl(0,0%,58%)]",
    text: "text-white",
    border: "border-[hsl(0,0%,55%)]/50",
    ring: "ring-gray-400",
  },
];

const industries = [
  "Space Agency",
  "Launch Provider",
  "Space Infrastructure",
  "In-Orbit Manufacturing",
  "Life Sciences / Biotech",
  "Investment / Venture Capital",
  "Government / Policy",
  "Research Institution",
  "Other",
];

const formSchema = z.object({
  tier: z.enum(["platinum", "gold", "silver"], {
    errorMap: () => ({ message: "Please select a registration tier above" }),
  }),
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Required").max(200),
  jobTitle: z.string().trim().min(1, "Required").max(200),
  country: z.string().trim().min(1, "Required").max(100),
  industry: z.string().min(1, "Please select an industry"),
  linkedin: z.string().trim().max(500).optional().or(z.literal("")),
  reason: z.string().trim().min(1, "Required").max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge this to submit" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RegistrationSectionProps {
  selectedTier: string;
  sectionRef: React.RefObject<HTMLElement>;
}

const RegistrationSection = ({ selectedTier, sectionRef }: RegistrationSectionProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tier: undefined as unknown as FormValues["tier"],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      country: "",
      industry: "",
      linkedin: "",
      reason: "",
      consent: undefined as unknown as true,
    },
  });

  useEffect(() => {
    if (selectedTier && ["platinum", "gold", "silver"].includes(selectedTier)) {
      form.setValue("tier", selectedTier as FormValues["tier"], { shouldValidate: false });
    }
  }, [selectedTier]);

  const watchedTier = form.watch("tier");

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      if (!WEBHOOK_URL) throw new Error("Webhook not configured");
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="register"
      className="py-16 sm:py-20 md:py-24 px-4 bg-secondary/20"
    >
      <div className="container max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-3 sm:mb-4">
          Register for <span className="text-primary">GOIS 2026</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 sm:mb-12 text-sm sm:text-base">
          Select your pass and complete the form below. Our team will review your application and follow up with confirmation and payment details.
        </p>

        {status === "success" ? (
          <div className="glass-panel rounded-2xl p-10 text-center flex flex-col items-center gap-4 glow-border">
            <CheckCircle2 className="w-16 h-16 text-primary" />
            <h3 className="text-2xl font-display font-bold">Application Received</h3>
            <p className="text-muted-foreground max-w-md">
              The SSIP team will review your request and contact you shortly with confirmation and payment instructions.
            </p>
            <Button className="mt-4 gradient-primary text-primary-foreground font-display tracking-wider rounded-full px-8" onClick={() => setStatus("idle")}>
              Submit Another
            </Button>
          </div>
        ) : (
          <div className="glass-panel rounded-2xl p-6 sm:p-10 glow-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Tier selector */}
                <div>
                  <p className="text-sm font-medium mb-3">Select your pass *</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {tierOptions.map((tier) => (
                      <button
                        key={tier.value}
                        type="button"
                        onClick={() => form.setValue("tier", tier.value, { shouldValidate: true })}
                        className={`${tier.bg} ${tier.text} border ${tier.border} rounded-xl p-4 text-left transition-all duration-150 ${
                          watchedTier === tier.value
                            ? `ring-2 ${tier.ring} scale-[1.02] shadow-lg`
                            : "opacity-60 hover:opacity-85 hover:scale-[1.01]"
                        }`}
                      >
                        <p className="font-display font-bold text-sm leading-snug">{tier.label}</p>
                        <p className="text-xs opacity-70 mt-0.5">{tier.duration}</p>
                        <p className="font-display font-bold text-xl mt-2">{tier.price}</p>
                      </button>
                    ))}
                  </div>
                  {form.formState.errors.tier && (
                    <p className="text-sm text-destructive mt-2">{form.formState.errors.tier.message}</p>
                  )}
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl><Input placeholder="John" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="lastName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl><Input placeholder="Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl><Input placeholder="+41 79 123 4567" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company / Organization *</FormLabel>
                      <FormControl><Input placeholder="SSIP" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="jobTitle" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title *</FormLabel>
                      <FormControl><Input placeholder="CEO" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* Location / Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="country" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <FormControl><Input placeholder="Switzerland" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="industry" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((ind) => (
                            <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                {/* LinkedIn */}
                <FormField control={form.control} name="linkedin" render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile</FormLabel>
                    <FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Reason */}
                <FormField control={form.control} name="reason" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why would you like to attend GOIS 2026? *</FormLabel>
                    <FormControl><Textarea rows={4} placeholder="Tell us about your interest in GOIS 2026..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Consent */}
                <FormField control={form.control} name="consent" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <Label
                        className="text-sm text-muted-foreground font-normal cursor-pointer"
                        onClick={() => field.onChange(!field.value)}
                      >
                        I understand that participation is subject to review and confirmation by the organizers.
                      </Label>
                      <FormMessage />
                    </div>
                  </FormItem>
                )} />

                {status === "error" && (
                  <p className="text-sm text-destructive text-center">
                    Something went wrong. Please try again or contact us at{" "}
                    <a href="mailto:contact@ssip-pl.ch" className="underline">contact@ssip-pl.ch</a>.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full gradient-primary text-primary-foreground font-display tracking-wider rounded-full py-5"
                >
                  {status === "loading" ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</>
                  ) : "Submit Application"}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationSection;
