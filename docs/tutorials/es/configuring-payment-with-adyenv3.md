---
title: 'Configurar pagos con AdyenV3'
id: 7xAz67E2Eg63LWCQNjVdwv
status: PUBLISHED
createdAt: 2023-05-08T20:00:38.610Z
updatedAt: 2023-05-31T19:42:52.614Z
publishedAt: 2023-05-31T19:42:52.614Z
firstPublishedAt: 2023-05-11T20:32:21.638Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagos-con-adyenv3
locale: es
legacySlug: configurar-pagos-con-adyenv3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible realizar la integración con el proveedor de pagos AdyenV3. A través de este conector, tu tienda puede realizar ventas ofreciendo diversos medios de pago: boleto bancario o PIX (Brasil), tarjetas de crédito o débito y cartera digital (wallet). 

Para utilizar la afiliación AdyenV3, debes:

- [Configurar el entorno Adyen](#configurar-el-entorno-adyen)
- [Configurar el conector AdyenV3 en VTEX](#configurar-el-conector-adyenv3-en-vtex)

<div class="alert alert-warning">
La configuración realizada en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Adyen para obtener información actualizada.
</div>

<div class="alert alert-info">
Para utilizar la afiliación AdyenV3 a través de <a href="https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf">Sales App</a> en tus tiendas físicas (puntos de ventas), ve a <a href="https://help.vtex.com/es/tutorial/configurar-pagos-con-adyenv3-en-vtex-sales-app--24yO6KloBn6DN6CbprHtgt">Configurar pago con AdyenV3 en Sales App</a>.
</div>

## Configurar el entorno Adyen

Los pasos a continuación describen los ajustes mínimos que necesita el conector Adyen para configurarse correctamente. Otras configuraciones personalizadas aplicadas a los clientes, así como la habilitación de medios de pago específicos o funcionalidades específicas de la plataforma, deben realizarse según la documentación de [Adyen](https://docs.adyen.com/).

Para habilitar el acceso de VTEX en el entorno Adyen, sigue los pasos a continuación:

### Obtener las credenciales Company y Merchant Account 

1. Accede a tu [Área de Cliente](https://ca-test.adyen.com/) en Adyen.
2. En la barra lateral izquierda, copia y guarda la información descrita antes de **Company**. Esta es tu Company Account.
3. En la lista de abajo, busca el nombre de la Merchant Account a utilizar (resaltada en blanco). Copia y guarda esta información.

![Adyenv3_1](https://images.ctfassets.net/alneenqid6w5/4BHwn5SIUl6AuiiEjreluk/a7404c85f6fda7f7ccbae66070d0db0d/Adyenv3_1.PNG)

### Obtener la Live URL

1. En la barra lateral, accede a **Developers > API URLs**.
2. Haz clic en `Copy` en el campo **Prefix** y anota la información guardada en un lugar seguro.

### Obtener la API Key y la Client Key

<div class="alert alert-warning">
La información a continuación supone que la API Key y la Client Key se han generado previamente en el entorno de Adyen. En caso de que necesites crearlas, consulta la documentación de <a href="https://docs.adyen.com/">Adyen</a>.
</div>

1. Haz clic en **Developers** en la barra lateral y luego en **API credentials**.
2. Selecciona tu credencial API.
3. En **Server Settings > Authentication**, selecciona **API key**. 

![Adyenv3_2](https://images.ctfassets.net/alneenqid6w5/5y5TAeZmhsKrn2nZTJexIw/bfbe2587739f39fa70c4e1f08e86bd71/Adyenv3_2.PNG)

<blockquote><ui>4. Haz clic en <b>Generate Key</b> y anota la información creada en un lugar seguro.</ui>

<blockquote><ui>5. En <b>Client Settings</b>, haz clic en la pestaña <b>Client Key</b>.

<blockquote><ui>6. Haz clic en <b>Generate Client Key</b> y anota la información creada en un lugar seguro.

![Adyenv3_3](https://images.ctfassets.net/alneenqid6w5/1HlZV1tWNXS4ME0B7LYsHR/ca6b2a69d637574b2885286ccaed30b4/Adyenv3_3.PNG)

### Configura el webhook

La configuración del webhook es necesaria para que Adyen envíe actualizaciones del status del pago a tu cuenta VTEX. Para más información, visita la documentación de [Webhooks](https://docs.adyen.com/development-resources/webhooks) de Adyen.

Configura el webhook según los pasos a continuación:

1. En tu [Área de Cliente](https://ca-test.adyen.com/) en Adyen, accede a **Developers > Webhooks**.
2. Haz clic en el botón azul `+ Webhook`.
3. Selecciona la opción **Standard Webhook** haciendo clic en el botón **Add**.
4. En **General > Description**,  agrega una descripción para el nuevo webhook. Ejemplo: "Webhook Adyen Connector Provider v3".
5. En **General > Server configuration > URL**, introduce la URL de tu cuenta VTEX. Ejemplo: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](https://images.ctfassets.net/alneenqid6w5/1gAXlQfBoEUm5qnfSsHJkl/c18036816afbfe9ed8434d1211679879/Adyenv3_4.PNG)

<blockquote><ui>6. Haz clic en <b>Apply</b>.</ui>

<blockquote><ui>7. En <b>Additional settings</b>, selecciona todas las opciones disponibles y haz clic en <b>Apply</b> en cada pestaña.</ui>

<blockquote><ui>8. Haz clic en <b>Save changes</b>.</ui>

![Adyenv3_5](https://images.ctfassets.net/alneenqid6w5/4dNUcUg9OKni8eT1wXcjO1/19eddc41d854adb8976e6e90ed54589c/Adyenv3_5.PNG)

![Adyenv3_6](https://images.ctfassets.net/alneenqid6w5/2ocxDKULle6hnu2fFPnjfZ/7787ff93f023d3ec17c669758aefb82f/Adyenv3_6.PNG)

![Adyenv3_7](https://images.ctfassets.net/alneenqid6w5/dEbiVnYj1Ic4eYgkSNolQ/79bba40bd6820d29de275e3cab19f22e/Adyenv3_7.PNG)

<div class="alert alert-info">
Si tienes varias tiendas, es necesario configurar el webhook para cada una de ellas.
</div>

## Configurar el conector AdyenV3 en VTEX

1. En el Admin VTEX, ve a **Configuración de la tienda > Pagos > Configuración**, o ingresa **Configuración** na barra de busca no topo da página.
2. En la pestaña **Afiliações de Gateways**, haz clic en el botón `+`.
3. Haz clic en el conector **AdyenV3**.
4. Rellena los siguientes campos con tus datos de Adyen:
    - **Application Key**: el nombre de tu Adyen Merchant Account (paso 3 de la sección [Obtener las credenciales Company y Merchant Account](#obtener-las-credenciales-company-y-merchant-account).
    - **Application Token**: API Key (paso 4 de la sección [Obtener la API Key y la Client Key](#obtener-la-api-key-y-la-client-key)).
    - **Live URL prefix**: URL prefix (paso 2 de la sección [Obtener la Live URL](#obtener-la-live-url)).
    - **Company account**: el nombre de tu Company Account (paso 2 de la sección [Obtener las credenciales Company y Merchant Account](#obtener-las-credenciales-company-y-merchant-account)).
    - **Live POS URL**: no es necesario rellenar este campo (solo aplicable a Sales App). 
    - **Client key**: Client key (paso 6 de la sección [Obtener la API Key y la Client Key](#obtener-la-api-key-y-la-client-key)).

<blockquote><ui> 5. Si aparece un mensaje de alerta indicando la necesidad de instalar la aplicación, haz clic en el botón <b>Instalar aplicación</b> y sigue las instrucciones para hacerlo.</ui>

<blockquote><ui> 6. Haz clic en <b>Guardar</b>.</ui>

![Adyenv3_8](https://images.ctfassets.net/alneenqid6w5/6VHaDn8IejGCUoatLIyUtk/bb93a701e80a942064818a54ac401714/Adyenv3_8.PNG)

Para configurar los medios de pago que procesará AdyenV3, accede a [Condiciones de pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455). Si deseas realizar ventas a través de Sales App, ve a [Configurar pagos con AdyenV3 en Sales App](https://help.vtex.com/es/tutorial/configurar-pagos-con-adyenv3-en-vtex-sales-app--24yO6KloBn6DN6CbprHtgt).

Para establecer condiciones especiales en los medios de pago, ve a [Configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456).

Tras seguir los pasos indicados, el conector AdyenV3 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como opción de pago.
