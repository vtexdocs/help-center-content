---
title: 'Errores de tiempo de espera de la plataforma'
id: 6Kp2viMZSnmGucJnciDNKx
status: PUBLISHED
createdAt: 2024-06-17T18:07:48.342Z
updatedAt: 2024-10-10T14:32:44.370Z
publishedAt: 2024-10-10T14:32:44.370Z
firstPublishedAt: 2024-06-17T18:07:49.170Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: platform-timeout-errors
locale: es
kiStatus: Backlog
internalReference: 1051070
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La aplicación de mensajes recibe aleatoriamente un error de tiempo de espera, y algunas páginas pueden necesitar una actualización para funcionar correctamente. Esto está relacionado con las páginas de administración, pero cualquier otra página de la plataforma también puede recibir este error.

Esto puede estar relacionado con las consultas GraphQL. Normalmente, verás errores en la ruta `/meta` o un tiempo de espera de la aplicación de mensajes relacionado con la consulta `translateWithDeps`.


##

## Simulación


Intenta acceder a algunas páginas en el admin, por ejemplo, de una cuenta, y aleatoriamente, esta página puede recibir el error de abajo. Esta imagen también puede aparecer en el entorno myvtex al acceder a cualquier otra página:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/errores-de-tiempo-de-espera-de-la-plataforma_1.png)
Al actualizar la página todo debería volver a la normalidad

Puedes ver más detalles del error en la consola o simplemente esperar a que se refresque.



## Workaround


N/A





