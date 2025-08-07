---
title: '2FA SMS sent by VTEX appears as "likely scam" to users in Ireland'
id: frBwPRkJwnn5KYwHb0K0j
status: PUBLISHED
createdAt: 2025-07-30T13:10:03.084Z
updatedAt: 2025-07-30T13:10:03.743Z
publishedAt: 2025-07-30T13:10:03.743Z
firstPublishedAt: 2025-07-30T13:10:03.743Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: 2fa-sms-sent-by-vtex-appears-as-likely-scam-to-users-in-ireland
locale: en
kiStatus: Backlog
internalReference: 1268097
---

## Summary


VTEX 2FA SMS messages are marked as "likely scam" in Ireland because Irish regulations require the Sender ID to be registered with ComReg, which is the local telecommunications regulator. Without this registration, corporate SMS senders are not recognized by local mobile operators, resulting in automatic fraud alerts for end users, and consequently undermining the trustfulness and effectiveness of the authentication process. The responsibility for registering the Sender ID falls under regulatory or legal teams, rather than pure engineering/tech.


##

## Simulation



- Configure SMS 2FA authentication for VTEX Admin users with a phone number in Ireland;
- Request a 2FA login;
- Observe that the SMS received will be flagged by the local provider (mobile carriers in Ireland) as “likely scam” due to the absence of VTEX’s Sender ID registration with ComReg.


##

## Workaround


There is no workaround available.





