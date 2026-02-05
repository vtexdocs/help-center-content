---
title: 'Configurar el Customer Credit'
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
trackSlugEN: customer-credit-como-empezar
order: 2
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
    	<li>**Habilitar emails transaccionales en el Centro de mensajes**: haga clic en **Habilitar** para instalar las plantillas de correo electrónico transaccional relacionadas con el Customer Credit en [Message Center](/es/docs/tutorials/como-funciona-el-message-center).</li>
    	<li>**Configurar las condiciones de pago del checkout**: haga clic en **Configurar** para permitirle definir la fecha límite y las reglas de pago de la tienda.</li>
  	<li>**Afiliación no autenticada todavía**: haga clic en **Autenticar** para ser redirigido a la pantalla de configuración donde deberás completar la información **Application Key** y **Application Token**. Esta acción permitirá que los pagos realizados a través de Customer Credit se procesen en su tienda. Obtenga más información en [Autenticación](https://developers.vtex.com/docs/guides/authentication).</li>
</ul>

![CC Configuracion 1 ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_1.JPG)

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

> ⚠️ Los valores de tolerancia se configuran en números decimales, donde 0 representa el 0% y 1 representa el 100%. Ejemplo: para utilizar una tolerancia del 5%, el valor a configurar es 0,05.

![CC_Configuracion_2_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_2.JPG)

### Creación automática de cuenta

Esta opción permite que cualquier cliente de la tienda utilice Customer Credit como método de pago, incluso si no ha creado previamente una cuenta para ellos en la aplicación Customer Credit . Al activar esta funcionalidad, también deberás definir el límite de crédito inicial que se puede utilizar para los pedidos realizados por clientes sin una cuenta de Customer Credit .

![CC_Configurações_3_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_3.JPG)

### Página Mis créditos

Al instalar la página __Mis créditos__, permitirá a los clientes ver y administrar información sobre los créditos y facturas disponibles en su cuenta.

El cliente puede acceder a esta página en el sitio web de su tienda en __Mi Cuenta > Mis Créditos__.

![CC_Configuracion_4_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_4.JPG)

### Instrucciones de pago 

Esta configuración permite insertar instrucciones relacionadas con el pago en las facturas emitidas por Customer Credit. Para editar el mensaje que se mostrará en la factura, ingrese la información en el cuadro de texto y haga clic en `Actualizar`.

> ⚠️ El mensaje registrado en esta configuración se replicará en todos las facturas emitidas para todas las cuentas de clientes de Customer Credit. No es posible configurar un mensaje único para cada cliente o factura específica.

![CC_Configuracion_5_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_5.JPG)

### Información de identificación

Esta opción le permite seleccionar qué información de identificación de la tienda debe mostrarse en la parte superior de las facturas emitidas.

![CC_Configuracion_6_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_6.JPG)

![CC_Configuration_8_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_7.JPG)

## Condiciones de pago 

Una vez que se completa la configuración del Customer Credit, es necesario indicar qué opciones de plazo y cuotas estarán disponibles para mostrarse a los clientes en la pantalla de Checkout.

Para crear condiciones de pago para títulos de Customer Credit, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Seleccione la opción __Customer Credit__.
4. Complete el campo __Nombre de la condición__ con un nombre de su elección para identificación.
5. Active la condición en el campo __Status__.
6. En __Configura las condiciones de plazo y de pago en cuotas__, indique el número de cuotas, el plazo de vencimiento (en días) y la tasa de interés simple a aplicar a cada cuota. Para crear más de una condición de pago, haga clic en `Agregar nueva regla`.

![CC_Configuration_9_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/soluciones-de-pago/customer-credit-como-empezar/configuracion-de-la-app_8.JPG)

<blockquote><ui>7. Si lo deseas también puedes [Configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).</ui>

<blockquote><ui>8. Clic en **Guardar**.</ui>

> ⚠️ No es posible establecer una tasa de interés para una condición de pago creada con una sola cuota.
