# Learning Playwright Fundamentals 2x

Practice project for learning the fundamentals of [Playwright](https://playwright.dev/) end-to-end testing with TypeScript.

## Tech Stack

- [Playwright Test](https://playwright.dev/docs/intro) `^1.61.1`
- TypeScript / Node.js (`@types/node`)

## Project Structure

```
.
├── tests/                 # Playwright test specs
│   └── example.spec.ts    # Sample tests against playwright.dev
├── playwright.config.ts   # Playwright configuration (browsers, reporter, etc.)
├── package.json
└── package-lock.json
```

Tests run against Chromium, Firefox and WebKit. HTML reporter is enabled.

## Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
npx playwright install
```

### Run Tests

```bash
# Run all tests (headless)
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run a single browser project
npx playwright test --project=chromium

# Open the interactive UI
npx playwright test --ui
```

### View Report

```bash
npx playwright show-report
```

## Notes

- `node_modules/`, `test-results/` and `playwright-report/` are generated artifacts and are excluded from version control via `.gitignore`.
