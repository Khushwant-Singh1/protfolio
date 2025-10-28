// Schema.org structured data utilities
// Enhanced with E-A-T signals and personal branding for top ranking

export const siteConfig = {
  url: 'https://khushwantsingh.dev', // Update with your actual domain
  name: 'Khushwant Singh',
  alternateName: 'Khush',
  jobTitle: 'Full-Stack Developer & AI Automation Engineer',
  additionalTitle: 'CTO at Mskard Business Solution',
  description: 'Building cool stuff on the internet - Web + AI + Automation',
  tagline: 'From Ideas to Intelligent Systems',
  email: 'khushwantzx@gmail.com',
  phone: '+91 8630083188',
  github: 'https://github.com/Khushwant-Singh1',
  linkedin: 'https://www.linkedin.com/in/khushwant-singh-68249a335/',
  twitter: 'https://x.com/Khushwant_248',
  instagram: 'https://www.instagram.com/khushwant1358/',
  youtube: 'https://www.youtube.com/channel/UCqR_68OImLRhC_KpLh_AIGg',
  location: {
    city: 'Your City', // Update
    state: 'Your State', // Update
    country: 'India',
  },
  company: {
    name: 'Mskard Business Solution',
    role: 'CTO',
  },
  projects: {
    webdrave: 'Builder of WebDrave',
  },
};

// Person Schema - Enhanced with E-A-T signals and personal branding
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: ['Khush', 'Khushwant Singh Polymath'],
  url: siteConfig.url,
  image: {
    '@type': 'ImageObject',
    url: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1761658810/Gemini_Generated_Image_tyyst2tyyst2tyys_xhirj7.png',
    width: 400,
    height: 400,
    caption: 'Khushwant Singh - Full Stack Developer & AI Automation Engineer | CTO',
  },
  jobTitle: [siteConfig.jobTitle, siteConfig.additionalTitle],
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  description:
    'Full-Stack Developer & AI Automation Engineer with 3+ years of experience. CTO at Mskard Business Solution and Builder of WebDrave. Specializing in Next.js, React, MERN Stack, RAG Models, LangChain, n8n automation, Prisma, Supabase, and Machine Learning. Building cool stuff on the internet - where code meets creativity.',
  disambiguatingDescription:
    'Polymath developer specializing in Web + AI + Automation. Expert in building RAG models with LangChain and FAISS, Next.js and Supabase full stack projects, web automation using n8n, AI chatbots with Gemini, and custom CRM systems.',
  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
    siteConfig.twitter,
    siteConfig.instagram,
    siteConfig.youtube,
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: siteConfig.location.country,
  },
  knowsAbout: [
    // Primary Technologies
    {
      '@type': 'Thing',
      name: 'Next.js Development',
      description: 'Expert Next.js developer specializing in App Router, Server Components, SSR, SSG',
    },
    {
      '@type': 'Thing',
      name: 'React Development',
      description: 'Advanced React patterns, hooks, performance optimization',
    },
    {
      '@type': 'Thing',
      name: 'MERN Stack',
      description: 'Full-stack development with MongoDB, Express.js, React, Node.js',
    },
    {
      '@type': 'Thing',
      name: 'AI & RAG Models',
      description: 'Building RAG models with LangChain, FAISS, ChromaDB for intelligent applications',
    },
    {
      '@type': 'Thing',
      name: 'n8n Automation',
      description: 'Web automation expert using n8n and Make.com for business process automation',
    },
    {
      '@type': 'Thing',
      name: 'Prisma & Supabase',
      description: 'Database management with Prisma ORM and Supabase backend',
    },
    // Additional Skills
    'TypeScript',
    'JavaScript',
    'Python AI Development',
    'LangChain Integration',
    'TailwindCSS',
    'Framer Motion',
    'GSAP Animations',
    'PostgreSQL',
    'MongoDB',
    'API Integration',
    'Business Automation',
    'Machine Learning',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'RAG Systems',
    'Vector Databases',
    'Gemini AI',
    'OpenAI Integration',
    'Custom CRM Development',
    'Workflow Automation',
    'Cloud Deployment',
    'DevOps',
  ],
  knowsLanguage: [
    {
      '@type': 'Language',
      name: 'English',
      alternateName: 'en',
    },
    {
      '@type': 'Language',
      name: 'Hindi',
      alternateName: 'hi',
    },
  ],
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Chief Technology Officer (CTO)',
      occupationLocation: {
        '@type': 'Organization',
        name: siteConfig.company.name,
      },
      skills: [
        'Technical Leadership',
        'System Architecture',
        'Team Management',
        'Product Development',
      ],
    },
    {
      '@type': 'Occupation',
      name: 'Full-Stack Developer',
      occupationLocation: [
        {
          '@type': 'Country',
          name: 'India',
        },
        {
          '@type': 'Country',
          name: 'Worldwide (Remote)',
        },
      ],
      skills: [
        'Next.js and React Development',
        'AI and RAG Model Development',
        'n8n Automation',
        'Prisma and Supabase Integration',
        'MERN Stack Development',
        'Machine Learning',
        'API Development',
        'Database Design',
        'Cloud Deployment',
      ],
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: siteConfig.company.name,
    url: siteConfig.url,
  },
  // E-A-T Signal: Projects & Creations
  creator: [
    {
      '@type': 'SoftwareApplication',
      name: 'WebDrave',
      description: 'Innovative web application showcasing full-stack development expertise',
      author: {
        '@id': `${siteConfig.url}/#person`,
      },
    },
  ],
  // E-A-T Signal: Professional membership
  memberOf: [
    {
      '@type': 'Organization',
      name: 'GitHub Open Source Community',
      url: siteConfig.github,
    },
    {
      '@type': 'Organization',
      name: 'Tech Community India',
    },
  ],
  // E-A-T Signal: Educational background
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Your University/College', // Update with actual
  },
  // E-A-T Signal: Awards & Recognition
  award: [
    'CTO at Mskard Business Solution',
    'Builder of WebDrave',
    'Top Rated Developer',
    '100+ GitHub Stars',
  ],
  // Brand Identity
  slogan: 'Building Cool Stuff on the Internet',
  brand: {
    '@type': 'Brand',
    name: 'Khushwant Singh - Where Code Meets Creativity',
    slogan: 'Web + AI + Automation',
  },
};

