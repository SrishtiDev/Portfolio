import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
  title: 'Srishti Rawat — Full-stack Engineer',
  description:
    'Full-stack engineer shipping production LLM systems end-to-end. Architected NestJS RAG pipelines over 50,000+ documents, BullMQ worker architecture, and agentic workflows.',
  metadataBase: new URL('https://portfolio-srishti-rwt.vercel.app'),
  openGraph: {
    title: 'Srishti Rawat — Full-stack Engineer',
    description:
      'Full-stack engineer shipping production LLM systems end-to-end. Architected NestJS RAG pipelines over 50,000+ documents, BullMQ worker architecture, and agentic workflows.',
    url: 'https://portfolio-srishti-rwt.vercel.app',
    siteName: 'Srishti Rawat Portfolio',
    images: [
      {
        url: '/srishti.jpg',
        width: 800,
        height: 800,
        alt: 'Srishti Rawat',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srishti Rawat — Full-stack Engineer',
    description:
      'Full-stack engineer shipping production LLM systems end-to-end. Architected NestJS RAG pipelines over 50,000+ documents.',
    images: ['/srishti.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
