---
title: 'Configurar Mercado Pago Transparente'
id: frequentlyAskedQuestions_487
status: DRAFT
createdAt: 2017-04-27T22:35:31.234Z
updatedAt: 2019-12-31T14:24:22.200Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:01:47.269Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_84
slug: como-configurar-mercado-pago-transparente
legacySlug: 
---

La configuración de Mercado Pago Transparente es ligeiramente diferente de las demás porque se requiere una configuración en Google TagManager, además de las configuraciones habituales. Por lo tanto, antes de realizar las configuraciones aqui debajo, realice la configuración de la [afiliação de gateway](/es/tutorial/afiliacoes-de-gateway/) MercadoPago Transparente (__MercadoPagoV1__) y de las [condições de pagamento](/es/tutorial/condicoes-de-pagamento/) (banderas de tarjetas).

_Las configuraciones documentadas en este artículo son realizadas en un ambiente fuera de VTEX, por lo tanto, pueden estar desactualizadas._

## Creando la primera tag

Estas configuraciones deben ser realizadas en su Google TagManager.

1. Haga click en la opción **Tag** y en **Nuevo**;
2. Escoja el producto **Tag HTML Personalizada**;
3. Inserte el siguiente script:`<form><input type='hidden' id='deviceId' name='deviceId'></form><script src="https://secure.mlstatic.com/org-img/checkout/custom/0.6/threat_metrix.js"></script>`
4. Marque la opción **Soporte para document.write**;
5. En **Dispara En**, selecione la opción **Mas** y haga click en **Nuevo**;
6. Inserte un nombre para este control y escoja el evento tipo **Evento Personalizado**;
7. En **Disparar En**, coloque un nombre para este evento, escoja la opción exhibición de página y configuro los siguiente: **url contém. /checkout**
8. Guarde el control;
9. Haga click en el botón **Crear Tag**, coloque un nombre para esta tag y guarde.

![](//images.contentful.com/alneenqid6w5/YndMcdc0aAw2GKYU0EyU2/c917ac451cfeb262d8354164c6caa285/MercadoPagoTransparente_1_PT.gif)

## Creando la segunda tag

Estas configuraciones deben ser realizadas en su Google TagManager.

1. Haga click en la opción **Tag** y en **Nuevo**;
2. Escoja **Tag HTML Personalizada**;
3. Inserte el siguiente script:`<script>window.vtex.deviceFingerprint = $("#deviceId").val()</script>`
4. Marque La opción **Soporte para document.write**;
5. En **Dispara En**, seleccione la opción **Mas** y haga click en **Nuevo**;
6. Inserte un nombre para este control y escoja el evento tipo **Evento Personalizado**;
7. En **Disparar En**, coloque un nombre para este evento y configure lo siguiente: **event es igual a payment;**
8. Guarde el control;
9. Haga click en el botón **Crear Tag**, inserte un nombre para esta tag y Guarde;
10. En el margen superior derecho, haga click en **Publicar** y luego también en **Publicar.**

![](//images.contentful.com/alneenqid6w5/32NgyD7KNqicqiASoIUEkK/892ab0a77b4bf2295dcb72d6335de49e/MercadoPagoTransparente_2_PT.gif)
