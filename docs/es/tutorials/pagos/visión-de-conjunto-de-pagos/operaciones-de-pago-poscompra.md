---
title: 'Operaciones de pago poscompra'
id:
status: PUBLISHED
createdAt: 2025-12-15T00:00:00.00Z
updatedAt: 2025-12-15T00:00:00.00Z
publishedAt: 2025-12-15T00:00:00.00Z
firstPublishedAt: 22025-12-15T00:00:00.00Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: post-purchase-payment-operations
legacySlug: operaciones-de-pago-poscompra
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---
Las operaciones de pago poscompra ocurren después de la aprobación del pedido y pueden ser de tres tipos: liquidación, cancelación y reembolso.

El comportamiento de estas operaciones depende del modo de procesamiento configurado para cada conector en el gateway de VTEX, que puede ser:

- [Modo Total](#modo-total)
- [Modo Hold](#modo-hold)
- [Modo Parcial](#modo-parcial)

> ℹ️ Una misma cuenta (tienda) puede tener conectores configurados con diferentes modos dentro del gateway de VTEX, por ejemplo, un conector en **modo parcial** y otro en **modo hold**. Cuando en una transacción se utilizan varios conectores con modos diferentes, como **hold** y **parcial**, el sistema ajusta automáticamente el comportamiento al **modo total**, garantizando la consistencia y la integridad del proceso de pago.

## Información general de los modos de procesamiento

La siguiente tabla presenta el comportamiento general de cada operación según el modo configurado:


| Operación | Modo Total | Modo Hold | Modo Parcial |
| :---: | :--- | :--- | :--- |
| **Liquidación** | Siempre envía al conector la solicitud para liquidar el valor total del pedido, aunque el retailer haya solicitado un valor inferior al total. | Mantiene internamente las solicitudes por valores inferiores al total. Envía la solicitud de liquidación al conector solo cuando se alcanza el valor total. | Envía al conector exactamente el valor solicitado en cada operación de liquidación. |
| **Cancelación** | Mantiene internamente las solicitudes de cancelaciones parciales. Envía la solicitud de cancelación al conector solo cuando se alcanza el valor total. | Mantiene internamente las solicitudes de cancelaciones parciales. Envía la solicitud de cancelación al conector solo cuando se alcanza el valor total. | Envía al conector exactamente el valor solicitado en cada operación de cancelación. |
| **Reembolso** | Envía al conector exactamente el valor solicitado en cada operación de reembolso. | Envía al conector exactamente el valor solicitado en cada operación de reembolso. | Envía al conector exactamente el valor solicitado en cada operación de reembolso. |

> ⚠️ El modo seleccionado para cada conector determina de forma consistente el comportamiento de las operaciones de liquidación, cancelación y reembolso. No es posible combinar comportamientos de modos diferentes en un mismo conector simultáneamente.

## Flujo de las operaciones por modo

Los siguientes ejemplos y diagramas demuestran cómo cada modo de procesamiento actúa en las operaciones de liquidación, cancelación y reembolso. Para facilitar la comprensión, todos los ejemplos se basan en un pedido con un valor de 100 USD.

> ⚠️ El **modo total** es el comportamiento predeterminado adoptado en las tiendas VTEX. Si los modos **hold** o **parcial** son más adecuados para tu estrategia de negocio, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex) para solicitar el cambio de la configuración de tu tienda.

## Modo Total

### Liquidación

1. El retailer solicita al gateway la liquidación de 20 USD
2. El gateway solicita al conector la liquidación de 100 USD
3. El retailer solicita al gateway la liquidación del valor restante del pedido (80 USD)
4. El gateway no se comunica con el conector, puesto que ya se ha solicitado el valor total del pedido

![Total mode liquidacion](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/total-mode-liquidacion.png)

### Cancelación

1. El retailer solicita al gateway la cancelación de 20 USD
2. El gateway no se comunica con el conector
3. El retailer solicita al gateway la cancelación del valor restante del pedido (80 USD)
4. El gateway solicita al conector la cancelación de 100 USD

![Total mode cancelacion](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/total-mode-cancelacion.png)

### Reembolso

1. El retailer solicita al gateway el reembolso de 20 USD
2. El gateway solicita al conector el reembolso de 20 USD
3. El retailer solicita al gateway el reembolso del valor restante del pedido (80 USD)
4. El gateway solicita al conector el reembolso del valor restante del pedido (80 USD)

![Total mode reembolso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/total-mode-reembolso.png)

> ℹ️ El conector solo realiza una operación de reembolso si el valor solicitado ya hubiera sido liquidado anteriormente.


## Modo Hold

### Liquidación

1. El retailer solicita al gateway la liquidación de 20 USD
2. El gateway no se comunica con el conector
3. El retailer solicita al gateway la liquidación del valor restante del pedido (80 USD)
4. El gateway solicita al conector la liquidación de 100 USD

![Hold mode liquidacion](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/hold-mode-liquidacion.png)

### Cancelación

**Ejemplo 1**: cancelación del valor total del pedido

1. El retailer solicita al gateway la cancelación de 20 USD
2. El gateway no se comunica con el conector
3. El retailer solicita al gateway la cancelación del valor restante del pedido (80 USD)
4. El gateway solicita al conector la cancelación de 100 USD

![Hold mode cancelacion 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/hold-mode-cancelacion-1.png)

**Ejemplo 2**: cancelación de una parte del valor total del pedido

1. El retailer solicita al gateway la cancelación de 20 USD
2. El gateway no se comunica con el conector
3. El retailer solicita al gateway la liquidación del valor restante del pedido (80 USD)
4. El gateway solicita al conector la liquidación de 80 USD
5. El valor de 20 USD permanece cancelado en el gateway, pero esta cancelación no se informa al conector

![Hold mode cancelacion 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/hold-mode-cancelacion-2.png)

### Reembolso

1. El retailer solicita al gateway el reembolso de 20 USD
2. El gateway solicita al conector el reembolso de 20 USD
3. El retailer solicita al gateway el reembolso del valor restante del pedido (80 USD)
4. El gateway solicita al conector el reembolso del valor restante del pedido (80 USD)

![Hold mode reembolso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/hold-mode-reembolso.png)

> ℹ️ El conector solo realiza una operación de reembolso si el valor solicitado ya hubiera sido liquidado anteriormente.

## Modo Parcial

> ⚠️ En pedidos pagados con múltiples medios de pago, el sistema procesa la operación inicialmente en el medio de pago con el menor valor asignado de la transacción.

### Liquidación

1. El retailer solicita al gateway la liquidación de 20 USD
2. El gateway solicita al conector la liquidación de 20 USD
3. El retailer solicita al gateway la liquidación del valor restante del pedido (80 USD)
4. El gateway solicita al conector la liquidación del valor restante del pedido (80 USD)

![Partial mode liquidacion](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/partial-mode-liquidacion.png)

### Cancelación

1. El retailer solicita al gateway la cancelación de 20 USD
2. El gateway solicita al conector la cancelación de 20 USD
3. El retailer solicita al gateway la cancelación del valor restante del pedido (80 USD)
4. El gateway solicita al conector la cancelación del valor restante del pedido (80 USD)

![Partial mode cancelacion](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/partial-mode-cancelacion.png)

### Reembolso

1. El retailer solicita al gateway el reembolso de 20 USD
2. El gateway solicita al conector el reembolso de 20 USD
3. El retailer solicita al gateway el reembolso del valor restante del pedido (80 USD)
4. El gateway solicita al conector el reembolso del valor restante del pedido (80 USD)

![Partial mode reembolso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visión-de-conjunto-de-pagos/partial-mode-reembolso.png)

> ℹ️ El conector solo realiza una operación de reembolso si el valor solicitado ya hubiera sido liquidado anteriormente.


## Cómo elegir el modo adecuado

El modo configurado en la cuenta puede impactar el flujo financiero de la tienda, los costos operativos y la experiencia poscompra de los clientes.

Antes de solicitar cualquier cambio, evalúa cómo se comporta cada opción respecto a la liquidación, cancelación y reembolso, y elige aquella que mejor se adapte a la estrategia de tu operación.

> ⚠️ El **Modo Parcial** exige que el conector de pago sea compatible con múltiples operaciones parciales. Este modo no es compatible con [split de pagos](https://help.vtex.com/es/docs/tutorials/split-de-pagos).

| Modo | Indicado para | Beneficios | Limitaciones |
| :---: | :--- | :--- | :--- |
| **Total** | Tiendas que desean procesar rápidamente la liquidación después de la aprobación del pedido. | <ul><li>Reduce el tiempo entre la aprobación y la transferencia de los valores.</li><li>Ideal para retailers que prefieren una liquidación inmediata.</li></ul> | <ul><li>Puede generar altos costos de tarifas de reembolso si es necesario devolver valores ya liquidados.</li><li>No es compatible con liquidaciones parciales.</li></ul> |
| **Hold** | Tiendas que esperan múltiples confirmaciones (como emisión de facturas de varios sellers) antes de liquidar el valor total. | <ul><li>Admite [split de pagos](https://help.vtex.com/es/docs/tutorials/split-de-pagos), permitiendo modificaciones de ítems y valores en un pedido con múltiples sellers (si es necesario).</li><li>Evita costos de reembolso, ya que solo liquida cuando se alcanza el valor total.</li><li>Centraliza el envío de información al conector, reduciendo transacciones intermedias.</li></ul> | <ul><li>En pedidos con múltiples sellers, la liquidación solo ocurre después de que todos emitan las facturas.</li><li>No admite liquidaciones parciales.</li></ul> |
| **Parcial** | Evita costos de reembolso, ya que la liquidación solo se realiza cuando se alcanza el valor total. | <ul><li>Permite múltiples operaciones parciales de liquidación y cancelación.</li><li>En pedidos con múltiples sellers, permite la liquidación parcial sin necesidad de esperar a todos los sellers.</li><li>Puede evitar costos adicionales de tarifas de reembolso.</li></ul> | <ul><li>No admite [split de pagos](https://help.vtex.com/es/docs/tutorials/split-de-pagos).</li><li>Exige que el conector admita múltiples operaciones.</li><li>Requiere mayor control operativo.</li></ul> |