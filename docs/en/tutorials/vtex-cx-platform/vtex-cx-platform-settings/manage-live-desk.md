---
title: 'Manage Live Desk'
id: 2MnTerJXgAfJMRi0EqfTpp
status: PUBLISHED
createdAt: 2025-09-16T15:05:01.763Z
updatedAt: 2025-10-03T14:20:04.339Z
publishedAt: 2025-10-03T14:20:04.339Z
firstPublishedAt: 2025-10-03T14:20:04.339Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: manage-live-desk
legacySlug: weni-chats-setting-up-human-attendance
locale: en
subcategoryId: 119WfAe6xGl5c0S1hLdHRQ
---

### Configuring Human Support in the Chats Module

Like other modules on the Weni Platform, **Chats** is located within a project, so the user configuring it must be an administrator or moderator of that project.

For an agent to use Chats, they must be assigned to a **department** (a group for support). Each department includes at least one manager, one queue, and one agent.

The **support manager** can make changes to the department they manage, such as setting business hours, adding or removing agents, creating new queues, and adding or removing tags.

All of this management is done within the project under **Settings > Chats**.

### Sector

In the department, you can set the operating hours for human support, define the limit of simultaneous chats per agent, and add tags. These tags allow agents to classify chats by topic at the end of each interaction, making future searches and reporting easier.

## How to Add a Support Department in Weni Chats

To add a department in Weni Chats, you need to go to the **Settings module > Chats > New Department**.

After that, fill in the information to create the department:

* Department Name;
* Support Managers (who will view the support history, agent activities, and dashboard);
* Additional options for the department;
* Definition of working hours (the time during which support requests can be opened if the user asks);
* Number of simultaneous support sessions.

After configuring the department, set up the queues.

### Queue

A department must have at least one queue. Queues are used to subdivide a department if you want a department with more than one group of agents. If this subdivision isn’t necessary, simply create a single queue.

An example of using queues can be seen in a **Technical Support** department. For this department, it may be helpful to have queues like **Basic**, **Intermediate**, and **Advanced**, where the bot filters and directs the contact to the appropriate queue based on their needs.

If the department doesn’t require subdivision, a single queue is sufficient.

If an agent is assigned to more than one queue, whether in the same or different departments, Chats will route interactions to the agent in order of arrival.

### How to Add Support Queues in Weni Chats

Every department requires at least one queue to be configured in order to function. So, you must set it up when creating the department. When creating your queue, provide a name for the queue and add one or more agents:

After configuring the department and queue, it's time to create your support tags.

### TAGs

Tags are used to classify the characteristics of a support interaction, allowing chats to be searched and filtered based on these tags. When closing a chat, the agent will use tags to categorize the conversation according to its topic and other relevant characteristics.

### **How to Add Users to the Weni Platform Organization**

To add or remove new users, such as agents, first add the user to the Weni platform. Enter your organization on the Weni platform and click on the ""manage members"" icon, where you can input the names and emails to be added or removed.

Click the **manage members** button in the **Weni platform organization > Enter the email > Select the type of permission** and click **add** in the Weni platform organization.

### Adding Agents to Your Project

To add users who will be part of the human support team, they must be added to the project.

In your Organization, where the projects are listed, click on the indicated location in the specific project:

The process is the same as adding users to the Organization:

1 - Enter the email

2 - Choose the human support permission

3 - Click the add button

4 - Wait for confirmation

If the user will only handle human support, add them only to the project without needing to add them to the organization.

To learn more about permissions, [read this article](/en/docs/tutorials/weni-chats-human-service-management).

After assigning the correct permission to the user, the chat module will be available, and they will be a support agent. Now, simply add them to the queue, they will manage.

### How to Add a Support Tag

Support tags are selected when closing a support session and are used to filter support histories and dashboards through these tags. Tags can be related to the topic discussed during the session, but it's up to you to decide how best to use them. Remember, when closing a support session, at least one tag is required.

To create a tag, **choose the name > Click Add > Click Save**.

Now, your human support is set up. The next step is to use an ""open ticket"" card in your flow to direct users to human support.
