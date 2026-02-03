import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/google-sheets";

const departments = [
  'CSE',
  'CSE (AI & ML)',
  'CSE (DS)',
  'CSE (CS)',
  'ECE',
  'EE',
  'ME',
  'CE',
  'Other'
];

const categories = [
  'AI / Machine Learning',
  'Web Development',
  'Mobile App',
  'IoT / Hardware',
  'Blockchain',
  'Game Development',
  'Cybersecurity',
  'Other'
];

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'UI/UX Designer',
  'ML Engineer',
  'Data Scientist',
  'DevOps',
  'Other'
];


// Member schema for validation (all fields optional to allow partial validation)
const memberSchema = z.object({
  name: z.string().trim().optional(),
  roll: z.string().trim().optional(),
  dept: z.string().optional(),
  email: z.string().trim().optional(),
  phone: z.string().optional(),
  role: z.string().optional(),
  skills: z.string().optional(),
});

// Main registration schema
const registrationSchema = z.object({
  teamName: z.string().trim().min(1, "Team name is required"),
  teamSize: z.number().min(1).max(5),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password confirmation is required"),
  leaderName: z.string().trim().min(1, "Leader name is required"),
  leaderRoll: z.string().trim().min(1, "Roll number is required"),
  leaderDept: z.string().min(1, "Department is required"),
  leaderEmail: z.string().trim().email("Invalid email format"),
  leaderPhone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  leaderSkills: z.string().optional(),
  members: z.array(memberSchema),
  ideaTitle: z.string().trim().min(1, "Project title is required"),
  category: z.string().min(1, "Category is required"),
  problemStatement: z.string().trim().min(1, "Problem statement is required"),
  ideaDescription: z.string().trim().min(1, "Description is required"),
  techStack: z.string().optional(),
  expectedOutcome: z.string().optional(),
  agreeRules: z.boolean().refine(val => val === true, "You must agree to the rules"),
  previousExperience: z.enum(["Yes", "No"]),
}).superRefine((data, ctx) => {
  // Validate password confirmation
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  }
  // Validate members based on team size
  const requiredMembers = data.teamSize - 1;
  for (let i = 0; i < requiredMembers; i++) {
    const member = data.members[i];
    if (!member) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Member ${i + 2} information is required`,
        path: ["members", i],
      });
      continue;
    }
    if (!member.name?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Name is required",
        path: ["members", i, "name"],
      });
    }
    if (!member.roll?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Roll number is required",
        path: ["members", i, "roll"],
      });
    }
    if (!member.dept) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Department is required",
        path: ["members", i, "dept"],
      });
    }
    if (!member.email?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email is required",
        path: ["members", i, "email"],
      });
    } else if (!/\S+@\S+\.\S+/.test(member.email)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid email format",
        path: ["members", i, "email"],
      });
    }
    if (!member.phone?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone is required",
        path: ["members", i, "phone"],
      });
    } else if (!/^\d{10}$/.test(member.phone)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone must be 10 digits",
        path: ["members", i, "phone"],
      });
    }
  }
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const { toast } = useToast();

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamName: "",
      teamSize: 1,
      password: "",
      confirmPassword: "",
      leaderName: "",
      leaderRoll: "",
      leaderDept: "",
      leaderEmail: "",
      leaderPhone: "",
      leaderSkills: "",
      members: [
        { name: "", roll: "", dept: "", email: "", phone: "", role: "", skills: "" },
        { name: "", roll: "", dept: "", email: "", phone: "", role: "", skills: "" },
        { name: "", roll: "", dept: "", email: "", phone: "", role: "", skills: "" },
        { name: "", roll: "", dept: "", email: "", phone: "", role: "", skills: "" },
      ],
      ideaTitle: "",
      category: "",
      problemStatement: "",
      ideaDescription: "",
      techStack: "",
      expectedOutcome: "",
      agreeRules: false,
      previousExperience: "No",
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "members",
  });

  const teamSize = form.watch("teamSize");

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    try {
      // Generate a unique registration ID
      const registrationId = `HS-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

      // Submit to Google Sheets
      const result = await submitToGoogleSheets({
        ...data,
        registration_id: registrationId,
        submitted_at: new Date().toLocaleString()
      });

      if (!result.success) {
        throw new Error("Failed to sync with Google Sheets");
      }

      localStorage.setItem('lastRegistrationId', registrationId);
      setIsRegistrationComplete(true);
      toast({
        title: "Registration Successful! 🎉",
        description: `Thank you for registering! Your ID: ${registrationId}`,
      });
    } catch (error: any) {
      console.error('Registration error:', error);

      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isRegistrationComplete) {
    return (
      <Layout>
        <section className="py-20 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-lg p-12 max-w-lg mx-auto text-center neon-glow">
              <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h1 className="font-display text-3xl text-primary neon-text mb-4">
                Registration Complete! ✓
              </h1>
              <p className="font-mono text-muted-foreground mb-4">
                Thank you for registering for HackSnippet 4.0
              </p>
              <p className="font-mono text-foreground mb-6">
                Please wait for further information. We'll contact you via email.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded p-4 mb-8">
                <p className="font-mono text-sm text-muted-foreground mb-1">Your Registration ID</p>
                <p className="font-mono text-2xl font-bold text-primary tracking-wider italic">
                  {localStorage.getItem('lastRegistrationId') || 'Processing...'}
                </p>
              </div>
              <Link to="/">
                <Button className="neon-glow font-mono">Back to Home</Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">Team</span> Registration
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              Register your team for HackSnippet 4.0
            </p>
          </div>

          {/* Registration Form */}
          <div className="glass-effect rounded-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Team Information */}
                <div>
                  <h2 className="font-display text-2xl text-primary neon-text mb-6">
                    Team Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="teamName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Team Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your team name"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Team Size *
                          </FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(parseInt(value))}
                            defaultValue={field.value.toString()}
                          >
                            <FormControl>
                              <SelectTrigger className="font-mono bg-background/50">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1" className="font-mono">1 (Solo)</SelectItem>
                              <SelectItem value="2" className="font-mono">2 Members</SelectItem>
                              <SelectItem value="3" className="font-mono">3 Members</SelectItem>
                              <SelectItem value="4" className="font-mono">4 Members</SelectItem>
                              <SelectItem value="5" className="font-mono">5 Members</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Password *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter password (min 6 characters)"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Confirm Password *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Confirm your password"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Team Leader */}
                <div>
                  <h2 className="font-display text-2xl text-primary neon-text mb-6">
                    Team Leader
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="leaderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter full name"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leaderRoll"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Roll Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter roll number"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leaderDept"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Department *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="font-mono bg-background/50">
                                <SelectValue placeholder="Select Department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept} value={dept} className="font-mono">
                                  {dept}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leaderEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Email *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter email"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leaderPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="10-digit phone number"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="leaderSkills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Skills
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., React, Python, ML"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Team Members */}
                {teamSize > 1 && (
                  <div>
                    <h2 className="font-display text-2xl text-primary neon-text mb-6">
                      Team Members
                    </h2>
                    {Array.from({ length: teamSize - 1 }, (_, index) => (
                      <div key={fields[index]?.id} className="mb-8 p-6 glass-effect rounded-lg border border-border/50">
                        <h4 className="font-display text-lg text-primary mb-4">
                          Member {index + 2}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name={`members.${index}.name`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-foreground">
                                  Full Name *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter full name"
                                    className="font-mono bg-background/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`members.${index}.roll`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-foreground">
                                  Roll Number *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter roll number"
                                    className="font-mono bg-background/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`members.${index}.dept`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-foreground">
                                  Department *
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="font-mono bg-background/50">
                                      <SelectValue placeholder="Select Department" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {departments.map((dept) => (
                                      <SelectItem key={dept} value={dept} className="font-mono">
                                        {dept}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`members.${index}.email`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-foreground">
                                  Email *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Enter email"
                                    className="font-mono bg-background/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`members.${index}.phone`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-foreground">
                                  Phone Number *
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="10-digit phone number"
                                    className="font-mono bg-background/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`members.${index}.role`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-mono text-foreground">
                                  Role
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="font-mono bg-background/50">
                                      <SelectValue placeholder="Select Role" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {roles.map((role) => (
                                      <SelectItem key={role} value={role} className="font-mono">
                                        {role}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`members.${index}.skills`}
                            render={({ field }) => (
                              <FormItem className="md:col-span-2">
                                <FormLabel className="font-mono text-foreground">
                                  Skills
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., React, Python, ML"
                                    className="font-mono bg-background/50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="font-mono" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Project Idea */}
                <div>
                  <h2 className="font-display text-2xl text-primary neon-text mb-6">
                    Project Idea
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="ideaTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Project Title *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter project title"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Category *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="font-mono bg-background/50">
                                <SelectValue placeholder="Select Category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat} value={cat} className="font-mono">
                                  {cat}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="problemStatement"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel className="font-mono text-foreground">
                          Problem Statement *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What problem are you solving?"
                            className="font-mono bg-background/50"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ideaDescription"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel className="font-mono text-foreground">
                          Project Description *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your solution"
                            className="font-mono bg-background/50"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="techStack"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Tech Stack
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., React, Node.js, MongoDB"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expectedOutcome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-foreground">
                            Expected Outcome
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What will you deliver?"
                              className="font-mono bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-mono" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div>
                  <h2 className="font-display text-2xl text-primary neon-text mb-6">
                    Agreements
                  </h2>

                  <FormField
                    control={form.control}
                    name="agreeRules"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-mono text-foreground">
                            I agree to the hackathon rules and guidelines *
                          </FormLabel>
                          <FormMessage className="font-mono" />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="previousExperience"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel className="font-mono text-foreground">
                          Previous Hackathon Experience
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-6"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Yes" id="yes" />
                              <label htmlFor="yes" className="font-mono text-sm cursor-pointer">
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="No" id="no" />
                              <label htmlFor="no" className="font-mono text-sm cursor-pointer">
                                No
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="font-mono" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full neon-glow font-mono text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Register Team"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
