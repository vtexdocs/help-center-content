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
slugEN: main-account-is-being-selected-as-merchantname-in-the-subaccount-environment
locale: es
kiStatus: Backlog
internalReference: 780767
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando una subcuenta está procesando transacciones, el cuerpo de la solicitud está enviando la propiedad "merchantName" con el nombre de la cuenta principal. En algunos casos, debido a este comportamiento, el conector no puede autorizar las transacciones por su parte, provocando la pérdida de pedidos.


##

## Simulación



## Workaround



