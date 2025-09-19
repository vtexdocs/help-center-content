---
title: 'Insert reverse proxy in front of VTEX services'
id: 4PFWsfRAKviNVPf1bYdiir
status: PUBLISHED
createdAt: 2019-09-20T14:11:30.301Z
updatedAt: 2025-05-30T13:53:21.221Z
publishedAt: 2025-05-30T13:53:21.221Z
firstPublishedAt: 2019-09-23T12:22:50.056Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: insert-reverse-proxy-in-front-of-vtex-services
legacySlug: why-we-do-not-recommend-inserting-a-reverse-proxy-in-front-of-vtex-services
locale: en
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

> ❗  This guide addresses a practice that is **not recommended** for most stores and should only be applied in extreme cases.   Implementing a reverse proxy means replacing all edge services (CDN) managed and optimized by VTEX. This implies that the store will be responsible for effective site provisioning, including configuration, monitoring, and management of aspects such as header passing, cookies, and caching. VTEX does not provide support or documentation for these specific configurations and is not responsible for any issues that may arise.   VTEX is not responsible for problems with this system, whether related to our CDN, WAF service, or any other resource in front of our servers. We will not have visibility into the operation, and therefore this solution is **not** covered under our SLA agreements. 

To point your own CDN to the VTEX CDN, you need to insert a reverse proxy in front of VTEX services. In this scenario, the traffic flow follows this path:

1. Store: The point of origin of the traffic.  
2. Reverse proxy: The intermediary you set up.  
3. CDN used by VTEX: VTEX's standard CDN.  
4. VTEX: VTEX's end servers.

Follow the guidelines below to implement the reverse proxy:

* [Creating a TXT record](#creating-a-txt-record)
* [Traffic routing](#traffic-routing)
* [Responsibilities for SSL certificates](#responsibilities-for-ssl-certificates)

## Creating a TXT record

To correctly direct your domain to the VTEX CDN, create a TXT record in the format `_{hostname}` with the value `{hostname}.cdn.vtex.com` in your domain's DNS zone.

Replace `{hostname}` with your store's [subdomain, domain, and top-level domain](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450). Example: `www.mystore.com`. Make sure to include the underscore (`_`) before the hostname.

Format:

```
Name: _{hostname}
Type: TXT
 Value: {hostname}.cdn.vtex.com
```

Example:

```
Name: _www.mystore.com
 Type: TXT
 Value: www.mystore.com.cdn.vtex.com
```

## Traffic routing

In the reverse proxy configuration file, configure traffic routing to VTEX, ensuring that the `Host` header contains the original domain. Use the format below for HTTP requests from the reverse proxy to VTEX:

```curl
curl http://{hostname}.cdn.vtex.com/ -H 'Host: {hostname}'
```

Example:

```curl
curl http://www.mystore.com.cdn.vtex.com/ -H 'Host: www.mystore.com'
```

The traffic routing configuration and the HTTP request format may vary depending on the reverse proxy software solution you use.

## Responsibilities for SSL certificates

In the case of a reverse proxy, responsibilities for SSL certificates are as follows:

* The external CDN (reverse proxy) manages the SSL certificate for communication between the client and the reverse proxy.  
* VTEX manages the SSL certificate for communication between the reverse proxy (external CDN) and VTEX servers.

To enable the generation of SSL certificates, make sure that all HTTP traffic to `/.well-known/acme-challenge/*` reaches VTEX without changes, such as internal redirects from HTTP to HTTPS or traffic blocks.

Some reverse proxies may capture this route, preventing VTEX from issuing or renewing the SSL certificate.

> ⚠️ VTEX only provides navigation if: <ul> <li>The TXT record is set up correctly.</li> <li>SSL certificates can be issued and renewed for the host.</li> </ul> If either condition is not met, navigation will fail, and the site will be down.
