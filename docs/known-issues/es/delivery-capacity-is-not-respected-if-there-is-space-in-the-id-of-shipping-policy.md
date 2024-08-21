---
title: 'La capacidad de entrega no se respeta si hay espacio en el Id de la política de envío'
id: 1OyY54G05o15EI2zAmW4Vq
status: PUBLISHED
createdAt: 2023-07-14T21:25:50.522Z
updatedAt: 2024-03-19T19:26:55.344Z
publishedAt: 2024-03-19T19:26:55.344Z
firstPublishedAt: 2023-07-14T21:25:51.117Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-capacidad-de-entrega-no-se-respeta-si-hay-espacio-en-el-id-de-la-politica-de-envio
locale: es
kiStatus: Backlog
internalReference: 862830
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si la función de programación de entregas está en uso y la capacidad de entrega está habilitada, hay dos escenarios conocidos que pueden hacer que la ventana esté disponible incluso después de haber alcanzado su límite máximo de capacidad configurada.
Los escenarios son: ID de política de envío con un espacio o demasiados caracteres formando la cadena, `AccountName+ShippingPolicyId` no puede superar los 60 caracteres.


##

## Simulación


Cree una política de envío y, en su Id, inserte un espacio, o `AccountName+ShippingPolicyId` que resulte en más de 60 caracteres, configure la entrega programada y la capacidad de entrega.
Realice los pedidos seleccionando la ventana registrada, compruebe que será posible crear más pedidos que el máximo configurado en la capacidad de entrega.
En el momento del pago, cuando se alcance el límite configurado, la ventana no dejará de estar disponible, sino que permanecerá visible y podrá ser seleccionada.



## Workaround


No registre ningún Id con un espacio en la política de envío o con más de 60 caracteres sumando los caracteres del `AccountName+ShippingPolicyId`.





