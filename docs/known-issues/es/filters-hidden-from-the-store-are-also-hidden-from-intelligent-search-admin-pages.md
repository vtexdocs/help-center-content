---
title: 'Los filtros ocultos en la tienda también se ocultan en las páginas de administración de la Búsqueda Inteligente.'
id: 3TvpIUFzdXWesADHDhjyLQ
status: PUBLISHED
createdAt: 2022-02-23T21:59:22.607Z
updatedAt: 2023-10-19T16:24:57.801Z
publishedAt: 2023-10-19T16:24:57.801Z
firstPublishedAt: 2022-02-23T21:59:22.977Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: los-filtros-ocultos-en-la-tienda-tambien-se-ocultan-en-las-paginas-de-administracion-de-la-busqueda-inteligente
locale: es
kiStatus: Backlog
internalReference: 416638
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunas especificaciones tienen un uso interno o escenarios que necesitan ser ocultados, pero la tienda necesita esa especificación para propósitos de la búsqueda, como usarlo para Reglas de Mercadeo.


##

## Simulación


En algunas cuentas, la especificación SKU "color" no aparece como opción en "Utilizar especificaciones SKU para mostrar productos individuales en los resultados de búsqueda". Vemos que "color" es una de las especificaciones en "Ocultar facetas".



## Workaround


Elimine el atributo de la configuración de "Ocultar facetas", cree la regla de comercialización o realice la configuración esperada y vuelva a ocultar el atributo.

