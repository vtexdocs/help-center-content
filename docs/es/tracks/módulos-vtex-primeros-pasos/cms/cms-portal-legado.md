---
title: 'CMS Portal (Legado)'
id: 1oN446gRGcR2s70RvBCAmj
status: PUBLISHED
createdAt: 2022-01-10T20:17:10.358Z
updatedAt: 2026-04-29T18:54:39.664Z
publishedAt: 2024-08-06T16:52:09.507Z
firstPublishedAt: 2022-01-10T20:41:44.261Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: legacy-cms-portal
locale: es
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
order: 3
---

El CMS Portal (Legado) fue el primer sistema de gestión de contenidos (CMS) de VTEX y no está disponible para nuevas cuentas. Si utilizas el CMS Portal (Legado), puedes seguir accediendo y gestionando el contenido de tu tienda basándote en esta guía.

Para acceder a nuevas funcionalidades y recursos actualizados, considera migrar a una de nuestras soluciones de CMS más recientes: **[CMS](https://developers.vtex.com/docs/guides/cms-for-faststore-storefronts)**, la solución de CMS recomendada para tiendas desarrolladas con [FastStore](https://developers.vtex.com/docs/guides/faststore), o **[Site Editor](es/docs/tutorials/site-editor-vision-general)**, la solución de CMS para tiendas desarrolladas con [Store Framework](https://developers.vtex.com/docs/guides/store-framework).

En esta guía aprenderás a usar el CMS Portal (Legado) para gestionar el contenido de tu tienda, incluyendo la creación y organización de layouts, la configuración de páginas y la estructura de carpetas, además de conocer los controles nativos de VTEX disponibles para plantillas.

## Layout

La sección [Layout](/es/docs/tutorials/layout-subcategoria) te permite crear un storefront con HTML y CSS.

![CMS - Layout PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_1.png)

Esta sección está organizada en carpetas y archivos que tienen las siguientes funciones:

- **HTML Templates:** crear el código HTML y los archivos JavaScript y CSS de referencia que se utilizarán en las páginas del [sitio web](/es/docs/tutorials/que-es-un-web-site).

- **Shelves Templates:** gestionar las [plantillas (templates)](//es/docs/tutorials/que-son-templates) de [estantería de productos](/es/docs/tutorials/que-son-estantes), es decir, los componentes responsables del renderizado de un grupo de productos en el storefront.

- **Custom Elements:** crea las condiciones necesarias para implementar componentes reutilizables, como los pies de página, en otras partes de la tienda.

- **URL Builder:** redirige las URLs existentes a otras de interés. Esto evitará errores de indexación y ayudará a mantener el posicionamiento de SEO.

- **Files Manager:** sube archivos de imagen al sitio web de tu tienda. Almacena los archivos JavaScript, CSS y de imagen del sitio web. Si deseas utilizar alguno de estos archivos en tu tienda, debes referenciarlos dentro de la sección **HTML Templates**.

- **Product Clusters (Collections):** crea grupos de productos. Puedes utilizarlos para crear páginas de destino de campañas o colecciones de productos con clústeres de productos específicos.

- **Sites and Channels:** configura [el binding de tu tienda](es/docs/tutorials/que-es-binding) y otras configuraciones de License Manager. Para más información, consulta el artículo [Estructura de carpetas del CMS](es/docs/tutorials/estructura-de-carpetas-del-cms).

## Estructura de carpetas del CMS Portal (Legado)

En VTEX, toda nueva cuenta ya dispone de carpetas preinstaladas en el CMS. Algunas de estas carpetas son **obligatorias**.

Toda tienda debe tener, sin excepción, las siguientes carpetas en el CMS para garantizar el correcto funcionamiento de la navegación y la indexación:

- Búsqueda
- Categoría
- Departamento
- Inicio de sesión
- Producto

![2 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_3.png)

> ⚠️ El nombre de las carpetas obligatorias **no debe ser modificado**. Si las carpetas obligatorias no están nombradas exactamente como se indicó arriba, tendrás problemas de navegación e indexación. Como estas carpetas se refieren a páginas dinámicas, sus nombres no aparecen en la navegación del cliente ni forman parte del texto final de las URLs, por lo tanto, **no afectan la internacionalización del sitio**. Por otro lado, los nombres de los **[layouts](/es/docs/tutorials/que-son-layouts) dentro de estas carpetas** se pueden editar libremente, sin afectar el funcionamiento de la tienda.

Las demás carpetas no son obligatorias; son solo sugerencias porque son importantes y útiles para la mayoría de las tiendas. Por este motivo recomendamos que no las elimines. Son las siguientes:

- `/account`: cuenta del cliente
- `/account/orders`: pedidos del cliente
- `/sistema/buscavazia`: carpeta a la que se redirige al usuario si la búsqueda no devuelve resultados.
- `/sistema/{codigoHTTP}`: carpeta que muestra páginas de error de acuerdo con los códigos de status HTTP, como 404 (página no encontrada), 401 (no autorizado) y 500 (error de servidor).
- `/marcas`: carpeta que contiene layouts de páginas de marcas, que pueden personalizarse con un layout exclusivo. Si no existe un layout específico para las marcas, estas páginas se renderizarán utilizando el mismo layout de la carpeta de búsqueda. Para entender cómo funcionan las páginas de marcas, consulta el artículo [Cómo funciona VTEX Search (Legado)](es/docs/tutorials/como-funciona-la-busqueda-de-vtex).

Como estas carpetas no son obligatorias, puedes renombrarlas libremente. En estos casos lo más importante es el [control](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) o el [placeholder](/es/docs/tutorials/gestion-de-placeholders) responsable de leer los contenidos.

## Controles nativos de VTEX

En el CMS Portal (Legado), los [controles](/es/docs/tutorials/que-son-controles) son marcas que incluyes en las **Plantillas HTML** para mostrar datos dinámicos de la tienda. Por ejemplo, nombre y precio del producto, campo de búsqueda o ruta de navegación, sin volver a implementar esa lógica en cada página.

VTEX proporciona los **controles nativos**. Cuando publicas la plantilla, la plataforma reconoce cada control y muestra el contenido o la funcionalidad correspondiente en el storefront.

Por ejemplo, al usar el control `<vtex.cmc:productName/>` en una página de producto, el sistema proporcionará el nombre del producto para mostrarlo en pantalla.

Para utilizar un control, incluye la tag en el punto deseado del HTML de la plantilla. Lo que genera el control aparece exactamente en esta posición en el layout publicado.

> ℹ️ En la [lista de controles para plantillas](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) puedes encontrar todos los controles nativos y sus respectivos usos.

## Más información

- **[Crear o editar una plantilla de página](/es/docs/tutorials/como-crear-un-template-de-pagina):** aprende a crear plantillas de página. La plantilla de página es un modelo creado para definir una estructura HTML para la presentación del contenido de las páginas.

- **[Asociar una plantilla a un layout](/es/docs/tutorials/asociar-un-template-con-un-layout):** asocia una plantilla a un layout utilizando la carpeta de Sites and Channels.

- **[¿Para qué sirve el Control Personalizado?](es/docs/tutorials/para-que-serve-o-controle-customizado):** además de los controles nativos de VTEX, puedes crear tus propios controles.

- **[Configuración de la tienda - Storefront](/es/docs/tutorials/configuracion-de-la-tienda---storefront-subcategoria):** configura los ajustes generales de tu storefront, como metadatos, tags de SEO, tipos de archivos, dimensiones de imágenes y configuración regional para determinar dónde estarán disponibles tus productos.