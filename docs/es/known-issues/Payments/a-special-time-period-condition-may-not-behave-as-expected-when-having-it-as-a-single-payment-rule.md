---
title: 'Una condición de periodo de tiempo especial puede no comportarse como se espera cuando se tiene como regla de pago única'
id: 5bPV3FFGvHL0a8UyMuBxrc
status: ARCHIVED
createdAt: 2022-12-07T19:20:30.062Z
updatedAt: 2022-12-08T13:36:56.085Z
publishedAt: 
firstPublishedAt: 2022-12-07T19:20:30.655Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: una-condicion-de-periodo-de-tiempo-especial-puede-no-comportarse-como-se-espera-cuando-se-tiene-como-regla-de-pago-unica
locale: es
kiStatus: Backlog
internalReference: 712575
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Todo el almacenamiento en caché combinado con la función de fecha de caducidad puede causar un comportamiento muy extraño para nuestros compradores durante el pago. Los mayores problemas provienen de la forma en que la pasarela indexa los métodos de pago:


- Si un método de pago tiene una única regla y esa regla se indexó fuera de su período de validez, el método de pago no aparecerá en el índice. Tampoco aparecerá en el formulario de la interfaz de usuario de pago. Permanecerá ausente hasta que se active una nueva indexación dentro de su periodo válido.


- Si un pago tiene una única regla y esa regla se indexó dentro de su período de validez, el método de pago aparecerá en el índice y, por extensión, en el formulario de la interfaz de pago. Incluso si la regla caduca más tarde, pero no se activa una nueva indexación, el índice no se altera y el método de pago seguirá apareciendo en el formulario de la interfaz de pago.



## Simulación



## Workaround



