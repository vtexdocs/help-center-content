---
title: "Why don't Cookies support special characters?"
id: 6hs7MQzTri6Yg2kQoSICoQ
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.126Z
updatedAt: 2021-11-17T17:57:16.625Z
publishedAt: 2021-11-17T17:57:16.625Z
firstPublishedAt: 2019-01-24T21:55:08.804Z
contentType: tutorial
productTeam: Reliability
author: authors_35
slugEN: why-dont-cookies-support-special-characters
legacySlug: why-dont-cookies-support-special-characters
locale: en
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

According to the standards of the Internet Engineering Task Force (IETF), the institution responsible for documenting standards used on the Internet, cookies cannot have special characters in their composition, including non-ASCII characters.

This standard is included  in the Requests For Comments (RFC) - technical documents periodically updated by the IETF itself. To learn more, [read IEFT's article about allowed characters in headers and cookies](https://tools.ietf.org/html/rfc7230#section-3.2.6).

This pattern is adopted by most digital products and services on the market, including the VTEX platform.

As a result, the use of special characters in the creation of cookies can generate some bugs in the operation of a store.

We select two possible scenarios:

## Examples

### Google Analytics vs. UTM

One way to create an invalid cookie is through the use of UTMs with special characters. 
Let's say you create an UTM that contain an apostrophe, like 
`www.site.com?utm_source=mother's-day`.

In this case, the hyperlink will not be properly captured by Google Analytics, which generates an invalid cookie. This directly affects the functioning of the store since there is no way for the retailer to delete the user's cookies.

This information is stored in the browser until the user deletes it or the cookie expires - according to the expiration date expressed by the cookie creator.

### Customized Javascripts

Many front-end implementations creates cookies through Javascript to store data with a variety of purposes.

It is key that both the validation and encoding of data are part of this routine in order to avoid creating invalid cookies that hamper browsing the store.

But it's important to note that in addition to offering risks like this, the creation of cookies can also interfere with the store in other ways.

