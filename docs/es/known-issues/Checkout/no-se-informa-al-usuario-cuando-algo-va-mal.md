---
title: 'No se informa al usuario cuando algo va mal'
id: 6mjLK4MVOqWeiAXtwcl8rS
status: PUBLISHED
createdAt: 2022-05-12T14:51:16.913Z
updatedAt: 2024-02-16T20:29:29.074Z
publishedAt: 2024-02-16T20:29:29.074Z
firstPublishedAt: 2022-05-12T14:51:17.267Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: no-feedback-to-the-user-when-something-goes-wrong
locale: es
kiStatus: No Fix
internalReference: 339072
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el usuario está en la caja introduciendo sus datos para finalizar su compra y el internet se cae y vuelve a caer no se devuelve la información al usuario.



## Simulación


Como simulación estoy compartiendo un video en los archivos adjuntos. Al menos un mensaje como: "Algo salió mal" o "Por favor, recargue su página" debería ser enviado cuando algo así sucede.

Como otro ejemplo, cuando el usuario está insertando los datos de envío para elegir si va como entrega o PUP y se cae internet, se puede ver el error: _`Error: No se ha podido cargar la API de Google Maps`_


## Workaround


Al recibir un mensaje de la API de Google, como en el ejemplo anterior de Simulation, podríamos capturar este mensaje y simplemente pasarlo al usuario.

