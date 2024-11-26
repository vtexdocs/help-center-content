---
title: 'La cesta no se actualiza en FastStore si se realiza una solicitud externa para actualizar orderForm'
id: 7ef1GxxapbH2XKKf7HBuAM
status: PUBLISHED
createdAt: 2024-10-31T15:08:54.129Z
updatedAt: 2024-11-01T14:04:48.204Z
publishedAt: 2024-11-01T14:04:48.204Z
firstPublishedAt: 2024-10-31T15:08:55.456Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: cart-does-not-update-in-faststore-if-external-request-is-made-to-update-orderform
locale: es
kiStatus: Backlog
internalReference: 1127034
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El carro FastStore se crea/actualiza a través de _ValidateCartMutation_.

Si se produce una petición externa que actualiza/complementa/enriquece el carrito, como `POST /attachments/marketingData`, el carrito pierde su referencia y no es posible añadir otro producto en el primer intento. Las llamadas externas que cambian el orderForm pueden dejar el carrito obsoleto, lo que significa que los artículos del carrito han cambiado fuera del flujo estándar del cliente en la tienda y ya no tienen el mismo estado de carrito que el cliente tiene almacenado en el navegador. Cuando esto ocurre, se ignora la primera petición _validateCartMutation_ (por ejemplo, que el cliente añada otro producto), y entonces se devuelve la versión actual del orderForm, y este nuevo producto no se añade al carrito.

Hemos observado que este comportamiento se produce tanto en la v2 como en la v3 del paquete `@faststore/api`.


##

## Simulación


Puedes validar este comportamiento realizando las siguientes peticiones:

1. Añade un producto al carrito mediante `POST ValidateCartMutation`;
2. 2. Añadir datos de marketing mediante `POST api/checkout/pub/orderForm/U050MGX0CQ3/attachments/marketingData`;
3. 3. Añadir otro producto al carrito mediante `POST ValidateCartMutation`.

Cuando añada el segundo artículo al carrito, no se añadirá. Tendrá que añadirlo de nuevo.



## Workaround


Después de cada solicitud que actualice el carrito (paso 2 en el ejemplo anterior), será necesario recuperar la información actual del carrito y actualizarla, como se sugiere en la implementación siguiente:

```
await axios.post('/api/marketingdata', payload)

// update cart store
const updatedCart = cartStore.read()
cartStore.set(updatedCart)
```

Esto asegurará que el carrito esté actualizado para que cuando el cliente añada más productos, el carrito esté con la información actualizada.


