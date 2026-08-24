---
title: 'Configuring Live Desk'
createdAt: 2026-07-07T10:05:01.763Z
updatedAt: 2026-07-07T10:20:04.339Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-live-desk
locale: en
---

The **Live Desk Preferences** page allows you to configure the human support behavior for your operation in VTEX CX Platform. On this page, you can define the transfer and closure rules for chats, organize support departments, and manage your team representatives. Support managers can make changes to the department they manage, such as adjusting business hours, adding or removing representatives, creating new queues, and adding or removing tags.

> ⚠️ Only organization admins and project moderators can configure Live Desk.

To access the Live Desk preferences page, go to **Settings > Live Desk** in the project.

## General

The **General** tab contains the settings that determine how chats are distributed, transferred, and closed in your operation.

### Project preferences

The **Project preferences** section contains general preferences for human support in your store. To enable or disable a preference, click the toggle switch next to it.

| Preference | Description |
| --- | --- |
| **Allow AI agents to transfer conversations to human support** | Allows an AI agent to forward the conversation to a human representative. When you enable this option, describe in the text field the scenarios or criteria that require transfer to human support in up to 1,000 characters. |
| **Allow interactions only for online representatives** | Prevents offline or paused representatives from responding to ongoing chats. |
| **Transfer chats in bulk to another queue or representative** | Allows you to transfer multiple chats at once to another queue or representative. |
| **Block chat transfers to offline representatives** | Prevents chat transfers to representatives who are offline. |
| **End chats in bulk** | Allows you to close multiple chats at once. |
| **Block ending chats in the queues** | Prevents closing chats that are awaiting support. |
| **Take over chats in bulk** | Allows the representative to accept multiple chats at once. |
| **Allow representatives to choose their queues within the department** | Allows representatives to choose which queues they'll handle. When enabled, the feature is only visible to representatives in the **Live Desk** module under **Operations**. |
| **Show counter with the number of chats waiting for human support** | Shows the number of chats awaiting human support. |
| **Show chat department in the conversation list** | Shows the department of each support chat in the conversation list. When enabled, a tag with the chat department is shown next to the contact name. |

### Custom breaks

Custom breaks are statuses that representatives can use to indicate they're temporarily unavailable, such as lunch breaks. You can add up to 10 different statuses.

To create a custom break, enter a name for it in the **New status** field (for example, Break) and click `Add`. The custom break will display below the field.

To delete a custom break, click its name and then click `Delete`.

In this section, you can also enable the **Show status timer for custom breaks** option to display how long the representative has been on break.

## Departments

The **Departments** tab allows you to create and manage departments for your operation, such as support, sales, or finance. Each department groups the queues and representatives that handle a specific type of request.

In the **Department management** section, you can:

- Search for a department by name in the **Filter by department name** field.
- Sort the department list alphabetically, by most recent, or by oldest.
- Edit or delete a department by clicking the `⋮` menu on the department card.
- Create a new department.

### Creating a new department

To create a department, follow the instructions below:

1. Click <i class="fas fa-plus" aria-hidden="true"></i> `New department`.
2. Complete the information for each step of the configuration assistant, as described in the sections below.
3. After completing the four steps, click `Create`.

#### Step 1: Configure the department and work schedule

![Etapa 1 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_1.png)

In step 1, choose between the following options:

- **Customize new department (recommended):** Configure all department details manually.
- **Create a default department (faster):** Create a department with predefined settings.

If you choose **Customize new department**, follow the instructions below:

1. In **Define a name for the department and its managers**, complete the following fields:
   - **Department name:** Enter a name to identify the department, such as Finance or Support.
   - **Add manager:** Search for and select the department managers by name or email.

2. In **Workdays**, configure the days and hours of operation for the department:
   - Enable **Copy the workday settings from an existing department** to reuse the settings from another department.

     Then choose the department you want to copy.
   - Select the days of the week when the department will be active by clicking each day.

     Then define the time ranges. You can define up to two ranges for each day.
   - Enable **Holidays in {Country}** to automatically include national holidays.
     - Click `View all holidays` to view the complete list.
     - To exclude a holiday, disable the toggle switch for that holiday.
   - Click `+ Add specific dates` to include dates when the department won't operate, such as special closures or corporate holidays.

