---
title: 'Vista previa de envío muestra erróneamente el precio cuando es entrega programada'
id: 1348f4mDxoxAT7pTKBxm29
status: PUBLISHED
createdAt: 2023-01-31T19:16:25.118Z
updatedAt: 2023-02-01T20:32:44.535Z
publishedAt: 2023-02-01T20:32:44.535Z
firstPublishedAt: 2023-01-31T19:16:25.874Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: vista-previa-de-envio-muestra-erroneamente-el-precio-cuando-es-entrega-programada
kiStatus: Backlog
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




