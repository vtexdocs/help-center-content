---
title: 'Audit: Conversations'
createdAt: 2026-08-05T00:00:00.000Z
updatedAt: 2026-08-05T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-conversations
locale: en
---

In the **Audit** module, you can access the **Conversations** tab, where messages between your AI agents and your customers are recorded. In this tutorial, you'll learn how to navigate the conversation list, filter and search for interactions, interpret statuses and feedback, and examine a conversation in detail to assess the quality of your agent's service.

The **Conversations** tab displays a table with all interactions, containing the following information:

| Data | Description |
| --- | --- |
| **Contact** | Name and phone number of the customer served. [Great conversations](#great-conversations) are marked with a star next to the contact name. |
| **Status** | Current status of the conversation. The possible statuses are: <br> `Not resolved`: The AI agent failed to resolve the support request due to an error, such as providing incorrect information, ignoring a complaint, or not performing a promised action. <br> `Handled by AI`: The AI agent successfully resolved the request. <br> `In progress`: The support chat is still ongoing. <br> `Forwarded to human support`: The AI agent couldn't resolve the support request and had to forward it to a human agent. |
| **Feedback** | Satisfaction rating (CSAT) on a scale from 1 to 5, sent at the end of the interaction. Possible ratings are: <br> 😡`Very dissatisfied/CSAT: 1` <br> 😔`Dissatisfied/CSAT: 2` <br> 😐`Neutral/CSAT: 3` <br> 😃`Satisfied/CSAT: 4` <br> 🤩`Very satisfied/CSAT: 5` <br> Unrated conversations are marked with a dash (`-`). |
| **Date** | Date when the conversation occurred. |
| **Time** | Time when the conversation occurred. |

## Great conversations

**Great conversations** are conversations that showcase the value of AI agents in effectively resolving a real need. When reviewing the **Improvement backlog**, these conversations receive a star tag and indicate that the agent took relevant actions, such as:

- Fully resolving a question or issue, using the [knowledge base](https://help.vtex.com/en/docs/tutorials/visao-geral-agent-builder#base-de-conhecimento), tools, or team members.
- Successfully carrying out a complex flow (order, exchange, cancellation, among others).
- Gathering only the necessary information and being direct, without asking additional questions.
- Successfully handling multiple requests in the same conversation.

Receiving a high CSAT score and a customer satisfaction message also counts when determining a **great conversation**.

> ℹ️ To learn more, see the article [Audit: Improvements Backlog](https://help.vtex.com/docs/tutorials/audit-improvements-backlog).

## Searching and filtering conversations

To find specific support interactions, you can use the search and filter features:

- To find a conversation by contact, type the contact name in the **Search** field.
- To filter the list by criteria such as time range, status, CSAT, topic, or conversation type, click `Filter conversations` and select the desired options. Then click `Apply filters`.

## Opening and reading a conversation

To view the details of a conversation, click the desired conversation.

At the top of the page, you'll find the conversation identification details:

- **Contact URN:** The customer phone number.
- **Topic:** The subject associated with the conversation, when available.
- **Conversation details:** Expandable section with additional information about the support chat.
  - By clicking `Conversation details`, you can view the CSAT score (when available) and access the customer's full conversation history. To view the history, click `View complete history`. Your browser will open a new tab on the **Contacts** page.

The page displays the complete conversation in the order it occurred, with the date and time of each message.

## Checking message logs

In messages sent by the AI agent, you can check the technical logs that explain how that response was generated. Logs help you understand the agent's reasoning and actions behind each response, such as whether it searched for information in the [knowledge base](https://help.vtex.com/en/docs/tutorials/visao-geral-agent-builder#base-de-conhecimento) or looked for that customer among existing contacts, among other actions.

To check the logs, click `Show logs` on the desired message.
