---
title: 'Intelligent Search'
id: 3qgT47zY08biLP3d5os3DG
status: PUBLISHED
createdAt: 2020-03-05T14:47:05.068Z
updatedAt: 2024-09-06T20:31:00.380Z
publishedAt: 2024-09-06T20:31:00.380Z
firstPublishedAt: 2020-03-05T19:53:38.701Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: overview-intelligent-search
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
order: 1
---

Intelligent Search es la herramienta de búsqueda nativa de VTEX, diseñada para optimizar la experiencia de compra en el comercio digital, apoyando a los clientes en cada etapa de su jornada de compra, independientemente del canal que utilicen (sitio web, aplicación móvil, herramientas conversacionales, entre otros).

De manera simple e intuitiva, presenta resultados relevantes desde la primera interacción del usuario con la tienda, ya sea a través de la barra de búsqueda, navegando por las categorías o explorando las vitrinas de productos.

En esta serie de artículos, presentamos los pasos necesarios para configurar y comenzar a utilizar Intelligent Search en tu tienda VTEX.

> ℹ️ Descubre todas las funcionalidades disponibles y aprende más sobre el comportamiento de la herramienta en [Intelligent Search - Visión general](https://help.vtex.com/es/tutorial//tutorial/intelligent-search-vision-geral--5o8ixTpYIxx3uJD0B1xp3z).

## Requisitos

Antes de empezar a utilizar Intelligent Search, comprueba si tu tienda cumple los siguientes requisitos:

* La tienda debe haber sido desarrollada utilizando [Store Framework](https://developers.vtex.com/docs/guides/store-framework) o [FastStore](https://developers.vtex.com/docs/guides/faststore), es decir, necesita utilizar una versión de [Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) vtex.edition-store@3.x o más reciente.

  > ℹ️ Este requisito no aplica a escenarios de implementación headless, donde la tecnología frontend no es proporcionada por VTEX. En estos casos, es necesario implementar el envío de los eventos de búsqueda. Para más información, consulta [VTEX Intelligent Search Events API - Headless](https://developers.vtex.com/docs/api-reference/intelligent-search-events-api-headless).

* La tienda debe tener [productos y SKUs registrados en el catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL) y activos.
