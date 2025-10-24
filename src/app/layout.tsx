import type { Metadata } from 'next';
import './index.css';
import Script from 'next/script';
import { StructuredData } from '@/components/seo/StructuredData';
import { Navigation } from '@/components/navigation/Navigation';
import { I18nProvider } from '@/i18n/context';

export const metadata: Metadata = {
  title: 'Slordef | CTO & CISO Freelance - Architecture, Security, Technical Leadership',
  description: 'CTO and CISO with 15+ years of experience in fullstack development, security, and technical leadership. I help startups and tech-driven SMEs structure their architecture, secure their systems, and manage technical complexity.',
  applicationName: 'Slordef',
  authors: { name: 'Slordef', url: 'https://slordef-webmaster.ch' },
  generator: 'Next.js',
  keywords: [
    'CTO',
    'CISO',
    'Freelance',
    'Technical Leadership',
    'Security',
    'Architecture',
    'Fullstack Developer',
    'ISO 27001',
    'DevSecOps',
    'TypeScript',
    'Node.js',
    'React',
    'Python',
    'Switzerland',
    'Lausanne',
  ],
  referrer: 'origin',
  robots: 'index, follow',
  icons: {
    icon: '/template/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://slordef-webmaster.ch',
    title: 'Slordef | CTO & CISO Freelance',
    description: 'CTO and CISO with 15+ years of experience helping startups and SMEs structure their architecture, secure their systems, and manage technical complexity.',
    siteName: 'Slordef',
    images: [
      {
        url: '/template/logo.png',
        width: 367,
        height: 322,
        alt: 'Slordef - CTO & CISO Freelance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@slordef',
    creator: '@slordef',
    images: '/template/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/c628b2d872.js" crossOrigin="anonymous" />
      <html lang="en">
        <head>
          <StructuredData />
        </head>
        <body>
          <I18nProvider>
            <Navigation />
            {children}
          </I18nProvider>
        </body>
      </html>
    </>
  );
}
