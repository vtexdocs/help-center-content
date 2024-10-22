---
title: 'Cómo funcionan los parámetros de búsqueda'
id: tutorials_567
status: ARCHIVED
createdAt: 2017-04-27T22:00:24.532Z
updatedAt: 2022-09-13T14:41:46.984Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.531Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: search-parameters
locale: es
legacySlug: parametros-de-busqueda
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

Al realizar búsquedas en la VTEX, existen algunas posibilidades de urls. Tenemos las urls de Departamentos y Categorías, que son formadas de la siguiente forma:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/parametros-de-busqueda_1.png)

En el árbol de categorías arriba, los links quedarían así:

www.tienda.com/artes-e-entretenimento

www.tienda.com/artes-e-entretenimento/festas-e-comemoracoes

www.tienda.com/artes-e-entretenimento/festas-e-comemoracoes/artigos-para-festas

…

Al usar el campo de búsqueda, la url siempre será formada por el término buscado:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/parametros-de-busqueda_2.png)

www.loja.com.br/cama

Los filtros de navegación también poseen una url específica, que es definida por determinados parámetros en la URL. Los parámetros son:

### Estándar 1:

URL: www.loja.com.br/busca/?fq=**C:\[IdDepartamento/IdCategoria/IdSubcategoria\]**&amp;fq=**B:\[IdMarca\]**&amp;fq=**H:\[IdColeção\]**&amp;fq=**spec\_fct\_\[IdCampoProduto/Sku\]:\[ValorBuscado\]**&amp;**ft=\[TermoBuscado\]**

Donde:

**C:\[IdDepartamento/IdCategoria/IdSubcategoria\]**: Retorna productos de una determinada categoría, de acuerdo con los IDs informados para departamento, categoría y subcategoría. Este código es presentado al lado de los nombres de las categorías en **Cadastro de Produtos &gt; Categoria**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/parametros-de-busqueda_3.png)

**OBS: El ID de la categoría también puede ser encontrado en su página de edición, al final de la url.**

**B:\[IdMarca\]: **Retorna productos de una determinada marca, de acuerdo al ID informado. Este código se presenta al final de la URL, en la página de modificación de una marca, en **Cadastro de Produtos &gt; Marca**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/parametros-de-busqueda_4.png)

>⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.

**H:\[IdColeção\]**: Retorna productos de una determinada colección, de acuerdo al ID informado. Este código se informa en la edición de la colección, en **Configurações &gt; Portal &gt; Pasta Portal &gt; Subpasta Coleções:**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/parametros-de-busqueda_5.png)

**spec\_fct\_\[IdCampoProduto/Sku\]:\[ValorBuscado\]:** Retorna productos cuyo valor de campo producto/sku con el ID indicado sea igual al valor informado. Este código puede obtenerse en la página de modificación de un campo producto/sku, al final de la url:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Products and SKUs/parametros-de-busqueda_6.png)

Un ejemplo de utilización de este campo sería:

www.loja.com.br/busca/?fq=spec_fct_1:110v

En el ejemplo arriba serian retornados todos los productos cuyo campo **Voltagem**(de ID **1**) tuvieran el valor **110v**.

**ft=\[TermoBuscado\]**: Este parámetro representa una búsqueda _fulltext(Ej: búsqueda de un término específico en el campo de búsqueda)_ del término especificado de acuerdo a los demás parámetros informados.

Los parámetros arriba pueden ser combinados de diversas formas, pero vale reforzar que el orden de la búsqueda se hará de acuerdo al orden de los propios parámetros informados, o sea, al utilizar un parámetro de categoría seguido de un parámetro de marca, por ejemplo, será realizada primero una búsqueda por la categoría y, entre los resultados de esta búsqueda, será realizada una segunda búsqueda por marca.

### Estándar 2

>ℹ️ Para tiendas en VTEX IO, el Estándar es el modelo indicado.

URL: www.loja.com.br/**\[NomeCategoria\]**/**\[NomeMarca\]**/**\[IdColeção\]**/**\[ValorBuscado\]**?map=**c,b,productClusterIds,specificationFilter_\[IdCampoProduto/Sku\]**

Donde:

www.loja.com.br**/\[NomeCategoria\]?map=c**

Retorna los productos cuya categoría sea especificada por el nombre informado en la url.

www.loja.com.br**/\[NomeMarca\]?map=b**

Retorna los productos cuya marca sea especificada por el nombre informado en la url.

www.loja.com.br**/\[IdColeção\]?map=productClusterIds**

Retorna los productos cuya colección sea especificada por el ID informado en la url.

www.loja.com.br/**\[ValorBuscado\]?map=specificationFilter_\[IdCampoProduto/Sku\]**

Retorna productos cuyo valor del campo producto/sku con el ID indicado sea igual al valor informado.

Los parámetros arriba también pueden ser combinados entre sí. El orden de los valores pasados en el parámetro **map **define cómo será entendido cada valor presente al inicio de la url(entre las “/”s).

**OBS: Los dos estándares arriba son válidos, vale reforzar que lo mejor para SEO sería el estándar 2.**

