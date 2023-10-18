import type { PartytownConfig } from "@builder.io/partytown/integration";
import { partytownSnippet } from "@builder.io/partytown/integration";

export const ScriptPartytown = () => {
  const config: PartytownConfig = {
    debug: import.meta.env.DEV,
    forward: [""],
  };
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <script dangerouslySetInnerHTML={partytownSnippet(config)} />;
};
