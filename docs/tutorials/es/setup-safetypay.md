---
title: 'Configurar gateway SafetyPay'
id: lf89DOdeveuMOI4Q0CwgC
status: DRAFT
createdAt: 2018-02-22T13:57:16.523Z
updatedAt: 2024-03-18T19:57:00.504Z
publishedAt: 
firstPublishedAt: 2018-02-22T15:12:57.862Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-safetypay
locale: es
legacySlug: configurar-safetypay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Esta integración de pago ya no se puede configurar en la plataforma debido al <a href="https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14">proceso de descontinuación de los proveedores legados</a> y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.</div>

SafetyPay es una solución de pago que conecta directamente el checkout de su tienda al banco de su cliente. En esta solución, su cliente elige SafetyPay como medio de pago y es *redireccionado* para el ambiente seguro de Internet banking elegido. Una vez redireccionado, el cliente puede hacer una transferencia bancaria y realizar el pago del pedido.

Para configurar SafetyPay, siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __SafetyPay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro con los datos proporcionados por SafetyPay (Campos *ApiKey, SignatureKey, Custom Merchant Name*).
5. El campo __Tracking Code__ es opcional. Se puede utilizar para realizar análisis de marketing.
6. En el campo __Product ID__, rellene con el medio de pago que quiera: __Express__ para transferencia bancaria o __Cash__ para pago en efectivo.
7. En __Currency__, seleccione la moneda de las transacciones.
8. En __Language__, elija el idioma que se utilizará en la interfaz de usuario.
9. En el campo __Time To Expire (in hours)__, elija el tiempo de vencimiento del pago.
10. En el campo __Time To Expire for Lottery Payment (in days)__, elija el tiempo de expiración de pagos a ser realizados en loterías (se aplica solamente a Brasil).
11. Haga clic en `Guardar`.

## Configurar condición de pago SafetyPay

1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __Safety Pay__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si lo desea, marque la casilla __Usar Antifraude__ para activar el antifraude básico.
7. También puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales) para el uso de SafetyPay.
8. Haga clic en __Guardar__.

¡Listo! Ahora el SafetyPay ya está configurado en su tienda y estará disponible en el checkout para el cierre de compras.
