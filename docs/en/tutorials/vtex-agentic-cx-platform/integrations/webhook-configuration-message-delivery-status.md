---
title: 'Webhook Configuration: Message Delivery Status'
id: 4Vz0SFzmpK8tTsA2CUbWAp
status: PUBLISHED
createdAt: 2025-09-15T15:38:30.364Z
updatedAt: 2025-10-03T14:20:32.239Z
publishedAt: 2025-10-03T14:20:32.239Z
firstPublishedAt: 2025-10-03T14:20:32.239Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: webhook-configuration-message-delivery-status
legacySlug: webhook-configuration-message-delivery-status
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

To receive information on the delivery and viewing **status of messages sent by your Chatbot**, you can configure the webhook service directly on the Weni Platform.

This webhook service will function as follows: **Whenever a message is sent, received, or read, the webhook will trigger a notification to an external service (URL) that can process this data.**

Data processing is not done within the Weni platform but instead in your external service, following the created processing setup.#### What is an external service, and which one should I use?

There are various external services, and they act as a cloud infrastructure that stores code to perform specific actions. You can choose which service to use: [Back4app](https://www.back4app.com/#), [Pipedream](https://pipedream.com/), or others.

This means that on these external platforms, you can **set up a URL to receive data from Weni's Webhook** and create code to process this data.

#### How to configure

To configure your webhook, go to **Applications \> My Apps \> WhatsApp Channel you want to configure \> Webhook \> Configure Method, URL, and Request Header:**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/webhook-configuration-message-delivery-status_1.png)

After setting up the webhook service, you can create solutions via code or external applications as needed.

#### Data Return

The data that the webhooks will send to your external service (URL) is in JSON format:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/webhook-configuration-message-delivery-status_2.png)

The ""status"" parameter will inform the message status; if read, it will appear as ""read.""

**Questions?** Contact us on the [Weni community](https://comunidade.weni.ai/).
