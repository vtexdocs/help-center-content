---
title: 'As traduções do catálogo não são refletidas no front-end'
id: 4c6Qzdn6NQfHhEN5U76WOi
status: PUBLISHED
createdAt: 2023-07-13T19:43:10.669Z
updatedAt: 2023-07-13T19:43:11.858Z
publishedAt: 2023-07-13T19:43:11.858Z
firstPublishedAt: 2023-07-13T19:43:11.858Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: as-traducoes-do-catalogo-nao-sao-refletidas-no-frontend
locale: pt
kiStatus: Backlog
internalReference: 861892
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o comerciante executa uma ação no aplicativo Messages para que alguns dados do produto sejam traduzidos no frontend, essa ação não está sendo refletida de fato.

## Simulação



1. Faça uma alteração no aplicativo de mensagens;
2. Verifique no indexInfo se o campo GenerateAndSaveTranslationsDocument está definido como 'false'
3. Não reindexar o produto;
4. Verifique se a alteração não foi refletida no site traduzido

## Workaround


Para forçar a exibição das traduções, é necessário reindexar o produto. Uma das seguintes ações deve resolver o problema:

- Alterar o nome;
- Alterar as palavras-chave;
- Alterar o texto;
- Alterar a categoria;
- Alterar a marca;
- Alterar a bandeira ativa.





