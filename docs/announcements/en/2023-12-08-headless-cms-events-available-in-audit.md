---
title: 'Headless CMS events available in Audit'
id: 2WQz4dwteRahTD71hIHNNc
status: PUBLISHED
createdAt: 2023-12-08T14:36:53.841Z
updatedAt: 2023-12-08T14:57:21.295Z
publishedAt: 2023-12-08T14:57:21.295Z
contentType: updates
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: headless-cms-events-available-in-audit
locale: en
legacySlug: headless-cms-events-available-in-audit
announcementImageID: ''
announcementSynopsisEN: 'We added Headless CMS events to Audit logs.'
---

[Audit](https://help.vtex.com/en/tutorial/audit--5RXf9WJ5YLFBcS8q8KcxTA), a VTEX Admin module that records events in your store for future auditing, now processes [Headless CMS](https://help.vtex.com/en/tutorial/managing-pages--3DO6rBhZ1p3zndnFu5BgRt) events. Headless CMS is the VTEX solution that allows managing web content with the autonomy to create, edit, and publish content via the VTEX Admin.

## What has changed?

We added the Headless CMS events listed below to the Audit logs:

| Action | Event description | Event details |
|---|---|---|
| TRY_PUBLISHING | Attempt to publish a page. | Event ID. |
| TRY_PUBLISH_IN_RELEASE | Attempt to publish a release. | Event ID. |
| TRY_UNPUBLISHING | Attempt to unpublish a page. | Event ID. |
| RESTORE_CONTENT | Content restore. | Event ID. |
| TRY_UPDATING_DRAFT | Attempt to update a draft. | Event ID. |
| TRY_UNPUBLISHING_AND_OVERWRITING | Attempt to unpublish and overwrite a page. | Event ID. |
| done.invoke.deleteContent | Delete content. | Event ID. |
| done.invoke.deleteContentVariant | Delete content version. | Event ID. |

In the **Action** column, all Headless CMS events also display the following information:

* **CONTENT_ID:** unique identifier of the content.
* **VARIANT_ID:** unique identifier of the content version.
* **WORKSPACE**: workspace where the action occurred.

>ℹ️ Check the complete [list of events available in Audit](https://help.vtex.com/en/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ).

## What needs to be done?
No action is required. The change in Audit is already active for all accounts, recording the [list of events](#what-has-changed) mentioned above.

