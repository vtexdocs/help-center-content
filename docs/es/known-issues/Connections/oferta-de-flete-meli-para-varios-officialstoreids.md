---
title: 'Oferta de flete MELI para varios officialStoreIDs'
id: 4KdPYtRbDdsBrn2k0dz7oc
status: PUBLISHED
createdAt: 2024-02-07T11:19:11.169Z
updatedAt: 2024-06-19T11:43:56.663Z
publishedAt: 2024-06-19T11:43:56.663Z
firstPublishedAt: 2024-02-07T11:19:12.139Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-freight-quotation-for-multiple-officialstoreids
locale: es
kiStatus: Fixed
internalReference: 978358
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente tenemos un problema con la integración de MELI con respecto a la API de cotización de flete de MELI, esto se aplica sólo para los vendedores que utilizan múltiples officialStoreIDs en MELI, pero utilizando sólo una cuenta en VTEX utilizando el mismo sellerID en MELI


##

## Simulación



Si se aplica este escenario, la cotización de flete de MELI devolverá error, y MELI redirigirá al vendedor a la hoja de cálculo de flete en lugar de utilizar la API de flete.



## Workaround


mantener actualizada la hoja de cálculo de fletes para evitar incoherencias entre VTEX y MELI





