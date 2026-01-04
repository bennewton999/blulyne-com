'use client';

import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

const products = [
  {
    name: 'VitalWall',
    url: 'https://vitalwall.com',
    tagline: 'Used by 500+ websites',
    description: 'Real-time website analytics and visitor tracking platform that enhances engagement through intelligent social proof.',
    features: [
      'Real-time visitor tracking and analytics',
      'Intelligent social proof notifications',
      'Customizable engagement widgets',
      'Built with Next.js and TypeScript',
      'Trusted by over 500 websites worldwide',
    ],
    tech: ['Next.js', 'TypeScript', 'Real-time Analytics'],
    image: '/images/vitalwall.png',
  },
  {
    name: 'VoiceCommit',
    url: 'https://voicecommit.com',
    tagline: 'Zero to GitHub in 60 seconds',
    description: 'AI-powered voice-first development tool that converts spoken ideas into structured GitHub actions.',
    features: [
      'Voice-to-GitHub issue creation',
      'AI-powered content structuring',
      'Automatic pull request generation',
      'Stream-of-consciousness to professional documentation',
      'Seamless GitHub integration',
    ],
    tech: ['AI/ML', 'Voice Processing', 'GitHub API', 'Next.js'],
    image: '/images/voicecommit.png',
  },
  {
    name: 'BlackOpsCenter',
    url: 'https://blackopscenter.com',
    tagline: 'Content intelligence platform',
    description: 'Enterprise-grade content intelligence platform designed for strategic communications and multi-tenant SaaS deployments.',
    features: [
      'Multi-tenant architecture with complete isolation',
      'Enterprise-level security implementation',
      'Advanced content intelligence and analytics',
      'Strategic communications tools',
      'Scalable SaaS infrastructure',
    ],
    tech: ['Next.js 15', 'Supabase', 'Multi-tenant SaaS'],
    image: '/images/blackopscenter.png',
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeInSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions spanning real-time analytics, AI-powered development tools,
            and enterprise content intelligence
          </p>
        </div>
      </FadeInSection>

      <div className="space-y-16">
        {products.map((product, index) => (
          <FadeInSection key={product.name} delay={index * 0.1}>
            <article
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-start`}
            >
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h2>
                  <p className="text-sm text-primary-500 uppercase tracking-wide">{product.tagline}</p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Visit {product.name}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                <Image
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </article>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
