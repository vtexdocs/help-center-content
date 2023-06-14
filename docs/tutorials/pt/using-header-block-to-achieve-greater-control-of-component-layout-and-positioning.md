---
title: 'Usando o bloco Header para obter maior controle do layout e posicionamento dos componentes'
id: 2lA9KLBZtjXRlQdjOUcouF
status: DRAFT
createdAt: 2019-04-04T17:54:33.106Z
updatedAt: 2020-03-13T21:24:59.098Z
publishedAt: 
firstPublishedAt: 2019-04-04T20:33:46.451Z
contentType: tutorial
productTeam: VTEX IO
author: 3aBBTLS9ZKO6IcY0Goe2y2
slug: usando-bloco-header-para-obter-maior-controle-do-layout-e-posicionamento-dos-componentes
locale: pt
legacySlug: 
subcategory: Z46a6rHVAaAucoiW0skQQ
---

<div class="alert alert-info">
Este tutorial pressupõe que você tenha lido <a href="https://help.vtex.com/tutorial/understanding-storebuilder-and-stylesbuilder--16r1nkCNqZI29V00JgmAlE">Entendendo Storesbuilder e Stylesbuilder</a> e <a href="https://help.vtex.com/tracks/build-a-store-using-vtex-io--5qJr8BIQXAKec9CpBWrTNv">criar sua própria loja usando VTEX IO</a>

Anteriormente, o desenvolvedor só podia remover ou incluir componentes, e o IO determinava onde posicionar os componentes dentro dos blocos.

O componente Header agora permite um maior controle sobre o layout e o posicionamento do bloco. Com o __header block__, os desenvolvedores têm um nível de controle maior, permitindo o posicionamento dos componentes dentro dos blocos.

Isso pode ser feito criando um novo header layout:

```
    "header.full": {
      "blocks": [
        "header-layout.desktop",
        
        ]
      } 
        
```        

e depois adicionando linhas a ele:

```

   "header-layout.desktop": {
      "children": [
        "header-row#1-desktop",
        "header-row#2-desktop",

      ]
    }
    
```    

Cada linha pode ser personalizada:


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

