---
title: 'Aprovação de clientes'
id: 2fDHMMLJl00Pm6imiACU72
status: PUBLISHED
createdAt: 2021-03-30T16:54:48.752Z
updatedAt: 2023-03-29T00:06:00.612Z
publishedAt: 2023-03-29T00:06:00.612Z
firstPublishedAt: 2021-03-30T17:14:26.769Z
contentType: tutorial
productTeam: Master Data
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: aprovacao-de-clientes
legacySlug: aprovacao-clientes
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

A aprovação de clientes é realizada no Master Data e pode ser realizada via Admin ou via API.

## Aprovação de clientes via Admin

Para aprovar clientes no Admin:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. Dentro do box __Profile System__, clique no ícone  <i class="fas fa-bars"></i>   ao lado de __Clientes.__
3. Clique na linha correspondente ao cliente que deseja aprovar.
4. No final da página, clique no botão azul __“Editar”.__
5. Ao lado do campo “Aprovado”, marque a __caixa de seleção.__
6. No final da página, clique no botão azul __“Salvar”.__

Desse modo, o conteúdo da loja será exibido para os clientes selecionados. 

## Aprovação de clientes via API

Você pode aprovar vários clientes de uma vez por meio de uma rota da [API do Master Data](https://developers.vtex.com/vtex-developer-docs/reference/master-data-api-v2-overview "API do Master Data").

Todas as informações relacionadas a um cliente podem ser interpretadas como um documento na [entidade de dados “Cliente”](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265 "entidade de dados "Cliente""). Logo, a rota [PATCH Create or Update partial document](https://developers.vtex.com/vtex-developer-docs/reference/documents#createorupdatepartialdocument "PATCH Create or Update partial document") deve ser utilizada para alterar o valor relativo ao campo “Aprovado” de forma massiva.

Confira o artigo [Importar dados de clientes](https://help.vtex.com/pt/tutorial/importar-datos-de-clientes-brasil?locale=pt "Importar dados de clientes") para saber quais campos devem ser criados para um documento específico de pessoa física. 
