---
title: "clientProfileData gets empty if request Add client profile is performed twice"
id: 1TG7cnnMyWHNKrCjoouKoC
status: PUBLISHED
createdAt: 2023-10-02T15:51:35.989Z
updatedAt: 2023-10-02T15:51:36.771Z
publishedAt: 2023-10-02T15:51:36.771Z
firstPublishedAt: 2023-10-02T15:51:36.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: clientprofiledata-gets-empty-if-request-add-client-profile-is-performed-twice
locale: en
kiStatus: Backlog
internalReference: 911203
---

## Summary


When sending the request Add client profile twice and the email has a complete profile, "clientProfileData" gets empty, showing only the email.


##

## Simulation



- Add client profile via API;
- Resend the same request authenticated, the "clientProfileData" will have only the email.


##

## Workaround


N/A




