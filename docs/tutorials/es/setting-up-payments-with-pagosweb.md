---
title: 'Configurar pagos con PagosWEB'
id: 2qKIeEPUBKqEGo2OyikyQw
status: DRAFT
createdAt: 2018-04-05T15:48:50.151Z
updatedAt: 2024-03-18T19:12:24.950Z
publishedAt: 
firstPublishedAt: 2018-04-05T22:01:49.141Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-pagosweb
locale: es
legacySlug: configurar-pagos-con-pagosweb
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Usted puede configurar PagosWEB para recibir pagos en su tienda. En esta modalidad, su cliente escoge el __meio de pago__ PagosWEB para efectuar la compra.

Para habilitar pagos con PagosWEB, siga estos pasos:

## Configurar la afiliación de gateway PagosWEB
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PagosWeb__.
4. Rellene los campos de registro con los datos proporcionados por PagosWEB (campos _Id Cliente_, _Numero Factura_, _Llave 3_, _Palabra Clave_ y _Nombre del Usuario_).
5. En el campo __Moneda__, elija la moneda que se utilizará en las transacciones de su tienda.
6. En __Tipo de Compra OCA__, defina si las compras realizadas con tarjetas de la bandera OCA se realizar por crédito o usando puntos (llamados Metros).
7. En el campo __Días a esperar el pago__, llene con el mismo número de días definidos en el registro de PagosWEB.
8. Después de rellenar todos los campos informados, usted debe configurar 3 URLs en su cuenta de PagosWEB. Ellas son: __Aprobada__ ("Approved") `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/aprobada`, __Rechazada__ ("Rejected") `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/rechazada` y __Cancelada__ ("Canceled") `https://{{AccountName}}.vtexpayments.com.br/pagosWeb/cancelada`.
9. Haga clic en __Guardar__.

## Configurar la condición de pago PagosWEB
1. Dentro de los __Ajustes__ del módulo de Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __PagosWeb__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. El campo __Processar con la afiliación__ ya estará llenado con la opción _PagosWeb_.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Elija si desea que los pagos se realicen en efectivo o parcelados.
8. Si lo desea, también puede optar por una [condición especial de pago](/es/tutorial/condiciones-especiales).
9. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, PagosWEB aparecerá en el checkout de su tienda como una opción de pago para sus clientes.
