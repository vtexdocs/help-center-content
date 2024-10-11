---
title: 'Registros que indican que hubo un reembolso, pero debido a un error por parte del adquirente, la anulación no se produce realmente'
id: Bpa1ncKcUuKd7i5isR2D4
status: PUBLISHED
createdAt: 2022-03-17T21:07:16.944Z
updatedAt: 2023-05-17T17:24:11.178Z
publishedAt: 2023-05-17T17:24:11.178Z
firstPublishedAt: 2022-03-17T21:07:17.323Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: logs-stating-that-there-was-a-refund-but-due-to-an-error-on-the-part-of-the-acquirer-the-reversal-does-not-actually-occur
locale: es
kiStatus: Backlog
internalReference: 545331
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Incluso con los registros de transacciones que informan de que se ha realizado el contracargo, se ha producido un error en la entidad adquirente.
Para comprobar el comportamiento es posible ver que en los eventos de transacción hay un mensaje de anulación:

Anulación de xx,xx (moneda)

Buscando el TID en el cuadro de mandos de la entidad adquirente, es posible comprobar que el contracargo no se realizó si hay un mensaje de error en la anulación.




## Simulación


No se puede simular.



## Workaround


Enviar la lista con el TID al equipo de OPS y, en caso de anulación parcial, informar del importe a anular para que se pongan en contacto con el adquirente y así reenviar esta lista para que ellos puedan anular manualmente por su parte y yo volveré con las cartas de anulación de cada uno de estos pedidos para que tengamos constancia de la anulación.

