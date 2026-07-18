# Learning Playwright Fundamentals 2x

Practice project for learning the fundamentals of [Playwright](https://playwright.dev/) end-to-end testing with TypeScript.

## Tech Stack

- [Playwright Test](https://playwright.dev/docs/intro) `^1.61.1`
- TypeScript / Node.js (`@types/node`)

## Project Structure

Tests are organized into numbered topic folders that follow the course modules. Each folder is populated as the corresponding module is completed.

```
.
├── tests/
│   ├── 01_Basics/                    # First test, page.goto, title assertion
│   ├── 02_first_tests/               # Browser / Context / Page (BCP) model, multi-context
│   ├── 03_Locators_Commands/
│   ├── 04_Session_Storage/
│   ├── 05_Allure_Reporting/
│   ├── 06_Multiple_Element_/
│   ├── 07_WebTables/
│   ├── 08_Web_Select_Frames_Iframe/
│   ├── 09_Frame_Iframe/
│   ├── 10_Keyboard_Hover_Drag_Drop/
│   ├── 11_JS_Alerts/
│   ├── 12_Handle_SVG/
│   ├── 13_Shadow_DOM/
│   ├── 14_FileUpload/
│   ├── 15_File_Download/
│   ├── 16_Scroll_toElement/
│   ├── 17_Explicit_Assertions/
│   ├── 18_Test_hooks/
│   ├── 19_Data_Driven_Testing/
│   ├── 20_Page_Object_Model/
│   ├── 21_Fixture/
│   ├── 22_Misc_Concepts/
│   ├── 23_Advance_Framework/
│   ├── Projects/                     # Larger practice projects
│   └── example.spec.ts               # Sample tests against playwright.dev
├── playwright.config.ts              # Playwright configuration (browsers, reporter, etc.)
├── package.json
└── package-lock.json
```

Two kinds of files live under `tests/`:

- **Test specs** (`*.spec.ts`) — run by the Playwright Test runner with the `test`/`expect` API.
- **Standalone scripts** (e.g. `02_232_BCPSpect.ts`) — run directly with the Playwright library API (`chromium.launch(...)`) via `ts-node`/`tsx`, not the test runner.

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
