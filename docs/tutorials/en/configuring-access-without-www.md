---
title: 'Configuring access without www'
id: tutorials_4278
status: PUBLISHED
createdAt: 2017-04-27T21:51:11.002Z
updatedAt: 2022-11-14T19:34:05.685Z
publishedAt: 2022-11-14T19:34:05.685Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configuring-access-without-www
legacySlug: configuring-access-without-www
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Your online store must have a single main address, which will [point to VTEX servers](https://help.vtex.com/en/tutorial/configuring-dns-pointing-to-vtex--tutorials_4280). Any additional address, whether it is the version without `www` (root domain) or other domains, should point to this one main address.

See the example below:

- `www.mystore.com` - Main domain.
- `mystore.com` - Redirect.
- `www.anyformeraddress.com` - Redirect.
- `anyformeraddress.com` - Redirect.
- `store.anyformeraddress.com` - Redirect.

Your main domain needs to contain a subdomain, that may or may not be `www`. See the examples below:

- `www.mystore.com` - Valid main domain.
- `store.mybrand.com` - Valid main domain.
- `mystore.com` - Not a valid main domain because it does not have a subdomain, but can be redirected.

<div class = "alert alert-info">
  Learn how to <a href="https://help.vtex.com/pt/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450">configure your store's main domain</a>.
</div>

This redirection can be done in many ways. Although being quite technical and dependent on other factors, the most popular one is using `htaccess` on the server.

You can also use DNS redirection, as provided by several services, including domain providers such as [registro.br](https://registro.br/).

To perform a DNS redirection in a simple manner, there are instructions below on how to use the [redirect.center](http://redirect.center/) service.

<div class="alert alert-warning">
Note that Direcionar is not a VTEX service and does not work with HTTPS. There are other similar services, but VTEX does not recommend any specific one. VTEX is not responsible for problems caused by external redirect services.
</div>

See this other article to learn how to [configure redirection from other addresses](https://help.vtex.com/en/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ).

## Creating domain redirect without www

Example: from `mysite.com` to `www.mysite.com`.

- Create a type A host record for the root domain (which can be represented by `.`, `@` or simply `mysite.com`) pointing to `52.8.174.221` (IP from [__Direcionar__](http://direcionar.com.br/#en)).
- Create a CNAME type record for `redirect` (or "redirect.mysite.com") pointing to `www.mysite.com.direcionar.com.br`.
