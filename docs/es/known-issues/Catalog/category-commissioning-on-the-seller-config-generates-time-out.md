---
title: 'La puesta en marcha de la categoría en la configuración del seller genera un Time Out'
id: 5NsiGAjTIK1ygBvJo1ks2k
status: PUBLISHED
createdAt: 2022-09-05T14:18:53.669Z
updatedAt: 2022-11-25T21:42:57.979Z
publishedAt: 2022-11-25T21:42:57.979Z
firstPublishedAt: 2022-09-05T14:18:54.161Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-puesta-en-marcha-de-la-categoria-en-la-configuracion-del-seller-genera-un-time-out
locale: es
kiStatus: Fixed
internalReference: 310527
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si una cuenta tiene muchas categorías, en la pantalla de configuración del vendedor puede que no se cargue la puesta en marcha de la categoría debido a un tiempo de espera.




## Simulación



- Vaya a una cuenta con muchas categorías en el listado de vendedores https://myaccount.myvtex.com/admin/Site/SellerAlterar.aspx?Id=seller_id
- Intente cambiar la categoría de puesta en marcha.



## Workaround


Utilice la actualización a través de la API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-put-seller

