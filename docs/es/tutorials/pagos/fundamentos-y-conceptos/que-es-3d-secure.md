---
title: '3D Secure'
id: 1eWPdop8mECuaEomQgkAIa
status: PUBLISHED
createdAt: 2018-03-02T13:13:14.436Z
updatedAt: 2026-09-29T13:20:00.000Z
publishedAt: 2021-03-30T14:56:15.059Z
firstPublishedAt: 2018-03-02T14:22:05.892Z
contentType: tutorial
productTeam: Identity
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-3d-secure
legacySlug: que-es-3d-secure
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

**3D Secure** (3DS) es un protocolo de seguridad que agrega una capa de protección a las transacciones con tarjetas de crédito y débito realizadas en internet. La generación actual, EMV 3D Secure (EMV 3DS), también se conoce como 3DS 2.

En 3DS 2, el [banco emisor](/es/docs/tutorials/que-es-el-banco-emisor) analiza los datos de la transacción y decide cómo autenticar al comprador:

- **Autenticación sin fricción:** el banco considera que la transacción es de bajo riesgo y completa la autenticación sin pedirle ninguna acción al comprador.
- **Desafío:** el banco le pide al comprador que confirme su identidad, por ejemplo, con una contraseña, datos biométricos o un código enviado por SMS o email.

El protocolo exige la autenticación, pero no define el método: cada banco usa su propio sistema de verificación.

Un contracargo (chargeback) es la cancelación de una compra online realizada con tarjeta de crédito o débito. Cuando se completa la autenticación, la responsabilidad de los contracargos por fraude pasa del retailer al banco emisor, según los criterios de las redes de tarjetas y de los bancos emisores. En los modos que solo envían datos de riesgo al banco emisor, sin autenticar al comprador, como Data Only de Adyen, la responsabilidad por fraude puede seguir siendo del retailer. Esta transferencia de responsabilidad tampoco se aplica a los contracargos por motivos distintos del fraude.

## Versiones de 3D Secure

[EMVCo](https://www.emvco.com/) mantiene 3DS 2, que tiene más de una versión de especificación:

- **2.1.0:** las redes de tarjetas dejaron de procesar transacciones autenticadas con esta versión en septiembre de 2024.
- **2.2.0 y 2.3.1:** versiones en uso.

La versión que se usa en cada transacción depende del proveedor de pago y del banco emisor.

La primera generación, 3D Secure 1.0, estaba basada en XML y redirigía al comprador al entorno del banco después de que ingresara los datos de la tarjeta. Las redes de tarjetas discontinuaron esta versión a partir de octubre de 2022.

## 3D Secure en VTEX

En VTEX, el proveedor de pago implementa 3DS 2 a través de [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2). Así, el comprador permanece en el checkout y se autentica en una ventana modal, sin ser redirigido al sitio web del banco. Para activar 3DS 2 y conocer sus limitaciones, consulta [Configurar flujo de autenticación 3DS 2](/es/docs/tutorials/configurar-flujo-de-autenticacion-3ds-2).

3D Secure y el [antifraude](/es/docs/tutorials/que-es-antifraude) tienen funciones diferentes: 3DS confirma la identidad del comprador ante el banco emisor y el antifraude evalúa el riesgo del pedido. Para configurar el antifraude, consulta [Configurar el antifraude](/es/docs/tutorials/como-configurar-antifraude). Para entender el flujo de autorización con tarjeta de crédito, consulta [Tarjeta de crédito - Flujo básico de un pago](/es/docs/tutorials/tarjeta-de-credito-flujo-basico-de-un-pago).

### Artículos relacionados

- [Configurar flujo de autenticación 3DS 2](/es/docs/tutorials/configurar-flujo-de-autenticacion-3ds-2)
- [Tarjeta de crédito - Flujo básico de un pago](/es/docs/tutorials/tarjeta-de-credito-flujo-basico-de-un-pago)
- [¿Qué es antifraude?](/es/docs/tutorials/que-es-antifraude)
- [Configurar el antifraude](/es/docs/tutorials/como-configurar-antifraude)
