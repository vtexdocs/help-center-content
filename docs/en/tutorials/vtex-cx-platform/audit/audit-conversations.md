---
title: 'Audit: Conversations'
createdAt: 2026-08-12T00:00:00.000Z
updatedAt: 2026-08-12T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-conversations
locale: en
---

In the **Audit** module, you can access the **Conversations** tab, where messages between your AI agents and your customers are recorded. In this tutorial, you'll learn how to navigate the conversations list, filter and search for support chats, interpret statuses and feedback, and investigate a conversation in detail to evaluate your agent's service quality.

**Conversations** displays a table with all support chats, with the following information:

| Data | Description |
| --- | --- |
| **Contact** | Name and phone number of the customer. [Amazing conversations](#amazing-conversations) are identified with a star tag on the contact name. |
| **Status** | Current state of the conversation. The possible statuses are: <br> `Not handled`: The support chat wasn't resolved due to AI agent failure (for example: provided incorrect information, ignored a complaint, didn't perform a promised action, among others). <br> `Handled by AI`: The support chat was successfully resolved by the AI agent. <br> `In progress`: The support chat is still ongoing. <br> `Escalated to human support`: The support chat couldn't be resolved by the AI agent and needed to be escalated to a human representative. |
| **Feedback** | Satisfaction rating (CSAT), from 1 to 5, sent at the end of the support chat. The possible ratings are: <br> 😡`Very dissatisfied / CSAT: 1` <br> 😔`Dissatisfied / CSAT: 2` <br> 😐`Neutral / CSAT: 3` <br> 😃`Satisfied / CSAT: 4` <br> 🤩`Very satisfied / CSAT: 5` <br> Unrated conversations receive a dash (`-`). |
| **Date** | Date of the conversation. |
| **Time** | Time of the conversation. |

## Amazing conversations

**Amazing conversations** are conversations that show the value of AI agents by effectively resolving a real demand. When analyzed in the **Improvements backlog**, these conversations receive a star tag and indicate that the agent performed relevant actions, such as:

- Resolving a question or problem completely, using the [knowledge base](https://help.vtex.com/en/docs/tutorials/agent-builder-overview#knowledge-base), tools, or collaborators.
- Successfully conducting a complex flow (order, exchange, cancellation, among others).
- Collecting only the necessary information and being direct, without asking additional questions.
- Handling multiple demands in the same conversation successfully.

Receiving a high CSAT score and a customer satisfaction message also counts toward determining an **Amazing conversation**.

> ℹ️ To learn more, see our article [Audit: Improvements backlog](https://help.vtex.com/en/tutorial/audit-improvements-backlog).

## Search and filter conversations

To find specific support chats, you can use the search and filter features.

- To locate a support chat by contact, type the contact name in the **Search** field.
- To filter the list by criteria such as time range, status, CSAT, topic, or conversation type, click `Filter conversations` and select the desired options. When finished, click `Apply filters`.

## Open and read a conversation

To view details of a conversation, click the desired conversation.

At the top of the panel, you'll find the conversation identification data:

- **Contact URN:** the customer's phone number.
- **Topic:** the subject associated with the conversation, when available.
- **Conversation details:** expandable section with additional support chat information.
  - When you click `Conversation details`, you can view the CSAT score (when available) and can go to the complete conversation history with that customer. To visit the history, click `View complete history`. The browser will open a new tab on the **Contacts** page.

The panel body displays the complete conversation, in the order it happened, with the date and time of each message.

## View message logs

In messages sent by the AI agent, you can view the technical records that explain how that response was generated. The logs help you understand the reasoning and actions of the agent behind each response, whether it searched for information in the [knowledge base](https://help.vtex.com/en/docs/tutorials/agent-builder-overview#knowledge-base), whether it looked for that customer among existing contacts, among other actions.

To view the logs, click `Show logs` on the desired message.