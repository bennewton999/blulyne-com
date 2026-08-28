import {
  COMPANY_ADDRESS_LINE1,
  COMPANY_ADDRESS_LINE2,
  COMPANY_CONTACT_NAME,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
} from '@/lib/company';

type CompanyAddressProps = {
  className?: string;
  showContactName?: boolean;
};

export default function CompanyAddress({
  className = '',
  showContactName = false,
}: CompanyAddressProps) {
  return (
    <address className={`not-italic ${className}`.trim()}>
      <p className="font-medium text-gray-900 dark:text-white">{COMPANY_LEGAL_NAME}</p>
      {showContactName && <p>{COMPANY_CONTACT_NAME}</p>}
      <p>
        <span className="block">{COMPANY_ADDRESS_LINE1}</span>
        <span className="block">{COMPANY_ADDRESS_LINE2}</span>
      </p>
      <p>
        <a href={`mailto:${COMPANY_EMAIL}`} className="link-primary font-medium">
          {COMPANY_EMAIL}
        </a>
      </p>
    </address>
  );
}
