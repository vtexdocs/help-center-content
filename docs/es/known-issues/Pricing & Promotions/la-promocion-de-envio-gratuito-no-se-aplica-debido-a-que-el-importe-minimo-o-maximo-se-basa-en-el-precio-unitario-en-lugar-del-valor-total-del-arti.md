---
title: 'La promoción de envío gratuito no se aplica debido a que el importe mínimo o máximo se basa en el precio unitario en lugar del valor total del artículo.'
id: 2eti6qau2VXzuBBU8Us25V
status: PUBLISHED
createdAt: 2024-08-15T13:48:35.886Z
updatedAt: 2024-08-15T13:48:36.853Z
publishedAt: 2024-08-15T13:48:36.853Z
firstPublishedAt: 2024-08-15T13:48:36.853Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: free-shipping-promotion-fails-to-apply-due-to-minimum-or-maximum-amount-being-based-on-unit-price-instead-of-total-item-value
locale: es
kiStatus: Backlog
internalReference: 1081841
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La promoción de envío gratuito con un importe de pedido mínimo o máximo está considerando incorrectamente el valor del artículo por unidad en lugar del valor total del artículo, lo que provoca incoherencias en la aplicación de la promoción.


##

## Simulación



1. Configure una promoción de envío gratuito con un umbral de valor mínimo del carrito.
2. 2. Añada un producto al carro con un precio basado en un multiplicador de unidades (por ejemplo, precio por kilogramo) en lugar de un precio fijo.
3. Asegúrese de que el valor total de los artículos de la cesta supera el valor mínimo necesario para que se aplique la promoción. Sin embargo, el valor real del artículo, teniendo en cuenta el multiplicador unitario, debe hacer que el valor total del carrito sea inferior al requisito mínimo de la promoción.
4. Compruebe que la promoción no se aplica cuando el valor total de la cesta supera el mínimo exigido debido al multiplicador unitario del artículo.



## Workaround


Actualmente, no hay ninguna solución disponible para este problema.





