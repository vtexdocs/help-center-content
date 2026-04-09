---
title: "Using expressions to capture the user's location"
id: 1wxT0lnOUwxD5I8jtP3G9H
status: PUBLISHED
createdAt: 2025-09-17T14:05:39.961Z
updatedAt: 2025-10-03T14:20:03.721Z
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

In this article we will see a practical example of how using expressions and variables can be useful for your chatbot. Here, we will focus on a very simple example, but also can be very useful for everyone: **Being able to capture the user 's location by the conversation, and can use this data later.**

### Step one: Identify the channel

How to capture the location changes depending on the channel you are using on the platform.

#### Web channel:

To capture a user's location via the web channel, simply create a ""Send Message"" action letter with a ""Quick Reply"" with the prefix ""[Loc]"", so the user can reach that button, we can capture the location via browser. After that, simply save the result in the ""Wait for response"" decision letter.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/using-expressions-to-capture-the-users-location_1.png)

The message received by the web channel will always begin with: ""My Location is:"", followed by the user's latitude and longitude in the format ""[latitude, longitude]"". To remove these prefixes, simply use the expression @(replace) and then separate the latitude and longitude values into different variables, using the @(split) expression to separate using the comma ("","") that separate them as a parameter.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/using-expressions-to-capture-the-users-location_2.png)

#### Telegram channel:

To send the location via telegram, the user needs to click the button 📎, select ""Location"" and then ""Send my current location"".

With this, simply create a ""Wait for response"" decision letter and save the value. The telegram sends the location in the format ""latitude, longitude"", not needing to do the process of using @(replace) to remove texts, only separate using split as in the web channel.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/using-expressions-to-capture-the-users-location_3.png)

#### Whatsapp Channel:

To send the location via WhatsApp, the user needs to click the 📎 button or ➕ the, select ""Location"" and then ""Fixed location"".

Unlike other channels, the location via WhatsApp does not come as text, but as an attachment, so we need to access it using the variable: @input.attachments.0

This variable is the location in the format ""geo: latitude, longitude"", so we need to use the expression @(replace) to remove the ""geo:"" and then use @(split) to separate latitude and longitude like the other channels.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/using-expressions-to-capture-the-users-location_4.png)

This way, we are able to create a flow with support to capture the user's location across three different channels, using the expressions and variables available on the platform.",

