---
title: 'Cálculo incorrecto del descuento para "Más por menos" con precio máximo después de la división del artículo por la aplicación de promoción anterior.'
id: 6ZiiHgNADTxZDpE9wu6EkJ
status: PUBLISHED
createdAt: 2024-09-06T14:21:14.890Z
updatedAt: 2024-09-07T01:50:37.471Z
publishedAt: 2024-09-07T01:50:37.471Z
firstPublishedAt: 2024-09-06T14:21:16.136Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: calculo-incorrecto-del-descuento-para-mas-por-menos-con-precio-maximo-despues-de-la-division-del-articulo-por-la-aplicacion-de-promocion-anterior
locale: es
kiStatus: Backlog
internalReference: 1093789
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se produce un error al apilar una promoción Comprar juntos, o cualquier promoción que divida artículos, con una promoción Más por menos configurada para aplicar un descuento de precio máximo, lo que provoca cálculos de descuento incorrectos. El problema surge de las diferencias de precio entre los artículos divididos, lo que provoca que la segunda promoción aplique descuentos inexactos en varias SKU.
Además, se produce un efecto secundario en el que el descuento calculado de la segunda promoción se aplica a todas las SKU elegibles, sin tener en cuenta el número máximo de artículos especificado en la configuración de la promoción Más por menos.



## Simulación



1. Cree una promoción _Comprar juntos_ que aplique un porcentaje de descuento a una SKU.
2. 2. Cree una promoción _Más por menos_ con un descuento de precio máximo que aplique un descuento a la misma referencia.
3. Añada al carrito artículos que cumplan las condiciones de ambas promociones.
4. Observe que la promoción _Comprar juntos_ se aplica correctamente.
5. Cuando la promoción _Más por menos_ intenta aplicarse, el sistema calcula el descuento basándose en un grupo dividido de SKUs y aplica el descuento de forma inexacta a todos los artículos de ese SKU.
Nota El problema puede ocurrir debido a otros factores que causan divisiones de artículos, no sólo de la primera promoción.



## Workaround


N/A





