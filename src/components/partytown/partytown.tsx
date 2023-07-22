import type { PartytownConfig } from '@builder.io/partytown/integration'
import { partytownSnippet } from '@builder.io/partytown/integration'

export const ScriptPartytown = () => {
  const config: PartytownConfig = {
    debug: import.meta.env.DEV,
    forward: ['gtag'],
  }
  // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <script dangerouslySetInnerHTML={partytownSnippet(config)} />
}
