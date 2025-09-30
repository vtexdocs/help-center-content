---
title: 'Agent Builder overview'
id: 6t9oYS7E2AJH9c2AYReUrs
status: PUBLISHED
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2025-09-08T16:21:28.723Z
publishedAt: 2025-09-08T16:21:28.723Z
firstPublishedAt: 2025-07-29T16:45:36.827Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: agent-builder-overview
legacySlug: agent-builder-overview
locale: en
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
order: 1
---

**Agent Builder** is a customer conversation tool powered by artificial intelligence. With this feature, you can customize agents to interact with customers, letting them request information about orders in progress, the store catalog, or order cancellations, for example.

The feature focuses on an orchestrator agent, which is the point of contact with the customer and controls the chat. This orchestrator triggers collaborating agents that return data and information based on the user's needs.

> ℹ️ Learn more about collaborating agents in the article [Official Weni by VTEX agents](/en/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

Besides assigning and testing these agents, you can also create your own agents to meet your company’s specific needs.

> ⚠️ To create custom agents, use the Weni by VTEX CLI. See the [documentation](https://weni-ai.github.io/weni-cli/getting-started/installation/) for instructions.

## Agent Builder

To access **Agent Builder**, select the organization on the Weni by VTEX homepage and then the project you want to manage. In the side menu, click **Agent Builder**.

You can access the following pages in **Agent Builder:**

- [**Supervisor**] (#supervisor)
- [**Profile**] (#profile) 
- [**Agents**] (#agents)
- [**Knowledge**] (#knowledge)
- [**Adjustments**] (#adjustments)

### Supervisor

On this page, you can review and analyze conversations between agents and customers. It's divided into two sections:

- **Assisted by an agent**
- **Transferred to human support**

The **Assisted by an agent** section shows the percentage of conversations answered and resolved by agents. The **Transferred to human support** section shows the percentage of interactions that had to be forwarded to humans.

In the <i class="fas fa-search" aria-hidden="true"></i>`Search` field, you can search for conversations and view the results.

At the top of the page, you'll find interaction dates. You can click a date to change the time range and filter the results.

![Imagem Supervisor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/agent-builder/agent-builder-overview_1.png)

## Profile

This page contains customizable fields to define your orchestrator agent's identity and behavior.

To customize your agent, use the following fields:

- **How does the agent introduce itself?:** Name of the agent that will be displayed to customers.
- **What's the main role of the agent?:** Main role of the agent to help users understand the agent's specialty (example: Assistant).
- **What's the main goal of the agent?:** Main goal of the agent (example: assisting with questions).
- **What's the agent's tone of voice?:** Tone of voice the agent will use to communicate with users. Click this field and select one of the predefined tones from the dropdown menu.

Read the detailed description of each tone of voice below:

| Agent tone of voice | Description |
| :-------------: | :------------- |
| Friendly | Engages warmly and welcomingly, making the customer feel comfortable while creating a connection based on empathy and understanding. |
| Cooperative | Works alongside the customer to find solutions. Prioritizes teamwork and is focused on ensuring the customer's needs are met with minimal effort. |
| Outgoing | Has a lively and expressive personality, communicates openly and enthusiastically. Always motivated and positive during interactions, making conversations dynamic and engaging. |
| Generous | Offers additional information and resources that may be useful, even before being asked.   |
| Relaxed | Stays laid-back and calm in challenging situations. Maintains pleasant conversations and gives the customer enough time to process information and make decisions. |
| Organized | Presents all information clearly and accessibly. It's methodical and efficient, and guides the customer through each step in a logical way so that no detail is overlooked.  |
| Systematic | Has a clear and well-structured method, following defined steps to solve problems. Uses a logical and orderly approach, with consistency and precision in communication and support.   |
| Innovative | Proposes new solutions and presents creative, effective ideas when faced with problems or challenges.  |
| Creative | Uses imagination to communicate. Capable of providing unique responses and adapting language to make content more relevant and engaging for the customer.  |
| Intellectual | Provides detailed and informed responses. Provides an in-depth explanation based on facts and logic to meet the needs of customers seeking clarity and understanding.  |

In the **General instructions** section, you can add direct instructions for your agent, defining how it should behave.

If you added an instruction and want to delete it, click the <i class="far fa-trash-alt" aria-hidden="true"></i> trash button next to the instruction. A message will be displayed asking if you want to remove the instruction. Click `Remove` to delete it or `Cancel` to keep it. 

> ℹ️ There's no limit to the number of instructions.

At the end, click the `Save changes` button in top-right corner of the screen to save your agent's settings.

## Agents

On this page, you can assign and test agents for your store.

To learn how to do this, see the article [Assigning and testing agents](/en/tutorial/atribuir-e-testar-agentes-no-agent-builder--41beBpRcBouxMywt6dUW2z).

## Knowledge

On this page, you can add files, websites, and texts to your agent's knowledge base. Agents will use the details from these documents to respond to users.

### Files

To add a file to the database, click <i class="fas fa-plus" aria-hidden="true"></i>`Add file`.

> ⚠️ Files can only be uploaded if they have a `.pdf`, `.doc`, `.docx`, `.txt`, `. xls` or `.xlsx` extension and are no larger than 50 MB.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> vertical ellipsis next to the file's name, you can:

- View details (such as the date the file was added and its content). 
- Download the file.
- Remove the file.

You can also use the search field to find a file.

### Sites

To add a website to the agent's database, follow these instructions:

1. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add site`.
2. Copy the URL of the site you want to add and paste it into the empty field.
3. Click `Done`.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> vertical ellipsis next to the website, you can:

- View details (such as the date the website was added and its content). 
- Go to the website.
- Remove the website.

You can also use the search field to find a website.

### Texts:

On this page, you can add content and information in the **Write content** text box.

After entering a text, click `Save changes`.

## Adjustments

On this page, you can change your agents' settings.

### Settings

Below **Agent preview,** there are two toggles:

- **Agent progressive feedback:** Activate the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send real-time updates to the user while drafting the final response. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>. 

![EN GIF Feedback progressivo dos agentes](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/agent-builder/agent-builder-overview_1.gif)

- **Multiple message format:** Activate the toggle switch <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send multiple messages, like quick replies, lists, and catalogs. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

![Multiple message format](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/agent-builder/agent-builder-overview_2.png)

Below **Human support,** there's a toggle switch:

- **Human support:** Activate it <i class="fas fa-toggle-on" aria-hidden="true"></i> for the agent to transfer conversations to a human. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

In the **When should the agent transfer the conversation to a human?** text box, add a phrase or example that indicates when the agent should transfer a conversation.

### Credentials

In this section, you can view the credentials used by official and custom agents.

> ℹ️ Learn more about this topic in the article [Official Weni by VTEX agents](/en/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

### Change history

In this section, you can view the changes made to the agents, who made them, and the date of these changes.

The logs indicate:

- Addition, update, or removal of instruction.
- Addition, change, or removal of knowledge content.
- Changes to the agent's name, role, or goal.

You can also use the filter box on the right to view by type of change, such as:

- All changes
- Custom changes
- Content changes
- Action changes
- Settings changes
