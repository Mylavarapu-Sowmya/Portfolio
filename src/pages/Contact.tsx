import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { developerInfo } from "@/data/developer";
import { ContactForm } from "@/components/forms/ContactForm";
import { Separator } from "@/components/ui/separator";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Contact page with form and contact information
 * Features validated contact form and availability status
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${developerInfo.name} for collaborations, job opportunities, and project inquiries. ${developerInfo.availability}`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border bg-gradient-to-br from-background via-background to-accent/20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 bg-primary/10 text-primary border-primary/20"
              >
                {developerInfo.availability}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Get in Touch
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? I'd love
                to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                className="lg:col-span-3 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-accent/10">
                  <CardContent className="pt-6">
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Contact Info
                  </h2>
                  <p className="text-muted-foreground">
                    Prefer to reach out directly? Here's how you can contact me.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <Card className="group hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Mail className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">
                          Email
                        </p>
                        <a
                          href={`mailto:${developerInfo.email}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {developerInfo.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="group hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Phone className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">
                          Phone
                        </p>
                        <a
                          href={`tel:${developerInfo.phone}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {developerInfo.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card className="group hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <MapPin className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">
                          Location
                        </p>
                        <p className="font-medium">
                          {developerInfo.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Connect with me</h3>
                  <div className="flex gap-4">
                    {developerInfo.socialLinks?.github && (
                      <a
                        href="https://github.com/Mylavarapu-Sowmya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-border hover:bg-accent hover:border-primary/20 transition-all duration-300"
                        aria-label="GitHub"
                      >
                        <Github className="size-6" />
                      </a>
                    )}

                    {developerInfo.socialLinks?.linkedin && (
                      <a
                        href="https://www.linkedin.com/in/sowmya-mylavarapu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-border hover:bg-accent hover:border-primary/20 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="size-6" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
