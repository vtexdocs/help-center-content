---
title: 'A atualização inteligente do Banner de busca via URL da imagem não funciona corretamente'
id: bMFrVUmfbjvTWs4Ag6U57
status: PUBLISHED
createdAt: 2023-01-17T14:34:02.195Z
updatedAt: 2023-01-17T14:34:10.348Z
publishedAt: 2023-01-17T14:34:10.348Z
firstPublishedAt: 2023-01-17T14:34:02.912Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: a-atualizacao-inteligente-do-banner-de-busca-via-url-da-imagem-nao-funciona-corretamente
locale: pt
kiStatus: Backlog
internalReference: 734833
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em Admin V4, no módulo Banners, o usuário tem a possibilidade de criar ou atualizar os banners já criados. Ao selecionar um banner para atualização, ele pode escolher entre usar um campo HTML ou inserir um link direto de imagem com uma URL externa. Ao selecionar a inserção do banner através de um link direto de imagem, a consulta GraphQL `setBanner` é acionada, que atualmente não está funcionando corretamente, retornando `syntaxError`, conseqüentemente, erro 500.


##

## Simulação


Em uma loja com Admin V4, acesse o módulo Banners, dentro de Search;
Selecione um banner previamente criado;
Em Type, selecione Image;
Preencha os campos do link;
Ao clicar em Save, a tela mostrará um erro GraphQL;


##

## Workaround


Criar um novo banner com as mesmas especificações (a consulta de criação de banner é `criateBanner` e está funcionando corretamente);




