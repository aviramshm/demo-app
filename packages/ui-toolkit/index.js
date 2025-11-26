import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const safeRequire = (specifier) => {
  try {
    return require(specifier);
  } catch (error) {
    return {
      __error: error instanceof Error ? error.message : String(error)
    };
  }
};

const PosthogIcons = safeRequire('@posthog/icons/dist/posthog-icons.cjs.js');
const PosthogWizard = safeRequire(
  '@posthog/wizard/dist/src/lib/helper-functions.js'
);
const VoiceflowChatPkg = safeRequire('@voiceflow/react-chat/package.json');
const ReactDataExportPkg = safeRequire('react-data-to-export/package.json');
const ActbaseNativePkg = safeRequire('@actbase/native/package.json');

const safeKeys = (maybeObject) =>
  maybeObject && typeof maybeObject === 'object'
    ? Object.keys(maybeObject).filter((key) => key !== '__error')
    : [];

export function getUiToolkitMetadata() {
  return {
    iconsLoaded: !PosthogIcons.__error,
    iconExports: safeKeys(PosthogIcons).slice(0, 5),
    wizardHelpers: safeKeys(PosthogWizard).slice(0, 5),
    voiceflowVersion: VoiceflowChatPkg.version,
    exportPackage: {
      name: ReactDataExportPkg.name,
      version: ReactDataExportPkg.version
    },
    actbaseVersion: ActbaseNativePkg.version
  };
}

export function buildWizardSketch(title = 'Demo Flow') {
  const helpersAvailable = safeKeys(PosthogWizard).length > 0;
  return {
    title,
    steps: Array.from({ length: 3 }, (_, index) => ({
      id: `step-${index + 1}`,
      label: `Checkpoint ${index + 1}`,
      action: helpersAvailable ? 'wizard helper available' : 'static'
    }))
  };
}

export function planVoiceflowIntegration(projectID = 'demo-project') {
  return {
    projectID,
    packageVersion: VoiceflowChatPkg.version,
    instructions:
      'Mount <VoiceflowProvider> in your React tree and load the chat widget.'
  };
}

export function summarizeActbaseNative() {
  return {
    package: ActbaseNativePkg.name,
    version: ActbaseNativePkg.version
  };
}

