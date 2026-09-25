---
title: 'Cartera de Crédito'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
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

**Cartera de crédito** es un crédito de facturación otorgado automáticamente a tu compañía, utilizado para descontar los cargos de Master Data.

Este artículo explica cómo se calcula el crédito de Cartera de crédito, cómo se aplica a los cargos de Master Data y qué sucede con el saldo no utilizado.

> ℹ️ Para saber cómo consultar la información de tu Cartera de crédito, consulta [Consultar Cartera de crédito](/es/docs/tutorials/consultar-cartera-de-credito).

## Cómo se calcula el crédito

Cuando una compañía opera con más de una cuenta en VTEX (por ejemplo, cuentas franquicia o ambientes adicionales), todas se agrupan bajo una compañía para fines de facturación. Esta compañía recibe una factura consolidada, y el crédito de Cartera de crédito se calcula y aplica en este nivel, no por cuenta individual.

Todos los meses, VTEX suma todo lo que la compañía — es decir, todas las cuentas agrupadas bajo ella — pagó a VTEX en el mes anterior (del día 1 al último día del mes) y otorga, en el mes siguiente, un crédito equivalente al 2% de ese valor total.

> ⚠️ Los pagos de Ads, Professional Services y consultoría en general no se incluyen en esta base de cálculo.

## Cómo se utiliza el crédito

El crédito de Cartera de crédito se aplica exclusivamente para descontar los cargos de Master Data en la factura del mes siguiente.

El consumo de Master Data ocurre dentro de cada cuenta, pero VTEX suma el consumo de Master Data de todas las cuentas de una compañía para calcular el costo total de Master Data. El crédito se descuenta sobre este total consolidado.

Si el valor del crédito es mayor que el cargo de Master Data del período, el saldo restante permanece disponible para su uso en meses futuros. El crédito no utilizado se acumula.

> ℹ️ El crédito acumulado en Cartera de crédito es válido hasta el final del ciclo contractual vigente. No continúa acumulándose indefinidamente.