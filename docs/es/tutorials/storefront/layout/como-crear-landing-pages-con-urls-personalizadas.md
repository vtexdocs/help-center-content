---
title: 'Cómo crear landing pages con URLs personalizadas'
id: q0p2UU6sBaYcEMsq24YSi
status: PUBLISHED
createdAt: 2018-10-02T21:22:13.046Z
updatedAt: 2023-03-29T15:54:22.828Z
publishedAt: 2023-03-29T15:54:22.828Z
firstPublishedAt: 2018-10-02T21:24:34.630Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-create-landing-pages-with-customized-urls
legacySlug: como-funciona-el-contexto-de-busqueda, como-crear-landing-pages-con-urls-personalizadas
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - búsqueda VTEX y VTEX Intelligent Search. Este artículo hace referencia a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte [nuestra guía](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb).

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal (Legado).
</div>

El buscador de VTEX es muy personalizable, siendo posible adaptar a sus controles las necesidades más complejas. 

Se puede aplicar filtros por departamento, categoría, marca, colección, especificación, SKU, etc. 

Como la aplicación de esos filtros ocurre en la URL, cuando la demanda exige una búsqueda compleja, muchas veces ocurre que esa URL acaba no siendo amigable, teniendo menos relevancia para crawlers de buscadores como Google.

Este artículo se ha desarrollado para presentar un recurso muy importante para la utilización de búsquedas complejas en landing pages: el __Contexto de Búsqueda__.

Cuando la búsqueda pretendida usa muchos filtros (p. ej.: categoría, marca y especificación de producto), siempre recomendamos construir una Landing Page.

### Ejemplo

Búsqueda pretendida: `/busca?fq=C:111&fq=B:222&fq=spec_fct_1:333`

Esta búsqueda devolverá todos los productos que pertenecen a la categoría **111**, que también sean de la marca **222** y tengan el campo de id **1** con valor **333**. El resultado presentado al cliente será correcto. Sin embargo, la forma como los crawlers mirarán esa URL no será interesante para su tienda.

Es en este momento que entra la Landing Page y el Contexto de Búsqueda.

En el CMS de su tienda (`{AccountName}.myvtex.com/admin/a/`), todas las carpetas tienen un campo llamado **Search Context (Default)**, que tiene la función de cargar la búsqueda pretendida sin necesidad de escribirla en la URL.

Usando el mismo ejemplo anterior, si creamos una carpeta denominada **mi-landing-page** y configuramos su **Contexto de Busca** con el valor **fq=C:111&fq=B:222&fq=spec_fct_1:333**, esa carpeta renderizará exactamente los mismos productos del ejemplo anterior, pero en una URL más amigable.

### Configuración

**Importante**:

- Para que el Contexto de Búsqueda funcione, es necesario usar el control `searchResult`.
- La búsqueda aplicada en ese campo sustituirá cualquier búsqueda aplicada en la URL. Es decir, si una carpeta tiene este campo configurado, no funcionará la inclusión de parámetros para la búsqueda directamente en la URL de esa carpeta, incluyendo su orden (parámetro **O**).
