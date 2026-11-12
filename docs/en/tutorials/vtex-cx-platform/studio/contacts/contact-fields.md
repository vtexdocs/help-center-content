---
title: "Contact fields"
id: 5q7gMYEvFCLdk7tYsHXB0x
status: PUBLISHED
createdAt: 2025-09-12T17:20:52.053Z
updatedAt: 2026-11-12T15:00:00.000Z
publishedAt: 2025-10-03T14:21:49.309Z
firstPublishedAt: 2025-10-03T14:21:49.309Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: contact-fields
legacySlug: contact-fields
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
seeAlso:
  - /en/docs/tutorials/introduction-to-contacts
  - /en/docs/tutorials/action-cards
  - /en/docs/tutorials/variables-glossary
---

Contact fields store information you define about a person, such as their age. The platform keeps each value on the contact, together with data it already stores, such as the contact's URN and the date the contact was created. A URN is the identifier of the contact on a channel, such as a WhatsApp number.

The value remains available in any flow, including a flow that starts after the one that saved it. You don't create fields for data the platform already stores, such as the contact's name. To read that data, use `@contact`, for example `@contact.name`. For the full list, see [Variables glossary](https://help.vtex.com/en/docs/tutorials/variables-glossary).

## Creating a contact field

Create the field on **Manage Fields** when you want to choose the type of value it stores before a flow writes to it. You can also create a field from a flow with the **Update the contact** card, by entering a name that doesn't exist yet. For more information, see [Action cards](https://help.vtex.com/en/docs/tutorials/action-cards).

To create a contact field, follow these steps:

1. Go to the organization and project you want to modify in the [VTEX CX Platform](https://dash.weni.ai/orgs).
2. In the sidebar menu, click **Contacts**.
3. Click **Manage Fields**.

    The page lists the fields in the project, the variable name of each field, the type of value it accepts, and how many times the field has been used.

4. Click `Create Field`.
5. In **Name**, enter the label of the field.
6. In **Data Type**, select the type of value the field stores:
    - **Text**
    - **Number**
    - **Date & Time**
    - **State**
    - **District**
    - **Division**
7. (Optional) Select **Highlight** to show the field in the contact page preview.

## Editing a contact field

To change a field, on the **Manage Fields** page, click the field. The edit dialog opens.

## Saving and reading a field value

To save a value while a contact is in a flow, use the **Update the contact** card. Select the field, then enter a fixed value or a flow result.

To read the value in a message or an expression, use `@fields.field_name` or `@contact.fields.field_name`. Replace `field_name` with the variable name shown on **Manage Fields**. Both expressions return the same field.

For example, `@fields.age` returns the value of the field whose variable name is `age`.

For more information about expressions, see [Expressions and variables introduction](https://help.vtex.com/en/docs/tutorials/expressions-and-variables-introduction).

## Other ways to use a contact field

After a field has a value, you can use it in these tasks:

- Route a flow with the **Split by contact field** card. For more information, see [Decision cards](https://help.vtex.com/en/docs/tutorials/decision-cards).
- Decide which contacts belong to a group. For more information, see [Dynamic groups](https://help.vtex.com/en/docs/tutorials/dynamic-groups).
- Schedule a campaign event a number of minutes, hours, days, or weeks before or after the field value. For more information, see [Creating a campaign](https://help.vtex.com/en/docs/tutorials/how-to-create-a-campaign).
- Edit the value during a Live Desk conversation, when the department allows it. For more information, see [Live Desk overview](https://help.vtex.com/en/docs/tutorials/live-desk-overview#editing-custom-contact-fields).
- Import values from a spreadsheet. For more information, see [Importing contacts](https://help.vtex.com/en/docs/tutorials/importing-contacts).

> ⚠️ To set a contact field through the contacts API, create the field first. For more information, see [Creating contact from an external webhook](https://help.vtex.com/en/docs/tutorials/creating-contact-from-an-external-webhook).
