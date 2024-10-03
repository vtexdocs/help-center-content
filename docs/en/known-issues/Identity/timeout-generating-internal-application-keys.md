---
title: 'Timeout Generating internal application keys'
id: 11U62yvD8i6Mp79rUC38FU
status: PUBLISHED
createdAt: 2024-05-08T11:28:41.002Z
updatedAt: 2024-05-09T12:04:05.533Z
publishedAt: 2024-05-09T12:04:05.533Z
firstPublishedAt: 2024-05-08T11:28:41.857Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: timeout-generating-internal-application-keys
locale: en
kiStatus: Fixed
internalReference: 1029425
---

## Summary



Currently we have an issue that it can affect some clients while generating Applications keys.


##

## Simulation



When the client uses their own SMTP for License Manager template in the message center, the Application Key UI will try to use their SMTP to send the e-mail, but if we have a timeout while sending the e-mail the Application Key won't be generated as well.


##

## Workaround



The client can change the License manager SMTP in the message center, to configure VTEX SMTP rather than their own SMTP, avoiding the timeout. Or they can only try to solve the issue with their SMTP timeout.





