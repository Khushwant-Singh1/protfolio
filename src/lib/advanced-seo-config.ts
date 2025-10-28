// Advanced SEO Configuration - Top 5 Ranking Strategy
// This includes E-A-T signals, advanced schema, and ranking factors

export const advancedSEOConfig = {
  // Core Business Info
  businessName: 'Khushwant Singh - Full-Stack Developer & AI Specialist',
  slogan: 'Building Tomorrow\'s Web, Today',
  foundedYear: '2023',
  
  // Location (for Local SEO)
  location: {
    city: 'Your City', // Update
    state: 'Your State', // Update
    country: 'India',
    postalCode: 'Your Postal Code', // Update
  },
  
  // Service Areas (for Local SEO)
  serviceAreas: [
    'India',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Singapore',
    'UAE',
    'Europe',
  ],
  
  // Certifications & Credentials (E-A-T signal)
  certifications: [
    'Full-Stack Web Development',
    'Machine Learning Specialization',
    'AI & Deep Learning',
    'Cloud Computing',
    // Add your actual certifications
  ],
  
  // Awards & Recognition (E-A-T signal)
  awards: [
    // Add any awards, competitions won, etc.
    // Example: 'Best Project Award 2024',
  ],
  
  // Statistics for credibility
  statistics: {
    yearsOfExperience: '3+',
    projectsCompleted: '50+',
    clientsSatisfied: '25+',
    technologiesMastered: '20+',
    githubStars: '100+',
    githubRepos: '30+',
  },
  
  // Competitive Keywords (Long-tail + Intent-based)
  targetKeywords: {
    primary: [
      'khushwant singh developer',
      'khushwant singh portfolio',
      'full stack developer india',
      'ai automation specialist',
      'next.js developer for hire',
      'react developer freelance',
    ],
    secondary: [
      'freelance web developer',
      'ai integration services',
      'machine learning consultant',
      'business automation expert',
      'n8n automation specialist',
      'langchain developer',
      'rag system developer',
      'custom web application development',
      'enterprise ai solutions',
    ],
    longtail: [
      'hire next.js developer for startup',
      'ai automation for small business',
      'custom machine learning solutions',
      'react developer with ai experience',
      'full stack developer specializing in ai',
      'freelance developer for saas applications',
      'build ai chatbot for business',
      'automate business workflows with ai',
      'next.js developer with python skills',
      'rag system implementation services',
    ],
    intent: {
      informational: [
        'what is ai automation',
        'how to build modern web apps',
        'nextjs vs react comparison',
        'machine learning for business',
      ],
      commercial: [
        'best full stack developer',
        'top ai automation services',
        'professional web developer',
      ],
      transactional: [
        'hire full stack developer',
        'get custom web app built',
        'ai automation consulting services',
        'freelance developer rates',
      ],
    },
  },
  
  // Content Depth Metrics (for comprehensive coverage)
  contentMetrics: {
    minWordCount: 2000, // Comprehensive pages rank better
    optimalWordCount: 3500,
    readingLevel: 'College', // Match audience
    readingTime: '8-12 minutes',
  },
  
  // Social Proof Metrics
  socialProof: {
    githubFollowers: '50+',
    linkedinConnections: '500+',
    youtubeSubscribers: 'Growing',
    portfolioViews: '1000+',
  },
  
  // Technical SEO Checklist
  technicalSEO: {
    https: true,
    mobileFriendly: true,
    pageSpeed: '90+',
    structuredData: true,
    xmlSitemap: true,
    robotsTxt: true,
    canonicalTags: true,
    metaTags: true,
    openGraph: true,
    twitterCards: true,
    schemaMarkup: true,
    imageOptimization: true,
    lazyLoading: true,
    compressionEnabled: true,
    minificationEnabled: true,
    browserCaching: true,
    cdnEnabled: false, // Set to true if using CDN
    http2Enabled: true,
  },
};

