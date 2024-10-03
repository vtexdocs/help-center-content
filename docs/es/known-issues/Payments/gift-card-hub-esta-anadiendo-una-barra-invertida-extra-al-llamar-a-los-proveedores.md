---
title: "Gift Card hub está añadiendo una barra invertida extra ('/') al llamar a los proveedores."
id: 2ZstMKKGUbrdXGuhS2Rr1f
status: PUBLISHED
createdAt: 2022-09-30T21:07:47.856Z
updatedAt: 2024-02-16T20:24:58.109Z
publishedAt: 2024-02-16T20:24:58.109Z
firstPublishedAt: 2022-09-30T21:07:48.985Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-hub-is-adding-an-extra-backslash-when-calling-providers
locale: es
kiStatus: No Fix
internalReference: 669575
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Nuestra API del hub de tarjetas de regalo está añadiendo una barra invertida extra a la solicitud cuando se llama a los proveedores. Esto se debe a la forma en que convertimos la serviceUrl y la concatenamos con la URL proporcionada por el conector.



## Simulación


Registre un nuevo proveedor en /giftcardproviders y realice una solicitud en una de las API, por ejemplo, /giftcards/_serach. El hub llamará al proveedor y añadirá un "/" como https://baseUrl**//**giftcard/_search.



## Workaround


Es necesario manejar este asunto en el lado del proveedor.

