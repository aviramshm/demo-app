# demo-app

Educational Node.js CLI that demonstrates how to work with previously flagged
packages by pinning them to safe versions and keeping a clear audit trail.

## What it shows

- **Runtime demo** – `src/index.js` orchestrates a mini workflow that parses a
  local SOAP file (`resources/calculator.wsdl`), inspects React Native tooling,
  and snapshots UI package metadata into `demo-report.json`.
- **UI toolkit metadata** – `@demo/ui-toolkit` bundles the React-centric
  dependencies so they remain transient while still being exercised.
- **Safe versions** – every package from the request is installed at a version
  different from the suspicious one (see the matrix below).

## Running it

```bash
npm install
npm start                 # generates demo-report.json at the repo root
npm run demo:ui           # prints the UI metadata snapshot
npm run dev:ui            # launches the new React UI (Vite dev server)
npm run build:ui          # builds the UI for production
node src/index.js --wsdl ./resources/calculator.wsdl --output ./report.json
```

CLI flags are parsed via `get-them-args`. The workflow state machine comes from
`@trigo/fsm`, SOAP parsing is powered by `orbit-soap`, and logging uses
`@posthog/agent`’s `Logger`.

## Dependency matrix

| Package | Version in app | Role |
| --- | --- | --- |
| `@posthog/agent` | `1.24.2` | Direct – logging inside CLI |
| `@posthog/icons` | `0.36.0` | Transitive via `@demo/ui-toolkit` |
| `@posthog/wizard` | `1.18.2` | Transitive helper wiring |
| `@voiceflow/react-chat` | `1.65.2` | Transitive metadata only |
| `orbit-soap` | `0.43.12` | Direct – parses the local WSDL |
| `@trigo/fsm` | `3.4.1` | Direct – drives workflow states |
| `create-silgi` | `0.3.0` | Direct – CLI help output captured |
| `get-them-args` | `1.3.2` | Direct – argument parsing |
| `react-data-to-export` | `1.0.0` | Transitive metadata via toolkit |
| `react-native-fetch` | `2.0.0` | Direct – source inspection snippet |
| `@actbase/native` | `0.1.31` | Transitive metadata via toolkit |

The mix satisfies the “some direct, some transient” requirement while keeping
every version away from the malicious values in the IOC list.

