---
title: La caja no calcula correctamente el valor del envío para un solo artículo que tiene envío gratuito y entrega programada
id: 4jX7JT0Wxt9S4xBe9FSwO
status: PUBLISHED
createdAt: 2022-02-21T19:48:04.202Z
updatedAt: 2022-11-25T21:53:42.846Z
publishedAt: 2022-11-25T21:53:42.846Z
firstPublishedAt: 2022-02-21T19:48:04.748Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-caja-no-calcula-correctamente-el-valor-del-envio-para-un-solo-articulo-que-tiene-envio-gratuito-y-entrega-programada
kiStatus: Backlog
internalReference: 529043
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el carrito está compuesto por dos artículos, y el tipo de envío es programado, al añadir el primer artículo al carrito con envío gratuito, y se trata del mismo SLA, la caja acaba cobrando el valor de este envío, ya que no sabe cómo tratar el cálculo de la distribución de los valores de los portes entre los artículos, ya que se trata de un envío programado y el precio de la ventana es para un paquete en su conjunto.



## Simulación


Añade en el carrito 2 itens, y el primero con los portes gratis, además necesitas el SLA común para ambos y la entrega programada.



## Workaround


N/A

