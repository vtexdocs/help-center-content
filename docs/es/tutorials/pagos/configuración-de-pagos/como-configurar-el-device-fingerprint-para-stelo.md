---
title: 'Configurar el device fingerprint para Stelo'
id: frequentlyAskedQuestions_3533
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.535Z
updatedAt: 2021-12-09T19:45:47.415Z
publishedAt: 2021-12-09T19:45:47.415Z
firstPublishedAt: 2019-01-24T22:00:42.453Z
contentType: tutorial
productTeam: Financial
author: authors_24
slugEN: how-to-configure-the-fingerprint-device-for-stelo
legacySlug: como-configurar-el-device-fingerprint-para-stelo
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ es un identificador que actúa en el procesamiento de un pago, con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción. 

Mediante la recolección de datos no sensibles, Device Fingerprint identifica y analiza el nivel de seguridad del dispositivo utilizado para realizar la transacción, así como las transacciones que se realizaron previamente con este mismo dispositivo.

> ℹ️ Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de continuar con los pasos siguientes.

En este artículo, explicaremos cómo asociar Device Fingerprint con la afiliación Stelo.

> ℹ️ Las configuraciones documentadas en este artículo se realizan en un ambiente exterior a VTEX. Por lo tanto, pueden estar desactualizadas.

Para insertar los scripts que exige Stelo al device fingerprint, es necessário usar el Google Tag Manager. Para ello, haga login en su cuenta en [http://www.google.com/tagmanager](http://www.google.com/tagmanager). Después, siga los pasos a continuación:

1. En el menú inicial del Google Tag Manager, haga clic en **Nova tag**;
2. Seleccione ** Configuração da tag ** y elija el tipo **HTML personalizado**.![Tela1](//images.contentful.com/alneenqid6w5/2VjcP3lQ9aqceC82kgaAU8/68bffad6d79e91e7286c780ac16fffc7/Tela1.jpg);

Entonces, inserte el script a continuación:

```
<iframe id="iframeCyber" src="https://carteirac1.hml.stelo.com.br/transaction/transfer?idUnico={{deviceId}}" width="0" marginwidth="0" height="0" marginheight="0" frameborder="0">
</iframe>
<script> 
$(document).ready(function(){
var src = document.getElementById("iframeCyber").src;
regex = /=(.*)$/;
var match = regex.exec(src);
window.vtex.deviceFingerprint = match[1];
}); 
</script>
```

Después, siga los pasos a continuación:

1. Haga clic en **Acionamento**, Novo acionador (símbolo de **+** en la esquina superior derecha) y en ** Configuração do acionador.**![Tela2](//images.contentful.com/alneenqid6w5/6uwEr6KGJyOCcigIMCcUoS/4142ad24f3121bee1fea9d55069d10a6/Tela2.jpg);
2. Elija el tipo **Evento personalizado** e inserte el nombre **payment**;
3. Seleccione la flag **Alguns eventos personalizados**;
4. En las dos primeras cajas abajo, seleccione: **Event** y **é igual a**. En la tercera, escriba **payment**.![Tela3](//images.contentful.com/alneenqid6w5/5sbXgbm4g0yysWKSwmYWI0/e7d605639093f30aff58bff0efef2ae4/Tela3.jpg)
5. Guarde el accionador y la tag;
6. En el menú lateral, haga clic en la opción **Variables** y después en **Nueva**;
7. Haga clic en **Configuração da variável** y elija el tipo **JavaScript personalizado**;![Tela4](//images.contentful.com/alneenqid6w5/3I7Eq6Jt2wkYg6EoKAkCqC/91cca1c81534bbbc76e70db8f94be13a/Tela4.jpg)

Finalmente, inserte el script a continuación:

```
function guid() {
   function s4() {
     return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
   return s4() + s4() + s4();
}
```

Finalmente, guarde la variable y haga clic en **Publicar** para que se vuelvan efectivas las modificaciones.
