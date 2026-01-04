'use client';

import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';

export default function Home() {
  const products = [
    {
      name: 'VitalWall',
      description: 'Real-time analytics platform enhancing engagement through intelligent social proof',
      tagline: 'Trusted by 500+ websites',
    },
    {
      name: 'VoiceCommit',
      description: 'AI-powered voice-first development tool transforming ideas into GitHub actions',
      tagline: 'Zero to GitHub in 60 seconds',
    },
    {
      name: 'BlackOpsCenter',
      description: 'Enterprise-grade content intelligence platform for strategic communications',
      tagline: 'Multi-tenant SaaS',
    },
  ];

  const features = [
    {
      title: 'Innovation',
      description: 'Leveraging AI and modern technologies to solve real-world problems',
    },
    {
      title: 'Enterprise Scale',
      description: 'Building robust solutions designed for growth and reliability',
    },
    {
      title: 'Developer First',
      description: 'Creating tools that enhance productivity and streamline workflows',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <FadeInSection>
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blulyne LLC
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Building intelligent tools for modern developers and enterprises
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/portfolio" className="btn-primary">
              View Portfolio
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* Company Overview */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={feature.title} delay={index * 0.1}>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Products
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <FadeInSection key={product.name} delay={index * 0.1}>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 card-hover bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <p className="text-sm text-primary-500">{product.tagline}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection delay={0.3}>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="link-primary font-medium">
              Learn more about our products →
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
