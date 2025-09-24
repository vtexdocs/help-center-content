---
title: 'Assigning and testing agents'
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2025-09-11T13:21:03.550Z
publishedAt: 2025-09-11T13:21:03.550Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: assigning-and-testing-agents
legacySlug: attribute-and-test-agents-on-agent-builder
locale: en
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

The **Agents** section allows users to assign agents to the team and test them.

Some official agents require credentials. See the full list in the article [Official agents from Weni by VTEX and their credentials](/en/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

> ℹ️ To create custom agents, use the Weni by VTEX CLI. See the [documentation](https://weni-ai.github.io/weni-cli/getting-started/installation/) for instructions.

This article is divided in two parts:
- [Assigning an agent to the team](#how-to-assign-agents)
- [Testing an agent](#how-to-test-agents)

## Assigning an agent to the team

1. In the side menu, click **Agent Builder**.
2. Then, click **Agents**.
3. In the top toolbar, click <i class="fas fa-plus"></i>`Assign agents`.
4. In the Agents Gallery, select **Official agents** or **Custom agents**. You can select from the listed agents or use the search field to search for a specific agent.
5. After choosing your agent, click `Assign to the team`.

> ⚠️ If the agent requires a credential, complete the required fields and then click `Assign`.

## Testing an agent

To test an agent, click `Preview`.

On this screen, you can:
- Start a conversation using the dialog box.
- Send an audio message by clicking the microphone icon.
- Send an image by clicking the plus icon <i class="fas fa-plus"></i>, then click `Photos`.

In **Visual flow**, you can see the agents that are being triggered based on the questions asked.

In **Logs**, a detailed history of events processed by artificial intelligence (AI) is recorded. Using this information, you can identify how the AI works and diagnose issues, improving its performance. Click `Filter logs` to search for keywords or search among the following categories:

| Category | Step description |
| ------------- | :-------------- |
| Applying security rules | Applies security controls and restrictions. |
| Knowledge | Searches for information in the agent's knowledge base. |
| Assigning the task to the agent | Triggers the agent with tasks. |
| Forwarding to the manager | Forwards the user's messages to the manager — the main agent for writing the final response to the user. |
| Sending final response | Sends the final response to the user. |
| Sending response to the manager | Forwards information to the manager — the main agent for interacting with the user. |
| Thinking | Evaluates the next steps. |
| Tool | Triggers the tool used by the agent to interact with other systems. |

To clear the conversation, click the <i class="fas fa-ellipsis-v"></i> menu next to **Agent preview** and select `Clear conversations`.
