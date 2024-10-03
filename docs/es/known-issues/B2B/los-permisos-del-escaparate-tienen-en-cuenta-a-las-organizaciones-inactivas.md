---
title: 'Los permisos del escaparate tienen en cuenta a las organizaciones inactivas'
id: 2GANYaXFMQpLGADajl4CbS
status: PUBLISHED
createdAt: 2023-10-27T22:08:14.267Z
updatedAt: 2024-09-05T17:42:55.782Z
publishedAt: 2024-09-05T17:42:55.782Z
firstPublishedAt: 2023-10-27T22:08:14.965Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: storefront-permissions-considers-inactive-organizations
locale: es
kiStatus: Fixed
internalReference: 927174
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando un usuario tiene asignada más de una organización, y la primera registrada está inactiva, no se reconoce como asignada ninguna organización tras el login.


##

## Simulación



- Crear dos organizaciones y asignar el mismo usuario/email;
- Inactiva la 1ª organización creada;
- Inicie sesión en el sitio web.



## Workaround


Eliminar el usuario/email de la organización inactiva.




