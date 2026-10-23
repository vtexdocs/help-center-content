---
title: 'Agent Builder: More control over agent configuration and knowledge base'
slug: '2026-10-08-agent-builder-more-control-over-agent-and-knowledge-base-configuration'
createdAt: 2026-10-08T12:00:00.000Z
updatedAt: 2026-10-08T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: '2026-10-08-agent-builder-more-control-over-agent-and-knowledge-base-configuration'
locale: en
announcementSynopsisEN: 'Agent Builder now includes seven improvements that reduce reliance on the CLI and provide greater control over AI providers, messages, components, and the knowledge base.'
tags:
  - Improvement
  - VTEX CX Platform
---

The VTEX CX Platform **Agent Builder** now includes improvements that provide greater flexibility and visibility when configuring AI agents.

## What has changed?

- **AI provider selection:** In the **Manager** section, you can use your own **OpenAI** or **Google Gemini** API key instead of the platform's native engine.
- **Custom error message:** The text sent to the customer when an API error prevents the agent from responding can now be edited per project.
- **Interactive components in Manager 2.7:** The orchestrator can now natively send quick replies, action buttons, and message lists simply by referencing the component in the agent instructions.
- **Constants in custom agent assignment:** Constants sent via CLI can be viewed and configured directly in the interface when assigning a custom agent.
- **Dates on custom agent cards:** Cards display the date and time the agent was created or last updated.
- **Unclassified topic filter:** In **Audit**, you can filter conversations without a topic classification and identify subjects that haven't been mapped yet.
- **Text organization in Knowledge base:** The **Texts** tab now supports multiple named, searchable, and editable segments. The agent's behavior doesn't change.

## Why did we make this change?

Several Agent Builder settings required CLI access or technical intervention, and some information — such as an agent's change history or the message sent in the event of an error — wasn't accessible through the interface. These improvements reduce that dependency and centralize agent management in the VTEX CX Platform.

## What needs to be done?

No action is needed. These improvements are now available in all projects. To learn more, see the articles [Agent Builder overview](https://help.vtex.com/docs/tutorials/agent-builder-overview), [Assigning and testing agents](https://help.vtex.com/docs/tutorials/assigning-and-testing-agents-in-agent-builder), and [Audit: Conversations](https://help.vtex.com/docs/tutorials/audit-conversations).
