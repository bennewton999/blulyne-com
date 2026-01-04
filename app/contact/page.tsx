'use client';

import ContactForm from '@/components/ContactForm';
import FadeInSection from '@/components/FadeInSection';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeInSection>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have a question or want to learn more about our products? We&apos;d love to hear from you.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
          <ContactForm />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            You can also reach us directly at{' '}
            <a
              href="mailto:ben@blulyne.com"
              className="link-primary font-medium"
            >
              ben@blulyne.com
            </a>
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
