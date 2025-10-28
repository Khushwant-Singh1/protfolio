import type { Metadata } from "next";
import { Architects_Daughter, Caveat, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { combinedSchema } from "@/lib/schema";
import { WebVitals } from "./web-vitals";
import { PWAInstaller } from "./pwa-installer";

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-sketch",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "700"],
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
  display: "swap",
});

// SEO Configuration - Enhanced with Personal Branding
const siteConfig = {
  name: "Khushwant Singh - Portfolio",
  description: "Full-Stack Developer & AI Automation Engineer specializing in Next.js, React, MERN Stack, RAG Models, LangChain, n8n automation, and Machine Learning. CTO at Mskard Business Solution | Builder of WebDrave | Building cool stuff on the internet.",
  url: "https://khushwantsingh.dev", // Update with your actual domain
  ogImage: "/images/og-image.jpg", // Create this image (1200x630px)
  author: "Khushwant Singh",
  tagline: "Building Cool Stuff on the Internet",
  brandedPhrases: [
    "Web + AI + Automation",
    "From Ideas to Intelligent Systems",
    "Where Code Meets Creativity",
  ],
  keywords: [
    // Primary Keywords (High Priority)
    "Khushwant Singh portfolio",
    "Khushwant Singh developer",
    "Full Stack Developer Khushwant Singh",
    "AI Automation Engineer",
    "Next.js Developer Portfolio",
    "MERN Stack Developer",
    "CTO Portfolio Website",
    "Machine Learning Developer Portfolio",
    
    // Secondary Keywords (Skill-Focused)
    "React and Next.js Developer",
    "Prisma and Supabase Developer",
    "AI and RAG Model Developer",
    "n8n Automation Expert",
    "Web Automation Engineer",
    "LangChain Developer",
    "Python AI Engineer",
    "Frontend Developer with Tailwind CSS",
    "API Integration Specialist",
    "Business Automation Developer",
    
    // Long-Tail Keywords (High Intent)
    "Build RAG model with LangChain and FAISS",
    "Next.js and Supabase full stack projects",
    "Web automation using n8n and Make.com",
    "AI chatbot with Gemini and LangChain",
    "Developer portfolio with Tailwind CSS",
    "Best full stack developer portfolios India",
    "AI + Web developer portfolio example",
    "Custom CRM using Next.js and Prisma",
    
    // Personal Branding Keywords
    "Khushwant Singh polymath",
    "Builder of WebDrave",
    "CTO at Mskard Business Solution",
    "WebDrave CTO Portfolio",
    "Khushwant Singh AI Projects",
    "Khushwant Singh Automation Projects",
    
    // Technical Stack Keywords
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "MERN Stack",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Prisma ORM",
    "Supabase",
    "PostgreSQL",
    "TailwindCSS",
    "Framer Motion",
    "GSAP Animations",
    
    // AI/ML Keywords
    "Machine Learning",
    "Artificial Intelligence",
    "RAG Systems",
    "LangChain",
    "FAISS Vector Database",
    "ChromaDB",
    "Gemini AI",
    "OpenAI Integration",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    
    // Automation Keywords
    "n8n Workflows",
    "Make.com Automation",
    "Business Process Automation",
    "Workflow Automation",
    "API Integration",
    "Zapier Alternative",
    
    // Location-based (if applicable)
    "Full Stack Developer India",
    "AI Developer India",
    "Freelance Developer",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Khushwant Singh - Full Stack Developer & AI Automation Engineer | CTO Portfolio",
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: "Khushwant Singh - CTO at Mskard Business Solution | Builder of WebDrave",
  publisher: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Khushwant Singh - Full Stack Developer, AI Engineer & CTO | Next.js, React, MERN Stack",
    description: "Portfolio of Khushwant Singh: Full-Stack Developer & AI Automation Engineer. Specializing in Next.js, React, MERN Stack, RAG Models, LangChain, n8n automation. CTO at Mskard Business Solution | Builder of WebDrave | Building cool stuff on the internet.",
    siteName: "Khushwant Singh Portfolio - Web + AI + Automation",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Khushwant Singh - Full Stack Developer & AI Automation Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushwant Singh - Full Stack Developer & AI Engineer | Next.js, React, RAG Models",
    description: "CTO at Mskard Business Solution | Building cool stuff on the internet with Next.js, React, AI, and Automation. Explore my projects and skills.",
    images: [siteConfig.ogImage],
    creator: "@Khushwant_248",
    site: "@Khushwant_248",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Technology",
  classification: "Portfolio Website",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Khush Portfolio",
  },
  other: {
    "og:type": "profile",
    "profile:first_name": "Khushwant",
    "profile:last_name": "Singh",
    "profile:username": "Khushwant Singh",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Comprehensive JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(combinedSchema),
          }}
        />
      </head>
      <body
        className={`${architectsDaughter.variable} ${caveat.variable} ${permanentMarker.variable} antialiased`}
      >
        <WebVitals />
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
