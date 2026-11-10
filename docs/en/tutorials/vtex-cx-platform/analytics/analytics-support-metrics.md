---
title: "Analytics: Support metrics"
createdAt: 2026-07-02T16:25:21.244Z
updatedAt: 2026-11-10T18:50:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-support-metrics
locale: en
---

The **Analytics** page provides metrics about support chats, AI agent conversations, and message delivery in your operation. Use it to monitor active chats in real time, evaluate team performance, and analyze operational trends across three dashboards: **Live Desk**, **Conversational**, and **WhatsApp**.

## Live Desk

**Live Desk** is the human support dashboard in Analytics. It's divided into two tabs: **Monitoring** and **Analysis**.

On this page, you'll find the following controls:

![Update, filter, and data export buttons](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/vtex-cx-platform/analytics/live-desk-data-management-and-filters.png)

- `Refresh`: Manually reloads the dashboard data.
- `Filters`: Opens filter options by department, queue, representative, tags, and period.
- `Export data`: Allows you to download the data displayed on the dashboard.

This data refreshes automatically, and you can see the time of the last update next to the **Refresh** button.

To configure Live Desk preferences, go to **Settings > Live Desk**. Learn more in [Configure Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk).

### Monitoring

The **Monitoring** tab displays real-time information about ongoing support chats in your operation.

It includes the following sections:

![Monitoring screen 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/vtex-cx-platform/analytics/monitoring-screen-1.png)

#### 1. Status of support chats

Provides a quick summary of the current state of support chats with three counters:

- **Waiting:** Number of contacts in queue waiting for a support chat to start.
- **In progress:** Number of support chats currently handled by a representative.
- **Completed:** Number of support chats finished during the current day.

#### 2. Current time metrics

Displays average times calculated in real time for active support chats:

- **Average wait time:** Average time contacts wait in queue before a chat starts.
- **Average time to 1st response:** Average interval between the start of a chat and the representative's first message.
- **Average chat duration:** Average total duration of each support chat, from start to end.

Each metric also displays the maximum value recorded in the period.

Project moderators can set an optional time goal for any of these metrics. Goals are independent, so you can configure one, some, or all of them, and choose the unit in seconds, minutes, or hours. When a goal is set and the current maximum for that metric exceeds it, the widget shows a visual alert. A metric without a goal doesn't show an alert.

The same goals can also notify the operation outside the widget:

- A toast appears in **Analytics**, on any open dashboard, when the number of support chats over the limit reaches the number you configured. The default is 5. The toast appears again only after that count drops below the limit and reaches it once more. While the count stays at or above the limit, it doesn't appear again.
- An email can be sent to selected moderators and managers, with one message per goal (wait time, time to 1st response, or chat duration), using the same count rule as the toast.

