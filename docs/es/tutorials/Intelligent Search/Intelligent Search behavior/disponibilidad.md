---
title: 'Disponibilidad'
id: 3ZcZOzTSr2RdauUbn7qTa9
status: PUBLISHED
createdAt: 2024-06-24T17:51:07.903Z
updatedAt: 2025-03-31T18:58:33.591Z
publishedAt: 2025-03-31T18:58:33.591Z
firstPublishedAt: 2024-06-24T18:00:08.767Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: availability
locale: es
legacySlug: disponibilidad
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

Al elaborar un resultado de búsqueda, VTEX Intelligent Search tiene en cuenta la disponibilidad de cada producto encontrado en la búsqueda. Los productos disponibles siempre tendrán prioridad sobre los no disponibles en los resultados de búsqueda. 

Al verificar la disponibilidad del producto, VTEX Intelligent Search utiliza el campo **Mostrar cuando no tenga stock** registrado en el [Catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) para saber qué productos se mostrarán aunque no estén disponibles. Si la configuración del producto determina que no debe mostrarse cuando esté fuera de stock, la plataforma no presentará el producto. Sin embargo, si la configuración indica que el producto debe mostrarse incluso cuando esté sin stock, la plataforma lo colocará al final de los resultados de búsqueda.

VTEX Intelligent Search también verifica si:

- El producto en cuestión está activo.
- Al menos un SKU del producto está activo.
- La categoría del producto está activa.
- La marca del producto está activa.
- El campo **Mostrar en el sitio web** del producto está configurado como activo.

Tras verificar la disponibilidad, el sistema combina ítems de tu tienda, del catálogo de los [sellers](/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w) y las configuraciones de las [políticas comerciales](/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) registradas para llegar al precio y stock finales. Si alguno de estos ítems tiene precio y stock, el producto está disponible. Cada vez que el stock y el precio del producto cambian, se programa una nueva [indexación](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) y se actualiza esta información.

Se pueden añadir otros factores, como [Relevancia](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) y [Reglas de _merchandising_](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), para influir en el resultado. Sin embargo, la disponibilidad seguirá siendo el criterio más importante para el resultado de búsqueda. 
