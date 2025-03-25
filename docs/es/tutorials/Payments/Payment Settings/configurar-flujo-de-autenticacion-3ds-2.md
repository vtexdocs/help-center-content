---
title: 'Configurar flujo de autenticación 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2024-10-11T18:26:03.785Z
publishedAt: 2024-10-11T18:26:03.785Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
locale: es
legacySlug: configurar-flujo-de-autenticacion-3ds-2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

3D Secure 2.0 (3DS 2) es un flujo de autenticación que aumenta la seguridad en los pagos realizados con tarjetas de crédito y débito, mediante el análisis interno de una gran cantidad de datos presentes en cada transacción.

>⚠️ 3DS 2 solo es compatible con algunas afiliaciones de VTEX. Consulte con su proveedor de pago y Admin VTEX si esta funcionalidad está disponible.

Antes de iniciar la configuración, contacte al proveedor de pagos con el que tiene contrato para verificar si el servicio 3DS 2 ya está disponible y habilitado en VTEX.

>⚠️ En VTEX, el flujo 3DS 2 no se aplica para realizar compras con dos tarjetas. En caso de que un pedido se realice en esas condiciones, el pago se cancelará.

## Configuración de 3DS 2

Para configurar la autenticación 3DS 2 en los proveedores, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Seleccione el proveedor que desea configurar.
4. En el campo __Suporte 3DS 2.0__, seleccione la opción __"Yes"__.
5. Rellena el resto de campos de configuración con los datos facilitados por el proveedor elegido.
6. Haga clic en `Guardar`. 

>⚠️ La descripción del campo 3DS 2 (**"Suporte 3DS 2.0"**, informado en el Paso 4) puede variar según el tipo de proveedor de pago que se configure. Consulte con el soporte técnico de su proveedor de pago elegido para identificar el campo correcto para seleccionar para habilitar la autenticación 3DS 2.
