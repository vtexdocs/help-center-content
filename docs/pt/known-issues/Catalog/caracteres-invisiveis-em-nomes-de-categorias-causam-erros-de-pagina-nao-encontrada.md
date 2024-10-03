---
title: "Caracteres invisíveis em nomes de categorias causam erros de 'página não encontrada"
id: 4np2BZUF1EmlLmV0KTpnrf
status: PUBLISHED
createdAt: 2024-07-05T13:11:13.031Z
updatedAt: 2024-07-05T13:11:14.090Z
publishedAt: 2024-07-05T13:11:14.090Z
firstPublishedAt: 2024-07-05T13:11:14.090Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: invisible-characters-in-category-names-cause-page-not-found-errors
locale: pt
kiStatus: Backlog
internalReference: 1061149
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao criar categorias por meio da API ou do painel de administração, o nome da categoria não é validado corretamente, permitindo a inclusão de caracteres invisíveis. Como o nome da categoria é usado para gerar o URL da categoria, esses caracteres invisíveis também são incluídos no URL. Isso faz com que a página da categoria não funcione corretamente e retorne um erro "Página não encontrada".

## Simulação



1. Crie uma categoria com um caractere invisível em seu nome usando a API ou o painel de administração.
2. Acesse o URL da API para essa categoria.
3. Observe o erro "Página não encontrada"

## Workaround



A solução alternativa é remover o caractere invisível do nome da categoria, o que também atualizará o URL da página, resolvendo o problema.




