---
title: "Analytics: Support metrics"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-07-02T14:20:03.298Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-support-metrics
locale: en
---

The **Analytics** page provides data and metrics about your operation's human support. Through it, you can monitor support tickets in real time, check the performance of agents and teams, and analyze historical data to identify improvement opportunities. Each native dashboard in VTEX CX Platform brings different support data.

## Live Desk

**Live Desk** is the human support panel in Analytics. It's divided into two tabs: **Monitoring** and **Analysis**.

On this page, you'll find the following controls:

![Refresh, filters, and export data buttons](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/live-desk-controle-de-dados-e-filtros.png)

- `Refresh`: Manually reloads panel data.
- `Filters`: Opens filtering options by department, queue, agent, tags, and period.
- `Export data`: Allows you to download the data displayed on the panel.

This data is automatically updated, and you can see the time of the last update next to the **Refresh** button.

To configure Live Desk preferences, go to **Settings > Live Desk**. Learn more in the article [Configure Live Desk](en/docs/tutorials/manage-live-desk).

### Monitoring

The **Monitoring** tab displays real-time information about ongoing support tickets in your operation.

It contains the following sections:

![Monitoring screen 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-1.png)

#### 1. Support ticket status

Presents a quick summary of the current state of support tickets with three counters:

- **Waiting:** Number of contacts awaiting the start of support in the queue.
- **In progress:** Support tickets being handled by an agent at the moment.
- **Completed:** Total support tickets closed in the period. The period considered for this metric is the current day.

#### 2. Time metrics now

Displays time averages calculated in real time for active support tickets:

- **Average wait time:** How long, on average, contacts wait in the queue before being attended.
- **Average time to 1st response:** Average interval between the contact entering support and receiving the first message from the agent.
- **Average conversation duration:** Total average time of each support ticket, from start to completion.

Each metric also displays the maximum value recorded in the period.

#### 3. Support tickets opened by hour

Line chart showing the distribution of support tickets initiated throughout the hours of the day. Use this chart to identify peak demand times and plan agent scaling.

![Monitoring screen 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-2.png)

#### 4. Volume by queue

Table listing all active support queues and displaying, for each one, the number of support tickets **waiting**, **in progress**, and **completed**. Each list is displayed in descending order.

To expand and view the complete list of queues, click `View all`.

#### 5. Volume by tag

Table listing all tags associated with active support tickets and displaying, for each one, the number of support tickets **waiting** and **completed**. Allows you to identify which topics or categories concentrate more volume. Each list is displayed in descending order.

To expand and view the complete list of tags, click `View all`.

#### 6. CSAT

Displays the customer satisfaction rating (CSAT) collected at the end of support tickets.

- **Overall rating:** Average score calculated based on all ratings received in the period, with the total number of support tickets and ratings responded.
- **Rating by agent:** Individual score of each agent, with the number of support tickets and ratings received. Agents with the highest scores will appear on this list.
- **Rating distribution:** Bar chart with the percentage and number of responses at each level: Very satisfied, Satisfied, Neutral, Dissatisfied, and Very dissatisfied.

> ⚠️ To display the CSAT widget, it must be native in at least one of the project's departments. If it's not active, you need to click the `Activate` button and activate it in a department. For more information about departments, read the article [Configure Live Desk](en/docs/tutorials/manage-live-desk).

![Monitoring screen 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-3.png)

#### 7. Detailed monitoring

Table listing individual support tickets in real time. You can switch between the following views using the tabs at the top of the table:

- **Waiting:** Contacts awaiting support, with accumulated wait time.
- **In progress:** Active support tickets, with data on agent, department, queue, tag, and recorded times.
- **Support:** History of support tickets for the period.
- **Custom breaks:** Record of breaks taken by agents.

The columns display information such as contact, wait time, time to first response, responsible agent, department, and queue.

When you click on one of the support tickets, you'll be redirected to the Live Desk page within **Operations**.

