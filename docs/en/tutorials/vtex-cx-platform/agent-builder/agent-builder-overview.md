---
title: "Agent Builder - Overview"
id: 6t9oYS7E2AJH9c2AYReUrs
status: PUBLISHED
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-06-15T00:00:00.000Z
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

**Agent Builder** is a customer conversation tool based on artificial intelligence. Using this feature, you can customize agents to interact with your customers, allowing them to request information about an ongoing order, your store catalog, and order cancellation, for example.

The feature is centered on an orchestrator agent (or manager), which is the customer's point of contact and takes control of the chat. This orchestrator triggers collaborator agents that return data and information based on user needs.

> ℹ️ To learn more about collaborator agents, read the article [Official VTEX CX Platform agents](https://help.vtex.com/docs/tutorials/official-agents-from-vtex-cx-platform).

In addition to assigning and testing these agents, you can also create custom agents that meet your business's specific needs.

> ⚠️ To create custom agents, use the VTEX CX Platform CLI. Check the [documentation](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli) to create your own agent.

## Agent Builder

To access **Agent Builder**, select the Organization on the VTEX CX Platform home page and then select the project you want to manage.

In **Agent Builder**, the following pages are available:

- [**My agents**](#my-agent)
- [**Knowledge base**](#knowledge-base)
- [**Automation flow**](#automation-flow)

### My agents

On this page, you can assign and test agents for your store, as well as edit the manager and the instructions it must follow.

To understand how to assign agents, read the article [Assigning and testing agents](https://help.vtex.com/docs/tutorials/assigning-and-testing-agents-in-agent-builder).

#### Edit manager

The **Editar Manager** option for the orchestrator agent has the following tabs:

- [Profile](#profile)
- [Engine](#engine)

##### Profile

On this tab, you'll find customizable fields to personalize the identity and behavior of your orchestrator agent.

To customize your agent, complete the following fields:

- **What name does the agent use to introduce himself?:** Agent name that will be displayed to customers.
- **What's the main role of the agent?:** Agent's main role so users understand its specialty (for example: customer service representative).
- **What's the main goal of the agent?:** Agent's main objective (for example: help answer questions).
- **What's the agent's tone of voice?:** Tone of voice the agent will use to communicate with users. Select one of the predefined tones of voice.

Read the detailed description of each tone of voice below:

| Agent tone of voice | Description |
| --- | :--- |
| Friendly | Interacts warmly and welcomingly, making the customer feel comfortable and welcome, establishing a connection with empathy and understanding. |
| Systematic | With a clear and well-structured method, follows defined steps to solve problems. Uses a logical and orderly approach, with consistency and precision in communication and customer support. |
| Analytical | Ensures all information is displayed clearly and accessibly. It is logical and objective, guiding the customer through each step methodically so that no detail is missed. |
| Creative | Uses imagination to communicate, prioritizing original solutions. It is capable of offering differentiated responses and adapting language to make the content more relevant and engaging for the customer. |
| Casual | Is light, energetic, and informal. Maintains a more accessible and human tone. |

##### Engine

In **Engine source**, you can select the VTEX CX Platform native agent model or an LLM model for which you have a registered API Key. If you want to use the external model, select the **Own API key** option and complete the fields below:

- **Provider**: Company that owns the model.
- **Model**: Available version of the model.
- **API Key**: Your API key registered with the model provider.

> ℹ️ To activate any changes made to the information on the **Profile** or **Engine** tabs, you must click `Save changes`.

If you selected the platform's native engine, you can choose between two orchestrator agent options in **Manager version**:

- **Manager 2.7** (Recommended).
- **Manager 2.6** (Legacy model).

In **Agent preview**, there are two possible settings:

- **Multiple message format:** Turn it on <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send multiple messages, such as quick replies, lists, catalog. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Agent progressive feedback:** Turn it on <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send real-time updates to the user while drafting the final response. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

#### Edit instructions

By clicking the `Edit instructions` button for the orchestrator agent, you access the **Instructions** page, where you can add direct instructions to determine how your agent behaves. There is no limit to the number of instructions that can be created.

##### AI validation

When creating custom instructions, you can request AI validation, which will analyze each one and indicate possible issues or points for improvement. Additionally, you can also request an automatic suggestion, which will review the instruction and edit it as needed.

To use AI instruction validation when creating an instruction, follow these steps:

1. Turn on the <i class="fas fa-toggle-on" aria-hidden="true"></i> **Validate instruction by AI** button.
2. Enter your instruction in **New custom instruction** and click `Validate instruction`.
3. After the instruction analysis, if the result is **No problems found. Ready to publish!**, click `Publish`.

> ⚠️ If a warning message appears in **Validation results**, correct the instruction according to the displayed guidance and click `Re-validate`.

> ℹ️ You can create a new custom instruction without AI validation. To perform this action, turn off the **Validate instruction with AI** option, enter the instruction, and click `Publish instruction`.

##### Instruction list

In the **Instruction list**, you can check the following information:

- **Custom instructions**: Instructions created for the agent. You can locate them using the search bar or copy them by clicking the `Copy instructions` button.

- **Default instructions**: Behaviors defined by the platform. These instructions cannot be edited.

- **Safety topics**: Subjects not mentioned by the agent during a service interaction. These topics cannot be edited.

To edit or remove a custom instruction, follow these steps:

1. Click the three-dot button <i class="fas fa-ellipsis-v" aria-hidden="true"></i> next to the desired instruction.
2. To edit it, click `Edit instruction`, make the necessary changes, and click `Save`.
3. To delete it, click `Delete instruction` and then click `Delete`.

### Knowledge base

On this page, you can add [files](#files), [sites](#sites) and [texts](#texts) to your agent's knowledge base. Agents will use the data from these documents to respond to users.

#### Files

To add a file to the database, click <i class="fas fa-plus" aria-hidden="true"></i>`Add file`.

> ⚠️ Files must have extension `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` or `.xlsx` and be up to 50 MB in size.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> three dots next to the file name, you can:

- Download the file.
- Remove the file from the knowledge base.

You can also use the search field to find a file in the knowledge base.

#### Sites

To insert a site into the agent's database, follow these steps:

1. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add site`.
2. Next, copy the URL of the site you want to add and paste it into the empty field.
3. Click `Done`.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> three dots next to the site, you can:

- Access the site.
- Remove the site from the knowledge base.

You can also use the search field to find a site in the knowledge base.

#### Texts

On this page, you can insert content and information in the **Write content** text box.

After inserting a text, click `Save`.

### Automation flow

You can create automation flows to interact with a group of users and determine agent responses based on user messages.

For more information, access [Automation flow overview](https://help.vtex.com/docs/tutorials/automation-flow-overview).