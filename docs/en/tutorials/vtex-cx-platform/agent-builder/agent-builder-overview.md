---
title: 'Agent Builder'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-11-12T18:30:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: en
order: 1
categoryCover: true
---

Agent Builder is the VTEX CX Platform tool for configuring, managing, and testing artificial intelligence (AI) agents that interact with customers. Through these agents, you can automate service related to different needs, such as order inquiries, product catalog information, and cancellation requests.

The agents work based on a collaboration structure between two types of agents:

- **Orchestrator agent (manager):** the customer's point of contact, responsible for leading the conversation, interpreting incoming requests, and triggering the collaborator agents appropriate to each situation.
- **Collaborator agents:** agents specialized in certain tasks or knowledge domains, responsible for providing information or performing actions according to the requests forwarded by the orchestrator agent.

VTEX CX Platform provides predefined collaborator agents for different service scenarios. You can select the agents that fit your operation's needs, configure them, and test them in Agent Builder. To learn about the available agents, see [Official VTEX CX Platform agents](https://help.vtex.com/en/docs/tutorials/official-agents-from-vtex-cx-platform).

If your operation has specific needs that aren't covered by the official agents, you can also develop custom agents using the [VTEX CX Platform CLI](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli).

## Agent Builder pages

To access Agent Builder, select the organization and project you want to manage on the VTEX CX Platform homepage. Agent Builder is made up of the following pages:

- [My agents](https://help.vtex.com/en/docs/tutorials/agent-builder-my-agents): area for managing and testing collaborator agents and configuring the orchestrator agent.
- [Knowledge base](https://help.vtex.com/en/docs/tutorials/knowledge-base): set of files, websites, and texts that serve as sources of information for agents to respond to customers.
- [Automation flow](https://help.vtex.com/en/docs/tutorials/automation-flow-overview): area for configuring automated flows that determine agents' interactions and responses based on customer messages.
