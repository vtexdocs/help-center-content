---
title: Disponibilidad
id: 7LMQbWK5nElIkXo0NK8Kux
status: PUBLISHED
createdAt: 2021-10-04T18:01:24.137Z
updatedAt: 2021-10-04T18:18:56.501Z
publishedAt: 2021-10-04T18:18:56.501Z
firstPublishedAt: 2021-10-04T18:18:56.501Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: disponibilidad
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

Al elaborar un resultado de búsqueda, VTEX Intelligent Search tiene en cuenta la disponibilidad de cada producto encontrado en la búsqueda. Los productos disponibles siempre tendrán prioridad sobre los no disponibles en los resultados de búsqueda. 

Al verificar la disponibilidad del producto, VTEX Intelligent Search utiliza el campo **Mostrar producto agotado** registrado en el [Catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) para saber qué productos se mostrarán aunque no estén disponibles. Si la configuración del producto define que no se mostrará si está agotado, la plataforma lo situará al final del resultado de búsqueda. VTEX Intelligent Search también verifica si:

- El producto en cuestión está activo.
- Al menos un SKU del producto está activo.
- La categoría del producto está activa.
- La marca del producto está activa.
- El campo **Mostrar en la tienda** del producto está configurado como activo.

Tras verificar la disponibilidad, el sistema combina ítems de tu tienda, del catálogo de los [sellers](https://help.vtex.com/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w) y las configuraciones de las [políticas comerciales](https://help.vtex.com/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) registradas para llegar al precio y stock finales. Si alguno de estos ítems tiene precio y stock, el producto está disponible. Cada vez que el stock y el precio del producto cambian, se programa una nueva [indexación](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) y se actualiza esta información.

Se pueden añadir otros factores, como [Relevancia](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) y [Reglas de _merchandising_](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), para influir en el resultado. Sin embargo, la disponibilidad seguirá siendo el criterio más importante para el resultado de búsqueda. 
