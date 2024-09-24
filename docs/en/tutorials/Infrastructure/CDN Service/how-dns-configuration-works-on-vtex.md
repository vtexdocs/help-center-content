---
title: '​​How DNS configuration works on VTEX'
id: 2P5k3oMYOj7TgSK4Mrxmgy
status: PUBLISHED
createdAt: 2024-01-23T16:53:52.076Z
updatedAt: 2024-01-23T17:00:29.714Z
publishedAt: 2024-01-23T17:00:29.714Z
firstPublishedAt: 2024-01-23T16:58:57.454Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-dns-configuration-works-on-vtex
locale: en
legacySlug: how-dns-configuration-works-on-vtex
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

DNS configuration is an essential step for your store's go-live. On VTEX, a specific configuration of the DNS system (_Domain Name System_) is required for the store to operate properly. DNS is the system that translates domain names (such as `mystore.com`) into IP addresses of servers that store the files needed to display a web page.

To configure DNS, you must create a [CNAME](https://www.cloudflare.com/pt-br/learning/dns/dns-records/dns-cname-record/) for your store's main domain, directing it to `{mainDomain}.cdn.vtex.com`. For example, for a store with the main domain `www.mystore.com`, you should create a CNAME pointing to `www.mystore.com.cdn.vtex.com`.

Redirects work in stages:

1. The CNAME created by your team routes the store traffic to a specific location within the VTEX infrastructure.

   `www.mystore.com` 🠖 `CNAME `🠖 `www.mystore.com.cdn.vtex.com`
2. Internally, VTEX configures a second CNAME that directs to the Azion or CloudFront service.

   `www.mystore.com.cdn.vtex.com` 🠖 `CNAME` 🠖 `uug412qft7.map.azionedge.net`
3. Finally, a type A redirect routes the Azion/CloudFront service to a specific IP address.

   `uug412qft7.map.azionedge.net` 🠖 `A` (record type containing an IP address) 🠖 `185.76.11.52`

These settings ensure the resolved IP address is dynamic and can change anytime. This is because this IP address adapts to match the CDN (Content Delivery Network) server closest to the visitor's location. This adaptation improves the site's performance, as files are delivered from servers geographically closer to the visitor.

Learn more about DNS configuration on VTEX by reading the [Go-live](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj) article.
