---
title: ' Google Merchant Center reprobando anuncios por divergencia de precio'
id: PzvIhzUPXUOCNKWy9YGGC
status: PUBLISHED
createdAt: 2019-08-13T21:12:20.480Z
updatedAt: 2020-05-05T14:12:22.524Z
publishedAt: 2020-05-05T14:12:22.524Z
firstPublishedAt: 2019-08-13T21:24:41.844Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slugEN: google-merchant-center-is-denying-ads-due-to-price-divergence
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

Los anuncios de algunas tiendas fueron reprobados en Google Merchant Center por problemas de divergencia de precios. Este escenario puede ocurrir si la tienda envía precios modificados a través de la integración, comúnmente realizado para anunciar el precio promocional al contado en los canales de los medios.

Normalmente, Google verifica si el valor enviado por la integración corresponde al valor mostrado en la página del producto. Es habitual aplicar los valores promocionales a través de Javascript, como sugiere este escenario [Promociones por medio de pago no aparecen en la página del producto] (https://help.vtex.com/known-issues/google-merchant-center-reprobando-anuncios-por-divergencia-de-precio--PzvIhzUPXUOCNKWy9YGGC), pero esto puede no ser suficiente si se hace un rastreo en los _rich snippets_ de la página.

VTEX ofrece la viewpart <vtex.cmc:cmc:cmc:productRichSnippets/>, documentada en la lista de controles para templates. Esta implementa datos estructurados para facilitar el rastreo de informaciones del producto. Naturalmente, entrega el valor original del producto, y no el valor promocional esperado por Google en este contexto, lo que lleva a la divergencia y reprobación del anuncio.

## Simulación


1.  Crear una promoción que conceda un 5% de descuento en el pago por boleto bancario.
2.  Acceder a la página del producto
3.  Observar que el resultado impreso por la viewpart “productRichSnippets”  trae el precio original del producto.

## Workaround

No se puede modificar dinámicamente el resultado de los _productRichSnippets_ con el fin de que Google pueda leer la información promocional. Por lo tanto, sugerimos que elimine la viewpart nativa para Google y que se haga una implementación para imprimir los datos estructurados de forma personalizada. Recomendamos el formato _JSON+LD_, que actualmente es más simple.

A continuación, algunas documentaciones útiles para esa implementación:

[**Google**  - Entender cómo datos estructurados funcionan](https://developers.google.com/search/docs/guides/intro-structured-data) 

[**Google**  - Siga las directrices de datos estructurados](https://developers.google.com/search/docs/guides/sd-policies) 

[**Google**  - Marcar datos estructurados para páginas de productos](https://developers.google.com/search/docs/data-types/product)

[**Neil Patel**  - Cómo Agregar Datos Estructurados en su Sitio Web](https://neilpatel.com/es/blog/datos-estructurados/)

**Actualización:** este escenario ya fue derivado a nuestro equipo de desarrollo y tendrá una solución nativa. Pronto, las viewparts _skuPrice_ y _productRichSnippets_ aceptarán nuevos parámetros para habilitar la renderización del precio promocional automáticamente en la página, sin necesidad de implementaciones personalizadas con Javascript.

