---
title: 'A página Coleções em Detalhes da organização mostra apenas 20 coleções'
id: 1NL46GlhANQoa6IzGSSwdS
status: PUBLISHED
createdAt: 2023-08-31T20:02:37.675Z
updatedAt: 2024-04-23T21:35:34.440Z
publishedAt: 2024-04-23T21:35:34.440Z
firstPublishedAt: 2023-08-31T20:02:38.351Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: a-pagina-colecoes-em-detalhes-da-organizacao-mostra-apenas-20-colecoes
locale: pt
kiStatus: Fixed
internalReference: 891511
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A página Coleções em Detalhes da organização mostra apenas 20 coleções, mesmo depois de alterar a quantidade de linhas na parte inferior da página.

## Simulação



- Certifique-se de que você tenha mais de 20 coleções ativas;
- No administrador, vá para a página B2B Organizations (Organizações B2B) e selecione uma organização;
- Vá para a guia Collections (Coleções); você verá apenas 20 coleções disponíveis

## Workaround


Se a coleção desejada não aparecer na guia Collections (Coleções), atribua-a usando o GraphQL IDE:

- Acesse o GraphQL IDE;
- Selecione o aplicativo `vtex.b2b-organizations-graphql`;
- Use a mutação abaixo e adicione os valores para `id`, `name`, `collections.id` e `collections.name`

    mutation { updateOrganization ( id: "" name: "" status: "active" collections: [{ id: "" name: "" }] ){ status message }}





