---
title: 'Configurar antifraude CyberSource'
id: 2Z88QmpRAsWmI0qaCo4aQg
status: PUBLISHED
createdAt: 2018-04-30T18:08:44.396Z
updatedAt: 2024-03-15T15:29:09.166Z
publishedAt: 2024-03-15T15:29:09.166Z
firstPublishedAt: 2018-04-30T20:25:40.199Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-cybersource-antifraud
locale: es
legacySlug: configurar-antifraude-cybersource
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

CyberSource es una empresa que ofrece diversas soluciones para ayudar en la gestión de pagos de su tienda. Entre ellas están un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) de pagos y un [antifraude](/es/tutorial/que-es-antifraude), ambos con integraciones disponibles en VTEX.

Si usted está buscando más detalles sobre el __gateway__ CyberSource, lea [este artículo del Help](/es/tutorial/configurar-gateway-cybersource). Para configurar el __antifraude__ de CyberSource, siga los pasos abajo:

## Configurar antifraude CyberSource

>ℹ️ Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de realizar el Paso 6. de esta sección.

1. En el Admin VTEX, accede a  __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba __Cybersource__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Si desea modificar el nombre de identificación que se mostrará para el antifraude Cybersource en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
5. Configure la URL `https://{store}.vtexpayments.com.br/api/pub/cybersource/antifraud/notification` en el sitio web de CyberSource, sustituyendo `{store}` por el nombre de su tienda. Esto habilitará las notificaciones cuando haya cambio de status de un pedido.
6. Configure el device fingerprint en Google Tag Manager usando [este artículo del Help](/es/faq/como-configurar-el-device-finger-print-para-braspag-cybersource).
7. Rellene los campos __Id de merchant en CyberSource__, __Nombre de usuario en CyberSource__ y __Tu contraseña en CyberSource__ según datos proporcionados por CyberSource.
8. En __Nombre de tu empresa__, informe la razón social de su tienda.
9. En __Identificación fiscal de tu empresa__, informe el número del CNPJ de su tienda.
10. En __Certificado privado (.p12)__, cargue un certificado privado válido (generado por usted, utilizando una empresa certificadora o un software especializado), con extensión .p12 y clave.
11. En __Contraseña del certificado privado__, introduzca la contraseña creada para acceder al certificado.
12. En __Merchant Key ID__ y __Merchant Secret Key__, informe los dados proporcionados por CyberSource para acceder a la API de informes.
13. En __Documento Opcional__, seleccione si desea envial el documento para el análisis de fraude.
14. En __Enviar transacciones autenticadas?__, seleccione si desea enviar para análisis del antifraude todas las transacciones o sólo aquellas que no autenticadas.
15. Haga clic en `Guardar`.

## Asociar antifraude a una condición de pago
Después de configurar el antifraude de CyberSource, estará disponible para uso en su tienda. Para ello, usted debe asociarlo a las condiciones de pago, ya sean las que ya están configuradas o las que ya estén disponibles.

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de Pago__, haga clic en el botón `+`.
3. Haga clic en la condición deseada o [cree una nueva condición de pago](/es/tutorial/condiciones-de-pago).
5. Marque la opción __Utilizar antifraude__.
6. Seleccione CyberSource.
7. Haga clic en `Guardar`.

>⚠️ Para que una transacción pase por el análisis del antifraude, **la condición de pago utilizada por el cliente debe estar asociada a él**.
