---
title: Gift Card hub está añadiendo una barra invertida extra ("/") al llamar a los proveedores.
id: 2ZstMKKGUbrdXGuhS2Rr1f
status: PUBLISHED
createdAt: 2022-09-30T21:07:47.856Z
updatedAt: 2022-11-25T22:04:08.181Z
publishedAt: 2022-11-25T22:04:08.181Z
firstPublishedAt: 2022-09-30T21:07:48.985Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: gift-card-hub-esta-anadiendo-una-barra-invertida-extra-al-llamar-a-los-proveedores
kiStatus: Backlog
internalReference: 669575
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Nuestra API del hub de tarjetas de regalo está añadiendo una barra invertida extra a la solicitud cuando se llama a los proveedores. Esto se debe a la forma en que convertimos la serviceUrl y la concatenamos con la URL proporcionada por el conector.



## Simulación


Registre un nuevo proveedor en /giftcardproviders y realice una solicitud en una de las API, por ejemplo, /giftcards/_serach. El hub llamará al proveedor y añadirá un "/" como https://baseUrl**//**giftcard/_search.



## Workaround


Es necesario manejar este asunto en el lado del proveedor.

