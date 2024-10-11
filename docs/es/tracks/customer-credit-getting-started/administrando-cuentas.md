---
title: 'Gestionar cuentas en Customer Credit'
id: 4eknoeqaj6EGC20amsm6Gc
status: PUBLISHED
createdAt: 2018-11-06T21:15:25.330Z
updatedAt: 2024-02-27T19:44:55.522Z
publishedAt: 2024-02-27T19:44:55.522Z
firstPublishedAt: 2018-11-07T17:10:45.883Z
contentType: trackArticle
productTeam: Financial
slugEN: managing-accounts
locale: es
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugES: customer-credit-como-empezar
---

A través de la pantalla de cuentas en el Admin de VTEX (__Apps > Customer Credit > Cuentas__), puede acceder a la información de todas las cuentas registradas en la aplicación Customer Credit de su tienda. 

Al hacer clic en el nombre de una cuenta específica, la pantalla __Detalles de la cuenta__ mostrará los siguientes datos:

- [Información del titular](#titular)
- [Status de crédito](#status)
- [Facturas emitidas](#facturas)
- [Extractos de utilización](#extractos)
- [Dependientes adicionales](#dependientes-adicionales)
- [Cierre de cuenta](#cierre-de-cuenta)
<br>
<br>
![Cuenta_ES](https://images.ctfassets.net/alneenqid6w5/3Wu6HcL5NbC5XS5YdiF3Dx/4ee2770f072e2cbd60d80045423ad427/Contas_ES.png)

## Titular

Presenta información sobre el estado de la cuenta (activa, inactiva), código de identificación, documento registrado y correo electrónico del titular, fechas de apertura de la cuenta y última actualización de datos.

## Status

Muestra el monto de crédito disponible para que el cliente lo utilice en compras y el monto total a pagar (en facturas) por compras ya realizadas utilizando Customer Credit como medio de pago.

>⚠️ Cuando el cliente realiza una compra utilizando Customer Credit, pero aún no hay factura para el pedido, el campo **Crédito reservado** también se muestra en esta pantalla que contiene información sobre el valor del pedido.

## Gestionar

Indica el monto máximo de crédito otorgado al cliente y la tolerancia a utilizar en las compras. Estos valores se pueden editar en cualquier momento.

## Facturas

Listado que contiene la siguiente información sobre todos los valores emitidos en compras realizadas por el cliente:

- Fecha de vencimento
- Observación (mensaje específico para una factura)
- Id del pedido
- Valor de la factura
- Status de la factura (Abierto, Pagado, Cancelado, Vencido)

## Extractos

Muestra un informe de todas las transacciones de pago y factura realizadas para el cliente durante un período seleccionado.

## Dependientes adicionales

La funcionalidad __Dependientes adicionales__ permite al cliente compartir créditos disponibles para compras con otras personas registradas en la cuenta.

Para registrar un nuevo dependiente, siga los pasos a continuación:

1. Dentro de la cuenta del cliente, en __Dependientes adicionales__, haga clic en "NUEVO".
2. Ingrese el correo electrónico de la persona que se agregará como dependiente en la cuenta del cliente.
3. Haga clic en "CONFIRMAR".

A partir de este momento, el cliente y su dependiente podrán compartir el monto en __Crédito disponible__ para realizar sus compras a través de Customer Credit.

## Cierre de cuenta

Si desea cerrar la cuenta del cliente, en la sección __Otro__, haga clic en `CERRAR CUENTA`.

>⚠️ Una cuenta de Customer Credit cerrada no se puede volver a abrir y se eliminarán la factura, el status de cuenta y los datos adicionales de los dependientes. Sin embargo, luego de completar el cierre de cuenta, si lo desea, puede [abrir una nueva cuenta](https://help.vtex.com/es/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU#crear-cuentas-individualmente) para el cliente utilizando el mismo correo electrónico que la cuenta cerrada.