// E-A-T (Expertise, Authoritativeness, Trustworthiness) Signals
export const eatSignals = {
  expertise: {
    bio: `Full-Stack Developer with ${advancedSEOConfig.statistics.yearsOfExperience} years of experience building modern web applications and AI-powered solutions. Specialized in Next.js, React, Python, and Machine Learning with a proven track record of delivering high-performance applications for businesses worldwide.`,
    
    credentials: [
      'Bachelor\'s Degree in Computer Science/Engineering', // Update with actual
      'Certified Full-Stack Developer',
      'Machine Learning Specialization',
      'Cloud Computing Professional',
    ],
    
    publications: [
      // Add if you have blog posts, articles, or tutorials
      // Example: 'Building Scalable RAG Systems with LangChain',
    ],
    
    speaking: [
      // Add if you've given talks or presentations
      // Example: 'Tech Conference 2024 - AI in Web Development',
    ],
  },
  
  authoritativeness: {
    linkedinRecommendations: '10+', // Get recommendations
    githubContributions: '500+ in last year',
    openSourceProjects: '15+',
    technicalBlogPosts: '5+', // Consider starting a blog
    communityInvolvement: 'Active contributor to open source',
  },
  
  trustworthiness: {
    businessEmail: 'khushwantzx@gmail.com',
    verifiedProfiles: [
      'GitHub Verified',
      'LinkedIn Profile',
      'Google Business Profile', // Create one
    ],
    privacyPolicy: true, // Add privacy policy page
    termsOfService: true, // Add terms page
    contactInformation: 'Complete and verified',
    secureWebsite: 'HTTPS enabled',
    transparentPricing: true, // Consider adding pricing/packages
  },
};

// Content Optimization Rules
export const contentOptimization = {
  keywordDensity: {
    primary: '1-2%', // Don't over-optimize
    secondary: '0.5-1%',
    longtail: 'Natural placement',
  },
  
  headingStructure: {
    h1: 'One per page, include primary keyword',
    h2: 'Section headings with secondary keywords',
    h3: 'Subsections with longtail keywords',
    h4: 'Additional hierarchy as needed',
  },
  
  contentGuidelines: {
    introduction: 'Hook reader in first 100 words',
    clarity: 'Use simple language, avoid jargon',
    scannability: 'Use bullet points, short paragraphs',
    multimedia: 'Include images, videos, diagrams',
    ctaPlacement: 'Clear call-to-action above fold and at end',
    internalLinks: '3-5 relevant internal links',
    externalLinks: '2-3 authoritative external links',
    updateFrequency: 'Monthly content updates',
  },
  
  semanticKeywords: {
    webDevelopment: [
      'responsive design',
      'progressive web apps',
      'single page applications',
      'server-side rendering',
      'static site generation',
      'API development',
      'database design',
      'frontend development',
      'backend development',
      'full stack architecture',
    ],
    
    aiAutomation: [
      'workflow automation',
      'process optimization',
      'intelligent systems',
      'natural language processing',
      'computer vision',
      'predictive analytics',
      'chatbot development',
      'ai integration',
      'machine learning models',
      'deep learning',
    ],
    
    technologies: [
      'JavaScript frameworks',
      'TypeScript development',
      'React ecosystem',
      'Next.js applications',
      'Node.js backend',
      'Python programming',
      'TensorFlow',
      'PyTorch',
      'cloud deployment',
      'DevOps practices',
    ],
  },
};

