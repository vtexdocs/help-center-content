---
title: 'Marketplace no considera regla de parcelamiento para productos que tienen condición comercial en el seller'
id: 57fIYUFmvuyYaq8W6KkieC
status: PUBLISHED
createdAt: 2017-06-16T21:18:22.276Z
updatedAt: 2022-12-22T15:05:04.302Z
publishedAt: 2022-12-22T15:05:04.302Z
firstPublishedAt: 2017-06-16T21:30:20.109Z
contentType: knownIssue
productTeam: Channels
author: authors_35
tag: Checkout,Payments
slug: marketplace-no-considera-regla-de-parcelamiento-para-productos-que-tienen-condicion-comercial-en-el-seller
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Las integraciones entre tiendas VTEX x VTEX se pueden configurar de tal manera que toda regla de pago se puede hacer directamente en el ambiente del seller. Esto significa que el seller puede crear condiciones de pago según su regla de negocio. Una de estas reglas es la condición comercial que se define en el catálogo y está asociada a cada SKU. Para entender mejor esta funcionalidad, haga clic [aquí](http://help.vtex.com/es/tutorial/como-catastrar-condicion-comercial).

Esta funcionalidad se utiliza comúnmente para crear escenarios como éste: la nevera **X** deberá tener una regla de parcelación diferente y ser transaccionada sólo por el afiliado **XPTO**.

El problema conocido es evidente en el siguiente ejemplo, en el que el marketplace no puede reflejar las mismas reglas de parcelación que el seller:

## Mercado - Hasta 12x sin intereses
![Heladera Marketplace](https://images.contentful.com/alneenqid6w5/c7CtSlVToIIQScyiM4AiS/e9f1415ccbe79d8fe34af8e9901b6570/Geladeira_Marketplace.png)

## Vendedor - Hasta 10x sin intereses
![2017-06-16 18 15 44-Refrigerador 540 Litros Evox Brastemp Side Inverse - Brastemp](https://images.contentful.com/alneenqid6w5/6HZs1prIVaUsOYCWeEMG8U/169a380f8e4c43cd0c644d280da0d126/2017-06-16_18_15_44-Geladora_540_Litros_Evox_Brastemp_Side_Inverse_-_Brastemp.png)

La visualización en el marketplace es incorrecta. Las parcelas en 11x y 12x no exhiben intereses, cuando, en realidad, deberían exhibir.

Actualmente existe una restricción en el checkout. Él no reconoce las condiciones comerciales de un SKU en un seller para fines de split de pago (pedido en el marketplace con pago en el seller).

## Simulación

1. El seller debe crear una condición comercial y asociarla a un SKU que se envía a un marketplace
2. El seller debe crear una condición de pago cuya condición especial incluye la política comercial de dicha integración y también la condición comercial asociada a ese SKU.
3. El marketplace no puede reflejar esta configuración.

## Workaround

Mientras que el checkout no desarrolla la funcionalidad necesaria para reflejar las condiciones comerciales de un seller, la mejor vía alternativa es el seller crear una nueva política comercial para esa integración e incluir en esa política las configuraciones de pago que satisfagan la regla de negocio en cuestión.

