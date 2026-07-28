---
title: 'Configure Live Desk'
createdAt: 2026-07-07T10:05:01.763Z
updatedAt: 2026-07-07T10:20:04.339Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-live-desk
locale: en
---

The **Live Desk Preferences** page allows you to configure the human support behavior of your operation on VTEX CX Platform. On this page, you define the transfer and closure rules for chats, organize support departments, and manage your team representatives. Support managers can make changes to the department they manage, such as business hours, adding or removing agents, creating new queues, and removing or adding tags.

> ⚠️ To configure Live Desk, you need to be an organization admin or project moderator. Only an admin or moderator can configure Live Desk.

To access the Live Desk preferences page, go to **Settings > Live Desk** within the project.

## General

The **General** tab contains the settings that determine how chats are distributed, transferred, and closed in your operation.

### Settings

The **Settings** section contains general preferences for human support in your store. To enable or disable a setting, click the toggle button next to it.

| Setting | Description |
| --- | --- |
| **Allow AI agents to transfer conversations to human support** | Allows an AI agent to forward the conversation to a human representative. When you enable this option, describe in the text field the scenarios or criteria that require transfer to human support, in up to 1000 characters. |
| **Allow interactions only for online representatives** | Prevents offline or paused representatives from responding to ongoing chats. |
| **Bulk transfer chats to another queue or representative** | Allows you to transfer multiple chats at once to another queue or another representative. |
| **Block chat transfer to offline representatives** | Prevents chat transfers to representatives who are offline. |
| **Bulk close chats** | Allows you to close multiple chats at once. |
| **Block closing of queued chats** | Prevents closing chats that are awaiting support. |
| **Bulk accept chats** | Allows the representative to accept multiple chats at once. |
| **Allow representatives to choose which queues they receive chats from** | Allows representatives to choose which queues they'll handle. When enabled, the feature is only visible to representatives in the **Live Desk** module within **Operations**. |
| **Show counter with the number of chats awaiting human support** | Shows the number of chats awaiting human support. |
| **Show chat department in the conversation list** | Shows the department of each support chat in the conversation list. When enabled, a tag with the chat department is shown next to the contact name. |

### Custom pauses

Custom pauses are statuses that representatives can use to indicate they're temporarily unavailable, such as during lunch breaks. You can add up to 10 different statuses.

To create a custom pause, type a name for the pause in the **New status** field (for example, Break) and click `Add`. The custom pause appears below.

To delete a custom pause, click on the custom pause name, and then click `Delete`.

On this tab, you can also enable the option **Show status timer on representative custom pauses** to display how long the representative has been paused.

## Departments

The **Departments** tab allows you to create and manage the support departments of your operation, such as support, sales, or finance. Each department groups queues and representatives responsible for a type of demand.

In the **Department management** section, you can:

- Search for a department by name in the **Filter by department name** field.
- Sort the department list alphabetically, by most recent, or oldest.
- Edit or delete a department by clicking the `⋮` menu on the department card.
- Create a new department.

### Create a new department

To create a department, follow the instructions below:

1. Click <i class="fas fa-plus" aria-hidden="true"></i> `New department`.
2. Complete the information for each step of the configuration wizard, described in the sections below.
3. After completing the four steps, click `Create`.

#### Step 1: Configure department and work schedule

In the first step, choose between the following options:

- **Customize new department (recommended):** configure all department details manually.
- **Create default department (faster):** create a department with predefined settings.

If you choose **Customize new department**, follow the instructions below:

1. In **Define a name for the department and its managers**, complete the following fields:
   - **Department name:** Enter a name to identify the department, such as Finance or Support.
   - **Add manager:** Search for and select those responsible for the department by name or email.
2. In **Work schedule settings**, configure the days and hours of operation for the department:
   - Enable **Copy the work schedule from an already configured department** to reuse the settings from another existing department.
       
       Then choose the department you want to copy.
   - Select the days of the week when the department will be active by clicking each day.
     
      Then choose the time intervals. You can choose up to two intervals for each day.
   - Enable **Holidays in Brazil** to automatically include national holidays.
     - Click `View all holidays` to see the complete list.
     - To exclude a holiday, disable the button for that holiday.
   - Click `+ Add specific dates` to include dates when the department won't operate, such as recesses or corporate holidays.
3. In **Define a limit on the number of simultaneous chats per representative**, enter the maximum number of chats each representative can receive at the same time. This limit can be exceeded when the representative manually chooses chats or receives chat transfers.
  
   Enter `0` for representatives to pick chats directly from the queue, without automatic distribution.

   > ⚠️ A representative's limit takes precedence over the team or department limit. For example, if the team has a limit of 20 chats but a representative has a limit of 25 chats, that representative can handle up to 25 chats.

4. Click `Continue`.

#### Step 2: Configure queue

- **Create a custom queue (recommended):** define queue details manually.
- **Create default queue (faster):** create a queue with predefined settings.

If you choose **Create a custom queue**, follow the instructions below:
1. Complete **Queue name** with a name for the queue, such as _Payments_ or _Exchanges_.
2. Enable **Limit the number of chats awaiting support** to set a ceiling for the queue. When the limit is reached, new chats won't be created.
3. Click the **Add representative** menu to search for and select representatives for the queue.
4. To add more than one queue to the department, click `+ Add queue` and repeat the completion.
5. Then click `Continue`.

#### Step 3: Configure options and messages

In the third step, configure the support options, automated messages, and tags for the department. Follow the instructions below:

1. In **Extra options**, enable or disable the settings according to your operation's needs:

   | Option | Description |
   | --- | --- |
   | **Message template dispatch** | Allows representatives to send preconfigured message templates during support. |
   | **Use signature** | Automatically adds the agent's name to each message sent. |
   | **Allow representatives to edit custom contact information** | Allows representatives to edit custom contact fields in the **All information** section. |

2. In **Automated messages**, configure automatic message sending to contacts:

   | Option | Description |
   | --- | --- |
   | **Send automated message to waiting contacts** | Sends an automated message to contacts awaiting support in the queue. The message appears as if sent by the assigned representative. |
   | **Send automated message when starting support** | Sends an automated message when the chat is assigned to a representative. The message appears as if sent by the assigned representative. |

3. In **Satisfaction survey**, enable **Automatically send a satisfaction survey after the Live Desk support is closed** to collect customer feedback at the end of each support chat.
   
   Choose from the available options:
     - **Default CSAT survey (recommended)**
     - **Custom flows**

   > ⚠️ To ensure accurate results, the selected flow needs to use a scale of 1 to 5.

4. In **Tags**, configure the department tags:
   - In the **Tag name** field, search for an existing tag or type a new name to