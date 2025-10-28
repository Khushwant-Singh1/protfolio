// Dynamic schema generators for specific content types

import { siteConfig } from './schema';

// Generate CreativeWork schema for individual projects
export function generateProjectSchema(project: {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
  topics?: string[];
  createdAt?: string;
  updatedAt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description || 'Software development project',
    url: project.url,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    programmingLanguage: project.language,
    keywords: project.topics?.join(', '),
    dateCreated: project.createdAt,
    dateModified: project.updatedAt,
    isAccessibleForFree: true,
    license: 'https://opensource.org/licenses',
    interactionStatistic: project.stars
      ? {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/LikeAction',
          userInteractionCount: project.stars,
        }
      : undefined,
  };
}

// Generate ItemList schema for project portfolio
export function generatePortfolioListSchema(
  projects: Array<{
    name: string;
    description: string;
    url: string;
    language?: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software Development Projects',
    description: 'Portfolio of web development and AI projects',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.name,
        description: project.description,
        url: project.url,
        programmingLanguage: project.language,
        author: {
          '@type': 'Person',
          name: siteConfig.name,
        },
      },
    })),
  };
}

// Generate HowTo schema for services/skills
export function generateSkillSchema(skill: {
  name: string;
  description: string;
  tools: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: skill.name,
    description: skill.description,
    tool: skill.tools.map((tool) => ({
      '@type': 'HowToTool',
      name: tool,
    })),
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

// Generate Review/Rating schema (for testimonials if you add them)
export function generateTestimonialSchema(testimonial: {
  author: string;
  rating: number;
  text: string;
  date: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.author,
    },
    datePublished: testimonial.date,
    reviewBody: testimonial.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@type': 'Service',
      name: `${siteConfig.name} - Development Services`,
      provider: {
        '@type': 'Person',
        name: siteConfig.name,
      },
    },
  };
}

// Generate VideoObject schema (if you add tutorial videos)
export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.url,
    embedUrl: video.url,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

// Generate BlogPosting schema (if you add a blog)
export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedDate: string;
  modifiedDate?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: post.keywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

// Generate Course schema (if you offer courses/tutorials)
export function generateCourseSchema(course: {
  name: string;
  description: string;
  provider: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      sameAs: siteConfig.url,
    },
    url: course.url,
    instructor: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
