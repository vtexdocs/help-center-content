---
title: 'API de filtro (Facets) do Catálogo com comportamento inesperado quando há caracter especial em algum valor de campo'
id: tM9IHhy4gKg022ue0egYm
status: ARCHIVED
createdAt: 2017-06-26T15:50:51.368Z
updatedAt: 2019-12-31T15:17:28.958Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slugEN: untitled
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Ao executar a API de filtro (Facet), se algum valor (Especificação) tiver algum caracter especial, o sistema retorna um erro (500).

EndPoint da API: /api/catalog_system/pub/facets/search/{category}?map=c

## Simulação

Para simular o cenário:

1. Cadastre, na categoria que deseja testar, um campo tipo Combo, Radio ou Checkbox. (Doc: http://help.vtex.com/pt/tutorial/criando-um-campo-de-produto)
2. Cadastre, nesse campo, valores com caracteres especiais (Ex.: Peça)
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

