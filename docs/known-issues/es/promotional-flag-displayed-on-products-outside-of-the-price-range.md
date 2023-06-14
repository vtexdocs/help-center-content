---
title: 'Flag promocional exhibida en productos fuera del rango de precios'
id: 7kJl5tyxAAOoiqW2sQcY6u
status: PUBLISHED
createdAt: 2018-04-10T15:21:04.585Z
updatedAt: 2022-12-22T20:49:01.265Z
publishedAt: 2022-12-22T20:49:01.265Z
firstPublishedAt: 2018-04-10T15:30:02.137Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: flag-promocional-exhibida-en-productos-fuera-del-rango-de-precios
kiStatus: Backlog
internalReference: 
---

## Sumario

Las viewports `$product.DiscountHightLight` y `<vtex.cmc:discountHightLight/>` se basan en los teasers disponibles por el checkout como regla para la visualización de flags promocionales. Sin embargo, el checkout no filtra reglas de "ItemMinPrice" si existen otras reglas configuradas.

En consecuencia, promociones que se basan en franjas de valores para ítems y poseen otra restricción, como medios de pago, aparecen como flag promocional a los demás productos, aunque éstos estén fuera del rango de precio para la promoción.

## Simulación

1. En el menú administrativo, seleccione Tasas y Promociones > Promociones.
2. En la esquina superior derecha, haga clic en el botón Nueva Promoción > Promoción Regular.
3. Elegir cualquier tipo de descuento.
4. En Destacado en los productos, elegir __Destacado__.
5. Aplicar alguna restricción, por ejemplo: por rango de precio del ítem.
6. Restringir por algún método de pago, por ejemplo: boleto bancario.
7. Activar y guardar la promoción.

## Workaround

Utilizar la API del checkout (orderForm Simulation) para buscar información de teasers disponibles para el producto, y luego renderizar la flag promocional con la regla de negocio deseada de forma personalizada.

