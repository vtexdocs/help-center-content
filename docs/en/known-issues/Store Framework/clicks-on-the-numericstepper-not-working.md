---
title: "Clicks on the NumericStepper not working"
id: 7xGnJNyjWERcJ48ollIqh1
status: PUBLISHED
createdAt: 2022-07-04T16:45:10.692Z
updatedAt: 2022-11-25T22:13:19.050Z
publishedAt: 2022-11-25T22:13:19.050Z
firstPublishedAt: 2022-07-04T16:45:11.166Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: clicks-on-the-numericstepper-not-working
locale: en
kiStatus: Backlog
internalReference: 537245
---

## Summary


The clicks of the Numeric Stepper are not working as expected - you can still edit the textbox but the buttons don't increase or decrease the number of the textbox. The network calls seem to be sent in the same way. The client reported this issue when using Windows 11 with Chrome. Some considerations:


- In a laptop that's touchscreen, when using the touch feature, it works
- We weren't able to reproduce it when using Mac OS
- We ran different cross Browser/OS compatibility tests and couldn't replicate the issue as well, even using the browser/OS that the client mentioned



## Simulation


Chose any PDP of a store and check it the numeric stepper is answering to your clicks.



## Workaround


Use the textbox option to set the correct number of items you want to buy.

