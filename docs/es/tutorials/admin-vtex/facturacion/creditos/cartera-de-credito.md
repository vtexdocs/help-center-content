---
title: 'Cartera de crédito'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-10-30T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: credit-wallet
locale: es
subcategoryId: credit-wallet
seeAlso:
  - "/es/docs/tutorials/vision-general-facturacion"
  - "/es/docs/tutorials/master-data"
  - "/es/docs/tutorials/consultar-el-uso-de-master-data-en-el-admin-vtex"
---

La **cartera de crédito** es un crédito de facturación que se otorga automáticamente a tu empresa y se usa para descontar el cobro de [Master Data](/es/docs/tutorials/master-data-es).

En este artículo se explica cómo se calcula el crédito de la cartera de crédito, cómo se aplica al cobro de Master Data y qué pasa con el saldo que no se usa.

> ℹ️ Para saber más sobre tu cartera de crédito, accede a [Consultar cartera de crédito](/es/docs/tutorials/consultar-cartera-de-credito).

## Cómo se calcula el crédito

Cuando una empresa opera con más de una cuenta en VTEX (por ejemplo, [cuentas franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia) o ambientes adicionales), todas se agrupan en una misma empresa para fines de facturación. Esa empresa recibe una factura consolidada, y el crédito de la cartera de crédito se calcula y se aplica en ese nivel, y no por cuenta individual.

Cada mes VTEX suma lo que le pagaron todas las cuentas de la empresa. La suma va del día 1 al último día del mes. De esa suma VTEX convierte el 2% en el crédito del mes siguiente.

> ⚠️ Los pagos de Ads, Professional Services y consultoría en general no se incluyen en esta base de cálculo.

## Cómo se utiliza el crédito

El crédito de la cartera de crédito se aplica exclusivamente para descontar el cobro de Master Data en la factura del mes siguiente.

Cada cuenta tiene su consumo de Master Data. VTEX calcula el costo total sumando el consumo de todas las cuentas de la empresa. El crédito se descuenta sobre este total consolidado.

Si el valor del crédito es mayor que el cobro de Master Data del periodo, el saldo restante permanece disponible para su uso en meses futuros. El crédito no utilizado se acumula.

> ℹ️ El crédito acumulado en la cartera de crédito es válido hasta el fin del ciclo contractual vigente. No continúa acumulándose indefinidamente.
