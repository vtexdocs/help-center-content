---
title: 'Error al cambiar el tipo de entrega cuando el vendedor tiene recursividad'
id: 7JLnqVWHz94sQZKMOGUkKC
status: PUBLISHED
createdAt: 2022-06-14T14:07:38.881Z
updatedAt: 2022-11-25T21:52:59.031Z
publishedAt: 2022-11-25T21:52:59.031Z
firstPublishedAt: 2022-06-14T14:07:39.358Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: error-al-cambiar-el-tipo-de-entrega-cuando-el-vendedor-tiene-recursividad
locale: es
kiStatus: Backlog
internalReference: 597915
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En el escenario en el que el vendedor tiene recursividad, al llegar a la etapa de pago y cambiar el tipo de entrega de entrega a recogida, el usuario recibe el error "No se puede comunicar con el vendedor ...." pero en realidad el error es "La dirección no se puede utilizar para el canal de entrega dado". Esto se debe a la recursión en la que la API no sabe cómo tratar este tipo de escenario y la UI no selecciona un deliveryChannel.



## Simulación


En el escenario de recursión, vaya al paso de pago y elija cambiar el tipo de entrega de entrega a recogida, al hacer este cambio se produce el error.



## Workaround


N/A

