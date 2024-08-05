---
title: "La cuenta principal está siendo seleccionada como 'Merchant.Name' en el entorno de la subcuenta."
id: 51coXFBM2wtrJukH3oRESy
status: PUBLISHED
createdAt: 2023-03-29T20:54:19.877Z
updatedAt: 2023-03-29T20:54:20.327Z
publishedAt: 2023-03-29T20:54:20.327Z
firstPublishedAt: 2023-03-29T20:54:20.327Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-cuenta-principal-esta-siendo-seleccionada-como-merchantname-en-el-entorno-de-la-subcuenta
locale: es
kiStatus: Backlog
internalReference: 780767
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando una subcuenta está procesando transacciones, el cuerpo de la solicitud está enviando la propiedad "merchantName" con el nombre de la cuenta principal. En algunos casos, debido a este comportamiento, el conector no puede autorizar las transacciones por su parte, provocando la pérdida de pedidos.


##

## Simulación



## Workaround



