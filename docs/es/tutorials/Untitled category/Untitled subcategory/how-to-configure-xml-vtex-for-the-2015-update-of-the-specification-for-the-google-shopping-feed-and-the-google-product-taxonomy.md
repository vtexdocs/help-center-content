---
title: 'Cómo configurar el XML VTEX para la Actualización de 2015 de la Especificación del feed del Google Shopping y de la Taxonomia del producto de Google'
id: tutorials_541
status: ARCHIVED
createdAt: 2017-04-27T22:02:13.320Z
updatedAt: 2019-12-31T15:23:02.428Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:37.920Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: configurar-xml-vtex-para-la-actualización-2015-google-shopping
locale: es
legacySlug: 
subcategoryId: unknown-subcategory
---

>⚠️ La integración con el Google Shopping por XML es un **método ultrapasado** que no es más recomendado. Vea [aqui](http://help.vtex.com/es/tutorial/nueva-integracion-nativa-con-google-shopping-por-api) cómo funciona la nueva integración del Google Shopping por API.

Siguiendo la [Actualización de 2015 de la Especificación del feed del Google Shopping y de la Taxonomía del producto de Google](https://support.google.com/merchants/answer/6231410?hl=pt-BR "Actualización de 2015 de la Especificación del feed del Google Shopping y de la Taxonomía del producto de Google"), incluimos nuevos campos en nuestro formulario de creaciónde XML: Separador de categorías, Categoría Global y Especificaciones de producto.

La configuración patrón de nuestro formulario de XML ya está con las tags actualizadas, para crear un nuevo feed Google Merchant / Shopping basta seleccionar la opción “Feed: Atom 1”:

![](//images.contentful.com/alneenqid6w5/2ugQUy4xlaaUEOIYuu6UMe/41fd01c32b6954b14e1ef5818b94ca0c/atom1_xml_vtex_google.gif)

Para la correcta integración con el Google Merchant / Shopping será necesario actualizar el xml con los nuevos campos a partir del 15 de septiembre de 2015.

Conozca los nuevos campos del formulario de XML:

### Separador de categorías

Opción responsable de la definición de la taxonomía de los campos “Categoría” y “Departamento + Categoría”. Comúnmente utilizado para el llenado de la tag [g:product\_type].

![](//images.contentful.com/alneenqid6w5/3dgBcIJZgcKSW2YKCaksmW/653d517228e7d303e7326dfa1dcedbc1/separador_categoria_xml_vtex_google.gif)

Patrón (Ej.: Categoría Padre – Categoría Hija – Categoría Nieta)

Patrón de separador “-” utilizado para feed de aliados como Criteo, Buscapé

Google Shopping (Ej.: Categoría Padre &gt; Categoría Hija &gt; Categoría Nieta)

Separador “/” exigido por la taxonomía Google Merchant / Shopping

### Categoría Global

Campo responsable de la relación de las categorías de su tienda con las categorías Google de producto: https://support.google.com/merchants/answer/1705911

Deberá llenarse con la tag [g:google\_product\_category]

![](//images.contentful.com/alneenqid6w5/307z7lsmEMgQMWIOUQWk8K/9d854eb77bb73e1c79d5307c78fb0215/categoria_global_xml_vtex_google.gif)

Para el correcto funcionamiento de este campo es necesario verificar si el producto tiene el campo **Categoría Global** llenado en el catálogo VTEX.

[Sepa cómo registrar correctamente la Categoría Categoria Global de su tienda](http://help.vtex.com/es/tutorial/configurando-a-categoria-global)

### Especificaciones para atributos de producto

Para feeds que poseen productos de la categoría "Vestuario y accesorios" será obligatoria la inserción de los atributos "color" [g:color], "edad" [g:age\_group] y "género" [g:gender]. Para los feeds con productos de la categoría "Vestuario y Accesorios - Ropas" y "Vestuario y accesorios - Zapatos" será también necesario incluir el atributo “tamaño" [g:size].

Creamos campos customizables para una mayor flexibilidad en la integración de la nomeclatura actual de las especificaciones de las categorías de su tienda con las Especificaciones de Producto de Google.

Para llenar correctamente los campos customizables usted debe seguir el siguiente artículo: [Patrón de valor para Atributo de Especificaciones de Producto - XML GoogleShopping](http://help.vtex.com/es/tutorial/atributo-de-especificaciones-de-producto-xml-googleshopping)
