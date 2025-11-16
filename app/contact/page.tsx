import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Blulyne LLC',
  description: 'Get in touch with Blulyne LLC',
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Have a question or want to learn more about our products? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <ContactForm />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          You can also reach us directly at{' '}
          <a
            href="mailto:ben@blulyne.com"
            className="text-gray-900 hover:text-gray-600 font-medium"
          >
            ben@blulyne.com
          </a>
        </p>
      </div>
    </div>
  );
}
