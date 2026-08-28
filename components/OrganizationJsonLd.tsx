import {
  COMPANY_ADDRESS,
  COMPANY_ADDRESS_LINE1,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_URL,
} from '@/lib/company';

export default function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_LEGAL_NAME,
    url: COMPANY_URL,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      name: COMPANY_ADDRESS,
      streetAddress: COMPANY_ADDRESS_LINE1,
      addressLocality: 'St. Petersburg',
      addressRegion: 'FL',
      postalCode: '33702',
      addressCountry: 'US',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
