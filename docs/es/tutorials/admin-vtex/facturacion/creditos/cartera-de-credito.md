---
title: 'Cartera de crédito'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-11-24T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: credit-wallet
locale: es
subcategoryId: credit-wallet
seeAlso:
  - "/es/docs/tutorials/vision-general-facturacion"
  - "/es/docs/tutorials/consultar-el-uso-de-master-data-en-el-admin-vtex"
  - "/es/docs/tutorials/transferir-credito-entre-empresas-del-mismo-grupo-economico"
---

La **cartera de crédito** es un crédito de facturación que se otorga automáticamente a tu empresa y se usa para descontar el cobro de [Master Data](/es/docs/tutorials/master-data-es).

En este artículo se explica cómo se calcula el crédito de la cartera de crédito, cómo se aplica al cobro de Master Data y qué pasa con el saldo que no se usa.

> ℹ️ Para saber más sobre tu cartera de crédito, accede a [Consultar cartera de crédito](/es/docs/tutorials/consultar-cartera-de-credito).

## Estructura de facturación

La estructura de facturación de VTEX sigue esta jerarquía: **cuenta → empresa → grupo económico**.
- **Cuenta:** una tienda o ambiente VTEX. Cada cuenta pertenece a una sola empresa. El crédito se guarda en la empresa propietaria de la cuenta, no en la cuenta.
- **Empresa:** unidad que posee la cartera de crédito, el **Estado de cuenta de créditos** y la factura consolidada. Agrupa una o más cuentas y tiene su propia política de vencimiento del crédito.
- **Grupo económico:** agrupa las empresas que pertenecen al mismo cliente.

## Cómo se calcula el crédito

Cuando una empresa opera con más de una cuenta en VTEX (por ejemplo, [cuentas franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia) o ambientes adicionales), todas se agrupan en una misma empresa para fines de facturación. Esa empresa recibe una factura consolidada, y el crédito de la cartera de crédito se calcula y se aplica en ese nivel, y no por cuenta individual.

Cada mes VTEX suma lo que le pagaron todas las cuentas de la empresa. La suma va del día 1 al último día del mes. De esa suma VTEX convierte el 2% en el crédito del mes siguiente.

> ⚠️ Los pagos de Ads, Professional Services y consultoría en general no se incluyen en esta base de cálculo.

## Cómo se utiliza el crédito

El crédito de la cartera de crédito se aplica exclusivamente para descontar el cobro de Master Data en la factura del mes siguiente.

Cada cuenta tiene su [consumo de Master Data](/es/docs/tutorials/consultar-el-uso-de-master-data-en-el-admin-vtex). VTEX calcula el costo total sumando el consumo de todas las cuentas de la empresa. El crédito se descuenta sobre este total consolidado.

Si el valor del crédito es mayor que el cobro de Master Data del periodo, el saldo restante permanece disponible para su uso en meses futuros. El crédito no utilizado se acumula.

> ℹ️ El crédito acumulado en la cartera de crédito es válido hasta el fin del ciclo contractual vigente. No continúa acumulándose indefinidamente.

## Transferir crédito entre empresas del mismo grupo económico

Si tu grupo económico tiene más de una empresa, puedes transferir parte del saldo de la cartera de crédito a otra empresa del grupo. Si el grupo tiene una sola empresa, no puedes transferir crédito. Obtén más información en [Transferir crédito entre empresas del mismo grupo económico](/es/docs/tutorials/transferir-credito-entre-empresas-del-mismo-grupo-economico).
