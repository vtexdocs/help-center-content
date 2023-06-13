---
title: Tag canonical en páginas personalizadas
id: 70PufEhKCcgmOQo6CkAEAc
status: PUBLISHED
createdAt: 2017-12-24T16:14:54.951Z
updatedAt: 2022-12-22T20:45:32.625Z
publishedAt: 2022-12-22T20:45:32.625Z
firstPublishedAt: 2017-12-24T16:30:01.966Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: tag-canonical-en-paginas-personalizadas
kiStatus: Backlog
internalReference: 
---

## Sumario

La tag canonical en páginas personalizadas, cuando del segundo nivel en adelante, sólo se dirige al primer nivel.

Ejemplo:

La carpeta `/institucional`, directamente en la raíz del sitio, tendrá la tag canonical apuntada correctamente a `www.sitio.com/institucional`.

La carpeta `/institucional/nuestras-tiendas`, siendo una subcarpeta dentro de otra, tendrá la canonical apuntada incorrectamente a `www.sitio.com/institucional`, mientras debería apuntar a `www.sitio.com/institucional/nuestras-tiendas`.

## Simulación

- Acceder al __CMS__;
- En Layout, crear dos carpetas cualesquiera, una contenida dentro de la otra;
- Asociar templates HTML para tener contenido;
- Acceder a la página en el front-end de la tienda;
- Comprobar la tag canonical que se imprimió en la segunda carpeta de la jerarquía.

## Workaround

Por tratarse de un contenido personalizado, la mejor forma de evitar este problema es deshabilitar la tag canonical con el uso del [control](/es/tutorial/lista-de-controles-para-templates) `<vtex.cmc:canonicalPage disable="true"/>`. Después cree la tag canonical manualmente para cada página.

Sugerencia: utilizar [placeholders](/es/tutorial/como-personalizar-una-pagina-usando-placeholder) en el template para tener un campo de configuraciones en cada layout/carpeta que utilice estos templates.

