---
title: 'Introdução aos VTEX IO builders'
id: 2bWRLkhfSPAD17jfpCTLCe
status: ARCHIVED
createdAt: 2019-02-19T19:54:40.418Z
updatedAt: 2020-03-13T21:24:44.672Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:54:43.718Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: intro-to-vtex-io-builders
locale: pt
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugPT: crie-uma-loja-usando-vtex-io
---

Apps do VTEX IO exportam código ou configuração para fornecer features ou alterar o comportamento da plataforma. Por exemplo, uma app pode exportar componentes React de front-end ou um Schema GraphQL, ou ainda configurações para o sistema do Checkout que afetarão sua operação quando instaladas.

Esses pedaços de código e configuração geralmente requerem alguma preparação ou validação para servirem à sua finalidade. Por exemplo, os componentes React precisam ter suas dependências extraídas e compiladas em pacotes JavaScript.

O VTEX IO cuida automaticamente de todas essas etapas, implementando-as como Builders. Uma vez que sua app declara que ela usa um builder, a pasta correspondente e seu conteúdo são processados ​​por ele quando é realizado o link.
![builders](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.svg)

O projeto store theme usa dois builders principais (`store` e `styles`), mas à medida que criar apps com funcionalidades mais avançadas, você começará a usar outros builders de nível mais baixo, como `react`, `messages`, `graphql` e `node`.
