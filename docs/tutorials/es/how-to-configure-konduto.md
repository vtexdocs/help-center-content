---
title: Configurar Konduto
id: tutorials_3125
status: PUBLISHED
createdAt: 2017-04-27T21:52:18.180Z
updatedAt: 2023-03-30T16:09:33.630Z
publishedAt: 2023-03-30T16:09:33.630Z
firstPublishedAt: 2017-04-27T23:03:55.168Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: configurar-konduto
legacySlug: configurar-konduto
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Konduto es un antifraude, sistema externo que analiza las compras realizadas a fin de evitar fraudes.

Este antifraude depende de configuraciones diferentes a los [demás antifraudes que pueden configurarse en su plataforma](http://help.vtex.com/es/tutorial/como-configurar-antifraude/), pues recogen información de navegación y de dispositivo del visitante. Por esta razón, este artículo tiene como objetivo documentar la configuración del Konduto.

## Configure su GTM

GTM es el Google Tag Manager, una herramienta de Google que realiza administración de tags en el site. Ese GTM es entonces asociado en su cuenta e inserta todas las tags configuradas en él en su site. [Vea más detalles sobre cómo configurar el GTM en su tienda](http://help.vtex.com/es/faq/integracion-con-google-tag-manager/).

### Cree la variable

El primer paso es la configuración de la variable. El nombre de la variable debe ser `kondutoId`, pues es el valor indicado en el script a continuación. La variable debe ser del tipo **permanente**. En el valor de la variable, inserte el _public_key_ informado por Konduto &#8211; cada tienda posee un id único.

### Configure la tag

En su cuenta GTM, cree la tag, tipo **html personalizado** con el script a continuación.

```
<script>var __kdt = __kdt || [];__kdt.push({"public_key":"kondutoId"});__kdt.push({"post_on_load": false});(function() { var kdt = document.createElement('script');kdt.id = 'kdtjs';kdt.type = 'text/javascript';kdt.async = true;kdt.src = 'https://i.k-analytix.com/k.js';var s = document.getElementsByTagName('body')[0]; s.parentNode.insertBefore(kdt, s); })();$(function() {var period = 300;var limit = 20 * 1e3;var nTry = 0;var intervalID = setInterval(function() {var clear = limit/period <= ++nTry;if (typeof(Konduto.sendEvent) !== "undefined") {setKondutoFingerPrint();clear = true;}if (clear) { clearInterval(intervalID); }}, period);}); var setKondutoFingerPrint = function(){ var kdtFP = Konduto.getVisitorID(); window.vtex.deviceFingerprint = kdtFP; Konduto.sendEvent('page','checkout'); }</script>
```

## Configure la afiliación de gateway

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Acceda **Afiliaciones de Gateways** y haga clic en **+**.
3. Buscar por el Antifraude **Konduto.**
4. Llenar el formulario con los datos indicados por el antifraude.

## Configure la(s) forma(s) de pago

Para vincular el **Konduto** a una forma de pago:

1. Acceda a la pestaña **Condiciones de pago**.
2. Haga clic en la condición deseada o [Configurar condiciones de pago](http://help.vtex.com/es/tutorial/condiciones-de-pago)
3. Seleccione la opción **Usar antifraude**.
4. Seleccione el **Konduto**.
