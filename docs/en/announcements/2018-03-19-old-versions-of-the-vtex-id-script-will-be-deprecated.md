---
title: 'Old versions of the VTEX ID script will be deprecated'
id: 1IHQ2NS5McYgKySOmyEmgU
status: PUBLISHED
createdAt: 2018-03-19T21:14:22.078Z
updatedAt: 2019-12-31T15:13:29.533Z
publishedAt: 2019-12-31T15:13:29.533Z
contentType: updates
productTeam: Identity
author: authors_24
slugEN: old-versions-of-the-vtex-id-script-will-be-deprecated
locale: en
legacySlug: old-versions-of-the-vtex-id-script-will-be-deprecated
announcementImageID: ''
announcementSynopsisEN: 'Starting May 21st, only the latest version of the VTEX ID script will be supported by the platform.'
---

Using outdated versions of the VTEX ID script leaves your store vulnerable to security breaches already fixed by newer versions. To prevent this, we decided to only keep support for the script's latest version, deprecating all others. This process will take place in stages, according to the schedule below: 

| Versions | Deprecation deadline |
| ---------- | ---------- |
| 3.13.10 and earlier | 05/07/2018 |
| 3.13.40 and earlier | 05/21/2018 |

To make this change possible, the VTEX ID script must be requested using this link:
`https://vtexid.vtex.com.br/api/vtexid/pub/authentication/vtexid.min.js`

This new method brings lots of advantages: even faster script updates, guarantees that your store is always using the latest version, and the end of the need to review the endpoint everytime a new version is released. 

>⚠️ **Warning:**
>
> 
> We don't recommend you to use the link in a hard-coded version. We'll soon deprecate the support for this import method.

Because all these changes have a direct impact in the client's access to your store, we strongly recommend you to not wait for the deadline and adopt this new VTEX ID script request method as soon as possible.
