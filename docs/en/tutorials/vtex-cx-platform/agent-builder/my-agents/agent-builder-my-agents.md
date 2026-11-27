---
title: 'My agents'
createdAt: 2026-11-27T00:00:00.000Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-my-agents
locale: en
---

In the **My agents** section of [Agent Builder](https://help.vtex.com/en/docs/tutorials/visao-geral-agent-builder), you can edit the manager, which is the orchestrator agent of your operation, and the instructions it must follow. On this page, you can also test and assign each of the collaborator agents.

For more information on how to assign agents, see [Assigning and testing agents](https://help.vtex.com/en/docs/tutorials/atribuir-e-testar-agentes).

### Supported content types

The orchestrator agent uses the information customers provide in the conversation to understand the context of the service and know which collaborators to trigger. The orchestrator agent can interpret different types of content:

- Text messages.
- Images.
- PDF files.

> ⚠️ Reading PDF files with the orchestrator agent is limited to documents of up to five pages.

## Edit manager

The **Edit Manager** option of the orchestrator agent has the following tabs:

- [Profile](#profile)
- [Engine](#engine)

### Profile

On this tab, you'll find customizable fields to personalize the identity and behavior of your orchestrator agent.

To customize your agent, complete the following fields:

- **What name does the agent use to introduce himself?:** Agent name that will be displayed to customers.
- **What's the main role of the agent?:** Agent's main role so users understand its specialty (example: representative).
- **What's the main goal of the agent?:** Agent's main objective (example: help answer questions).
- **What's the agent's tone of voice?:** Tone of voice the agent will use to communicate with users. Select one of the predefined tones of voice.

Read the detailed description of each tone of voice below:

| Agent tone of voice | Description |
| --- | --- |
| Friendly | Interacts in a warm and welcoming way, making the customer feel comfortable and welcome, establishing a connection with empathy and understanding. |
| Systematic | With a clear and well-structured method, follows defined steps to solve problems. Uses a logical and orderly approach, with consistency and precision in communication and customer support. |
| Analytical | Ensures all information is presented clearly and accessibly. It's logical and objective, guiding the customer through each step methodically, so no detail is missed. |
| Creative | Uses imagination to communicate, prioritizing original solutions. It can offer differentiated responses and adapt language to make content more relevant and engaging for the customer. |
| Informal | Light, energetic, and informal. Keeps a more approachable and human tone. |

### Engine

In **Engine source**, you can select the native VTEX CX Platform agent model or an LLM model for which you have a registered API key. If you want to use the external model, select the **Own API key** option and complete the fields below:

- **Provider**: company that owns the model.
- **Model**: available version of the model.
- **API Key**: your API key registered with the model provider.

> ℹ️ To activate any change made to the information in the **Profile** or **Engine** tabs, you must click `Save changes`.

If you selected the platform's native engine, you can choose, in **Manager version**, between two orchestrator agent options:

- **Manager 2.8** (Recommended).
- **Manager 2.7** (Legacy model).

In **Agent preview**, there are two possible settings:

- **Multiple message format:** turn it on <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the agent to send multiple messages, such as quick replies, lists, and catalog. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Progressive agent feedback (available only for the Shopping Assistant):** turn it on <i class="fas fa-toggle-on" aria-hidden="true"></i> if you want the Shopping Assistant to show short updates while preparing the final response. These updates don't change the final response and don't require additional development in the store. Otherwise, leave it off <i class="fas fa-toggle-off" aria-hidden="true"></i>.

> ⚠️ The **Progressive agent feedback** and **Multiple message format** options can't be turned on at the same time.

In **System messages**, you can customize the error message sent to the customer when an API error prevents the agent from generating a response. Each project can have its own message, adapted to the brand's tone of voice.

> ⚠️ The error message is sent exactly as configured and isn't automatically translated. Write the text in the language in which your agent serves customers.

To save your changes, click `Save changes`.

## Edit instructions

By clicking the `Edit instructions` button of the orchestrator agent, you access the **Instructions** page, where you can add direct instructions to determine how your agent behaves. There's no limit to the number of instructions you can create.

Every custom instruction is reviewed by AI before being saved. The review analyzes the instruction for issues, suggests a rewrite when necessary, and assigns a category so you can organize related instructions.

### Create an instruction

To create a custom instruction, follow the steps below:

1. On the **Instructions** page, click `New instruction`.
2. Type the instruction.
3. Click `Validate`.
4. In **Suggested category**, keep the category assigned by the AI, select another option in **Other categories**, or select **No category**.
5. Click `Save`.

> ℹ️ The `Save` button becomes available once the AI review is complete. When no issues are found, the **Issues found** field displays **All good. No issues found.** To add a category before saving, see [Create a category](#create-a-category).

> ⚠️ If the **Issues found** field lists any issue, update the instruction or click `Apply` in **Rewrite suggestion**. Click `Undo` to restore the previous text. After changing the text, click `Re-validate` and then `Save`.

### Create a category

You can create a category while creating or editing an instruction and then reuse it in other instructions.

To create a category, follow the steps below:

1. In the instruction's side panel, open **Category** or **Suggested category**.
2. Click `New category`.
3. In **Category name**, type a name.
4. Click `Create`.
5. Click `Save` to store the instruction in that category.

> ℹ️ The category name can have up to 50 characters and include letters, numbers, spaces, and hyphens. Use a unique name. The **No category** option is reserved for instructions without a category. A category created in the side panel is marked with the **New** tag until you save the instruction.

### Interactive components

The orchestrator agent can respond using native WhatsApp interactive components:

| Component | Description |
| --- | --- |
| Quick replies (`quick_reply`) | Buttons with predefined options for the customer to choose. |
| Call-to-action buttons (`call_to_action`) | Buttons that direct the customer to an external link. |
| List message (`list_message`) | Menu with a list of selectable options. |

To guide the agent to use a component, mention it directly in a custom instruction. For example: "When asking about order status, use the `quick_reply` component with the options Track order, Cancel order, and Talk to a representative."

> ℹ️ For the agent to send interactive components, the **Multiple message format** option must be turned on in **Edit Manager > Engine**.

> ⚠️ The product catalog isn't a native component of the orchestrator agent. To send a catalog, you need to have a Concierge agent assigned to the team. VTEX's official Concierge agents already have this capability.

### View instructions

Select `Categories` or `List` to change the display mode of the instructions:

- **Categories:** groups instructions by category. A custom category with no instructions remains visible and displays **No instructions in this category yet**.

- **List:** displays each existing instruction with its respective category.

Use the search field to find an instruction. To download the instructions, click `Export instructions`.

The page includes the following groups:

- **No category:** custom instructions that don't have a category. You can edit and delete them. This group can't be removed.

- **Default instructions:** behaviors defined by the platform. These instructions can't be edited or removed.

To edit or delete a custom instruction, follow the steps below:

1. Click the three-dot button <i class="fas fa-ellipsis-v" aria-hidden="true"></i> next to the instruction.
2. To edit it, click `Edit instruction`, change the text or category, and click `Save`.
3. To delete it, click `Delete instruction` and confirm the deletion.

> ℹ️ The **Category** field becomes available as soon as you open the instruction. Click `Re-validate` to review the text again. Revalidation keeps the already selected category.

> ⚠️ Deleting an instruction is permanent, and the agent stops following it.

To delete a custom category, follow the steps below:

1. Select `Categories`.
2. Open the category's actions menu.
3. Click `Delete category` and confirm the deletion.

> ℹ️ Instructions from a deleted category are moved to **No category**. An empty category is removed from the list.

To choose which sensitive topics the agent should refuse to discuss, see [Setting up extra security layers per project](https://help.vtex.com/docs/tutorials/configuring-extra-safety-guardrails-per-project).
