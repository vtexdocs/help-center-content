---
title: 'Using Header block to achieve greater control of component layout and positioning'
id: 2lA9KLBZtjXRlQdjOUcouF
status: DRAFT
createdAt: 2019-04-04T17:54:33.106Z
updatedAt: 2020-03-13T21:24:59.098Z
publishedAt: 
firstPublishedAt: 2019-04-04T20:33:46.451Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: using-header-block-to-achieve-greater-control-of-component-layout-and-positioning
locale: en
legacySlug: using-header-block-to-achieve-greater-control-of-component-layout-and
subcategory: Z46a6rHVAaAucoiW0skQQ
---

<div class="alert alert-info">
This tutorial assumes you have read <a href="https://help.vtex.com/tutorial/understanding-storebuilder-and-stylesbuilder--16r1nkCNqZI29V00JgmAlE">Understanding Storesbuilder and Stylesbuilder</a> and <a href="https://help.vtex.com/tracks/build-a-store-using-vtex-io--5qJr8BIQXAKec9CpBWrTNv">build a store using VTEX IO</a>
</div>

Previously, the developer could only remove or include components, and then IO would determine where to position the components inside the blocks.

The Header component now allows greater control over block layout and positioning. With the __header block__, developers have a greater level of control by allowing component positioning inside blocks.

This can be done by just creating a new header layout:

```
    "header.full": {
      "blocks": [
        "header-layout.desktop",
        
        ]
      } 
        
```        

and then by further adding rows to it:

```

   "header-layout.desktop": {
      "children": [
        "header-row#1-desktop",
        "header-row#2-desktop",

      ]
    }
    
```    

Each row can then be customized:

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

