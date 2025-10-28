'use client';

import { memo } from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="font-sketch-title text-5xl md:text-6xl mb-4 transform -rotate-1">
            The <span className="highlight-green">Sketchpad</span> Bio
          </h2>
          <div className="doodle-arrow mx-auto w-20 h-1 bg-black transform rotate-2" aria-hidden="true"></div>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div 
              className="sketch-border p-8 scribble-animate"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4"> 
                </div>
                <div className="font-sketch-body text-xl">
                  <span className="highlight-pink">Builder</span> of
                  <br />
                  <span className="highlight-green">Cool Things</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="speech-bubble">
              <p className="font-sketch-body text-2xl leading-relaxed">
               I&apos;m a curious mind who<span className="highlight-pink">loves building</span>  — not just with code, but with ideas. Every project I work on is a way to explore how things work and how they can 
                <span className="highlight-green">work better.</span>
              </p>
            </div>

            <div className="speech-bubble">
              <p className="font-sketch-body text-2xl leading-relaxed">
                 I&apos;m obsessed with {' '}
                <span className="highlight-green">learning how things connect</span>  — tech, people, systems, business — and I&apos;m constantly trying to bridge them together in {' '}
                <span className="highlight-pink">creative ways.</span>.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-sketch-title text-2xl mb-4 transform rotate-1">My Superpowers:</h3>
              <ul className="flex flex-wrap gap-4" role="list">
                <li className="doodle-circle transform rotate-2">
                  <span className="font-sketch-marker">Creative Problem Solving</span>
                </li>
                <li className="doodle-circle transform -rotate-2">
                  <span className="font-sketch-marker">Full-Stack Thinking</span>
                </li>
                <li className="doodle-circle transform rotate-2">
                  <span className="font-sketch-marker">Automation & AI Workflows</span>
                </li>
                <li className="doodle-circle transform -rotate-2">
                  <span className="font-sketch-marker">Design-Driven Development</span>
                </li>
                <li className="doodle-circle transform rotate-2">
                  <span className="font-sketch-marker">Systems & Strategy</span>
                </li>
                <li className="doodle-circle transform rotate-2">
                  <span className="font-sketch-marker">Curiosity as Fuel</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 relative">
              <button className="sketch-button cursor-pointer">Let&apos;s Build Something Amazing! 🚀</button>
              <div className="absolute -top-8 -right-4 font-sketch-body text-lg transform rotate-12">
                &larr; Click me!
              </div>
            </div>
          </div>
        </div>

        <article className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="sketch-border p-8 bg-white relative">
            <div className="absolute -top-4 -left-4 text-3xl transform -rotate-12" aria-hidden="true">💻</div>
            <h3 className="font-sketch-title text-3xl mb-6 transform -rotate-1 text-center">
              <span className="highlight-pink">Tech Skills</span>
            </h3>

            <div className="space-y-4">
              <div className="mb-6">
                <h4 className="font-sketch-marker text-xl mb-3 doodle-underline">Web Dev Magic</h4>
                <ul className="flex flex-wrap gap-3" role="list">
                  <li className="doodle-circle text-sm transform rotate-1">JavaScript</li>
                  <li className="doodle-circle text-sm transform -rotate-1">React.js</li>
                  <li className="doodle-circle text-sm transform rotate-1">Tailwind CSS</li>
                  <li className="doodle-circle text-sm transform rotate-1">Next.js</li>
                  <li className="doodle-circle text-sm transform -rotate-1">Typescript</li>
                  <li className="doodle-circle text-sm transform -rotate-1">Express.js</li>
                  <li className="doodle-circle text-sm transform -rotate-1">Optimize applications</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-sketch-marker text-xl mb-3 doodle-underline">AI & ML Arsenal</h4>
                <ul className="flex flex-wrap gap-3" role="list">
                  <li className="doodle-circle text-sm transform rotate-2">n8n</li>
                  <li className="doodle-circle text-sm transform -rotate-2">Python</li>
                  <li className="doodle-circle text-sm transform rotate-2">RAG</li>
                  <li className="doodle-circle text-sm transform -rotate-2">LangChain</li>
                  <li className="doodle-circle text-sm transform rotate-2">FAISS</li>
                  <li className="doodle-circle text-sm transform -rotate-2">Scikit-learn</li>
                  <li className="doodle-circle text-sm transform -rotate-2">TensorFlow</li>
                  <li className="doodle-circle text-sm transform -rotate-2">Pytorch</li>
                  <li className="doodle-circle text-sm transform -rotate-2">ChromaDB</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-sketch-marker text-xl mb-3 doodle-underline">Platform Mastery</h4>
                <ul className="flex flex-wrap gap-3" role="list">
                  <li className="doodle-circle text-sm transform rotate-1">Prisma</li>
                  <li className="doodle-circle text-sm transform -rotate-1">Supabase</li>
                  <li className="doodle-circle text-sm transform rotate-1">PostgreSQL</li>
                  <li className="doodle-circle text-sm transform -rotate-1">MongoDB</li>
                  <li className="doodle-circle text-sm transform rotate-1">Git</li>
                  <li className="doodle-circle text-sm transform -rotate-1">Vercel</li>
                </ul>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 text-2xl transform rotate-12" aria-hidden="true">⚡</div>
          </div>

          <div className="sketch-border p-8 bg-white relative">
            <div className="absolute -top-4 -left-4 text-3xl transform rotate-12">🧠</div>
            <h3 className="font-sketch-title text-3xl mb-6 transform rotate-1 text-center">
              <span className="highlight-green">Soft Skills</span>
            </h3>

            <div className="space-y-6">
              <div className="speech-bubble">
                <h4 className="font-sketch-marker text-lg mb-2">
                  💬 <span className="highlight-pink">Communication Pro</span>
                </h4>
                <p className="font-sketch-body text-lg">
                  I translate complex tech stuff into simple business language. No more &quot;it&apos;s
                  complicated&quot; - I make it crystal clear!
                </p>
              </div>

              <div className="speech-bubble">
                <h4 className="font-sketch-marker text-lg mb-2">
                  🔍 <span className="highlight-green">Problem Detective</span>
                </h4>
                <p className="font-sketch-body text-lg">
                  I love finding the root cause of inefficiencies and creating elegant solutions that
                  just work.
                </p>
              </div>

              <div className="speech-bubble">
                <h4 className="font-sketch-marker text-lg mb-2">
                  📋 <span className="highlight-pink">Project Orchestrator</span>
                </h4>
                <p className="font-sketch-body text-lg">
                  From concept to launch, I keep projects on track, on time, and on budget. Chaos? Not
                  on my watch!
                </p>
              </div>

              <div className="speech-bubble">
                <h4 className="font-sketch-marker text-lg mb-2">
                  🚀 <span className="highlight-green">Continuous Learner</span>
                </h4>
                <p className="font-sketch-body text-lg">
                  Tech evolves fast, and so do I. Always curious, always learning, always improving.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 text-2xl transform -rotate-12" aria-hidden="true">✨</div>
          </div>
        </article>

        <div className="text-center mt-12">
          <div className="sticky-note inline-block transform rotate-2">
            <p className="font-sketch-body text-xl">
              <span className="highlight-pink">Tech skills</span> get the job done, but
              <span className="highlight-green"> soft skills</span> make the magic happen! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
