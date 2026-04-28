---
title: 'Como usar el control Search Result'
id: 6xOLxZA2Ws8Q2ug6U6ksyo
status: PUBLISHED
createdAt: 2018-03-02T13:14:11.357Z
updatedAt: 2022-03-23T17:19:01.219Z
publishedAt: 2022-03-23T17:19:01.219Z
firstPublishedAt: 2018-03-06T12:31:03.507Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-use-the-search-result-control
legacySlug: como-usar-el-control-search-result
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El control `<vtex.cmc:searchResult/>` renderiza una vitrina con los productos devueltos por una búsqueda del usuario.

> ℹ️ Este control funciona **sólo en páginas con contexto de búsqueda**, o sea, páginas donde los resultados mostrados fueron traídos por una búsqueda del usuario.

Cuando el usuario realiza una búsqueda en la tienda, el sistema de VTEX intenta traer resultados de acuerdo con un orden de prioridad de filtros. Entienda la búsqueda en el artículo [Cómo funciona la búsqueda de VTEX](/es/docs/tutorials/como-funciona-la-busqueda-de-vtex).

Digamos, por ejemplo, que el resultado sea un contexto de categoría. Es decir, el usuario buscó, por ejemplo, por el término "Camisas", el sistema identificó que existe una categoría con el nombre "Camisas" y cargó la página de esa categoría - usando, por lo tanto, el template de categoría. Si el control Search Result está en el código de ese template (donde de hecho está, por defecto), va a renderizar una vitrina con los productos de esa categoría.

Este control tiene disponibles algunos atributos, que se utilizan para dar indicaciones al sistema en cuanto a las condiciones de visualización de los productos.

Algunos de estos atributos son opcionales, pero otros son __obligatorios__, como el atributo que indica qué template de estante se utilizará para mostrar los productos.

A continuación se muestra la lista de todos los atributos del control Search Result:

| Atributo | Función | Obligatorio? | Ejemplo de uso |
| ---------- | ---------- | ---------- | ---------- |
| `layout` | Código de la plantilla del estante que exhibirá los productos. | Sí | `<vtex.cmc:searchResult layout="48e223e6-da80-4610-b3d5-4e5cfaf94f13" />` |
| `itemCount` | Cantidad de elementos a presentar. | Sí | `<vtex.cmc:searchResult itemCount="10" />` |
| `columnCount` | Cantidad de columnas para visualización de los productos. | Sí | `<vtex.cmc:searchResult columnCount="4" />` |
| `showUnavailable` | Cuando se establece en true, significa que deben visualizarse los productos agotados. | No | `<vtex.cmc:searchResult showUnavailable="false" />` |
| `selectionMode=”batch-buy”` | Permite la realización de compras por lotes. | No | `<vtex.cmc:searchResult selectionMode="batch-buy" />` |
| `isTrackable` | Cuando se establece en true, significa que este control debe ser rastreable. | No | `<vtex.cmc:searchResult isTrackable=true />`  |
| `InternalCampaign` | Nombre de la audiencia de campaña interna. | No | `<vtex.cmc:searchResult InternalCampaign="Resultado busca landing" />` |
| `InternalPart` | Nombre de la vista interna. | No | `<vtex.cmc:searchResult InternalPart="Resultado Busca" />` |

## Código HTML renderizado

El código renderizado por el control Search Result tiene, de forma predeterminada, la siguiente estructura:

![searchResult1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-usar-el-control-search-result_1.jpg) 

Y los elementos correspondientes que son renderizados por el control en su versión no personalizada siguen el patrón abajo:

![searchResult2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-usar-el-control-search-result_2.jpg) 

![searchResult3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-usar-el-control-search-result_3.jpg) 

![searchResult4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-usar-el-control-search-result_4.jpg) 

![searchResult5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-usar-el-control-search-result_5.jpg)
