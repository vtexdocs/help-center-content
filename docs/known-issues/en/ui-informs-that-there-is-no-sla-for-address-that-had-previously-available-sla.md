---
title: 'UI informs that there is no SLA for address that had previously available SLA'
id: 2xXtoKl1OBiiyPyTVeUTrg
status: PUBLISHED
createdAt: 2022-05-24T21:48:17.537Z
updatedAt: 2022-11-25T21:49:17.360Z
publishedAt: 2022-11-25T21:49:17.360Z
firstPublishedAt: 2022-05-24T21:48:18.159Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-informs-that-there-is-no-sla-for-address-that-had-previously-available-sla
kiStatus: Fixed
internalReference: 585249
---

## Summary


When the logged-in user arrives at the shipping stage, with the address already pre-selected and with the SLA available for that location, when editing their address with the exact same information filled in before, the UI informs that there is no delivery available. Even the API response being that there is yes SLA available (since it is the same address).



## Simulation


Having a user with a registered address, and this address has delivery available, when going to the shipping stage, edit the address with the same information. Right after editing the message is that there is no more SLA available.




## Workaround


N/A

