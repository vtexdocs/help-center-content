---
title: 'CMS Legacy Collections Tiempo de espera'
id: 3TgWP83kn8G8NClnUHmaoS
status: PUBLISHED
createdAt: 2022-02-25T12:33:00.051Z
updatedAt: 2023-05-19T18:23:32.371Z
publishedAt: 2023-05-19T18:23:32.371Z
firstPublishedAt: 2022-02-25T12:33:00.399Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: cms-legacy-collections-tiempo-de-espera
kiStatus: Backlog
internalReference: 434026
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A menudo, al intentar guardar los datos de un grupo de colecciones utilizando la aplicación de colecciones heredada, en la ruta /admin/a e intentando Guardar grupo, el usuario, en casos de catálogos grandes (gran cantidad de categorías, marcas, productos), se encontrará con un mensaje de error de tiempo de espera y no podrá guardar sus cambios.

`{cuenta}.myvtex.com/admin/a/`

 ![](https://vtexhelp.zendesk.com/attachments/token/pBcpo1sWfBMio0mpL5iMc4Iek/?name=inline-1265713773.png)


##

## Simulación


1) Vaya a la aplicación CMS UI con una tienda que tenga una base de catálogo grande, por ejemplo, >10000 productos.
2) Vaya a "Grupos de productos (Colecciones) y seleccione "_nuevo grupo_".
3) Cree un grupo y luego seleccione algunas casillas en el formulario
4) Intente guardar estos cambios
5) Si la solicitud tarda más de 50 segundos en guardarse, lo que suele ocurrir en cuentas con gran cantidad de datos, la solicitud se detendrá y los datos no se guardarán.



## Workaround


Utilizando el nuevo administrador de cobros O utilizando nuestros puntos finales de la API de cobros: https://developers.vtex.com/vtex-rest-api/reference/collection-cms





