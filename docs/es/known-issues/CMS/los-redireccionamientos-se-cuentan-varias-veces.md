---
title: 'Los redireccionamientos se cuentan varias veces'
id: 51JfHBdp72duH5cBWMYl0t
status: PUBLISHED
createdAt: 2024-07-16T19:48:36.586Z
updatedAt: 2024-08-05T16:47:07.922Z
publishedAt: 2024-08-05T16:47:07.922Z
firstPublishedAt: 2024-07-16T19:48:37.314Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: redirects-are-being-counted-multiple-times
locale: es
kiStatus: Fixed
internalReference: 1066548
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al intentar cargar un archivo con más de 200 redirecciones, el frente entra en un bucle y lee esas redirecciones tres veces. Esto puede llevar a más redirecciones en el mensaje de error en pantalla o en el modal de carga. Las redirecciones no se están duplicando, pero las estamos leyendo más de una vez.


##

## Simulación


Pruebe a cargar un archivo con 930 redirecciones, por ejemplo. El modal de carga aparecerá con un número superior a 930:
 ![](https://vtexhelp.zendesk.com/attachments/token/vypbPdcFp4KtjVvI5rL4tHQXU/?name=image.png)

si el archivo contiene un error, puedes encontrar un mensaje de error similar a este:
 ![](https://vtexhelp.zendesk.com/collaboration/graphql/attachments/download/s3-145778c5-53eb-4002-9b91-1b43f7394896/image.png)
Esto es sólo un error frontal, y no está afectando a la carga de redirecciones en sí.



## Workaround


N/A





