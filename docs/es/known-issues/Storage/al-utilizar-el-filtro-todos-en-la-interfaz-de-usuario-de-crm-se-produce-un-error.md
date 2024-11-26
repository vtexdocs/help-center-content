---
title: "Al utilizar el filtro 'Todos' en la interfaz de usuario de CRM se produce un error"
id: 4B8l0OdT8TO907gc69X4mM
status: ARCHIVED
createdAt: 2024-11-12T22:02:47.025Z
updatedAt: 2024-11-22T20:58:26.049Z
publishedAt: 
firstPublishedAt: 2024-11-12T22:02:48.439Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: using-all-filter-in-the-crm-ui-returns-an-error
locale: es
kiStatus: Backlog
internalReference: 1134321
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El filtro "Todos" de la interfaz de usuario de CRM devuelve un error cuando se utiliza en entidades con un gran número de documentos. Esto ocurre porque el filtro "Todos" realiza una búsqueda comodín en todos los campos de búsqueda, lo que puede dar lugar a un error debido al gran volumen de datos que se consultan.

 ![](https://vtexhelp.zendesk.com/attachments/token/iVkKaiAhzADOKFWdMVwXp6vuM/?name=Captura+de+Tela+2024-11-12+a%CC%80s+18.40.15.png)

##

##

## Simulación



- Acceda a la interfaz de usuario de CRM y navegue hasta un formulario de entidad con un gran número de documentos.
- Utilice el filtro "Todos" para buscar cualquier término en todos los campos de búsqueda.
- Observe que el sistema intenta realizar una búsqueda comodín en todos los campos buscables, lo que puede dar lugar a un error debido al gran volumen de datos.
"**Se ha producido un error inesperado. Por favor, inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia".



## Workaround


Utilice filtros para campos específicos.

