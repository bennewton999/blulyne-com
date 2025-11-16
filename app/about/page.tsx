import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Blulyne LLC',
  description: 'Learn about Blulyne LLC and our mission to build intelligent tools for modern developers and enterprises',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Blulyne</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Blulyne LLC is dedicated to building intelligent tools that empower modern developers
            and enterprises to work smarter, faster, and more effectively. We believe in leveraging
            cutting-edge technologies, particularly AI, to solve real-world problems and streamline
            complex workflows.
          </p>
          <p className="text-gray-600">
            Our portfolio spans real-time analytics, AI-powered development tools, and enterprise
            content intelligence platforms—each designed with a focus on user experience,
            scalability, and innovation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Driven Innovation</h3>
              <p className="text-gray-600">
                We integrate artificial intelligence into our products to enhance productivity
                and create more intuitive user experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise-Grade Quality</h3>
              <p className="text-gray-600">
                Every solution we build is designed with security, scalability, and reliability
                at its core, ready for enterprise deployment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer-Centric Design</h3>
              <p className="text-gray-600">
                We build tools that developers actually want to use, focusing on streamlining
                workflows and reducing friction in the development process.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 mb-4">
            Blulyne LLC is the parent company for three innovative platforms:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>VitalWall</strong> - Real-time analytics and visitor tracking for 500+ websites
            </li>
            <li>
              <strong>VoiceCommit</strong> - AI-powered voice-to-GitHub development tool
            </li>
            <li>
              <strong>BlackOpsCenter</strong> - Enterprise content intelligence platform
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
