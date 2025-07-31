---
title: "Tiempo límite de cobro"
id: 3TgWP83kn8G8NClnUHmaoS
status: PUBLISHED
createdAt: 2022-02-25T12:33:00.051Z
updatedAt: 2025-06-09T20:28:41.035Z
publishedAt: 2025-06-09T20:28:41.035Z
firstPublishedAt: 2022-02-25T12:33:00.399Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: tiempo-limite-de-cobro
locale: es
kiStatus: Backlog
internalReference: 434026
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A menudo, al intentar guardar los datos de un grupo de colecciones utilizando la aplicación de colecciones, bajo la ruta /admin/a e intentando Guardar Grupo, el usuario, en casos de catálogos grandes (gran cantidad de categorías, marcas, productos), se encontrará con un mensaje de error de tiempo de espera y no podrá guardar sus cambios.

Esto también puede ocurrir con el módulo de nuevas colecciones.

`{account}.myvtex.com/admin/a/`

 ![](https://vtexhelp.zendesk.com/attachments/token/pBcpo1sWfBMio0mpL5iMc4Iek/?name=inline-1265713773.png)


##

## Simulación


1) Vaya a la aplicación CMS UI con una tienda que tenga una base de catálogo grande, por ejemplo, >10000 productos.
2) Vaya a "Grupos de productos (Colecciones) y seleccione "_nuevo grupo_".
3) Cree un grupo y luego seleccione algunas casillas en el formulario
4) Intente guardar estos cambios
5) Si la solicitud tarda más de 50 segundos en guardarse, lo que suele ocurrir en cuentas con gran cantidad de datos, la solicitud se detendrá y los datos no se guardarán.



## Workaround


Utilizando nuestros puntos finales de API de colecciones: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection, sin embargo, es importante tener en cuenta que en algunos casos, cuando hay una gran cantidad de datos que se actualizan, el tiempo de espera todavía puede ocurrir a través de la API.


