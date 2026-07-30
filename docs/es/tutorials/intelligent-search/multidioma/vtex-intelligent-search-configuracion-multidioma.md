---
title: 'VTEX Intelligent Search: configuración Multidioma'
id: 2WahlTESLXIJ9XBdQMdTYO
status: PUBLISHED
createdAt: 2021-03-09T22:44:16.513Z
updatedAt: 2023-07-26T19:15:24.855Z
publishedAt: 2023-07-26T19:15:24.855Z
firstPublishedAt: 2021-03-10T21:13:35.816Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-intelligent-search-multilanguage-settings
legacySlug: vtex-intelligent-search-configuracion-multidioma-beta
locale: es
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

[VTEX Intelligent Search](/es/docs/tracks/vision-general-intelligent-search) es una aplicación de búsqueda inteligente para ecommerce que está disponible para tiendas desarrolladas con [VTEX IO](https://developers.vtex.com/docs/guides/store-framework). Para instalar y configurar VTEX Intelligent Search en su tienda, [lea nuestro artículo Search](https://developers.vtex.com/docs/guides/search-overview). La herramienta muestra sugerencias de búsqueda y productos que pueden ser del interés del usuario, además corrige errores de ortografía e identifica palabras que no están en el registro del producto.

VTEX Intelligent Search Multidioma expande las funcionalidades de [Intelligent Search](/es/docs/tracks/vision-general-intelligent-search) y ofrece una experiencia de búsqueda multidioma, ideal para las tiendas que realizan operaciones en diversos países. Este recurso facilita la adaptación de la tienda a múltiples idiomas y garantiza la búsqueda en todos los idiomas registrados.

> ℹ️  En caso de que desee expandir su ecommerce a otro idioma, contacte a [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests) para que el equipo de VTEX realice las configuraciones necesarias.

Cuando tiene VTEX Intelligent Search Multidioma instalada, la información del Catálogo de su tienda necesita ser traducida para poder mostrarse en cada idioma configurado en la tienda. Existen dos formas de gestionar las traducciones del Catálogo:

- **[Catalog multi-language](https://developers.vtex.com/docs/guides/catalog-multi-language-integration-guide)** (recomendado): la solución más reciente, que utiliza endpoints REST dedicados.
- **[Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization)** (legado): un enfoque basado en GraphQL que utiliza la aplicación `catalog-graphql`.

> ⚠️ Estos dos enfoques son mutuamente excluyentes. Una vez que Catalog multi-language se active en su cuenta, ya no podrá gestionar las traducciones del Catálogo mediante Messages (GraphQL).

Los campos disponibles para traducción son diferentes entre los dos enfoques:

| Entidad | Campos en Catalog multi-language | Campos en Messages (legado) |
| --- | --- | --- |
| Productos | Name, Title, Description, MetaTagDescription, DescriptionShort, Keywords, LinkId | Nombre, palabras clave, título de la página, descripción, descripción corta, meta tag description, URL slug (solo tiendas cross-border) |
| Categorías | Name, Title, Description, Keywords, LinkId | Nombre, palabras clave, título de la página, meta tag description, URL slug (solo tiendas cross-border) |
| Marcas | Name, Text, Keywords, SiteTitle, LinkId | Nombre, palabras clave, título de la página, meta tag description, URL slug (solo tiendas cross-border) |
| SKUs | Name, MeasurementUnit | Nombre |
| Especificaciones | Name, Description | Nombre, descripción y valores |
| Valores de especificación | Name | Incluido en Especificaciones |
| Grupos de especificación | Name | No es compatible |
| Colecciones | Name, Description, LinkId | No es compatible |
| Servicios | Name, Text | No es compatible |

Lea las guías para desarrolladores [Catalog multi-language](https://developers.vtex.com/docs/guides/catalog-multi-language-integration-guide) y [Traducción del contenido del catálogo con Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization) para obtener más información.

VTEX Intelligent Search Multidioma obtiene todos los lugares y respectivos idiomas (ej.: pt-br, en-GB) configurados en la tienda. Cada lugar posee su propia URL.

Al navegar en la tienda, cuando el cliente elige un idioma, es redirigido a la URL del lugar  deseado. Después de eso, todas las funcionalidades de Intelligent Search empiezan a funcionar en el idioma elegido, según la configuración establecida por el administrador de la tienda.

VTEX Intelligent Search Multidioma permite que personalice la experiencia de búsqueda en cada región, asignando las siguientes configuraciones de búsqueda a lugares específicos: 

- [Reglas de merchandising](#reglas-de-merchandising)
- [Sinónimos](#sinonimos)
- [Redireccionamientos](#redireccionamientos) 
- [Banners](#banners)

### Reglas de merchandising
Cuando tiene VTEX Intelligent Search Multidioma instalada, la página de edición o creación de Reglas de merchandising — que se accede en el Admin VTEX en __Storefront__ > __Intelligent Search__ > __Reglas de merchandising__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará la regla de merchandising mediante la selección de los idiomas deseados, como se muestra en la siguiente imagen.  

![img regrasmerch intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/intelligent-search/multidioma/vtex-intelligent-search-configuracion-multidioma_1.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Reglas de merchandising en VTEX Intelligent Search](/es/docs/tutorials/crear-regla-de-merchandising-editor-manual).

### Sinónimos
Hay dos formas de configurar Sinónimos en una tienda multidioma en el Admin: completar un formulario o importar un archivo .csv.

> ⚠️  Las configuraciones creadas o alteradas en **Sinónimos** pueden tardar hasta 2 horas en aplicarse en la tienda.

#### Crear Sinónimos vía formulario
Cuando tiene VTEX Intelligent Search Multidioma instalada,  la página de edición o creación de Sinónimos — que se accede en el Admin VTEX en __Storefront__ > __Intelligent Search__ > __Sinónimos__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará los sinónimos registrados, como se muestra en la siguiente imagen. Haga clic en los idiomas deseados para seleccionarlos.  

![img sinonimos intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/intelligent-search/multidioma/vtex-intelligent-search-configuracion-multidioma_2.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Sinónimos en VTEX Intelligent Search](/es/docs/tutorials/crear-sinonimos).

#### Importar plantilla de Sinónimos

En caso de que prefiera importar Sinónimos para idiomas específicos mediante archivo .csv, usted puede crear un archivo .csv en formato __Unidireccional__ o __Bidireccional__, según el [comportamiento que desea para el sinónimo](/es/docs/tutorials/crear-sinonimos), e incluir el nuevo campo `<locales separados por coma>`.

- __Unidireccional__: `<Términos separados por coma>;<Términos expandidos separados por coma>;<status>;<locales separados por coma>`.
   - Exemplo:  `smartphone;iphone;true;en-GB`: al buscar smartphone en la tienda en el idioma inglés (`locale en-GB`), se mostrará los resultados de iphone.  Sin embargo, al buscar iphone, no aparecerán los resultados de smartphone.

- __Bidireccional__: `<Términos separados por coma>;<status>;<locales separados por coma>`.
    - Ejemplo: `tv,smart tv;true;en-GB`: al buscar cualquiera de estos términos en la tienda en el idioma inglés (`locale en-GB`), se mostrará cualquier producto que contenga uno de esos términos en los resultados de búsqueda.

> ⚠️  Si el archivo .csv importado no contiene la columna `locale`, el sinónimo será válido para todos los idiomas disponibles en la tienda. 

Para saber más sobre la importación de una plantilla de Sinónimos, lea nuestro artículo sobre [cómo configurar Sinónimos en VTEX Intelligent Search](/es/docs/tutorials/crear-sinonimos).

### Redireccionamientos

Cuando tiene VTEX Intelligent Search Multidioma instalada, la página de edición o creación de Redireccionamientos  — que se accede en el Admin VTEX en __Storefront__ > __Intelligent Search__ > __Redireccionamientos__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará las redirecciones registradas, como se muestra en la siguiente imagen. Haga clic en los idiomas deseados para seleccionarlos.  

![img redirecionamentos intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/intelligent-search/multidioma/vtex-intelligent-search-configuracion-multidioma_3.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Redireccionamientos en VTEX Intelligent Search](/es/docs/tutorials/configurar-redirecciones).

### Banners

Cuando tiene VTEX Intelligent Search Multidioma instalada, la página de edición o creación de Banners — que se accede en el Admin VTEX en __Storefront__ > __Banners__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará los banners registrados, como se muestra en la siguiente imagen. Haga clic en los idiomas deseados para seleccionarlos.  

![img banner intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/intelligent-search/multidioma/vtex-intelligent-search-configuracion-multidioma_4.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Banners en VTEX Intelligent Search](/es/docs/tutorials/configurar-banners).
