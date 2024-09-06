---
title: 'Quick view does not work on HTTPS pages'
id: cXoMffma6AMOKgcimgmYO
status: PUBLISHED
createdAt: 2017-08-02T17:25:52.444Z
updatedAt: 2019-12-31T15:17:51.857Z
publishedAt: 2019-12-31T15:17:51.857Z
firstPublishedAt: 2017-08-02T18:35:12.834Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: quick-view-does-not-work-on-HTTPS-pages
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

The `$product.QuickView` viewpart for aisle templates renders a link in HTML to open quickview's iframe.

```<a class="thickbox" alt="Nome do produto" href="http://loja.vtexcommercestable.com.br/quick-view/?idproduto=3672&amp;KeepThis=true&amp;TB_iframe=true">Espiar</a>```

When using HTTPS, the destination link protocol stays HTTP, generating a non-HTTPS iframe. Because this falls under mixed content, the action is blocked and iframe doesn't load. 

## Simulation

All you need is an aisle with a quickview function on a HTTPS page.

## Workaround

The only workaround runs into the need to customize the front-end, where a simple Javascript can be implemented, editing the link ("href") of all quickview elements, which would make the URL adopt a HTTPS format, thus allowing iframe to load as expected.

