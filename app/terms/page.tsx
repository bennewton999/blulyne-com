import type { Metadata } from 'next';
import {
  COMPANY_ADDRESS_LINE1,
  COMPANY_ADDRESS_LINE2,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
} from '@/lib/company';

export const metadata: Metadata = {
  title: `Terms of Use | ${COMPANY_LEGAL_NAME}`,
  description: `Terms of use for websites and software operated by ${COMPANY_LEGAL_NAME}.`,
};

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">Effective date: August 2026</p>

      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The agreement</h2>
          <p>
            These terms govern use of websites and software operated by {COMPANY_LEGAL_NAME}, a
            Florida limited liability company, including BlackOps Center, VoiceCommit, VitalWall,
            and related properties. By using those sites or apps, you agree to these terms.
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
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The services</h2>
          <p>
            Our products are software and hosted services. What each product does, and any pricing,
            is described on that product&apos;s own site. We may change, suspend, or discontinue a
            service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your use</h2>
          <p>
            You agree to use the services lawfully and not to abuse, disrupt, or attempt unauthorized
            access to them. You are responsible for content you submit. If a product requires an
            account, you are responsible for keeping credentials confidential and for activity under
            that account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual property</h2>
          <p>
            {COMPANY_LEGAL_NAME} and its licensors own the sites, apps, and related marks. You
            receive a limited right to use the services, not ownership of them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
          <p>
            The services are provided as is. We do not warrant uninterrupted or error-free operation.
            To the extent allowed by law, we are not liable for indirect or consequential damages, or
            for lost data, profits, or business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Florida, USA, without regard to
            conflict-of-law rules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes</h2>
          <p>
            We may update these terms. Continued use after a new effective date means you accept the
            update.
          </p>
        </section>
      </div>
    </div>
  );
}
