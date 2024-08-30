---
title: 'Los datos de suplantación B2B no se eliminan tras cerrar la sesión'
id: bHYLV4reDQl4epmPbYwmJ
status: PUBLISHED
createdAt: 2024-07-18T21:56:41.780Z
updatedAt: 2024-07-18T21:56:42.802Z
publishedAt: 2024-07-18T21:56:42.802Z
firstPublishedAt: 2024-07-18T21:56:42.802Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: los-datos-de-suplantacion-b2b-no-se-eliminan-tras-cerrar-la-sesion
locale: es
kiStatus: Backlog
internalReference: 1067969
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El cierre de sesión después de hacerse pasar por un usuario en B2B Suite no elimina los permisos de la tienda de la sesión.

Esto permite al usuario navegar por el sitio web e incluso realizar pedidos si el usuario suplantado tiene acceso a la caja.



## Simulación



- Iniciar sesión con un usuario con roles de suplantación;
- Suplantar a otro usuario;
- Cerrar sesión.



## Workaround


Haga clic en "Detener suplantación" para eliminar los datos suplantados de la sesión.




