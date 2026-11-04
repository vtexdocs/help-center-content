---
title: "Assigning and testing agents"
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2026-09-18T00:00:00.000Z
publishedAt: 2025-09-11T13:21:03.550Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: assigning-and-testing-agents-in-agent-builder
legacySlug: attribute-and-test-agents-on-agent-builder
locale: en
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

The **My agents** section allows you to assign agents to the team and test their operation. Some official agents require credentials to operate on the platform. For more information, go to [Official agents from VTEX CX Platform and their credentials](https://help.vtex.com/docs/tutorials/official-agents-from-vtex-cx-platform).

> ℹ️ To create custom agents, use the VTEX CX Platform (Weni) CLI. Learn more in [Using the VTEX CX Platform (Weni) CLI](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli).

This article is divided into the following sections:

- [Assigning an agent to the team](#assigning-an-agent-to-the-team)
- [Removing an agent](#removing-an-agent)
- [Testing an agent](#testing-an-agent)
- [Configuring constants for custom agents](#configuring-constants-for-custom-agents)

## Assigning an agent to the team

To assign a new agent to your store, follow these steps:

1. Access your organization in the [VTEX CX Platform dashboard](https://dash.weni.ai/orgs).
2. In the side menu, click the **My agents** icon.
3. Click <i class="fas fa-plus"></i>`Assign new agents`.
4. On the **Assign new agents** page, select one of the available options:
- **Official agents:** Agents provided by VTEX or by external integrations already added to the platform.
- **Custom agents:** Agents created for your operation.

> ℹ️ You can also find agents using the search field or filtering by category type.

5. After choosing an agent, click `View details`.
6. In the agent modal, review the information about available MCPs and the conversation example.
7. Click `Start setup`.
8. In **Assign {Agent name}**, in the **System selection** section, select one of the available options and click `Next`.
9. In **MCP selection**, select one of the available options to define the agent's behavior.
10. In **Configure {System name} MCP**, if available, enter or select the agent's parameters. Some agents don't have configurable parameters.
11. For custom agents, under **Constants**, select the constants defined via CLI and enter the desired values. Learn more in [Configuring constants for custom agents](#configuring-constants-for-custom-agents).
12. In **Review the setup and enter credentials**, review the information, complete the required fields, and click `Finish`.

> ℹ️ Custom agent cards display the date and time the agent was created or last updated. Official agents don't display this information.
After completing these steps, the agent will be displayed in the **Assigned agents** section of the **My agents** page.

## Configuring constants for custom agents

Constants are reusable configuration values, defined at the agent level and shared across all its tools, such as environment URLs or store identifiers. They're created in the agent's code and sent to the platform via the [VTEX CX Platform CLI](https://weni-ai.github.io/weni-cli/core-concepts/constants/).

When assigning a custom agent, you can view the available constants, define values for each, and apply them directly in the interface without needing the CLI.

> ℹ️ Constants are different from credentials. Credentials are confidential information, such as API keys, that the agent uses to trigger a specific tool. Constants are configuration values shared across the agent's tools.

## Removing an agent

To remove an agent from your store, follow these steps:

1. Access your organization in the [VTEX CX Platform dashboard](https://dash.weni.ai/orgs).
2. In the side menu, click the **My agents** icon.
3. In the **Assigned agents** section, click the desired agent.
4. Click `View options`.
5. Click `Remove agent`.

> ℹ️ If you want to use this agent again, assign it again as described in [Assigning an agent to the team](#assigning-an-agent-to-the-team).

## Testing an agent

To test the operation of an assigned agent, click `Test your agents` in the lower-right corner of the screen.

In the **Test your agents** section, you can:

- In the **Manager version** field, select the model that will act as the orchestrator agent during the conversation.
- Start a conversation using the dialog box.
- Send an audio message by clicking the microphone icon or the <i class="fas fa-plus" aria-hidden="true"></i> button and then `Audio`.
- Send files by clicking the <i class="fas fa-plus" aria-hidden="true"></i> Send file button.
- In the **Visual flow** tab, view a diagram showing which agents are called to produce the response displayed in the dialog box.
- In the **Logs** tab, check the detailed record of events processed by the AI model during the conversation. This information helps you understand conversation processing, identify potential issues, and improve agent performance.

To search for specific events, click `Filter logs` and search by keywords or the following categories:

| Category | Step description |
| --- | --- |
| Applying security rules | Security check of content, including protection of sensitive data, blocking of prohibited content, and enforcement of usage policies. |
| Assigning task to the agent | Defines the specialized agent or internal resource that will handle a step in the conversation. |
| Knowledge | Queries the knowledge base, such as documentation, Help Center articles, or internal content, to search for official information before responding. |
| Forwarding to the manager | Returns control to the manager to define the next step of the conversation. |
| Forwarding to human support | Forwards the conversation to human support due to a technical limitation, exception, or business rule. |
| Sending to manager | Sends the result of a tool, agent, or flow step to the manager for processing. |
| Sending final reply | Sends the response to the user after internal orchestration is completed. |
| Tool | Uses an external resource or specific module, such as order inquiry, image analysis, audio transcription, or search in another system. |
| Thinking | Step in which the model internally processes the request, plans the response, and decides whether to call tools, query knowledge, or forward the conversation to another flow. |

> ℹ️ To remove the conversation history with the orchestrator agent, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu next to Test your agents and then `Clear conversations`.
