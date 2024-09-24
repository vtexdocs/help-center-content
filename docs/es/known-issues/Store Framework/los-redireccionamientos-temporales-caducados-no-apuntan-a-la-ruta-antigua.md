---
title: 'Los redireccionamientos temporales caducados no apuntan a la ruta antigua'
id: 1kI87EueEtHIyfZ4KmUJSF
status: PUBLISHED
createdAt: 2023-09-12T14:41:09.843Z
updatedAt: 2023-09-12T14:41:11.758Z
publishedAt: 2023-09-12T14:41:11.758Z
firstPublishedAt: 2023-09-12T14:41:11.758Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: expired-temporary-redirects-not-pointing-back-to-old-route
locale: es
kiStatus: Backlog
internalReference: 898062
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando se crea una ruta de redirección, la ruta interna se elimina, pero, cuando la redirección expira la ruta no vuelve


##

## Simulación




- Crear una redirección temporal
- Compruébelo y se redirigirá correctamente
- Después de la fecha de caducidad, compruébelo de nuevo
- La ruta original no se cargará correctamente



## Workaround


La ruta sólo volverá a funcionar si la crea de nuevo en el rewriter



