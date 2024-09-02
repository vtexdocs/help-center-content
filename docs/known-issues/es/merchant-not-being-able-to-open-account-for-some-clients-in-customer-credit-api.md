---
title: 'El comerciante no puede abrir una cuenta para algunos clientes en la API de crédito de clientes.'
id: 4NGCingtQxzFV1gMbxFzT1
status: PUBLISHED
createdAt: 2023-09-25T13:22:58.063Z
updatedAt: 2023-09-25T13:22:58.651Z
publishedAt: 2023-09-25T13:22:58.651Z
firstPublishedAt: 2023-09-25T13:22:58.651Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-comerciante-no-puede-abrir-una-cuenta-para-algunos-clientes-en-la-api-de-credito-de-clientes
locale: es
kiStatus: Backlog
internalReference: 906509
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Por alguna razón, al intentar abrir una nueva cuenta para clientes específicos a través de la API, devuelve el siguiente error:

{
"código": 1099,
"mensaje": "La cuenta de crédito ya está abierta".
}


En este escenario, los datos del cliente (Nombre, documento, etc.) nunca se han utilizado antes en ninguna otra cuenta.


##

## Simulación


Esto ocurre de forma inconsistente, por lo que sólo ocurrirá cada dos intentos.



## Workaround


Cree la cuenta a través de la interfaz de administración.





