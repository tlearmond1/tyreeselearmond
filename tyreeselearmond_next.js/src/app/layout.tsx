// app/layout.tsx
'use client'; // This directive is required to use hooks like usePathname.

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>Tyreese Learmond</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tyreese Learmond - Incoming law student passionate about law, governance, education, business, and software development." />
        <meta name="keywords" content="Tyreese Learmond, law student, governance, education, business, software development, portfolio, The Learmond Corporation, Learmond, Corporation, Tyreese, Learmond, Source, Fintech, CEO, Startup, Founder, Source Incorporated, Resume, Lawyer, Henry Foster Distinguish Scholar, Scholar, University of North Florida, University of Nebraska-Lincoln College of Law, University of Nebraska, Political Science, Philosophy, Kingston College High School" />
        <meta name="author" content="Tyreese Learmond" />
        <meta property="og:title" content="Tyreese Learmond" />
        <meta property="og:site_name" content="Tyreese Learmond" />
        <meta property="og:description" content="Explore Tyreese Learmond's official website showcasing projects, resume, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tyreeselearmond.com/" />
        <meta property="og:image" content="/assets/TyreeseLearmondLogo2-nbckgrd.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tyreese Learmond" />
        <meta name="twitter:description" content="Explore Tyreese Learmond's official website showcasing projects, resume, and contact information." />
        <meta name="twitter:image" content="/assets/TyreeseLearmondLogo2-nbckgrd.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png" />
        <link rel="icon" href="/assets/favicon_io/favicon.ico" sizes="48x48" />
        <link rel="canonical" href="https://www.tyreeselearmond.com/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              "url": "https://tyreeselearmond.com",
              "logo": "https://tyreeselearmond.com/static/assets/favicon_io/apple-touch-icon.png",
              "name": "Tyreese Learmond"
            }),
          }}
        />
      </head>
      <body>
        <header>
          {isHomePage ? (
            <h1>Tyreese Learmond</h1>
          ) : (
            <div className="branding">
              <img src="/assets/TyreeseLearmondLogo2-nbckgrd.png" alt="Tyreese Learmond" />
              <h1>Tyreese Learmond</h1>
            </div>
          )}
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/resume">Resume</Link></li>
              <li><Link href="/links">Links</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="about-wrapper" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              {children}
            </div>
            <aside className="socials-box" style={{ width: '200px', flexShrink: 0 }}>
              <h3>Connect with Me</h3>
              <a href="/links" target="_blank" rel="noopener noreferrer">
                <img src="/assets/tyreeselearmond_links_qr.png" alt="Tyreese Learmond Links QR Code" style={{ width: '100%', height: 'auto', marginRight: '50px' }} />
              </a>
            </aside>
          </section>
        </main>
        <footer>
          <div className="affiliates-container">
            <h4 style={{ marginTop: '0.5rem' }}>Affiliated Entities:</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="https://www.thelearmondcorporation.com" target="_blank" rel="noopener noreferrer">The Learmond Corporation</a></li>
              <li><a href="https://learnmondfinancial.com" target="_blank" rel="noopener noreferrer">Learmond Financial</a></li>
              <li><a href="https://source.thelearmondcorporation.com" target="_blank" rel="noopener noreferrer">Source</a></li>
              <li><a href="https://x.com/tyreeselearmond" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://facebook.com/tyreeselearmond1" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com/tyreeselearmond" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <p>© 2025 The Learmond Corporation. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}