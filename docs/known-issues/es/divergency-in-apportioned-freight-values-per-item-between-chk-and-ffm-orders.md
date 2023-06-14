---
title: 'Divergencia en los valores de flete prorrateados por artículo entre los pedidos de CHK y FFM'
id: 6v4Fero4fkOw3omZOl21Xf
status: PUBLISHED
createdAt: 2022-01-24T20:24:18.002Z
updatedAt: 2022-11-25T21:51:48.780Z
publishedAt: 2022-11-25T21:51:48.780Z
firstPublishedAt: 2022-06-29T13:12:57.139Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: divergencia-en-los-valores-de-flete-prorrateados-por-articulo-entre-los-pedidos-de-chk-y-ffm
locale: es
kiStatus: Backlog
internalReference: 321111
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos, los valores de envío prorrateados por artículo entre los pedidos del mercado (lado de la caja) y del vendedor (lado de la ejecución) pueden ser divergentes.

La razón no está del todo clara, pero parece ocurrir sólo con los pedidos del "vendedor 1" (donde Marketplace y Fultillment son el mismo) y en los artículos que se dividieron debido a los descuentos - cuando la cantidad final se presenta entre más de un artículo, para asegurar el valor final de descuento deseado.

Puede ser un problema al integrar los pedidos (debido a la divergencia), o al facturar los pedidos, porque el valor facturado no coincidirá con el valor total en uno de los lados (Marketplace o Fulfillment).



## Simulación


No se conoce ninguna forma de reproducir el problema, pero puedes consultar los pedidos antiguos en los que se produjo el problema.



## Workaround


No hay ninguna solución conocida.

