import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Blulyne LLC
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Building intelligent tools for modern developers and enterprises
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Leveraging AI and modern technologies to solve real-world problems
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Scale</h3>
            <p className="text-gray-600">
              Building robust solutions designed for growth and reliability
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer First</h3>
            <p className="text-gray-600">
              Creating tools that enhance productivity and streamline workflows
            </p>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">VitalWall</h3>
            <p className="text-gray-600 mb-4">
              Real-time analytics platform enhancing engagement through intelligent social proof
            </p>
            <p className="text-sm text-gray-500">Trusted by 500+ websites</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">VoiceCommit</h3>
            <p className="text-gray-600 mb-4">
              AI-powered voice-first development tool transforming ideas into GitHub actions
            </p>
            <p className="text-sm text-gray-500">Zero to GitHub in 60 seconds</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">BlackOpsCenter</h3>
            <p className="text-gray-600 mb-4">
              Enterprise-grade content intelligence platform for strategic communications
            </p>
            <p className="text-sm text-gray-500">Multi-tenant SaaS</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/portfolio"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Learn more about our products →
          </Link>
        </div>
      </section>
    </div>
  );
}
