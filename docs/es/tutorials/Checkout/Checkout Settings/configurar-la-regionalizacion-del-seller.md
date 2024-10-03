---
title: 'Configurar la regionalización del seller'
id: 32t6wLpQCEnumoh8TjT5fw
status: PUBLISHED
createdAt: 2022-08-26T13:58:10.648Z
updatedAt: 2023-07-17T12:11:40.614Z
publishedAt: 2023-07-17T12:11:40.614Z
firstPublishedAt: 2022-08-26T18:34:14.924Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configure-seller-regionalization
locale: es
legacySlug: configurar-la-regionalizacion-del-seller
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

**Region** es la funcionalidad responsable de buscar los [sellers white labels](https://help.vtex.com/es/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa#) de un marketplace según las regiones de entrega y definir cuáles de ellos pueden cumplir con el pedido del cliente según su ubicación. Además, a través de ella también es posible filtrar los precios y la disponibilidad de artículos en stock a nivel regional.

Cuando el cliente accede a las páginas de la tienda, su ubicación es registrada por la [Sesión VTEX](https://help.vtex.com/es/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ#). Estos datos se reenvían a Checkout, que a su vez genera una lista de sellers habilitados para esa región de entrega, llamada **regionId**.

Para verificar qué sellers se han considerado para una región en particular en su tienda, vaya al endpoint [Get sellers by region](https://developers.vtex.com/vtex-rest-api/reference/getsellersbyregion).

## Diferencias entre disponibilidad y precio

Los artículos y precios que se muestran en las vitrinas de una tienda se basan en el registro del [catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR#) realizado por el administrador de la tienda. Durante el proceso de compra pueden darse situaciones en las que uno o varios artículos presenten diferencias en disponibilidad de entrega y precios (incluidas promociones) entre la vitrina y el carrito en Checkout.

Una divergencia de disponibilidad de entrega (artículo disponible en la vitrina, pero indicado como "Agotado" en el carrito), ocurre cuando:

1. No hay sellers que entreguen el artículo en esa región.
2. No hay stock disponible del artículo en los sellers que atienden esa región.

La divergencia precio/promoción (diferentes valores entre la vitrina y el carrito) puede ocurrir cuando los sellers seleccionados para la entrega (debido a una mayor cantidad de artículos en el carrito en stock o por razones de optimización logística) tienen condiciones comerciales específicas diferentes (precio/promoción) del mercado y sellers de extensa cobertura.

Con el uso de **Region**, si el cliente inicia sesión en la tienda durante el proceso de selección de los artículos en la vitrina, ocurren los siguientes cambios:
- **Divergencia en la disponibilidad**: no habrá esta divergencia. Solo aquellos artículos que tengan disponibilidad de entrega (stock) en su dirección se mostrarán como “Disponibles”.
- **Divergencia de precios**: reducción o eliminación de la divergencia. Solo habrá diferencia de precio/promoción si se elige al seller con la mejor optimización logística en relación al que tiene mayor stock del artículo.

## Activar región

Para activar **Region** en tu tienda, debes realizar los siguientes pasos:

1. [Configurar el precio y la disponibilidad de SKUs por Region](https://help.vtex.com/es/tutorial/configurar-el-precio-y-la-disponibilidad-de-skus-por-region--12ne58BmvYsYuGsimmugoc#)
2. [Habilitar la funcionalidad Region](https://developers.vtex.com/docs/guides/enable-the-region-for-skus)

>ℹ️ Actualmente, el **Region** está disponible para su uso en todas las tiendas VTEX en v2. Obtenga más información en <a href="https://developers.vtex.com/vtex-developer-docs/changelog/region-v2-release">Region v2<a/>.
