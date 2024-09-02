---
title: '"número máximo de artículos elegibles para cada cesta" + más por menos aplica un descuento incorrecto al utilizar el mismo artículo.'
id: gWIMhi9RCv9BE1RvV6GiM
status: PUBLISHED
createdAt: 2024-07-30T17:14:36.972Z
updatedAt: 2024-07-30T17:14:37.931Z
publishedAt: 2024-07-30T17:14:37.931Z
firstPublishedAt: 2024-07-30T17:14:37.931Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: numero-maximo-de-articulos-elegibles-para-cada-cesta-mas-por-menos-aplica-un-descuento-incorrecto-al-utilizar-el-mismo-articulo
locale: es
kiStatus: Backlog
internalReference: 1073080
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar un descuento de más por menos junto con otra promoción que utiliza el "máximo de artículos por carrito" para el mismo artículo, acumulándose ambos, se produce un descuento incorrecto, superando la configuración inicialmente configurada.

Esto ocurre debido a la forma en que la caja divide los artículos.

Por ejemplo, supongamos que tiene una promoción "más por menos" (A) configurada para dar un "100% de descuento para 1 artículo de cada 8 insertados en el carrito".

Junto a ella, tiene otra promoción (B) que, para este mismo SKU, da un 50% de descuento, limitado a un máximo de 2 artículos.

**Lo que se espera**:

Si se introducen 80 artículos en la caja, deberían regalarse un total de 11 artículos.  10 procedentes de (A), 1 procedente de (B).

**Lo que ocurre en la práctica**:

Los artículos se dividen en 3 cantidades diferentes en la caja

(1) los que sólo han obtenido el descuento (A)
(2) los que sólo tienen descuento (B)
(3) los que obtuvieron ambos descuentos (AB)

Sin embargo, la línea (2), que debería tener sólo 2 artículos con un descuento del 50%, en realidad reproduce el descuento del 100% de la línea (1), con lo que se obtienen 2 artículos más de descuento, en un total de 13 artículos, en lugar de 11.





## Simulación


Cree un escenario de promoción como el descrito anteriormente o similar, utilizando el "número máximo de artículos elegibles para cada carrito" y una promoción de más por menos, ambos configurados para acumular.

Es importante tener en cuenta que este problema solo se produce cuando **todas las promociones están configuradas para el mismo SKU**.



## Workaround


n/a (evite utilizar estos 2 ajustes específicos a la vez cuando opere con descuentos para el mismo SKU).