### Analysis

The **Analysis** tab displays historical data about completed support tickets. Use the period selector to set the date range you want to consult.

This tab contains the following sections:

#### 1. Period metrics

Presents a consolidated summary of completed support tickets in the selected period:

| Metric | Description |
| --- | --- |
| **Completed** | Total support tickets closed in the period. |
| **Average wait time** | Average time contacts waited in the queue before being attended. |
| **Average time to 1st response** | Average interval between the contact entering support and receiving the first message from the agent. |
| **Average response time** | Average time a contact waited to receive a response to each message sent. |
| **Average conversation duration** | Average time of each support ticket, from start to finish. |

#### 2. Support tickets opened by hour

Line chart showing the distribution of support tickets initiated throughout the hours of the day in the selected period. You can use this chart to identify demand patterns and plan agent scaling.

#### 3. Volume by queue

Table listing support queues and displaying the number of completed support tickets in each one, sorted in descending order. To see the complete list, click `View all`.

#### 4. Volume by tag

Table listing tags associated with support tickets and displaying the number of completed support tickets in each one, sorted in descending order. This table identifies the topics or categories that concentrated more volume in the period. To see the complete list, click `View all`.

#### 5. CSAT

Displays the customer satisfaction rating (CSAT) collected at the end of support tickets in the selected period.

- **Overall rating:** Average score calculated based on all ratings received, with the total number of support tickets and ratings responded.
- **Rating by agent:** Individual score of each agent, with the number of support tickets, number of ratings, and average of ratings received.
- **Rating distribution:** Bar chart with the percentage and number of responses at each level: Very satisfied, Satisfied, Neutral, Dissatisfied, and Very dissatisfied.

#### 6. Detailed analysis

Table listing individual completed support tickets in the period. You can switch between the following tabs:

