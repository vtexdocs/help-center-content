---
title: 'API de tiempo de espera Obtener la configuración de aprobación de la cuenta'
id: 5dalpuBbuRYXj5WSal8UqR
status: PUBLISHED
createdAt: 2023-03-16T19:26:12.430Z
updatedAt: 2023-03-21T17:28:51.737Z
publishedAt: 2023-03-21T17:28:51.737Z
firstPublishedAt: 2023-03-16T19:26:12.826Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: timeout-api-get-accounts-approval-settings
locale: es
kiStatus: Fixed
internalReference: 772840
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Esta ruta devuelve "Maximum response size reached" cuando la respuesta JSON tiene más de 100MB.


##

## Simulación



Para cuentas con mucha información en el matcher o en el objeto de mapeo de especificaciones, esta respuesta ocurrirá en esta API
GET https://api.vtex.com//suggestions/configuration



## Workaround



N/A





