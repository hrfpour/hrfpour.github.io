import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farhadipour.com"),
  title: {
    default: "Hamidreza Farhadipour | Data Scientist & ML Researcher",
    template: "%s | Hamidreza Farhadipour",
  },
  description:
    "Personal academic website of Hamidreza Farhadipour — Data Scientist and M.Sc. student in Computer Science. Research on network traffic analysis, time-series modeling, and anomaly detection. Projects, publications, and notes.",
  keywords: [
    "Hamidreza Farhadipour",
    "Data Science",
    "Machine Learning",
    "Anomaly Detection",
    "Network Traffic Analysis",
    "Time Series",
    "Research",
    "Portfolio",
  ],
  authors: [{ name: "Hamidreza Farhadipour" }],
  creator: "Hamidreza Farhadipour",
  openGraph: {
    title: "Hamidreza Farhadipour | Data Scientist & ML Researcher",
    description:
      "Research, projects, and notes on data science, network traffic analysis, and anomaly detection.",
    url: "https://farhadipour.com",
    siteName: "farhadipour.com",
    type: "website",
    locale: "en_US",
    alternateLocale: "fa_IR",
  },
  twitter: {
    card: "summary",
    title: "Hamidreza Farhadipour | Data Scientist & ML Researcher",
    description:
      "Research, projects, and notes on data science, network traffic analysis, and anomaly detection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
