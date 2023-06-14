---
title: 'Configurar pago con PicPay'
id: 5jd6wgPCaWm8IcguyCyaY2
status: PUBLISHED
createdAt: 2018-03-13T15:53:25.279Z
updatedAt: 2023-03-29T01:02:29.955Z
publishedAt: 2023-03-29T01:02:29.955Z
firstPublishedAt: 2018-03-13T19:36:37.769Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pago-con-picpay
locale: es
legacySlug: configurar-pago-con-picpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PicPay es una [cartera digital](/es/faq/que-es-una-cartera-digital) que permite la transferencia de valores entre usuarios, incluyendo establecimientos comerciales. Su cliente elige pagar con ella y recibe un código para escanear usando la aplicación para smartphones.

Para configurar pagos con esta cartera digital, primero usted debe registrar la afiliación de gateway __PicPay__ siguiendo los pasos abajo:

## Configurar la afiliación de gateway PicPay
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PicPay__.
4. Rellene los campos _Application Key_ y _Application Token_ con la información de su cuenta __PicPay__.
5. Haga clic en __Guardar__.

## Configurar la condición de pago
1. Dentro de los __Configuración__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __PicPay__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
6. Defina si los pagos van a ser en efectivo o parcelados.
7. También es posible configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, PicPay aparecerá en el checkout de su tienda como una opción de pago. Después de hacer clic en __Finalizar Compra__, un código aparecerá para que el cliente escanee con la aplicación mobile y efectúe el pago.
