"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider as JotaiProvider } from "jotai";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"


const Toaster = dynamic(
  () => import("@/components/ui/sonner").then((mod) => mod.Toaster),
  { ssr: false }
);

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
      >
        <AppProgressProvider
          color="var(--foreground)"
          height="2px"
          delay={500}
          options={{ showSpinner: false }}
        >
          <PostHogProvider>
            {children}
          </PostHogProvider>
          <Analytics />
        </AppProgressProvider>

        <Toaster />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </JotaiProvider>
  );
}
