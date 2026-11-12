---
title: "Creating a campaign"
id: 552TQfDeoedLJoKg6RFBB3
status: PUBLISHED
createdAt: 2025-09-12T18:03:34.475Z
updatedAt: 2026-11-12T15:10:00.000Z
publishedAt: 2025-10-03T14:20:33.938Z
firstPublishedAt: 2025-10-03T14:20:33.938Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-a-campaign
legacySlug: how-to-create-a-campaign
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

A campaign sends a message or starts a flow for the contacts in one group. Each contact receives it at a time based on a date stored on that contact, such as a reminder before an appointment or a follow-up after a purchase. Contacts in the same campaign don't all receive it at the same moment.

For when to use a campaign, see [Campaigns](https://help.vtex.com/en/docs/tutorials/campaign-introduction).

## Before you begin

You need the following before you create a campaign:

- A contact group. Only contacts in the selected group are included in the campaign events. To reach another group, create another campaign. To create a group, see [Static groups](https://help.vtex.com/en/docs/tutorials/static-groups) or [Dynamic groups](https://help.vtex.com/en/docs/tutorials/dynamic-groups).
- A date to schedule the event against. The dialog includes **Created On**, the date the contact was created. To use another date, create a contact field with the **Date & Time** data type. See [Contact fields](https://help.vtex.com/en/docs/tutorials/contact-fields).
- A flow, if the event will start a flow instead of sending a message.

## Creating the campaign

To create a campaign, follow these steps:

1. In the side menu, go to **Campaigns**. **Campaigns** is in the same menu as **Messages**, **Contacts**, and **Triggers**.
2. Click `Create campaign`.
3. In **Name**, enter a name for the campaign.
4. In **Group**, select the contact group. The field shows `Select group`. Only contacts in this group are included in the campaign events.
5. Click `Create`.

The campaign page opens. It shows the campaign name and the group. When the campaign has no events yet, the page shows `No events in this campaign yet`.

## Adding an event

An event is one scheduled action in the campaign: a message or a flow, sent at a time relative to a date on the contact. A campaign can contain more than one event, and each event has its own action and schedule. For example, one event can send a reminder one day before a date stored on the contact, and another can start a flow two days after that date.

To add an event, follow these steps:

1. On the campaign page, click `Add event`.

    The dialog opens with **Send a message** selected and a schedule of 15 days after **Created On**, delivered **during the same hour**. Change these values to match the campaign.

2. Select **Send a message** or **Start a flow**.
    - For **Send a message**, enter the message. You can personalize it with a contact variable, such as `@contact.name`.
    - For **Start a flow**, select the flow.
3. In **If the contact is already active in a flow**, select what happens when the contact is already in a flow. When the event sends a message, **Stop it and send the message** stops the current flow and sends the message.
4. Set when the event runs, relative to a contact field:
    - Enter the number of minutes, hours, days, or weeks, and select the unit. **Days** is one of the units.
    - Select whether the event runs before or after the contact field value. **After** schedules the event after that value.
    - Select the contact field. **Created On** is the date the contact was created.
5. In **Delivered**, select when the event is sent. **during the same hour** sends the event at the same hour as the contact field.
6. Click `Add event`.

The event is added to the campaign and runs for each contact in the group at the time you set. To add another event, click `Add event` again.

To change an event later, see [Editing events](https://help.vtex.com/en/docs/tutorials/editing-events).
