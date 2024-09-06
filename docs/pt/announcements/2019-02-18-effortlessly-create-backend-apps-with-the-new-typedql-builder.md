---
title: 'Crie apps back-end com a praticidade do novo TypedQL Builder'
id: PcQomKRQjJshUVKD5QJ7m
status: ARCHIVED
createdAt: 2019-02-18T20:46:30.765Z
updatedAt: 2020-03-13T21:24:39.132Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: facilite-a-criacao-de-apps-backend-em-graphql-typescript-para-o-vtex-io-com
locale: pt
legacySlug: facilite-a-criacao-de-apps-backend-em-graphql-typescript-para-o-vtex-io-com
announcementImageID: ''
announcementSynopsisPT: 'Novo builder do VTEX.IO diminui duplicidade de código em apps que utilizam GraphQL e TypeScript.'
---

Lançamos um novo builder para facilitar o desenvolvimento de aplicações back-end que usam GraphQL e TypeScript. O objetivo é simplificar o processo de desenvolvimento e manutenção do código.


## Como é hoje
Ao desenvolver uma aplicação que utiliza GraphQL e TypeScript, é necessário manter duas declarações de protocolo de comunicação na pasta `/node`: `/graphql/schema.graphql` e `type declarations`, usando TypeScript.

Isso significa código duplicado, o que dificulta o desenvolvimento e a manutenção do projeto. Mais do que isso, favorece o surgimento de inconsistências e bugs. 


## Principais vantagens do TypedQL Builder
O __TypedQL Builder__ resolve todos os problemas de desenvolvimento com GraphQL e TypeScript que existem hoje:

- Geração automática do `schema.graphql`
- Tradução segura de TypeScript para GraphQL
- Aproveitamento de recursos da linguagem TypeScript inexistentes na linguagem GraphQL SDL
- Possibilidade de desenvolver uma app back-end inteira em TypeScript


## Qual o impacto?
Nenhum. Por ser uma solução opcional, nenhuma funcionalidade, builder ou dependência é afetada.

Para saber todos o detalhes do __TypedQL Builder__, [acesse este artigo do Help](/pt/tutorial/typeql-builder).

