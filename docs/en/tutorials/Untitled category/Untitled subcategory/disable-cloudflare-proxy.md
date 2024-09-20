---
title: 'How to disable Cloudflare proxy'
id: 75QqsXAqR7NdkRc1GZPiXb
status: PUBLISHED
createdAt: 2021-11-19T18:31:43.174Z
updatedAt: 2022-01-11T16:58:58.183Z
publishedAt: 2022-01-11T16:58:58.183Z
firstPublishedAt: 2021-11-22T15:19:34.246Z
contentType: tutorial
productTeam: Reliability
author: 4SqDPmUJIIz2KMMKgiyqKl
slug: disable-cloudflare-proxy
locale: en
legacySlug: disable-cloudflare-proxy
subcategoryId: unknown-subcategory
---

When you start using the Cloudflare service, the Cloudflare proxy is enabled by default. This proxy may interfere with our edge service (CDN), which is responsible for the optimization of your store website. The interference occurs because the Cloudflare proxy causes the domain to point to Cloudflare instead of VTEX. This prevents the renewal of certificates, as this process requires the domain to be pointed to VTEX.

As a result, the website can go down. If the domain is expired for more than 10 days, it is automatically removed from VTEX because it is considered that the store is no longer on VTEX.

To disable the CloudFlare proxy (and therefore disable CloudFlare's CDN and WAF services), log in to your Cloudflare account and click on the **DNS** button. In the **DNS management panel**, click on the orange cloud icon under **Proxy status** for each DNS entry that must point to VTEX. 

If the proxy is enabled, the icon will be orange with the text **Proxied**. If it is disabled, the icon will be gray with the text **DNS Only**.

![Cloudflare proxy configuration](//images.ctfassets.net/alneenqid6w5/1pEYEd1KWlH0P97Pgwyb7n/80ac72636596307b289d75cf6ca6c2fd/DNS_Management.png)

Please note that it may take a while to see the result of disabling the CloudFlare proxy, as it requires the cache to be refreshed.

>ℹ️ If you want to use Cloudflare's CDN and WAF, you can insert a reverse proxy in front of VTEX services. Note that you don't need to use this configuration, as VTEX already offers CDN and WAF services in its edge service. External CDNs failures do not imply failures of VTEX's systems. We are not responsible for third-party CDNs.
