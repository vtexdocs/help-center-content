---
title: 'Emisión parcial de la factura cambia la fecha de autorización del pago'
id: 3kjzXJNFj2miIeIMAW6uW2
status: PUBLISHED
createdAt: 2017-04-06T17:10:46.252Z
updatedAt: 2022-12-22T14:50:45.991Z
publishedAt: 2022-12-22T14:50:45.991Z
firstPublishedAt: 2017-05-26T19:37:55.792Z
contentType: knownIssue
productTeam: Post-purchase
author: D0eIlynYFqaWQOMM6mmY6
tag: Order Management
slug: emision-parcial-de-la-factura-cambia-la-fecha-de-autorizacion-del-pago
kiStatus: Backlog
internalReference: 
---

## Sumario

Nuestro sistema de Workflow actualmente es utilizado por él mismo, pero también por el Checkout. Esto genera una competencia dentro del sistema y en algunas situaciones - estamos hablando de muy pocas - algún dato del pedido no queda registrado. No es que no exista, pero a lo largo del flujo fue ignorado y/o reemplazado. Estamos hablando del status `payment-approved`.

Con la emisión de la nota parcial, el OMS debe consultar el Workflow para saber si se ha alcanzado el valor total de la nota. En ese momento el pedido vuelve al status de `payment-approved` pero el flujo de trabajo perdió el primer status - el que se generó en la fecha de aprobación del pago en el PCI (usted puede consultar en la transacción). Luego se inserta esa última fecha, cambiando así el campo fecha de la aprobación del pago.

En el caso de que se produzca la modificación después del mes en que el pago se aprobó originalmente, el pedido pasará a figurar dentro del período de compromiso del nuevo mes a nivel de cobro. El cliente acaba siendo cobrado nuevamente por esa solicitud, ya que el ingreso considerado para el cálculo del valor de la factura depende de la Fecha de Autorización de los pedidos.

## Simulación

- Acceder al módulo OMS
- Colocar el filtro de fecha de autorización del mes que desea consultar (en el que se produjo la emisión parcial de nota)
- Buscar por el código de la aplicación y anotar el valor (1)
- Encontrarlo
- Colocar el filtro de fecha de autorización del mes en el que se haya aprobado el pedido
- Comprobar el valor de ingreso calculado (2)
- Acceder al módulo Billing
- Entrar en detalles de la factura del mes en que el pedido realmente fue aprobado
- Ver el valor de los ingresos considerados como consumo (3)
- Eliminar la diferencia entre los valores 2 y 3 (4)
- Comprobar si el valor (1) y el valor (4) son iguales
- En caso positivo, el pedido se está cobrando en duplicidad

## Workaround

Lo ideal es que esta emisión parcial de nota no se realice en el mes siguiente a la aprobación del pago. Si ocurre, es necesario ponerse en contacto con el time financiero de VTEX, para que el problema sea verificado y se conceda un descuento en el mismo valor que fue cobrado en duplicidad por el pedido.

