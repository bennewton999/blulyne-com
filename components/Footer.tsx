import Link from 'next/link';
import { COMPANY_ADDRESS, COMPANY_COPYRIGHT_YEAR, COMPANY_LEGAL_NAME } from '@/lib/company';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <address>
          {COMPANY_LEGAL_NAME} · {COMPANY_ADDRESS}
        </address>
        <nav aria-label="Legal">
          <a href="https://x.com/blulyne" target="_blank" rel="noopener noreferrer">
            @blulyne on X
          </a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <span>
            &copy; {COMPANY_COPYRIGHT_YEAR} {COMPANY_LEGAL_NAME}
          </span>
        </nav>
      </div>
    </footer>
  );
}
