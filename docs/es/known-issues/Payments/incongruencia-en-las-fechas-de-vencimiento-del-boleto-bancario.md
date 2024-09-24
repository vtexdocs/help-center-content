---
title: 'Incongruencia en las fechas de vencimiento del boleto bancario'
id: 771mUo6KdQP0pCTq5F5E0m
status: PUBLISHED
createdAt: 2022-03-28T01:17:58.206Z
updatedAt: 2022-11-25T22:06:07.068Z
publishedAt: 2022-11-25T22:06:07.068Z
firstPublishedAt: 2022-03-28T01:17:58.704Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-payment-method-boleto-bancario-expiration-dates
locale: es
kiStatus: Backlog
internalReference: 489460
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos Boletos Bancarios generados desde el conector ItauShopLine pueden tener una fecha de caducidad diferente a la configurada en la afiliación

Esto ocurre porque, para determinar la fecha de caducidad, buscamos un campo en nuestro código que dice la fecha y la hora del momento exacto de creación del boleto y luego sumamos el número de días permitidos para que el boleto caduque. Sin embargo, al utilizar la zona horaria GMT+0 y no la zona horaria brasileña (GMT-3) y entonces los boletos generados a partir de las 21 horas consideran el día siguiente como día base para este cálculo, provocando que algunos Boletos Bancários tengan un día más en el cálculo de la fecha de vencimiento

Este problema fue mapeado a partir de un caso con ItauShopLine, pero puede ocurrir con otros conectores, dependiendo del país de compras y también del funcionamiento particular de cada conector.



## Simulación



1. Ir a afiliaciones y configurar ItauShopLine con el `expireDays = 1`.
2. Cree una condición de pago para que el método de pago Boleto Bancário sea procesado por ItauShopLine
3. Después de las 21:00 horas, vaya a la caja y realice una compra con el Método de Pago Boleto Bancário
4. Abra el boleto bancário y observe la fecha de vencimiento



## Workaround


N/A

