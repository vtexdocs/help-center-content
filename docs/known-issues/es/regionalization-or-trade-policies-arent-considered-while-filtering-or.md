---
title: La regionalización o las políticas comerciales no se tienen en cuenta al filtrar o clasificar los artículos por precio
id: hipqkoLiWMSMEWJxecoIW
createdAt: 2023-05-08T14:46:49.797Z
updatedAt: 2023-05-08T14:54:57.509Z
publishedAt: 2023-05-08T14:54:57.509Z
firstPublishedAt: 2023-05-08T14:50:42.279Z
contentType: knownIssue
productTeam: Intelligent Search
author: authors_84
tag: Intelligent Search
slug: la-regionalizacion-o-las-politicas-comerciales-no-se-tienen-en-cuenta-al
status: Backlog
internalReference: 571101
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Cuando se utiliza la búsqueda inteligente (a través de PLP o incluso de su API) junto con la regionalización (regionId) o la variación de la política comercial, la clasificación y el filtrado de artículos por precio no funcionan correctamente.

Para este módulo, la regionalización y las políticas comerciales pueden filtrar/clasificar sólo por la información de disponibilidad/existencias, sin tener en cuenta las variaciones de precio, que siempre están vinculadas al mismo precio indexado. Los precios actualizados se descubren al renderizar el contenido (por lo que siempre son correctos) pero no afectan a los filtros y/o ordenaciones (realizados en un momento anterior), lo que se extiende a las promociones y a los filtros de rango de precios.

Esto también es un problema para los artículos disponibles sólo en un contexto regionalizado. Si el "vendedor 1" y sus opciones globales de WL están agotados el artículo no tendrá precio (será cero), lo que descarta el artículo de los filtros o puede ponerlos al final de los resultados.

## Simulación

En una tienda con diferentes precios por vendedores WL (y usando regionalización) o política comercial, o con artículos no disponibles para el "vendedor 1", acceda a cualquier PLP con un filtrado/regionalizado por la dimensión aplicable mientras ordena por precio - notará que los precios de los productos no se ordenarán como se espera.

## Workaround

Los filtros de regionalización y política comercial no están preparados para trabajar con variaciones de precios, por lo que no existen soluciones.

Para el escenario en el que el artículo no está disponible para el "vendedor 1", es importante revisar si los vendedores integrales están configurados correctamente, lo que puede evitar el escenario - sólo los artículos ampliamente no disponibles se verían afectados.

