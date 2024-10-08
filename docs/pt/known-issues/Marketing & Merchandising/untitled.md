---
title: 'Especificação duplicada ou errada na página do produto'
id: 602UddMuqWmq2emQUymsyI
status: ARCHIVED
createdAt: 2017-06-05T20:01:41.057Z
updatedAt: 2019-12-31T15:17:09.475Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 
tag: 
slug: especificacao-duplicada-ou-errada-na-pagina-do-produto
locale: pt
kiStatus: 
internalReference: 
---

## Sumário

A exibição de campos de especificações incorretos pode ocorrer quando um produto é alterado de categoria. Isto, pois os campos de especificações da categoria anterior permanecem associados ao produto, mesmo após a alteração.

## Simulação


1. Acesse a edição de um produto
2. Altere a categoria do produto

Se a categoria anterior tiver especificações, pode ser que permaneçam aparecendo na página de produto.


## Workaround



ível visualizar o cenário.


## Workaround

Não há _workaround_ para este problema conhecido.

 Peça)
2. Cadastre um produto na mesma categoria
3. No cadastro do produto, na aba Especificações, escolha o valor com caracter especial e salve
4. Aguarde a indexação completa do produto (Por volta de 5 minutos)
5. Execute o endpoint /api/catalog_system/pub/facets/search/{category}?map=c

## Workaround

Enquanto não aplicamos um ajuste definitivo para esse comportamento, como solução paliativa, indicamos que utilizem caracteres similares não especiais nos valores dos campos.

Exemplo:
De "Peça"
Para "Peca"

Observação: Para aplicar essa solução de contorno é necessário identificar os produtos que estão com problema em uma determinada categoria. Se seu catálogo é muito grande, para identificar os casos mais facilmente, sugerimos que realize a exportação de especificação de produto (e SKUs) no menu "E-Commerce > Cadastro de Produto > Produtos e SKUs > Importar / Exportar Especificação de Produto (E SKU)".

