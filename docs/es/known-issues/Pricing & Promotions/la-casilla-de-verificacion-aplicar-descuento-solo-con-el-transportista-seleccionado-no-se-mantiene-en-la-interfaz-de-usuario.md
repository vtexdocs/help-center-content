---
title: 'La casilla de verificación "Aplicar descuento sólo con el transportista seleccionado" no se mantiene en la interfaz de usuario.'
id: 2gcsCgGhE4V1Hbp4ZkNO78
status: PUBLISHED
createdAt: 2024-08-21T20:17:29.685Z
updatedAt: 2024-08-21T20:17:30.499Z
publishedAt: 2024-08-21T20:17:30.499Z
firstPublishedAt: 2024-08-21T20:17:30.499Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-casilla-de-verificacion-aplicar-descuento-solo-con-el-transportista-seleccionado-no-se-mantiene-en-la-interfaz-de-usuario
locale: es
kiStatus: Backlog
internalReference: 1085241
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hay un problema en el módulo de impuestos donde la opción "Aplicar el descuento sólo cuando uno de los transportistas anteriores es seleccionado por el cliente" no permanece marcada en la interfaz de usuario, a pesar de que se establece correctamente a través de la API.



## Simulación



1. Navegue hasta el módulo de impuestos en el admin.
2. Intente marcar la opción "Aplicar el descuento sólo cuando uno de los transportistas anteriores es seleccionado por el cliente."
3. Guarde los cambios y observe que la casilla no permanece marcada.
4. Verifique a través de la API que la opción está correctamente marcada como `true`.



## Workaround


El problema es puramente visual. El estado de la casilla de verificación se refleja correctamente a través de la API y el descuento se aplica como se esperaba durante el proceso de pago. Por lo tanto, no es necesaria ninguna solución, ya que la funcionalidad no se ve afectada.





