---
title: 'Utilizando el bloque Header para obtener mayor control del diseño y posicionamiento de los componentes'
id: 2lA9KLBZtjXRlQdjOUcouF
status: DRAFT
createdAt: 2019-04-04T17:54:33.106Z
updatedAt: 2020-03-13T21:24:59.098Z
publishedAt: 
firstPublishedAt: 2019-04-04T20:33:46.451Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: utilizando-el-bloque-header-para-obtener-mayor-control-del-diseno-y-posicionamiento-de-los-componentes
legacySlug: 
subcategory: Z46a6rHVAaAucoiW0skQQ
---

<div class="alert alert-info">
Este tutorial supone que usted ha leído <a href="https://help.vtex.com/tutorial/understanding-storebuilder-and-stylesbuilder--16r1nkCNqZI29V00JgmAlE">Entendiendo Storesbuilder y Stylesbuilder</a> e <a href="https://help.vtex.com/tracks/build-a-store-using-vtex-io--5qJr8BIQXAKec9CpBWrTNv">crear tu propia tienda usando VTEX IO</a>

Anteriormente, el desarrollador sólo podía eliminar o incluir componentes, y el IO determinaba dónde colocar los componentes dentro de los bloques.

El componente Header ahora permite un mayor control sobre el diseño y el posicionamiento del bloque. Con el __header block__, los desarrolladores tienen un nivel de control mayor, permitiendo el posicionamiento de los componentes dentro de los bloques.

Esto se puede hacer creando un nuevo encabezado de diseño:


```
    "header.full": {
      "blocks": [
        "header-layout.desktop",
        
        ]
      } 
        
```        

Además de agregar linhas a ele:

```

   "header-layout.desktop": {
      "children": [
        "header-row#1-desktop",
        "header-row#2-desktop",

      ]
    }
    
```    

Cada línea se puede personalizar:

```
    "header-row#2-desktop": {
      "children": [
        "logo", 
	   "search-bar",
        "login",
        "minicart",
      ],
      },
      
```
