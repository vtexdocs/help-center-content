---
title: 'Campaign parameters are lost when HTTP is redirected to HTTPS'
id: 2GHGz8HUBiqw4mqI0uSmu6
status: PUBLISHED
createdAt: 2017-08-16T20:33:02.765Z
updatedAt: 2019-12-31T15:17:50.475Z
publishedAt: 2019-12-31T15:17:50.475Z
firstPublishedAt: 2017-08-16T20:52:08.081Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slug: campaign-parameters-are-lost-when-http-is-redirected-to-https
kiStatus: Fixed
internalReference: 
---

## Summary

Redirecting HTTP to HTTPS removes parameters not recognized by VTEX.

If a store with a URL (in HTTP protocol) indexed in external sites (Facebook, Google, blogs etc), configures this URL to use the HTTPS protocol in VTEX, customers who access this link (in the external site) will be redirected, in VTEX, from HTTP to HTTPS.

This redirection removes unrecognized parameters (of the querystring) which are normally very important for tracking campaigns.

## Update: problem solved

Using the [new VTEX CDN](/en/tutorial/activating-new-vtex-cdn), the original parameters are retained upon redirection between pages.

## Simulation

1. Create a directory (folder) to use the HTTPS protocol. Check out the article [Changing the HTTP or HTTPS protocol for pages on the site](/en/faq/how-do-i-use-the-https-protocol-on-my-stores-pages) on how to apply this setting.
2. In the store, access this directory (folder) using the HTTP protocol and passing some parameter to the QueryString. E.g.: `http://{{AccountName}}.vtexcommercestable.com.br/blackfriday?gclid=123`
3. VTEX will redirect from HTTP to HTTPS, but the parameter "gclid" in the previous example will not also be redirected, i.e. the page will be loaded without this parameter.

## Workaround

Modify the URLs in all the external sites, changing the HTTP link to HTTPS. Since in this case there will be no redirection, the problem will not arise and the parameter will be loaded correctly.

