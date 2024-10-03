---
title: 'Configurar pago con Pagosnet'
id: 5pLkVpXo3CL0no6jy5Oray
status: ARCHIVED
createdAt: 2023-09-29T12:47:41.264Z
updatedAt: 2024-03-18T19:11:58.894Z
publishedAt: 
firstPublishedAt: 2023-09-29T13:11:09.442Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pagosnet
locale: es
legacySlug: configurar-pago-con-pagosnet
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

En VTEX es posible la integración con el proveedor de pagos Pagosnet. Con este proveedor, su tienda puede realizar ventas a través de Pagosnet.

Para configurar Pagosnet, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagosNet__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Company Code__, __Register Plan User__, __Register Plan Password__, __Notification User__ y __Notification Password__ con los datos proporcionados por su cuenta Pagosnet.
5. En el campo __Currency__, elija la moneda de las transacciones.
6. En __Time Zone__, indique la región que define su horario local.
7. En __Expire Hours__, defina por cuántas horas el sistema debe comprobar el estado del pedido antes de su expiración.
8. En __Cash Invoice Method__, seleccione si la factura debe usarse para pagos en efectivo.
9. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
10. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Pagosnet__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Pagosnet puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
