  import { motion } from 'framer-motion';
  import { developerInfo } from '@/data/developer';
  import { getFeaturedProjects } from '@/data/projects';
  import { ProjectCard } from '@/components/portfolio/ProjectCard';
  import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
  import { ScrollReveal } from '@/components/ui/ScrollReveal';
  import { SEOHead } from '@/components/seo/SEOHead';
  import { ArrowRight, Github, Linkedin, Mail, Download, Code2, Database, Palette } from 'lucide-react';
  import { Link } from 'react-router-dom';
  import { Button } from '@/components/ui/button';
  import { Badge } from '@/components/ui/badge';

  /**
   * Homepage with immersive hero section and featured projects grid
   * Showcases developer's best work with modern, elegant design
   */
  export default function Home() {
    const featuredProjects = getFeaturedProjects();

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    };

    return (
      <>
        <SEOHead />
        
        <div className="min-h-screen">
          {/* Hero Section - Full viewport with developer background */}
          <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
            </div>

            {/* Hero Content */}
            <div className="relative h-screen flex flex-col items-center justify-center px-6">
              <motion.div
                className="text-center space-y-8 max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Greeting badge */}
                <motion.div variants={itemVariants}>
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 border-primary/20 text-primary">
                    👋 Welcome to my portfolio
                  </Badge>
                </motion.div>

                {/* Name */}
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
                    Hi, I'm{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                    {developerInfo.name}
                  </span>
                </motion.h1>
                
                {/* Role */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-muted-foreground"
                >
                  {developerInfo.role}
                </motion.p>

                {/* Tagline */}
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto"
                >
                  {developerInfo.heroIntroduction}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 pt-4"
                >
                  <Button asChild size="lg" className="gap-2 text-base">
                    <Link to="/portfolio">
                      View My Work
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="gap-2 text-base">
                    <Link to="/contact">
                      <Mail className="size-4" />
                      Get in Touch
                    </Link>
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-center gap-4 pt-4"
                >
                  {developerInfo.socialLinks.github && (
                    <a
                      href="https://github.com/Mylavarapu-Sowmya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.linkedin && (
                    <a
                      href="https://www.linkedin.com/in/sowmya-mylavarapu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <ScrollIndicator />
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-24 md:py-32 px-6 lg:px-8 bg-accent/30">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center space-y-4 mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Skills & Technologies
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Technologies I work with to build modern, scalable applications
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                {developerInfo.skills.map((skillGroup, index) => (
                  <ScrollReveal key={skillGroup.category} delay={index * 0.1}>
                    <motion.div
                      className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        {index === 0 && <Code2 className="size-6 text-primary" />}
                        {index === 1 && <Database className="size-6 text-primary" />}
                        {index === 2 && <Palette className="size-6 text-primary" />}
                        <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-primary/5 text-foreground border-primary/10 hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* About Preview */}
          <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    About Me
                  </h2>
                  <p className="text-lg font-light leading-relaxed text-muted-foreground">
                    {developerInfo.biography.split('\n\n')[0]}
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    <span>Learn More About Me</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="py-24 md:py-32 border-t border-border bg-accent/20">
            {/* Section Header */}
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4 px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                  A selection of my recent work
                </p>
              </div>
            </ScrollReveal>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  aspectRatio="landscape"
                  showCategory={true}
                  index={index}
                />
              ))}
            </div>

            {/* View All Link */}
            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-16 px-6">
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/portfolio">
                    View All Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/20">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Let's Work Together
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    I'm currently open for new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="gap-2">
                      <Link to="/contact">
                        <Mail className="size-4" />
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </>
    );
  }
