---
title: 'A atualização do banner do Intelligent Search por meio do URL da imagem não funciona corretamente'
id: bMFrVUmfbjvTWs4Ag6U57
status: PUBLISHED
createdAt: 2023-01-17T14:34:02.195Z
updatedAt: 2023-09-06T22:35:01.155Z
publishedAt: 2023-09-06T22:35:01.155Z
firstPublishedAt: 2023-01-17T14:34:02.912Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-banner-update-via-image-url-does-not-work-correctly
locale: pt
kiStatus: Backlog
internalReference: 734833
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No Admin V4, no módulo Banners, o usuário tem a possibilidade de criar ou atualizar banners já criados. Ao selecionar um banner para atualização, o usuário pode escolher entre usar um campo HTML ou inserir um link de imagem direto com um URL externo. Ao selecionar a inserção do banner por meio de um link de imagem direto, é acionada a consulta GraphQL, que atualmente não está funcionando corretamente, retornando `syntaxError` e, consequentemente, o erro 500.

## Simulação


Em uma loja com o Admin V4, acesse o módulo Banners, dentro de Search;
Selecione um banner criado anteriormente;
Em Type (Tipo), selecione Image (Imagem);
Preencha os campos de link;
Ao clicar em Save, a tela mostrará um erro GraphQL

## Workaround


N/A




