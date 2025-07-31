---
title: "La promoción se aplica a todos los ANS en lugar de sólo al método de envío seleccionado"
id: 4ZtMasrYDttDtrtqGHrdrV
status: PUBLISHED
createdAt: 2025-07-24T12:50:20.910Z
updatedAt: 2025-07-24T18:02:56.147Z
publishedAt: 2025-07-24T18:02:56.147Z
firstPublishedAt: 2025-07-24T12:50:22.107Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-promocion-se-aplica-a-todos-los-ans-en-lugar-de-solo-al-metodo-de-envio-seleccionado
locale: es
kiStatus: Backlog
internalReference: 1265187
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación



- Cree una promoción con un descuento restringido a un método de envío específico y válido utilizando el nuevo formulario Promoción regular.
- En el carrito, añada un producto y asegúrese de que los métodos de envío específicos están disponibles para el carrito.
- Observe que incluso si el método de envío seleccionado no es el configurado en los ajustes de la promoción, el descuento seguirá aplicándose.
- El comportamiento esperado es que el descuento sólo se aplique si el método de envío específico está realmente seleccionado.
- Esto sólo funciona correctamente si la bandera obsoleta `isSlaSelected` se establece en `true` (que no es posible a través de la nueva interfaz de usuario).



## Workaround


Establezca `isSlaSelected = true` a través de la API. Esto garantiza que la promoción sólo se aplique después de seleccionar el ANS correspondiente.





