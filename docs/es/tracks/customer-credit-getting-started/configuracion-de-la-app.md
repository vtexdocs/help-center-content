---
title: ' Configurar el Customer Credit'
id: 21ok0GBwmcIeaY2IukYMOg
status: PUBLISHED
createdAt: 2018-11-07T17:11:22.823Z
updatedAt: 2024-02-08T18:03:14.738Z
publishedAt: 2024-02-08T18:03:14.738Z
firstPublishedAt: 2018-11-07T17:23:16.520Z
contentType: trackArticle
productTeam: Financial
slugEN: setting-up-the-app
locale: es
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugES: customer-credit-como-empezar
---

Después de instalar la aplicación del Customer Credit, debe realizar las siguientes configuraciones:

- [Primer acceso](#configuracion-de-primer-acceso)
- [App](#configuracion-de-app) 
- [Condiciones de pago](#condiciones-de-pago)

## Configuración de primer acceso

Para realizar la configuración inicial del Customer Credit, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Apps > Customer Credit > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la sección __Pendiente__, es posible que se muestren una o más de las configuraciones enumeradas a continuación:
<br>
<ul>
<br>
    	<li><b>Habilitar emails transaccionales en el Centro de mensajes</b>: haga clic en <b>Habilitar</b> para instalar las plantillas de correo electrónico transaccional relacionadas con el Customer Credit en <a href="https://help.vtex.com/pt/tutorial/conhecendo-o-message-center--tutorials_84">Message Center</a>.</li>
    	<li><b>Configurar las condiciones de pago del checkout</b>: haga clic en <b>Configurar</b> para permitirle definir la fecha límite y las reglas de pago de la tienda.</li>
  	<li><b>Afiliación no autenticada todavía</b>: haga clic en <b>Autenticar</b> para ser redirigido a la pantalla de configuración donde deberás completar la información <b>Application Key</b> y <b>Application Token</b>. Esta acción permitirá que los pagos realizados a través de Customer Credit se procesen en su tienda. Obtenga más información en <a href="https://developers.vtex.com/docs/guides/authentication">Autenticación</a>.</li>
</ul>

![CC Configuracion 1 ES](https://images.ctfassets.net/alneenqid6w5/6cDl5QeEatvpLW3kYxV7Yd/7e7102273c6ef79723ff3124d3aab727/CC_Configuracion_1_ES.JPG)

## Configuración de app

Luego, aún en la misma pantalla de VTEX Admin (__Apps > Customer Credit > Configuración__), debes verificar las siguientes opciones de configuración:

- [Tolerancia](#tolerancia)
- [Creación automática de cuenta](#creacion-automática-de-cuenta) 
- [Página Mis créditos](#pagina-mis-creditos)
- [Instrucciones de pago](#instrucciones-de-pago)
- [Información de identificación](#informacion-de-identificacion)

### Tolerancia

Activar esta opción permite completar una compra incluso si su valor excede el límite de crédito disponible del cliente. Al crear una cuenta, es posible registrar un porcentaje de exceso de crédito (tolerancia) para cada cliente.

Por ejemplo, para una cuenta creada con un límite de crédito de $1.000,00 y una tolerancia del 10%, el cliente podrá realizar un pedido con un valor máximo de $1.100,00 utilizando Customer Credit como método de pago. Si el cliente desea utilizar el crédito para pagar un pedido por valor de $1.250,00, el sistema no permitirá completar la compra.

>⚠️ Los valores de tolerancia se configuran en números decimales, donde 0 representa el 0% y 1 representa el 100%. Ejemplo: para utilizar una tolerancia del 5%, el valor a configurar es 0,05.

![CC_Configuracion_2_ES](//images.ctfassets.net/alneenqid6w5/3kjEQ2OblMKqwumNWSFnSt/c87641a0ebdb835abfb632fcc2ebff90/CC_Configuracion_2_ES.JPG)

### Creación automática de cuenta

Esta opción permite que cualquier cliente de la tienda utilice Customer Credit como método de pago, incluso si no ha creado previamente una cuenta para ellos en la aplicación Customer Credit . Al activar esta funcionalidad, también deberás definir el límite de crédito inicial que se puede utilizar para los pedidos realizados por clientes sin una cuenta de Customer Credit .

![CC_Configurações_3_ES](//images.ctfassets.net/alneenqid6w5/1TX1ArtNwm8toa84UqNCHZ/7ff9a5cbdb0e164891c5da0931add045/CC_Configuracion_3_ES.JPG)

### Página Mis créditos

Al instalar la página __Mis créditos__, permitirá a los clientes ver y administrar información sobre los créditos y facturas disponibles en su cuenta.

El cliente puede acceder a esta página en el sitio web de su tienda en __Mi Cuenta > Mis Créditos__.

![CC_Configuracion_4_ES](//images.ctfassets.net/alneenqid6w5/59SuH9h84mmgaHmcDB2Bbl/72cff75048d2ac6bb609169f73bb9c49/CC_Configuracion_4_ES.JPG)

### Instrucciones de pago 

Esta configuración permite insertar instrucciones relacionadas con el pago en las facturas emitidas por Customer Credit. Para editar el mensaje que se mostrará en la factura, ingrese la información en el cuadro de texto y haga clic en `Actualizar`.

>⚠️ El mensaje registrado en esta configuración se replicará en todos las facturas emitidas para todas las cuentas de clientes de Customer Credit. No es posible configurar un mensaje único para cada cliente o factura específica.

![CC_Configuracion_5_ES](//images.ctfassets.net/alneenqid6w5/6UkZi827KKQqH8Yk1mmPKj/791355858bde3d7fa86eaa8b142b56e9/CC_Configuracion_5_ES.JPG)

### Información de identificación

Esta opción le permite seleccionar qué información de identificación de la tienda debe mostrarse en la parte superior de las facturas emitidas.

![CC_Configuracion_6_ES](//images.ctfassets.net/alneenqid6w5/6ADAtBnrZQS6sCzkwPSqFt/cda6ab4a6232705bfb4323be12fc93bb/CC_Configuracion_6_ES.JPG)

![CC_Configuration_8_ES](//images.ctfassets.net/alneenqid6w5/54WcXTGpAGppAyGxxoa8gx/708d343130c21d3c308ea058e4414c5c/CC_Configuration_8_ES.JPG)

## Condiciones de pago 

Una vez que se completa la configuración del Customer Credit, es necesario indicar qué opciones de plazo y cuotas estarán disponibles para mostrarse a los clientes en la pantalla de Checkout.

Para crear condiciones de pago para títulos de Customer Credit, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Seleccione la opción __Customer Credit__.
4. Complete el campo __Nombre de la condición__ con un nombre de su elección para identificación.
5. Active la condición en el campo __Status__.
6. En __Configura las condiciones de plazo y de pago en cuotas__, indique el número de cuotas, el plazo de vencimiento (en días) y la tasa de interés simple a aplicar a cada cuota. Para crear más de una condición de pago, haga clic en `Agregar nueva regla`.

![CC_Configuration_9_ES](//images.ctfassets.net/alneenqid6w5/3P3JMnSiAPXNprYvgaNFNh/35c2d14c21c1e10aba4ac95f49fc3354/CC_Configuration_9_ES.JPG)

<blockquote><ui>7. Si lo deseas también puedes <a href="https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456">Configurar condiciones especiales de pago</a>.</ui>

<blockquote><ui>8. Clic en <b>Guardar</b>.</ui>

>⚠️ No es posible establecer una tasa de interés para una condición de pago creada con una sola cuota.
