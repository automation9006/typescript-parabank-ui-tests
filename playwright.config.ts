import { defineConfig  } from '@playwright/test'
import dotenv from 'dotenv'

// Load the environment file dynamically
const ENV = process.env.ENV || 'qa'
dotenv.config({ path: `.env.${ENV}` })

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.ts/,
  timeout: 50 * 1000,
  expect: {
    timeout: 10000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['allure-playwright'],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    video: 'off',
    screenshot:'only-on-failure',
    headless:false,
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    launchOptions: {
      args: ['--start-maximized'],
      slowMo:1000
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',
        viewport:null,
      },
    },
    {
      name: 'chromium',
      use: {
        viewport: null,
      },
    },

    {
      name: 'firefox',
      use: {
        viewport: null,
      },
    },

    {
      name: 'webkit',
      use: {
        viewport: null,
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
