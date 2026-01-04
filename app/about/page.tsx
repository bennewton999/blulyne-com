'use client';

import FadeInSection from '@/components/FadeInSection';

export default function About() {
  const approaches = [
    {
      title: 'AI-Driven Innovation',
      description: 'We integrate artificial intelligence into our products to enhance productivity and create more intuitive user experiences.',
    },
    {
      title: 'Enterprise-Grade Quality',
      description: 'Every solution we build is designed with security, scalability, and reliability at its core, ready for enterprise deployment.',
    },
    {
      title: 'Developer-Centric Design',
      description: 'We build tools that developers actually want to use, focusing on streamlining workflows and reducing friction in the development process.',
    },
  ];

  const products = [
    { name: 'VitalWall', description: 'Real-time analytics and visitor tracking for 500+ websites' },
    { name: 'VoiceCommit', description: 'AI-powered voice-to-GitHub development tool' },
    { name: 'BlackOpsCenter', description: 'Enterprise content intelligence platform' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeInSection>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Blulyne</h1>
      </FadeInSection>

      <div className="prose prose-lg max-w-none">
        <FadeInSection delay={0.1}>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Blulyne LLC is dedicated to building intelligent tools that empower modern developers
              and enterprises to work smarter, faster, and more effectively. We believe in leveraging
              cutting-edge technologies, particularly AI, to solve real-world problems and streamline
              complex workflows.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Our portfolio spans real-time analytics, AI-powered development tools, and enterprise
              content intelligence platforms—each designed with a focus on user experience,
              scalability, and innovation.
            </p>
          </section>
        </FadeInSection>

        <section className="mb-12">
          <FadeInSection>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Approach</h2>
          </FadeInSection>
          <div className="space-y-4">
            {approaches.map((approach, index) => (
              <FadeInSection key={approach.title} delay={index * 0.1}>
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{approach.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{approach.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        <FadeInSection>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Products</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Blulyne LLC is the parent company for three innovative platforms:
            </p>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name} className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong className="text-gray-900 dark:text-white">{product.name}</strong> - {product.description}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
