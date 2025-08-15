---
title: 'Configurar gateway Mundipagg Fraud Prevention'
id: yFbysX42GW2wawu82q6QA
status: CHANGED
createdAt: 2018-04-18T21:01:40.512Z
updatedAt: 2024-03-18T18:40:56.708Z
publishedAt: 2024-02-16T12:17:04.418Z
firstPublishedAt: 2018-04-18T21:23:11.844Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-mundipagg-fraud-prevention-gateway
legacySlug: configurar-gateway-mundipagg-fraud-prevention
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

> ❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Mundipagg ofrece una versión de su [gateway](/es/tutorial/que-es-un-gateway-de-pagos) con la funcionalidad de antifraude. El Mundipagg Fraud Prevention trae aún más seguridad para el procesamiento de compras hechas con boletos, transferencias bancarias y las principales banderas de tarjetas de crédito.

Para configurar Mundipagg Fraud Prevention, siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Mundipagg Fraud Prevention__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene el campo __Merchant Key__ ("Llave de la tienda") con la clave registrada en Mundipagg. Se compone de 36 caracteres, entre letras, números y guiones.
5. En __País__, elija el país de su tienda.
6. El campo __Registro Url Post Notification em Mundipagg__ trae una dirección para configurar la recepción de notificaciones sobre el status del pago. En el link `https://{sellerhost}.vtexpayments.com.br/mundipagg/payment/statusnotification`, sustituya `{sellerhost}` por el nombre de su tienda. Entonces, envíe la URL final a Mundipagg para completar el registro.
7. En __Instruciones en el boleto al Caja (Max 350 caracteres)__, escriba las instrucciones que se imprimirán en el boleto. El texto debe tener un máximo de 350 caracteres.
8. En el campo __Banco del boleto__, indique el banco que va a generar el boleto y entonces valide la conciliación con Mundipagg.
9. En __Tipo de Estorno__ ("Tipo de anulación"), elija entre el proceso automático o la solicitud manual (en este caso, Mundipagg enviará un e-mail avisando de la anulación pendiente).
10. En el campo __Dias de expiracion do Boleto__, seleccione el número de días para pago hasta que el boleto deje de valer.
11. En __Boleto Registrado__, informe si el boleto tiene o no registro.
12. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice (después de la aprobación de la transacción y del análisis del antifraude). También es posible desactivar esta función.
13. En __Usa Antifraude__, informe si su tienda tiene la funcionalidad antifraude contratada con Mundipagg.
14. Haga clic en __Guardar__.

> ℹ️ Los pasos indicados en **8**, **9**, **11** y **12** se deben completar si usted desea ofrecer boletos bancarios como condición de pago en su tienda.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Mundipagg Fraud Prevention estará configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con Mundipagg Fraud Prevention). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
