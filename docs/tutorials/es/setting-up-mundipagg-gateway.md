---
title: Configurar gateway Mundipagg
id: 6C9412jePCUMGguq0YWU8M
status: PUBLISHED
createdAt: 2018-04-18T18:01:44.533Z
updatedAt: 2023-03-29T00:36:17.690Z
publishedAt: 2023-03-29T00:36:17.690Z
firstPublishedAt: 2018-04-18T20:58:03.675Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-mundipagg
legacySlug: configurar-gateway-mundipagg
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Mundipagg es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que procesa pagos hechos con boletos, transferencias bancarias y las principales banderas de tarjetas de crédito.

Para configurar Mundipagg, siga estos pasos:

## Configurar la afiliación de gateway Mundipagg
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Mundipagg__.
4. Rellene el campo __Merchant Key__ ("Llave de la tienda")con la clave registrada en Mundipagg. Se compone de 36 caracteres, entre letras, números y guiones.
5. En __País__, elija el país de su tienda.
6. El campo __Registro Url Post Notification en Mundipagg__ trae una dirección para configurar la recepción de notificaciones sobre el status de pago. En el enlace `https://{sellerhost}.vtexpayments.com.br/mundipagg/payment/statusnotification`, sustituya `{sellerhost}` por el nombre de su tienda. Entonces, envíe la URL final a Mundipagg para completar el registro.
7. En __Instruciones en el boleto al Caja (Max 350 caracteres)__, escriba las instrucciones que se imprimirán en el boleto. El texto debe tener un máximo de 350 caracteres.
8. En el campo __Banco del boleto__, indique el banco que va a generar el boleto y entonces valide la conciliación con Mundipagg.
9. En __Tipo de Estorno__ ("Tipo de anulación"), elija entre el proceso automático o la solicitud manual (en este caso, Mundipagg enviará un e-mail avisando de la anulación pendiente).
10. En el campo __Dias de expiracion do Boleto__, seleccione el número de días para pago hasta que el boleto deje de valer.
11. En __Boleto Registrado__, informe si el boleto tiene o no registro.
12. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice (después de la aprobación de la transacción y del análisis del antifraude). También es posible desactivar esta función.
13. Haga clic en __Guardar__.

<div class="alert alert-info">
Los pasos <strong>8</strong>, <strong>9</strong>, <strong>11</strong> y <strong>12</strong> se deben cumprir si desea ofrecer boletos bancarios como condición de pago en su tienda.
</div>

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Mundipagg estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con Mundipagg). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
