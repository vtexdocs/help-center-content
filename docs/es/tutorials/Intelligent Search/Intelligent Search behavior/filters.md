---
title: 'Filtros'
id: k24mQQa9SjmhNWSwdqIMB
status: PUBLISHED
createdAt: 2024-06-27T16:43:43.811Z
updatedAt: 2024-06-27T16:44:34.723Z
publishedAt: 2024-06-27T16:44:34.723Z
firstPublishedAt: 2024-06-27T16:44:34.723Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: filtros
locale: es
legacySlug: filtros
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

La funcionalidad Filtros muestra las especificaciones de los resultados de una búsqueda de forma agrupada. Permite que el cliente explore características relevantes de un producto durante la experiencia de búsqueda, además de proporcionar escenarios que facilitan la toma de decisiones del usuario.

Cuando un cliente selecciona un filtro (precio, color, tamaño y marca), esta información se utiliza para restringir tanto los ítems devueltos como los demás filtros existentes en este contexto de búsqueda.

**VTEX Intelligent Search** utiliza el contexto de los productos que se muestran como resultados de la búsqueda para saber exactamente qué filtros deben mostrarse al cliente, de acuerdo con la configuración del catálogo.

>ℹ️ El orden de los filtros de marca, departamento, categoría y subcategoría se determina por la cantidad de productos registrados en cada uno de los filtros.

Ejemplo: tenga en cuenta que el filtro *Tamaño* está registrado en el catálogo de una tienda y que solo el producto *zapatilla* tiene la especificación *Tamaño* rellenada. En una búsqueda por el término *zapatilla*, *Tamaño* aparecerá como un filtro. En la búsqueda de cualquier otro término, como *gorra*, esta especificación no se mostrará como un filtro.

El resultado de búsqueda no mostrará una especificación si solo existe como filtro o si el cliente accede a ella a través del menú de la tienda. Ejemplo: si el cliente selecciona el filtro Electrodomésticos directamente en el menú, no se mostrará Departamento como filtro lateral.

>ℹ️ Si el resultado de la búsqueda devuelve más de 30 mil productos, se omitirán algunos valores de filtros, ya que solo se considerarán las especificaciones de una parte de estos productos.

La funcionalidad Filtros tiene las siguientes funciones:

- Búsqueda que permite al cliente buscar un término dentro de un filtro.
- Configurar y definir la cantidad máxima de opciones en un filtro antes de generar un desplazamiento.
- Configurar en cuál *layout* se mostrará un filtro. Puede elegir entre los siguientes formatos:

   - Lista vertical (formato estándar).
   - Lista horizontal: se utiliza para mostrar filtros como «Tamaño» y «Color».
   - Barra deslizante: utilizada para alternar del precio mínimo al precio máximo.
   - Entrada de valores: permite al cliente indicar el precio “De” y “Hasta” que se utilizará en el filtro.

Consulte la guía [Search Result](https://developers.vtex.com/docs/apps/vtex.search-result#:~:text=%7D-,filter%2Dnavigator.v3%20block,-This%20block%20renders) en el Developer Portal para obtener más detalles técnicos sobre el uso de filtros.

>⚠️ Aunque las tiendas regionalizadas solo muestran productos disponibles en una determinada región en la página de lista de productos, los filtros no tienen en cuenta la regionalización. Debido a esta limitación, es posible que los clientes de la tienda seleccionen filtros que resulten en productos que no están disponibles en su región.
