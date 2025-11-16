# Blulyne LLC Website

Official website for Blulyne LLC - Building intelligent tools for modern developers and enterprises.

## Features

- **Portfolio Showcase**: Highlighting VitalWall, VoiceCommit, and BlackOpsCenter
- **Contact Form**: Integrated with Resend for email notifications
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Resend API for email

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Resend API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add `RESEND_API_KEY` to your Vercel environment variables
4. Configure your custom domain (blulyne.com)
5. Deploy!

## Environment Variables

- `RESEND_API_KEY` - API key for Resend email service

## License

© 2025 Blulyne LLC. All rights reserved.
