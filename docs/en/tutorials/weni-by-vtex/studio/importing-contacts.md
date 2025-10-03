---
title: 'Importing Contacts'
id: 2iPoWuJtzfIvGrpUdIvvhR
status: PUBLISHED
createdAt: 2025-09-12T17:23:02.357Z
updatedAt: 2025-10-03T14:21:49.258Z
publishedAt: 2025-10-03T14:21:49.258Z
firstPublishedAt: 2025-10-03T14:21:49.258Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: importing-contacts
legacySlug: importing-contacts
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

When a person interacts through any of the channels connected to the Weni Platform, they automatically become a contact. However, in many cases, we already have information about future contacts who will interact through the channels, so how can we import these contacts into the platform?

It's a simple process. First, access the **Studio** and go to the **Contacts** tab, where you will find the **Import Contacts** button on the left-hand side.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/importing-contacts_1.PNG)

After that, you will be directed to the import page, where you can select an Excel spreadsheet in .XLS format and import the contacts listed in the spreadsheet into the platform. However, for this to work, the spreadsheet headers must be correctly named, meaning the column names should follow the required format. At the bottom of the page, we provide a template that you can use as a reference.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/importing-contacts_2.png)

The rules for naming columns are:

-    ***Name:*** contact name column

-  ***Language:*** column with the language the contact interacts with

-  ***URN: :*** column with the URN of the channel that the contact will communicate, remembering, that the contact is only valid if it has at least one URN.

-  ***Field: :*** column with custom fields for contacts.Then just click on ***Import*** and your contacts will be imported to the platform. All contacts appeared linked to a static group, which has the same name as the spreadsheet file, in case you don't want to keep the group, just delete it.

The **URN:whatsapp** is extremely important and necessary for sending template messages. If this column, along with the phone numbers listed under it, is not present when importing contacts, sending messages via WhatsApp to these contacts will be unavailable later.