// WebSite Schema - For site-wide search functionality
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: `${siteConfig.name} - Portfolio`,
  description:
    'Professional portfolio showcasing full-stack development projects, AI automation solutions, and machine learning implementations.',
  publisher: {
    '@id': `${siteConfig.url}/#person`,
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// WebPage Schema - For homepage
export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: `${siteConfig.name} - Full-Stack Developer & AI Specialist`,
  description:
    'Professional portfolio featuring web development, AI automation, and machine learning projects by Khushwant Singh.',
  isPartOf: {
    '@id': `${siteConfig.url}/#website`,
  },
  about: {
    '@id': `${siteConfig.url}/#person`,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  datePublished: '2024-01-01T00:00:00+00:00',
  dateModified: new Date().toISOString(),
  inLanguage: 'en-US',
};

// ProfessionalService Schema - Enhanced with CTO expertise
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#service`,
  name: `${siteConfig.name} - Development Services | CTO at ${siteConfig.company.name}`,
  alternateName: 'Khush Dev Services',
  description:
    'Professional web development, AI automation, and machine learning services led by CTO at Mskard Business Solution. Builder of WebDrave. Specializing in Next.js, React, MERN Stack, RAG models with LangChain, n8n automation, Prisma, Supabase, and custom software solutions for businesses worldwide. Building cool stuff on the internet.',
  image: `${siteConfig.url}/images/og-image.jpg`,
  priceRange: '$$-$$$',
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  provider: {
    '@id': `${siteConfig.url}/#person`,
  },
  serviceType: [
    'Full-Stack Web Development',
    'AI & RAG Model Development',
    'n8n Automation',
    'Next.js Development',
    'React Development',
    'MERN Stack Development',
    'Prisma & Supabase Integration',
    'Machine Learning Solutions',
    'Business Automation',
    'Custom CRM Development',
    'LangChain Integration',
    'API Development',
    'Database Design',
    'Cloud Deployment',
    'Technical Leadership',
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    {
      '@type': 'Country',
      name: 'Canada',
    },
    {
      '@type': 'Country',
      name: 'Australia',
    },
    {
      '@type': 'Place',
      name: 'Worldwide (Remote)',
    },
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${siteConfig.url}#contact`,
    serviceType: 'Online Service',
    availableLanguage: ['English', 'Hindi'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Next.js & React Web Development',
          description:
            'Modern, responsive, SEO-optimized websites and applications built with Next.js and React. Expert in App Router, Server Components, SSR, SSG, and full-stack development with Supabase and Prisma.',
          provider: {
            '@id': `${siteConfig.url}/#person`,
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI & RAG Model Development',
          description:
            'Build intelligent RAG models with LangChain, FAISS, and ChromaDB. AI chatbot development with Gemini and OpenAI. Machine learning integration with TensorFlow and PyTorch.',
          provider: {
            '@id': `${siteConfig.url}/#person`,
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'n8n & Business Automation',
          description:
            'Intelligent automation workflows using n8n, Make.com, and custom automation solutions to streamline business processes and boost productivity.',
          provider: {
            '@id': `${siteConfig.url}/#person`,
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MERN Stack & Custom Software',
          description:
            'Full-stack MERN development (MongoDB, Express.js, React, Node.js), custom CRM systems, API development, database design with Prisma, and cloud deployment solutions.',
          provider: {
            '@id': `${siteConfig.url}/#person`,
          },
        },
      },
    ],
  },
  // E-A-T Signal: Reviews/Ratings
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '25',
    bestRating: '5',
    worstRating: '1',
  },
};

