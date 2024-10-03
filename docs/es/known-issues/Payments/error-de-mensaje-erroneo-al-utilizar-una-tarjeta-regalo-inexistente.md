---
title: 'Error de mensaje erróneo al utilizar una tarjeta regalo inexistente'
id: 6Bxu8UsBv4OE1pusXz0j7j
status: PUBLISHED
createdAt: 2022-05-23T19:32:47.312Z
updatedAt: 2022-11-25T22:06:02.961Z
publishedAt: 2022-11-25T22:06:02.961Z
firstPublishedAt: 2022-05-23T19:32:47.758Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: wrong-message-error-when-using-a-nonexisting-gift-card
locale: es
kiStatus: Backlog
internalReference: 584102
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


hay un manejo incorrecto de uno de los errores del Sistema de Tarjeta de Regalo VTEX. Cuando el usuario está rellenando el Código de Canje de la Tarjeta Regalo en el proceso de compra, si el usuario rellena un código de compra que no existe, en lugar de ser informado de que el código no es válido, se mostrará el siguiente error en el proceso de compra "_Se ha producido un error de comunicación con el sistema de la tarjeta regalo_". Pero en realidad, no hay ningún problema de conexión, sino que el vale no existe.



## Simulación



1. Ir a la página de pago de una tienda ya configurada para procesar tarjetas de regalo como método de pago
2. Seleccione Tarjeta regalo como método de pago y rellene un código de canje claramente no existente (Ej: aaaaa)
3. Cierre la compra y se mostrará el mensaje de error en la página de pago



## Workaround


N/A

