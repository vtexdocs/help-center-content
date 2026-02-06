---
title: 'Crear clúster de clientes'
id: frequentlyAskedQuestions_1724
status: PUBLISHED
createdAt: 2019-01-24T20:45:58.065Z
updatedAt: 2024-08-12T16:09:00.345Z
publishedAt: 2024-08-12T16:09:00.345Z
firstPublishedAt: 2019-01-24T22:05:41.666Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-can-i-create-cluster-of-customers
legacySlug: como-crear-un-cluster-de-cliente
locale: es
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Un clúster es una agrupación de los clientes de una mismo segmento de clientes. Es un enfoque que sirve para identificar perfiles y obtener una mayor llegada en las actividades relacionadas con los usuarios.

> ⚠️ Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso. <ul> <li> [ Características de las versiones de Master Data ](/es/docs/tutorials/master-data#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/docs/guides/master-data-v2-basics) </li> </ul>

Estos datos son muy válidos para el marketing y la publicidad, por lo que se puede configurar su clúster y cuáles son las reglas para un cliente.

Este artículo tiene como objetivo mostrar cómo configurar su CRM para crear un clúster.

<ol start="1">
    <li>El primer paso es crear un campo en MasterData con el nombre del clúster deseado. Ejemplo: Revendedores. De esta manera, se destacarán los clientes que son revendedores, recibiendo una promoción exclusiva, por ejemplo. [Acceda a nuestro manual sobre cómo crear un campo.](/es/tutorial/como-crio-um-campo-no-master-data)</li>
</ol>

> ℹ️ Para que un clúster funcione correctamente en una promoción, defina el nuevo campo personalizado creado como **buscable** y **filtrable** en MasterData.

<ol start="2">
    <li>El segundo paso es crear este campo en el formulario para que sea posible ver los datos. [Para eso, vea nuestro manual.](/es/tutorial/como-crio-um-campo-no-master-data)</li>
</ol>

Técnicamente, un clúster en el CRM es nada más que un campo.

Para rellenar este campo, usted puede usar una [planilla de importación](/es/docs/tutorials/importar-datos-en-master-data-v1) o una API, o puede hacerlo manualmente por el formulario Cliente en CRM. Todo depende de la estrategia de la tienda para agrupar a sus clientes.

## Más información

- [Crear promoción para un clúster](/es/docs/tutorials/creando-promociones-cluster-clientes)