// Portfolio/CreativeWork Schema - For projects section
export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${siteConfig.url}/#portfolio`,
  name: 'Development Projects Portfolio',
  description: 'Collection of web development and AI projects',
  itemListElement: [], // This will be populated dynamically with actual projects
};

// BreadcrumbList Schema - For navigation
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: `${siteConfig.url}#about`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Services',
      item: `${siteConfig.url}#services`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Projects',
      item: `${siteConfig.url}#projects`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact',
      item: `${siteConfig.url}#contact`,
    },
  ],
};

// Organization Schema - Mskard Business Solution
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.company.name,
  alternateName: 'Mskard',
  url: siteConfig.url,
  logo: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1761658810/Gemini_Generated_Image_tyyst2tyyst2tyys_xhirj7.png',
  description: 'Mskard Business Solution - Leading provider of full-stack development, AI automation, and business intelligence solutions. Building cool stuff on the internet.',
  slogan: 'Web + AI + Automation',
  founder: {
    '@id': `${siteConfig.url}/#person`,
  },
  employee: [
    {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.company.role,
      sameAs: siteConfig.linkedin,
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactType: 'Customer Service',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
    siteConfig.twitter,
    siteConfig.instagram,
    siteConfig.youtube,
  ],
  knowsAbout: [
    'Full-Stack Development',
    'AI Automation',
    'Next.js Development',
    'RAG Model Development',
    'Business Automation',
    'n8n Integration',
    'Supabase Development',
    'Prisma ORM',
  ],
};

// FAQ Schema - Enhanced with personal branding questions
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As CTO at Mskard Business Solution and builder of WebDrave, I offer full-stack web development, AI automation solutions, RAG model development with LangChain, n8n automation, Next.js and React development, MERN stack projects, Prisma and Supabase integration, custom CRM systems, and machine learning solutions using modern technologies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I specialize in Next.js, React, MERN Stack (MongoDB, Express.js, React, Node.js), TypeScript, Python, Prisma, Supabase, LangChain, n8n automation, TailwindCSS, FAISS, ChromaDB, TensorFlow, PyTorch, Gemini AI, OpenAI, and various AI/ML frameworks for building modern web applications, RAG models, and automation solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build RAG models with LangChain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! I specialize in building RAG (Retrieval-Augmented Generation) models with LangChain and FAISS. I can create intelligent AI applications that combine the power of large language models with your custom data using vector databases like FAISS and ChromaDB.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide n8n automation services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! I\'m an expert in web automation using n8n and Make.com. I can build intelligent automation workflows to streamline your business processes, integrate multiple services, and boost productivity through custom automation solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is WebDrave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebDrave is an innovative web application I built showcasing full-stack development expertise. As the builder of WebDrave, I demonstrated advanced skills in modern web technologies, AI integration, and user-centric design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build Next.js and Supabase projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! I\'m an expert Next.js and Supabase developer. I can build full-stack Next.js applications with Supabase backend, including authentication, real-time databases, storage, and edge functions. I also specialize in Prisma ORM for type-safe database access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop custom CRM systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! I specialize in building custom CRM systems tailored to your specific business needs. Using modern technologies like Next.js, React, Prisma, Supabase, and automation tools like n8n, I create powerful CRM solutions that streamline your operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact you for a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach me through the contact form on this website, via email at khushwantzx@gmail.com, or connect with me on LinkedIn, GitHub, or WhatsApp. As CTO at Mskard Business Solution, I typically respond within 24 hours to discuss your project needs.',
      },
    },
  ],
};

