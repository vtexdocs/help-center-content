---
title: 'Configurar pagos con OneBuy'
id: 1fgHy2pgQGQgCiEGYi0m2M
status: PUBLISHED
createdAt: 2018-04-12T13:08:01.424Z
updatedAt: 2023-03-29T00:49:49.514Z
publishedAt: 2023-03-29T00:49:49.514Z
firstPublishedAt: 2018-04-12T15:12:01.050Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-onebuy
locale: es
legacySlug: configurar-pagos-con-onebuy
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Usted puede configurar OneBuy para recibir pagos en su tienda. En esta modalidad, su cliente escoge el __meio de pago__ OneBuy para efectuar la compra.

Para configurar OneBuy, siga los pasos abajo:

## Configurar la afiliación de gateway OneBuy
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __OneBuy__.
4. En el campo __External Service Url__, usted debe configurar la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por OneBuy (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__, usted debe elegir si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External Cancellation Service__, defina si quere usar un servicio de cancelación externo o no. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique el texto que va a aparecer para identificar las transacciones realizadas en su tienda.
10. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura sea realizada (después de la aprobación de la transacción y del análisis del antifraude). Usted también puede desactivar esta función.
11. En __Usa Antifraude__, informe si desea usar un sistema de antifraude.
12. Haga clic en __Guardar__.

## Configurar la condición de pago OneBuy
1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __OneBuy__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. El campo __Processar con la afiliación__ ya va a estar llenado con la opción _OneBuy_.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Elija si desea que los pagos se realicen en efectivo o parcelados.
8. Si lo desea, también puede optar por una [condición especial de pago](/es/tutorial/condiciones-especiales).
9. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, OneBuy aparecerá en el checkout de su tienda como una opción de pago para sus clientes.
