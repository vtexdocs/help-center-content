---
title: 'Configurar gateway Sitef'
id: 1y3gqmbb6wgwscW8yeccAc
status: ARCHIVED
createdAt: 2018-03-05T17:07:51.846Z
updatedAt: 2024-03-18T20:02:31.580Z
publishedAt: 
firstPublishedAt: 2018-03-05T17:35:10.870Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-sitef-gateway
locale: es
legacySlug: configurar-gateway-sitef
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

En VTEX, usted puede configurar el gateway Sitef. Para configurarlo, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Sitef__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En el campo __ID de la tienda__ , rellene con los datos de su MerchantId en Sitef.
5. En __Clave de acceso__ , rellene con el MerchantKey proporcionado por Sitef.
6. En el campo __Captura de seguridad anticipada__ , seleccione en cuánto tiempo debe realizarse la captura del valor después de la aprobación de la transacción.
7. Haga clic en `Guardar`.

## Configurar la condición de pago

En VTEX, el conector de Sitef procesa principalmente __tarjetas de crédito__. Para configurar los medios de pago a ser procesados por el gateway de Sitef, [acceda a nuestro tutorial](/es/tutorial/condiciones-de-pago).
