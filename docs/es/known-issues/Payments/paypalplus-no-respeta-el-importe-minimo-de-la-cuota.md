---
title: "PayPalPlus no respeta el importe mínimo de la cuota"
id: 1IGzNPtXaaUsPkaq0qRgfK
status: PUBLISHED
createdAt: 2022-03-26T23:00:59.044Z
updatedAt: 2024-02-16T20:25:30.693Z
publishedAt: 2024-02-16T20:25:30.693Z
firstPublishedAt: 2022-03-26T23:00:59.445Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypalplus-no-respeta-el-importe-minimo-de-la-cuota
locale: es
kiStatus: No Fix
internalReference: 370271
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Incluso con el importe mínimo de la cuota configurado en el término de pago de PayPalPlus, mostramos cuotas en el pago que no respetan esta configuración



## Simulación



1. Configurar PayPalPlus como nueva afiliación a la pasarela
2. Configurar la condición de pago de PayPalPlus para procesar con la afiliación de la pasarela de PayPalPlus y establecer el importe mínimo de la cuota
3. Vaya a la caja y compre un artículo al azar
4. En la opción de Pagos a Plazos tendrá opciones que no obedecen al importe mínimo del plazo



## Workaround


N/A

