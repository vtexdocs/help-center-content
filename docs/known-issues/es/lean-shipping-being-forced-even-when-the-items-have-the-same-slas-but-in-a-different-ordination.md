---
title: 'Lean Shipping forzado incluso cuando los artículos tienen los mismos ANS, pero en una ordenación diferente.'
id: 2YTqsVWPm73msQZVQX9x80
status: PUBLISHED
createdAt: 2022-05-13T17:26:15.513Z
updatedAt: 2023-09-11T21:38:39.068Z
publishedAt: 2023-09-11T21:38:39.068Z
firstPublishedAt: 2022-05-13T17:26:16.378Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lean-shipping-forzado-incluso-cuando-los-articulos-tienen-los-mismos-ans-pero-en-una-ordenacion-diferente
locale: es
kiStatus: Fixed
internalReference: 455218
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En algunos escenarios es posible que aunque la función LeanShipping esté desactivada en la configuración, el sistema aún considere necesario agrupar las opciones de envío, y con ello no desactivará leanShipping, esto se debe a que la regla utilizada por el sistema para definir el uso o no de leanShipping distinta a la configuración está activada o desactivada y existen los mismos o diferentes ANS disponibles para los artículos del carrito;
Sin embargo, hay escenarios donde sólo el orden de cómo se entregan los ANS hace que el sistema entienda que son ANS diferentes y active leanShipping en el checkout y comience a mostrar las etiquetas más rápidas y baratas para el método de envío.


##

## Simulación


No existe una forma lineal de replicar el escenario, sin embargo puede ocurrir siempre que tengamos un carrito con dos o más artículos cuyos slas son similares entre los artículos, y se están presentando en diferentes órdenes dentro del objeto sla de cada artículo;


##

## Workaround


N/A




