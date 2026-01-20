---
title: 'Action cards'
id: 5TQ44l4pp84PPWdnWdg3JN
status: PUBLISHED
createdAt: 2025-09-16T16:43:29.253Z
updatedAt: 2025-10-03T14:20:03.887Z
publishedAt: 2025-10-03T14:20:03.887Z
firstPublishedAt: 2025-10-03T14:20:03.887Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: action-cards
legacySlug: action-cards
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

After understanding a little more about what Action Cards are in our [Introduction to flow](https://help.vtex.com/en/docs/tutorials/flows-introduction), we will now move on to what cards exists and what we can do with each one.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_1.gif)

To facilitate navigation through this article, if you want to go directly to a specific action card, just click on its name below:
  * Send the contact a message
  * Send somebody else a message
  * Label the incoming message
  * Add a URN for the contact
  * Add the contact to a group
  * Remove the contact from a group
  * Update the contact
  * Send an email
  * Save a result for this flow
  * Enter another flow
  * Start somebody else in a flow
  * Send a WhatsApp message
  * Open a ticket with a human agent
  * Call a webhook

### Send the contact a message

The most popular and widely used action card on the platform. Its function is to send a message to the contact. This message will be received regardless of the channel the user is chatting in, just write it in the text box.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_2.png)

  1. **Facebook**

Sending mass messages via a Facebook channel requires specifying a topic if the user has not sent a message in the last 24 hours. Setting a topic to use on Facebook is especially important for the first message in your flow.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_3.png)

  1. **WhatsApp**

Sending messages via a WhatsApp channel requires using a template if you have not received a message from a contact in the last 24 hours. Configuring a template for use on WhatsApp is especially important for the first message in your flow. Read the article about [conversations started by a business on WhatsApp](https://help.vtex.com/en/docs/tutorials/active-message-dispatch-on-whatsapp).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_4.png)

  1. **Quick Replies**

There is the possibility to send quick replies (text buttons) to users, thus facilitating the response and serving as a possibility for a guide to your conversation. Currently, you can add up to 10 text buttons per letter.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_5.png)

Stay tuned! Not all channels support text buttons. Currently, the channels that have the buttons are: Telegram, Web, Facebook Messenger and WhatsApp.
  1. **Attachments**

It is also possible to send attachments to a user. These attachments can be photos, videos, audios and documents. To send these attachments, simply place the media link, or choose the file using your computer's file selector. Currently, you can add up to 3 attachments per card.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_6.png)

Always make sure the channel your audience is working on supports the media you want to send.
  1. **Advanced**

The ""Advanced"" option (Advanced Settings) allows you to enable message delivery to all destinations, meaning the message will be sent to all channels the contact is linked to, not just the preferred channel. After that, the channel chosen by the user to reply will become the new preferred channel for that conversation.

In other words, if your preferred channel is WhatsApp, by selecting the ""all destinations"" option, the contact will receive the message on all channels they have. If they reply via SMS, SMS will become the new preferred channel for that contact, and the flow will continue there.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_7.png)

This setting is only useful in specific cases! If in doubt about use, preferably leave it unchecked.

### Send somebody else a message

We can send a message to a contact or group other than the one running the flow. This message will be displayed to the contact / group without affecting any flow or conversation that may be currently running for them.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_8.png)

With this, you or a group of people of your choice, can receive notifications from users who pass through specific points of your flows.

### Label the incoming message

You can mark the last message sent by the contact with a Label. All labeled messages go to a message group with the same name as the label. You can learn more about messages and labels in the [messages article](https://help.vtex.com/docs/tutorials/contacts-messages).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_9.png)

How about marking all interests in your company's products? It would be a good way to use the labels.

#### Add a URN for the contact

It is possible to add new URNs for your contact. You can select the type of URN to be added (Phone Number, Whatsapp, SMS, Telegram, etc.) and enter the new value, using some fixed value or a flow variable. To understand a little more about URN, you can visit the article on the subject

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_10.png)

Did your lead arrive through your website? Ask his Whatsapp number and send a message over there! Remember to add the country code when modifying the phone number or WhatsApp Number.

#### Add the contact to a group

You can add the contact to a static group. If the group does not exist in the contacts tab, you can create it by typing the name you want for the group in the selection field. To understand a little more about groups, visit the [contact article](/en/docs/tutorials/introduction-to-contacts)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_11.png)

