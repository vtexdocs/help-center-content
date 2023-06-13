---
title: Activating the new VTEX CDN
id: 400JfRm4VGgsKgqgOw4WWA
status: PUBLISHED
createdAt: 2017-10-02T23:12:05.096Z
updatedAt: 2019-12-31T15:25:39.216Z
publishedAt: 2019-12-31T15:25:39.216Z
firstPublishedAt: 2017-10-03T02:09:58.361Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: activating-new-vtex-cdn
legacySlug: activating-new-vtex-cdn
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

<div class="alert alert-warning">
With a commitment of constant evolution of our product, VTEX is making available to its stores a new CDN (Content Delivery Network). In this new model, <strong>all pages of the website will be delivered through this new specialized CDN</strong>, not being limited to static files.
</div>

A Content Delivery Network focus on security, low latency and high transfer speed, working with the best technologies for this goal, including being geographically close to the client that access the virtual store.

One of the biggest gains that CDN brings it's the use of HTTP/2 to deliver all VTEX store. It is a recent update for a protocol that wasn't updated for several years, and which promotes a series of improvements. This article brings more information about HTTP/2 in a quite didactic way: [Google Web Fundamentals - Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/).

__All VTEX stores must migrate to the new CDN.__

<div class="alert alert-success">
  <strong>There are no risks</strong> or contraindications to join the new model.
</div>

Once the requirements of this article have been fulfilled, [this form](https://docs.google.com/forms/d/e/1FAIpQLSdae71lH2ppAgjDw_bJ8E2ZMnL8psm3pEEXbEViQOSsx5eVwQ/viewform) must be completed to request the activation of the new service.

## Requirements


### Enable HTTPS throughout the site

<div class="alert alert-info">
One of the requirements for the new CDN is that the site be fully available on HTTPS.
</div>

That's because, with the new CDN, any HTTP page will be automatically redirected to HTTPS. But first it is important to set up your store in VTEX so that it accepts the traffic in this protocol. Otherwise, it will be redirected back to HTTP - creating a redirect loop, which will break the navigation of these pages.

To do this, follow the steps in the article [Enable HTTPS throughout the site](/en/tutorial/enable-https-throughout-the-site).

### Update CNAME in DNS

With the new CDN, stores should update the CNAME entry in their DNS. If your store went live recently, it probably already uses this CNAME, but be sure to check!

The new CNAME to point the address of your site (hostname) to the VTEX servers is: 

`{hostname}.cdn.vtex.com`

Assume that {hostname} is the __full__ address of your store.

<div class="alert alert-success">
  This change <strong>does not cause site downtime</strong> and does not depend on propagation.
</div>

Examples:
```
Store Address: www.site.com
  - Entry (subdomain): www
  - Type: CNAME
  - Destination: www.site.com.cdn.vtex.com
```
```
Store Address: www.site.com.br
  - Entry (subdomain): www
  - Type: CNAME
  - Destination: www.site.com.br.cdn.vtex.com
```
```
Store Address: store.mycompany.com
  - Entry (subdomain): store
  - Type: CNAME
  - Destination: store.mycompany.com.cdn.vtex.com
```
```
Store Address: www.store.mycompany.com.br
  - Entry (subdomain): www.store
  - Type: CNAME
  - Destination: www.store.mycompany.com.br.cdn.vtex.com
```

Notice that the beginning of the domain ("store", "www", "www.store" or any other) and the ending (".com", ".com.br", ".com.ar" or any other) are part of the `{hostname}`, and must be on the CNAME destination.

Old pointings use addresses like:
- ssl.vtexcommerce.com.br
- ssl9.vtexcommerce.com.br (or other number)
- www.storename.vtexcommerce.com.br
- hodor.vtex.com

Regardless of what is the case of your store, you should upgrade to the new standard.

<div class="alert alert-danger">
<strong>Important:</strong> the old CNAME<strong> must be removed</ strong>. Having two entries in your DNS is likely to cause problems. Only the new CNAME entry should be kept.
</div>

Do not forget to request the final activation filling the [form](https://docs.google.com/forms/d/e/1FAIpQLSdI2FBXGmlSOXEtWxrYfVveln7xOJcmYotqrKfgFgmHn771Fg/viewform).The store will only work with CNAME and HTTPS, but its completion helps us activate CDN in advance for your store, so you can enjoy the new features.

## Reading data from Master Data

Stores that have implementations on the front end that read Master Data information should perform a small update on the route used to communicate with the API.

Example:

- Old Route: `https://www.site.com/accountname/dataentities/CL/search?email=my@email.com`
- Updated route: `https://www.site.com/api/accountname/dataentities/CL/search?email=my@email.com`

The new route has an `/ api` at the beginning and works like the previous one, but it is fundamental to avoid caching pages of the new CDN, keeping only the cache managed by Master Data.

This is only necessary in reading data, that is, for the GET method. Writing data (made by methods such as POST, PUT, and PATCH) is not affected by caching.
