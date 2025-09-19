---
title: 'How Message Center works'
id: 5uvq01BDu6nnDEJpseR1aH
status: CHANGED
createdAt: 2020-01-10T12:36:32.085Z
updatedAt: 2020-11-27T19:40:22.331Z
publishedAt: 2020-02-13T14:58:16.503Z
firstPublishedAt: 2020-01-13T14:38:21.495Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: how-message-center-works
locale: en
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: transactional-emails
order: 1
---

Message Center is the module responsible for configuring and sending transactional emails. These are emails sent automatically by the store to the customer whenever important events from the customer´s flow in the store are completed, such as store registration, payment confirmation and product shipment.

This module is divided into two sections:
- __Templates__: Here you can edit the content of emails.
- __Senders__: Here you can change the information regarding the senders of these emails.


### Templates

As mentioned before, templates are the content of transactional emails.

They are categorized according to the VTEX platform module to which they relate.

For example, if customers cancel their order, the system will send a message to that recipient stating the purchase status. Since this transaction is related to the Payments module, this template will be grouped together with the other Payments module templates.

Each template contains the following settings which need to be defined by the store:
- Email's title.
- Option to either activate email sending or not.
- Option to use a default sender.
- HTML code.
- Sender.
- Recipient, with the possibility to specify Carbon Copy (CC) and Blind Carbon Copy (BCC).
- Email preview.

Every VTEX store comes with a series of preconfigured templates, in which you only need to customize content and layout. It is also possible to create new templates.

When you go to the Message Center and click on __Templates__, you will find a list of all your store's templates. Each card represents a different template.

The information contained in these cards is as follows:

- Template name for internal identification. This *is not* the subject of the email.
- Application or module to which the template belongs, flagged in green. 
- Label indicating whether the message is __default__ (provided by VTEX) or if it has been __customized__ by the store.
- Description of template functionality for internal use.
- Sender with which the template is associated.

To search for templates, you can filter by application (module) and status (default or customized).


### Senders

Here the user can check and edit the information - name, email and outgoing server (SMTP) data - from the senders of the transactional emails that will be sent by the system.

The information contained in the sender's cards is as follows: 

- Sender's name, for internal identification.
- SMTP server type, which can be from VTEX or from the store itself.
- Label indicating which is the store's __default__ sender.
- Email address used to send.
- Button to perform a message sending test.
- Icon indicating whether or not the sender passed the submit test (not displayed if no recent test was performed). Shows a green check mark if it has passed and a red "x" if it has not passed.

Remember that it is essential to customize the sender. This will allow your customers to receive messages with your company name and email address. For more on this, read our article on [editing VTEX's mail server](/en/tutorial/customizing-the-vtex-smtp--tutorials_2733).

Until you configure this, your store's emails will be sent with the default sender “noreply@vtexcommerce.com.br”.
