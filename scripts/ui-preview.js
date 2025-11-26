import {
  buildWizardSketch,
  getUiToolkitMetadata,
  planVoiceflowIntegration,
  summarizeActbaseNative
} from '@demo/ui-toolkit';

const metadata = getUiToolkitMetadata();
const wizard = buildWizardSketch('Preview Flow');
const voiceflow = planVoiceflowIntegration('preview-project');
const actbase = summarizeActbaseNative();

console.log(
  JSON.stringify(
    {
      metadata,
      wizard,
      voiceflow,
      actbase
    },
    null,
    2
  )
);

