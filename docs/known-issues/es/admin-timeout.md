---
title: 'Tiempo de espera de administración'
id: 6Kp2viMZSnmGucJnciDNKx
status: PUBLISHED
createdAt: 2024-06-17T18:07:48.342Z
updatedAt: 2024-06-17T18:07:49.170Z
publishedAt: 2024-06-17T18:07:49.170Z
firstPublishedAt: 2024-06-17T18:07:49.170Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: tiempo-de-espera-de-administracion
locale: es
kiStatus: Backlog
internalReference: 1051070
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La aplicación de mensajes está recibiendo un error de tiempo de espera al azar y algunas páginas de administración pueden necesitar una actualización para funcionar correctamente.

Esto puede estar relacionado con las consultas GraphQL. Normalmente verás errores en la ruta `/meta` o un tiempo de espera de la aplicación de mensajes relacionado con la consulta `translateWithDeps`.


##

## Simulación


Intenta acceder a algunas páginas en el admin de una cuenta y aleatoriamente esta página puede recibir el error de abajo:
 ![](https://vtexhelp.zendesk.com/attachments/token/zNzGxtaY5SszSHGFiKRMiCXda/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/KqbIgf2qqZIAdpYgXJcaiu5FJ/?name=image.png)

Al actualizar la página todo debería volver a la normalidad



## Workaround


N/A





