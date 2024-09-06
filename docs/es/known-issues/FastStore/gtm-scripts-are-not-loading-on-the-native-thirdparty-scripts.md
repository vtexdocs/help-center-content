---
title: 'Los scripts GTM no se cargan en los scripts nativos de terceros'
id: 4hTYThw8092OCHhUIvpCAa
status: PUBLISHED
createdAt: 2024-08-23T12:16:07.174Z
updatedAt: 2024-08-23T13:50:26.219Z
publishedAt: 2024-08-23T13:50:26.219Z
firstPublishedAt: 2024-08-23T12:16:08.213Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: los-scripts-gtm-no-se-cargan-en-los-scripts-nativos-de-terceros
locale: es
kiStatus: Backlog
internalReference: 1086165
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las tiendas que utilizan Faststore v2 (repositorios que comienzan en `starter.store` y utilizan la aplicación `admin-faststore`) no cargan el script GTM cuando utilizan los scripts nativos de terceros. Esto está relacionado con Partytown.


##

## Simulación


Si su tienda utiliza Faststore V2, intente añadir el script GTM siguiendo [esta documentación](https://developers.vtex.com/docs/guides/faststore/project-structure-handling-third-party-scripts). Los eventos no se enviarán correctamente.



## Workaround


El cliente puede cargar el script utilizando un componente personalizado en lugar del nativo sin Partytown. Sería una sustitución de nuestro componente nativo.





