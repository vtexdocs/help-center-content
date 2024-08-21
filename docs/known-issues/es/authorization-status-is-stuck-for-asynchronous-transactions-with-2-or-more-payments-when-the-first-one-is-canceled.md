---
title: 'El estado de autorización se bloquea para transacciones asíncronas con 2 o más pagos cuando se cancela el primero.'
id: 7kEU8P6lkSQYZWzgaC16nY
status: PUBLISHED
createdAt: 2023-11-02T15:49:18.723Z
updatedAt: 2023-11-02T19:37:18.326Z
publishedAt: 2023-11-02T19:37:18.326Z
firstPublishedAt: 2023-11-02T15:49:19.524Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-estado-de-autorizacion-se-bloquea-para-transacciones-asincronas-con-2-o-mas-pagos-cuando-se-cancela-el-primero
locale: es
kiStatus: Backlog
internalReference: 929517
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando una transacción tiene múltiples pagos y se vuelve asíncrona debido al modo Sherlock o Defensa, y si el primer intento de autorización de pago falla, puede resultar en que los otros pagos se queden atascados en un estado "Autorizado". Esto se debe a que se cancela toda la transacción, pero nuestro trabajador no lo reconoce y procede con un intento de autorización para el segundo pago. En consecuencia, el segundo pago no puede ser cancelado, ya que la transacción ya ha sido cancelada, y no permite una solicitud de cancelación.


##

## Simulación


Cree una transacción con dos pagos, en la que esté activado el Modo Defensa o cualquier otra característica que haga que la transacción sea asíncrona. A continuación, utilice un conector de proveedor personalizado para rechazar el primer intento de autorización de pago mientras aprueba el otro.



## Workaround


N/A





