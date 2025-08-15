---
title: 'Catalogación de SKUs recibidos'
id: tutorials_396
status: PUBLISHED
createdAt: 2017-04-27T22:06:59.819Z
updatedAt: 2022-06-21T20:18:01.465Z
publishedAt: 2022-06-21T20:18:01.465Z
firstPublishedAt: 2017-04-27T23:03:22.726Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: manual-sku-cataloging
legacySlug: aprobacion-de-sugerencias-de-skus
locale: es
subcategoryId: 4hU8QWlzhxWg711Kz7Gmib
---

La página de SKUs recibidos permite que el marketplace visualice, priorice y catalogue los ítems enviados por sus sellers. De esta manera, es posible: 

- Crear nuevos productos.
- Asociarlos a SKUs ya existentes.
- Asociarlos a productos ya existentes.

La catalogación se puede hacer [a través de uno o más matchers](https://help.vtex.com/es/tutorial/entendendo-a-pontuacao-do-vtex-matcher?locale=es "por medio de uno o más matchers"), tanto manual como automáticamente. Además, también existe la posibilidad de utilizar herramientas externas para realizar esta operación.

# Priorizando la catalogación #

La lista de SKUs recibidos fue diseñada para ayudar a priorizar y acelerar la catalogación de estos ítems.
Algunas de las funcionalidades que ayudan en este proceso son:

## Filtros ##

En el recurso de búsqueda, es posible combinar diferentes filtros para que la exhibición de SKUs sea más exacta. Intente filtrar SKUs por marca, seller o subcategoría para generar la visualización deseada. 

Por ejemplo, si se seleccionan la marca "ABC" y la subcategoría "Calcetines", la visualización mostrará todos los SKUs de la marca ABC que sean de la subcategoría "Calcetines".

Además, cabe mencionar que las opciones de filtros se dan de acuerdo con los SKUs que están disponibles en la lista. De este modo, imagine que el marketplace tiene a los sellers A, B y C y existen SKUs apenas de los sellers B y C pendientes en la catalogación. Esto significa que la selección de filtros mostrará solo los resultados de los sellers B y C.

## Órden

Por estándar, la visualización presenta primero los ítems más recientes. Sin embargo, es posible ordenar por precio e inventario.

En este caso, los ítems de la tabla se ordenarán de forma ascendente o descendente al hacer clic en "Precio" o "Inventario" en el encabezado.

# Catalogando ítems 

En la lista, cualquier SKU ya está disponible para la catalogación. Sin embargo, se recomienda realizar el mapeo de categorías y marcas antes de este paso para que el proceso de catalogación sea más rápido.

Le recordamos que las sugerencias que están pendientes de aprobación permanecen disponibles por apenas 30 días. Después de este período, estas caducan automáticamente.

## Opciones de catalogación ##

En la lista, haga clic en el botón de tres puntos y seleccione una de las siguientes opciones:
- **Aprobar un nuevo producto**: crea un nuevo SKU en el catálogo y, por lo tanto, un nuevo producto. Se recomienda utilizar esta opción cuando un determinado producto aún no existe en el catálogo del marketplace.

- **Asociar a un SKU existente**: establece el link entre el SKU del seller y un SKU que ya existe en el catálogo del marketplace.

Un caso posible sería el de un marketplace que tenga el celular 1234 con 128GB de memoria del seller A.

Ahora, digamos que el mismo marketplace recibió del seller B el mismo SKU 128GB. Así, para no duplicar el catálogo, el marketplace necesita asociar estos SKUs.

De este modo, es necesario indicar el ID del SKU ya existente para que la asociación se realice correctamente.

- **Asociar a un producto existente:** añade un nuevo SKU a un producto que ya existe en su catálogo.

Imagine que el marketplace ya tiene el SKU Camisa Blanca en las tallas P, M y G. Pero, recientemente, el seller envió al inventario las tallas PP y GG de la misma Camisa Blanca.

Al hacer esta asociación, las nuevas tallas se agrupan con las otras que ya estaban registradas. De esta manera, el producto tendrá disponible las tallas PP, P, M, G y GG.

En este caso, es necesario indicar el ID del producto ya existente para que la asociación se realice con éxito.

- **Rechazar SKU:** rechaza SKUs que el marketplace no encuentra sentido venderlos en su tienda. Cuando se rechaza un SKU, significa que fue bloqueado por el marketplace. Es decir, la próxima vez que el seller envíe sus productos, aquellos que fueron rechazados ya no estarán entre los enviados. Es posible desbloquear un SKU por API REST, si el marketplace quiere recibirlo de nuevo como una sugerencia del seller. Para obtener más información sobre el desbloqueo de SKUs, acceda a nuestra [documentación sobre API en el Portal del Desarrollador](https://developers.vtex.com/vtex-rest-api/reference/savesuggestion).

- **Aprobación automática**: también es posible configurar la aprobación en forma automática de los SKUs de un seller  específico, independientemente de su puntuación del Matcher. Esta acción solo puede realizarse a través de API Rest. Consulte nuestra documentación en [API de configuración de aprobación](https://developers.vtex.com/vtex-rest-api/reference/getautoapprovevaluefromconfig) para saber más.

## Catalogación en masa ##

El marketplace también tiene la opción de catalogar SKUs en masa directamente de la lista. 

El procedimiento es bien simple:

1. En las cajas de selección del lado izquierdo de la pantalla, marque los SKUs que desea catalogar.  
2. Seleccione la acción de catalogación en la barra azul que aparecerá arriba.  
3. Revise o añada las informaciones necesarias para cada SKU seleccionado en el modal.  
4. En la esquina inferior derecha del box, haga clic en el botón "Aprobar".  

De esta manera, sus SKUs serán catalogados.

Por ejemplo, usted ya tiene un producto en el catálogo, pero necesita añadir nuevos tamaños. Con esta funcionalidad, será posible seleccionar todos los tamaños a la vez y hacer la asociación.

O si desea crear productos nuevos y únicos —como sillas, botellas, libros— solo tiene que seleccionarlos y aprobarlos como nuevos productos.

