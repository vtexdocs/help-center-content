---
title: 'Se devuelve una transacción no relacionada cuando se utiliza el número de secuencia para obtener una transacción en la interfaz de administración.'
id: 62ePhzVMcAe8KRgs4ASSSv
status: PUBLISHED
createdAt: 2022-07-25T17:03:28.496Z
updatedAt: 2022-11-25T22:04:31.969Z
publishedAt: 2022-11-25T22:04:31.969Z
firstPublishedAt: 2022-07-25T17:03:28.988Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: se-devuelve-una-transaccion-no-relacionada-cuando-se-utiliza-el-numero-de-secuencia-para-obtener-una-transaccion-en-la-interfaz-de-administracion
locale: es
kiStatus: Backlog
internalReference: 503446
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el usuario busca una transacción en el admin por el número de secuencia, en algunos casos, el retorno es la transacción deseada y la transacción no relacionada con el estado de devolución de cargos.



## Simulación


Si la tienda tiene transacciones en estado de devolución y el usuario la recupera con el número de secuencia.



## Workaround


Utilice transactionId o paymentId en su lugar.

