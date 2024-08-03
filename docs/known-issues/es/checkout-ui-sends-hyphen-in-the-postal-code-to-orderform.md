---
title: 'Checkout UI envía guión en el código postal a orderForm'
id: 3cqrBqq5x8nixjAFt8BxCx
status: PUBLISHED
createdAt: 2024-01-16T12:37:56.497Z
updatedAt: 2024-01-16T12:37:57.041Z
publishedAt: 2024-01-16T12:37:57.041Z
firstPublishedAt: 2024-01-16T12:37:57.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-ui-envia-guion-en-el-codigo-postal-a-orderform
locale: es
kiStatus: Backlog
internalReference: 937692
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Checkout UI envía un guión para el código postal a orderForm, causando problemas al calcular los ANS cuando un país tiene 7 dígitos + el guión. Esto sucede porque el módulo de Logística considera el guión como un dígito y dependiendo de cómo se registraron las tarifas de envío en la política de envío.

Portugal y Japón son los únicos en este escenario.


##

## Simulación



- Tener una cuenta para Portugal o Japón;
- Después de añadir productos a la cesta, escriba el código postal;
- El producto puede aparecer como no disponible.



## Workaround



- Revise las tarifas de envío para incluir una gama más amplia.



