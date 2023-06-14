---
title: <vtex:contentPlaceHolder id="Acessorios"/> is not working
id: 7x8f0vGaunX1P3EFJGCYaz
status: PUBLISHED
createdAt: 2022-01-23T02:24:12.606Z
updatedAt: 2022-11-25T22:09:44.078Z
publishedAt: 2022-11-25T22:09:44.078Z
firstPublishedAt: 2022-03-16T21:44:24.602Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: vtexcontentplaceholder-idacessorios-is-not-working
kiStatus: Backlog
internalReference: 466147
---

## Summary


The control `<vtex:contentPlaceHolder id="Acessorios"/>` should bring a view of related products set as the type `acessorios` to the product page.
However, currently, this control is not displaying this view, so the related products set will not be displayed.



## Simulation



- Use the control in a template. (To help with that you could create the `vtex:contentPlaceHolder` following documentation: List of controls for templates)
- Check if there is any product with related products set as `acessorios`. The CrossSeling API could be used to check this info for a specific product - Get Product Search of Accessories.
- Furthermore, on Portal, load the landing page that uses the layout with this control.
- See that the related products will not be displayed.



## Workaround


Use other CrossSellings controls or customization with the API Response.

