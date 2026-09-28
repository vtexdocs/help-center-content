---
title: 'Configurar accesorios, sugerencias, productos similares y mostrar juntos'
id: tutorials_280
status: PUBLISHED
createdAt: 2017-04-27T22:10:17.727Z
updatedAt: 2026-07-13T00:00:00.000Z
publishedAt: 2024-10-30T18:49:41.924Z
firstPublishedAt: 2017-04-27T23:03:13.377Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-accessories-suggestions-similar-products-and-show-together
legacySlug: configurando-produto-similar-sugestoes-acessorios-e-genericos
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---
>⚠️ Este tutorial solo es válido para tiendas CMS Portal (Legado).

En la plataforma VTEX puedes gestionar la vitrina de tu tienda aplicando estrategias de cross-selling y up-selling. Estas relaciones permiten sugerir ítems complementarios, alternativas de compra o productos de mayor valor, y se muestran en la tienda con los controles y plantillas del CMS Portal (Legado).

En este tutorial aprenderás sobre las relaciones de cross-sell y up-sell, qué tipos de recomendación se pueden configurar y cómo realizar el registro en tiendas que utilizan el CMS Portal (Legado), tanto desde el Admin VTEX como mediante API.

## ¿Qué es cross-sell?

Consiste en ofrecer un producto complementario al que el usuario está comprando. Por ejemplo, el visitante de tu tienda va a comprar un celular; podría interesarse por unos audífonos o por una funda para el dispositivo.

## ¿Qué es up-sell?

Significa ofrecer al cliente una versión superior del ítem adquirido. En el caso de un celular, se podría presentar otro dispositivo con más funcionalidades, o la opción de sustituir unos audífonos por otros con bluetooth.

## Cross-sell y up-sell en la plataforma VTEX

A continuación, verás qué relaciones de cross-sell y up-sell pueden tener los SKUs entre sí:

- **Accesorios:** ítems sugeridos como opciones que complementan la venta. El cliente puede seleccionar los ítems accesorios en la vitrina, marcando la casilla de selección correspondiente.
- **Sugerencias:** ítems que se muestran como sugerencias de compra. Un SKU solo se muestra como sugerencia cuando su precio es superior al del ítem que el cliente va a comprar.
- **Productos similares:** ítems ofrecidos como alternativa de compra o simplemente como productos parecidos.
- **Mostrar juntos:** ítems que se muestran junto al producto principal como sugerencia para comprarlos juntos.

>ℹ️ Esta configuración de vitrina puede asociarse a la promoción [Comprar juntos](https://help.vtex.com/es/docs/tutorials/comprar-juntos-registro-de-promocion).

## Configurar cross-sell y up-sell

La configuración se realiza a nivel de SKU y puede hacerse de las siguientes formas:

- **Vía Admin VTEX:** manualmente al [agregar o editar el SKU](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-skus), o en masa [utilizando una plantilla](https://help.vtex.com/es/docs/tutorials/exportar-y-importar-especificaciones-de-producto-y-sku).
- **Mediante [API Reference](#via-api-reference):** usando la API de información adicional de SKU para crear o actualizar relaciones y los endpoints públicos de cross-sell para consulta en el storefront.

>ℹ️ La visualización en la vitrina se da mediante los controles y plantillas del CMS Portal (Legado), como `productsCrossSelling` y placeholders específicos. Aprende más sobre controles para plantillas en [List of template controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates).

### Vía Admin VTEX

Para configurar el cross-sell y el up-sell manualmente en el Admin VTEX sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la fila del producto deseado.
3. Haz clic en la pestaña **SKUs**.
4. En la sección **Recomendaciones de cross-sell y up-sell**, haz clic en el ícono de agregar `+`.
5. Selecciona una de las opciones: `Accesorios`, `Sugerencias`, `Productos similares` o `Mostrar juntos`.
6. Haz clic en `Agregar SKUs`.
7. Selecciona los SKUs deseados. Puedes usar la barra de búsqueda para buscar SKUs.
8. Haz clic en `Aplicar`.

Aprende más sobre la configuración de SKUs en [Agregar o editar SKU](https://help.vtex.com/es/docs/tutorials/agregar-o-editar-skus). Para más información sobre la importación mediante planilla, consulta [Importar y exportar productos y SKUs mediante planilla](https://help.vtex.com/es/docs/tutorials/importar-y-exportar-productos-y-skus-mediante-plantilla).

### Vía API Reference

La configuración de cross-sell y up-sell de SKUs mediante API utiliza la misma base de datos de las recomendaciones registradas en el Admin VTEX.

Para crear o actualizar estos complementos, usa el endpoint [Create SKU complement](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skucomplement) de la **Catalog API**.
