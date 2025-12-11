---
title: 'Tipos de liquidación de pagos'
id:
status: PUBLISHED
createdAt: 2025-12-10T00:00:00.001Z
updatedAt: 2025-12-10T00:00:00.001Z
publishedAt: 2025-12-10T00:00:00.001Z
firstPublishedAt: 2025-12-10T00:00:00.001Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: payment-settlement-types
legacySlug: tipos-de-liquidacion-de-pagos
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

> ⚠️ Esta función está en versión beta cerrada, lo que significa que solo clientes específicos pueden acceder a ella en este momento. Si desea implementarlo en el futuro, comuníquese con nuestro [Soporte](https://support.vtex.com/hc/es-419/).

Cuando un cliente finaliza una compra en una tienda VTEX, se genera un número de pedido y se procesa el pago. Después de esta etapa, la liquidación del pago, también conocida como captura, puede ocurrir de tres formas:

- Total
- Retenida
- Parcial

Cada una de ellas impacta la forma en que el gateway de pagos de VTEX transfiere los valores al proveedor de pago.

A continuación, se presenta un ejemplo de pedido con un valor de 100 USD y el proceso de liquidación en cada escenario:

## Liquidación total

En este modelo, el retailer emite una factura con el valor total del pedido (100 USD) o con [valor parcial](https://help.vtex.com/es/docs/tracks/facturas-parciales#envio-de-la-factura-parcial-via-admin) (por ejemplo, 50 USD).

El sistema [Pedidos](https://help.vtex.com/es/docs/tutorials/pedidos-categoria) solicita al gateway de pago de VTEX la liquidación del valor correspondiente a la factura emitida (100 USD o 50 USD) y el gateway pasa el valor total del pedido (100 USD) al proveedor de pago sin considerar el valor incluido en la factura.


## Liquidación retenida

En este flujo, el retailer emite una [factura parcial](https://help.vtex.com/es/docs/tracks/facturas-parciales). Utilizando el mismo ejemplo, en este caso la factura tendría un valor de 70 USD. El sistema Pedidos solicita la liquidación del valor, pero el gateway retiene esa cantidad, es decir, no la transfiere al proveedor de pago hasta que se complete el resto del valor del pedido (30 USD) con otras facturas. Cuando los valores de las solicitudes parciales igualen el valor total de la transacción (100 USD), el gateway envía el valor al proveedor.

## Liquidación parcial

En este flujo, cuando el retailer emite una [factura parcial](https://help.vtex.com/es/docs/tracks/facturas-parciales) (por ejemplo, 60 USD), el sistema Pedidos solicita la liquidación del valor correspondiente y el gateway automáticamente transfiere los 60 USD al proveedor de pago.

A medida que se agregan nuevas facturas, el gateway liquida los valores restantes (hasta 40 USD, en este ejemplo), de forma proporcional y automática.

> ⚠️ Solo el flujo de liquidación **Total** está activado en todas las cuentas VTEX de forma predeterminada. Si deseas utilizar los flujos de liquidación **Retenida** o **Parcial** en tu tienda, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/pt).

## Cómo identificar la liquidación parcial de un pedido

Para identificar si un pedido siguió el flujo de liquidación parcial, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Transacciones** o ingresa **Transacciones** en la barra de búsqueda en la parte superior de la página.
2. Busca o haz clic en la transacción deseada.
3. En la casilla principal de datos de pago del pedido, verifica si la información de liquidaciones parciales está presente.

![Liquidacion de pagos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/liquidacion-parcial-de-pagos-1.png)

4. En **Eventos de la transacción**, confirma la liquidación **Parcial** mediante los registros de este tipo de evento.

![Liquidacion de pagos 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/liquidacion-parcial-de-pagos-2.png)
