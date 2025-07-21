---
title: "No feedback to the user when something goes wrong"
id: 6mjLK4MVOqWeiAXtwcl8rS
status: PUBLISHED
createdAt: 2022-05-12T14:51:16.913Z
updatedAt: 2024-02-16T20:29:29.074Z
publishedAt: 2024-02-16T20:29:29.074Z
firstPublishedAt: 2022-05-12T14:51:17.267Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: no-feedback-to-the-user-when-something-goes-wrong
locale: en
kiStatus: No Fix
internalReference: 339072
---

## Summary


When user is in checkout inserting their data to end his/her purchase and the internet goes down and back again no feedback is returned to the user.



## Simulation


As simulation I am sharing a video in the attachments. At least a message like: "Something went wrong" or "Please, reload your page" should be sended when something like this happens.

As another example, when the user is inserting the shipping data to choose if it goes as delivery or PUP and the internet goes down, you can see the error: _`Error: Could not load the Google Maps API`_


## Workaround


When receiving a message from Google's API like the example above in Simulation, we could catch this message and just pass it on to the user.

