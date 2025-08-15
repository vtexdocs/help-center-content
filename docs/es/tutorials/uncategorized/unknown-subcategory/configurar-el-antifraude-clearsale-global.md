---
title: 'Configurar el antifraude ClearSale Global'
id: 2vJNhRDEKf1w79m2MYfEWw
status: PUBLISHED
createdAt: 2021-07-06T18:05:33.325Z
updatedAt: 2021-10-04T11:49:49.414Z
publishedAt: 2021-10-04T11:49:49.414Z
firstPublishedAt: 2021-07-06T18:27:48.978Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-clearsale-global-anti-fraud-solution
legacySlug: configurar-el-antifraude-clearsale-global
locale: es
subcategoryId: 
---

ClearSale Global es una solución antifraude, disponible exclusivamente para el mercado internacional. Mediante el análisis del comportamiento de los clientes, la solución identifica las vulnerabilidades y previene posibles fraudes en las transacciones de su tienda.

> ℹ️ Si está en Brasil y quiere usar ClearSale, VTEX ofrece integración con ClearSale V3, exclusiva para clientes brasileños. Acceda al tutorial [Configurar antifraude ClearSale v3](https://help.vtex.com/es/tutorial/configurar-antifraude-clearsale-v3--2pPORygesIqQOa6cIG6agg?&utm_source=autocomplete) para realizar la configuración.

Para configurar ClearSale Global, deberá:

1. [Configurar el antifraude ClearSale Global](#configurar-el-antifraude-clearsale-global)
2. [Configurar Google Tag Manager](#configurar-google-tag-manager)
3. [Vincular ClearSale Global con una condición de pago](#vincular-clearsale-global-con-una-condicion-de-pago)

## Configurar el antifraude ClearSale Global

1. Inicie sesión en el __Admin__ VTEX.
2. Haga clic en __Pagos > Configuración__.
3. En __Afiliaciones__, haga clic en el ícono verde «__+__».
4. En la sección __Antifraudes__, seleccione __ClearSaleGlobal__.
5. Complete los siguientes campos con las informaciones que ClearSale le ha enviado por email.<br><br>
<ul>
  <li>**Application key e Application token.</li>**
  <li>**Enable Risk Pre-Analysis.** (Actualmente solo disponible para México).</li>
<li>**API Key.</li>**
<li>**AnalysisLocation.</li>**
 </ul>
  </li>
</ul>
6. Cuando haya terminado de rellenar los campos, proceda a guardarlos.

## Configurar Google Tag Manager

1. Haga clic [aquí](http://tagmanager.google.com)  y acceda a Google Tag Manager.
2. En el panel de inicio, haga clic en __Tag__ y luego en __Nuevo__.
3. Elegir el producto __Tag HTML Personalizada__.
4. Insertar el siguiente script, sustituyendo `su_id_de_usuario`por tu identificador enviado por ClearSale via email (entre comillas simples).  
```
<script>
    var deviceFingerprintIdCSV4 = 10000000 + Math.floor(Math.random() * 99999999);
    (function (a, b, c, d, e, f, g) {
    a['CsdpObject'] = e; a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date(); f = b.createElement(c),
    g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', 'su_id_de_usuario');
    csdp('sessionid', deviceFingerprintIdCSV4);
    window.vtex.deviceFingerprint = deviceFingerprintIdCSV4;
</script>
```
  <ui>5. Marcar la opción **Soporte para document.write**.</ui>
<br>  
  <ui>6. En **Dispara En**, seleccionar la opción **Más** y hacer clic en **Nuevo**.</ui>
<br>  
  <ui>7. Insertar un nombre para este accionador y elegir el evento tipo **Evento Personalizado**.</ui>
<br>  
  <ui>8. En **Disparar En**, establezca el nombre del evento como **payment**.</ui>
<br>  
  <ui>9. Guardar el accionador.</ui>
<br>  
  <ui>10. Hacer clic on el botón <b>Crear Tag</br>, insertar un nombre para esta tag y guardar.</ui>
<br>  
  <ui>11. En la esquina superior derecha, hacer clic en <b>Publicar</br>.</ui>

![Fingerprint ClearSalve_Pantalla](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/uncategorized/unknown-subcategory/configurar-el-antifraude-clearsale-global_1.png)

Para más detalles sobre el código introducido en Google Tag Manager, recomendamos leer [esta documentación](https://api.clearsale.com.br/docs/behavior-analytics) de ClearSale.

## Vincular ClearSale Global con una condición de pago

ClearSale Global realizará un análisis antifraude de las transacciones si está asociada a las condiciones de pago de su tienda. Para ello, realice las siguientes instrucciones:

1. Inicie sesión en el __Admin__ VTEX.
2. Acceda al módulo de __Pagos__.
3. Haga clic en __Configuración__.
4. En __Planes de pago__, haga clic en la condición deseada, o siga el tutorial [Configurar una condición de pago](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) para crear una nueva condición.
5. Asegúrese de que la condición de pago está __Activada__.
6. Después de seleccionar o crear una nueva condición, active la opción __Usar Antifraude__.
7. Seleccione la opción __ClearSale Global__.
8. Haga clic en __Guardar__.

Después de estos ajustes, ClearSale Global estará lista para ser utilizada en su tienda.

