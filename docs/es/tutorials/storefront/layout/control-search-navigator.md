---
title: 'Cómo funciona el control Search Navigator'
id: 2VFmZawWZiW0ckeqoscieS
status: PUBLISHED
createdAt: 2018-02-22T19:19:44.082Z
updatedAt: 2020-12-11T16:41:27.980Z
publishedAt: 2020-12-11T16:41:27.980Z
firstPublishedAt: 2018-03-02T18:43:54.011Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: search-navigator-control
legacySlug: control-search-navigator
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.

El control `<vtex.cmc:searchNavigator/>` renderiza un menú de filtros relacionados con el resultado de una búsqueda.

> ℹ️ Este control funciona **apenas en páginas con contexto de búsqueda**; es decir, páginas donde los resultados mostrados fueron traídos por una búsqueda de usuario.

Cuando el usuario realiza una búsqueda en la tienda, el sistema de VTEX intenta traer resultados de acuerdo con un orden de prioridad de filtros. [Entienda cómo funciona la búsqueda aquí.](/es/tutorial/como-funciona-la-busqueda-de-vtex)

Digamos, por ejemplo, que el resultado sea un contexto de categoría. Es decir, el usuario buscó, por ejemplo, por el término "Camisas", el sistema identificó que existe una categoría con el nombre "Camisas" y cargó la página de esa categoría - usando, por lo tanto, el template de categoría. Si el control Search Navigator está en el código de ese template, va a renderizar un menú con filtros en la página.

Por estándar, los filtros que pueden ser mostrados por el Search Navigator son los siguientes, en este orden:
- Colecciones.
- Categorías.
- Marcas.
- Especificaciones.
- Rangos de precio.

Pero para cada uno de estos filtros hay algunas condiciones de exhibición. Es decir, usted puede definir si deben o no aparecer como filtro en los contextos de búsqueda.

## Colecciones

Para que una colección se muestre en el menú por el control Search Navigator, debe estar con el flag __Searchable__ seleccionada.

Este flag se encuentra en la configuración de la propia colección dentro del CMS.

![searchNavigator2](//images.contentful.com/alneenqid6w5/30xKS65fWMuoiQO4ac2EKM/921be3bc19a8cdff48dade515c354908/searchNavigator2.jpg)

## Categorías

Para que una categoría sea exhibida por acción de ese control, debe estar con el flag __Menú__ seleccionado.

Este flag está en la pantalla de registro de la categoría.

![Cómo funciona el control Search Navigator ES 2](//images.ctfassets.net/alneenqid6w5/5Qg0LcxqSc6e2UuEo2M0me/457a81b3196c932f1d3f157582598599/2018-10-23_22-41-18_ES_2.png)

> ℹ️ **Importante**: El control  `&lt;vtex.cmc:searchNavigator/&gt;` exhibe, por estándar, apenas la categoría base (primer nivel) y la subcategoría más específica (último nivel) dentro del contexto actual. Se omiten las divisiones intermedias en el árbol de categorías. Además, el control solo funciona en los primeros tres niveles, que son tradicionalmente Departamento, Categoría y Subcategoría. Si su  [arquitectura de catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR) contiene subdivisiones más allá del tercer nivel, no se mostrarán con el control nativo.

## Marcas

### En las páginas de categoría:

La página de registro de marca no tiene un flag de exhibición en el menú renderizado por el Search Navigator.

Entonces, por estándar, las marcas siempre se muestran.

> ⚠️ Sin embargo, en las páginas de departamento o categoría, las marcas solo se mostrarán mediante el control Search Navigator si, en el registro de categoría, el flag **Filtro de Marca** está seleccionado.

### En otras páginas:

En páginas que no cargan templates de departamento o categoría, el filtro por marcas siempre será exhibido.

Si desea ocultarlo, usted debe hacer esto por CSS.

## Especificaciones

Para que un campo de producto o un campo de SKU se muestre en el menú por el control Search Navigator, debe tener dos flags seleccionados:

- Filtro
- Link en el Menú Lateral

Ambos se encuentran en la pantalla de registro del campo.

![Cómo funciona el control Search Navigator ES 3](//images.ctfassets.net/alneenqid6w5/25TT9lYqHamqoaS6iIeQKk/a5bf18a4d4779df84dc68a40742fd55e/2018-10-23_2243_ES_3.png)

## Rangos de precio

Si usted tiene algún [rango de precio](/es/tutorial/configurando-filtro-de-faixa-de-preco) configurado en la tienda, este también funciona como filtro y, por defecto, se muestra en el menú por el control Search Navigator.

Por ser filtros registrados en las categorías, los rangos de precio solo se visualizan en páginas de departamento o categoría.

---

> ℹ️ Los filtros **siempre** se renderizan en función de los atributos de los productos del contexto de búsqueda. Es decir, en base a la categoría, especificación (color, tamaño), marca, colección, etc.<br><br>Por lo tanto, además de las condiciones señaladas anteriormente para que estos atributos aparezcan como filtros en el menú, es necesario antes de todo que el término buscado devuelva un contexto con productos que tienen esos atributos.<br><br>Si el usuario hace, por ejemplo, una búsqueda por "celular" y la categoría Camisas no contiene ningún celular, esta no aparecerá en el menú, aunque en el registro de esa categoría el flag de exhibición esté seleccionado.
