  import { motion } from 'framer-motion';
  import { Github, Linkedin, MapPin, Mail, Phone, Briefcase, GraduationCap, Award, Star } from 'lucide-react';
  import { developerInfo } from '@/data/developer';
  import { Separator } from '@/components/ui/separator';
  import { SEOHead } from '@/components/seo/SEOHead';
  import { ScrollReveal } from '@/components/ui/ScrollReveal';
  import { Badge } from '@/components/ui/badge';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

  /**
   * About page with developer biography and professional information
   * Features split layout with comprehensive biography
   */
  export default function About() {
    return (
      <>
        <SEOHead
          title="About"
          description={`Learn about ${developerInfo.name}, ${developerInfo.role}. ${developerInfo.biography.split('\n\n')[0]}`}
          image={developerInfo.portraitImage}
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
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {developerInfo.availability}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  About Me
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {developerInfo.role} • {developerInfo.location}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Biography Section */}
          <section className="py-16 md:py-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <motion.div className="space-y-8">
                  {/* Name and Tagline */}
                  <div className="space-y-3 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {developerInfo.name}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {developerInfo.tagline}
                    </p>
                  </div>

                  <Separator />

                  {/* Biography */}
                  <div className="space-y-4">
                    {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base md:text-lg leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 space-y-3 flex flex-col items-center">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="size-4 text-primary" />
                      <a
                        href={`mailto:${developerInfo.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {developerInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="size-4 text-primary" />
                      <a
                        href={`tel:${developerInfo.phone}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {developerInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="size-4 text-primary" />
                      <span className="text-foreground">{developerInfo.location}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    {developerInfo.socialLinks.github && (
                      <a
                        href={developerInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-xl hover:bg-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="size-5" />
                      </a>
                    )}
                    {developerInfo.socialLinks.linkedin && (
                      <a
                        href={developerInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-xl hover:bg-accent transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="size-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-16 md:py-24 px-6 lg:px-8 bg-accent/30">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-12">
                  <Briefcase className="size-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {developerInfo.experience.map((exp, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <Card className="border-l-4 border-l-primary bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16 md:py-24 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-12">
                  <GraduationCap className="size-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Education</h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-6">
                {developerInfo.education.map((edu, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <Badge variant="secondary" className="mb-4">{edu.year}</Badge>
                        <h3 className="font-semibold text-lg mb-2">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications & Highlights */}
          <section className="py-16 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/20">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Certifications */}
                <ScrollReveal>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Award className="size-6 text-primary" />
                      <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
                    </div>
                    <div className="space-y-4">
                      {developerInfo.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                          <Award className="size-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Highlights */}
                <ScrollReveal delay={0.1}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Star className="size-6 text-primary" />
                      <h2 className="text-2xl font-bold tracking-tight">Highlights</h2>
                    </div>
                    <div className="space-y-4">
                      {developerInfo.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                          <Star className="size-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
