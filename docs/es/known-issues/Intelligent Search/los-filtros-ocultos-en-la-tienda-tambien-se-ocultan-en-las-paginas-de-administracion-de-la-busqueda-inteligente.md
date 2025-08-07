---
title: "Los filtros ocultos en la tienda también se ocultan en las páginas de administración de la Búsqueda Inteligente."
id: 3TvpIUFzdXWesADHDhjyLQ
status: PUBLISHED
createdAt: 2022-02-23T21:59:22.607Z
updatedAt: 2025-05-27T17:12:18.881Z
publishedAt: 2025-05-27T17:12:18.881Z
firstPublishedAt: 2022-02-23T21:59:22.977Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: los-filtros-ocultos-en-la-tienda-tambien-se-ocultan-en-las-paginas-de-administracion-de-la-busqueda-inteligente
locale: es
kiStatus: Backlog
internalReference: 416638
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunas facetas tienen un uso interno o escenarios que necesitan ser ocultados, pero la tienda necesita esa faceta para propósitos de la búsqueda, como usarla para Reglas de Mercadeo.


##

## Simulación


En algunas cuentas, la especificación SKU "color" no aparece como opción en "Utilizar especificaciones SKU para mostrar productos individuales en los resultados de búsqueda". Vemos que "color" es una de las especificaciones en "Ocultar facetas".



## Workaround


En **Admin > Configuración de búsqueda**, elimine la faceta (o el filtro) de la configuración "Ocultar facetas", cree la regla de comercialización o realice la configuración esperada y vuelva a ocultar la faceta (o el filtro).

