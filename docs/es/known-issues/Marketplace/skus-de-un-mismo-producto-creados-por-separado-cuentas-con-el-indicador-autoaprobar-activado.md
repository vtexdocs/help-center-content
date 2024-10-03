---
title: 'Skus de un mismo producto creados por separado (cuentas con el indicador Autoaprobar activado)'
id: 1nkfd9OuKTFsnBWe1k6dif
status: PUBLISHED
createdAt: 2023-02-15T12:22:35.143Z
updatedAt: 2023-11-28T19:01:37.291Z
publishedAt: 2023-11-28T19:01:37.291Z
firstPublishedAt: 2023-02-15T12:22:35.839Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: skus-from-the-same-product-being-created-separately-accounts-with-autoapprove-flag-enabled
locale: es
kiStatus: Fixed
internalReference: 467112
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


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





