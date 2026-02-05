---
title: 'Go-live'
id: 12bQlMbJ68Ot0LIaO6Btkj
status: PUBLISHED
createdAt: 2022-12-09T21:36:11.449Z
updatedAt: 2025-01-31T20:59:38.174Z
publishedAt: 2025-01-31T20:59:38.174Z
firstPublishedAt: 2022-12-09T22:07:42.750Z
contentType: trackArticle
productTeam: Reliability
slugEN: go-live
locale: en
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugEN: go-live
order: 4
---

After completing the steps described previously, in this stage your store will go into production. For this to happen, you need to [set up DNS pointing](#setting-up-dns-pointing) and then [notify the pointing](#notify-the-pointing) to the platform.

## Setting up DNS pointing

In the DNS zone of your domain, you should create a CNAME-type entry in the desired subdomain for the following destination:
```
{domain}.cdn.vtex.com
```

Note that the `{domain}` indicated above has to be the same as the one you [registered on VTEX](/en/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#registering-the-domain-on-vtex).

> ⚠️ If you use Cloudflare as your DNS zone, you may need to disable the DNS proxy and thus disable Cloudflare's CDN and WAF services. Learn more in the [How to disable the proxy in Cloudflare](/en/docs/tutorials/disable-cloudflare-proxy) article.

See some examples:

```
Store host: www.site.com
  - Subdomain: www
  - Type: CNAME
  - Destination: www.site.com.cdn.vtex.com
```
```
Store host: www.site.com.br
  - Subdomain: www
  - Type: CNAME
  - Destination: www.site.com.br.cdn.vtex.com
```
```
Store host: store.mycompany.com
  - Subdomain: store
  - Type: CNAME
  - Destination: store.mycompany.com.cdn.vtex.com
```
```
Store host: www.store.mycompany.com.br
  - Subdomain: www.store
  - Tipo: CNAME
  - Destino: www.store.mycompany.com.br.cdn.vtex.com
```

Note that the subdomain (`store`, `www`, `www.store` or others) and the top-level domain (`.com`, `.com.br`, `.com.ar`, or others) are part of the `{hostname}` and must be in the CNAME destination.

If the implementation is headless, meaning the frontend is external, you only need to create a CNAME entry in the `secure` subdomain pointing to `secure.{domain}.com.cdn.vtex.com`. See an example below:

```
Store address: secure.mystore.com
  - Input (subdomain): secure
  - Type: CNAME
  - Destination: secure.mystore.com.cdn.vtex.com
```

> ❗ There can not be any type A pointing coexisting with the CNAME pointing described above. This coexistence may cause issues in your go-live. Maintain only the CNAME pointing described above.

It takes 24-48 hours for DNS pointing to propagate fully, which means that the configured address may not be accessible to everyone immediately after configuration. Also, [notifying the pointing](#notifying-the-pointing) is required for the store to be available.

## Notifying the pointing

Once you have done the DNS pointing, you need to notify the VTEX platform by following the steps below:

1. Log in to the VTEX Admin.
2. In the **ACCOUNT SETTINGS** section, click **Account Management**.
3. Click **Account**.
4. Click `Save` even if you have not made any changes.

Once the notification is sent, the store will be available, but still awaiting the issuance of the SSL certificate, which should happen within 10 minutes.

In case of a failure to generate the certificate, either due to delay in the propagation of the domain or some type of error, when you access the site you will see a message informing that the SSL certificate is being generated. If it remains for more than thirty minutes after the pointing notification, open a ticket with [VTEX support](https://supporticket.vtex.com/support) with urgent priority.

The certificate is generated through [Let's Encrypt](https://letsencrypt.org/) and is valid for 90 days. However, it is automatically renewed within five days before expiration, as long as the domain is correctly pointed to VTEX.

