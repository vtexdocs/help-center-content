---
title: 'Configuring safety guardrails per project'
createdAt: 2026-09-10T14:30:00.000Z
updatedAt: 2026-09-11T13:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-extra-safety-guardrails-per-project
locale: en
---

**Safety guardrails** are an additional blocking layer applied on top of the native security of the Agent Builder orchestrator agent (manager), covering sensitive topics such as politics, health, sexual content, and hate speech. Before this feature was introduced, these topics were handled solely by the AI model in use. With per-project configuration, you decide which topics the agent should reject and what message the customer receives when a topic is blocked.

>ℹ️ This configuration applies to all agents in the project at the same time.

In this guide, you'll learn how to activate or deactivate blocking for each sensitive topic and set your project's blocking message.

## How safety guardrails work

Consider the following behaviors when configuring your project's guardrails:

- **Extra blocking layer:** Guardrails don't replace the native security of the orchestrator agent. With a topic block enabled (**Extra block on**), the agent refuses the subject and responds with the configured blocking message. With blocking disabled (**Extra block off**), the extra layer is removed, but the agent's native security limits still apply.
- **Fixed topic catalog:** The available topics are defined and maintained by VTEX CX. You can't create custom topics; you can only activate or deactivate blocking for each one.
- **Project-level configuration:** The activated topics and blocking message are applied consistently across all agents in the project.
- **Single blocking message:** The message is the same for all topics. The default message is "I can't talk about this topic."
- **Default by project type:** Projects created before the feature was introduced have all topics disabled, with no impact on current flows. New projects, or those without prior configuration, have all topics enabled by default upon creation.

### Available topics

| Topic | What's blocked |
| :--- | :--- |
| **Politics** | Political opinions, parties, elections, or partisan topics. |
| **Physical health** | Diagnoses, symptoms, treatments, or medical advice. |
| **Sexual content** | Explicit or graphic sexual descriptions and imagery. |
| **Bias** | Prejudiced statements about groups based on identity or background. |
| **Hate** | Hate or discriminatory speech against people or groups. |
| **Religion** | Religious doctrines, practices, or comparisons between faiths. |
| **Suicide** | Suicidal ideation, methods, or related discussions. |
| **Self-harm** | Non-suicidal self-harm behaviors or methods. |
| **Beliefs** | Personal worldviews, ideologies, or philosophical convictions. |
| **Gender identity** | Gender identity, gender expression, or transition topics. |
| **Sexual relations** | Romantic or sexual relationships and behaviors. |

#### Prompt injection

The **Prompt injection** layer works differently from the other topics. When activated, the agent refuses attempts to override the orchestrator's instructions or to make it act outside its role, but the response doesn't use the configured blocking message: the orchestrator agent itself handles the response. When deactivated, the agent's native resistance to this type of manipulation still applies, but the extra protection no longer blocks attempts that the model allows through.

### Configuring blocked topics

To activate or deactivate blocking of sensitive topics in your project, follow these steps:

1. Go to the desired project in VTEX CX Platform.
2. In **Agent Builder**, click `My agents`.
3. Click `Edit instructions`.
4. In the **Extra safety guardrails** section, click `Configure`. A panel opens with the list of topics.
5. Use the toggle switch to activate <i class="fas fa-toggle-on" aria-hidden="true"></i> the topics the agent must reject or deactivate <i class="fas fa-toggle-off" aria-hidden="true"></i> the topics the agent can address.
6. (Optional) In **Manipulation attempts**, use the toggle switch to activate or deactivate **Prompt injection**.
7. Click `Save`.
8. If you deactivate any topic, a confirmation window is displayed with the names of the affected topics. Click `Remove` to confirm.

### Configuring the block message

The block message is the text the customer receives when they bring up a topic with blocking enabled. To edit it, follow the steps below:

1. Go to the desired project in VTEX CX Platform.
2. In **Agent Builder**, click `My agents`.
3. Click `Edit instructions`.
4. In the **Extra safety guardrails** section, click `Configure`. A panel opens with the list of topics.
5. In **Block message**, type the message the customer will receive.
6. Click `Save`.

After saving, the new message will be used by all agents in the project, in all blocked topics, except when **Prompt injection** is activated.

To learn more about agents, see [Agent Builder - Overview](https://help.vtex.com/en/docs/tutorials/agent-builder-overview).
