---
title: 'Setting up DNS pointing to VTEX'
id: tutorials_4280
status: DRAFT
createdAt: 2017-04-27T21:51:26.318Z
updatedAt: 2022-12-12T12:21:42.161Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:15.230Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configuring-dns-pointing-to-vtex
locale: en
legacySlug: new-ssl-and-golive-process
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

The following information is crucial during the process of pointing a domain to VTEX. Such process happens whenever a store goes live, when the store's address is changed, or when an additional address is added.

It is also at this stage that the SSL certificate of your store is generated, which is essential to provide pages in HTTPS.

Here are the steps:

1. [Before you begin](#before-you-begin).
2. [Configuring CAA records](#configuring-caa-records).
4. [Pointing the DNS](#pointing-the-dns).
4. [Generating SSL certificate](#generating-ssl-certificate).

## Before you begin

Before pointing a domain to VTEX, you must ensure that the below-mentioned requirements are met.

<div class="alert alert-warning">
If you are migrating your store from <strong>Loja Integrada</strong> to VTEX, contact our support before pointing the DNS. The Loja Integrada domain must be enabled to be used in the VTEX store.
</div>

### Registering a domain on VTEX

To connect the domain to the store, you must [register the domain in Account Management](https://help.vtex.com/en/tutorial/configurando-dominios-no-license-manager).

### Store in production

Make sure your store [is in production](http://help.vtex.com/en/tutorial/passando-a-loja-para-producao/). Otherwise, the platform will not provide the website pages.

### Avoiding duplicate domains with CDN providers

VTEX uses two CDN providers in the stores: **Cloudfront** and **Azion**. Your store's domain must not be registered with them by the time you perform the pointing. Otherwise, there will be a failure in the CDN provisioning for your store and, consequently, at go-live.

So, if you have the store domain registered on the **Cloudfront** or **Azion** platform, delete it before pointing the DNS to VTEX.

<div class="alert alert-warning">
If you are unable to delete your store's domain registration on the <strong>Cloudfront</strong> or <strong>Azion</strong> platforms, please contact <a href="https://help.vtex.com/en/support">VTEX support</a> to explain the situation. VTEX will help you ensure your store is running smoothly at go-live.
</div>

## Configuring CAA records

<div class="alert alert-warning">
You will only need to configure CAA records, as described in this section if there is a CAA record in your DNS server. Otherwise, proceed to the next section of this guide.
</div>

CAA records indicate which certificate authorities (CAs) are entitled to generate and renew certificates to confirm your domain identity. Proper configuration of these records is necessary to generate [SSL certificates](https://help.vtex.com/en/tutorial/certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar--tutorials_1308) and use the VTEX CDN.

The CAA records must contain the following entry:

```
domain.com. CAA 0 issue letsencrypt.org
```

This means that the **Let's Encrypt** certificate authority can issue certificates for the domain `domain.com`. There is no conflict if any other certificate authority needs to be authorized. The important thing is that the certificate authority be authorized. 

Although not recommended, another alternative would be not including CAA records in your DNS server, indicating that all certificate authorities are authorized to issue and renew certificates for your domain.

<div class="alert alert-info">
These types of entries may not be available in the interface of your DNS manager, but you can usually manage them by calling the support of the specific tool.
</div>

To easily create/verify your CAA records, you can use [CAA Record Helper by SSLMate](https://sslmate.com/caa/). The [DiG](https://www.hostinger.com/tutorials/how-to-use-the-dig-command-in-linux/) program can also help you verify your records with the `dig domain.com CAA` command – a `SERVFAIL` status can indicate non-compliance of your DNS server.

<div class = "alert alert-info">
Learn more:
<p>
<ul>
<li><a href="https://sslmate.com/caa/">CAA Record Helper by SSLMate</a></li>
<li><a href="https://letsencrypt.org/docs/caa/">Let's Encrypt: Certificate Authority Authorization (CAA)</a></li>
<li><a href="https://sslmate.com/caa/about">SSL Mate: About CAA</a></li>
</ul>
</p>
</div>

## Pointing the DNS

The steps required to complete your store's DNS pointing depend on the CMS used when building the storefront.

If you used [CMS Legacy Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), you will only need to follow the [common DNS pointing](#common-dns-pointing) step.

If your storefront was built with [CMS IO](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), then you need to request for [internal pointing to CMS IO](#internal-cms-io-pointing) and then do the [common-dns-pointing](#common-dns-pointing).

### Internal CMS IO pointing

If your storefront is powered by [CMS IO](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), please request internal DNS pointing to CMS IO by submitting a ticket to [VTEX Support](https://help.vtex.com/en/support). This process can take up to 3 business days.

After you receive the internal pointing confirmation, you must do the [common DNS pointing](#common-dns-pointing) within 5 days. Otherwise the internal pointing will be deleted and you will need to redo the request.

<div class = "alert alert-info">
Learn more at <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-go-live">Go live with Store Framework</a> or <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-migrating-storefront-from-legacy-to-io">Migration from legacy CMS to Store Framework</a>.
</div>

### Common DNS pointing

In the DNS zone of your domain, you should create a CNAME-type entry in the desired subdomain for the following destination:
```
{domain}.cdn.vtex.com
```

Note that the `{domain}` indicated above has to be the same as the one you [registered on VTEX](#registering-a-domain-on-vtex).

<div class="alert-warning">
If you use Cloudflare as your DNS zone, you may need to disable the DNS proxy and thus disable Cloudflare's CDN and WAF services. Learn more in the <a href="https://help.vtex.com/en/tutorial/disable-cloudflare-proxy--75QqsXAqR7NdkRc1GZPiXb">How to disable the proxy in Cloudflare</a> article.
</div>

## Generate the SSL certificate

It's necessary to notify the system that a new domain has been assigned to VTEX. While this is not done, users won't be able to browse the site.

Once the notification is sent, the store will be available, but still awaiting the issuance of the SSL certificate, which should happen within 10 minutes.

In case of a failure to generate the certificate, either due to delay in the propagation of the domain or some type of error, when you access the site you will see a message informing that the SSL certificate is being generated.

This notification is performed by accessing the __Account management__, in the __Accounts__ tab, by entering your specific account and clicking __Save__ (even without changing anything) at the bottom of the page.

The certificate is generated through [Let's Encrypt](https://letsencrypt.org/) and is valid for 90 days. However, it is automatically renewed within five days before expiration, as long as the domain is correctly pointed to VTEX.

---

<div class="alert alert-info">
DNS pointing propagation takes 24-48 hours to occur completely, which means that the configured address may not be accessible to all people right after configuration.
</div>

The above instructions deal exclusively with pointing a primary domain to your VTEX store. It's important that if your store has other domains, they are redirected to a single primary domain.

We also consider your domain without www (or corresponding subdomain, such as those who use "store.domain.com"). Learn more in the article [How to configure access without www](/en/tutorial/configuring-access-without-www).