- [Completed](#completed)
- [Agent](#agent)
- [Custom breaks](#custom-breaks)

##### Completed

This tab contains information about closed support tickets, with data on agent, department, queue, wait time, time to first response, duration, contact, and protocol. You can filter results by **agent**, **contact**, and **protocol**.

| Column | Description |
| --- | --- |
| Agent | Agent name. |
| Department | Agent department (such as **Logistics**, **Finance**, among others). |
| Queue | Support queue (such as **Tracking**, **Payments**, among others). |
| Wait time | Interval the contact waited in the queue until being attended. |
| Time to 1st response | Average interval between the contact entering support and receiving the first message from the agent. |
| Duration | Time the support lasted from start to finish. |
| Contact | Name of the customer who contacted support. |
| Protocol | Support protocol number. |

##### Agent

This tab provides agent information in the selected period. You can also filter by agent in the **Agent** field.

| Column | Description |
| --- | --- |
| Agent | Agent name. |
| Total support tickets | Number of this agent's support tickets in the selected period. |
| Average time to 1st response | Average interval between the contact entering support and receiving the first message from the agent. |
| Average response time | Average interval of the agent's responses. |
| Average duration | Average duration time of all the agent's support tickets. |
| Time in support | Agent's total support time. |

##### Custom breaks

In this tab, you can view the breaks taken by agents. Each column refers to a custom break and shows how long the agent paused in the selected period.

To learn how to add, remove, or edit custom breaks, read the article [Configure Live Desk](en/docs/tutorials/manage-live-desk).

## Conversational (Beta)

The **Conversational** dashboard provides data on conversations managed by AI agents in your operation. Through it, you monitor conversation volume, contact behavior, AI agent performance, and the impact of interactions on sales.

> ℹ️ Data in the Conversational dashboard covers windows closed until 11:59:59 PM on the start day, considering the time zone configured in the project. Conversations from the current day are still being processed and will be displayed after the period closes.

The dashboard offers the following controls:

- Period selector: sets the date range for data display.
- `Refresh`: manually reloads panel data.
- `Export data`: allows you to download the data displayed on the panel.

This dashboard contains the following sections:

### Conversations

The **Conversations** section presents a summary of the volume and distribution of conversations in the selected period.

| Metric | Description |
| --- | --- |
| **Total conversations** | Total number of conversations initiated in the period. |
| **Handled by AI** | Percentage and total number of conversations closed entirely by the AI agent, without transfer to human support. |
| **Not handled by AI** | Percentage and total number of conversations in which the AI agent couldn't complete the support. |
| **Transferred to live desk** | Percentage and total number of conversations that required human support in Live Desk. |

### Contacts

The **Contacts** section displays metrics about contacts who initiated conversations in the period.

| Metric | Description |
| --- | --- |
| **Unique contacts** | Number of distinct contacts who initiated at least one conversation in the period. |
| **Recurring contacts** | Number of contacts who initiated more than one conversation. Also displays the percentage in relation to total unique contacts. |
| **Average conversations per contact** | Average conversations initiated per contact in the period. |

### Topics

The **Topics** section allows you to categorize and analyze conversations by subject. After adding topics, this section displays the distribution of conversations by category, helping identify the most recurring themes in your operation.

To get started, click <i class="fas fa-plus" aria-hidden="true"></i>`Add your first topic` and define the relevant categories for your operation.

### Customize your dashboard

You can add widgets to the dashboard to display the most relevant metrics for your operation. To do this, click <i class="fas fa-plus" aria-hidden="true"></i>`Add widget` and choose the metrics you want to track.

You can choose between native VTEX CX Platform widgets or custom widgets.

#### Native widgets

- **CSAT:** Tracks customer satisfaction level from the CSAT score.
- **NPS:** Measures the likelihood of a contact recommending the service received.
- **Most used agents:** Displays a ranking of the most used agents by support.
- **Most used tools:** Lists the most used tools by support.
- **Funnel and sales data:** Relates conversations with the business results generated in the period.

#### Custom widgets

- **Horizontal bar chart**: Select an agent and track that agent's data with a bar visualization.
- **Cross table**: Choose two data points you want to track and compare the results of these data points with each other.
- **Absolute numbers**: Select a metric and observe the absolute value of that metric.

## WhatsApp

The WhatsApp dashboard displays data on the volume of messages sent by the WhatsApp number registered in your operation. Through it, you monitor message distribution by category and filter data by template and period.

> ℹ️ Each WhatsApp number with active Meta integration has its own dashboard, created automatically. To access support information from another number, use the dashboard selector.

The dashboard offers the following controls:

- **Period selector:** Sets the date range for data display.
- **Favorite template selector:** Displays the list of templates you've favorited. Select a template to view more information.
- **Template search:** Displays the list of all your store templates. Select a template to view more information.

After selecting a template, you can view the message data for that template.

The chart contains the following information:

- **Messages sent:** Total number of messages sent in the selected period for this template.
- **Messages delivered:** Total number and percentage of messages delivered to contacts.
- **Messages read:** Total number and percentage of messages read by contacts.
- **Clicks:** Total number and percentage of clicks on messages sent to contacts.

The **Button clicks** table displays information about buttons clicked by contacts.

| Data | Description |
| --- | --- |
| **Button text** | Text of the button the customer clicked. |
| **Type** | Button type, such as link or quick reply. |
| **Total** | Total clicks on the button. |
| **Click rate** | Percentage of clicks on the button based on the number of messages sent. |

To view all data, click `All data` next to the template name. This section displays a table with the volume of messages sent, grouped by WhatsApp Business template category.

| Category | Description |
| --- | --- |
| **Marketing** | Promotional messages, such as offers, launches, and campaign communications. |
| **Service** | Customer service messages initiated in response to a conversation opened by the contact. |
| **Utility** | Transactional messages, such as order confirmations, delivery updates, and account notifications. |
| **Authentication** | Identity verification messages, such as one-time passwords (OTP). |
