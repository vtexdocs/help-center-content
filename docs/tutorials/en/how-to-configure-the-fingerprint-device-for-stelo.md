---
title: 'Setting the device fingerprint up for Stelo'
id: frequentlyAskedQuestions_3533
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.535Z
updatedAt: 2021-12-09T19:45:47.415Z
publishedAt: 2021-12-09T19:45:47.415Z
firstPublishedAt: 2019-01-24T22:00:42.453Z
contentType: tutorial
productTeam: Financial
author: authors_24
slug: how-to-configure-the-fingerprint-device-for-stelo
legacySlug: how-to-configure-the-fingerprint-device-for-stelo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ is an identifier that acts in payment processing to improve fraud risk analysis. 

By collecting non-sensitive data, Device Fingerprint identifies and analyzes the security level of the device used to perform a given transaction. It also analyzes transactions previously performed with that device.

<div class="alert alert-info">
Each store must have only one Device Fingerprint registered. Check if you have already registered the Device Fingerprint in another connector, before proceeding with the steps below.
</div>

This article will explain how to associate the Device Fingerprint feature with the Stelo affiliation.

<div class="alert alert-info">
The configurations documented in this article are done in an environment outside VTEX. They may therefore be out of date.
</div>

To enter the scripts that Stelo requires for the fingerprint device, you must use Google Tag Manager. To do this, log into your account at [http://www.google.com/tagmanager](http://www.google.com/tagmanager "http://www.google.com/tagmanager"). Then proceed as follows:

1. In the opening menu in Google Tag Manager, click on **Nova tag**.
2. Select **Configuração da tag** and then type **HTML personalizado**.![Tela1](//images.contentful.com/alneenqid6w5/2VjcP3lQ9aqceC82kgaAU8/68bffad6d79e91e7286c780ac16fffc7/Tela1.jpg)
3. Enter the following script:

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

1. Click on **Acionamento**, Novo acionador (**+** symbol in the top right corner) and on **Configuração do acionador.**![Tela2](//images.contentful.com/alneenqid6w5/6uwEr6KGJyOCcigIMCcUoS/4142ad24f3121bee1fea9d55069d10a6/Tela2.jpg)
2. Select **Evento personalizado** and enter the name **payment**.
2. Select the flag **Alguns eventos personalizados**.
3. In the first two boxes underneath, select: **Event** and **é igual a**. In the third one, type **payment**.![Tela3](//images.contentful.com/alneenqid6w5/5sbXgbm4g0yysWKSwmYWI0/e7d605639093f30aff58bff0efef2ae4/Tela3.jpg)
4. Save the trigger and the tag.
5. In the side menu, click on **Variáveis** and then **Nova**.
6. Click on **Configuração da variável** and select **JavaScript personalizado**.![Tela4](//images.contentful.com/alneenqid6w5/3I7Eq6Jt2wkYg6EoKAkCqC/91cca1c81534bbbc76e70db8f94be13a/Tela4.jpg)

Enter the following script:

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

Save the variable and click on **Publicar** for the changes to take effect.
