---
title: '<vtex:contentPlaceHolder id="Acessorios"/> no funciona'
id: 7x8f0vGaunX1P3EFJGCYaz
status: PUBLISHED
createdAt: 2022-01-23T02:24:12.606Z
updatedAt: 2022-11-25T22:09:44.078Z
publishedAt: 2022-11-25T22:09:44.078Z
firstPublishedAt: 2022-03-16T21:44:24.602Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: vtexcontentplaceholder-idacessorios-no-funciona
kiStatus: Backlog
internalReference: 466147
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El control `<vtex:contentPlaceHolder id="Acessorios"/>` debería traer una vista de los productos relacionados establecidos como el tipo `acessorios` a la página del producto.
Sin embargo, actualmente, este control no muestra esta vista, por lo que el conjunto de productos relacionados no se mostrará.



## Simulación



- Utilice el control en una plantilla. (Para ayudar a ello puedes crear el `vtex:contentPlaceHolder` siguiendo la documentación: Lista de controles para plantillas)
- Comprobar si hay algún producto con productos relacionados establecidos como `acessorios`. Se podría utilizar la API de CrossSeling para comprobar esta información para un producto específico - Obtener búsqueda de productos de accesorios.
- Además, en el Portal, cargue la página de aterrizaje que utiliza el diseño con este control.
- Vea que los productos relacionados no se mostrarán.



## Workaround


Utilice otros controles de CrossSellings o la personalización con la respuesta de la API.

