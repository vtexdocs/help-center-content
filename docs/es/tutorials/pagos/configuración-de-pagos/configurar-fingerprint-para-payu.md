---
title: 'Configurar FingerPrint para PayU'
id: 4Gim58iszSuoqW2884gsu8
status: PUBLISHED
createdAt: 2017-07-19T14:43:16.588Z
updatedAt: 2025-09-04T15:20:22.089Z
publishedAt: 2025-09-04T15:20:22.089Z
firstPublishedAt: 2017-07-19T15:04:05.008Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-fingerprint-for-payu
legacySlug: configurar-fingerprint-para-payu
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ es un identificador que actúa en el procesamiento de un pago, con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción. 

Mediante la recolección de datos no sensibles, Device Fingerprint identifica y analiza el nivel de seguridad del dispositivo utilizado para realizar la transacción, así como las transacciones que se realizaron previamente con este mismo dispositivo.

> ℹ️ Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de continuar con los pasos siguientes.

En este artículo, explicaremos cómo asociar Device Fingerprint con la afiliación PayU.

> ℹ️ Las configuraciones documentadas en este artículo se realizan en un ambiente externo a VTEX. Por lo tanto, pueden estar desactualizadas.

1. Hacer login en http://www.google.com/tagmanager/ para la tienda que vamos a configurar;
2. Ingresar al apartado etiquetas (tags) para configurar el device sesión id;
3. Crear un producto de “HTML Personalizado” como se en la siguiente imagen:
  ![payU 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_1.png)
4. En el campo HTML de la configuración debemos pegar el código HTML que manda a llamar el código para mandar la información a PayU:

```
<script src="/arquivos/md5.js"></script>

<script>
       function getCookie(cname) {
       var name = cname + "=";
       var ca = document.cookie.split(';');
       for(var i=0; i<ca.length; i++) {
               var c = ca[i].trim();
               if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
       }
       return "";
   }
   function microtime(get_as_float) {
       var now = new Date().getTime() / 1000;
       var s = parseInt(now, 10);

       return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
   }

   vtexjs.checkout.getOrderForm().done(function(orderForm){ // hala el valor de userProfileId
       var uid = getCookie('VtexIdclientAutCookie') + orderForm.userProfileId;
       var deviceSessionId = CryptoJS.MD5(uid+microtime());
       console.log("dsid: "+deviceSessionId);

       window.vtex.deviceFingerprint = deviceSessionId;

       console.log("fingerprint: "+window.vtex.deviceFingerprint);

       document.getElementById('gtm').innerHTML = '<p style="background:url(https://maf.pagosonline.net/ws/fp?id='+deviceSessionId+'80200)">'+'<img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-fingerprint-para-payu_1.png"+deviceSessionId+'80200">';
       document.getElementById('maf').innerHTML = '<object type="application/x-shockwave-flash" data="https://maf.pagosonline.net/ws/fp/fp.swf?id='+deviceSessionId+'80200" width="1" height="1" id="thm_fp"><param name="movie" value="https://maf.pagosonline.net/ws/fp/fp.swf?id='+deviceSessionId+'80200" /></object>';

       var pol_script = document.createElement('script');
       pol_script.type = 'text/javascript';
       pol_script.src = 'https://maf.pagosonline.net/ws/fp/check.js?id='+deviceSessionId+'80200';
       document.getElementById("gtm").appendChild(pol_script);
   }); // JavaScript Document
</script>

<div id="gtm"></div>
<div id="maf"></div>
```

![payU 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_2.png)

Después hay que realizar la configuración avanzada tal cual está en la siguiente imagen:
  ![payU 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_3.png)

Para configurar el evento, siga los pasos abajo:

1. Entrar en la pestaña More:
  ![payU 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_4.png)
2. Crear un evento personalizado:
  ![payU 5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_5.png)
3. Llenarlo de la siguiente manera:
  ![payU 6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_6.png)
4. Guardamos el evento y posteriormente le damos guardar a la etiqueta (tag):
  ![payU 7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_7.png)
5. Una vez que ya se guardó la etiqueta es necesario publicarla:
  ![payU 8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_8.png)

Una vez que ya configuramos la etiqueta tenemos que guardar el JS que se manda a llamar desde el código. Este se guarda dentro del gestor de archivo de VTEX. Para hacerlo es necesario seguir los siguientes pasos:

- Acceder al panel VTEX en el menú CMS >> Diseño >> Administrador de archivos >> Administración de archivos .js >> Agregar.

__Anexo__: [md5.js](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/es/tutorials/pagos/configuración-de-pagos/md5.js)

### Validación

Para hacer la validación es necesario ingresar en la tienda, hacer todo el proceso de compra. Una vez que lleguemos a la forma de pago validamos que se esté ejecutando el JS:

1. Dar click con el botón derecho en el botón de compra
2. Seleccionar Inspeccionar Elemento
3. Hacer la búsqueda de la palabra MAF

Si el resultado se encuentra quiere decir que la configuración esta correcta y el Fingerprint se están mandando correctamente, aquí un ejemplo:

![payU 9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-fingerprint-para-payu_9.png)
