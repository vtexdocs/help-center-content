---
title: 'How search parameters work'
id: tutorials_567
status: ARCHIVED
createdAt: 2017-04-27T22:00:24.532Z
updatedAt: 2022-09-13T14:41:46.984Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.531Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: search-parameters
locale: en
legacySlug: search-parameters
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ **Warning**: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.

When making a search on VTEX, there are different possibilities of urls. The urls of Departments and Categories are made up as follows:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/search-parameters-0.png)

In the categories tree above, the links are as follows:

www.store.com/artes-e-entretenimento

www.store.com/artes-e-entretenimento/festas-e-comemoracoes

www.store.com/artes-e-entretenimento/festas-e-comemoracoes/artigos-para-festas

…

The url will always be made up with the term entered in the search field:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/search-parameters-1.png)

www.loja.com.br/cama

The browsing filters also have specific urls that are defined by certain parameters in the URL. These parameters are as follows:

### Default 1:

URL: www.store.com.br/busca/?fq=**C:\[DepartmentId/CategoryId/SubcategoryId\]**&amp;fq=**B:\[IdMarca\]**&amp;fq=**H:\[IdColeção\]**&amp;fq=**spec\_fct\_\[IdCampoProduto/Sku\]:\[ValorBuscado\]**&amp;**ft=\[TermoBuscado\]**

Where:

**C:\[DepartmentId/CategoryId/SubcategoryId\]**: Shows products of a specific category, according to the IDs informeds for the department, category and subcategory. This code appears next to category names on **Cadastro de Produtos -> Categoria**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/search-parameters-2.png)

**NOTE: The category ID can also be found on your editing page, at the end of the url.**

**B:\[IdMarca\]: **Shows products of a specific brand, according to the ID informed. This code is shown at the end of the URL, on the page used for changing the brand, in **Cadastro de Produtos &gt; Marca**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/search-parameters-3.png)

>⚠️ **Warning:** there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the CMS</a>.

**H:\[IdColeção\]**: Shows products of a specific collection, according to the ID informed. This code is informed in collection editing, in **Configurações &gt; Portal &gt; Portal folder &gt; Coleções subfolder:**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/search-parameters-4.png)

**spec\_fct\_\[IdCampoProduto/Sku\]:\[ValorBuscado\]: **Shows products whose product/sku field value, with the indicated ID, is equal to the value informed. This code can be found on the page used for changing a product/sku field, at the end of the url:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/search-parameters-5.png)

See below an example of use of this field:

www.loja.com.br/busca/?fq=spec_fct_1:110v

In the example above, all products whose **Voltagem**(ID **1**) field is **110v** would be shown.

**ft=\[TermoBuscado\]**: This parameter represents a fulltext search (_Example: search of a specific term in the search field_) of the term specified according to the other parameters informed.

The parameters above can be matched in many ways. However, notice that the search order will be according to the order of the parameters informed. In other words, when you use a category parameter followed by a brand parameter, for example, the category will be searched first and, among the results found, a second search will be made for the brand.

### Default 2
>ℹ️ For stores hosted in VTEX IO, Default 2 should be used as standard.

URL: www.loja.com.br/**\[NomeCategoria\]**/**\[NomeMarca\]**/**\[IdColeção\]**/**\[ValorBuscado\]**?map=**c,b,productClusterIds,specificationFilter_\[IdCampoProduto/Sku\]**

Where:

www.loja.com.br**/\[NomeCategoria\]?map=c**

Shows products whose category is specified by the name informed in the url.

www.loja.com.br**/\[NomeMarca\]?map=b**

Shows products whose brand is specified by the name informed in the url.

www.loja.com.br**/\[IdColeção\]?map=productClusterIds**

Shows products whose collection is specified by the ID informed in the url.

www.loja.com.br/**\[ValorBuscado\]?map=specificationFilter_\[IdCampoProduto/Sku\]**

Shows products whose product/sku field value, with the indicated ID, is equal to the value informed.

The parameters above can also be matched among them. The order of the values informed in the **map** parameter will define the interpretation of each value present at the beginning of the url (between “/”).

**NOTE: The two defaults above are valid, although the best default for SEO is default 2.**

