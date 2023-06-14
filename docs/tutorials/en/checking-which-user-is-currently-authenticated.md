---
title: Checking which user is currently authenticated
id: 4vLALC0yrsJydfaY56Zshq
status: DRAFT
createdAt: 2019-01-23T19:19:30.635Z
updatedAt: 2022-08-04T22:36:12.402Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:29:51.891Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: checking-which-user-is-currently-authenticated
legacySlug: 
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

When a user logs into the store, cookies are created that store the authorization token. From this moment, any request to VTEX servers will load these cookies automatically, identifying the user responsible for the action.

In many contexts that are not requests to our APIs, it may be necessary to verify that the user is logged in or maybe get something that identifies him, such as their email or ID. Cookies also allow this type of action.

However, note that these cookies have the "HTTP Only" and "Secure" options enabled, which means that they're not accessible by any JavaScript method, and will only be sent in secure HTTP requests (ie using the HTTPS protocol).

So the verification of the user who is authenticated must happen through the following API:

- method: `GET`
- route: `/api/vtexid/pub/authenticated/user`

Example: `GET https://www.site.com/api/vtexid/pub/authenticated/user`

The response will follow this pattern:
```
{
    "userId": "88888888-8888-8888-8888-888888888888",
    "user": "user@mail.com",
    "userType": "F"
}
```

The `userId` is the user ID within VTEX services. The `user` will always be their email. The `userType` is intended for internal use.

If the user is not authenticated, the response for this API will be empty (_body response_ = `null`), with an HTTP status 200 (OK) or 401 (Unauthorized).
