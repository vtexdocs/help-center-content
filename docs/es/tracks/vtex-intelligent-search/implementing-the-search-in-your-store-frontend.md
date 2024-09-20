---
title: 'Implementar la búsqueda en el frontend de la tienda'
id: 9BRHYNfuS6bP4WG4pOmgb
status: PUBLISHED
createdAt: 2024-09-06T20:20:32.084Z
updatedAt: 2024-09-06T20:26:56.567Z
publishedAt: 2024-09-06T20:26:56.567Z
firstPublishedAt: 2024-09-06T20:26:56.567Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: implementar-la-busqueda-en-el-frontend-de-la-tienda
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

Para empezar a utilizar las funcionalidades de búsqueda, debes agregar los componentes de Intelligent Search al frontend de tu tienda, de acuerdo con la tecnología utilizada para la creación de la misma: Store Framework o FastStore.

Ponte en contacto con el equipo de desarrolladores de tu tienda para personalizar el frontend utilizando los componentes específicos para cada tecnología, detallados a continuación.

>ℹ️ Esta etapa no aplica a escenarios de implementación headless, donde la tecnología frontend no la proporciona VTEX. En estos casos, es necesario implementar el envío de los eventos de búsqueda. Para más información, consulta [VTEX Intelligent Search Events API - Headless](https://developers.vtex.com/docs/api-reference/intelligent-search-events-api-headless).

## Store Framework

Si tu tienda ha sido desarrollada con [Store Framework](https://developers.vtex.com/docs/guides/store-framework), utiliza los componentes siguientes para implementar la búsqueda:

| Componente | Descripción |
| :---- | :---- |
| [Search Result](https://developers.vtex.com/docs/guides/vtex-search-result)  | Procesa los resultados obtenidos por la API de Intelligent Search y los muestra a los usuarios. Este componente exporta todos los bloques de la tienda que se esperan en una página de resultados de búsqueda, como filtros y galería de productos. |
| [Search Bar](https://developers.vtex.com/docs/apps/vtex.store-components/SearchBar) | Muestra una barra de búsqueda y presenta los productos correspondientes. |
| [Search](https://developers.vtex.com/docs/apps/vtex.search) | Proporciona elementos de interfaz que mejoran la experiencia de búsqueda, como la funcionalidad Autocomplete y otros bloques opcionales. |
| ↪ [Autocomplete](https://developers.vtex.com/docs/apps/vtex.search/Autocomplete) | Sugiere resultados mientras el usuario escribe. Muestra los resultados de búsquedas anteriores basados en búsquedas actuales y pasadas, presentados en cuatro listas: Últimas búsquedas efectuadas Sugerencia de búsqueda Sugerencia de productos Términos más buscados Aprende más sobre el comportamiento de este componente en la guía [Autocomplete](https://help.vtex.com/pt/tutorial/autocomplete--6qhP0ZQ4JqUBdgFnbnxS4a). |
| ↪ [Suggestions](https://developers.vtex.com/docs/apps/vtex.search/suggestions) | Sugiere términos de búsqueda similares a la consulta actual. |
| ↪ [Banner](https://developers.vtex.com/docs/apps/vtex.search/banner) | Muestra banners en la página de resultados de búsqueda del cliente, dependiendo del contexto de la búsqueda. |
| ↪ [DidYouMean](https://developers.vtex.com/docs/apps/vtex.search/didyoumean) | Sugiere la corrección de un posible error ortográfico en la consulta actual. |

Para más información sobre los componentes disponibles, consulta la [guía para desarrolladores sobre Search](https://developers.vtex.com/docs/guides/search-overview).

## FastStore

Si tu tienda fue desarrollada con [FastStore](https://developers.vtex.com/docs/guides/faststore), utiliza los componentes descritos en la guía [Search](https://developers.vtex.com/docs/guides/faststore/features-search) de la documentación de FastStore para implementar Intelligent Search.
