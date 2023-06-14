---
title: Alterar el nombre de las formas de pago en checkout
id: frequentlyAskedQuestions_428
status: DRAFT
createdAt: 2019-01-24T20:45:53.538Z
updatedAt: 2022-07-25T14:02:54.304Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:28.227Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: como-alterar-el-nombre-de-las-formas-de-pago-en-el-checkout
legacySlug: como-alterar-el-nombre-de-las-formas-de-pago-en-el-checkout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Todas las maneras de cambiar el nombre o la descripción de las formas de pago se realizan por el CSS de su tienda colocado en el checkout.
La customización de su CSS es responsabilidad de la agencia que la tienda contrató para tal fin.
Sin embargo, existen algunas formas simples de alteración que son las descritas aquí debajo.

- **Para alterar el nombre de la forma de pago**: puede hacerse con la técnica de [image-replacement](http://css-tricks.com/css-image-replacement/);
- **Para alterar la descripción de la forma de pago**: inserte en su CSS:

`.bankInvoicePaymentGroup .payment-description { font-size: 0; }.bankInvoicePaymentGroup .payment-description:after { font-size: 13px; content: "{Texto aquí}" }`

- **Para alterar el nombre de la etapa de entrega**: ensertar en su CSS:

`.shipping-data .accordion-toggle span { font-size: 0: }.shipping-data .accordion-toggle span:after { content: "{Texto aquí}"; }`
