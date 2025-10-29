---
title: 'Configurar gateway CyberSource IO'
id: 6nhvUTrLxeacsoYG6GkGM
status: PUBLISHED
createdAt: 2018-04-30T17:34:57.517Z
updatedAt: 2025-03-07T13:27:18.752Z
publishedAt: 2025-03-07T13:27:18.752Z
firstPublishedAt: 2018-04-30T20:20:44.704Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-cybersource-gateway
legacySlug: configurar-gateway-cybersource
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Cybersource es una empresa que ofrece varias soluciones para ayudar a gestionar los pagos en su tienda. Entre ellos se encuentran un [gateway](/es/tutorial/que-es-un-gateway-de-pagos--2KH9Wdi7F6swOU4amECSOk) y un [antifraude](/es/tutorial/que-es-antifraude--69SjFCc4rC6Ii0OMAeYAsG), ambos con integraciones disponibles en VTEX.

Si desea obtener más información sobre cómo integrar Cybersource antifraude en su tienda, vaya a [Configurar antifraude CyberSource](/es/tutorial/configurar-antifraude-cybersource--2Z88QmpRAsWmI0qaCo4aQg).

Para utilizar el gateway Cybersource IO en su tienda, se requieren las siguientes acciones:

1. [Instalar aplicaciones Cybersource IO (VTEX IO CLI)](#instalacion-de-aplicaciones-cybersource)
2. [Crear claves de autenticación en Cybersource (entorno Cybersource)](#crear-claves-de-autenticacion-en-cybersource)
3. [Realizar la configuración de la aplicación Cybersource (Admin VTEX)](#configuracion-de-la-aplicacion-cybersource-io)
4. [Configurar el Cybersource gateway (Admin VTEX)](#configuracion-del-gateway-cybersource)
5. [Configurar condiciones de pago (Admin VTEX)](#configurar-condicion-de-pago)
6. [Configurar o Device Fingerprint (opcional)](#configurar-cybersource-io-device-fingerprint-opcional)
7. [Configurar campos de comerciante (opcional)](#configurar-campos-de-comerciante-opcional)

## Instalación de aplicaciones Cybersource

Las siguientes aplicaciones Cybersource deben estar instaladas en su cuenta de tienda:

- __vtex.cybersource-ui__
- __vtex.cybersource__
- __vtex.cybersource-payer-auth__

> ⚠️ Si tiene la intención de utilizar el sistema antifraude de Cybersource, pero desea realizar transacciones de pagos en un gateway que no sea de Cybersource, deberá instalar la aplicación **vtex.cybersource-fraud**.

Conozca más sobre la instalación de aplicaciones en una cuenta VTEX en [Installing an app](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app). 

## Crear claves de autenticación en Cybersource 

Después de instalar las aplicaciones, debe crear claves de autenticación en el entorno Cybersource.

> ⚠️ Las configuraciones realizadas en un ambiente externo a VTEX podrán ser discontinuadas o modificadas sin previo aviso. Consulte su cuenta Cybersource para obtener información actualizada.

Siga los pasos a continuación:

1. Accede al [panel Cybersource EBC](https://businesscenter.cybersource.com/ebc2/) (Enterprise Business Center) con tus datos.
2. En el panel de navegación lateral, seleccione __Payment Configuration > Key Management__.
3. Haga clic en __Generate Key__.
4. En __REST APIs__, seleccione la opción __REST - Shared Secret__.
5. Haga clic en __Generate Key__.
6. Haga clic en __Download key__ o copie la información clave usando la función de copia ubicada frente a los campos __Key__ y __Shared Secret__.

## Configuración de la aplicación Cybersource IO

Con las claves de autenticación disponibles, es hora de configurar la aplicación Cybersource IO en el Admin. 

![Cybersource Admin settings ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-gateway-cybersource_1.JPG)

Siga los pasos a continuación para configurar la aplicación Cybersource IO:

1. En el Admin VTEX, accede a  __Apps > Apps Instaladas > Cybersource__, o escribe __Cybersource__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Admin Settings__, complete o seleccione los campos a continuación:
<br>
<ul>
<br>
    	<li>**Identificación del comerciante**: su ID de comerciante en Cybersource.</li>
    	<li>**Clave de comerciante** y **Clave secreta compartida**: las dos claves obtenidas en el entorno Cybersource.</li>
  <li>**Processor**: seleccione la empresa que procesará el pago o haga clic en **Other** si no está en la lista.</li>
  <li>**Region**: seleccione una de las regiones o haga clic en **Other** si la región deseada no está en la lista.</li>
    	<li>**Sufijo de referencia (opcional)**: por defecto, los pedidos en el sistema Cybersource se asociarán con el ID del grupo de pedidos de VTEX, pero esta configuración se puede utilizar para agregar un sufijo como "-01".</li>
    	<li>**NSU personalizado (opcional)**: anular la NSU predeterminada con un valor personalizado.</li>
    	<li>**Utilice el ID de pedido para la huella digital del dispositivo**: seleccione si desea utilizar el ID del pedido en lugar del ID de la sesión para la toma de huellas digitales del dispositivo.</li>
    	<li>**Habilitar cálculos de impuestos**: seleccione si desea utilizar Cybersource al finalizar la compra como su proveedor de cálculo de impuestos.</li>
    	<li>**Habilitar la publicación de transacciones**: seleccione si desea habilitar la publicación de transacciones completadas para cuestiones de declaración de impuestos.</li>
    	<li>**Canales de venta para excluir de Cybersource (opcional)**: ingrese a cualquier canal de ventas en el que no desee utilizar transacciones de Cybersource.</li>
    	<li>**Código de producto de envío (opcional)**: ingrese un código de producto para fines de cálculo del impuesto de envío.</li>
    	<li>**Regiones de nexo fiscal (opcional)**: ingrese una lista de regiones donde se deben recaudar impuestos.</li>
</ul>
3. Haga clic en __Guardar ajustes__.

## Configuración del gateway Cybersource

Para configurarel gateway Cybersource, siga los pasos a continuación:

1. En el Admin VTEX, accede a  __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba __Cybersource IO__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, No es necesario completar los campos __Clave de aplicación__ y __Token de aplicación__.
5. Si desea modificar el nombre de identificación que se mostrará para el gateway Cybersource en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el gateway en un entorno de prueba haciendo clic __Activar modo de prueba__.
7. En el campo __Liquidación automática__, selecciona una de las siguientes opciones::
<br>
<ul>
<br>
    	<li>**Utiliza comportamiento recomendado por el procesador de pagos**: la captura no es automática, sino que está programada para realizarse a los 4 días (o si el pedido está facturado, lo que ocurra primero).</li>
    	<li>**Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li>**Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>      
   		<li>**Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. En __Campos del proveedor__, complete o seleccione los campos a continuación:
<ul>
<br>
    	<li>**Company Name**: nombre de la compania.</li>
      <li>**Company Tax id**: número de identificación de la empresa.</li>
  <li>**Capture Setting**: seleccione **Delayed Capture** para seguir el procedimiento estándar de la plataforma VTEX (llamadas separadas para autenticación y captura) o **Immediate Capture**, donde se enviará una única llamada de autenticación y captura a CyberSource cuando se realice el pedido.
</li>
    	<li>**Payer Authentication**: si desea habilitar esta opción, [3-D Secure Payer Authentication da Cybersource](https://www.cybersource.com/en/solutions/fraud-and-risk-management/payer-authentication-for-3d-secure.html) debe ser usado.</li>
    	<li>**Capture Delay** y **Capture Delay Interval**: determine el período antes de la captura automática.</li>
    	<li>**Using Decision Manager**: seleccione si [CyberSource Decision Manager](https://www.cybersource.com/apac/en/solutions/fraud-and-risk-management/decision-manager.html) estará activo en su cuenta.</li>
      <li>**Authorized Payments Flagged by Decision Manager**: Cuando el estado Authorized, Fraud Reject, seleccione las siguientes opciones:</li>
      <blockquote><li>**Treat as Successful Authorizations**: aceptar el pedido.</li></blockquote>
      <blockquote><li>**Treat as Failed Authorizations**: negar el pedido.</li></blockquote>
      <blockquote><li>**Treat as Pending Authorizations**: mantener el pedido en espera de una decisión final.</li></blockquote>  
</ul>
9. Los campos __Merchant Id__, __Merchant Key__ y __Shared Secret Key__ debe dejarse en blanco, ya que se utilizarán los valores definidos en el paso 2 de la sección [Configuración de la aplicación Cybersource IO](#configuracion-de-la-aplicacion-cybersource-io).Si los campos se completan con un valor, sobrescribirán la información ingresada en el paso 2.
10. Haga clic en __Guardar__.

## Configurar condición de pago

Para procesar pagos con tarjeta de crédito a través de Cybersource, siga los pasos a continuación:

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón +.
3. Haga clic en el nombre de la tarjeta de crédito deseada.
4. Complete el campo __Nombre de la condición__ con un nombre de su elección para identificación.
5. Active la condición en el campo __Status__.
6. En __Procesar con proveedor__ selecciona la opción __Cybersource - IO__.
7. Si desea utilizar un sistema antifraude, seleccione la opción __Usar antifraude__ y elija su proveedor preferido.
8. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456). 
9. Haga clic en __Guardar__.

> ⚠️ Si anteriormente creó condiciones de pago con tarjeta de crédito para otros gateways (incluido el proveedor Cybersource legado), puede establecer esas condiciones en **Inactivas**. Las transacciones en curso iniciadas desde ese proveedor seguirán siendo procesadas por ese proveedor, incluso si está inactivo. El nuevo proveedor de Cybersource IO solo procesará las transacciones nuevas. Si necesita volver a su proveedor anterior por algún motivo, simplemente establezca sus condiciones de pago en **Activas** y las condiciones de pago de Cybersource IO en **Inactivas**.

## Configurar Cybersource IO Device Fingerprint (opcional)

Device Fingerprint es un identificador que actúa en el procesamiento de un pago, con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción. 

Mediante la recolección de datos no sensibles, Device Fingerprint identifica y analiza el nivel de seguridad del dispositivo utilizado para realizar la transacción, así como las transacciones que se realizaron previamente con este mismo dispositivo.

> ℹ️ Cada tienda debe tener solo un registro de Device fingerprint. Verifique si ya ha registrado el Device Fingerprint en otro conector, antes de continuar con los pasos siguientes.

Para configurar Device Fingerprint Cybersource IO, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Código__.
4. En __Archivos__, haga clic en __checkout5.custom.js__.
5. Ingrese el código a continuación en el campo de texto y haga clic en "Guardar".

```
function addsDeviceFingerPrint() {
  if (!window.vtex) return;
  if (window.vtex.deviceFingerprint) return;
  $.ajax({
    type: 'get',
    async: true,
    url: rootPath() + '/api/sessions?items=*'
  }).then(function(response) {
    var ORG_ID = "{{ORG_ID}}";
    var MERCHANT_ID = "{{MERCHANT_ID}}";
    console.log('session', response);
    window.vtex.deviceFingerprint = response.id;
    var sessionId = response.id || "CYBERSOURCE";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://h.online-metrix.net/fp/tags.js?org_id=${ORG_ID}&session_id=${MERCHANT_ID}${sessionId}`;
    document.head.appendChild(script);
    var noScript = document.createElement("noscript");
    var iframe = document.createElement("iframe");
    iframe.style = "width: 100px; height: 100px; border: 0; position: absolute; top: -5000px;";
    iframe.src = `https://h.online-metrix.net/fp/tags?org_id=${ORG_ID}&session_id=${MERCHANT_ID}${sessionId}`;
    noScript.appendChild(iframe);
    document.body.appendChild(noScript);
  })
}
```
## Configurar campos de comerciante (opcional)

Además, puede definir campos personalizados que se incluirán en los pedidos enviados desde VTEX a Cybersource. 

![Cybersource Admin merchant define fields ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-gateway-cybersource_2.JPG)

Vea a continuación cómo crear estos campos:

1. En el Admin de VTEX, acceda a __Apps > Apps Instaladas > Cybersource__, o escriba __Cybersource__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Campos definidos por el comerciante__, en __Información definida por el comerciante__, puede insertar campos siguiendo las siguientes reglas:
<ul>
<br>
    	<li>Cualquier valor fuera de las claves **{{}}** se considerará como un valor directo.</li>
      <li>Cualquier valor entre **{{}}** debe tener el siguiente formato *Palabra de referencia|Palabra de modificación|Valores*.</li>
      <li>Todas las **palabras de referencia** se pueden encontrar en el menú desplegable **Mostrar todas las palabras referenciables**:</li>
  <blockquote><li>**Palabras de referencia** se pueden dejar en blanco si la **Palabra de modificación** y **Valuores** están presentes.</li></blockquote>
  <blockquote><li>La **palabra de referencia** 
distingue entre mayúsculas y minúsculas.</li></blockquote>
    	<li>**Palabras de modificación** deben ser **Pad**, **Date**, **Trim**, **Age**, o **Equals**. Vea a continuación las características al registrar cada uno de ellos:</li>
      <blockquote><li>**Pad**: los **Valores** deben tener el formato **desired length:fill character**.</li></blockquote>
      <blockquote><blockquote><li>El **filled character** debe ser un valor único. Por ejemplo, *9:x* dará como resultado una longitud deseada de 9 y llenará los espacios con x.</li></blockquote></blockquote>
  <blockquote><blockquote><li>Si el valor del campo excede el **desired length**, el campo se recortará.</li></blockquote></blockquote>         
<br>       
      <blockquote><li>**Date**: **Valores** debe tener el formato dd/MM/aaaa o cualquier combinación de los mismos.</li></blockquote>
      <blockquote><blockquote><li>**M** por mes debe estar en mayúscula. Este formato se puede pedir como se desee, como por ejemplo **aaaa/MM** o **aaaa** o **dd/aaaa/MM**.</li></blockquote></blockquote>
      <blockquote><li>**Trim**: limitará la longitud máxima del valor del campo sin agregar caracteres de relleno.</li></blockquote>
      <blockquote><li>**Age**: devolverá la diferencia entre la fecha actual y el valor del campo usando el formato Timespan.</li></blockquote>
      <blockquote><li>**Equals**: devolverá el valor booleano de una comparación de cadena entre el valor del campo y el valor de comparación.</li></blockquote>
<br>
    	<li>Cada nueva línea se considera un nuevo campo definido por el comerciante.</li>

Ejemplos:

| Valor ingresado en Admin em `Campos definidos por el comerciante`    | Escenario simulado     | Resultado     |
| ---------- | ---------- | ---------- |
| `969{{Reference|PAD|9:0}}`       | Cuando `Reference` es 6023       | 969602300000       |
| `{{OrderId}}-01`       | Donde `OrderId` es 124578       | 124578-01       |
| `{{MiniCart.Buyer.LastName}},{{MiniCart.Buyer.FirstName}}`       | Donde el comprador (`Buyer`) es John Doe       | Doe,John       |     

