---
title: "Bucle de inicio de sesión infinito en Pick and Pack"
id: 6BHXEZeLc4ZIo9XJ6abfng
status: PUBLISHED
createdAt: 2025-04-07T20:57:54.309Z
updatedAt: 2025-04-08T00:37:20.769Z
publishedAt: 2025-04-08T00:37:20.769Z
firstPublishedAt: 2025-04-08T00:37:20.769Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: bucle-de-inicio-de-sesion-infinito-en-pick-and-pack
locale: es
kiStatus: Backlog
internalReference: 1206772
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se ha observado un problema por el que el inicio de sesión de la aplicación **Pick and Pack** se quedaba bloqueado en un estado de carga, impidiendo a los usuarios acceder al sistema. Tras la investigación, no se encontraron errores en la aplicación ni en el backend. El problema estaba relacionado con **datos del navegador almacenados localmente** como cookies, caché o almacenamiento local.


##

## Simulación



- Accede a la aplicación en: https://picking.pickingnpacking.com/
- Intenta iniciar sesión con credenciales válidas.
- La pantalla de inicio de sesión permanece cargando y no se completa.
 ![](https://vtexhelp.zendesk.com/collaboration/graphql/attachments/download/s3-b69bd53f-4385-4f00-94f7-299f63b07c7d/image.png)



## Workaround


Sí, las siguientes acciones pueden ayudar a resolver el problema:

- Borrar **cookies** y **datos del sitio** (incluyendo caché y almacenamiento local).
- Utiliza el navegador en **modo Incógnito/Privado**.
- Intente acceder desde otro **navegador o dispositivo**.
- Asegúrese de que la **hora del sistema y la zona horaria** están correctamente configuradas.
Estos pasos refrescan el entorno de autenticación y permiten el acceso con éxito.





