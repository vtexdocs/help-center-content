---
title: Guia de integração de ERPs - Arquitetura do Catálogo
id: 4Dd3etdW3Y8oGAeAK8E82K
status: DRAFT
createdAt: 2017-09-13T18:36:05.041Z
updatedAt: 2020-06-04T01:08:49.683Z
publishedAt: 
firstPublishedAt: 2017-09-13T18:40:30.973Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracao-de-erps-arquitetura-do-catalogo
legacySlug: guia-de-integracao-de-erps-arquitetura-do-catalogo
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

Geralmente, os produtos são organizados dentro da loja em estruturas mercadológicas formadas por:

1. **Departamento** - categoria cujo id de categoria pai é **nulo**,
2. **Categoria** - categoria cujo id de categoria pai é um **departamento**,
3. **SubCategoria**. categoria cujo id de categoria pai é um **categoria**

_Exemplo:_

* Departamento/Categoria/SubCategoria/Produto
* Ferramentas/Eletricas/Furadeiras/Super Drill

O cadastro da estrutura mercadologica deve ser feito diretamente no admin da própria loja, e para atender a integração vinda do ERP, é criado um departamento padrão para produtos que vem do ERP, ou seja, todos os produtos caem no admin da loja nesse departamento padrão, e depois no momento do enriquecimento é colocado na categoria desejada.

### Marcas 

A criação das marcas também deve ser feita pelo admin da VTEX. Para descida de produto do ERP, criar uma marca padrão, e depois no momento do enriquecimento, dentro do admin da VTEX, coloca na marca correta.

### Qual é a diferença entre produto e SKU?

O **Produto** é uma definição mais genérica de algo que é ofertado ao cliente, por exemplo, *Geladeira*, *Camiseta*, *Bola*.

O **SKU** é uma sigla em inglês de "Stock Keeping Unit", em português Unidade de Manutenção de Estoque, ou seja, uma SKU define uma variação de um produto, por exemplo, *Geladeira Branca 110V*, *Camiseta Amarela Grande*

No modelo de cadastro de Produtos e SKUs da VTEX, um SKU sempre será filho de um Produto (não existe SKU sem produto), mesmo que esse produto não tenha variações, e nesse caso será 1 SKU para 1 produto, por exemplo, produto *Bola Jabulani* com a *SKU Bola Jabulani*.
