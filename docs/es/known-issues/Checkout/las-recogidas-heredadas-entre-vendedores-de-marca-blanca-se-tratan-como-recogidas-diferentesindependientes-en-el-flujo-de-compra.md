---
title: 'Las recogidas heredadas entre vendedores de marca blanca se tratan como recogidas diferentes/independientes en el flujo de compra'
id: mfLw2RDV0C7cXNic5CwoA
status: PUBLISHED
createdAt: 2022-05-12T14:52:12.808Z
updatedAt: 2022-11-25T21:52:15.347Z
publishedAt: 2022-11-25T21:52:15.347Z
firstPublishedAt: 2022-05-12T14:52:13.102Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickups-inherited-between-whitelabel-sellers-are-treated-as-differentindependent-pickups-on-the-purchase-flow
locale: es
kiStatus: Backlog
internalReference: 438630
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Hay una característica en el módulo de Logística para heredar los puntos de recogida entre las cuentas de franquicia, y así entre los vendedores de marca blanca. Mientras estén registrados en un vendedor X, aparecerán como opciones de recogida para un vendedor Y según lo configurado en la estrategia de envío. Aunque sean los mismos, su ID será diferente entre cada vendedor, por lo que se verán como opciones de recogida diferentes e independientes.

El problema es que la experiencia de compra se verá comprometida cuando el cliente quiera obtener los artículos de su carrito en esta recogida, pero estos provienen de diferentes vendedores detrás de todo. Se pueden mostrar repetidas veces en la lista de puntos de recogida (uno por vendedor de WL), y cada uno de ellos cubrirá sólo artículos específicos (los que proporciona cada vendedor de WL).

Además, es importante tener en cuenta que el frontend nativo de la caja no ofrece la opción de seleccionar diferentes puntos de recogida para diferentes artículos en el carrito (aunque fueran de diferentes vendedores habituales, lo que no se aplica a un escenario SWL). Por lo tanto, no se puede comprar todo el carro en esta "misma" opción de punto de recogida. Los artículos restantes, que no están cubiertos por el punto de recogida seleccionado, se ofrecerán para ser entregados en una dirección - si es un canal de entrega disponible para el contexto, de lo contrario, se mostrarán como "_selección de otra recogida o eliminación del carrito_".



## Simulación


No hay un escenario rápido para reproducir el problema, pero basta con que dos artículos provengan exclusivamente de dos vendedores diferentes (puede ser el vendedor 1 y uno de sus SWL), y que haya una única recogida heredada del SWL al vendedor 1.



## Workaround


N/A

