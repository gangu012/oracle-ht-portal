import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MessageSquare, Clock, Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  severity: z.string().min(1, "Please select escalation severity"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      severity: "",
      message: "",
    },
  });

  const submitEscalationMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/escalations", data);
    },
    onSuccess: () => {
      toast({
        title: "Escalation Submitted",
        description: "Your escalation request has been submitted successfully. Our team will contact you shortly.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit escalation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    submitEscalationMutation.mutate(data);
  };

  const handleSlackJoin = () => {
    window.open("https://oracle.slack.com/channels/ht-escalation-team", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need immediate escalation support? Our team is ready to respond to your critical issues 24/7.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4" data-testid="contact-phone">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Emergency Hotline</div>
                      <div className="text-muted-foreground">+1 (800) ORACLE-1</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-email">
                    <div className="bg-secondary text-secondary-foreground rounded-lg p-3">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email Support</div>
                      <div className="text-muted-foreground">ht-escalation@oracle.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-slack">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Slack Channel</div>
                      <div className="text-muted-foreground">#ht-escalation-team</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent rounded-xl p-6" data-testid="response-guarantee">
                <h4 className="font-semibold text-accent-foreground mb-3 flex items-center">
                  <Clock className="mr-2" size={20} />
                  Response Time Guarantee
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Severity 1: 15 minutes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Severity 2: 1 hour
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Severity 3: 4 hours
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Submit Escalation Request</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-escalation">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email address" 
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="severity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Escalation Severity *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-severity">
                              <SelectValue placeholder="Select severity level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Severity 1 - Critical</SelectItem>
                            <SelectItem value="2">Severity 2 - High</SelectItem>
                            <SelectItem value="3">Severity 3 - Medium</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5}
                            placeholder="Describe the issue and its business impact..." 
                            className="resize-none"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={submitEscalationMutation.isPending}
                    data-testid="button-submit-escalation"
                  >
                    {submitEscalationMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="mr-2" size={16} />
                        Submit Escalation Request
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
