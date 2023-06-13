---
title: Links de categorias visíveis no filtro lateral mesmo com exibição desabilitada
id: 5NwWyNDLtmKu6kCu6KYgs6
status: PUBLISHED
createdAt: 2018-05-03T17:37:48.868Z
updatedAt: 2022-12-22T20:45:19.537Z
publishedAt: 2022-12-22T20:45:19.537Z
firstPublishedAt: 2018-05-03T17:46:45.530Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: links-de-categorias-visiveis-no-filtro-lateral-mesmo-com-exibicao-desabilitada
kiStatus: Backlog
internalReference: 
---

## Sumário

Links de categorias aparecem no filtro lateral mesmo estando com as opções "__Categoria aparece no menu superior e no menu lateral do Site__" e "__Categoria está com link ativo no Site__" desabilitadas.

## Simulação

1. Acessar o catálogo.
2. Entre em __Categorias__.
3. Selecionar uma categoria.
4. Clicar em __Ações__ > __Alterar__.
5. Desmarcar as flags "__Categoria aparece no menu superior e no menu lateral do Site__" e "__Categoria está com link ativo no Site__".
6. Acessar a página da categoria logo acima através da loja.

## Workaround

Para ocultar estas categorias indesejadas no front, o workaround seria implementar um script que ocultasse as tags H4 que não possuem uma tag `A` como filho.

