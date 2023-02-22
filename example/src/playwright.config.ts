import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import dotenv from 'dotenv'

// read in environment variables from local .env files
dotenv.config()

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run start',
    port: 3000,
  },
  testDir: './playwright',
  fullyParallel: true,
  timeout: 30 * 1000, // max time a test can run for
  expect: { timeout: 5000 }, // max time expect can run for
  reporter: 'html', // https://playwright.dev/docs/test-reporters

  /**
   *  Use globalSetup in your config if you want to persist login between tests
   *  See src/globalSetup.ts for an example
   *  !!IMPORTANT!! add playwright.session.json to your .gitignore
   */
  globalSetup: require.resolve('./playwright/globalSetup'),

  use: {
    trace: 'on-first-retry',
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
}

export default config
