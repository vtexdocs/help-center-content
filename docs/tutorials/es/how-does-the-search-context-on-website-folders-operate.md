---
title: ¿Cómo funciona el Contexto de Búsqueda?
id: tutorials_543
status: DRAFT
createdAt: 2017-04-27T22:01:57.778Z
updatedAt: 2019-12-31T15:21:59.700Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:38.176Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: como-funciona-el-contexto-de-busqueda-de-las-carpetas-del-website
legacySlug: 
subcategory: 
---

El buscador de VTEX es muy personalizable, siendo posible adaptar a sus controles las más complejas necesidades. 

Se puede aplicar filtros por departamento, categoría, marca, colección, especificación, SKU etc. 

Como la aplicación de esos filtros ocurre, por definición, en la URL, cuando se exige una búsqueda compleja, muchas veces ocurre que esa URL acaba no siendo amigable, teniendo menos relevancia para crawlers de buscadores como Google.

Este artículo se ha desarrollado para presentar un recurso muy importante para la utilización de búsquedas complejas en landing pages: el __Contexto de Búsqueda__.

Cuando la búsqueda pretendida usa muchos filtros (categoría, marca y especificación de producto, por ejemplo), siempre indicamos construir una Landing Page.

### Ejemplo

Búsqueda pretendida: `/busca?fq=C:111&fq=B:222&fq=spec_fct_1:333`

Esta búsqueda remitirá a todos los productos que pertenecen a la categoría **111**, que también sean de la marca **222** y tengan el campo de id **1** con valor **333**. El resultado presentado al cliente será correcto. Sin embargo, la forma como los crawlers mirarán esa URL no será interesante para su tienda.

Es en este momento que entra la Landing Page y el Contexto de Búsqueda.

En el CMS de su tienda (`{AccountName}.myvtex.com/admin/a/`), todas las carpetas tienen un campo llamado **Search Context (Default)**, que tiene la función de cargar la búsqueda pretendida sin necesidad de escribirla en la URL.

Usando el mismo ejemplo anterior, si creamos una carpeta denominada **mi-landing-page** y configuramos su **Contexto de Busca** con el valor **fq=C:111&fq=B:222&fq=spec_fct_1:333**, esa carpeta renderizará exactamente los mismos productos del ejemplo anterior, pero en una URL más amigable.

### Configuración

![](//images.contentful.com/alneenqid6w5/ZvEGMDPUs0OsuCkoUsqqS/4411604b8b78124edcbacd46cc45ed53/ContextoDeBusca.PNG "Contexto de Busca")

**Importante**:

- Para que el Contexto de Búsqueda funcione, es necesario usar el control `searchResult`.
- La búsqueda aplicada en ese campo sustituirá cualquier búsqueda aplicada en la URL. O sea, si una carpeta tiene ese campo configurado, incluir parámetros para búsqueda directamente en la URL (de esa carpeta) no funcionará, incluso la ordenación (parámetro **O**).

### Artículos relacionados

- [¿Cómo funciona la búsqueda de VTEX?](/es/tutorial/como-funciona-la-busqueda-de-vtex/)
- [Parámetros de búsqueda](/es/tutorial/parametros-de-busqueda/)
