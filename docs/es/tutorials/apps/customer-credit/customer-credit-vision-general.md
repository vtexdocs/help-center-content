---
title: 'Customer Credit - Visión General'
id: 1uIqTjWxIIIEW0COMg4uE0
status: PUBLISHED
createdAt: 2018-11-08T17:11:28.486Z
updatedAt: 2024-02-09T21:37:56.199Z
publishedAt: 2024-02-09T21:37:56.199Z
firstPublishedAt: 2018-11-08T19:14:39.491Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slugEN: customer-credit-overview
legacySlug: credit-control-vision-general
locale: es
subcategoryId: 7EWKfPIGfmI0G8iMYK8Aiy
---

Customer Credit es la aplicación de VTEX que permite a una tienda ofrecer crédito exclusivo a sus clientes de confianza, aumentando el poder adquisitivo al permitir un mayor plazo de pago de los pedidos.

## Cuándo utilizar

Los modelos de negocio que tienen una relación comercial consolidada con sus clientes generalmente requieren de un sistema de gestión de crédito que permita la emisión de facturas sin comprometer el flujo de caja de la empresa.

La aprobación de estos tipo de pagos en plataformas de comercio electrónico generalmente requiere un esfuerzo de aprobación manual pedido por pedido, incluso para aquellos clientes que ya tienen crédito disponible.

Los comercios que realizan transacciones comerciales B2B, como distribuidores de red minoristas, venta directa a revendedores, artículos de oficina para empresas o insumos industriales, pueden utilizar Customer Credit para ofrecer una experiencia de compras y pago de cuotas integrada con la plataforma VTEX.

## Cómo funciona

A través de VTEX Admin o [API de Customer Credit](https://developers.vtex.com/docs/api-reference/customer-credit-api), es posible realizar las siguientes acciones en la aplicación Customer Credit:

- Crear y administrar cuentas para clientes elegidos.
- Establecer límites de crédito y tolerancias para cada cuenta.
- Configurar plazos y cuotas para documentos de facturas.
- Monitorear y modificar el status de las facturas emitidas.

> ℹ️ Cuando se instala, el Customer Credit aparece como una opción de pago en el momento del pago solo para los clientes seleccionados por el administrador de la tiend, y muestra la cantidad de crédito disponible para usar en la compra.

Vea a continuación el flujo básico de cómo funciona el Customer Credit en las tiendas VTEX:

![GIF_CC_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/apps/customer-credit/customer-credit-vision-general_1.gif)

## Definiciones en Customer Credit

### Cuenta (Cuenta de Customer Credit)

Para utilizar Customer Credit como medio de pago de una compra, el cliente debe tener una cuenta registrada por el administrador de la tienda en la aplicación Customer Credit. Esta cuenta tiene información como tipo y número de documento del titular, correo electrónico, límite de crédito y tolerancia.

### Limite de crédito

Cada cuenta tiene un límite de crédito registrado al momento de su apertura. Este límite indica el monto máximo que el cliente puede utilizar para realizar una o más compras al mismo tiempo a través de Customer Credit.

> ⚠️ El administrador de la tienda puede cambiar el límite de crédito de una cuenta en cualquier momento.

### Crédito disponible

Monto que el cliente aún tiene disponible en su cuenta para realizar compras a través de Customer Credit.

Cada vez que el cliente completa una compra y se factura el pedido, la cantidad de crédito disponible disminuye. Sin embargo, después de que el cliente realiza el pago de la factura emitida, el valor del crédito disponible vuelve al valor previo a la compra.

> ⚠️ En el momento de una compra, el cliente tiene visibilidad de cuánto crédito puede utilizar a través del Customer Credit. Si el valor de la compra es mayor que el crédito disponible, no se podrá realizar el pago a través de Customer Credit.

### Factura

Factura es el documento que se genera luego de que el cliente realiza una compra utilizando Customer Credit como medio de pago y se factura el pedido.

En los casos de compras a plazos, los títulos se generan según el número de cuotas. Por ejemplo, una compra realizada con pago en 10 cuotas sobre Customer Credit generará 10 facturas relacionadas con el mismo número de pedido.

### Plazos y cuotas

Customer Credit permite a los administradores de tiendas configurar diferentes condiciones de pago y escenarios de cuotas para ofrecer una mayor flexibilidad de pago a los clientes registrados.

### Preautorización y liquidación

Luego de que el cliente realiza la compra utilizando Customer Credit, el pago se aprueba como crédito y la plataforma preautoriza el monto, reservándolo automáticamente después de 5 días hábiles o hasta que se facture el pedido. En este punto, se liquida el importe de la cuenta y se generan las facturas.

El flujo en Customer Credit es similar al de las tarjetas de crédito en relación a las modificaciones de pedidos. Cuando se produce un cambio en el valor del pedido durante el período de preautorización, el monto del crédito cambia.

> ⚠️ Si es necesario cambiar una orden para reducir su valor después del período de liquidación (emisión de facturas), el sistema actualizará las facturas al nuevo valor. Si el valor del pedido aumenta, el sistema creará nuevas facturas.

## Instalacion y configuracion

Para instalar y configurar Customer Credit en su tienda, acceda a Track [Customer Credit - Cómo Empezar](https://help.vtex.com/es/tracks/customer-credit-como-empezar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).
