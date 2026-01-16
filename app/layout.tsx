import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { ReactQueryClientProvider } from "@/lib/query-client/query-client.provider";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SurfSense – Customizable AI Research & Knowledge Management Assistant",
  description:
    "SurfSense is an AI-powered research assistant that integrates with tools like Notion, GitHub, Slack, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          roboto.className,
          "bg-white dark:bg-black antialiased h-full w-full"
        )}
      >
        <PostHogProvider>
          <LocaleProvider>
            <I18nProvider>
              <ThemeProvider
                attribute="class"
                enableSystem
                disableTransitionOnChange
                defaultTheme="light"
              >
                <ReactQueryClientProvider>
                  {children}
                </ReactQueryClientProvider>
                <Toaster />
              </ThemeProvider>
            </I18nProvider>
          </LocaleProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
