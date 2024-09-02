---
title: 'Búsqueda con parámetro de especificación devuelve búsqueda vacía. ¿Que hacer?'
id: 5qG7kkEeOsG6OQgu8YAKko
status: CHANGED
createdAt: 2018-01-31T15:46:42.842Z
updatedAt: 2020-11-27T19:39:57.229Z
publishedAt: 2020-04-20T15:15:13.316Z
firstPublishedAt: 2018-01-31T16:25:57.832Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_59
slug: busqueda-con-parametro-de-especificacion-devuelve-busqueda-vacia
locale: es
legacySlug: busqueda-con-parametro-de-especificacion-devuelve-busqueda-vacia
---

<div class = "alert alert-warning">
  <strong>Atención</strong>: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.
</div>

En el caso de que la URL `http://www.{account-name}.com.br/busca/?fq=specificationFilter_{XXX}:{Y}` no está trayendo los productos/SKUs que tienen la especificación deseada, es posible que el parámetro __Filtro__ no esté marcado en el registro del campo de producto/SKU.

Para resolver el problema, siga estos pasos:

1. Acceda al módulo __Catálogo__.
2. Haga clic en __Categoría__.
3. Haga clic en la categoría donde se ha registrado la especificación. Usted debe hacer clic en la categoría de raíz donde se creó la especificación.
4. En el lado derecho del árbol de categorías, en el menú azul, haga clic en __acciones__.
5. Dependiendo de dónde esté registrada la especificación, haga clic en __Campo (Producto)__ o __Campo (SKU)__.
6. En la especificación deseada, haga clic en __Alterar__.
7. Marque la flag __Filtro__.
8. Haga clic en __Guardar__.
