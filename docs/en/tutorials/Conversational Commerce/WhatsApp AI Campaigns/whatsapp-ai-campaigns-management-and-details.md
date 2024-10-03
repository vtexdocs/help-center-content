---
title: 'WhatsApp AI Campaigns management and details'
id: q9JqDErMqGV4zvsYqkD4s
status: PUBLISHED
createdAt: 2024-06-25T11:58:05.514Z
updatedAt: 2024-06-25T16:28:52.542Z
publishedAt: 2024-06-25T16:28:52.542Z
firstPublishedAt: 2024-06-25T16:11:51.825Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: whatsapp-ai-campaigns-management-and-details
locale: en
legacySlug: whatsapp-ai-campaigns-management-and-details
subcategoryId: 4SC2gPmUH3cHD5HjGfQ5Vg
---

This page provides an overview of WhatsApp AI Campaigns management and details on the VTEX platform. It covers everything from configuration to monitoring performance metrics, helping you optimize the effectiveness of your campaigns and boost conversions.

This article outlines how to manage and monitor your campaigns by:

- [Selecting dates](#selecting-dates)
- [Sending reports](#sending-reports)
- [Editing campaigns](#editing-campaigns)
- [Pausing campaigns](#pausing-campaigns)
- [Viewing details of the Analytics dashboard](#viewing-details-of-the-analytics-dashboard)

## WhatsApp AI Campaigns management

The WhatsApp AI Campaigns page allows you to view data on Analytics and Active Campaigns.

### Selecting dates

Go through the specific days to see the messages triggered during each period.

1. In the VTEX Admin, go to Promotions > WhatsApp Campaigns > Overview.
2. Click on the date selector.
3. Select the date you want to view the analytics data.

### Sending reports

1. In the VTEX Admin, go to Promotions > WhatsApp Campaigns > Overview.
2. Click `Send Report` in the top right corner of the section.
3. Enter the email address you want to receive the report.
4. Click `Send Report`.

The report sent by email will be a `csv` file with the following information:

- **userId:** unique identifier of the user who made the purchase.
- **deliveredReminderAt:** date and time when a reminder about the purchase was sent to the user.
- **readReminderAt:** date and time when the user viewed the sent reminder.
- **orderCreatedAt:** date and time when the order was created in the system.
- **hasClickedOnReminder:** indicates whether the user clicked on the sent reminder or not.
- **checkoutItems:** list of items that the user added to the cart during the checkout process.
- **orderItems:** list of items that were actually purchased by the user.
- **orderTotal:** total value of the order, summing the price of all purchased items.
- **currency:** currency used for the payment of the order.
- **orderFormId:** unique identifier of the order form used during the checkout.

### Editing campaigns

Once the campaign is configured, you can edit the language or the type of message you want to customize.

1. In the VTEX Admin, go to Promotions > WhatsApp Campaigns > Overview.
2. Click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> icon.
3. Click `Edit`.
4. Edit the information you want.
5. Click `Confirm`.

### Pausing campaigns

To pause sending messages from a campaign, follow the steps below:

1. In the VTEX Admin, go to Promotions > WhatsApp Campaigns > Overview.
2. Click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> icon.
3. Click `Pause`.
4. Click `Confirm`.

## Viewing details of the Analytics dashboard

You can find information about your active campaigns in the VTEX Admin.

![Visão geral-EN](https://images.ctfassets.net/alneenqid6w5/3QiT4K7FuFoTyhmlWYWKFl/0ec14467b481aeba99f2d0f3fc461ff4/Vis_o_geral-EN.png)

Below are the details of the available metrics:

- **Messages delivered:** Total number of messages that successfully reached the intended recipients without any delivery problems.
- **Messages read:** Total number of messages opened by recipients, indicating audience engagement.
- **Unique clicks:** Number of users who clicked the message buttons.
- **Total clicks:** Total number of interactions using the buttons embedded in the messages, providing a quantitative measure of engagement.
- **Total Conversions:** the total number of conversions that occur after the successful delivery of a message to a recipient. The total conversions are the sum of the two metrics below:
      - **Assisted Conversions:** conversions that occur within 3 days after receiving the message.
      - **Click-Through Conversions (CTC):** conversions that occur when users click on the message link and make a purchase within 15 days.
- **Conversion total value:** Total order amount from conversions.
- **Click-through conversion total value:** Total order amount from click-through conversions.

