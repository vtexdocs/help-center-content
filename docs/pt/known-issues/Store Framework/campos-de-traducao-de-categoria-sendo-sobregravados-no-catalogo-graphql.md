---
title: "Campos de tradução de categoria sendo sobregravados no catálogo graphql"
id: 2nZlEN8Tlt7oKfF77u63ch
status: PUBLISHED
createdAt: 2023-03-22T15:48:59.725Z
updatedAt: 2023-03-22T15:49:00.550Z
publishedAt: 2023-03-22T15:49:00.550Z
firstPublishedAt: 2023-03-22T15:49:00.550Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: campos-de-traducao-de-categoria-sendo-sobregravados-no-catalogo-graphql
locale: pt
kiStatus: Backlog
internalReference: 654896
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao traduzir o conteúdo usando o aplicativo de catálogo-graphql ou a tradução do catálogo, os campos como nome, título ou descrição estão sendo sobregravados. Este comportamento só acontece se um destes campos (nome, título, descrição) for igual no registro do catálogo.


##

## Simulação



- Verifique a configuração da categoria na administração
- Verifique os campos "Nome", "Título da página da categoria (Tag Title)", "Descrição da categoria (Meta Tag Description)", pelo menos dois deles devem ser iguais
- Siga a documentação: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category


##

## Workaround


Ao registrar a categoria, os campos nome, título e descrição devem ser diferentes



