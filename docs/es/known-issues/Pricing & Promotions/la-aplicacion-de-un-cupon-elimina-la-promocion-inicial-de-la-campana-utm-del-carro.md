---
title: 'La aplicación de un cupón elimina la promoción inicial de la campaña UTM del carro'
id: 2A1S6PgEwD9SgQo1UHrFFS
status: PUBLISHED
createdAt: 2024-08-27T20:52:46.450Z
updatedAt: 2024-08-27T21:14:48.748Z
publishedAt: 2024-08-27T21:14:48.748Z
firstPublishedAt: 2024-08-27T20:52:47.777Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: applying-a-coupon-removes-initial-utm-campaign-promotion-from-cart
locale: es
kiStatus: Backlog
internalReference: 1088010
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación


Para reproducir este comportamiento, siga estos pasos:

1. **Crear Promociones:**

  - **Primera Promoción:** Configure una promoción para envío gratuito que sea activada por una `utm_campaign` específica. Esta promoción debe ser configurada para activarse en base al parámetro UTM sin requerir un cupón.
  - **Segunda promoción:** Configure una promoción que proporcione un porcentaje de descuento y esté asociada a una `utm_campaign` diferente. Esta promoción debe configurarse para requerir un cupón para su activación.
2. **Reproducir el error:**

  1. Acceda a la tienda utilizando un enlace con el parámetro `utm_campaign` que coincida con la primera promoción (por ejemplo, `utm_campaign=FREE_SHIPPING`).
  2. Añade productos al carrito.
  3. Introduzca un código postal en el carrito.
  4. Compruebe que se aplica la promoción de envío gratuito (primera promoción).
  5. Aplique un cupón que active la segunda promoción (por ejemplo, `DISCOUNT20`).
  6. Observe que la promoción inicial de envío gratuito se elimina del carrito tras aplicar el cupón, aunque la `utm_campaign` inicial permanece en el `orderForm`.



## Workaround


Si la segunda promoción (activada por el cupón) se configura con un `utm_source` en lugar de `utm_campaign`, se puede evitar el error. En este caso, ambas promociones se aplicarán correctamente sin ningún conflicto.






