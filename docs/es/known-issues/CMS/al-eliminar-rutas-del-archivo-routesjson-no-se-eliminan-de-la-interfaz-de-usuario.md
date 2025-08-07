---
title: "Al eliminar rutas del archivo routes.json, no se eliminan de la interfaz de usuario."
id: 2KFmFzn0cQoARxDz46k2ri
status: PUBLISHED
createdAt: 2025-01-31T20:06:46.822Z
updatedAt: 2025-01-31T20:09:30.740Z
publishedAt: 2025-01-31T20:09:30.740Z
firstPublishedAt: 2025-01-31T20:06:47.447Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: al-eliminar-rutas-del-archivo-routesjson-no-se-eliminan-de-la-interfaz-de-usuario
locale: es
kiStatus: Backlog
internalReference: 1172460
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si creas una ruta en el archivo `routes.json` de tu tema, la ruta no se borrará del admin.


##

## Simulación


Cree una página en sus temas bajo el archivo routes.json:
 ![](https://vtexhelp.zendesk.com/attachments/token/zoljY2X9GZ6NL4wUd10zoranp/?name=image.png)

La página se creará correctamente en el admin:
 ![](https://vtexhelp.zendesk.com/attachments/token/n2RP165BLtHwdHRrscu0IwOTo/?name=image.png)

Si eliminas esa ruta del tema, la referencia al admin seguirá ahí. Pero usted todavía será capaz de editar las rutas en el admin.



## Workaround


Puedes abrir un ticket al equipo de soporte solicitando la eliminación de esas rutas.




