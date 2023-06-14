---
title: How the Message Center works
id: tutorials_84
status: PUBLISHED
createdAt: 2017-04-27T22:20:04.874Z
updatedAt: 2021-06-01T18:46:54.349Z
publishedAt: 2021-06-01T18:46:54.349Z
firstPublishedAt: 2017-04-27T23:00:42.423Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: understanding-the-message-center
legacySlug: understanding-the-message-center
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

**Message Center** is the module responsible for configuring and sending transactional e-mails on VTEX. It enables you to edit the content (template) of the emails and the sender's information.

## Templates

The templates are the messages themselves. The messages are categorized in accordance with the module responsible and are intended for specific content. Within each of them we have the title/subject of the e-mail, the HTML code, the sender who is going to send it and the addressee, with the possibility of specifying “CC” and “BCC”.

Understand the information that each template card contains:

- Template name for internal identification (this is not the subject of the e-mail sent).
- Application/module to which it pertains (in green).
- Indicates whether the message is a standard/default one, provided by VTEX, or whether it has been amended by the store.
- A brief description of the template’s function.
- Sender with whom the template is associated.

To facilitate browsing, in addition to the free text search field, the interface provided filters per application (modules) and type (standard/default and/or personalized/amended message).

![busca-templates-central-mensagens en](//images.ctfassets.net/alneenqid6w5/6unXvbEcUgaQAucsKCcm8W/9aebebd28a45aea02949470c429fe4db/busca-templates-central-mensagens_en.png)

After understanding the basic about the templates, you can see how to edit them. This step is not mandatory, since VTEX provides a basic and responsive layout for all messages, with information needed to communicate properly with your customer, but it is natural that the stores adapt the brand communication standard they already use.

## Senders

Sender is who sends the message, but in this case, it also shows the registration of the e-mail name to be displayed to the customer and the configurations of the server that sent it (SMTP).

- Sender’s name, for internal identification.
- SMTP server type, which can be VTEX or the store’s own server.
- Indicates the sender defined as standard/default for the store.
- e-mail address used for sending it.
- Button for testing the sending of messages.
- Icon indicating whether the sender was approved or not in the sending test (not displayed if no test has been recently carried out).

It is important for you to customize your sender, so that the customer receives the messages with your company’s e-mail name, otherwise, the e-mails received will bear the name “noreply@vtexcommerce.com.br”. To that end, see how to change your store’s SMTP server.
