---
title: "Recibidos Skus 'Revisión' ficha productos que faltan"
id: 2UM0JQUZVq5o7NHCjmrg8N
status: PUBLISHED
createdAt: 2023-11-23T16:30:51.874Z
updatedAt: 2024-02-01T12:54:26.917Z
publishedAt: 2024-02-01T12:54:26.917Z
firstPublishedAt: 2023-11-23T16:30:52.647Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-review-tab-missing-products
locale: es
kiStatus: Fixed
internalReference: 939877
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las ofertas enviadas por los vendedores pueden eventualmente ir a la pestaña de Revisión de los Skus Recibidos del Marketplace dependiendo si pasaron o no las reglas de Calidad de la Oferta.

Una vez en esta pestaña, el vendedor puede actualizar sus skus con la información correcta (o cualquier información nueva).

Sin embargo, cuando esto ocurre, el sku cambia su estado de "EsperandoRevisión" a "Revisado", desapareciendo de la pestaña Revisión y de todos los Skus Recibidos.


##

## Simulación



1. Establezca una regla de "Requisitos opcionales" en el módulo de Calidad de la oferta en el lado del mercado;
2. Esperar a que un sku vaya a la pestaña Revisar por no pasar la regla;
3. Espera a que se actualice un sku en el lado del vendedor;
4. 4. Comprobar que el sku ya no está en la pestaña Revisión.



## Workaround


Aprobar el producto a través de la API: https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerskuid-/versions/-version-/matches/-matchid-





