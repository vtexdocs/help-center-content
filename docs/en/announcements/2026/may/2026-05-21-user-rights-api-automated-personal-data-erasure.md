---
title: "User Rights API: Automated erasure of personal data"
createdAt: 2026-05-21T14:00:00.000Z
updatedAt: 2026-05-21T14:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: 2026-05-21-user-rights-api-automated-personal-data-erasure
locale: en
announcementSynopsisEN: 'The new User Rights API allows you to automate personal data erasure requests (LGPD/GDPR) on the VTEX platform.'
tags:
  - New feature
---

VTEX has launched the **User Rights API**, which allows you to automate the erasure of buyers' personal data from the platform in compliance with LGPD and GDPR (the "right to be forgotten").

> ℹ️ This feature is currently in open beta.

> ⚠️ The user rights flows available in this API apply only to non-corporate buyers. They don't apply to B2B buyers or Admin users.

## What has changed?

Previously, standard personal data erasure on the platform required a [manual process through Copilot](https://help.vtex.com/docs/tutorials/erasing-customer-data). Now, merchants can integrate their systems with the new API to automate this process.

> ℹ️ Personal data stored in custom Master Data entities will still follow the existing process described in [Erasing customer data](https://help.vtex.com/docs/tutorials/erasing-customer-data).

## Why did we make this change?

To provide merchants with an efficient and scalable way to manage personal data deletion requests, eliminating the need for manual processing of each request.

## What needs to be done?

No action is required. The existing manual flow remains available. To start using the automated flow:

- See the [User Rights API integration guide](https://developers.vtex.com/docs/guides/user-rights-data-erasure) to implement the complete flow.
- Check the endpoint reference in the [API documentation](https://developers.vtex.com/docs/api-reference/user-rights-api).
