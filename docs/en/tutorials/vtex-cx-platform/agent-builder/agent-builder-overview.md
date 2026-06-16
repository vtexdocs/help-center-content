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

**Agent Builder** is an artificial intelligence-based customer conversation tool. Using this feature, you can customize agents to interact with your customers, allowing them to request information about an ongoing order, your store's catalog, and order cancellation, for example.

The feature focuses on an orchestrator agent (or manager), which is the point of contact with the customer and takes control of the chat. This orchestrator triggers collaborator agents that return data and information according to the user's needs.

> ℹ️ To learn more about collaborator agents, read the article [Official VTEX CX Platform agents](https://help.vtex.com/docs/tutorials/official-agents-from-vtex-cx-platform).

In addition to assigning and testing these agents, you can also create your own agents to meet your company's specific needs.

> ⚠️ To create custom agents, use the VTEX CX Platform CLI. Check the [documentation](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli) to create your own agent.

## Agent Builder

To access **Agent Builder**, select the Organization on the VTEX CX Platform home page and then the project you want to manage.

In **Agent Builder**, the following pages are available:

- [**My agents**](#my-agent)
- [**Knowledge base**](#knowledge-base)
- [**Automation flow**](#automation-flow)

### My agents

> On this page, you can assign and test agents for your store, as well as edit the manager and the instructions it must follow.

To understand how to assign agents, read the article [Assigning and testing agents](https://help.vtex.com/docs/tutorials/assigning-and-testing-agents-in-agent-builder).

#### Edit manager

The orchestrator agent's **Editar Manager** option has the following tabs:

- [Profile](#profile)
- [Engine](#engine)

##### Profile

In this tab, you'll find customizable fields to personalize your orchestrator agent's identity and behavior.

To customize your agent, complete the following fields:

- **What name does the agent use to introduce himself?:** agent name that will be displayed to customers.
- **What's the main role of the agent?:** the agent's main role so users can understand its specialty (for example: attendant).
- **What's the main goal of the agent?:** the agent's main goal (for example: helping answer questions).
- **What's the agent's tone of voice?:** the tone of voice the agent will use to communicate with users. Select one of the predefined tones of voice.

Read the detailed description of each tone of voice below:

| Agent tone of voice | Description |
| --- | :--- |
| Friendly | Interacts warmly and welcomingly, making the customer feel comfortable and welcome, establishing a connection with empathy and understanding. |
| Systematic | With a clear and well-structured method, follows defined steps to solve problems. Uses a logical and organized approach, with consistency and precision in communication and customer support. |
| Analytical | Ensures all information is presented clearly and accessibly. It's logical and objective, guiding the customer through each step methodically so no detail is missed. |
| Creative | Uses imagination to communicate, prioritizing original solutions. It's able to offer differentiated responses and adapt language to make content more relevant and engaging for the customer. |
| Casual | It's light, energetic, and informal. It keeps a more accessible and human tone. |

##### Engine

In **Engine source**, you can select the VTEX CX Platform native agent model or an LLM model for which you have a registered API key. If you want to use the external model, select the **Own API key** option and complete the fields below:

- **Provider**: company that owns the model.
- **Model**: available model version.
- **API Key**: your API key registered with the model provider.

> ℹ️ To activate any changes made to the information in the **Profile** or **Engine** tabs, you must click `Save changes`.

If you selected the platform's native engine, in **Manager version** you can choose between two orchestrator agent options:

- **Manager 2.7** (Recommended).
- **Manager 2.6** (Legacy model).

In **Agent preview**, there are two possible settings:

- **Multiple message format:** turn it on <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send multiple messages, such as quick replies, lists, and catalog. Otherwise, leave it turned off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Agent progressive feedback:** turn it on <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send real-time updates to the user while drafting the final response. Otherwise, leave it turned off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

#### Edit instructions

When you click the orchestrator agent's `Edit instructions` buttons, you'll access the **Instructions** page, where you can add direct instructions to determine how your agent behaves. There's no limit to the number of instructions that can be created.

##### AI validation

When creating custom instructions, you can request AI validation, which will analyze each one and point out possible issues or areas for improvement. In addition, you can also request an automatic suggestion, which will review the instruction and edit it as needed.

To use AI instruction validation when creating an instruction, follow the steps below:

1. Turn on the <i class="fas fa-toggle-on" aria-hidden="true"></i> **Validate instruction by AI** button.
2. Enter your instruction in **New custom instruction** and click `Validar instruçãoValidate instruction`.
3. After the instruction is analyzed, if the result is **No problems found. Ready to publish!**, click `Publish`.

> ⚠️ If a warning message appears in **Validation results**, correct the instruction according to the displayed guidance and click `Re-validate`.

> ℹ️ It's possible to create a new custom instruction without AI validation. To do this, turn off the **Validate instruction with AI** option, enter the instruction, and click `Publish instruction`.

##### Instruction list

In the **Instruction list**, you can check the following information:

- **Custom instructions**: instructions created for the agent. You can find them using the search bar or copy them by clicking the `Copy instructions` button.

- **Default instructions**: behaviors defined by the platform. These instructions can't be edited.

- **Safety topics**: topics not mentioned by the agent during a service interaction. These topics can't be edited.

To edit or remove a custom instruction, follow the steps below:

1. Click the three-dot button <i class="fas fa-ellipsis-v" aria-hidden="true"></i> next to the desired instruction.
2. To edit it, click `Edit instruction`, make the necessary changes, and click `Save`.
3. To delete it, click `Delete instruction` and then click `Delete`.

### Knowledge base

On this page, you can add [files](#files), [sites](#sites) and [texts](#texts) to your agent's knowledge base. The agents will use the data from these documents to respond to users.

#### Files

To add a file to the database, click <i class="fas fa-plus" aria-hidden="true"></i>`Add file`.

> ⚠️ Files must have the `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` or `.xlsx` extension and be up to 50 MB in size.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> three dots next to the file name, you can:

- Download the file.
- Remove the file from the knowledge base.

You can also use the search field to find a file in the knowledge base.

#### Sites

To add a site to the agent's database, follow these steps:

1. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add site`.
2. Then copy the site URL you want to add and paste it into the empty field.
3. Click `Done`.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> three dots next to the site, you can:

- Access the site.
- Remove the site from the knowledge base.

You can also use the search field to find a site in the knowledge base.

#### Texts

On this page, you can add content and information in the **Write content** text box.

After entering a text, click `Save`.

### Automation flow

You can create automation flows to interact with a group of users and determine the agent's responses based on user messages.

For more information, access [Automation flow overview](https://help.vtex.com/docs/tutorials/automation-flow-overview).