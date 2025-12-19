  import type { Project } from '@/types';

  export const projects: Project[] = [
    {
      id: '1',
      title: 'AI Interview Platform',
      category: 'fullstack',
      year: '2025',
      slug: 'ai-interview-platform',
      coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'I worked on a full-stack development project called an AI Interview Platform, where employers can post jobs and shortlisted candidates can take interviews. I served as the team lead and contributed to both frontend and backend development.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'REST API'],
      images: [
        {
          id: '1-1',
          src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'Dashboard interface',
          aspectRatio: 'landscape'
        },
        {
          id: '1-2',
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'Analytics view',
          aspectRatio: 'landscape'
        }
      ]
    },
    {
      id: '2',
      title: 'Sololearn',
      category: 'frontend',
      year: '2024',
      slug: 'sololearn',
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'I worked on a project called Sololearn, where I developed leaderboards, progress bars, course cards, and user interface components.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      images: [
        {
          id: '2-1',
          src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'Sololearn interface',
          aspectRatio: 'landscape'
        }
      ]
    },
    {
      id: '3',
      title: 'Bus Ticket Booking System',
      category: 'fullstack',
      year: '2024',
      slug: 'bus-ticket-booking',
      coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'A comprehensive bus ticket booking system with features to manage bookings, including adding, updating, and deleting tickets. Intuitive UI for seamless user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      images: [
        {
          id: '3-1',
          src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'Bus booking interface',
          aspectRatio: 'landscape'
        }
      ]
    },
    {
      id: '4',
      title: 'Contact Book Application',
      category: 'python',
      year: '2024',
      slug: 'contact-book',
      coverImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'An enhanced Python-based Contact Book application with features to add, update, view, and delete contacts. Clean command-line interface with persistent data storage.',
      technologies: ['Python', 'File I/O', 'CLI'],
      images: [
        {
          id: '4-1',
          src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'Contact management',
          aspectRatio: 'landscape'
        }
      ]
    },
    {
      id: '5',
      title: 'FairNeft Clone',
      category: 'frontend',
      year: '2024',
      slug: 'fairneft-clone',
      coverImage: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'A responsive clone of the FairNeft platform featuring modern UI components, smooth animations, and pixel-perfect design implementation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      images: [
        {
          id: '5-1',
          src: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'FairNeft clone interface',
          aspectRatio: 'landscape'
        }
      ]
    },
    {
      id: '6',
      title: 'Task Manager App',
      category: 'web',
      year: '2024',
      slug: 'task-manager',
      coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'A feature-rich to-do application with task creation, editing, deletion, and completion tracking. Built with clean UI principles and form validation.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      images: [
        {
          id: '6-1',
          src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          alt: 'Task manager interface',
          aspectRatio: 'landscape'
        }
      ]
    }
  ];

  // Helper function to get project by slug
  export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug);
  };

  // Helper function to get projects by category
  export const getProjectsByCategory = (category: string): Project[] => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
  };

  // Helper function to get featured projects (first 4)
  export const getFeaturedProjects = (): Project[] => {
    return projects.slice(0, 4);
  };

  // Helper function to get next/previous project
  export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
    const currentIndex = projects.findIndex(p => p.slug === currentSlug);
    
    return {
      prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
      next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
    };
  };
