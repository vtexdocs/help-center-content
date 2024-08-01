---
title: 'Aprovação de clientes'
id: 2fDHMMLJl00Pm6imiACU72
status: PUBLISHED
createdAt: 2021-03-30T16:54:48.752Z
updatedAt: 2024-06-18T22:16:38.698Z
publishedAt: 2024-06-18T22:16:38.698Z
firstPublishedAt: 2021-03-30T17:14:26.769Z
contentType: tutorial
productTeam: Master Data
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: aprovacao-de-clientes
locale: pt
legacySlug: aprovacao-clientes
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

A aprovação de clientes é realizada no Master Data e pode ser efetuada através do Admin ou via API. Confira a seguir as instruções para cada uma das duas formas de aprovação.

## Aprovar clientes no Admin

Para aprovar clientes no Admin, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Dentro do card __Profile System__, clique no ícone  <i class="fas fa-bars"></i>   ao lado de __Clientes__.
3. Clique na linha correspondente ao cliente que deseja aprovar.
4. No final da página, clique no botão `Editar`.
5. Ao lado do campo **Aprovado**, marque a caixa de seleção.
6. No final da página, clique no botão `Salvar`.

Desse modo, o conteúdo da loja será exibido para os clientes selecionados. 

## Aprovar clientes via API

Você pode aprovar vários clientes de uma vez por meio de uma rota da [API do Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api "API do Master Data").

Todas as informações relacionadas a um cliente podem ser interpretadas como um documento na [entidade de dados](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265) __Cliente__. Logo, a rota [PATCH Update partial document](https://developers.vtex.com/docs/api-reference/masterdata-api#patch-/api/dataentities/-acronym-/documents/-id- "PATCH Update partial document") deve ser utilizada para alterar o valor relativo ao campo __Aprovado__ de forma massiva.

Confira o artigo [Importar dados de clientes](https://help.vtex.com/pt/tutorial/importando-dados-de-clientes-brasil--2zWYVOyj0sISYQmeUwCsI0 "Importar dados de clientes") para saber quais campos devem ser criados para um documento específico de pessoa física.
