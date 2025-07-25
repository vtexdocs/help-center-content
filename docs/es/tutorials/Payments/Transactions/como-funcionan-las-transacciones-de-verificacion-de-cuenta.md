---
title: '¿Cómo funcionan las transacciones de verificación de cuenta? '
id: 6O51eUDbChBEFPw9oInUtm
status: PUBLISHED
createdAt: 2025-05-30T11:53:10.874Z
updatedAt: 2025-05-30T20:16:25.955Z
publishedAt: 2025-05-30T20:16:25.955Z
firstPublishedAt: 2025-05-30T20:16:25.955Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: how-do-account-verification-transactions-work
locale: es
legacySlug: como-funcionan-las-transacciones-de-verificacion-de-cuenta
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Siempre que un cliente agrega una nueva tarjeta de crédito a su página [Mi cuenta (My Account)](/es/tutorial/como-funciona-mi-cuenta--2BQ3GiqhqGJTXsWVuio3Xh), la institución financiera o el emisor de la tarjeta crea una transacción de prueba para validar el uso de la tarjeta en esa tienda.

Esta transacción se realiza por $1.50 y se puede identificar por la presencia de la sigla __AV__ (Account Verification), seguida de un número.

Consulta a continuación un ejemplo de una transacción de verificación de cuenta, disponible en la página de transacciones del Admin VTEX, en __Pedidos > Transacciones__:

![Transação av es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Transactions/como-funcionan-las-transacciones-de-verificacion-de-cuenta_1.png)

<div class="alert alert-warning">
Una vez que la institución financiera o el emisor de la tarjeta valida los datos de la tarjeta, la transacción de pago se cancela automáticamente y se reembolsa el valor de $1.50, sin generar cargos al cliente. 
</div>
