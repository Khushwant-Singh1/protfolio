export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 px-4 relative z-10" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="services-heading" className="font-marker text-5xl md:text-7xl text-center mb-4 transform rotate-1">
          The <span className="highlight-pink">Blueprint</span>
        </h2>
        <p className="font-handwritten text-2xl text-center mb-16">
          (aka what I can do for you)
        </p>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {/* Service 1: Web Design */}
          <article className="relative" role="listitem">
            <div className="sketch-border bg-white p-8 transform hover:rotate-0 transition-transform duration-300">
              <h3 className="font-sketch text-3xl mb-6 text-center">
                <span className="highlight-lime">Web Design</span>
              </h3>
              
              {/* Blueprint-style diagram */}
              <svg viewBox="0 0 200 150" className="w-full h-auto mb-6" aria-hidden="true">
                {/* Responsive devices */}
                <g>
                  {/* Desktop */}
                  <rect x="20" y="30" width="80" height="50" fill="none" stroke="#000" strokeWidth="2"/>
                  <rect x="15" y="80" width="90" height="5" fill="#000"/>
                  <line x1="60" y1="85" x2="60" y2="100" stroke="#000" strokeWidth="2"/>
                  <line x1="40" y1="100" x2="80" y2="100" stroke="#000" strokeWidth="3"/>
                  
                  {/* Mobile */}
                  <rect x="130" y="20" width="50" height="80" fill="none" stroke="#000" strokeWidth="2"/>
                  <circle cx="155" cy="92" r="3" fill="#000"/>
                  
                  {/* Connection line */}
                  <path 
                    d="M100,55 L130,55" 
                    stroke="#C4DB5D" 
                    strokeWidth="3"
                    markerEnd="url(#arrowgreen)"
                  />
                </g>
                
                {/* Launch label */}
                <text x="140" y="125" className="font-sketch text-sm" fill="#000">Launch</text>
                
                <defs>
                  <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#C4DB5D" />
                  </marker>
                </defs>
              </svg>

              <ul className="space-y-3 font-handwritten text-xl">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Next.js + Tailwind magic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Responsive, minimal & fast</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>SEO-ready architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span className="highlight-pink">Pixel-perfect animations</span>
                </li>
              </ul>
            </div>

            {/* Doodle annotation */}
            <svg className="absolute -top-8 -right-8 w-20 h-20" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#D84880" strokeWidth="3" transform="rotate(-10 50 50)"/>
              <path d="M70,30 L85,15 M75,35 L90,25" stroke="#D84880" strokeWidth="2"/>
            </svg>
          </article>

          {/* Service 2: AI Automation */}
          <article className="relative" role="listitem">
            <div className="sketch-border bg-white p-8 transform hover:rotate-0 transition-transform duration-300">
              <h3 className="font-sketch text-3xl mb-6 text-center">
                <span className="highlight-lime">AI & ML Arsenal </span>
              </h3>
              
              {/* n8n flowchart */}
                <svg viewBox="0 0 200 150" className="w-full h-auto mb-6">
                <circle cx="40" cy="40" r="6" fill="#000"/>
                <circle cx="40" cy="80" r="6" fill="#000"/>
                <circle cx="40" cy="120" r="6" fill="#000"/>
                <circle cx="100" cy="60" r="6" fill="#C4DB5D"/>
                <circle cx="100" cy="100" r="6" fill="#C4DB5D"/>
                <circle cx="160" cy="80" r="6" fill="#D84880"/>
                <path d="M46,40 L94,60 M46,80 L94,60 M46,80 L94,100 M46,120 L94,100 M106,60 L154,80 M106,100 L154,80" stroke="#000" strokeWidth="2"/>
              </svg>

              <ul className="space-y-3 font-handwritten text-xl">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Machine Learning models</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>RAG & LangChain pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>AI app integrations (Gemini / OpenAI)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span className="highlight-pink">Smart automation systems</span>
                </li>
              </ul>
            </div>

            {/* Star annotation */}
            <svg className="absolute -bottom-6 -left-6 w-16 h-16" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M50,10 L60,40 L90,45 L65,65 L72,95 L50,80 L28,95 L35,65 L10,45 L40,40 Z" 
                    fill="#C4DB5D" stroke="#000" strokeWidth="2"/>
            </svg>
          </article>

          {/* Service 3: Business Growth */}
          <article className="relative" role="listitem">
            <div className="sketch-border bg-white p-8 transform hover:rotate-0 transition-transform duration-300">
              <h3 className="font-sketch text-3xl mb-6 text-center">
                <span className="highlight-lime">Business Growth</span>
              </h3>
              
              {/* Growth chart */}
              <svg viewBox="0 0 200 150" className="w-full h-auto mb-6">
                {/* Axes */}
                <line x1="30" y1="120" x2="170" y2="120" stroke="#000" strokeWidth="2"/>
                <line x1="30" y1="20" x2="30" y2="120" stroke="#000" strokeWidth="2"/>
                
                {/* Growth line */}
                <path 
                  d="M30,110 L60,90 L90,70 L120,45 L150,25" 
                  fill="none" 
                  stroke="#D84880" 
                  strokeWidth="4"
                />
                
                {/* Data points */}
                <circle cx="30" cy="110" r="4" fill="#000"/>
                <circle cx="60" cy="90" r="4" fill="#000"/>
                <circle cx="90" cy="70" r="4" fill="#000"/>
                <circle cx="120" cy="45" r="4" fill="#000"/>
                <circle cx="150" cy="25" r="4" fill="#C4DB5D"/>
                
                {/* Arrow at end */}
                <path d="M145,20 L150,25 L145,30" fill="none" stroke="#D84880" strokeWidth="3"/>
                
                {/* Annotation */}
                <text x="100" y="15" className="font-sketch text-xs" fill="#D84880">Growth!</text>
                
                {/* Labels */}
                <text x="60" y="135" className="font-sketch text-xs">Time</text>
                <text x="10" y="75" className="font-sketch text-xs" transform="rotate(-90 10 75)">Revenue</text>
              </svg>

              <ul className="space-y-3 font-handwritten text-xl">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Sales funnel optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Content systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Tech stack setup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span className="highlight-pink">Real ROI</span>
                </li>
              </ul>
            </div>

            {/* Checkmark annotation */}
            <svg className="absolute -top-6 -left-6 w-16 h-16" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M20,50 L40,70 L80,20" fill="none" stroke="#C4DB5D" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </article>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="font-handwritten text-3xl">
            Each service is <span className="highlight-pink">custom-tailored</span> 
            {' '}to your business needs
          </p>
          <svg className="w-32 h-8 mx-auto mt-4" viewBox="0 0 100 20" aria-hidden="true">
            <path 
              d="M5,10 Q25,0 50,10 T95,10" 
              fill="none" 
              stroke="#C4DB5D" 
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
