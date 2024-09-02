---
title: 'Falta la opción 1x installment en Checkout con múltiples condiciones de pago y configuración por defecto establecida en una opción diferente.'
id: 6xzCd4cSKl7ygcptvqwZs9
status: PUBLISHED
createdAt: 2023-05-11T17:23:35.529Z
updatedAt: 2023-05-11T17:23:36.035Z
publishedAt: 2023-05-11T17:23:36.035Z
firstPublishedAt: 2023-05-11T17:23:36.035Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: falta-la-opcion-1x-installment-en-checkout-con-multiples-condiciones-de-pago-y-configuracion-por-defecto-establecida-en-una-opcion-diferente
locale: es
kiStatus: Backlog
internalReference: 709971
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando hay más de una condición de pago configurada para un sistema de pago, y una condición de pago distinta de la que tiene la opción de pago a plazos 1x está configurada como predeterminada, la opción de pago a plazos 1x no aparece en la página de pago. En estos casos, sólo se elimina de la página de pago la opción del plazo 1x.



## Simulación


Para simular este problema, siga estos pasos:

1. Vaya al panel de administración y configure tres condiciones de pago para un sistema de pago con tarjeta de crédito, por ejemplo, Visa. La condición de pago A podría tener cuotas de 1x-3x, la condición B con cuotas de 4x-8x, y la condición C con cuotas de 9x-12x.

2. A continuación, vaya a la página de pago y observe que todas las opciones de pago a plazos aparecen en la página de pago.

3. A continuación, establezca la condición de pago B o C como predeterminada y vaya de nuevo a la página de pago. Observará que la opción de pago a plazos 1x desaparece de la página de pago.

4. Sin embargo, si vuelve a establecer la condición de pago A como predeterminada, la opción de pago a plazos 1x volverá a aparecer en la página de pago.



## Workaround


Para resolver este problema, puede establecer la opción de regla de pago de menor plazo como predeterminada o eliminar la configuración predeterminada eliminando la condición de pago con esta configuración y configurando una nueva condición de pago sin el indicador predeterminado.