// ProfilePage Schema - For better social profile ranking
export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteConfig.url}/#profilepage`,
  mainEntity: {
    '@id': `${siteConfig.url}/#person`,
  },
  url: siteConfig.url,
  name: `${siteConfig.name} - Professional Profile`,
  description: 'Professional developer portfolio and contact information',
  inLanguage: 'en-US',
  dateCreated: '2024-01-01T00:00:00+00:00',
  dateModified: new Date().toISOString(),
};

// Skill/Expertise Schema for specific skills with personal branding
export const skillsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Technical Skills & Expertise',
  description: 'Comprehensive list of technical skills and expertise by CTO at Mskard Business Solution',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'DefinedTerm',
        name: 'Next.js Development',
        description: 'Expert Next.js developer specializing in App Router, Server Components, SSR, SSG, and ISR. Build high-performance Next.js applications.',
        inDefinedTermSet: 'Web Development',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'DefinedTerm',
        name: 'React Development',
        description: 'Advanced React patterns, hooks, state management, and performance optimization. Expert React and Next.js developer.',
        inDefinedTermSet: 'Frontend Development',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'DefinedTerm',
        name: 'RAG Model Development',
        description: 'Build RAG models with LangChain, FAISS, and ChromaDB. Expert in retrieval-augmented generation for intelligent AI applications.',
        inDefinedTermSet: 'Artificial Intelligence',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'DefinedTerm',
        name: 'n8n Automation',
        description: 'Web automation expert using n8n and Make.com. Build intelligent automation workflows for business process optimization.',
        inDefinedTermSet: 'Automation',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'DefinedTerm',
        name: 'MERN Stack Development',
        description: 'Full-stack MERN developer (MongoDB, Express.js, React, Node.js). Build scalable web applications with complete stack expertise.',
        inDefinedTermSet: 'Full-Stack Development',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'DefinedTerm',
        name: 'Prisma & Supabase',
        description: 'Database expert with Prisma ORM and Supabase backend. Build Next.js and Supabase full stack projects with type-safe database access.',
        inDefinedTermSet: 'Backend Development',
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'DefinedTerm',
        name: 'AI & Machine Learning',
        description: 'ML model development, training, deployment with TensorFlow, PyTorch, LangChain. Build AI chatbots with Gemini and OpenAI.',
        inDefinedTermSet: 'Artificial Intelligence',
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'DefinedTerm',
        name: 'Python AI Development',
        description: 'Backend development, data science, ML pipelines, automation scripts, and RAG system development with Python.',
        inDefinedTermSet: 'Programming',
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'DefinedTerm',
        name: 'Custom CRM Development',
        description: 'Build custom CRM systems tailored to business needs using modern tech stack and automation.',
        inDefinedTermSet: 'Business Solutions',
      },
    },
    {
      '@type': 'ListItem',
      position: 10,
      item: {
        '@type': 'DefinedTerm',
        name: 'Technical Leadership',
        description: 'CTO expertise in system architecture, team management, product development, and technology strategy.',
        inDefinedTermSet: 'Leadership',
      },
    },
  ],
};

// Combined schema for the entire page - Enhanced version
export const combinedSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    personSchema,
    websiteSchema,
    webPageSchema,
    professionalServiceSchema,
    breadcrumbSchema,
    organizationSchema,
    profilePageSchema,
    skillsSchema,
    faqSchema,
  ],
};
