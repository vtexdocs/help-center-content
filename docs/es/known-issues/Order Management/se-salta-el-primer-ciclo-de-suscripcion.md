---
title: 'Se salta el primer ciclo de suscripción'
id: 2VX6uoop56wK6jecAly40G
status: PUBLISHED
createdAt: 2024-02-05T14:10:40.701Z
updatedAt: 2024-02-05T14:10:41.599Z
publishedAt: 2024-02-05T14:10:41.599Z
firstPublishedAt: 2024-02-05T14:10:41.599Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: first-subscription-cycle-is-skipped
locale: es
kiStatus: Backlog
internalReference: 528556
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El sistema de suscripción utiliza información como la frecuencia de compra y la fecha del ciclo de suscripción para generar un pedido de suscripción. Sin embargo, en función de la zona horaria del consumidor y de la hora a la que se realiza el pedido, se omite el primer ciclo y sólo se genera el segundo mes.
Supongamos que el 9 de mayo, a las 23.00 horas, un cliente creó una suscripción mensual y fijó la fecha del ciclo de suscripción para el día 9 de cada mes, esperando que el primer pedido se realizara el 9 de junio.
El sistema de gestión de pedidos funciona en la zona horaria establecida previamente en la tienda. En este caso, consideraremos GMT-5, hora de Chicago. Sin embargo, el sistema de suscripción opera en la zona horaria GMT 0. Esto significa que, aunque la suscripción se haya creado a las 11 de la noche, el sistema de suscripciones considera que se creó 5 horas más tarde, por tanto, el 10 de mayo.
En este caso, el sistema tiene en cuenta la fecha de creación de la suscripción, el 10 de mayo, para calcular el siguiente ciclo de suscripción. Como la fecha del ciclo de suscripción, el 9 de junio, no cumpliría la condición del periodo de 30 días, en total 29 días, el sistema fija la siguiente fecha de compra para julio. Por lo tanto, el cliente acaba recibiendo el producto después de la fecha prevista.


##

## Simulación


Tenga una SKU configurada para suscripción, con frecuencia mensual y día de compra;
Realizar un pedido después de las 23 horas, por ejemplo.
Comprobar que el primer ciclo, que debería generarse en el mes siguiente, se saltará, generándose sólo en el segundo mes.



##

## Workaround


n/a






