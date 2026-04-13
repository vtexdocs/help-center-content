---
title: "Webhook configuration: Message delivery status"
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

To receive information on the delivery and viewing **status of messages sent by your Chatbot**, you can configure the webhook service directly on the VTEX CX Platform.

This webhook service will function as follows: **Whenever a message is sent, received, or read, the webhook will trigger a notification to an external service (URL) that can process this data.**

Data processing is not done within the VTEX CX Platform but instead in your external service, following the created processing setup.

#### What is an external service, and which one should I use?

There are various external services, and they act as a cloud infrastructure that stores code to perform specific actions. You can choose which service to use: [Back4app](https://www.back4app.com/#), [Pipedream](https://pipedream.com/), or others.

This means that on these external platforms, you can **set up a URL to receive data from VTEX CX Platform's Webhook** and create code to process this data.

## How to configure

To configure your webhook, go to **Applications > My Apps > WhatsApp Channel you want to configure > Webhook > Configure Method, URL, and Request Header:**

After setting up the webhook service, you can create solutions via code or external applications as needed.

## Data return

The data that the webhooks will send to your external service (URL) is in JSON format:

The "status" parameter will inform the message status; if read, it will appear as "read."

**Questions?** Contact us on the [VTEX CX Platform community](https://comunidade.weni.ai/).
