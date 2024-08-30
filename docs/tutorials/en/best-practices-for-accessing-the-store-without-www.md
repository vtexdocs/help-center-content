---
title: 'Best practices for accessing the store without www'
id: tutorials_4278
status: PUBLISHED
createdAt: 2017-04-27T21:51:11.002Z
updatedAt: 2024-01-23T17:50:54.783Z
publishedAt: 2024-01-23T17:50:54.783Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slug: best-practices-for-accessing-the-store-without-www
locale: en
legacySlug: configuring-access-without-www
subcategory: 2Za4fjGfxYOo6oqykukgyy
---


A store's main domain must have a subdomain, such as `www` or other. To access the store using a pure domain, such as `mystore.com`, which lacks a subdomain, a redirect is necessary.  This guide explains why you need a redirect and how to do it. Check out the following sections:

* [Before you begin](#before-you-begin)
* [Challenges of domains without subdomains](#challenges-of-domains-without-subdomains)
* [Recommended solution: Redirect](#recommended-solution-redirect)
* [Alternative solution: CNAME Flattening](#alternative-solution-cname-flattening)

## Before you begin

We recommend reading the following guides to understand how domains and DNS configuration work on VTEX:

* [Configuring the store domain](https://help.vtex.com/en/tutorial/configuring-the-store-domain--tutorials_2450)
* [How DNS configuration works on VTEX](https://help.vtex.com/en/tutorial/how-dns-configuration-works-on-vtex--2P5k3oMYOj7TgSK4Mrxmgy)

## Limitations on DNS configuration for pure domains

This section explores the complexity and challenges of configuring the DNS system for pure domains. Managing domains without subdomains requires special attention, mainly to preserve the function and integrity of the website without affecting crucial elements such as emails, security, and certificates.

### Type A redirects for pure domains

DNS configuration on VTEX must be done for the store's main domain; using pure domains is not recommended. A pure domain without a subdomain, also known as a _naked domain_ (for example, `mystore.com`, without `www`), implies creating a type A configuration (Address Record) in the DNS. The A record points the domain directly to a specific IP address.

However, this type of configuration is not recommended. You cannot use a type A configuration pointing directly to an IP address due to the following reasons:

* **Risk of unreachable site:** If a pure domain is configured with an A record pointing to a specific IP address and that IP address changes, the site may become inaccessible once the new IP is updated in the A record.
*	**Poor performance:** If the pure domain points directly to a single IP address, site visitors worldwide are required to connect to that single server, regardless of their location. This could lead to a downgrade in performance, as long-distance visitors would have a slower experience.

### CNAME redirects for pure domains

CNAME redirects for pure domains should be avoided. A CNAME behaves similarly to a redirect in the DNS context: when someone accesses `www.mystore.com`, DNS automatically redirects them to `www.mystore.com.cdn.vtex.com`. However, according to the DNS protocol rules, a CNAME cannot coexist with any other type of DNS configuration for the same domain. This means that if we use a CNAME to redirect a website, all settings of the website must follow that redirect. You cannot redirect only some settings.

This behavior conflicts with pure domains, as merchants often need to configure other features, such as MX records for emails, TXT records for security, CAA records for certificates, and NS and SOA records to demonstrate they control the pure domain.

## Pure domains

Given the DNS configuration limitations for pure domains, this section outlines the best practices to ensure your store is accessible without the www prefix.

### Recommended solution: Redirects

VTEX recommends always using the `www` or another subdomain when[ configuring the store's main domain](https://help.vtex.com/en/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450), to combine the use of CNAMEs and other settings. In this scenario, we recommend using redirects to access the address without `www` or other subdomains. Read the [Redirection from other addresses](https://help.vtex.com/en/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ) article to learn how to configure redirects.

Some DNS providers support CNAMEs for the pure domain (DNS Flattening). However, this option may not be offered by all providers. Therefore, we recommend the mandatory use of the subdomain to ensure that all the necessary features can coexist.

### Alternative solution: CNAME Flattening

By default, VTEX recommends using a `www` subdomain to avoid issues related to dynamic IPs in the CDN. However, some hosting companies and DNS services offer an alternative solution to get around this problem, called [CNAME Flattening](https://developers.cloudflare.com/dns/cname-flattening/).

CNAME Flattening is a technique that allows you to associate a pure domain directly with a CNAME instead of an A record. This allows you to configure a pure domain (without a subdomain) to work with a CDN, even when the IPs change. However, this feature is not supported by all DNS providers.

Some DNS providers, such as [Cloudflare](https://www.cloudflare.com/pt-br/), provide CNAME Flattening support. In this case, you can configure the pure domain with a CNAME pointing to the VTEX CDN service. This allows the pure domain to work similarly to the `www` subdomain and still benefit from the CDN.

So, if you want to use a pure domain with a CDN in a specific configuration, the first step is to check whether your DNS provider supports CNAME Flattening. If so, you can configure the pure domain accordingly.

>⚠️ When the DNS Flattening solution is used, it will have the same behavior as a[ reverse-proxy](https://help.vtex.com/en/tutorial/por-que-nao-recomendamos-inserir-um-proxy-reverso-em-frente-aos-servicos-da--4PFWsfRAKviNVPf1bYdiir). In this case, a TXT verification entry must be configured.
