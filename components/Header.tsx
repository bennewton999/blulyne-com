'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image
              src="/images/blulyne-logo.png"
              alt="Blulyne"
              width={140}
              height={40}
              priority
              className="dark:brightness-110"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
