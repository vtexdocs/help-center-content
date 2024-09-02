---
title: 'Características generales de SmartCheckout ™ V5'
id: tutorials_3811
status: PUBLISHED
createdAt: 2017-04-27T21:51:49.943Z
updatedAt: 2024-02-08T15:03:13.491Z
publishedAt: 2024-02-08T15:03:13.491Z
firstPublishedAt: 2017-04-27T23:11:15.321Z
contentType: tutorial
productTeam: Shopping
author: authors_65
slug: caracteristicas-generales-smartcheckout-v5
locale: es
legacySlug: cambio-la-nueva-version-de-smart-checkout
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

SmartCheckout™ V5 permite la compra sin login y contraseña de VTEX (one-click-buy checkout). Listamos aquí sus principales características y ventajas.

### Iframe para pagos con tarjeta

Las formas de pago con tarjeta de crédito, débito y private label (tarjetas emitidas por su marca y aceptadas sólo dentro de su red de tiendas) ahora están aislados en un iframe. Esto hace que la personalización de JavaScript sea imposible, lo que aumenta la seguridad de su tienda. Para obtener más información sobre la protección de datos, visite [Seguridad de SmartCheckout](https://help.vtex.com/es/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

Tenga en cuenta que, a pesar de estar en un iframe, todavía es posible aplicar CSS normalmente en el campo. Pero es importante prestar atención al selector CSS utilizado porque, por ser un iframe, debe comenzar con elementos que estén dentro de `#app-container .App` sin, por ejemplo, `#payment-data` o `.payment-group` (que están fuera del iframe).

En el ejemplo práctico, para ocultar la opción "Pagar usando dos tarjetas", sólo se debe utilizar `.ChangeNumberOfPayments {display: none}`.

### Nueva opción de cálculo de flete por geocoordenada

A través de esta función, se puede establecer regiones de entrega utilizando como base un punto geográfico (latitud y longitud) en lugar de un código postal.

Para conocer el detalle de cómo utilizar esta función, lea el artículo de [Geolocalización en el checkout](/es/tutorial/geolocalizacion-en-el-checkout).

__Atención:__ Una vez que la API key sea informada en las configuraciones del checkout, la geolocalización ya estará visible en el checkout de su tienda, independiente de la activación de la nueva versión del SmartCheckout.

### Título de la página

El título de la página de SmartCheckout™, que aparece en la barra o en la pestaña del navegador, se puede personalizar. Para saber cómo hacerlo, sólo tienes que seguir los siguientes pasos:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En el campo __Título del sitio web__, escriba el título deseado y verifique el resultado en el cuadro VISTA PREVIA.
5. Haga clic en `Guardar`.

### JavaScript personalizado

Usted puede utilizar los archivos `checkout5-custom.js` y `orderplaced2-custom.js` para insertar sus personalizaciones de JavaScript en el Checkout y en la pantalla de pedido terminado, respectivamente. Para acceder a ellos, siga los siguientes pasos:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Código__.
4. En el menú __Archivos__, ubicado en el lado derecho de la página, haga clic en los que desea realizar ajustes en el código.
5. Haga clic en `Guardar`

<div class="alert alert-warning">
  Personalizar archivos de JavaScript puede ser dañino para su Checkout. VTEX <b>no recomienda</b> personalizaciones y no es responsable de los daños causados por este código.
</div>

__IMPORTANTE:__ no utilize estos archivos para insertar tags de marketing e integraciones. Si las necesita, utilize Google Tag Manager.

### PayPal Plus

El SmartCheckout™ V5 soporta el método de pago PayPal Plus, que permite que el pago se realize directamente en su website, sin redirigir sus clientes (checkout transparente).

### Google Enhanced Ecommerce

El SmartCheckout™ V5 suma al data layer informaciones para utilización de Google Enhanced Ecommerce. Para aprender a crear estas tags, acceda a la documentación de Google: https://developers.google.com/tag-manager/enhanced-ecommerce.

