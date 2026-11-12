---
title: 'Configurar pago con Klap'
id: 7B4TwOrNX4R1AIpHpekdGH
status: PUBLISHED
createdAt: 2024-12-09T14:45:46.693Z
updatedAt: 2024-12-09T16:54:46.681Z
publishedAt: 2024-12-09T16:54:46.681Z
firstPublishedAt: 2024-12-09T15:18:39.203Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-klap
legacySlug: configurar-pago-con-klap
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Klap.

Con este proveedor, su tienda puede realizar ventas a través de Klap.

Para configurar Klap, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **payment-provider-klap** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Klap.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Klap en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, seleccione o complete los campos **Secret Token** y **Currency** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Klap**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Klap puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

