import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

import { Logger } from '@posthog/agent';
import FSM from '@trigo/fsm';
import { createClientAsync } from 'orbit-soap';
import getArgs from 'get-them-args';

import {
  buildWizardSketch,
  getUiToolkitMetadata,
  planVoiceflowIntegration,
  summarizeActbaseNative
} from '@demo/ui-toolkit';

const require = createRequire(import.meta.url);
const reactNativeFetchPath = require.resolve('react-native-fetch');
const createSilgiEntry = require.resolve('create-silgi/index.mjs');
const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);

async function describeSoap(wsdlPath, logger) {
  try {
    const client = await createClientAsync(wsdlPath, { disableCache: true });
    logger.info('SOAP client created', { wsdlPath });
    return client.describe();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logger.error('Failed to parse WSDL', { wsdlPath, message });
    return { error: message, wsdlPath };
  }
}

async function inspectReactNativeFetch() {
  const source = await fs.readFile(reactNativeFetchPath, 'utf8');
  const snippet = source.split('\n').slice(0, 40);
  return {
    entry: reactNativeFetchPath,
    linesPreviewed: snippet.length,
    snippet
  };
}

async function runCreateSilgiHelp() {
  const helpText = await new Promise((resolve) => {
    const chunks = [];
    const child = spawn(
      process.execPath,
      [createSilgiEntry, '--help'],
      {
        env: { ...process.env, FORCE_COLOR: '0', CI: '1' }
      }
    );

    child.stdout.on('data', (data) => chunks.push(data.toString()));
    child.stderr.on('data', (data) => chunks.push(data.toString()));
    child.on('close', () => resolve(chunks.join('').trim()));
    child.on('error', (error) =>
      resolve(`Unable to execute create-silgi: ${error.message}`)
    );
  });

  return helpText.split('\n').slice(0, 12);
}

async function main() {
  const logger = new Logger({ prefix: '[DemoApp]' });
  const args = getArgs(process.argv.slice(2));
  logger.info('CLI flags detected', args);

  const wsdlPath = args.wsdl
    ? path.resolve(args.wsdl)
    : path.join(projectRoot, 'resources', 'calculator.wsdl');

  const workflow = new FSM({
    initialState: 'discovery',
    transitions: [
      { name: 'plan', from: 'discovery', to: 'planning' },
      { name: 'report', from: 'planning', to: 'reporting' }
    ],
    data: { wsdlPath }
  });

  await workflow.plan();
  const soapDescription = await describeSoap(wsdlPath, logger);
  await workflow.report();

  const uiMetadata = getUiToolkitMetadata();
  const wizardSketch = buildWizardSketch(args.title || 'PostHog audit flow');
  const voiceflowPlan = planVoiceflowIntegration(args.voiceflow || 'demo-project');
  const actbaseNative = summarizeActbaseNative();
  const fetchInsights = await inspectReactNativeFetch();
  const silgiPreview = await runCreateSilgiHelp();

  const report = {
    generatedAt: new Date().toISOString(),
    workflow: {
      state: workflow.state,
      availableTransitions: workflow.transitions(),
      wsdlPath
    },
    soapDescription,
    uiMetadata,
    wizardSketch,
    voiceflowPlan,
    actbaseNative,
    fetchInsights,
    silgiPreview
  };

  const output = args.output
    ? path.resolve(args.output)
    : path.join(projectRoot, 'demo-report.json');

  await fs.writeFile(output, JSON.stringify(report, null, 2));
  logger.info('Report written', { output });
  console.log(`Demo report saved to ${output}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

