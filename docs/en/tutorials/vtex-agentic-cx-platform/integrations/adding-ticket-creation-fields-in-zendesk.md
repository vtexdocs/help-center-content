---
title: 'Adding ticket creation fields in Zendesk'
id: 7F2pd5FE5KWPQbgcGaWVSC
status: PUBLISHED
createdAt: 2025-09-15T14:25:44.625Z
updatedAt: 2025-10-03T14:20:32.927Z
publishedAt: 2025-10-03T14:20:32.927Z
firstPublishedAt: 2025-10-03T14:20:32.927Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-ticket-creation-fields-in-zendesk
legacySlug: adding-ticket-creation-fields-in-zendesk
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

When creating a ticket in Zendesk, we can send some extra information via the body about it. Now it is possible to add **priority, subject, description, custom fields, tags, and message.**

### Fields:

- **Priority:** There are four priority levels: Low, Normal, High, and Urgent. By default, all four values are available, but you can choose to display only Normal and High. To do this, edit the priority field and change the setting in Field Values. Priority is not a required field, so it is not always necessary to select a value.
- **Subject:** The subject field is mandatory and can contain up to 150 characters. If the ticket title does not appear in the ticket's subject, this field might not be visible to end users.

- **Description:** The description field is mandatory. This is the text of the support request. The description becomes the first comment in the ticket.

- **Custom Fields:** Custom ticket fields are typically used to gather more information about the support issue, product, or service. You can add custom fields to your tickets for agents and also include them in the ""Submit a Request"" form in the Help Center if you want end users to see the custom field. Custom ticket fields can be mandatory or optional. To use your custom fields, you must create them in Zendesk. Follow the steps below to create your fields:

1. First, go to your Admin Center, which you will find by clicking on the top\-right icon.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/adding-ticket-creation-fields-in-zendesk_1.png)

2. Now, from the left menu, click on Objects and Rules > Fields.
3. In the blue button at the top\-right corner, click on Add Field.
4. Select the type of field you want to create; there are several options, so make sure to send the value correctly according to your choice.
5. After that, add the field's Display Name, Description (optional), and if the field is required, check the box for ""Required to Solve a Ticket."" Choose the appropriate permission, usually the second option, and click Save at the bottom\-right corner.
6. You're all set, and now you have a new custom field. You will just need the field's ID, which is available next to the display name of your created field.
- **Tags:** Tags are used to add additional information to tickets, which can be utilized in the ticket workflow. They are sent as a list of words, where each word is a tag.

- **Message:** The initial message of the ticket, if your ticket does not have a description.

Below is an example JSON of how you should send it in the body of the Open Ticket card in the Weni platform:

```
{""message"" : ""Cookies"", ""priority"": ""high"", ""subject"": ""Where are my cookies?"", ""description"": ""I want to know where is my cookie."", ""custom_fields"": [{""id"":""11457109235981"",""value"":""field01""}], ""tags"": [""tag01"",""tag02""]}
```
