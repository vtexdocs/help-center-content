---
title: How to insert a reverse proxy in front of VTEX services
id: 4PFWsfRAKviNVPf1bYdiir
status: PUBLISHED
createdAt: 2019-09-20T14:11:30.301Z
updatedAt: 2020-08-20T21:15:13.613Z
publishedAt: 2020-08-20T21:15:13.613Z
firstPublishedAt: 2019-09-23T12:22:50.056Z
contentType: tutorial
productTeam: Reliability
author: authors_24
slug: how-to-insert-a-reverse-proxy-in-front-of-vtex-services
legacySlug: why-we-do-not-recommend-inserting-a-reverse-proxy-in-front-of-vtex-services
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

<div class="alert alert-danger">
  <strong>Warning:</strong> The explanations in this article aim to address cases of rare exception. We do not recommend any store to use reverse proxy. When using a reverse proxy, all VTEX managed and optimized edge services (CDN) will be set aside, so that the store service is responsible for the site's actual provisioning, which is tasked with the settings, monitoring and feature management such as header forwarding, cookies and cache management. We do not provide documentation for any of the above-mentioned.
  <br>
VTEX does not take responsibility for problems related to this system, be it the CDN itself, WAF service or any other resource that is in front of our servers. We will not have overview of any failures and therefore the solution will <strong>not</strong> be included in our SLA agreements.
  </div>
  
If even after reading the warning  above you still want to forward your own CDN to the VTEX CDN, you need to insert a reverse proxy in front of VTEX services. To this end, create the TXT entries indicated below. These will serve as a confirmation input to let us know that the host actually points to VTEX. Without this, VTEX cannot provide navigation.

1. In your domain's DNS, create a TXT type entry in `_{hostname}` having the same value as the one used in CNAME.
2. Forward CDN/WAF traffic to our servers with the value corresponding to the domain's CNAME.

Therefore, the configuration should look as follows:

- `_{hostname} TXT {hostname}.cdn.vtex.com`
- Forward traffic to `{hostname}.cdn.vtex.com`

In addition to this, all `/.well-known/acme-challenge/*` traffic must reach VTEX. Some reverse proxies capture this route and therefore cannot issue or renew the SSL certificate.

<div class="alert alert-warning">
VTEX only provides navigation if: <br>
- We can confirm that the host points to VTEX (as per our CNAME).<br>
- We can issue/renew SSL certificates to the host.<br>
If either condition is not met, VTEX will stop delivering the site because it is characterized as being down.
<br>
