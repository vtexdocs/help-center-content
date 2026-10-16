---
title: 'Instalar VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-22T00:00:00.000Z
updatedAt: 2026-09-22T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: installing-the-vtex-sales-app
locale: es
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 4
---

Tras verificar los [requisitos necesarios](XXX) y definir la [arquitectura de tu operación](XXX) sigue las instrucciones de este artículo para instalar **VTEX Sales App** en tu cuenta principal.

## Instalación en el Admin VTEX

> ⚠️ La instalación de **Sales App** se realiza solo en la cuenta principal y no requiere cambios en las cuentas franquicia.

1. Accede a [VTEX Sales App setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) en VTEX App Store. También puedes acceder desde el Admin VTEX en **Apps > Hub de extensiones > App Store > VTEX Sales App**.
2. Haz clic en `Obtener app`.
3. Ingresa el nombre de tu cuenta principal VTEX y haz clic en `Confirmar`.
4. Haz clic en `Finalizar compra`.
5. Haz clic en `Ir a la página de instalación` para acceder a la aplicación en el Admin VTEX.
6. Haz clic en `Instalar`. Se abrirá una ventana modal con los **Términos de uso**. Vuelve a hacer clic en `Instalar` en esa ventana para aceptar los términos y completar la instalación.

Después de la instalación, los archivos `checkout-instore-custom.js` y `checkout-instore-custom.css` estarán disponibles en el sitio web **Default**. Para verlos sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout** o ingresa **Checkout** en el campo de búsqueda.
2. Haz clic en el ícono de engranaje del campo **Default**.
3. Haz clic en la pestaña **Código**.
4. En la sección **Archivos**, verás los archivos `checkout-instore-custom.js` y `checkout-instore-custom.css`.

> ⚠️ De forma predeterminada, **Sales App** debe utilizarse siempre en el sitio web `default` de la cuenta principal para simplificar la operación de la tienda y evitar errores.

Para confirmar que los archivos están en el sitio web correcto, verifica que la URL de la pestaña **Código** incluya `default`, como en este ejemplo: `https://{nombredelacuenta}.myvtex.com/admin/portal/#/sites/default/code`.

## Instalación en dispositivos móviles

> ❗ Antes de usar **Sales App** en dispositivos móviles es necesario no solo instalar **Sales App** en el Admin VTEX sino también completar su [configuración básica](XXX), como se explica en el siguiente artículo de esta serie.

Después de instalar y [configurar](XXX) **Sales App** en Admin VTEX, podrás usarlo en dispositivos móviles, como tablets o smartphones. A continuación verás los links de descarga para cada sistema operativo:

| Sistema operativo | Link de descarga |
|---------------------|------------------|
| Android | [Google Play](https://play.google.com/store/search?q=VTEX%20sales%20app&c=apps&hl=es) |
| iOS | [App Store de Apple](https://apps.apple.com/us/app/vtex-sales-app/id1100390867) |
