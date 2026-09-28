---
title: 'Configuring extra safety guardrails per project'
createdAt: 2026-09-10T14:30:00.000Z
updatedAt: 2026-09-11T13:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-extra-safety-guardrails-per-project
locale: en
---

**Extra safety guardrails** are additional blocking layers applied on top of the native security of the Agent Builder orchestrator agent (manager) for sensitive topics such as politics, health, sexual content, and hate speech. Until now, handling these topics depended solely on the AI model in use. With the per-project configuration, you decide which topics the agent should refuse and which message the customer receives when a topic is blocked.

>ℹ️ This configuration applies to all agents in the project at the same time.

In this guide, you will learn how to enable or disable blocking for each sensitive topic and how to define your project's blocking message.

## How extra safety guardrails work

Consider the following behaviors when configuring your project's guardrails:

- **Extra blocking layer:** Guardrails don't replace the native security of the orchestrator agent. With topic blocking enabled (**Extra block on**), the agent refuses the subject and responds with the configured blocking message. With blocking disabled (**Extra block off**), the extra layer is removed, but the agent's native security limits still apply.
- **Fixed topic catalog:** Available topics are defined and maintained by VTEX CX. You can't create custom topics, only enable or disable blocking for each one.
- **Per-project configuration:** Enabled topics and the blocking message are applied uniformly to all agents in the project.
- **Single blocking message:** The message is the same for all topics. The default message is "I can't talk about this topic."
- **Default per project type:** Projects created before the feature have all topics disabled, with no impact on current flows. New projects have all topics enabled from creation.

### Available topics

| Topic | What is blocked |
| :--- | :--- |
| **Politics** | Political opinions, parties, elections, or partisan topics. |
| **Physical health** | Diagnoses, symptoms, treatments, or medical advice. |
| **Sexual content** | Explicit or graphic sexual descriptions or images. |
| **Prejudice** | Prejudiced statements about groups based on identity or origin. |
| **Hate** | Hate speech or discriminatory discourse against people or groups. |
| **Religion** | Doctrines, religious practices, or comparisons between religions. |
| **Suicide** | Suicidal ideation, methods, or related discussions. |
| **Self-harm** | Non-suicidal self-harm behaviors or methods. |
| **Beliefs** | Worldviews, ideologies, or personal philosophical convictions. |
| **Gender identity** | Gender identity, gender expression, or transition topics. |
| **Sexual relations** | Romantic or sexual relationships and behaviors. |

#### Prompt injection

The **Prompt injection** layer works differently from other topics. When enabled, the agent refuses attempts to override the orchestrator's instructions or make it act outside its role, but the response doesn't use the configured blocking message: the orchestrator agent itself handles the response. When disabled, the agent's native resistance to this type of manipulation still applies, but the extra protection stops blocking attempts the model allows through.

### Configure blocked topics

To enable or disable blocking of sensitive topics in your project, follow these steps:

1. Access the desired project in VTEX CX Platform.
2. In **Agent Builder**, click `My agents`.
3. Click `Edit instructions`.
4. In the **Extra safety guardrails** section, click `Configure`. The panel opens with the list of topics.
5. Use the toggle switch to enable <i class="fas fa-toggle-on" aria-hidden="true"></i> topics the agent should refuse or disable <i class="fas fa-toggle-off" aria-hidden="true"></i> topics the agent can address.
6. (Optional) In **Manipulation attempts**, use the toggle switch to enable or disable **Prompt injection**.
7. Click `Save`.
8. If you disabled any topic, a confirmation window is displayed with the names of affected topics. To confirm, click `Remove`.

### Configure the blocking message

The blocking message is the text the customer receives when they address a topic with blocking enabled. To edit it, follow these steps:

1. Access the desired project in VTEX CX Platform.
2. In **Agent Builder**, click `My agents`.
3. Click `Edit instructions`.
4. In the **Extra safety guardrails** section, click `Configure`. The panel opens with the list of topics.
5. In **Blocking message**, type the message the customer will receive.
6. Click `Save`.

After saving, the new message is used by all agents in the project, for all blocked topics, except when **Prompt injection** is enabled.

To learn more about agents, see [Agent Builder - Overview](https://help.vtex.com/en/docs/tutorials/agent-builder-overview).