---
title: 'Registrar Marcas'
id: 7lEGOSpAlQJCs5eUc5XFmR
status: PUBLISHED
createdAt: 2019-05-16T20:24:10.456Z
updatedAt: 2025-09-22T16:00:13.493Z
publishedAt: 2025-09-22T16:00:13.493Z
firstPublishedAt: 2019-05-22T18:19:34.194Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: create-brands
locale: es
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalogo-101
order: 6
---

Hay dos formas diferentes de registrar una marca en la plataforma VTEX: por el Admin VTEX o por API.

Realice las siguientes instrucciones para crear y actualizar las marcas de los productos disponibles en su tienda:

## Admin VTEX

1. Haga clic en __Catálogo__.
2. Haga clic en __Marcas__.
3. Haga clic en `Nueva Marca`.
4. Rellene los campos del formulario de marca. Para entender mejor el significado de cada campo, vea a continuación la descripción completa de cada uno de estos:
  - __Nombre__: nombre de la marca que desea registrar para identificación en un producto. Este campo es obligatorio y debe respetar el límite de 150 caracteres.
  - __Palabras sustitutas__: términos alternativos que llevan a la marca registrada. El objetivo es facilitarle al usuario encontrar la marca, incluso si lo escribe de diferentes formas. Normalmente estas palabras son diferencias o errores ortográficos y/o formas genéricas y extranjeras de denominar a la marca. 
  - __Descripción de la marca (meta tag de descripción)__: breve descripción de la marca para contextualizar los buscadores. Lo recomendable es no superar los 150 caracteres para que los motores de búsqueda puedan mostrarlo de forma asertiva en las páginas de búsquedas (p. ej., google).
  - __Título de página de la marca (Tag Title)__: es el texto que aparece en la pestaña del navegador y corresponde al título de su página. Es considerado por los motores de búsqueda como uno de los elementos más importantes para la optimización de resultados.
  - __Código de remarketing de AdWords__: también conocido como Google Remarketing Tag, es el código utilizado para la campaña de Google Adwords. Rellenar este campo con el código permite el acompañamiento de métricas de remarketing asociadas a la marca. Normalmente, su agencia de marketing digital tiene acceso y puede proporcionarle el código.
  - __Código de campaña de Lomadee__: código utilizado para las campañas de Buscapé. Rellenar este campo con el código permite el acompañamiento de métricas de remarketing asociadas a esa marca.
  - __Puntuación (utilizada para ordenar la búsqueda)__: valor utilizado para definir la prioridad de la marca en la página de resultados de búsqueda. Para entender más sobre el campo y el orden de la búsqueda, acceda a nuestro artículo sobre [cómo funciona el campo Score](/es/tutorial/como-funciona-el-campo-score--1BUZC0mBYEEIUgeQYAKcae)
  - __Mostrar en el menú de la página inicio__: al seleccionar esta caja, la marca aparecerá en el menú de su tienda a través del control *Menú de Departamentos* (<vtex.cmc:departmentNavigator/>). Para entender más sobre el uso de controles, acceda a nuestro artículo con la [lista de controles](/es/tutorial/list-of-controls-for-templates--tutorials_563) para las páginas de su tienda.
  - __Activar la marca__: al seleccionar esa caja, la marca queda visible y lista para el uso en los productos registrados.
5. Haga clic en `Guardar`.

Las informaciones rellenadas en el registro se pueden actualizar en cualquier momento a través del módulo de Catálogo. Para editar las informaciones de una marca, basta hacer clic en el botón `Editar`.

Para eliminar el registro de alguna marca, debe hacer clic en la flecha al lado de `Editar` y seleccionar la opción `Eliminar`.

## API

Utilice la llamada [Create brand](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/brand) para crear una nueva marca por medio de la API del Catálogo.
