import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aeron Jhed V. Lachano — Computer Science Student & Aspiring Full-Stack Developer",
  description:
    "Portfolio of Aeron Jhed V. Lachano, a fourth-year Computer Science student at Laguna State Polytechnic University with experience in web development, machine learning, game development, and collaborative software projects.",
  keywords: [
    "Aeron Jhed Lachano",
    "Computer Science",
    "Portfolio",
    "Software Developer",
    "Full-Stack Developer",
    "LSPU",
    "OJT",
    "Internship"
  ],
  authors: [{ name: "Aeron Jhed V. Lachano" }],
  creator: "Aeron Jhed V. Lachano",
  openGraph: {
    title: "Aeron Jhed V. Lachano — Portfolio",
    description:
      "Fourth-year Computer Science student with hands-on experience in web development, machine learning, game development, and collaborative software projects.",
    type: "website",
    locale: "en_US",
    siteName: "Aeron Jhed V. Lachano Portfolio"
  },
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${caveat.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  var qTheme = params.get('theme');
                  var stored = localStorage.getItem('theme');
                  if (qTheme === 'dark' || qTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', qTheme);
                  } else if (stored === 'dark' || stored === 'light') {
                    document.documentElement.setAttribute('data-theme', stored);
                  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        <div className="sketch-notebook-margin" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
