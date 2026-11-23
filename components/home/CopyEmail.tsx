'use client';

import { useRef, useState } from 'react';

export default function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState('Copy email');
  const ref = useRef<HTMLSpanElement>(null);

  const select = () => {
    if (!ref.current) return;
    const range = document.createRange();
    range.selectNodeContents(ref.current);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    setLabel('Selected, press copy');
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel('Copied');
      window.setTimeout(() => setLabel('Copy email'), 1800);
    } catch {
      select();
    }
  };

  return (
    <>
      <span className="email" ref={ref}>
        {email}
      </span>
      <button className="copy" type="button" onClick={copy}>
        {label}
      </button>
    </>
  );
}
