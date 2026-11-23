'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/#products', label: 'Products', keep: true },
  { href: '/about', label: 'About', keep: false },
  { href: '/#shipped', label: 'Shipping', keep: false },
  { href: '/contact', label: 'Contact', keep: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Blulyne Group home">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <rect x="0.5" y="0.5" width="27" height="27" rx="7" fill="#0E1422" stroke="#1F2A41" />
            <path
              d="M5 17 H10 L12.5 10 L15.5 21 L18 14 H23"
              fill="none"
              stroke="#3B82FF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Blulyne <small>Group LLC</small>
        </Link>
        <nav className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.keep ? 'keep' : undefined}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
