import type { Metadata } from 'next';
import {
  COMPANY_ADDRESS_LINE1,
  COMPANY_ADDRESS_LINE2,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
} from '@/lib/company';

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_LEGAL_NAME}`,
  description: `How ${COMPANY_LEGAL_NAME} handles information on its sites and apps.`,
};

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">Effective date: August 2026</p>

      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who we are</h2>
          <p>
            {COMPANY_LEGAL_NAME} (&quot;Blulyne,&quot; &quot;we,&quot; or &quot;us&quot;) operates this
            website and related software products, including BlackOps Center, VoiceCommit,
            VitalWall, and related properties. This policy explains what information we collect and
            how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
          <address className="not-italic">
            <p>{COMPANY_LEGAL_NAME}</p>
            <p>{COMPANY_ADDRESS_LINE1}</p>
            <p>{COMPANY_ADDRESS_LINE2}</p>
            <p>
              <a href={`mailto:${COMPANY_EMAIL}`} className="link-primary font-medium">
                {COMPANY_EMAIL}
              </a>
            </p>
          </address>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What we collect</h2>
          <p className="mb-4">
            If you use the contact form on blulyne.com, we collect the name, email address, subject,
            and message you submit so we can respond. Our servers may also record ordinary request
            data such as IP address, browser type, and the time of the request.
          </p>
          <p>
            Individual products may collect additional information needed to run that product (for
            example, an account email if you sign up). Those details, when they apply, are described
            in that product&apos;s own notices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How we use it</h2>
          <p>
            We use this information to reply to you, operate and secure our sites and software, and
            improve how they work. We do not sell personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sharing</h2>
          <p>
            We share information when it is needed to run the services (such as delivering email from
            the contact form), to comply with the law, or to protect our rights. We do not publish a
            list of vendors here; if a product has its own privacy notice, that notice controls for
            that product.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your requests</h2>
          <p>
            Email{' '}
            <a href={`mailto:${COMPANY_EMAIL}`} className="link-primary font-medium">
              {COMPANY_EMAIL}
            </a>{' '}
            to ask about, update, or delete personal information we hold about you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes</h2>
          <p>
            We may update this policy. When we do, we will change the effective date at the top of
            this page.
          </p>
        </section>
      </div>
    </div>
  );
}
