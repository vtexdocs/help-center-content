---
title: 'Configurar antifraude ClearsaleV4'
id: 6NB6ks5BSvMERqCvQESK9Z
status: PUBLISHED
createdAt: 2024-11-08T18:21:22.485Z
updatedAt: 2024-11-08T20:25:06.541Z
publishedAt: 2024-11-08T20:25:06.541Z
firstPublishedAt: 2024-11-08T20:21:39.742Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-clearsale-v4-antifraud
locale: es
legacySlug: configurar-antifraude-clearsale-v4
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible integrarse con el [antifraude](/es/tutorial/como-configurar-antifraude--tutorials_446) ClearSaleV4. A través de este sistema es posible aumentar el nivel de seguridad en las transacciones de pago realizadas en tu tienda mediante análisis de riesgos que identifican posibles fraudes.

Para configurar ClearSaleV4 siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ClearSaleV4__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Si desea modificar el nombre de identificación que se mostrará para el proveedor ClearSaleV4 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
5. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
6. Complete los campos __Application Key__ y __Application Token__ con su nombre de usuario y contraseña configurados en Clearsale.
7. En __Enable Risk Pre-Analysis__, seleccione la opción __No__.
8. En __Enable Analysis on debit payments__, seleccione la opción deseada.
9. En __Product__, ingrese __4__.
10. En __B2BB2C__, seleccione la opción deseada.
11. En __AbsoluteSlaValue__, ingrese el tiempo en minutos para el análisis SLA.
12. No es necesario completar el campo __CustomObservation__.
13. Haga clic en `Guardar`.

## Asociar antifraude a una condición de pago
Después de configurar el antifraude de Clearsale, estará disponible para uso en su tienda. Para ello, usted debe asociarlo a las condiciones de pago, ya sean las que ya están configuradas o las que ya estén disponibles.

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de Pago__, haga clic en el botón `+`.
3. Haga clic en la condición deseada o [cree una nueva condición de pago](/es/tutorial/condiciones-de-pago).
5. Marque la opción __Utilizar antifraude__.
6. Seleccione __ClearsaleV4__.
7. Haga clic en `Guardar`.

<div class="alert alert-warning">
Para que una transacción pase por el análisis del antifraude, <strong>la condición de pago utilizada por el cliente debe estar asociada a él</strong>.
</div>
