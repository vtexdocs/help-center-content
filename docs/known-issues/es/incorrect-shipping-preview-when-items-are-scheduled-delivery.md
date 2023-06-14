---
title: 'Vista previa de envío incorrecta cuando los artículos son de entrega programada'
id: 32RG7BjY9cScxj9e9bcDPS
status: DRAFT
createdAt: 2022-09-09T18:25:35.348Z
updatedAt: 2023-02-01T21:09:01.732Z
publishedAt: 
firstPublishedAt: 2022-09-09T18:25:35.902Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: vista-previa-de-envio-incorrecta-cuando-los-articulos-son-de-entrega-programada
locale: es
kiStatus: Backlog
internalReference: 545697
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La visualización de los valores de entrega en shipping-preview (carrito) es incorrecta cuando los artículos tienen una entrega programada y todos estos artículos salen del mismo SLA. Aunque la API devuelva el valor correcto, la interfaz de usuario no refleja esta información y muestra el valor incorrecto.



## Simulación


Si se añaden dos o más artículos al carrito con entrega programada, la interfaz de usuario mostrará un valor diferente al que devuelve la API



## Workaround


N/A

