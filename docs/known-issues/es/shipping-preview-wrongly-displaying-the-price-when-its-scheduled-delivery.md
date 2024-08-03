---
title: 'La vista previa del envío muestra erróneamente el precio cuando se trata de una entrega programada'
id: 1348f4mDxoxAT7pTKBxm29
status: PUBLISHED
createdAt: 2023-01-31T19:16:25.118Z
updatedAt: 2024-03-27T15:40:02.745Z
publishedAt: 2024-03-27T15:40:02.745Z
firstPublishedAt: 2023-01-31T19:16:25.874Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-vista-previa-del-envio-muestra-erroneamente-el-precio-cuando-se-trata-de-una-entrega-programada
locale: es
kiStatus: Fixed
internalReference: 532487
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El precio de entrega mostrado en shipping-preview (carrito) es incorrecto cuando los artículos son de entrega programada y todos estos artículos salen en el mismo SLA. Aunque la API devuelva el valor correcto, la interfaz de usuario no refleja esta información y muestra el valor incorrecto.


##

## Simulación


Si se añaden dos o más artículos a la cesta con entrega programada, la interfaz de usuario mostrará un valor distinto al que devuelve la API.



## Workaround


N/A




