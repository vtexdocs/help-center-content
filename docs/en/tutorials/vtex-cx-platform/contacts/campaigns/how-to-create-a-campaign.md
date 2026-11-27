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

A campaign lets you schedule messages or flows for a group of contacts. Each action runs at a time calculated from a date stored in the contact's profile. For example, you can send an appointment reminder before the appointment date or start a follow-up flow after a purchase date.

For more information about how campaigns work and when to use them, see [Campaigns](https://help.vtex.com/en/docs/tutorials/campaign-introduction).

## Before you begin

Before creating a campaign, make sure you have:

- **A contact group:** Campaign events apply only to contacts in the selected group. To target another group, create a separate campaign. To create a group, see [Static groups](https://help.vtex.com/en/docs/tutorials/static-groups) or [Dynamic groups](https://help.vtex.com/en/docs/tutorials/dynamic-groups).
- **A date and time field:** The event schedule uses a date stored in each contact's profile. You can use **Created On**, which stores the date when the contact was created. To use a different date, create a contact field with the **Date & Time** data type. See [Contact fields](https://help.vtex.com/en/docs/tutorials/contact-fields).
- **A flow:** This is required only if the event starts a flow instead of sending a message.

## Creating the campaign

To create a campaign, follow these steps:

1. In the **Contacts** side menu, go to **Campaigns**.
2. Click `Create campaign`.
3. In **Name**, enter a name for the campaign.
4. In **Group**, select the contact group.
5. Click `Create`.

The campaign page opens and displays the campaign name and selected group. A campaign doesn't run any actions until you add an event.

## Adding an event

An event is a message or flow scheduled in relation to a date in the contact's profile. A campaign can have multiple events, each with its own action and schedule. For example, one event can send a reminder 1 day before a stored date, while another starts a flow 2 days after that date.

To add an event, follow these steps:

1. On the campaign page, click `Add event`.

    The dialog opens with **Send a message** selected. The default schedule is 15 days after **Created On**, delivered **during the same hour**.

2. Select **Send a message** or **Start a flow**.
    - If you select **Send a message**, enter the message. You can personalize it with a contact variable, such as `@contact.name`.
    - If you select **Start a flow**, select the flow.
3. In **If the contact is already active in a flow**, select how the campaign handles that contact. For message events, **Stop it and send the message** stops the contact's current flow before sending the message.
4. Set when the event runs, relative to a contact field:
    - Enter the amount of time and select the unit: minutes, hours, days, or weeks.
    - Select whether the event runs before or after the date stored in the contact field.
    - Select the contact field that contains the reference date. **Created On** is the date when the contact was created.
5. In **Delivered**, select the delivery time. The **during the same hour** option runs the event during the same hour as the date and time stored in the contact field.
6. Click `Add event`.

The event is added to the campaign and runs for each contact in the group according to the schedule you set. To schedule another action, click `Add event` and repeat the procedure.

## Learn more

To change an event after adding it, see:

- [Editing events](https://help.vtex.com/en/docs/tutorials/editing-events)
