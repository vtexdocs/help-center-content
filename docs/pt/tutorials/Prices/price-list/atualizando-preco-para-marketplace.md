---
title: 'Atualizar preço para marketplace'
id: tutorials_384
status: PUBLISHED
createdAt: 2017-04-27T22:07:41.136Z
updatedAt: 2025-02-19T16:56:02.391Z
publishedAt: 2025-02-19T16:56:02.391Z
firstPublishedAt: 2017-04-27T23:03:22.797Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: updating-prices-in-marketplaces
legacySlug: atualizando-preco-para-marketplace
locale: pt
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

A atualização de preços em marketplaces depende de dois fatores:

- Cadastro de preços para os produtos na [tabela de preços](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) associada à política comercial usada na integração com o marketplace.
- [Indexação do produto](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) após cadastro do novo preço.
- Para que um preço fixo agendado seja aplicado no marketplace, é necessário que haja uma alteração de preço na lista de preços correspondente. Essa alteração serve como um gatilho para notificar o marketplace sobre a nova precificação.

<div class="alert alert-warning">
  <p>Apenas <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj">preços fixos</a> são utilizados nas nossas integrações nativas com marketplaces. Outros cenários previstos na <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx">arquitetura do sistema de preços</a> estão disponíveis apenas para marketplace VTEX-VTEX.</p>
</div>
