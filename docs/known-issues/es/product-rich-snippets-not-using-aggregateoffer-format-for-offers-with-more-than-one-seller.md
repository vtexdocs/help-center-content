---
title: Los fragmentos enriquecidos de productos no utilizan el formato AggregateOffer para las ofertas con más de un vendedor.
id: pA3jkQ7qHjWXul7ZsBLy2
status: PUBLISHED
createdAt: 2023-02-14T12:45:02.825Z
updatedAt: 2023-02-14T12:45:03.660Z
publishedAt: 2023-02-14T12:45:03.660Z
firstPublishedAt: 2023-02-14T12:45:03.660Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: los-fragmentos-enriquecidos-de-productos-no-utilizan-el-formato-aggregateoffer-para-las-ofertas-con-mas-de-un-vendedor
kiStatus: Backlog
internalReference: 753505
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un mismo producto está asociado a múltiples ofertas (por ejemplo, el mismo par de zapatos es ofrecido por diferentes comerciantes), entonces AggregateOffer puede ser usado para enviar esta información a Google de forma que su rastreador no rechace la oferta por precios erróneos.

Actualmente, VTEX sólo utiliza el formato Oferta.

Esto hace que algunas ofertas sean rechazadas debido a precios erróneos comparando la información enviada y la información presentada en el frontend de la tienda.

Referencia del documento: https://schema.org/AggregateOffer


##

## Simulación



1. Tener una oferta asociada a varios vendedores;
2. Utilizar los fragmentos enriquecidos de producto de VTEX;
3. Comprueba que sólo se envían los precios del vendedor 1;
4. Comprobar que algunas ofertas pueden ser rechazadas en la cuenta de google merchant.



## Workaround


No hay solución.





