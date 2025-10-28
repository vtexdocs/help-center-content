---
title: 'VTEX Intelligent Search: configuración Multidioma (Beta)'
id: 2WahlTESLXIJ9XBdQMdTYO
status: PUBLISHED
createdAt: 2021-03-09T22:44:16.513Z
updatedAt: 2023-07-26T19:15:24.855Z
publishedAt: 2023-07-26T19:15:24.855Z
firstPublishedAt: 2021-03-10T21:13:35.816Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-intelligent-search-multilanguage-settings-beta
legacySlug: vtex-intelligent-search-configuracion-multidioma-beta
locale: es
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ Esta funcionalidad está en etapa Beta, lo que significa que estamos trabajando para mejorarla. En caso de dudas, contacte a [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests).

[VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) es una aplicación de búsqueda inteligente para ecommerce que está disponible para tiendas desarrolladas con [VTEX IO](https://vtex.com/es-es/store-framework/). Para instalar y configurar VTEX Intelligent Search en su tienda, [lea nuestro artículo Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search). La herramienta muestra sugerencias de búsqueda y productos que pueden ser del interés del usuario, además corrige errores de ortografía e identifica palabras que no están en el registro del producto.

VTEX Intelligent Search Multidioma expande las funcionalidades de [Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) y ofrece una experiencia de búsqueda multidioma, ideal para las tiendas que realizan operaciones en diversos países. Este recurso facilita la adaptación de la tienda a múltiples idiomas y garantiza la búsqueda en todos los idiomas registrados.

> ℹ️  En caso de que desee expandir su ecommerce a otro idioma, contacte a [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests) para que el equipo de VTEX realice las configuraciones necesarias.

Cuando tiene VTEX Intelligent Search Multidioma instalada, la información del Catálogo de su tienda es traducida por la aplicación [Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization). Para eso, es importante registrar la traducción de los siguientes campos: Nombre, Marca (solo si hay una traducción registrada por el administrador de la tienda), Descripción, Categorías, CategoryTrees, metadata, metadataKeyword, Especificaciones, SKU {name}. Lea la guía para desarrolladores [Traducción del contenido del catálogo](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization) para obtener más información.

A través de [Multi-Tenant API](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-multi-language-stores), VTEX Intelligent Search Multidioma obtiene todos los lugares y respectivos idiomas (ej.: pt-br, en-GB) registrados en la tienda. Cada lugar posee una URL propia.

Al navegar en la tienda, cuando el cliente elige un idioma, es redirigido a la URL del lugar  deseado. Después de eso, todas las funcionalidades de Intelligent Search empiezan a funcionar en el idioma elegido, según la configuración establecida por el administrador de la tienda.

VTEX Intelligent Search Multidioma permite que personalice la experiencia de búsqueda en cada región, asignando las siguientes configuraciones de búsqueda a lugares específicos: 

- [Reglas de merchandising](#reglas-de-merchandising)
- [Sinónimos](#sinonimos)
- [Redireccionamientos](#redireccionamientos) 
- [Banners](#banners)

### Reglas de merchandising
Cuando tiene VTEX Intelligent Search Multidioma instalada, la página de edición o creación de Reglas de merchandising — que se accede en el Admin VTEX en __Storefront__ > __Intelligent Search__ > __Reglas de merchandising__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará la regla de merchandising mediante la selección de los idiomas deseados, como se muestra en la siguiente imagen.  

![img regrasmerch intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-configuracion-multidioma-beta_1.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Reglas de merchandising en VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2FpbarYzsnbg7aZZn3TGF8).

### Sinónimos
Hay dos formas de configurar Sinónimos en una tienda multidioma en el Admin: completar un formulario o importar un archivo .csv.

> ⚠️  Las configuraciones creadas o alteradas en **Sinónimos** pueden tardar hasta 2 horas en aplicarse en la tienda.

#### Crear Sinónimos vía formulario
Cuando tiene VTEX Intelligent Search Multidioma instalada,  la página de edición o creación de Sinónimos — que se accede en el Admin VTEX en __Storefront__ > __Intelligent Search__ > __Sinónimos__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará los sinónimos registrados, como se muestra en la siguiente imagen. Haga clic en los idiomas deseados para seleccionarlos.  

![img sinonimos intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-configuracion-multidioma-beta_2.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Sinónimos en VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).

#### Importar plantilla de Sinónimos

En caso de que prefiera importar Sinónimos para idiomas específicos mediante archivo .csv, usted puede crear un archivo .csv en formato __Unidireccional__ o __Bidireccional__, según el [comportamiento que desea para el sinónimo](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL), e incluir el nuevo campo `<locales separados por coma>`.

- __Unidireccional__: `<Términos separados por coma>;<Términos expandidos separados por coma>;<status>;<locales separados por coma>`.
   - Exemplo:  `smartphone;iphone;true;en-GB`: al buscar smartphone en la tienda en el idioma inglés (`locale en-GB`), se mostrará los resultados de iphone.  Sin embargo, al buscar iphone, no aparecerán los resultados de smartphone.

- __Bidireccional__: `<Términos separados por coma>;<status>;<locales separados por coma>`.
    - Ejemplo: `tv,smart tv;true;en-GB`: al buscar cualquiera de estos términos en la tienda en el idioma inglés (`locale en-GB`), se mostrará cualquier producto que contenga uno de esos términos en los resultados de búsqueda.

> ⚠️  Si el archivo .csv importado no contiene la columna `locale`, el sinónimo será válido para todos los idiomas disponibles en la tienda. 

Para saber más sobre la importación de una plantilla de Sinónimos, lea nuestro artículo sobre [cómo configurar Sinónimos en VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).

### Redireccionamientos

Cuando tiene VTEX Intelligent Search Multidioma instalada, la página de edición o creación de Redireccionamientos  — que se accede en el Admin VTEX en __Storefront__ > __Intelligent Search__ > __Redireccionamientos__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará las redirecciones registradas, como se muestra en la siguiente imagen. Haga clic en los idiomas deseados para seleccionarlos.  

![img redirecionamentos intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-configuracion-multidioma-beta_3.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Redireccionamientos en VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4Gd2wLQFbCwTsh8RUDwSoL).

### Banners

Cuando tiene VTEX Intelligent Search Multidioma instalada, la página de edición o creación de Banners — que se accede en el Admin VTEX en __Storefront__ > __Banners__ — exhibe el campo adicional __Regiones__, que permite elegir los idiomas a los que se aplicará los banners registrados, como se muestra en la siguiente imagen. Haga clic en los idiomas deseados para seleccionarlos.  

![img banner intelligentsearchmultilanguage ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-configuracion-multidioma-beta_4.png)

Para saber más sobre los campos, lea nuestro artículo sobre [cómo configurar Banners en VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5).
