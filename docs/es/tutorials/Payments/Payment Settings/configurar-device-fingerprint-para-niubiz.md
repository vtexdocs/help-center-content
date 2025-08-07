---
title: 'Configurar Device Fingerprint para Niubiz'
id: opa2M7CHVjCzlEY95nexP
status: PUBLISHED
createdAt: 2021-01-07T14:05:56.827Z
updatedAt: 2023-03-23T15:32:49.504Z
publishedAt: 2023-03-23T15:32:49.504Z
firstPublishedAt: 2021-01-07T15:34:38.735Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-device-fingerprint-for-niubiz
locale: es
legacySlug: configurar-device-fingerprint-para-niubz
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

__Device Fingerprint__ es un identificador que actúa en el procesamiento de un pago, con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción. 

Mediante la recolección de datos no sensibles, Device Fingerprint identifica y analiza el nivel de seguridad del dispositivo utilizado para realizar la transacción, así como las transacciones que se realizaron previamente con este mismo dispositivo.

<div class="alert alert-info">
Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de continuar con los pasos siguientes.
</div>

En este artículo, explicaremos cómo asociar Device Fingerprint con la afiliación Niubiz.  

Para ello, es necesario generar un identificador a través de [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/ "Google Tag Manager") y luego asociarlo a la afiliación a través del Admin.

### Crear el identificador

<div class="alert alert-info">
Las instrucciones para esta etapa del artículo se realizan en un ambiente externo. Por lo tanto, pueden estar desactualizadas.
</div>

En primer lugar, tendrá que crear el identificador.

Dicho esto, consulte las instrucciones:

1. Inicie sesión en su __cuenta__ de __Google Tag Manager__.
2. En el menú de inicio, haga clic en __la pestaña "Tags"__.
3. Luego, seleccione la __opción "Configuración de la etiqueta"__.
4. En tipos de etiquetas, seleccione la __opción "HTML Personalizado"__.
5. Rellene el campo con el siguiente __código javascript__.
    ```    
    <script>
    window.vtex.deviceFingerprint = getuuid() ;
    console.log('fingerprint: '+window.vtex.deviceFingerprint);
    initDFP(window.vtex.deviceFingerprint);
    var localSessionId = null;
    function doProfile(orgId, sessionId, hostname){
    console.log('Starting profile using ' + hostname + ' for orgId ' + orgId + ' with sessionId ' + sessionId + ' on ' + Math.floor(Date.now() / 1000));
    var head = document.getElementsByTagName("head").item(0);
    var url = "https://" + hostname + "/tags.js?org_id=" + orgId + "&session_id=" + sessionId + "&page_id=1&allow_reprofile=1";
    console.log(url);
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    head.appendChild(script); console.log('Profile should have started...');
    body = document.getElementsByTagName("body").item(0);
    noscript = document.createElement("noscript");
    iframe = document.createElement("iframe");
    iframe.setAttribute("style", "width: 100px; height: 100px; border: 0; position:absolute; top: -5000px;");
    iframe.setAttribute("src", url);
    noscript.appendChild(iframe);
    body.insertBefore(noscript, body.childNodes[0]);
    }
    function initDFP(sessionId) {
    localSessionId = sessionId;
    console.log('Init profiling ', Math.floor(Date.now() / 1000))
    var timeout = 3000;
    var sasOrgId = "507f9ifk";
    var csOrgId = "1snn5n9w";
    var merchantId = "vndp";
    var hostname = "h.online-metrix.net/fp"; 
    doProfile(sasOrgId, sessionId, "m.vnforapps.com");
    setTimeout(startOnTimer(sessionId) , timeout); }
    function startOnTimer(sessionId) {
    var csOrgId = "1snn5n9w";
    var merchantId = "vndp";
    var hostname = "h.online-metrix.net/fp";
    doProfile(csOrgId, merchantId + sessionId, hostname); }
    function getuuid() {
    var dt=new Date().getTime();
    var uuid='xxxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,function(c){
          var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
    return uuid;
    }
    function tmx_profiling_complete(sessionId) {
      console.log('Finished ', sessionId, '-', Math.floor(Date.now() / 1000));
    }
    </script>
    ```
6. En la sección __"Configuración avanzada"__, deje los __valores en vacíos__.
7. Haga clic en __Activadores__.
8. Seleccione la __opción "Evento personalizado"__.
9. Rellene el campo __"Nombre del evento" con el__ __valor ".*"__.
10. Haga clic en la __casilla de selección "Utilizar una expresión regular que coincida con"__.
11. En "Este activador se activa en", haga clic en la opción __"Algunos eventos personalizados"__.
12. G__uarde__ los ajustes y publíquelos.

De esta forma, Google Tag Manager creará el identificador. 

<div class="alert alert-warning">
Anote el ID en un lugar donde no lo vaya a perder.
</div>

###  Configuración en el Admin de VTEX 

Ahora que usted tiene en manos el ID, deberá asociarlo a la afiliación Niubiz en el Admin.

Realice el siguiente procedimiento:

1. En el Admin VTEX, accede a **configuración de la tienda > Storefront > Checkout**, o escribe **Checkout** en la barra de búsqueda en la parte superior de la página.
3. En el recuadro de configuración "Default", haga clic en el __botón de engranaje azul__.
4. En la parte superior de la página, haga clic en la __pestaña "Checkout"__.
5. Rellene el campo "Google Tag Manager" con el __ID recién generado__.
6. Haga clic en el __botón azul "Guardar"__.
