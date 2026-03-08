import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { CheckCircle2 } from "lucide-react";

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
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Company / Organization is required").max(200),
  jobTitle: z.string().trim().min(1, "Job title is required").max(200),
  country: z.string().trim().min(1, "Country is required").max(100),
  industry: z.string().min(1, "Please select an industry"),
  linkedin: z.string().trim().max(500).optional().or(z.literal("")),
  reason: z.string().trim().min(1, "Please tell us why you'd like to attend").max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge this to submit" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RegistrationFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationFormDialog = ({ open, onOpenChange }: RegistrationFormDialogProps) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent("GOIS 2026: Attendance Application");
    const body = encodeURIComponent(
      `GOIS 2026: Attendance Application\n\n` +
      `First Name: ${data.firstName}\n` +
      `Last Name: ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || "N/A"}\n` +
      `Company / Organization: ${data.company}\n` +
      `Job Title: ${data.jobTitle}\n` +
      `Country: ${data.country}\n` +
      `Industry: ${data.industry}\n` +
      `LinkedIn: ${data.linkedin || "N/A"}\n\n` +
      `Why would you like to attend GOIS 2026?\n${data.reason}`
    );
    window.open(`mailto:contact@ssip-pl.ch?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
  };

  const handleClose = (value: boolean) => {
    if (!value) {
      setSubmitted(false);
      form.reset();
    }
    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <CheckCircle2 className="w-16 h-16 text-primary" />
            <DialogTitle className="text-2xl font-display font-bold">
              Thank you for your application.
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base max-w-md">
              The SSIP team will review your request and contact you shortly.
            </DialogDescription>
            <Button className="mt-4" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-display font-bold">
                GOIS 2026 — Attendance Application
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                The Global Orbital Infrastructure Summit is a curated, invitation-only event.
                Please submit the application below to request participation.
                Our team will review your request and contact you with confirmation and payment instructions.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl><Input placeholder="John" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl><Input placeholder="Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="+41 79 123 4567" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Organization *</FormLabel>
                        <FormControl><Input placeholder="SSIP" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title *</FormLabel>
                        <FormControl><Input placeholder="CEO" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country *</FormLabel>
                        <FormControl><Input placeholder="Switzerland" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((ind) => (
                              <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile</FormLabel>
                      <FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why would you like to attend GOIS 2026? *</FormLabel>
                      <FormControl><Textarea rows={4} placeholder="Tell us about your interest..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <Label className="text-sm text-muted-foreground font-normal cursor-pointer" onClick={() => field.onChange(!field.value)}>
                          I understand that participation is subject to review and confirmation by the organizers.
                        </Label>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full gradient-primary text-primary-foreground font-display tracking-wider rounded-full py-5">
                  Submit Application
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationFormDialog;
