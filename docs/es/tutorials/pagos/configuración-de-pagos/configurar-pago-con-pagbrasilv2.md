---
title: 'Configurar pago con PagBrasilV2'
id: 5ONHAWmRbZpNIDPXCkNJXD
status: PUBLISHED
createdAt: 2024-03-13T16:31:07.244Z
updatedAt: 2025-10-17T12:42:23.555Z
publishedAt: 2025-10-17T12:42:23.555Z
firstPublishedAt: 2024-03-13T22:21:24.967Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-pagbrasilv2
legacySlug: configurar-pago-con-pagbrasilv2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagBrasilV2. A través de este proveedor, su tienda puede realizar ventas utilizando tarjetas de débito y crédito, boleto, carteras digitales, pagarés y PIX.

Para configurar PagBrasilV2, siga los pasos a continuación:

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pagos > Proveedores__, o escriba __Provedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón "Nuevo proveedor".
3. Escriba el nombre __PagBrasil-v2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, complete los campos __Clave de aplicación__ y __Token de aplicación__ con la información de su cuenta PagBrasilV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagBrasilV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información Básica__.
6. En __External Service Url__ (URL de servicio externo), ingrese la URL externa que se asociará con `/pvt/paids?an={AccountName}`.
7. En __Transparent Checkout__, complete la información según las instrucciones del proveedor PagBrasilV2.
8. En __SoftDescriptor__ (Descripción de la transacción), indica qué información debe aparecer para identificar la transacción realizada en tu tienda.
9. En __Captura antecipada__, elija durante cuánto tiempo desea que se realice la captura (después de la aprobación de la transacción y el análisis antifraude). Esta función también se puede desactivar.
10. Haga clic en __Guardar__.

Para configurar los métodos de pago a procesar por PagBrasilV2, acceda al [Configurar condiciones de pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagBrasilV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
