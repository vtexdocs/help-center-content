---
title: 'Configurar pagos con Stelo'
id: 6c16nRhAGWaA2mSUOOuC00
status: ARCHIVED
createdAt: 2018-03-02T20:20:44.376Z
updatedAt: 2024-03-18T20:21:28.181Z
publishedAt: 
firstPublishedAt: 2018-03-05T19:08:32.807Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-stelo
locale: es
legacySlug: configurar-pagos-con-stelo
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Además de un [subadquirente](/es/tutorial/configurar-subadquirente-stelo) para procesar transacciones realizadas con diversas condiciones de pago, Stelo también ofrece un servicio de [cartera digital](/es/faq/que-es-una-cartera-digital). Su cliente elige pagar con ella y se redirige a la autenticación en el ambiente de Stelo.

Para configurar pagos con la cartera digital Stelo en su tienda, primero usted debe registrar la afiliación de gateway __Stelo Redirect__.

## Configurar la afiliación de gateway Stelo Redirect
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Stelo Redirect__.
4. Rellene los campos de registro con los datos proporcionados por Stelo (campos _Client Id_ y _Client Secret_).
5. En el campo __maxInstallments__, elija la cantidad máxima de parcelas para los pagos realizados con Stelo.
6. En __Pais__, seleccione donde la condición de pago será ofrecida (actualmente, la única opción disponible es Brasil).
7. En __Moeda__, defina si quiere cobrar en dólar o real.
8. Haga clic en __Guardar__.

## Configurar condición de pago Stelo
1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __Stelo__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
6. Escoja si los pagos van a ser en efectivo o parcelados.
7. También se puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, Stelo aparecerá en el checkout de su tienda como una opción de pago. Después de hacer clic en __Finalizar Compra__, su cliente se dirigirá al ambiente de la cartera digital, donde deberá seguir los pasos de autenticación.
