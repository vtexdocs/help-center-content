---
title: "La interfaz de la página de la Tarjeta de regalo se está cargando indefinidamente, lo que impide a los usuarios con permiso acceder a ella correctamente"
id: 6HfglIfAEuXfQlVVnIJiQO
status: PUBLISHED
createdAt: 2021-07-29T12:25:51.576Z
updatedAt: 2022-12-22T20:51:53.612Z
publishedAt: 2022-12-22T20:51:53.612Z
firstPublishedAt: 2021-07-29T14:30:28.706Z
contentType: knownIssue
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
tag: Gift Card
slugEN: interfaz-pagina-tarjeta-de-regalo-cargando-indefinidamente
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La interfaz de usuario de la página de la Tarjeta de regalo, en el módulo de Pagos, no se está cargando correctamente. Nos hemos dado cuenta de que si tiene un permiso previo para acceder a la página de la Tarjeta de regalo en el Admin, puede acceder a ella sin problemas. Pero si primero intenta acceder a ella sin permiso, luego obtiene el permiso e intenta acceder de nuevo, se puede generar un problema en el que la UI parece estar cargándose eternamente y el usuario no puede acceder a la página.

## Simulación

1. Cree un usuario y déle permiso para acceder a otra página que no sea la de la Tarjeta de regalo.
2. Pida al usuario que intente acceder a la página de la Tarjeta de regalo y asegúrese de que obtiene la página de acceso denegado.
3. Cambie el permiso y dé al usuario acceso a la página de la Tarjeta de regalo.
4. Cuando el usuario intente acceder a ella, la página estará cargándose.


## Workaround

Todavía estamos trabajando en ello, pero si espera lo suficiente (aproximadamente una hora), podrá acceder a ella.

Además, probablemente funcionará si elimina el usuario y lo crea de nuevo y le da permiso para acceder a la página de la Tarjeta de regalo.