3. In **Define a limit on the number of simultaneous chats per representative**, enter the maximum number of chats each representative can handle at the same time. This limit can be exceeded when the representative manually chooses chats or receives chat transfers.

   Enter `0` to allow representatives to pick chats directly from the queue, without automatic distribution.

   > ⚠️ A representative's limit takes precedence over the team or department limit. For example, if the team has a limit of 20 chats but a representative has a limit of 25 chats, that representative can handle up to 25 chats.

4. Click `Continue`.

#### Step 2: Configure a queue

![Etapa 2 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_2.png)

- **Create a custom queue (recommended):** Define queue details manually.
- **Create default queue (faster):** Create a queue with predefined settings.

If you choose **Create a custom queue**, follow the instructions below:

1. Complete **Queue name** with a name for the queue, such as *Payments* or *Exchanges*.
2. Enable **Limit chats** to set a maximum limit for the queue. When this limit is reached, new chats won't be created.
3. Click the **Add representative** menu to search for and select representatives for the queue.
4. To add more than one queue to the department, click `+ Add queue` and repeat the process.
5. Click `Continue`.

#### Step 3: Configure options and messages

![Etapa 3 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_3.png)

In step 3, configure the support options, automated messages, and tags for the department. Follow the instructions below:

1. In **Additional options**, enable or disable the settings based on your operation's needs:

| Option | Description |
| --- | --- |
| **Trigger message templates** | Allows representatives to send preconfigured message templates in a support chat. |
| **Use signature** | Automatically adds the representative name to each message sent. |
| **Allow representatives to edit custom fields** | Allows representatives to edit the contact's custom fields in the **All information** section. |

2. In **Automated messages**, configure automatic messaging to contacts:

| Option | Description |
| --- | --- |
| **Send automatic message to waiting contacts** | Sends an automated message to contacts awaiting support in the queue. The message appears as if sent by the assigned representative. |
| **Send automatic message when support starts** | Sends an automated message when the chat is assigned to a representative. The message appears as if sent by that representative. |

3. Under **Satisfaction survey**, enable **Automatically send a satisfaction survey after Live Desk support ends** to collect customer feedback at the end of each support chat.

   Choose from the available options:

   - **Default CSAT survey (recommended)**
   - **Custom flows**

   > ⚠️ To ensure accurate results, the selected flow must use a scale from 1 to 5.

4. In **Tags**, configure the department tags:
   - In the **Tag name** field, search for an existing tag or type a new name to create one. Click `Add` to include it in the department.
   - Enable **Require tags at the end of human support** to require at least one tag when closing a support chat.

5. After completing the fields, click `Continue`.

#### Step 4: Configure a quick message (optional)

![Etapa 4 do assistente de criação de setor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/configurações-vtex-cx-platform/configurar-o-live-desk_4.png)

In step 4 (last step), configure quick messages for the department. Quick messages are shortcuts that let representatives send standardized responses more quickly in a support chat.

> ℹ️ This step is optional. You can skip the quick message configuration and complete it later in the department settings.

To add a quick message in **Configure a quick message**, follow the instructions below:

1. In **Shortcut**, enter the word or expression that will trigger the message. For example: "Hello".
2. In **Message**, enter the text that will be sent when the shortcut is triggered. For example: "Hello, how can I help you today?". This field accepts up to 1,000 characters.
3. To add more quick messages, click `+ Add new quick message` and repeat the process.
4. When you're done, click `Create`.

## Representatives

The **Representatives** tab lets you view and manage the representatives in your operation.

The **Representative management** section lists all representatives. For each representative, the section displays their name, email, department, and the maximum number of simultaneous chats they can handle.

You can find a specific representative using the following filters:

- **Filter by status**: Displays representatives based on their current status, such as online or offline.
- **Filter by representatives**: Displays one or more specific representatives.
- **Filter by departments**: Displays the representatives of a department.
- **Filter by queues**: Displays the representatives of a queue.

In this tab, you can also apply the following actions to representatives:

- Change the departments and queues of representatives.
- Set the limit of simultaneous chats per representative.

To apply an action to one or more specific representatives, check the box next to each name.

To apply an action to all representatives in the list, check the **Select all representatives** box.
