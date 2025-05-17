"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

/**
 * PostHogProvider component initializes and provides PostHog analytics context.
 * - Disables automatic pageview tracking (handled manually)
 * - Enables automatic pageleave tracking
 * - Requires NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST environment variables
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      console.warn(
        "PostHog API key is missing. Analytics will not be tracked."
      );
      return;
    }
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      capture_pageleave: true, // Enable automatic pageleave capture
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
