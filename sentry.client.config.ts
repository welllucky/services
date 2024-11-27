// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// import * as Spotlight from "@spotlightjs/spotlight";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate:
    process.env.NEXT_PUBLIC_NODE_ENV === "development" ? 1.0 : 0.8,

  replaysOnErrorSampleRate:
    process.env.NEXT_PUBLIC_NODE_ENV === "development" ? 1.0 : 0.8,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate:
    process.env.NEXT_PUBLIC_NODE_ENV === "development" ? 1.0 : 0.8,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  environment: process.env.NEXT_PUBLIC_NODE_ENV,

  release: process.env.NEXT_PUBLIC_RELEASE,

  spotlight: process.env.NEXT_PUBLIC_NODE_ENV === "development",

  enabled: process.env.NEXT_PUBLIC_HOST_ENV !== "local",
});

// if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
//   Spotlight.init();
// }