---
title: "Mensaje 'Algo ha ido mal' al acceder a las rutas /a y /p en los almacenes de Portal"
id: 2XGAGH8xpNqjJpAir6DKzz
status: PUBLISHED
createdAt: 2023-11-30T16:31:45.428Z
updatedAt: 2023-11-30T16:31:45.990Z
publishedAt: 2023-11-30T16:31:45.990Z
firstPublishedAt: 2023-11-30T16:31:45.990Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: mensaje-algo-ha-ido-mal-al-acceder-a-las-rutas-a-y-p-en-los-almacenes-de-portal
locale: es
kiStatus: Backlog
internalReference: 945226
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Se espera poder buscar cualquier término en los almacenes del Portal; sin embargo, las letras "A" y "P" no se pueden buscar directamente a través de la URL.
Así, aparecerá un mensaje "Algo ha ido mal" al acceder a las rutas `/a` y `/p` en los almacenes del Portal


##

## Simulación



1. Ir a una tienda del portal
2. Ir al enlace `site.com/a` o `site.com/p`
3. Ver un "Algo ha ido mal" en la portada



## Workaround


N/A a la ruta `/a
Registrar una redirección en el CMS heredado de `/p` a `/?ft=p`





