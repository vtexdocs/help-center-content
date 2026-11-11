---
title: 'Agent Builder'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-11-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: en
order: 1
---

**Agent Builder** is a customer-conversation tool powered by artificial intelligence. With this feature, you can customize agents to interact with customers, allowing them to request information about orders in progress, the store catalog, and order cancellation, for example.

The feature focuses on an orchestrator agent (or manager), which is the point of contact with the customer and controls the chat. This orchestrator triggers collaborating agents that return data and information based on the user's needs.

> ℹ️ To learn more about collaborator agents, see the article [Official VTEX CX Platform agents](https://help.vtex.com/en/docs/tutorials/official-agents-from-vtex-cx-platform).

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

For more information on how to assign agents, see [Assigning and testing agents](https://help.vtex.com/en/docs/tutorials/assigning-and-testing-agents-in-agent-builder).

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

Every custom instruction is reviewed by AI before it can be saved. The review checks the instruction for issues, suggests a rewrite when needed, and assigns a category so you can organize related instructions.

##### Creating an instruction

To create a custom instruction, follow these steps:

1. On the **Instructions** page, click `New instruction`.
2. Enter the instruction.
3. Click `Validate`.
4. In **Suggested category**, keep the category assigned by AI, select another one under **Other categories**, or select **Uncategorized**.
5. Click `Save`.

> ℹ️ `Save` becomes available after the AI review finishes. When no issues are found, **Issues found** shows **Looks good. No issues found.** To add a category before saving, see [Creating a category](#creating-a-category).

> ⚠️ If **Issues found** lists a problem, update the instruction or click `Apply` in **Suggested rewrite**. Click `Undo` to restore the previous text. After you change the text, click `Re-validate`, then click `Save`.

##### Creating a category

You can create a category while creating or editing an instruction, then reuse it for other instructions.

To create a category, follow these steps:

1. In the instruction drawer, open **Category** or **Suggested category**.
2. Click `New category`.
3. In **Category name**, enter a name.
4. Click `Create`.
5. Click `Save` to store the instruction in that category.

> ℹ️ A category name can have up to 50 characters and can include letters, numbers, spaces, and hyphens. Use a unique name. **Uncategorized** is reserved for instructions without a category. A category created in the drawer is marked with the **New** tag until you save the instruction.

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

##### Viewing instructions

Select `Categories` or `List` to change how instructions are displayed:

- **Categories:** Groups instructions by category. A custom category with no instructions stays visible and shows **No instructions in this category yet**.

- **List:** Shows each existing instruction with its category.

Use the search field to find an instruction. To download the instructions, click `Export instructions`.

The page includes these groups:

- **Uncategorized:** Custom instructions that don't have a category. You can edit and delete them. This group can't be removed.

- **Default instructions:** Behaviors defined by the platform. These instructions can't be edited or removed.

To edit or delete a custom instruction, follow these steps:

1. Click the vertical ellipsis button <i class="fas fa-ellipsis-v" aria-hidden="true"></i> next to the instruction.
2. To edit it, click `Edit instruction`, change the text or the category, and click `Save`.
3. To delete it, click `Delete instruction` and confirm the deletion.

> ℹ️ **Category** is available as soon as you open the instruction. Click `Re-validate` to review the text again. Re-validation keeps the category already selected.

> ⚠️ Deleting an instruction is permanent, and the agent stops following it.

To delete a custom category, follow these steps:

1. Select `Categories`.
2. Open the actions menu on the category.
3. Click `Delete category` and confirm the deletion.

> ℹ️ Instructions in a deleted category move to **Uncategorized**. An empty category is removed from the list.

To choose which sensitive topics the agent must reject, see [Configuring safety guardrails per project](https://help.vtex.com/en/docs/tutorials/configuring-extra-safety-guardrails-per-project).

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

On this tab, you can add text content to the knowledge base, organized into named segments. Each segment has its own title, and the list is sorted by the most recent edit, showing when each segment was last updated.

To create a text segment, follow these steps:

1. Click <i class="fas fa-plus" aria-hidden="true"></i>`Add text`.
2. Enter a title to identify the segment.
3. Enter the content in the text box.
4. Click `Save`.

By clicking the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> vertical ellipsis next to the segment, you can:

- Edit the content.
- Rename the title.
- Delete the segment. Deletion requires confirmation.

You can also use the search field to find a segment by title.

> ℹ️ Knowledge bases created before this change keep their original text as a single segment, with a default title. No content is lost. Dividing content into segments is only an interface change and doesn't affect how the agent uses the knowledge base content.

### Automation flow

You can create automation flows to interact with a group of users and determine agent responses based on user messages.

For more information, see [Automation flow overview](https://help.vtex.com/en/docs/tutorials/automation-flow-overview).
