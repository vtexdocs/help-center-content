---
title: 'Agent Builder - Overview'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-10-08T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: en
order: 1
---

**Agent Builder** is a customer-conversation tool powered by artificial intelligence. With this feature, you can customize agents to interact with customers, allowing them to request information about orders in progress, the store catalog, and order cancellation, for example.

The feature focuses on an orchestrator agent (or manager), which is the point of contact with the customer and controls the chat. This orchestrator triggers collaborating agents that return data and information based on the user's needs.

> ℹ️ To learn more about collaborator agents, see the article [Official VTEX CX Platform agents](https://help.vtex.com/docs/tutorials/official-agents-from-vtex-cx-platform).

Besides assigning and testing these agents, you can also create your own agents to meet your company’s specific needs.

> ⚠️ To create custom agents, use the VTEX CX Platform CLI. See the [documentation](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli) to create your own agent.

## Agent Builder

To access **Agent Builder**, select the Organization on the VTEX CX Platform home page and then select the project you want to manage.

In **Agent Builder**, the following pages are available:

- [**My agents**](#my-agents)
- [**Knowledge base**](#knowledge-base)
- [**Automation flow**](#automation-flow)

### My agents

> On this page, you can assign and test agents for your store, as well as edit the manager and the instructions it must follow.

For more information on how to assign agents, see [Assigning and testing agents](https://help.vtex.com/docs/tutorials/assigning-and-testing-agents-in-agent-builder).

#### Edit manager

The **Edit manager** option for the orchestrator agent has the following tabs:

- [Profile](#profile)
- [Engine](#engine)

##### Profile

On this tab, you'll find customizable fields to personalize the identity and behavior of your orchestrator agent.

To customize your agent, complete the following fields:

- **What name does the agent use to introduce himself?:** Agent name that will be displayed to customers.
- **What's the main role of the agent?:** Agent's main role so users understand its specialty (example: customer service representative).
- **What's the main goal of the agent?:** Agent's main objective (example: help answer questions).
- **What's the agent's tone of voice?:** Tone of voice the agent will use to communicate with users. Select one of the predefined tones of voice.

Read the detailed description of each tone of voice below:

| Agent's tone of voice | Description |
| --- | --- |
| Friendly | Interacts warmly and welcomingly, making the customer feel comfortable and welcome, establishing a connection with empathy and understanding. |
| Systematic | With a clear and well-structured method, it follows defined steps to solve problems. Uses a logical and orderly approach, with consistency and precision in communication and customer support. |
| Analytical | Ensures all information is displayed clearly and accessibly. It's logical and objective, guiding the customer through each step methodically so that no detail is missed. |
| Creative | Uses imagination to communicate, prioritizing original solutions. It can offer differentiated responses and adapt its language to make the content more relevant and engaging for the customer. |
| Casual | Is light, energetic, and informal. Maintains a more accessible and human tone. |

##### Engine

In **Engine source**, you can select the VTEX CX Platform native agent model or an LLM model for which you have an API key. If you want to use the external model, select the **Own API key** option and complete the fields below:

- **Provider**: Company that owns the model.
- **Model**: Available version of the model.
- **API key**: Your API key registered with the model provider.

> ℹ️ To activate any changes made to the information on the **Profile** or **Engine** tabs, you must click `Save changes`.

If you selected the platform's native engine, you can choose between two orchestrator agent options in **Manager version**:

- **Manager 2.7** (Recommended).
- **Manager 2.6** (Legacy model).

In **Agent preview**, there are two possible settings:

- **Multiple message format:** Activate it <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send multiple messages, such as quick replies, lists, catalog. Otherwise, leave it deactivated <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Agent progressive feedback:** Activate it <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send real-time updates to the user while drafting the final response. Otherwise, leave it deactivated<i class="fas fa-toggle-off" aria-hidden="true"></i>.

In **System messages**, you can customize the error message sent to the customer when an API error prevents the agent from generating a response. Each project can have its own message, tailored to the brand's tone of voice.

> ⚠️ The error message is sent exactly as configured and isn't automatically translated. Write it in the same language your agent uses to chat with customers.

To save your changes, click `Save changes`.

#### Edit instructions

By clicking the `Edit instructions` button for the orchestrator agent, you access the **Instructions** page, where you can add direct instructions to determine how your agent behaves. There's no limit to the number of instructions that can be created.

##### Validate instruction by AI

When creating custom instructions, you can request AI validation to analyze each instruction and identify potential issues or opportunities for improvement. Additionally, you can also request an automatic suggestion, which will review the instruction and edit it as needed.

To use AI instruction validation when creating an instruction, follow these steps:

1. Activate the <i class="fas fa-toggle-on" aria-hidden="true"></i> **Validate instruction by AI** button.
2. Enter your instruction in **New custom instruction** and click `Validate instruction`.
3. After the instruction analysis, if the result is **No problems found. Ready to publish!**, click `Publish`.

> ⚠️ If a warning message appears in **Validation results**, correct the instruction according to the displayed guidance and click `Re-validate`.

> ℹ️ You can create a new custom instruction without AI validation. To perform this action, activate the **Validate instruction by AI** option, enter the instruction, and click `Publish instruction`.

##### Interactive components

With **Manager 2.7**, the orchestrator agent can respond using WhatsApp's native interactive components:

| Component | Description |
| --- | --- |
| Quick replies (`quick_reply`) | Buttons with predefined options for the customer to choose from. |
| Call-to-action buttons (`call_to_action`) | Buttons that direct the customer to an external link. |
| List message (`list_message`) | Menu with a list of selectable options. |

To guide the agent to use a component, reference it directly in a custom instruction. For example: "When asking about order status, use the `quick_reply` component with the options Track order, Cancel order, and Talk to a representative."

> ℹ️ For the agent to send interactive components, the **Multiple message format** option must be enabled in **Edit Manager > Engine**.

> ⚠️ The product catalog is not a native Manager 2.7 component. When a Concierge agent is assigned to the team, the orchestrator triggers Concierge to send the catalog. VTEX's official Concierge agents already have this capability.

##### Instruction list

In the **Instruction list**, you can check the following information:

- **Custom instructions**: Instructions created for the agent. You can locate them using the search bar or copy them by clicking the `Copy instructions` button.

- **Default instructions**: Behaviors defined by the platform. These instructions can't be edited.

- **Safety topics**: Subjects not mentioned by the agent during a service interaction. These topics can't be edited.

To edit or remove a custom instruction, follow these steps:

1. Click the vertical ellipsis button <i class="fas fa-ellipsis-v" aria-hidden="true"></i> next to the desired instruction.
2. To edit it, click `Edit instruction`, make the necessary changes, and click `Save`.
3. To delete it, click `Delete instruction` and then click `Delete`.

### Knowledge base

On this page, you can add [files](#files), [sites](#sites) and [texts](#texts) to your agent's knowledge base. Agents will use the data from these documents to respond to users.

#### Files

To add a file to the database, click <i class="fas fa-plus" aria-hidden="true"></i>`Add file`.

> ⚠️ Files must have a `.pdf`, `.doc`, `.docx`, `.txt`, `.xls`, or `.xlsx` extension and be up to 50 MB.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> vertical ellipsis next to the file name, you can:

- Download the file.
- Remove the file from the knowledge base.

You can also use the search field to find a file in the knowledge base.

#### Sites

To add a site to the agent's database, follow these instructions:

1. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add site`.
2. Copy the URL of the site you want to add and paste it into the empty field.
3. Click `Done`.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> vertical ellipsis next to the site, you can:

- Access the site.
- Remove the site from the knowledge base.

You can also use the search field to find a site in the knowledge base.

#### Text

In this tab, you can add text content to the knowledge base, organized into named segments. Each segment has its own title, and the list is sorted by the most recent edit, showing when each segment was last modified.

To create a text segment, follow these steps:

1. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add text`.
2. Enter a title to identify the segment.
3. Enter the content in the text box.
4. Click `Save`.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i>ellipsis next to the segment, you can:

- Edit the content.
- Rename the title.
- Delete the segment. Deletion requires confirmation.

You can also use the search field to find a segment by title.

> ℹ️ Knowledge bases created before this organization keep the original text as a single segment, with a default title. No content is lost. Splitting into segments is just an interface change and doesn't affect how the agent uses the knowledge base content.

### Automation flow

You can create automation flows to interact with a group of users and determine agent responses based on user messages.

For more information, see [Automation flow overview](https://help.vtex.com/docs/tutorials/automation-flow-overview).
