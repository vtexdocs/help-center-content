---
title: 'Rellenar campos de registro de Colección'
id: 7eKL7CFRW3yGKlnDfQetbj
status: PUBLISHED
createdAt: 2019-06-03T20:13:01.481Z
updatedAt: 2024-09-09T14:09:09.775Z
publishedAt: 2024-09-09T14:09:09.775Z
firstPublishedAt: 2019-06-13T20:25:06.424Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6AcGyun1hSWewU8YcaQiO
slugEN: filling-out-collection-registration-fields
locale: es
legacySlug: rellenar-campos-de-registro-de-coleccion
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.

Para entender mejor el significado de los campos de registro de una colección de productos, vea a continuación la descripción completa de cada uno de estos:

- __Product Cluster Id__: número para la identificación de la colección de productos. Este campo será rellenado de forma automática por el sistema al guardar el registro de la nueva colección.

- __Name__: nombre para la identificación de la colección de productos. Este campo es obligatorio y debe contener apenas letras, números y guion.  El guion no debe usarse al inicio o al final del nombre deseado.

- __Highlight?__: esta opción debe marcarse para que la colección esté en destaque en su tienda, a través del control `$product.HightLight`. Para entender mejor sobre el uso de este control, acceda a nuestro artículo [Controles del template de estante](https://help.vtex.com/es/tutorial/controles-do-template-de-prateleira--tutorials_550).

- __Searchable?__: esta opción debe marcarse para que la colección pueda ser devuelta en la [API de Búsqueda de VTEX](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search-?endpoint=get-/api/catalog_system/pub/products/search/-search-). 

- __From/To__: período de tiempo en que la colección de productos estará activa en su tienda.
