---
title: 'Checkout does not support encoding Assembly Options names'
id: 29YnOA15HDzJSRwiOLLNfR
status: PUBLISHED
createdAt: 2024-05-06T19:01:35.962Z
updatedAt: 2024-05-06T19:01:36.828Z
publishedAt: 2024-05-06T19:01:36.828Z
firstPublishedAt: 2024-05-06T19:01:36.828Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-does-not-support-encoding-assembly-options-names
locale: en
kiStatus: Backlog
internalReference: 378842
---

## Summary


The name of assembly options are used in the API route. Thus, it is necessary to support the encoding of these names so as not to create problems in the URL with special characters, such as "/". When adding an assembly option with "/" in the cart, it simply doesn't get added and also doesn't notify the user.


##

## Simulation



- Add a "/" into the assembly option name;
- Try adding a product with the assembly option;
- The item will be added to the cart without the assembly option.


##

## Workaround


Remove "/" from the assembly option name.



