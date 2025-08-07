---
title: 'Configurar tiempo máximo para la liquidación automática'
id: 7dwcaxrcgcFJUk7umqPBw2
status: PUBLISHED
createdAt: 2020-09-22T11:49:41.297Z
updatedAt: 2025-01-17T17:10:02.532Z
publishedAt: 2025-01-17T17:10:02.532Z
firstPublishedAt: 2020-09-22T14:37:14.174Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configuring-maximum-automatic-payment-settlement-time-frame
legacySlug: configurar-tiempo-maximo-para-la-captura-automatica
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En primer lugar, es importante comprender la diferencia entre tres conceptos similares utilizados por los proveedores de pagos en la plataforma: __liquidación de facturación__, __liquidación automática__ y __liquidación anticipada__. 

<div class="alert alert-warning">
La siguiente información es válida para los pagos con tarjeta de crédito.
</div>

## liquidación por facturación
La liquidación por facturación es una de las etapas del [flujo de la transacción](https://help.vtex.com/es/tutorial/flujo-de-la-transaccion-en-pagos--Er2oWmqPIWWyeIy4IoEoQ), el proceso interno de VTEX que ocurre después de que un cliente realiza el pago de un pedido.

Cuando se factura el pedido, momento en el que los productos están listos para ser enviados a la transportadora, el gateway de pagos realiza la liquidación. Esto sucede porque la facturación del pedido indica que el pago fue realizado correctamente.

## Liquidación anticipada

La liquidación anticipada es un recurso opcional que permite al administrador de la tienda establecer que la liquidación del pago se realice antes que la captura automática realizada por VTEX.

Además, es importante destacar que la captura anticipada solo se producirá después del análisis del proveedor de antifraude, en los casos en que el cliente cuente con este.

## Liquidación automática

Si los dos primeros tipos de liquidación no funcionan, la liquidación automática garantizará que la autorización del pago sea procesada por el sistema.

Cuando el proceso de autorización inicia, el sistema espera un tiempo máximo, previamente programado, para realizar la liquidación automática. Este plazo no incluye el periodo de validaciones del proveedor de antifraude, si este servicio está involucrado en el proceso.

El administrador de la tienda y el adquirente establecen el límite de tiempo para que se active la liquidación automática.

<div class="alert alert-info">
Generalmente, el tiempo máximo predeterminado para que la liquidación ocurra es de cuatro días. Sin embargo, esto <strong>no</strong> es una regla. Cada adquirente puede definir el tiempo que considere más apropiado.
</div>

Para configurar esta liquidación, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre del proveedor en la barra de búsqueda y haga clic en él.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta con el proveedor.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor deseado en la pantalla de VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. Complete los campos disponibles en el formulario.
7. En el campo __Captura anticipada__, seleccione una de las opciones de tiempo disponibles. 
8. Rellene el  campo __Cambiar el tiempo máximo de captura automática__ con el periodo acordado con el adquirente. Si usted prefiere dejar el campo en blanco, se utilizará el estándar de 4 días.
9. Haga clic en `Guardar`.