Did the contact complete a satisfaction survey? You can group it with everyone who answered the survey.

#### Remove the contact from a group

You can remove the contact from some [static group](/en/docs/tutorials/static-groups). In addition, you have the option to mark to remove the contact from all groups that he is part of, without distinction. To understand a little more about groups, visit the contact article

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_12.png)

Is the contact no longer your customer? You can remove it from the group and thereby block exclusive actions for customers.

#### Update the contact

To fill in the contact fields, just use Update Contact. In it, you select the contact field you want to update, and after that you can enter a fixed value or a flow result. If the contact field does not yet exist, just write the name you want for it. To learn more about the contact fields, visit the contact article

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_13.png)

Did you ask the age of your contact? You can save the value for later reference.

#### Send an email

Here you can send an email to someone. This email can be sent either to the contact running the flow or to anyone else. Keep in mind that email is not a conversation channel on the Weni Platform, meaning that if someone replies to the sent email, it will go to the inbox of the email configured in the organization. To learn more, visit the [project settings](https://help.vtex.com/docs/tutorials/general-project-settings) article.

To send the email, simply fill in the recipient, subject, and message body in the corresponding fields.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_14.png)

Want to send quick reminders to a contact without spending on SMS or calls? Send an email!

#### Save a result for this flow

We were able to simulate a flow result with this action card. Creating from scratch, without the need for input or going through a decision card. Therefore, just choose the name of the flow result, enter its value and, if you want, a category. In addition, we can update the value of some existing flow results. To understand a little more about flow results and their structures, visit the results section in the decision cards article

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_15.png)

Want to save the number of questions a contact has asked, but don't want to link it directly to a contact field? The best way is to create a flow variable.

#### Enter another flow

Here, we can start a new flow for the user. When the user enters a new flow, the flow he was in before (which can now be called the parent flow), is on hold until completion. In the meantime, the user will execute the new flow (which can now be called a child flow) and at the end of the execution, it will return to the point where it left off in the parent flow. To work, just choose the name of the flow you want among existing options.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_16.png)

When the execution of the child flow is finished, the enter a flow letter gives us the opportunity for two routes, thus being the only action card that uses this concept (to understand the concept of route, visit the decision cards article). These two possible routes are based on how the child flow ended. If it was completed without any problems, the flow will take the Complete route and if the child flow has expired, the parent flow will use the Expired route.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_17.png)

Enter a flow is a great way to organize your projects.

#### Start somebody else in a flow

In the same way that we can send a message to a contact / group that is not the current one, we can also start a new flow.
To decide who will be initiated by the flow, we can choose between three options:
  1. Manually define the contacts / groups that will be started in the new flow;
  2. Create a logical rule (usually based on contact fields) to filter the contacts that should enter the flow;
  3. Create a new contact, and that contact will be initiated in the flow;

After deciding on these options, simply select a stream to start. Unlike Enter another flow, this card does not create route options, after all, it does not wait for the end of the child flows to continue executing the parent flow.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_18.png)

This card can be used to create reactive campaigns, such as notifying a group of the arrival of a new member.

#### Send a WhatsApp Message

The native card for sending interactive messages on WhatsApp allows users to conveniently utilize the available channel features, integrating these options into their projects in a simple way.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_19.png)

It offers three types of interactive messages:
  * **Quick Replies** : Allows you to create up to 3 predefined responses that recipients can quickly select.
  * **Option List** : Provides an interactive menu with up to 10 items, each with a title and description.
  * **Request Location** : Enables you to request the final customer's location, making customer service easier.

In addition to these interactions, you can include headers (with media or text) and footers in the messages. The availability of these elements depends on the type of interactive message chosen.

Using this card does not replace the use of templates (pre-approved messages by Meta) for conversations started by a business.

#### **Open a ticket with a human agent**

This card is used to open support tickets for human assistance. To direct the inquiries to the Chats module, you need to select the department (1) and the queue (2). Learn more about [Setting Up Human Attendance](https://help.vtex.com/docs/tutorials/weni-chats-setting-up-human-attendance).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_20.png)

#### **Call** **a webhook**

This card allows you to make API requests, storing the response in a variable that can be used within the flow. This makes it easier to connect with other external systems. Learn [how to make calls to external services](https://help.vtex.com/docs/tutorials/call-webhook-making-requests-to-external-services).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/action-cards_21.png)
