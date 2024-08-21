---
title: 'MercadoPagoV1 falla al autorizar transacciones cuando viene con el valor de datos de usuario de teléfono como 0.'
id: 2C7ULAPQxqHjn8e1d0StFc
status: PUBLISHED
createdAt: 2023-03-27T15:35:09.810Z
updatedAt: 2023-03-27T15:35:10.936Z
publishedAt: 2023-03-27T15:35:10.936Z
firstPublishedAt: 2023-03-27T15:35:10.936Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: mercadopagov1-falla-al-autorizar-transacciones-cuando-viene-con-el-valor-de-datos-de-usuario-de-telefono-como-0
locale: es
kiStatus: Backlog
internalReference: 778611
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si el proceso de pago del cliente envía datos de usuario sin la validación adecuada, como un número de teléfono con menos de tres dígitos, estos datos se pasan a la pasarela tal cual, lo que puede provocar errores inesperados durante el procesamiento. Por ejemplo, nuestro analizador puede lanzar una excepción y cancelar la transacción.



## Simulación


Para simular este problema, utilizamos nuestro conector MercadoPagoV1 heredado para realizar un pedido y pasamos los datos del teléfono del usuario con menos de tres dígitos.



## Workaround


Desafortunadamente, no existe una solución en este momento. Para evitar este problema, recomendamos asegurarse de que todos los datos del usuario se validan correctamente antes de ser enviados a la pasarela.





