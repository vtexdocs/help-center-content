---
title: 'Integração com VTEX ID'
id: 4wGcnjMDg5KpLc40o14dDd
status: ARCHIVED
createdAt: 2019-01-23T18:56:08.943Z
updatedAt: 2022-08-04T22:35:48.188Z
publishedAt: 
firstPublishedAt: 2019-01-23T19:43:43.591Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: integracao-com-vtex-id
locale: pt
legacySlug: integracao-com-vtex-id
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

A VTEX não oferece suporte para integração do VTEX ID (nosso sistema de autenticação e autorização) em ambientes de terceiros.

A forma ideal de ter um fluxo de login integrado entre diferentes sistemas é utilizando um provedor OAuth.

O VTEX ID possui integração completa com serviços OAuth 2.0, o que pode ser estendido até mesmo para o acesso ao ambiente administrativo. Veja mais em: [Criar autenticação OAuth2](https://help.vtex.com/pt/faq/criar-autenticacao-oauth2)

Naturalmente, o fluxo nativo entregue pelo VTEX ID sempre será o mais curto e otimizado para a melhor experiência do usuário, especialmente para em um ambiente de e-commerce.

Sendo assim, a melhor alternativa para uma experiência de autenticação unificada é utilizando uma _"web view"_ no serviço externo que leve o VTEX ID até o usuário.

Sempre que o usuário faz login são criados cookies contendo o token de autorização. A partir disso, ele passa a estar identificado nos serviços e APIs da VTEX, aonde poderá fazer as ações que são pertinentes somente a usuários identificados. Veja mais em: [Verificando o usuário que está autenticado](https://help.vtex.com/pt/tutorial/verificando-o-usuario-que-esta-autenticado)
