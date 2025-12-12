import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FinoNest - Complete Financial Services Platform | Loans, Cards & Courses",
    template: "%s | FinoNest"
  },
  description: "FinoNest offers comprehensive financial services including personal loans, home loans, business loans, credit cards, vehicle loans, education loans, car valuation tool, and digital marketing courses. Get instant approvals with competitive rates.",
  keywords: "financial services, loans, credit cards, car valuation, digital marketing courses, finance courses, loan calculator, EMI calculator, instant loan approval",
  authors: [{ name: "FinoNest Team" }],
  creator: "FinoNest",
  publisher: "FinoNest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://finonest.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://finonest.com',
    title: 'FinoNest - Complete Financial Services Platform',
    description: 'Comprehensive financial services including loans, credit cards, car valuation, and educational courses',
    siteName: 'FinoNest',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'FinoNest - Financial Services Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinoNest - Complete Financial Services Platform',
    description: 'Comprehensive financial services including loans, credit cards, and courses',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0064D6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ParallaxProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}