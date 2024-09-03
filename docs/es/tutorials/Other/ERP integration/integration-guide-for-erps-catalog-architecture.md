---
title: 'Guía de integración de ERPs - Arquitectura del Catálogo'
id: 4Dd3etdW3Y8oGAeAK8E82K
status: ARCHIVED
createdAt: 2017-09-13T18:36:05.041Z
updatedAt: 2020-06-04T01:08:49.683Z
publishedAt: 
firstPublishedAt: 2017-09-13T18:40:30.973Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracion-de-erps-arquitectura-del-catalogo
locale: es
legacySlug: guia-de-integracion-de-erps-arquitectura-del-catalogo
subcategoryId: 5fKgQZhrCw88ACy6Su6GUc
---

Generalmente, los productos se organizan dentro de la tienda en estructuras mercadológicas formadas por:

1. **Departamento** - categoría cuyo identificador de categoría padre es ** nulo **
2. **Categoría** - categoría cuyo identificador de categoría padre es un **departamento**
3. **Subcategoría**. categoría cuyo id de categoría principal es una **categoría**

_Ejemplo:_

* Departamento/Categoría/Subcategoría/Produto
* Herramientas/Eléctricas/Taladro/Super Drill

El registro de la estructura mercadológica debe ser hecho directamente en el admin de la propia tienda, y para atender la integración del ERP, se crea un departamento estándar para productos que vienen del ERP, o sea, todos los productos caen en el admin de la tienda en ese departamento estándar y luego en el momento del enriquecimiento (completar la información del producto) se coloca en la categoría deseada.

### Marcas 

La creación de las marcas también debe ser hecha por el administrador de VTEX. Para la descarga de producto del ERP, crear una marca estándar, y luego en el momento del enriquecimiento (completar la información del producto), dentro del admin de VTEX, coloca en la marca correcta.

### ¿Cuál es la diferencia entre el producto y SKU?

El **Producto** es una definición más genérica de algo que se ofrece al cliente, por ejemplo, *Refrigerador*, *Camiseta*, *Balón*.

**SKU** es una sigla en inglés de "Stock Keeping Unit", en español Unidad de Mantenimiento de Stock, es decir, un SKU define una variación de un producto, por ejemplo, *Heladera Blanca 110V*, *Camiseta Amarilla Grande*

En el modelo de registro de Productos y SKU de VTEX, un SKU siempre será hijo de un producto (no hay SKU sin producto), aunque este producto no tenga variaciones, y en ese caso será 1 SKU para 1 producto, por ejemplo, producto *Balón Jabulani* con *SKU Balón Jabulani*.
