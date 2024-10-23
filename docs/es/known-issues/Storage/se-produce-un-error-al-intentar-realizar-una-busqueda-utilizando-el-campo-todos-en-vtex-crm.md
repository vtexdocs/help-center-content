---
title: "Se produce un error al intentar realizar una búsqueda utilizando el campo 'Todos' en VTEX CRM"
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2023-10-25T18:46:48.731Z
publishedAt: 2023-10-25T18:46:48.731Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm
locale: es
kiStatus: Backlog
internalReference: 925679
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Este caso ocurre con entidades que contienen un gran número de campos y millones de registros en una entidad. El problema surge debido a que el buscador utiliza el campo "Todos", que envía peticiones individuales para cada campo consultable de la entidad y multiplica la carga de peticiones para cada documento.


##

## Simulación



1. Acceda a `https://.vtexcrm.com.br/`.
2. Navegar hasta una vista que representa una entidad con millones de registros.
3. Inicie una búsqueda utilizando el campo "Todos".
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/se-produce-un-error-al-intentar-realizar-una-busqueda-utilizando-el-campo-todos-en-vtex-crm_1.png)
4. Observa la respuesta del sistema y comprueba si devuelve un error o experimenta problemas de rendimiento significativos.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/se-produce-un-error-al-intentar-realizar-una-busqueda-utilizando-el-campo-todos-en-vtex-crm_2.png)
5. Repita la búsqueda con un campo de búsqueda específico para confirmar si el problema está relacionado con el mecanismo de búsqueda del campo "Todos".



## Workaround


Buscar con un campo de búsqueda específico.

