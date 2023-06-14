---
title: 'La aplicación Cielo 3DS2 devuelve un estado "aprobado" incluso en situaciones en las que la autenticación ha fallado.'
id: 58hSiWFhn6sHQofJAUoHqv
status: PUBLISHED
createdAt: 2023-05-05T14:48:56.148Z
updatedAt: 2023-05-08T18:34:51.470Z
publishedAt: 2023-05-08T18:34:51.470Z
firstPublishedAt: 2023-05-05T14:48:57.492Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-aplicacion-cielo-3ds2-devuelve-un-estado-aprobado-incluso-en-situaciones-en-las-que-la-autenticacion-ha-fallado
kiStatus: Backlog
internalReference: 820060
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hoy en día, nuestro cielo-authentication-app v1.2.1 está devolviendo un estado "aprobado" en el paso final del flujo cuando se llama al paso de autorización que evalúa si la autenticación ha fallado o no. Sin embargo, la aplicación sólo activa el paso de fallo cuando se produce un error en este paso. Como resultado, incluso si el estado es "fallido" en el paso anterior, pero no se produce ningún error en el paso /authorize actual, el estado se sigue considerando "aprobado", lo que nos permite realizar una solicitud a la entidad adquirente. Este no es el comportamiento esperado, ya que en este caso deberíamos denegar la autorización de pago y cambiar la transacción a "autorización denegada".



## Simulación


Realice un pedido con la aplicación activada y utilice una tarjeta válida que no superará el paso de registro. A continuación, puede comprobar las herramientas de desarrollador y observar que a pesar de que la llamada a /authorization falla, el estado se sigue enviando como "aprobado".



## Workaround


N/A





