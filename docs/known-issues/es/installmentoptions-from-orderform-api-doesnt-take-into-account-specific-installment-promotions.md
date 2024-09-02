---
title: 'installmentOptions de la API de orderForm no tiene en cuenta las promociones específicas de los plazos'
id: YgwSByoCsjqEmWOmuXRU4
status: PUBLISHED
createdAt: 2022-08-24T15:53:17.291Z
updatedAt: 2022-11-25T21:50:31.916Z
publishedAt: 2022-11-25T21:50:31.916Z
firstPublishedAt: 2022-08-24T15:53:17.926Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: installmentoptions-de-la-api-de-orderform-no-tiene-en-cuenta-las-promociones-especificas-de-los-plazos
locale: es
kiStatus: No Fix
internalReference: 644563
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando una promoción está restringida a una cantidad específica de cuotas de la tarjeta de crédito (por ejemplo, "10% en efectivo"), el importe descontado se aplica incluso a las cuotas fuera del rango limitado, donde el objeto "installmentOptions" de la API de orderForm devolverá valores erróneos.

Al seleccionar un número diferente de cuotas se recalcularán las promociones y se actualizarán los valores de todas las cuotas. No se puede crear un pedido con un descuento incorrecto, ya que siempre se actualizará con el número de cuotas seleccionado, por lo que este problema está relacionado únicamente con los valores expuestos.



## Simulación



- Crear una promoción con una cantidad restringida de cuotas;
- A través de la API, cree o simule un carrito informando un "paymentData" con el número de cuotas en que se aplica la promoción;
- Observar las "installmentOptions" sobre los valores descontados;
- Informar otro número de cuotas y ver cómo se actualiza el valor a todas ellas.



## Workaround


Este objeto tiene un comportamiento limitado y debe considerarse obsoleto.

Las tiendas que dependen de los descuentos para cuotas específicas en un orderForm deben basarse en una nueva API, como se describe en este changelog (1) y en esta documentación (2).

Esta nueva API no cubre las solicitudes de simulación. Para ellos, la alternativa es la configuración "paymentSystemToCheckFirstInstallment" (3) - pero limitada a los descuentos en el primer plazo.

---

(1) https://developers.vtex.com/vtex-developer-docs/changelog/improvement-price-consistency-checkout-discounts-installments

(2) https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments

(3) https://developers.vtex.com/vtex-rest-api/docs/using-checkout-api-to-set-a-discount

