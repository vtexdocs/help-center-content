---
title: Why is the origin of the orders different on VTEX and on Google Analytics?
id: frequentlyAskedQuestions_5030
status: PUBLISHED
createdAt: 2017-04-27T22:22:57.838Z
updatedAt: 2019-12-31T14:24:58.529Z
publishedAt: 2019-12-31T14:24:58.529Z
firstPublishedAt: 2017-04-27T23:02:44.531Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_59
slug: why-is-the-origin-of-the-orders-different-on-vtex-and-on-google-analytics
legacySlug: why-is-the-origin-of-the-orders-different-on-vtex-and-on-google-analytics
---

Discrepancies may occur between the information of origin of the orders on VTEX and on Google Analytics. This happens because there is a difference in the expiration time of the cookies.

Cookies on Google Analytics expire in approximately 4 days, while those on VTEX expire earlier.

### For example:

- A customer accesses a store through an email campaign, but does not close the purchase.
- 3 days later, he accesses the store site directly and closes the purchase.
- Google Analytics records that the access originated in the email campaign.
- VTEX records that access was direct (which was what actually happened).

On account of this difference in the cookie expiration time, **VTEX information will always be more precise than that of Google Analytics**.

On Google Analytics, these settings are called attribution models. If the store is interested, it is possible to change the rule setting the rule to be used there. Lots of material about this factor in measuring campaigns may be found on the internet.
