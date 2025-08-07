---
title: 'Se produce un error al intentar realizar una búsqueda utilizando el campo "Todos" en VTEX CRM UI'
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2024-11-13T12:00:08.720Z
publishedAt: 2024-11-13T12:00:08.720Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: se-produce-un-error-al-intentar-realizar-una-busqueda-utilizando-el-campo-todos-en-vtex-crm-ui
locale: es
kiStatus: Backlog
internalReference: 925679
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El filtro "Todos" de la interfaz de usuario de CRM devuelve un error cuando se utiliza en entidades con muchos documentos. Esto ocurre porque el filtro "Todos" realiza una búsqueda comodín en todos los campos de búsqueda, lo que puede dar lugar a un error debido al gran volumen de datos que se consultan.

 ![](https://vtexhelp.zendesk.com/attachments/token/Lg1SGLizHjIXrJNiBSaBpJXqk/?name=Captura+de+Tela+2024-11-12+a%CC%80s+18.40.15.png)


##

## Simulación



- Acceda a la interfaz de usuario de CRM `https://.vtexcrm.com.br/` y navegue hasta una vista que represente una entidad con muchos registros.
- Inicie una búsqueda utilizando el campo "Todos". ![](https://vtexhelp.zendesk.com/attachments/token/H2fobh96F4aBJ8gYJweT5YaP8/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.42.35.png)
- Busque cualquier término en el campo de búsqueda.
- Observe que el sistema intenta realizar una búsqueda comodín en todos los campos de búsqueda, lo que puede dar lugar a un error debido al gran volumen de datos.
"**Se ha producido un error inesperado. Por favor, inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia. "**![](https://vtexhelp.zendesk.com/attachments/token/wq7uWjOgY9S2I1M8CgyReJANR/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.40.50.png)



## Workaround


Utilice filtros para campos específicos.

