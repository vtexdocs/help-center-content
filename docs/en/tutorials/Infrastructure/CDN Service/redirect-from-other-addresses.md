---
title: 'Redirect from other addresses'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2025-03-25T12:35:48.215Z
publishedAt: 2025-03-25T12:35:48.215Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: redirect-from-other-addresses
locale: en
legacySlug: 
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

An online store must have a single main address [pointing to VTEX's servers](/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ) before the store is officially launched. Read the [Configuring the store domain](/en/tutorial/configure-the-store-domain--tutorials_2450) article to understand the rules the address must comply with and the process for adding it.

To allow access to the store through other addresses and versions without a subdomain, you need to configure these addresses to redirect to the store's main address, which is listed in **Account settings > Account > Stores** in the VTEX Admin. See examples below:

| Address | Type |
|---|---|
| `www.mystore.com ` | Main domain |
| `www.previousaddress.com ` | Redirect |
| `mystore.com `  | Redirect |

## Configuring redirects

You can configure redirects in different ways; one of the most popular is using[ htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess) on the server. You can also use a DNS redirect from many services, including domain providers such as [domain.com](http://domain.com/).

Below are instructions for setting up redirects to your store's main address using the [Redirect Center](http://redirect.center/) tool.

<div class="alert alert-warning">
  <p><a href="http://redirect.center/">Redirect Center</a> is not a service provided by VTEX and does not support HTTPS. While there are other similar services available, VTEX does not endorse any specific one. VTEX is not liable for any issues caused by external redirect services.</p>
</div>

### Address redirects without a subdomain (such as www)

To visit your store from an address without subdomains, such as `www`, you need to create a redirect to your store's main address. For example, to access `http://www.mysite.com` from the address without a subdomain `http://mysite.com`, you need to create a redirect in your DNS provider by following the instructions below:

1.	Create an A record for the domain root, usually represented by `.`, `@`, or just `mysite.com`, pointing to `54.84.55.102` ([Redirect Center's](http://redirect.center/) IP).

   |   |   |   |
   |---|---|---|
   | Host Record: <leave-empty\> | Type: A | To: 54.84.55.102 |

2. Create a `redirect` CNAME record (or `redirect.mysite.com`) pointing to `www.mysite.com.redirect.center`.

  |   |   |   |
  |---|---|---|
  | Host Record: redirect | Type: CNAME | To: www.mysite.com.redirect.center |

Learn more about such situations in [Best practices for accessing the store without www](/en/tutorial/best-practices-for-accessing-the-store-without-www--tutorials_4278).

Depending on the DNS provider, redirect propagation may take a few minutes to complete.

### Redirecting from one address to another

To redirect from one address to another that doesn't share the same domain root, create a CNAME entry in the old address (access origin), following the pattern `{newAddress}.opts-uri.redirect.center`.

For example, to redirect from `www.previousdomain.com` to `www.newdomain.com`:

* Create a `www` entry in the domain `previousdomain.com` with the CNAME `www.newdomain.com.opts-uri.redirect.center`.

To redirect from `store.anaddress.com` to `www.site.com`:

*	Create a `store` entry in the `anaddress.com` domain with the CNAME `www.site.com.opts-uri.redirect.center`.

### Redirecting access with HTTPS

VTEX automatically directs `http://` addresses to `https://`. However, it may still be necessary to redirect an `https://` address, such as a version of the address without a subdomain or one with a different domain, to an `https://` address.

When accessing an HTTPS page, the server responding to the address must have an SSL certificate installed. Not having an SSL certificate means the browser will recognize the connection as not secure and block the request. This prevents access to the desired page and makes it impossible to redirect to a different address.

In [Redirect Center](http://redirect.center/), you cannot install an SSL certificate for each domain you point to. Therefore, it does not redirect accesses coming from HTTPS.

To deal with this limitation, consider the following aspects:

1. If the source domain does not have a subdomain, such as `site.com`, point it to a server managed by the store itself, i.e., a physical or virtual server managed by the user or company itself. This server must have an **SSL certificate installed for the source domain**, enabling secure access via HTTPS. Read the[ Security certificate (SSL)](/en/tutorial/hiring-the-security-certificate-sll--tutorials_1308) article for more information.
2. Define a **redirect rule**. To use a self-managed server to redirect HTTPS traffic, you must define a redirect rule on the server, which can vary depending on the type of server used (Apache, ASP, nginx). Therefore, to configure this rule, you must know which server type is being used and apply the corresponding settings.
