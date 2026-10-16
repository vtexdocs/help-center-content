---
title: 'Configurar pago con Cielo Orquestrador'
id: 24Ybk800ZUS2t04dBHnisz
status: PUBLISHED
createdAt: 2025-07-16T20:57:08.050Z
updatedAt: 2025-07-16T21:08:45.560Z
publishedAt: 2025-07-16T21:08:45.560Z
firstPublishedAt: 2025-07-16T21:08:45.560Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cielo-orquestrador
legacySlug: configurar-pago-con-cielo-orquestrador
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con Cielo orquestador. Con este sistema, su tienda puede realizar ventas a través de tarjetas de crédito, débito, y privatel labels, Pix, Bitcoin, Nubank, Google Pay, Apple Pay y OXXXO.

Para configurar Cielo orquestador, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **OrquestradorCielo** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta Cielo orquestador.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Cielo orquestador en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. Si desea utilizar [split de pagos](/es/docs/tutorials/split-de-pagos)  en su tienda, seleccione la opción **Activar split de cobros y enviar destinatarios de pago** e indique el **Responsable de cargos de procesamiento de pagos** y el **Responsable de contracargos** (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Cielo orquestador, acceda al [Configurar Condiciones de Pago](/es/docs/tutorials/condiciones-de-pago).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/docs/tutorials/condiciones-especiales).

Después de seguir los pasos indicados, Cielo orquestador puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
