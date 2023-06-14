---
title: 'Configurar flujo de autenticación 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2023-03-26T21:53:00.302Z
publishedAt: 2023-03-26T21:53:00.302Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-flujo-de-autenticacion-3ds-2
legacySlug: configurar-flujo-de-autenticacion-3ds-2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

3D Secure 2.0 (3DS 2) es un flujo de autenticación que aumenta la seguridad en los pagos realizados con tarjetas de crédito y débito, mediante el análisis interno de una gran cantidad de datos presentes en cada transacción.

<div class = "alert alert-warning">
<p>3DS 2 solo es compatible con algunas afiliaciones de VTEX. Consulte con su proveedor de pago y Admin VTEX si esta funcionalidad está disponible.</p>
</div>

Antes de iniciar la configuración, es necesario abrir un ticket con el equipo de soporte de VTEX solicitando la activación de 3DS 2 en su tienda. Para más información acceda al [cómo abrir un ticket](https://help.vtex.com/es/tutorial/abrir-tickets-para-el-soporte-vtex--16yOEqpO32UQYygSmMSSAM).

<div class="alert alert-warning">
En VTEX, el flujo 3DS 2 no se aplica para realizar compras con dos tarjetas. En caso de que un pedido se realice en esas condiciones, el pago se cancelará.
</div>

## Configuración de 3DS 2

Para configurar la autenticación 3DS 2 en las afiliaciones, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.
3. Seleccione el proveedor que desea configurar.
4. Haga clic en el botón para activar el modo __Live/Producción__.
5. Rellena el resto de campos de configuración con los datos facilitados por el proveedor elegido.
6. En el campo __Suporte 3DS 2.0__, seleccione la opción __“Yes”__.
7. Haga clic en __Guardar__. 

<div class="alert alert-warning">
  La descripción del campo 3DS 2 (<b>"Suporte 3DS 2.0"</b>, informado en el Paso 8) puede variar según el tipo de proveedor de pago que se configure. Consulte con el soporte técnico de su proveedor de pago elegido para identificar el campo correcto para seleccionar para habilitar la autenticación 3DS 2.
</div>