To set the goals, the number of support chats that must exceed them, and the email recipients, see [Configuring risk alerts](https://help.vtex.com/en/docs/tutorials/configuring-risk-alerts).

#### 3. Support chats opened per hour

Line chart showing the distribution of support chats started throughout the hours of the day. You can use this chart to identify peak demand times and plan representative shift scheduling.

![Monitoring screen 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/vtex-cx-platform/analytics/monitoring-screen-2.png)

#### 4. Volume per queue

Table listing all active support chat queues and displaying, for each one, the number of support chats **Waiting**, **In progress**, and **Completed**. The lists are sorted in descending order.

To expand and view the full list of queues, click `View all`.

#### 5. Volume per tag

Table listing all tags associated with active support chats and displaying, for each one, the number of support chats **In progress** and **Completed**. Allows you to identify the most common topics or categories. The lists are sorted in descending order.

To expand and view the full list of tags, click `View all`.

#### 6. CSAT

Displays the customer satisfaction score (CSAT) based on the surveys collected at the end of support chats.

- **Overall rating:** Average score calculated based on all surveys received in the period, with the total number of support chats and answered surveys.
- **Rating by representative:** Individual score for each representative, with the number of support chats and ratings received. Representatives with the highest scores appear in this list.
- **Rating distribution:** Bar chart showing the percentage and number of responses for each level: Very satisfied, Satisfied, Neutral, Dissatisfied, and Very dissatisfied.

> ⚠️ To display the CSAT widget, it needs to be enabled natively in at least one of the project's departments. If it's not active, you need to click the `Enable` button and enable it in a department. For more information about departments, see the [Configure Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk) article.

![Monitoring screen 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/vtex-cx-platform/analytics/monitoring-screen-3.png)

#### 7. Detailed monitoring

Table listing individual support chats in real time. You can switch between the following views using the tabs at the top of the table:

- **Waiting:** Contacts awaiting a support chat, with accumulated wait time.
- **In progress:** Active support chats, with representative, department, queue, tag, and recorded time data.
- **Representative:** History of representatives for the period.
- **Custom breaks:** Record of breaks taken by representatives.

When a time goal is configured, the table highlights the support chats that exceed it:

- **Waiting:** Highlights chats whose wait time exceeds the average wait time goal.
- **In progress:** Highlights chats that exceed the time to 1st response goal or the chat duration goal. If a chat exceeds both, the row shows the first-response alert.

The columns display information such as contact, wait time, time to first response, representative, department, and queue.

By clicking one of the support chats, you'll be redirected to the Live Desk page under **Operations**.

### Analytics

The **Analytics** tab displays historical data about completed support chats. Use the period selector to set the date range you want to query.

This tab has the following sections:

#### 1. Period metrics

Shows a consolidated summary of the support chats completed in the selected period:

| Metric | Description |
| --- | --- |
| **Completed** | Total number of support chats closed during the period. |
| **Average wait time** | Average time contacts waited in the queue before the support chat started. |
| **Average time to 1st response** | Average time between the contact entering the support chat and receiving the first message from the representative. |
| **Average response time** | Average time a contact waited for a response to each message they sent. |
| **Average chat duration** | Average time of each support chat, from start to finish. |

#### 2. Support chats opened per hour

Line chart showing the distribution of support chats started throughout the hours of the day in the selected period. You can use this chart to identify demand patterns and plan representative scheduling.

#### 3. Volume per queue

Table listing the support queues and showing the number of support chats completed in each one, sorted in descending order. To see the full list, click `View all`.

#### 4. Volume per tag

Table listing the tags associated with support chats and showing the number of support chats completed in each one, sorted in descending order. This table identifies the topics or categories that had the highest volume in the period. To see the full list, click `View all`.

#### 5. CSAT

Displays the customer satisfaction score (CSAT) based on the surveys collected at the end of support chats in the selected period.

- **Overall rating:** Average score calculated based on all surveys received, along with the total number of support chats and answered surveys.
- **Rating by representative:** Individual score for each representative, with the number of support chats, number of ratings, and average ratings received.
- **Rating distribution:** Bar chart with the percentage and number of responses at each level: Very satisfied, Satisfied, Neutral, Dissatisfied, and Very dissatisfied.

#### 6. Detailed analysis

Table listing the individual support chats completed in the period. You can switch between the following tabs:

- [Completed](#completed)
- [Representative](#representative)
- [Custom breaks](#custom-breaks)

##### Completed

This tab contains information about completed support chats, including data on representative, department, queue, wait time, time to first response, duration, contact, protocol, and CSAT score. You can filter results by **representative**, **contact**, and **protocol**.

| Column | Description |
| --- | --- |
| **Representative** | Representative name. |
| **Department** | Representative department (such as **Logistics**, **Finance**, among others). |
| **Queue** | Support chat queue (such as **Tracking**, **Payments**, among others). |
| **Wait time** | Time the contact waited in the queue before the support chat started. |
| **Time to 1st response** | Average time between the contact entering the support chat and receiving the first message from the representative. |
| **Duration** | How long the support chat lasted from start to finish. |
| **Contact** | Name of the customer who reached out for support. |
| **Protocol** | Protocol number of the support chat. |
| **CSAT score** | Customer satisfaction score from the native CSAT response for that closed support chat, when the contact answered the survey. |

##### Representative

This tab provides information about representatives in the selected period. You can also filter by representative in the **Representative** field.

| Column | Description |
| --- | --- |
| **Representative** | Representative name. |
| **Total support chats** | Number of support chats handled by this representative in the selected period. |
| **Average time to 1st response** | Average time between the contact entering the support chat and receiving the first message from the representative. |
| **Average response time** | Average interval between representative responses. |
| **Average duration** | Average duration of all the representative's support chats. |
| **Time in support chat** | Total support chat time for the representative. |

##### Custom breaks

In this tab, you can view the breaks taken by representatives. Each column refers to a custom break and shows how long the representative paused during the selected period.

To learn how to add, remove, or edit custom breaks, see the [Configure Live Desk](https://help.vtex.com/en/docs/tutorials/configure-live-desk) article.

## Conversational

The **Conversational** dashboard provides data on conversations managed by AI agents in your operation. It allows you to track conversation volume, contact behavior, AI agent performance, and the impact of interactions on sales.

> ℹ️ The **Conversational** dashboard includes conversation windows closed by 23:59:59 on the start day, in the project time zone. Conversations from the current day appear after that period closes.

The dashboard offers the following controls:

- `Period selector:` Defines the date range for displaying the data.
- `Refresh`: Manually reloads the dashboard data.
- `Export data`: Allows you to download the data displayed in the dashboard.

This dashboard contains the following sections:

### Conversations

The **Conversations** section shows a summary of the volume and distribution of conversations during the selected period.

| Metric | Description |
| --- | --- |
| **Total conversations** | Total number of conversations started during the period. |
| **Handled by AI** | Percentage and total number of conversations entirely closed by the AI agent, without transfer to human support. |
| **Not handled by AI** | Percentage and total number of conversations in which the AI agent couldn't complete the support chat. |
| **Transferred to Live Desk** | Percentage and total number of conversations that required human support on Live Desk. |

### Contacts

The **Contacts** section displays metrics about the contacts who started conversations during the period.

| Metric | Description |
| --- | --- |
| **Unique contacts** | Number of distinct contacts who started at least one conversation during the period. |
| **Returning contacts** | Number of contacts who started more than one conversation. Also shows the percentage relative to the total number of unique contacts. |
| **Average conversations per contact** | Average number of conversations started per contact during the period. |

### Topics

The **Topics** section allows you to categorize and analyze conversations by topic. After adding topics, this section displays the distribution of conversations by category, helping you identify the most recurring topics in your operation.

To get started, click <i class="fas fa-plus" aria-hidden="true"></i>`Add your first topic` and define the categories relevant to your operation.

### Customize your dashboard

You can add widgets to the dashboard to display the metrics most relevant to your operation. To do this, click <i class="fas fa-plus" aria-hidden="true"></i>`Add widget` and choose the metrics you want to track.

You can choose between native VTEX CX Platform widgets or custom widgets.

#### Native widgets

- **CSAT:** Tracks customer satisfaction levels based on the CSAT score.
- **NPS:** Measures the likelihood of a contact recommending the service they received.
- **Most used agents:** Ranks the agents used most often in conversations during the period.
- **Most used tools:** Ranks the tools used most often in conversations during the period.
- **Sales funnel and data:** Relates conversations to the business results generated during the period.
- **Most searched terms:** Lists the search terms shoppers use most often in conversations during the period.
- **Most added products to cart:** Lists the products shoppers add to the cart most often in conversations during the period.

> ℹ️ The **Most searched terms** widget appears automatically when the Concierge agent is assigned to the project. The **Most added products to cart** widget appears when the Payments agent is assigned. You can remove them from the dashboard and add them back later. They show search and add-to-cart activity inside conversations. They don't measure completed purchases, conversion rates, or business impact.

#### Custom widgets

- **Horizontal bar chart:** Displays data for a selected agent as a bar chart.
- **Crosstab:** Compares two metrics against each other in a table.
- **Absolute numbers:** Displays the total numeric value of a selected metric.

## WhatsApp

The WhatsApp dashboard displays data on the volume of messages sent by the WhatsApp number registered in your operation. You can track the distribution of messages by category and filter the data by template and period.

> ℹ️ Each WhatsApp number with an active Meta integration has its own dashboard, created automatically. To access support chat information for another number, use the dashboard selector.

The dashboard offers the following controls:

- **Period selector:** Sets the date range for displaying the data.
- **Favorite template selector:** Displays the list of templates you've marked as favorite. Select a template to view more information.
- **Search template:** Displays the list of all templates in your store. Select a template to view more information.

After selecting a template, the chart displays:

- **Sent messages:** Total number of messages sent for this template in the selected period.
- **Delivered messages:** Total number and percentage of messages delivered to contacts.
- **Read messages:** Total number and percentage of messages read by contacts.
- **Clicks:** Total number and percentage of clicks on messages sent to contacts.

The **Button clicks** table displays information about the buttons clicked by contacts.

| Column | Description |
| --- | --- |
| **Button text** | Text displayed on the button clicked by the customer. |
| **Type** | Button type, such as link or quick reply. |
| **Total** | Total button clicks. |
| **Click-through rate** | Percentage of button clicks based on the number of messages sent. |

To view all the data, click `All data` next to the template name. This section displays a table with the volume of messages sent, grouped by WhatsApp Business template category.

| Category | Description |
| --- | --- |
| **Marketing** | Promotional messages, such as offers, launches, and campaign communications. |
| **Service** | Customer support chat messages initiated in response to a conversation opened by the contact. |
| **Utility** | Transactional messages, such as order confirmations, shipping updates, and account notifications. |
| **Authentication** | Identity verification messages, such as one-time passwords (OTP). |
