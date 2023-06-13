---
title: Como funciona o fluxo de liquidação agendada para compras realizadas com duas formas de pagamento?
id: 32vvCkFrmbUydhI5ncFCja
status: PUBLISHED
createdAt: 2021-06-15T15:14:09.235Z
updatedAt: 2022-07-19T12:56:42.732Z
publishedAt: 2022-07-19T12:56:42.732Z
firstPublishedAt: 2021-06-15T15:20:41.908Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: como-funciona-o-fluxo-de-liquidacao-agendada-para-compras-realizadas-com-duas
legacySlug: como-funciona-o-fluxo-de-captura-agendada-para-compras-realizadas-com-duas
---

Em situações onde o cliente realiza uma compra utilizando duas formas de pagamento (cartão de crédito + vale, por exemplo), a liquidação deste valor acontecerá de acordo com o prazo programado em cada uma das [afiliações de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete), bem como as [condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento) configuradas em sua loja.

Analise o exemplo abaixo:

- __Cartão de crédito:__ liquidação agendada para 4 dias após a aprovação do pagamento.
- __Vale:__ liquidação automática (ocorre automaticamente após a aprovação do pagamento).

Caso uma compra seja realizada com essas duas formas de pagamento, a liquidação acontecerá exatamente de acordo com o que foi configurado, ou seja, uma não irá conflitar com a outra. 

Isso significa que, se uma compra foi realizada no dia __15/04__, a liquidação do cartão de crédito acontecerá no dia __19/04__ (04 dias após a aprovação do pagamento).

Já a liquidação do vale, será feita automaticamente, assim que o pagamento for aprovado.

