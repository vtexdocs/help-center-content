---
title: 'Cómo obtener la integración ERedeREST'
id: 2r1QrTNvraM266KKwKucwI
status: ARCHIVED
createdAt: 2018-04-12T14:42:38.177Z
updatedAt: 2022-12-23T20:19:41.339Z
publishedAt: 
firstPublishedAt: 2018-04-12T15:15:34.194Z
contentType: tutorial
productTeam: Channels
author: 72qloUCfZuqoIaeiG4OsY
slugEN: new-integration-with-erede-erederest
locale: es
legacySlug: nueva-integracion-con-erede-erederest
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Las tiendas VTEX pueden utilizar la última integración de ERede. Llamada ERedeREST, admite medios de pago con pre-autorización, como: __Visa__, __Mastercard__, __American Express__, __Diners__, __Hipercard__, __JCB__ y __Credz__.

La bandera __Elo__ es la única que no soporta pre-autorización.

## Cómo realizar la integración

Para configurar la nueva versión, primero usted debe solicitar a Rede la activación del producto __ERede__ en la versión __REST__.

Una vez notificado, acceda al menú __e.Rede > Ajustes > Generar token__.

![GerarToken](https://images.ctfassets.net/alneenqid6w5/2W5UP5c9EIwe4Ayaa8kk0k/835f7771328d57ae7ed764fbcbf340aa/GerarToken.png)

A continuación, basta con hacer clic en el botón de __Gerar Token__.

![GerarToken Click](//images.ctfassets.net/alneenqid6w5/36eVS4dU3CMa0qqiuaaICg/5e2e2f8e9bba46837ad973914c40d222/GerarToken_Click.png)

Con eso, usted podrá ver el token que deberá ser informado en el formulario de configuración de la afiliación de gateway ERedeRest. Además del token, usted también necesitará informar el PV, que es el número de identificación del establecimiento en el sitio de Rede.

Para hacer esta configuración en VTEX, 

1. En el menú de Admin, acceda __Pagamentos__;
2. En __Configuración__, acceda __Afiliaciones__;
3. Haga clic en el botón verde __+__ _Quiero recibir pagos por este conector..._ y busque el conector __ERedeRest.__

![erederestES](//images.ctfassets.net/alneenqid6w5/33o1Nwlo0geAy2yIUkUuG4/92c3a9d28f7bc35ca9f5652dc2679fe9/erederestES.jpg) 

![erederestES-config](//images.ctfassets.net/alneenqid6w5/tTuJ0rmx44aggkAssQSsi/63f9539d9db6bdf6bb73276be63c5fa8/erederestES-config.jpg)

![PegarPV](//images.ctfassets.net/alneenqid6w5/5YuBm2nzkQ8oeqmGKGwUOy/fbadf9ac541985fce57139e764a4d0ed/PegarPV.png)

Este nuevo conector ofrece una serie de opciones de configuración, entre ellas está el soporte al ApplePay.