// Link Building Strategy (Off-page SEO)
export const linkBuildingStrategy = {
  internalLinking: {
    strategy: 'Create content hub with pillar pages',
    anchorText: 'Descriptive, keyword-rich but natural',
    structure: 'Hierarchical silo structure',
    orphanPages: 'None - all pages linked from navigation',
  },
  
  externalLinking: {
    outbound: [
      'Link to authoritative sources (MDN, official docs)',
      'Reference industry leaders',
      'Cite research and statistics',
    ],
    
    inbound: [
      'Guest posting on tech blogs',
      'Contributing to open source documentation',
      'Sharing projects on Reddit, Dev.to, Hashnode',
      'GitHub profile optimization',
      'LinkedIn articles',
      'Stack Overflow contributions',
      'YouTube tutorial videos',
      'Podcast guest appearances',
    ],
  },
  
  socialSignals: {
    platforms: [
      'GitHub (primary)',
      'LinkedIn (professional)',
      'Twitter/X (tech community)',
      'Dev.to (technical articles)',
      'Hashnode (blog)',
      'Medium (reach)',
      'YouTube (tutorials)',
      'Instagram (behind the scenes)',
    ],
    
    frequency: 'Daily engagement, weekly content',
    strategy: 'Share projects, insights, tutorials',
  },
};

// Local SEO Enhancement (even for online services)
export const localSEOConfig = {
  googleBusinessProfile: {
    needed: true,
    category: 'Web Designer',
    secondaryCategories: [
      'Software Company',
      'Computer Consultant',
      'Website Designer',
    ],
    serviceAreas: advancedSEOConfig.serviceAreas,
  },
  
  localKeywords: [
    'web developer in [city]',
    'full stack developer [city]',
    'ai developer near me',
    'freelance developer [city]',
  ],
  
  localCitations: [
    'Clutch.co',
    'Upwork',
    'Fiverr',
    'Freelancer.com',
    'LinkedIn',
    'Indeed',
    'GoodFirms',
  ],
};

// Advanced Ranking Factors
export const rankingFactors = {
  onPage: {
    titleTag: {
      length: '50-60 characters',
      format: 'Primary Keyword | Secondary Keyword | Brand',
      uniqueness: 'Every page unique',
    },
    
    metaDescription: {
      length: '150-160 characters',
      format: 'Compelling copy with CTA and keywords',
      uniqueness: 'Every page unique',
    },
    
    url: {
      structure: 'Short, descriptive, keyword-rich',
      format: 'domain.com/keyword-rich-path',
      avoidParameters: true,
    },
    
    content: {
      quality: 'Original, in-depth, valuable',
      freshness: 'Regular updates',
      multimedia: 'Images, videos, infographics',
      readability: 'Easy to read and scan',
    },
  },
  
  technical: {
    coreWebVitals: {
      lcp: '< 2.5s',
      fid: '< 100ms',
      cls: '< 0.1',
      inp: '< 200ms',
    },
    
    mobile: {
      responsive: true,
      mobileFirst: true,
      touchFriendly: true,
      fastLoading: true,
    },
    
    security: {
      https: true,
      securityHeaders: true,
      noMixedContent: true,
    },
  },
  
  offPage: {
    backlinks: {
      quality: 'Focus on DR 50+ domains',
      relevance: 'Tech and business sites',
      diversity: 'Mix of domains',
      anchorText: 'Natural variation',
    },
    
    socialPresence: {
      engagement: 'Regular posting and interaction',
      shares: 'Content that gets shared',
      followers: 'Growing audience',
    },
    
    brandMentions: {
      monitored: true,
      responded: true,
      encouraged: true,
    },
  },
};

// Content Calendar for SEO
export const contentCalendar = {
  blog: {
    frequency: 'Weekly',
    topics: [
      'How-to guides (Next.js, React, AI)',
      'Case studies of projects',
      'Industry trends and insights',
      'Tutorial series',
      'Problem-solving articles',
    ],
    optimization: 'Each post targets specific keywords',
  },
  
  projects: {
    showcase: 'Add 2-3 new projects monthly',
    documentation: 'Detailed writeups with challenges & solutions',
    keywords: 'Technical keywords in descriptions',
  },
  
  updates: {
    homepage: 'Monthly refresh',
    about: 'Quarterly update',
    portfolio: 'As projects complete',
    testimonials: 'Add as received',
  },
};

export default advancedSEOConfig;
