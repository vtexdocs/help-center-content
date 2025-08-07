---
title: "O checkout não considera a localidade para traduzir erros de API"
id: 4JbEQJhiodzeWdXx66aNpT
status: PUBLISHED
createdAt: 2025-01-24T18:40:15.876Z
updatedAt: 2025-01-24T18:40:16.605Z
publishedAt: 2025-01-24T18:40:16.605Z
firstPublishedAt: 2025-01-24T18:40:16.605Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-checkout-nao-considera-a-localidade-para-traduzir-erros-de-api
locale: pt
kiStatus: Backlog
internalReference: 1168499
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O sistema procura o idioma definido em `clientPreferencesData.locale` para traduzir as páginas de checkout. Os erros retornados na API não serão traduzidos se o canal de vendas relacionado ao idioma não for enviado como um parâmetro na solicitação da API.

## Simulação


Em uma loja com uma configuração multilíngue, acesse o checkout usando uma localidade diferente do canal de vendas principal.
Force um erro como, por exemplo, adicionar mais quantidade de um item do que a existente no estoque.
Será exibido um erro pop-up não traduzido para a localidade escolhida.



## Workaround


Envie o canal de vendas relacionado à localidade escolhida como um parâmetro para todas as solicitações de API na interface do usuário de checkout.





