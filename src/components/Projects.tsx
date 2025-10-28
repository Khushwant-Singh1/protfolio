'use client';

import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import Image from 'next/image';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  homepage: string | null;
}

interface GitHubStats {
  total_commits: number;
  public_repos: number;
  followers: number;
  contributions_last_year?: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GITHUB_USERNAME = 'Khushwant-Singh1';
const REPOS_TO_DISPLAY = 6;

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

  const getProjectColor = useCallback((index: number) => {
    return index % 2 === 0 ? '#D84880' : '#C4DB5D';
  }, []);

  // Memoize displayed repos to prevent unnecessary re-renders
  const displayedRepos = useMemo(() => repos.slice(0, REPOS_TO_DISPLAY), [repos]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch repos
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { next: { revalidate: 3600 } } // Cache for 1 hour
        );
        
        if (reposResponse.ok) {
          const reposData = await reposResponse.json();
          console.log('Fetched repos:', reposData.length);
          setRepos(reposData);
        } else {
          console.error('Failed to fetch repos:', reposResponse.status);
        }

        // Fetch user stats
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { next: { revalidate: 3600 } } // Cache for 1 hour
        );
        
        if (userResponse.ok) {
          const userData = await userResponse.json();
          console.log('User data received:', userData);
          
          // Fetch contributions from GitHub's scraping endpoint
          try {
            const contributionsResponse = await fetch(
              `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
              { next: { revalidate: 3600 } } // Cache for 1 hour
            );
            
            let totalContributions = 0;
            if (contributionsResponse.ok) {
              const contributionsData = await contributionsResponse.json();
              // Sum up contributions from the last year
              totalContributions = contributionsData.total[new Date().getFullYear()] || 0;
              
              // If current year doesn't have data, try to get from all available data
              if (totalContributions === 0 && contributionsData.contributions) {
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
                
                totalContributions = contributionsData.contributions.filter((day: ContributionDay) => {
                  const dayDate = new Date(day.date);
                  return dayDate >= oneYearAgo;
                }).reduce((sum: number, day: ContributionDay) => sum + day.count, 0);
              }
            }
            
            const stats = {
              total_commits: 0,
              public_repos: userData.public_repos,
              followers: userData.followers,
              contributions_last_year: totalContributions,
            };
            console.log('Setting GitHub stats:', stats);
            setGithubStats(stats);
          } catch (error) {
            console.error('Error fetching contributions:', error);
            // Fallback without contributions count
            const fallbackStats = {
              total_commits: 0,
              public_repos: userData.public_repos,
              followers: userData.followers,
              contributions_last_year: 0,
            };
            console.log('Setting fallback stats:', fallbackStats);
            setGithubStats(fallbackStats);
          }
        } else {
          console.error('Failed to fetch user data:', userResponse.status);
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []); // Empty deps - only run once

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative z-10" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="projects-heading" className="font-marker text-5xl md:text-7xl text-center mb-4 transform -rotate-1">
          <span className="highlight-lime">GitHub</span> Projects
        </h2>
        <p className="font-handwritten text-2xl text-center mb-16">
          (Real projects from my GitHub)
        </p>

        {/* GitHub Contribution Graph */}
        {GITHUB_USERNAME && (
          <div className="mb-16 text-center">
            <h3 className="font-sketch text-3xl mb-6">
              My <span className="highlight-pink">GitHub Activity</span>
            </h3>
            
            {/* Contribution Graph */}
            <div className="sketch-border bg-white p-6 mb-8 w-full max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="font-sketch text-3xl mb-2">📊 GitHub Contribution Graph</h3>
                <p className="font-handwritten text-lg text-gray-600">
                  My coding journey visualized
                </p>
                {/* Total Contributions Badge */}
                {githubStats?.contributions_last_year && (
                  <div className="mt-4 inline-block">
                    <div className="sketch-border bg-yellow-50 px-6 py-3 transform rotate-2">
                      <p className="font-marker text-3xl" style={{ color: '#D84880' }}>
                        {githubStats.contributions_last_year}
                      </p>
                      <p className="font-sketch text-sm">contributions in the last year</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* GitHub Contribution Calendar */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
                  alt={`${GITHUB_USERNAME}'s GitHub contribution calendar showing coding activity throughout the year`}
                  width={800}
                  height={150}
                  className="w-full max-w-3xl"
                  unoptimized
                  loading="lazy"
                />
              </div>

              {/* Alternative visualization using GitHub Readme Stats */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=FFFAF0&color=000000&line=D84880&point=C4DB5D&area=true&hide_border=true&custom_title=Recent%20Activity`}
                  alt={`${GITHUB_USERNAME}'s detailed GitHub activity graph showing commits and contributions over time`}
                  width={900}
                  height={300}
                  className="w-full max-w-4xl"
                  unoptimized
                  loading="lazy"
                />
              </div>
              
              {/* View GitHub Profile Button */}
              <div className="text-center p-6 bg-yellow-50 border-2 border-dashed border-yellow-300 rounded">
                <p className="font-handwritten text-xl mb-4">
                  ✨ Explore my repositories and contributions
                </p>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-button inline-block cursor-pointer"
                >
                  View Full GitHub Profile →
                </a>
              </div>
            </div>

            {/* GitHub Stats Summary - Using reliable services */}
            <div className="sketch-border bg-white p-8 max-w-4xl mx-auto mb-8">
              <div className="text-center mb-6">
                <p className="font-sketch text-3xl">🔥 GitHub Stats</p>
              </div>
              {githubStats ? (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded">
                    <p className="font-marker text-5xl mb-2" style={{ color: '#D84880' }}>
                      {githubStats.public_repos}
                    </p>
                    <p className="font-sketch text-xl">Total Repositories</p>
                  </div>
                  <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded">
                    <p className="font-marker text-5xl mb-2" style={{ color: '#C4DB5D' }}>
                      {githubStats.followers}
                    </p>
                    <p className="font-sketch text-xl">Followers</p>
                  </div>
                </div>
              ) : (
                <div className="text-center p-6">
                  <p className="font-handwritten text-xl text-gray-500">
                    {loading ? 'Loading GitHub stats...' : 'Stats not available. Check console for errors.'}
                  </p>
                </div>
              )}
              <div className="mt-6 text-center">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-handwritten text-xl hover:underline inline-block"
                  style={{ color: '#D84880' }}
                >
                  View activity timeline →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="font-handwritten text-3xl animate-pulse">
              Loading projects from GitHub...
            </div>
          </div>
        )}

        {/* Projects Grid - GitHub Repos */}
        {!loading && displayedRepos.length > 0 && (
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {displayedRepos.map((repo, index) => (
              <div
                key={repo.id}
                className="polaroid hover:z-20 relative"
                style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}
              >
                {/* Tape effect */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-yellow-100 opacity-50 rotate-45 border border-yellow-200"></div>
                
                {/* Thumbnail sketch */}
                <div 
                  className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 cursor-pointer"
                  onClick={() => setSelectedProject(selectedProject === repo.id ? null : repo.id)}
                >
                  <div className="text-center p-4">
                    <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto">
                      <rect x="20" y="40" width="160" height="120" fill="none" stroke="#000" strokeWidth="3"/>
                      <line x1="20" y1="70" x2="180" y2="70" stroke="#000" strokeWidth="2"/>
                      <circle cx="50" cy="55" r="8" fill={getProjectColor(index)}/>
                      {repo.language && (
                        <>
                          <rect x="40" y="90" width="120" height="10" fill="#000" opacity="0.2"/>
                          <rect x="40" y="110" width="100" height="10" fill="#000" opacity="0.2"/>
                        </>
                      )}
                      <text x="100" y="140" className="font-sketch text-xs" textAnchor="middle">
                        ⭐ {repo.stargazers_count}
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Title on polaroid bottom */}
                <p className="font-handwritten text-xl text-center font-bold truncate px-2">
                  {repo.name}
                </p>
                {repo.language && (
                  <p className="font-sketch text-sm text-center text-gray-600 mt-1">
                    {repo.language}
                  </p>
                )}

                {/* View Project Button */}
                <div className="mt-4 text-center">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-button inline-block cursor-pointer text-sm px-4 py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </a>
                </div>

                {/* Click indicator for details */}
                <div className="absolute -bottom-8 right-4">
                  <button
                    onClick={() => setSelectedProject(selectedProject === repo.id ? null : repo.id)}
                    className="cursor-pointer"
                  >
                    <svg className="w-12 h-12" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="20" fill={getProjectColor(index)} opacity="0.3" stroke="#000" strokeWidth="2"/>
                      <text x="17" y="32" className="font-sketch text-sm">ℹ️</text>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Case Study View */}
        {selectedProject && (
          <div className="mt-16 animate-in fade-in duration-500">
            {repos.filter(repo => repo.id === selectedProject).map((repo) => (
              <div key={repo.id} className="sketch-border bg-white p-8 md:p-12 transform rotate-0 relative">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 font-sketch text-xl"
                >
                  ×
                </button>

                <h3 className="font-marker text-4xl mb-8">{repo.name}</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Description & Technologies */}
                  <div>
                    <div className="mb-8">
                      <h4 className="font-sketch text-2xl mb-4 flex items-center">
                        <span className="bg-black text-white px-3 py-1 mr-3">Description:</span>
                      </h4>
                      <p className="font-handwritten text-2xl leading-relaxed pl-4 border-l-4 border-black">
                        {repo.description || 'No description provided'}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-sketch text-2xl mb-4">
                        <span className="sketch-circle px-3 py-1">Technologies:</span>
                      </h4>
                      <div className="flex flex-wrap gap-3 mt-6">
                        {repo.language && (
                          <span 
                            className="sketch-border bg-white px-4 py-2 font-handwritten text-xl transform hover:scale-105 transition-transform"
                            style={{ 
                              transform: 'rotate(1deg)',
                              background: '#C4DB5D33'
                            }}
                          >
                            {repo.language}
                          </span>
                        )}
                        {repo.topics.slice(0, 5).map((topic, i) => (
                          <span 
                            key={i}
                            className="sketch-border bg-white px-4 py-2 font-handwritten text-xl transform hover:scale-105 transition-transform"
                            style={{ 
                              transform: `rotate(${i % 2 === 0 ? '1deg' : '-1deg'})`,
                              background: i % 2 === 0 ? '#C4DB5D33' : '#FFFAF0'
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-6">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sketch-button inline-block cursor-pointer"
                      >
                        View on GitHub →
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sketch-button inline-block cursor-pointer ml-4"
                          style={{ background: '#C4DB5D' }}
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Stats */}
                  <div className="relative">
                    <div className="speech-bubble bg-white">
                      <h4 className="font-marker text-3xl mb-4" style={{ color: getProjectColor(repos.findIndex(r => r.id === repo.id)) }}>
                        PROJECT STATS:
                      </h4>
                      
                      {/* Stats Grid */}
                      <div className="space-y-6">
                        <div className="p-4 border-4 border-dashed border-gray-300 rounded-lg text-center transform rotate-1">
                          <p className="font-sketch text-lg mb-2">Stars</p>
                          <p className="font-marker text-5xl" style={{ color: '#D84880' }}>
                            ⭐ {repo.stargazers_count}
                          </p>
                        </div>
                        
                        <div className="p-4 border-4 border-dashed border-gray-300 rounded-lg text-center transform -rotate-1">
                          <p className="font-sketch text-lg mb-2">Forks</p>
                          <p className="font-marker text-5xl" style={{ color: '#C4DB5D' }}>
                            🍴 {repo.forks_count}
                          </p>
                        </div>

                        <div className="p-4 border-4 border-dashed border-gray-300 rounded-lg text-center transform rotate-1">
                          <p className="font-sketch text-lg mb-2">Last Updated</p>
                          <p className="font-handwritten text-xl">
                            {new Date(repo.updated_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Annotation doodles */}
                    <svg className="absolute -right-16 top-0 w-32 h-32 hidden lg:block" viewBox="0 0 100 100">
                      <path 
                        d="M10,50 L30,40 L50,50 L70,30 L90,40" 
                        fill="none" 
                        stroke="#D84880" 
                        strokeWidth="3"
                      />
                      <circle cx="70" cy="30" r="6" fill="#D84880"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom scribble */}
                <svg className="w-full h-12 mt-8" viewBox="0 0 400 50">
                  <path 
                    d="M10,25 Q100,10 200,25 T390,25" 
                    fill="none" 
                    stroke="#C4DB5D" 
                    strokeWidth="4"
                    opacity="0.5"
                  />
                </svg>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-handwritten text-3xl mb-6">
            Want results like these?
          </p>
          <svg className="w-24 h-16 mx-auto" viewBox="0 0 100 50">
            <path 
              d="M50,10 Q55,25 50,40" 
              fill="none" 
              stroke="#D84880" 
              strokeWidth="3"
            />
            <path d="M45,35 L50,40 L55,35" fill="none" stroke="#D84880" strokeWidth="3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
