---
title: 'Using groups to organize human attendance'
id: 64hOFPHnTxUcaMSnIRULrz
status: PUBLISHED
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2025-10-03T14:21:49.503Z
publishedAt: 2025-10-03T14:21:49.503Z
firstPublishedAt: 2025-10-03T14:21:49.503Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-groups-to-organize-human-attendance
legacySlug: using-groups-to-organize-human-attendance
locale: en
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

The use of groups to organize contacts that are in human attendance is
essential.

WARNING: If contacts are not added to a control group, the chatbot will
conflict and stop human service by sending the default messages configured in
your environment.### Adding contacts to the control group

In this article we will refer to the control group as `Human Attendance.`

You must add the contact to this group in the stream that you open a ticket, as
shown earlier.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/chats/using-groups-to-organize-human-attendance_1.png) It is important to mention that if you open tickets in different streams, **you need to do this in all flows**.

### Ignoring control group participants on triggers

**Ignoring control group participants in triggers** To ensure contacts in human
assistance do not receive automatic messages, adding the group is not enough.
You must:

1. Add the group to the ignored list **Groups To Exclude** in each trigger configured in your project.
2. Make this adjustment in **Studio \> Triggers**.
3. Pay special attention to the trigger **""**An uncaught message starts**""**.

This process prevents contacts under assistance from receiving messages from
flows while they are in human assistance.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/chats/using-groups-to-organize-human-attendance_2.png) With this configured, the chatbot will not interrupt human service and the functionality will run as expected.

### Removing contacts from the control group

It is important to remember to remove contact from this group when the human
service session is complete. For this, there is a specific `trigger` type:
'start a flow when a ticket is closed':

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/chats/using-groups-to-organize-human-attendance_3.png) 

This can be an extremely simple flow, where the only action is to remove the contact from the `Human attendance` control group:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/chats/using-groups-to-organize-human-attendance_4.png)

### How do I send custom fields?

The custom fields to be sent must be defined in the Ticket card body, in JSON
format, with each field as an attribute of **custom\_fields**, represented by
its key and value.

Note: The value of each field may or may not be enclosed in **""""**.

Below, observe an example showing the configuration of custom fields, where the
**origin** field has its value defined as the result origin, enclosed in **""""**
as it is a string type.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/chats/using-groups-to-organize-human-attendance_5.png)
