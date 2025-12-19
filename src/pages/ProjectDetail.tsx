  import { useState } from 'react';
  import { useParams, Navigate, Link } from 'react-router-dom';
  import { motion } from 'framer-motion';
  import { Calendar, ExternalLink, Github, ArrowLeft } from 'lucide-react';
  import { Separator } from '@/components/ui/separator';
  import { SEOHead } from '@/components/seo/SEOHead';
  import { ScrollReveal } from '@/components/ui/ScrollReveal';
  import { getProjectBySlug } from '@/data/projects';
  import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
  import { Lightbox } from '@/components/portfolio/Lightbox';
  import { Button } from '@/components/ui/button';
  import { Badge } from '@/components/ui/badge';

  /**
   * Project detail page with hero image, gallery, and full-screen lightbox
   * Features smooth animations and immersive image viewing experience
   */
  export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 404 if project not found
    if (!project) {
      return <Navigate to="/404" replace />;
    }

    const openLightbox = (index: number) => {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    };

    const closeLightbox = () => {
      setLightboxOpen(false);
    };

    return (
      <>
        <SEOHead
          title={project.title}
          description={project.description}
          image={project.coverImage}
          type="article"
        />
        
        <div className="min-h-screen">
          {/* Hero Image - 70vh */}
          <motion.div
            className="relative w-full h-[70vh] overflow-hidden bg-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            {/* Back button */}
            <Link 
              to="/portfolio"
              className="absolute top-24 left-6 z-10"
            >
              <Button variant="secondary" size="sm" className="gap-2 bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="size-4" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Project Info Section */}
          <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 -mt-32 relative z-10">
            <motion.div
              className="space-y-8 bg-background/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-border shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Title and Category */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="size-4" />
                  <span>{project.year}</span>
                  <span>•</span>
                  <span className="capitalize">{project.category}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {project.title}
                </h1>
              </div>

              <Separator />

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button asChild className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild className="gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </section>

          {/* Image Gallery - Edge to edge */}
          <section className="py-12 md:py-16">
            <div className="space-y-8 md:space-y-12">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  <ImageWithLightbox
                    image={image}
                    onClick={() => openLightbox(index)}
                    priority={index === 0}
                    index={0}
                    className="w-full"
                  />
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Lightbox */}
          <Lightbox
            images={project.images}
            currentIndex={currentImageIndex}
            isOpen={lightboxOpen}
            onClose={closeLightbox}
            onNavigate={setCurrentImageIndex}
          />
        </div>
      </>
    );
  }
