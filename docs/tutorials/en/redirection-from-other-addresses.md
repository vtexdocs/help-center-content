---
title: 'Redirection from other addresses'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2022-11-14T19:37:01.861Z
publishedAt: 2022-11-14T19:37:01.861Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: redirection-from-other-addresses
locale: en
legacySlug: 
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Your online store must have a single main address, which will [point to VTEX servers](https://help.vtex.com/en/tutorial/configuring-dns-pointing-to-vtex--tutorials_4280). If you wish to use other addresses, they should point to this one main address.

See the example below:

- www.mystore.com` - Main domain.
- www.anyformeraddress.com` - Redirect.

This redirection can be done in many ways. Although being quite technical and dependent on other factors, the most popular one is using `htaccess` on the server.

You can also use DNS redirection, as provided by several services, including domain providers such as [registro.br](https://registro.br/).

To perform a DNS redirection in a simple manner, there are instructions below on how to use the [redirect.center](http://redirect.center/) service.

>⚠️ Note that Redirect Center is not a VTEX service and does not work with HTTPS. There are other similar services, but VTEX does not recommend any specific one. VTEX is not responsible for problems caused by external redirect services.

This guide contains the instructions so you can redirect other domains to your store's main address. See this other article to learn [how to configure access without www](https://help.vtex.com/en/tutorial/configurando-acesso-sem-www--tutorials_4278).

## Redirect from one address to any other

In cases where you want to redirect from one domain to another, as long as it's not the root domain, it's enough to have a CNAME entry for the former address (access origin) with the default `{new-address}.opts-uri.direcionar.com.br`.

For example, from "www.formerdomain.com" to "www.newdomain.com":
- create a `www` entry in 'formerdomain.com' with the CNAME `www.newdomain.com.opts-uri.direcionar.com.br`.

From "store.anyaddress.com" to "www.site.com":
- create the entry `store` in the `anyaddress.com` domain with the CNAME `www.site.com.opts-uri.direcionar.com.br`.

## Access redirection with HTTPS

When accessing any page with HTTPS, the content server must have an SSL certificate installed. Otherwise, the request will be stopped by the browser and no redirect will take place.

In Direcionar.com.br, shown above, it's not possible to install an SSL certificate for each domain that points to it. __Therefore, it does not redirect HTTPS-originated accesses__.

What is the solution?

To serve this scenario we need to use a classical method:

1. If the source domain is something like "site.com", without `www`, or another subdomain, you need to point it to a __management server of the store__.
2. This server, in turn, must have __an SSL certificate installed for the source domain__, thus allowing HTTPS.
3. Finally, there needs to be a __reference redirect__, which varies according to each type of server used (Apache, ASP, nginx). To configure this rule, you must know what type of server is being used and apply the corresponding settings.
