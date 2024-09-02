---
title: 'Configurar pagos con AdyenV3 en VTEX Sales App'
id: 24yO6KloBn6DN6CbprHtgt
status: PUBLISHED
createdAt: 2023-05-09T14:12:03.567Z
updatedAt: 2024-07-26T16:55:23.474Z
publishedAt: 2024-07-26T16:55:23.474Z
firstPublishedAt: 2023-05-11T20:30:50.460Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagos-con-adyenv3-en-vtex-sales-app
locale: es
legacySlug: configurar-pagos-con-adyenv3-en-instore
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible integrarse con el proveedor de pago Adyen. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas (VTEX Sales App), utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

>ℹ️ Para utilizar la afiliación AdyenV3 en su tienda a través de otros canales de venta en línea (excepto VTEX Sales App), visite [Configurar pagos con AdyenV3](https://help.vtex.com/es/tutorial/configurar-pagos-con-adyenv3--7xAz67E2Eg63LWCQNjVdwv).

Para utilizar la afiliación AdyenV3 en la VTEX Sales App, es necesario:

- [Configurar punto de venda (POS)](#configurar-punto-de-venda-pos)
- [Configurar el entorno Adyen](#configurar-el-entorno-adyen)
- [Configurar el conector AdyenV3 (VTEX Sales App) en VTEX](#configurar-el-conector-adyenv3-vtex-sales-app-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

>⚠️ La configuración realizada en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Adyen para obtener información actualizada.

## Configurar punto de venda (POS)

El primer paso es configurar sus cuentas Adyen y VTEX para permitir transacciones de pago en el punto de venta (POS). Para realizar estos ajustes acceda a la siguiente documentación:

- [Adyen - Terminal API go-live checklist](https://docs.adyen.com/point-of-sale/get-started/go-live-tapi)
- [VTEX - VTEX Sales App Configuración básica](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO)

## Configurar el entorno Adyen

Los pasos a continuación describen los ajustes mínimos que necesita el conector Adyen para configurarse correctamente. Otras configuraciones personalizadas aplicadas a los clientes, así como la habilitación de medios de pago específicos o funcionalidades específicas de la plataforma, deben realizarse según la documentación de [Adyen](https://docs.adyen.com/).

Para habilitar el acceso de VTEX en el entorno Adyen, sigue los pasos a continuación:

### Obtener las credenciales Company y Merchant Account 

1. Accede a tu [Área de Cliente](https://ca-test.adyen.com/) en Adyen.
2. En la barra lateral izquierda, copia y guarda la información descrita antes de **Company**. Esta es tu Company Account.
3. En la lista de abajo, busca el nombre de la Merchant Account a utilizar (resaltada en blanco). Copia y guarda esta información.

![Adyenv3_1](https://images.ctfassets.net/alneenqid6w5/4BHwn5SIUl6AuiiEjreluk/a7404c85f6fda7f7ccbae66070d0db0d/Adyenv3_1.PNG)

### Obtener la POS Live URL

Esta información hace referencia a los endpoints utilizados por las API de terminales de Adyen en un entorno productivo. Para obtener más información, vaya a [documentación Adyen](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api#cloud).

### Obtener la Live URL prefix

1. En la barra lateral, accede a **Developers > API URLs**.
2. Haz clic en `Copy` en el campo **Prefix** y anota la información guardada en un lugar seguro. Este prefijo controla su terminal en la plataforma Adyen.

### Obtener la API Key

La información a continuación supone que la API Key se ha generado previamente en el entorno de Adyen. En caso de que necesites crearlas, consulta la documentación de [Adyen](https://docs.adyen.com/).

1. Haz clic en **Developers** en la barra lateral y luego e **API credentials**.
2. Selecciona tu credencial API.
3. En **Server Settings > Authentication**, selecciona **API key**. 

![Adyenv3_2](https://images.ctfassets.net/alneenqid6w5/5y5TAeZmhsKrn2nZTJexIw/bfbe2587739f39fa70c4e1f08e86bd71/Adyenv3_2.PNG)

<blockquote><ui>4. Haz clic en <b>Generate Key</b> y anota la información creada en un lugar seguro.</ui>

### Configurar el webhook

La configuración del webhook es necesaria para que Adyen envíe actualizaciones del status del pago a tu cuenta VTEX. Para más información, visita la documentación de [Webhooks](https://docs.adyen.com/development-resources/webhooks) de Adyen.

Configura el webhook según los pasos a continuación:

1. En tu [Área de Cliente](https://ca-test.adyen.com/) en Adyen, accede a **Developers > Webhooks**.
2. Haz clic en el botón azul `+ Webhook`.
3. Selecciona la opción **Standard Webhook** haciendo clic en el botón **Add**.
4. En **General > Description**, agrega una descripción para el nuevo webhook. Ejemplo: "Webhook Adyen Connector Provider v3".
5. En **General > Server configuration > URL**, introduce la URL de tu cuenta VTEX. Ejemplo https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](https://images.ctfassets.net/alneenqid6w5/1gAXlQfBoEUm5qnfSsHJkl/c18036816afbfe9ed8434d1211679879/Adyenv3_4.PNG)

<blockquote><ui>6. Haz clic en <b>Apply</b>.</ui>

<blockquote><ui>7. En <b>Additional settings</b>, selecciona todas las opciones disponibles y haz clic en <b>Apply</b> en cada pestaña.</ui>

<blockquote><ui>8. Haz clic en <b>Save changes</b>.</ui>

![Adyenv3_5](https://images.ctfassets.net/alneenqid6w5/4dNUcUg9OKni8eT1wXcjO1/19eddc41d854adb8976e6e90ed54589c/Adyenv3_5.PNG)

![Adyenv3_6](https://images.ctfassets.net/alneenqid6w5/2ocxDKULle6hnu2fFPnjfZ/7787ff93f023d3ec17c669758aefb82f/Adyenv3_6.PNG)

![Adyenv3_7](https://images.ctfassets.net/alneenqid6w5/dEbiVnYj1Ic4eYgkSNolQ/79bba40bd6820d29de275e3cab19f22e/Adyenv3_7.PNG)

>ℹ️ Si tienes varias tiendas, es necesario configurar el webhook para cada una de ellas.

## Configurar el conector AdyenV3 (VTEX Sales App) en VTEX

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __AdyenV3__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Clave de aplicación__, el nombre de tu Adyen Merchant Account (paso 3 de la sección [Obtener las credenciales Company y Merchant Account](#obtener-las-credenciales-company-y-merchant-account).
5. En __Token de aplicación__, ingrese la clave API (paso 4 de la sección [Obtener la API Key](#obtener-la-api-key)).
6. Si desea modificar el nombre de identificación que se mostrará para el proveedor AdyenV3 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
7. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
8. En __Live URL prefix__, complete el prefijo disponible en el área de clientes de Adyen (paso 2 de la sección [Obtener la Live URL prefix](#obtener-la-live-url-prefix)).
9. En __Company account__, ingrese el nombre de tu company account (paso 2 de la sección [Obtener las credenciales Company y Merchant Account](#obtener-las-credenciales-company-y-merchant-account)).
10. En __Live POS URL__, complete los endpoints utilizados para acceder a las API de terminales de Adyen. Obtenga más información en [documentación de Adyen] (https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api#cloud).
11. No es necesario rellenar el campo __Client key__, ya que sólo es aplicable a otro tipo de canales de venta online.
12. En __Auto Capture Settings__, seleccione cuándo desea capturar el pago.
13. Haga clic en `Guardar`.  

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Venda Direta Debito** o **Venda Direta Credito**.
4. En **Procesar con afiliación**, seleccione el conector previamente configurado.
5. Active la condición en el campo **Status**.
6. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
8. Haga clic en `Guardar`.

After completing these steps, the AdyenV3 Connector may take up to 10 minutes to appear as a payment option in your store's VTEX Sales App.

Tras seguir los pasos indicados, el conector AdyenV3 puede tardar hasta 10 minutos para aparecer como opción de pago en la App Ventas VTEX de su tienda.
