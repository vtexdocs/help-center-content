---
title: 'Configurar un dispositivo para impresión de pedidos '
id: 18nqy9Hr9AUBNF0WTvpTyT
status: ARCHIVED
createdAt: 2019-11-12T21:42:11.589Z
updatedAt: 2021-08-24T20:46:59.498Z
publishedAt: 
firstPublishedAt: 2019-11-25T12:43:17.689Z
contentType: trackArticle
productTeam: Shopping
slugEN: how-to-configure-a-device-for-printout-the-order
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

Dentro de las opciones que ofrece **inStore** al momento de completar una venta, se encuentra una que permite imprimir el resumen del pedido.

![ES-Venda confirmada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/como-configurar-un-dispositivo-para-impresion-de-pedidos_1.png)

Para configurar esta opción, serán necesarios dos pequeños pasos:
  1. Por el Admin VTEX, active la opción de configuración del dispositivo en el menú inStore.
  2. En inStore, configure el dispositivo de impresora. 

## Active la opción de configuración del dispositivo en el menú inStore

Hoy, esta configuración está presente en el administrador del portal, más específicamente en el archivo **checkout-instore-custom.js**. Como este archivo es un JavaScript presente en varias secuencias de uso de la aplicación, es importante que tenga conocimientos de programación antes de alterarlo, para evitar la ruptura de otros recursos.

Para habilitar la opción _“Configurar dispositivo”_, debe encontrar el objeto **_window.INSTORE_CONFIG_** presente en este archivo y agregar la propiedad **_configureDeviceEnabled_** con el valor **_true_** y también agregar el objeto **_printingConfig_** a la propiedad **_printByBroker_** con el valor true, para que inStore permita utilizar la propiedad opción dentro del menú, como se muestra en la imagen de ejemplo a continuación:


![ES-Configurar dispositivo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/como-configurar-un-dispositivo-para-impresion-de-pedidos_2.png)

No elimine ninguna de las otras propiedades presentes en este objeto, pero el resultado debería ser algo como:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true 
      }
}``

>ℹ️ **NOTA**: Existe una opción para imprimir de forma automática el resumen del pedido, tan pronto sea completado el pedido. La configuración es muy sencilla, basta agregar la propiedad **<i>printPageAutomatically</i>** con el valor **<i>true</i>** dentro del objeto **<i>printingConfig</i>**.

No elimine ninguna de las otras propiedades presentes en este objeto, pero el resultado debería ser algo como:

``window.INSTORE_CONFIG = {
configureDeviceEnabled: true,
      printingConfig: { 
            printByBroker: true,
printPageAutomatically: true 
      }
}``

## Configurar dispositivo de impresora en inStore

>⚠️ **IMPORTANTE**: Para la configuración de la impresora en inStore, es necesario tener **<i>AppKey</i>** y **<i>AppToken</i>** con permisos de al menos un perfil como <i>“Vendedor inStore (inStore Sales Person)”</i>. Vale aclarar que puede ser utilizado un perfil de <i>“Propietario (administrador super)”</i>.

  1. Conecte la impresora al equipo donde se encuentre instalado inStore (para descargar inStore, acceda a [http://instore.vtex.com/download]). Recordando que debe ser una computadora con sistema operativo Windows (Windows 7 o superior son compatibles).
  2. Abra la aplicación inStore y entre a la tienda donde desea configurar la impresora.
  3. En el menú de inStore, en el bloque de “Configuraciones”, deberá aparecer la opción “Configurar dispositivo”. Haga clic allí.

![ES-Barra inStore](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/como-configurar-un-dispositivo-para-impresion-de-pedidos_3.png)

  4. Va a encontrar el resumen del dispositivo configurado. En caso de que sea la primera vez, las informaciones estarán vacías o, si ya se ha configurado un dispositivo previamente, van a aparecer algunas informaciones sobre el dispositivo _(Nombre del dispositivo e Impresora estándar)_. Haga clic en la opción “Editar”.

![ES-Dispositivo via Broadcast](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/instore-setup/como-configurar-un-dispositivo-para-impresion-de-pedidos_4.png)

  5. Aparecerá un formulario indicando los datos de _AppKey_,  _AppToken_ y el nombre con el que desee identificar el dispositivo. Luego de ingresar estos datos, haga clic en “Configurar”.
  6. Por último, al incluir los datos anteriores, será posible seleccionar la impresora en la lista de opciones. La idea es que sea seleccionada una de esas opciones y haga clic en “Configurar” nuevamente.

Al completar estos requisitos, podrá ahora realizar la impresión del resumen de sus pedidos en inStore. 
