---
title: 'Inserting a reverse proxy in front of VTEX services'
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

> ❗ This guide addresses a practice that is **not recommended** for most stores and should only be applied in extreme cases. Implementing a reverse proxy replaces all perimeter services (CDN) managed and optimized by VTEX. This means that the store will be responsible for effective site provisioning, including configuring, monitoring, and managing aspects such as header passing, cookies, and caching. VTEX doesn't provide support or documentation for this specific configuration and is not responsible for any issues that may arise. VTEX is not responsible for problems with this system, whether related to our CDN, WAF service, or any other resource in front of our servers. We will not have visibility into the operation, and therefore, the solution is **not** covered under our SLA agreements.

To point your own CDN to the VTEX CDN, you need to insert a reverse proxy in front of VTEX services. The traffic flow follows this path:

1. Store: Point of origin of traffic.
2. Reverse proxy: Intermediary set up by you.
3. CDN used by VTEX: Default CDN used by VTEX.
4. VTEX: End servers used by VTEX.

Follow the guidelines below to implement the reverse proxy:

- [TXT record](#txt-record)
- [Traffic routing](#traffic-routing)
- [SSL certificate responsibilities](#ssl-certificate-responsibilities)

## TXT record

To correctly direct your domain to the VTEX CDN, create a TXT record in `_{hostname}` format using the `{hostname}.cdn.vtex.com` value in the DNS zone of your domain.

Replace `{hostname}` with the [subdomain, domain, and top-level domain](/docs/tutorials/configuring-the-store-domain) of your store. Example: `www.mystore.com`. Make sure to include the underscore `_` before the hostname.

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

In the reverse proxy configuration file, configure traffic routing to VTEX. Make sure that the `Host` header contains the original domain. Use the format below for HTTP requests from the reverse proxy to VTEX:

```curl
curl http://{hostname}.cdn.vtex.com/ -H 'Host: {hostname}'
```

Example:

```curl
curl http://www.mystore.com.cdn.vtex.com/ -H 'Host: www.mystore.com'
```

The traffic routing configuration and the HTTP request format may vary depending on the reverse proxy software solution you use.

## SSL certificate responsibilities

Responsibilities for SSL certificates are organized as follows when a reverse proxy is used:

- The external CDN (reverse proxy) manages the SSL certificate for communication between the client and the reverse proxy.
- VTEX manages the SSL certificate for communication between the reverse proxy (external CDN) and VTEX servers.

To use the automatic SSL certificate (Let's Encrypt) provided by VTEX, you must make sure that the proxy doesn't block ACME validation and that the DNS is configured correctly. Make sure that all HTTP traffic to `/.well-known/acme-challenge/*` reaches VTEX without changes, meaning without internal redirects (HTTP → HTTPS), traffic blocks, or modifications.

Some reverse proxies may intercept this route, preventing VTEX from issuing or renewing the SSL certificate.

### Certificate validation requirements

- Route `/.well-known/acme-challenge/*` directly to the VTEX origin `{hostname}.cdn.vtex.com` (example: `www.mystore.com.cdn.vtex.com`) preserving the original `Host` header (example: `Host: www.mystore.com`).
- Do not apply barriers (CAPTCHA, login redirects, error pages, or custom HTML) to this route.
- Do not cache this route.

### Certificate options

If you prefer not to rely on the automatic validation of Let's Encrypt, there are two options:

#### Continue using the automatic certificate (Let's Encrypt) provided by VTEX

- Requires stable proxy configuration as described above.
- Advantage: Issuing and renewing are completely automatic as long as the DNS and ACME routes are correct.

#### Migrate to a custom certificate (VTEX Shield)

- The merchant issues the certificate with their preferred CA (example: DigiCert, GlobalSign) and uploads it using the [Custom SSL certificates](https://help.vtex.com/docs/tutorials/custom-ssl-certificates) feature available in [VTEX Shield](https://help.vtex.com/docs/tutorials/vtex-shield).
- In this model, there is no ACME/Let's Encrypt flow on VTEX, so the proxy doesn't interfere with generating the certificate. You only need to ensure timely renewal and a new upload.

> ⚠️ VTEX only provides navigation if: <ul><li>There is a TXT record configured correctly.</li><li>SSL certificates can be issued and renewed for the host.</li></ul>If both conditions are not met, navigation will fail, and the site will be down.