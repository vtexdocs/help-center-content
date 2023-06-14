---
title: 'La condición especial del banco emisor está causando para algunos BINs el error en la página de pago "El banco emisor para este banco no es aceptado"'
id: 7HgNpwcvqQDwSfJfv9KpY8
status: PUBLISHED
createdAt: 2022-03-25T19:04:12.310Z
updatedAt: 2022-11-25T22:04:57.905Z
publishedAt: 2022-11-25T22:04:57.905Z
firstPublishedAt: 2022-03-25T19:04:13.255Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-condicion-especial-del-banco-emisor-esta-causando-para-algunos-bins-el-error-en-la-pagina-de-pago-el-banco-emisor-para-este-banco-no-es-aceptado
locale: es
kiStatus: Backlog
internalReference: 391549
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El uso de las condiciones especiales en el método de pago para filtrar el emisor está causando que la caja muestre un error "El banco emisor no es aceptado". El problema es intermitente y se notó por primera vez al utilizar la tarjeta de marca compartida de pago personalizado, pero también ocurrió en el método de pago con tarjeta de crédito.



## Simulación


N/A



## Workaround


Eliminar la condición especial del banco emisor de la condición de pago.

