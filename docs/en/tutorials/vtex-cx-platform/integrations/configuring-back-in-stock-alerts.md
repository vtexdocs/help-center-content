---
title: 'Configuring back in stock alerts'
createdAt: 2026-11-11T12:00:00.000Z
updatedAt: 2026-11-11T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-back-in-stock-alerts
locale: en
seeAlso:
  - /en/docs/tutorials/shopping-assistant-suggested-questions
  - /en/docs/tutorials/setting-up-the-notify-me-option
---

**Back in stock alerts** allow shoppers to request a WhatsApp notification when an out-of-stock item becomes available again. Shoppers subscribe through the Shopping Assistant by entering their name and WhatsApp number, without needing a store account. When the SKU is active and available again, the **Back in stock** template is sent to the number provided.

> ℹ️ Out-of-stock product pages also let shoppers explore similar products with the **Shopping Assistant**. This can start a conversation with the agent and help the shopper find another product that meets their needs, instead of leaving the page without finding anything.

> ⚠️ The WhatsApp alert is separate from the [Notify me](https://help.vtex.com/en/docs/tutorials/setting-up-the-notify-me-option) email option. Both options can appear on the same product page, but an email subscription doesn't subscribe the shopper to WhatsApp alerts.

## Before you begin

Before configuring the alert, make sure that:

- WhatsApp is connected to the VTEX CX app.
- The **WhatsApp Back in Stock** automation is connected.
- Meta has approved the **Back in stock** WhatsApp template. Wait until the template status changes to **Approved** before enabling the alert, because messages can't be sent while the template is pending or rejected.

## Showing the alert on product pages

To display the subscription dialog on out-of-stock product pages, follow these steps:

1. In the VTEX Admin, go to **Storefront > VTEX CX Platform > CX Dashboard**.
2. Go to **Settings > Shopping Assistant**.
3. On **Back in stock alert**, enable **Show on out-of-stock product pages**.

The **Back in stock alert** status changes to **Active**, and shoppers can subscribe on eligible product pages.

To stop displaying the dialog, disable **Show on out-of-stock product pages**.

> ⚠️ Disconnecting the **WhatsApp Back in Stock** automation also deactivates the alert.

## Editing the WhatsApp template

The **Back in stock** template defines the WhatsApp message shoppers receive when a product becomes available again. You can customize its content, but you can't change the template name.

To edit the template, follow these steps:

1. In the VTEX CX app, go to **Settings > WhatsApp > WhatsApp Back in Stock**.
2. Click `View details`.
3. On the **Back in stock** template, click `Edit template`.
4. Update any of the following template elements:
    - Message language.
    - Message text.
    - Header media.
    - Footer.
    - Button labels. The template includes one button that opens the product and another that stops promotional messages.
    - Product button URL. The URL contains an editable section followed by a fixed `{{1}}` variable.
5. Review the variables listed in the editor. Each variable includes its meaning and fallback text.
6. Keep the start condition filled in. This condition determines when the message is sent.
7. Click `Save`.

> ⚠️ Keep the message text within 1,024 characters, the footer within 60 characters, and each button label within 25 characters. The button URL can't contain spaces. The editor doesn't validate these limits before saving, but Meta rejects templates that exceed them.

The message text is required, and `Save` remains unavailable when this field is empty. You can't add more buttons because `Add element` isn't available for this template.

After you save the changes, the template is sent to Meta for review, which can take up to 24 hours. During this period, the template has a pending status. Once the review is complete, the status changes to approved or rejected. If Meta rejects the template, the template list shows the rejected status without the reason.

## Alert behavior

On an out-of-stock product page, the Shopping Assistant displays the **Get notified when it's back in stock** dialog. The dialog explains that the shopper will receive a WhatsApp message when the product becomes available. Subscribing doesn't start the checkout process.

After entering their **Name** and **WhatsApp number**, the shopper can:

- Click `Notify me` to subscribe to the alert.
- Click `Not now` to close the dialog without subscribing.

> ⚠️ Shoppers receive an alert only after submitting the subscription form. Having a store account or a WhatsApp number saved in their profile doesn't subscribe them automatically.

Each phone number receives one alert for each product subscription. Submitting the form again for the same product doesn't create another alert, while subscribing to a different product creates a separate alert for that product.