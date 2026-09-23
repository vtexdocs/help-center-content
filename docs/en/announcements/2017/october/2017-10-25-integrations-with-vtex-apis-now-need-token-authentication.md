---
title: "As of 11/13, VTEX APIs will no longer support authentication via email and password"
id: 7AdnXDH7AkYmuEUmmis8Es
status: PUBLISHED
createdAt: 2017-10-25T20:55:52.136Z
updatedAt: 2021-03-22T20:46:37.109Z
publishedAt: 2021-03-22T20:46:37.109Z
contentType: updates
productTeam: Others
author: authors_59
slugEN: 2017-10-25-integrations-with-vtex-apis-now-need-token-authentication
locale: en
legacySlug: integrations-with-vtex-apis-now-need-token-authentication
announcementImageID: "undefined"
announcementSynopsisEN: "VTEX will no longer allow integrations with our APIs to use email and password for authentication"
---

As of November 13, 2:00 p.m. (GMT-2, Brazil time), VTEX will no longer allow integrations with our APIs to use email and password for authentication.

For all VTEX integrations, you will need to use an appKey and appToken pair, which you may obtain in the License Manager module.

## What has changed?

Some stores used email and password as authentication keys in their integrations with VTEX. This was allowed by our system, but was far from ideal.

Retailers made this choice mainly because only one pair of appKey and appToken was available, making it difficult to handle multiple integrations.

VTEX will block integrations via email and password. Starting November 13th, it will be necessary to generate an appKey and an appToken in License Manager and use these keys to authenticate any integration with the VTEX APIs.

## Why did we make this change?

Using the email and password for authentication compromises the security of your integrations.

## What needs to be done?

- Check if your store uses email and password in any integration with VTEX APIs.
- If it does, create a pair of appKey and appToken for that integration. See how to do that in the article [Creating appKeys and appTokens to authenticate integrations](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations).

> ⚠️ Any pair of `appKey` and `appToken`, when created, is created without being linked to a role. So, after creating it, you need to link the `appKey` and `appToken` to the corresponding role.
