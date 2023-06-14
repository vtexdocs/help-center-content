---
title: OrderForm API impedindo a seleção do método de envio para o mesmo item sob vendedores diferentes
id: 4dEfq7lNqTLF7SFIOaRsc2
status: PUBLISHED
createdAt: 2023-01-27T21:56:04.190Z
updatedAt: 2023-01-27T22:03:21.165Z
publishedAt: 2023-01-27T22:03:21.165Z
firstPublishedAt: 2023-01-27T21:56:04.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-api-impedindo-a-selecao-do-metodo-de-envio-para-o-mesmo-item-sob-vendedores-diferentes
kiStatus: Backlog
internalReference: 742139
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Embora um formulário de pedido suporte o mesmo SKU a ser adicionado várias vezes através de diferentes vendedores, ele não permite que o método de envio (SLA) seja selecionado individualmente - onde a logística para um vendedor é completamente independente dos outros.

Apesar disso, após informar o endereço ou escolher um método de envio disponível apenas para uma ocorrência específica da SKU, as outras ocorrências estarão sob um SLA diferente sem que isso seja um problema. Portanto, a questão é restrita à solicitação selecionando o SLA entre os itens neste cenário ou através de simulação do OrderForm.


##

## Simulação


Em um carrinho com o mesmo item adicionado mais de uma vez, mas através de vendedores diferentes, tente selecionar seus métodos de envio (SLAs) através do API, usando opções diferentes para cada um. O mesmo cenário também pode ser experimentado através do API de simulação, declarando um "selectedSlaId". O API recusará a ação apresentando a mensagem "O mesmo item não pode ter mais de um SLA selecionado".


##

## Workaround


N/A




