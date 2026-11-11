---
title: 'Configuring Pix payment recovery'
createdAt: 2026-11-11T12:00:00.000Z
updatedAt: 2026-11-11T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configuring-pix-payment-recovery
locale: en
---

Pix payment recovery helps stores in Brazil recover orders that are waiting for a Pix payment. While the Pix code is still valid, the automation sends the shopper a WhatsApp reminder with a button to copy the code and complete the payment. The message can also include a payment link for choosing another method, such as a credit card or boleto.

> ❗ Each reminder is a WhatsApp marketing message, and the Meta fee is charged to the store.

## Before you begin

Connect a WhatsApp number to the VTEX CX app in the VTEX Admin. For more information, see [Introduction to VTEX CX Platform](https://help.vtex.com/en/docs/tutorials/introduction-to-cx#whatsapp-store).

## Configuring the reminder

To access the payment recovery settings, follow these steps:

1. In the VTEX Admin, go to **Storefront**, or type **Storefront** in the search bar at the top of the page.
2. Under **VTEX CX Platform**, click **Automations**.
3. Click **PIX Payment Recovery**.

In the automation settings, you can edit the WhatsApp template and set the rules for the reminder:

- Edit the text of the WhatsApp template. The template includes a button to copy the Pix code, and it can include a button that opens a payment link.
- Set how long the automation waits before sending the reminder. The default wait is 5 minutes, and the shortest wait is 1 minute.
- Set a minimum order value. Orders below that value don't receive a reminder.
- In **Sales channels**, enter the sales channel IDs that can trigger the reminder, separated by commas, such as `1,2,3`. The reminder is sent only for Pix orders from the sales channels included in this setting.
- Set the share of shoppers who receive the reminder.

## Reminder rules

The automation sends the reminder when the Pix code is still valid and the order matches the wait time, the minimum order value, the sales channels, and the shopper share you set.

The automation also applies these limits:

- It sends one reminder per order.
- When an order is split, only the main order can receive a reminder.
- It doesn't send a reminder when the order has no phone number or no Pix copy-and-paste code.

## Payment recovery results

On the Dashboard, the **Payment recovery** screen shows the results of these reminders for the selected period. Payments made from both buttons count toward the results.

| Metric | Description |
| --- | --- |
| **Total sends** | Number of reminders sent in the selected period. |
| **Recovered revenue** | Total value of payments received after a reminder. |
| **Conversion rate** | Percentage of reminders that resulted in a payment. The screen also shows the number of converted sales. |
| **Average order value** | Average value of the converted payments. |

Below the summary, **Copy Pix code** and **Open payment link** show the converted payments, conversion rate, and recovered revenue attributed to each button.

## Learn more

- [Introduction to VTEX CX Platform](https://help.vtex.com/en/docs/tutorials/introduction-to-cx)
