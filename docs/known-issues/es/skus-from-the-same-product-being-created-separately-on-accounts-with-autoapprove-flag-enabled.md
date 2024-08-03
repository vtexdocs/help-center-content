---
title: 'Skus de un mismo producto creados por separado en cuentas con el indicador Autoaprobar activado.'
id: 5xWm9hzTO0Yuv0e2UuMgH6
status: PUBLISHED
createdAt: 2024-01-09T12:39:19.465Z
updatedAt: 2024-07-22T19:31:17.990Z
publishedAt: 2024-07-22T19:31:17.990Z
firstPublishedAt: 2024-01-09T19:59:00.420Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: skus-de-un-mismo-producto-creados-por-separado-en-cuentas-con-el-indicador-autoaprobar-activado
locale: es
kiStatus: Fixed
internalReference: 962986
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El vendedor envía un lote con skus del mismo producto (todas las variaciones posibles del producto).

En lugar de crearse como un producto con sus variaciones, todos los skus se crean por separado.

Este comportamiento está ocurriendo porque la cuenta del marketplace tiene activado el flag de Autoaprobación y el vendedor está enviando todos los skus a la vez.

Normalmente, el sistema tiene un bloqueo, por nombre de producto, para prevenir este tipo de situación ya que el Matcher tiene más de una cola procesando los skus. Pero este bloqueo no está implementado en el flujo de trabajo Autoaprobar.


##

## Simulación


1. Habilite la bandera de Autoaprobación en el Mercado;
2. El vendedor envía un lote de productos y sus skus (variaciones) a la vez;
3. El primer skus del producto se crea correctamente, pero los demás se crean por separado.



## Workaround


Para evitar esta situación, hay dos maneras posibles.

1. El vendedor envía los skus lentamente dentro de un plazo;
2. 2. Desactivar el indicador Autoaprobar en el Mercado.





