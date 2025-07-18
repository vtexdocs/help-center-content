---
title: "La bandera MessagessV2 requiere que el contenido se guarde en el idioma original"
id: 4mQuhUYT5zcMddid8mcWMl
status: PUBLISHED
createdAt: 2025-07-18T12:52:26.344Z
updatedAt: 2025-07-18T12:52:27.187Z
publishedAt: 2025-07-18T12:52:27.187Z
firstPublishedAt: 2025-07-18T12:52:27.187Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: la-bandera-messagessv2-requiere-que-el-contenido-se-guarde-en-el-idioma-original
locale: es
kiStatus: Backlog
internalReference: 1260018
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando una tienda multilenguaje tiene el indicador MessagesV2 Enable New Page Translation Configuration, se produce un problema en el editor del sitio. Si el cliente intenta guardar contenido en una de las localizaciones que no es la principal, puede recibir un error de: Algo ha ido mal.
 ![](https://vtexhelp.zendesk.com/attachments/token/QOndCdSMiZtiGHYTBf0sYstQd/?name=image.png)
Este error está relacionado con el mensaje "Contenido original no encontrado".

Pero con esta bandera activa, no se requiere guardar este contenido en la localización original para su uso. Por lo tanto, no debería ser necesario guardar el contenido.


##

## Simulación



- Tener una tienda con varias configuraciones regionales bajo el mismo enlace
- Intente guardar un contenido en una configuración regional que no sea la principal.
- Si abre la pestaña Red en las Herramientas de desarrollo, aparecerá el mensaje "Contenido original no encontrado" en una solicitud.



## Workaround


Tenemos una versión beta del pages-graphQL, por favor abra un ticket para solicitar su instalación.





