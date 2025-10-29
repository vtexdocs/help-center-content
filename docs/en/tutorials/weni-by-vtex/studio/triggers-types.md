---
title: 'Triggers Types'
id: 6yVuYFp3lrmZL0C7AUdEac
status: PUBLISHED
createdAt: 2025-09-12T17:43:13.439Z
updatedAt: 2025-10-03T14:20:34.035Z
publishedAt: 2025-10-03T14:20:34.035Z
firstPublishedAt: 2025-10-03T14:20:34.035Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: triggers-types
legacySlug: triggers-types
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

The keyword is the first word in a message and can be used to start the flow. For example, you can define a trigger using the ""keyword"" to start the flow and record contacts in your service.

All steps described here will be performed on the **""Triggers""** tab, located within the **""Studio""** module.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_1.png)

To facilitate navigation in this article, if you want to go directly to a specific trigger type, just click on its name below:

- [To create a new keyword trigger](#to_create_a_new_keyword_trigger)
- [Creating a message keyword that allows people to join a group](#creating_a_message_keyword_that_allows_people_to_join_a_group)
- [Start a flow in the future or on schedule](#start_a_flow_in_the_future_or_on_schedule)
- [Start a flow after receiving a call](#start_a_flow_after_receiving_a_call)
- [Start a flow after a missed call](#start_a_flow_after_a_missed_call)
- [Start a flow when a conversation is initiated by a contact](#start_a_flow_when_a_conversation_is_initiated_by_a_contact)
- [Start a flow after receiving an unhandled message elsewhere](#start_a_flow_after_receiving_an_unhandled_message_elesewhere)

### To create a new keyword trigger

- Click on the ""Create a keyword that starts a flow"" button

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_2.PNG)

- In a keyword, you can define a word to function as a keyword

- In trigger when, you will choose between two options:

- The message begins with the keyword: If the phrase entered by the user begins with a keyword, the chosen flow will be triggered

- The message contains only the keyword: The chosen flow will be triggered if the user types only the keyword

- In flow, it is defined the flow that will be started when you use the keyword

- In groups only, it is possible to apply the rules of this trigger to specific contact groups, just leave the space blank if you want to apply this rule to all users

- Click the Create trigger button![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_3.PNG)

### Creating a message keyword that allows people to join a group

Using this trigger to add an entry contact to a group. This trigger is useful for managing contacts who want to disassociate a group using the keywords ""stop"" or ""freeze a record"".

**To create a trigger with a keyword that links contacts to a group:**

- Click the ""Create a message keyword that allows people to join a group"" button:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_4.PNG)

- Enter a keyword in ""Associate a keyword""

- Choose the group you would like to add your contacts to in ""Group to join""

- Optional: In ""Reply"", you can choose a message to send

- Under ""Flow"", you can choose which flow to start

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_5.PNG)

### Start a flow after receiving an unhandled message elsewhere

Use this trigger to start a stream after receiving an uncaught message (the message is not handled elsewhere for other triggers). This trigger can be used for messages that have not been handled for an information flow that explains your service and leads you to the flow.

- Click on the button ""Start a stream after receiving an untreated message elsewhere""

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_6.PNG)

- Under ""Flow"", you can choose which flow to start

- In ""Groups only"", you can choose the groups in which the trigger will be applied. If you leave the field empty, the trigger will be applied to all contacts

- Click on ""Create Trigger""
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_7.PNG)

### Start a flow in the future or on schedule

Use this trigger to schedule a flow at a time in the future, repeat it daily, weekly or monthly. To start the flow in the future or on a scheduled basis:

- Click the ""Start a stream in the future or on a schedule"" button:
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_8.PNG)

- Choose the stream you want to start, to which contacts or groups the stream will be transmitted:

- Optional: you can choose to repeat the flow daily, weekly or monthly

- Click on the ""Create Trigger"" box

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_9.PNG)

### Start a flow after receiving a call

- Click the ""Create a stream after receiving a call"" button:
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_10.PNG)

- Under ""Flow"", you can choose which flow to start

- In ""Groups only"", you can choose the group (s) in which the trigger will be applied

- if you leave the field empty, the trigger will be applied to all contacts

- Click on ""Create trigger"".![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_11.PNG)

### Start a flow after a missed call

Use this trigger after a missed call.

- Click the ""Start a flow after a missed call"" button

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_12.PNG)

- Under ""Flow"", you can choose which flow to start

- Click on ""Create Trigger""
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_13.PNG)

### Start a flow after closing a ticket with a human agent

Use this trigger to initiate the flow for closing human support in Weni Chats.

- Click on the ""Start a flow after a ticket is closed"" button:
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_14.png)

- In ""Flow,"" you can choose which flow will be initiated

- In ""Only groups,"" you can select the group(s) where the trigger will or will not be included

- if you leave this field blank, the trigger will be applied to all contacts

- Click ""Create Trigger.""
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/triggers-types_15.png)
