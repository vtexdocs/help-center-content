---
title: "Using expressions to capture the user's location"
id: 1wxT0lnOUwxD5I8jtP3G9H
status: PUBLISHED
createdAt: 2025-09-17T14:05:39.961Z
updatedAt: 2026-11-12T12:20:00.000Z
publishedAt: 2025-10-03T14:20:03.721Z
firstPublishedAt: 2025-10-03T14:20:03.721Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-expressions-to-capture-the-users-location
legacySlug: using-expressions-to-capture-the-users-location
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

This article shows how to capture the user's location in the conversation with expressions and variables, so you can use this data later in the flow.

## Identify the channel

How to capture the location changes depending on the channel you are using on the platform.

### Web channel

To capture a user's location via the web channel, create a "Send Message" action card with a "Quick Reply" with the prefix "[Loc]". As soon as the user clicks that button, we can capture the location through the browser. After that, save the result in the "Wait for response" decision card.

The message received by the web channel will always begin with: "My Location is:", followed by the user's latitude and longitude in the format "[latitude, longitude]". To remove these prefixes, use the expression @(replace) and then separate the latitude and longitude values into different variables, using the @(split) expression to separate using the comma (",") that separates them as a parameter.

### Telegram channel

To send the location via Telegram, the user needs to click the attachment button, select `Location` and then "Send my current location".

With this, create a "Wait for response" decision card and save the value. Telegram sends the location in the format "latitude, longitude", without needing to use @(replace) to remove text. Separate it using split, as in the web channel.

### WhatsApp channel

To send the location via WhatsApp, the user needs to click the attachment button or the add button, select `Location` and then "Fixed location".

Unlike other channels, the location via WhatsApp does not come as text, but as an attachment. So, we need to access it using the variable: `@input.attachments.0`

This variable stores the location in the format "geo: latitude, longitude". So, we need to use the expression @(replace) to remove the "geo:" and then use @(split) to separate latitude and longitude like the other channels.

This way, we are able to create a flow with support to capture the user's location across three different channels, using the expressions and variables available on the platform.",
