---
title: 'Redirect from other addresses'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2026-06-13T00:00:00.000Z
publishedAt: 2026-06-13T00:00:00.000Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: redirect-from-other-addresses
legacySlug: 
locale: en
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

An online store must have a single main address [pointing to VTEX servers](/docs/tracks/pre-go-live) before the store is officially launched. Check the [Configuring the store domain](/docs/tutorials/configuring-the-store-domain) article to learn the rules the address must follow and the process for adding it.

To allow access to the store through other addresses and versions without a subdomain, you need to configure them to redirect to the main store address, which is listed in **Account settings > Account > Stores** in the VTEX Admin. See examples below:

| Address                    | Type        |
| -------------------------- | ----------- |
| `www.mystore.com`          | Main domain |
| `www.previousaddress.com`  | Redirect    |
| `mystore.com`              | Redirect    |

## Configuring redirects

You can configure redirects in different ways. One of the most popular ways is using `[htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess)` on the server. You can also use a DNS redirect from many services, including domain providers such as [domain.com](https://domain.com/).

Follow the instructions below to configure redirects to the main store address using the [Redirect-301](https://www.redirect-301.com/) tool, which is easy to use.

> ⚠️ [Redirect-301](https://www.redirect-301.com/) is not a VTEX service and operates under a subscription model. While there are other similar solutions in the market, VTEX does not recommend any specific tool. VTEX is not liable for any issues arising from the use of external redirect services.

### Address redirects without a subdomain (such as www)

To visit your store from an address without subdomains, such as `www`, you need to create a redirect to the main store address. For example, to access `https://www.mysite.com` using the address without a subdomain `https://mysite.com`, follow the steps below:

1. Go to [Redirect-301](https://www.redirect-301.com/) and purchase a subscription. Once your subscription is confirmed, you will receive an email with a link to access your admin panel at [redirect-301.com/admin](https://www.redirect-301.com/admin).
2. Log in to the [admin panel](https://www.redirect-301.com/admin) and click **Add Redirect**. Enter the source domain (e.g., `mysite.com`) and the destination URL (e.g., `https://www.mysite.com/`).
3. In your DNS provider, create an A record for the domain root, usually represented by `.`, `@`, or just `mysite.com`, pointing to `18.215.89.131` (Redirect-301 IP).

   |                             |         |                   |
   | --------------------------- | ------- | ----------------- |
   | Host Record: <leave-empty\> | Type: A | To: 18.215.89.131 |

Once DNS propagates, Redirect-301 automatically provisions an SSL certificate for your domain and the redirect becomes active.

Learn more about these cases in [Best practices for accessing the store without www](/docs/tutorials/best-practices-for-accessing-the-store-without-www).

Depending on the DNS provider, redirect propagation may take a few minutes to complete.

### Redirecting from one address to another

For example, to redirect from `www.previousdomain.com` to `www.newdomain.com`:

1. Log in to the [Redirect-301 admin panel](https://www.redirect-301.com/admin) and click **Add Redirect**. Enter `www.previousdomain.com` as the source domain and `https://www.newdomain.com/` as the destination URL.
2. In your DNS provider, create a `www` type A record in the `previousdomain.com` domain pointing to `18.215.89.131` (Redirect-301 IP).

To redirect from `store.anyaddress.com` to `www.site.com`:

1. In the [Redirect-301 admin panel](https://www.redirect-301.com/admin), add `store.anyaddress.com` as the source domain with `https://www.site.com/` as the destination URL.
2. In your DNS provider, create a `store` type A record in the `anyaddress.com` domain pointing to `18.215.89.131` (Redirect-301 IP).

### Redirecting access with HTTPS

VTEX automatically directs `http://` addresses to `https://`. However, you may still need to redirect an `https://` address, such as a version of the address without a subdomain or one with a different domain, to an `https://` address.

When accessing an HTTPS page, the server responding to the address must have an SSL certificate installed. Not having an SSL certificate means the browser will interpret the connection as not being secure and block the request. This prevents access to the desired page and makes it impossible to redirect to a different address.

In [Redirect-301](https://www.redirect-301.com/), an SSL certificate is automatically provisioned for each domain once DNS points to the service. This way, it will normally redirect accesses originating from HTTP and HTTPS, ensuring secure connections when applicable.
