---
title: Frontend
id: 5DTcawNjc5MovtD7HNqURl
status: PUBLISHED
createdAt: 2022-12-21T20:43:31.083Z
updatedAt: 2023-04-25T19:15:45.158Z
publishedAt: 2023-04-25T19:15:45.158Z
firstPublishedAt: 2022-12-22T19:57:08.694Z
contentType: trackArticle
productTeam: VTEX IO
slug: frontend
trackId: 3fHF3GIjK8UugnQKIakpl9
trackSlugES: desarrollo-de-la-tienda
---

Los frontend son la capa de presentación para el usuario, ya que definen la experiencia en la plataforma y son decisivos a la hora de determinar si la compra se llega a finalizar. Para que un negocio digital siga siendo relevante y competitivo, esta capa debe ofrecer elementos como una gran experiencia de usuario (en escritorio y móvil), capacidad de omnichannel, experiencia de compra personalizada y un excelente rendimiento web. 

Para lograr estos objetivos, VTEX ofrece diferentes tecnologías para el desarrollo del frontend de la tienda. Cuál es la tecnología más recomendable depende de lo que se desea lograr.

## Store Framework

Store Framework surge de la idea de componibilidad, ya que permite combinar diferentes contenidos, servicios y datos. Además de integraciones y orquestación de API, VTEX ofrece las herramientas adecuadas para satisfacer las necesidades empresariales más específicas.

La ampliación de funcionalidades se produce a través de aplicaciones VTEX disponibles globalmente.

Store Framework es una solución para construir storefronts aprovechando VTEX IO. Esta solución permite utilizar la interfaz intuitiva de [Site Editor](https://help.vtex.com/es/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) y simplificar la gestión de contenido de la tienda.

![vtex io](//images.ctfassets.net/alneenqid6w5/2ihbniXa1S2L7pLOPP0E3o/5c359c6ec0fd106a7f7783669485c64e/image3.png)

Las tiendas creadas con Store Framework también tienen las siguientes funcionalidades:
- **[Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)**: herramienta de búsqueda que corrige errores ortográficos y permite usar reglas condicionales para mostrar los resultados de búsqueda.
- **[Multiidiomas](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO?&utm_source=autocomplete)**: es la posibilidad que VTEX IO proporciona para configurar la traducción automática de la tienda a otros idiomas.
- **[Transfronterizo](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-cross-border-stores)**: permite que una [multitienda VTEX](https://help.vtex.com/es/tutorial/creating-multi-store-multi-domain--tutorials_510?locale=en) opere en diferentes países con un enfoque propio para cada uno de ellos.

## FastStore

Si bien Store Framework se centra en la componibilidad, FastStore se creó con el rendimiento en mente y se basa en la arquitectura Jamstack (que significa JavaScript, API y Markup). En los sitios web Jamstack, la lógica de la aplicación generalmente reside en el cliente sin estar estrechamente acoplada al servidor de backend.

La intención es utilizar la arquitectura Jamstack para entregar storefronts de forma más rápida, segura y confiable. También comprende varias herramientas y recursos diseñados para este propósito, incluyendo pipeline de WebOps y kits de desarrollo optimizados para rendimiento.

Esto permite que FastStore se integre con cualquier CMS y cualquier plataforma de desarrollo, aunque para beneficiarse de las garantías y soporte proporcionado por VTEX, es necesario tener FastStore, WebOps y Headless CMS.

Algunas funcionalidades no están disponibles, como las personalizaciones de Mi cuenta y la integración completa con las aplicaciones de VTEX IO e Intelligent Search.

## CMS Portal (Legado)

CMS Portal es una tecnología heredada de VTEX que sirve para gestionar, principalmente, el código fuente del sitio web y, por lo tanto, es el módulo donde se encuentra el contenido que aparece en la tienda.

En CMS Legado, un concepto importante son los controles, que son snippets de código que renderizan datos nativos de VTEX. Los controles ayudan al administrador de la tienda a crear contenido e incluir herramientas en el sitio web de forma nativa utilizando lo que VTEX ya ofrece. Se utilizan CSS, HTML y JavaScript para la personalización, lo que permite crear layouts y templates.

Ya que CMS Legado utiliza tecnologías más antiguas, cuando hay que realizar algún cambio, se debe acceder a los códigos internamente y realizar las modificaciones en el campo Layout. Por eso, CMS es una tecnología más difícil de usar y mantener, lo que también dificulta el mantenimiento de un buen rendimiento a medida que se realizan más personalizaciones. 

