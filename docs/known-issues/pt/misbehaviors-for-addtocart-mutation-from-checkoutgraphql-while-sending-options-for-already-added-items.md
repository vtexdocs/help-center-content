---
title: 'Comportamentos incorretos para a mutação addToCart a partir do checkout-graphql enquanto envia "opções" para itens já adicionados'
id: 1lMWbgmBsOis9gAKcMm8ob
status: PUBLISHED
createdAt: 2022-05-03T20:42:18.655Z
updatedAt: 2022-11-25T22:44:04.555Z
publishedAt: 2022-11-25T22:44:04.555Z
firstPublishedAt: 2022-05-03T20:42:18.940Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: comportamentos-incorretos-para-a-mutacao-addtocart-a-partir-do-checkout-graphql-enquanto-envia-opcoes-para-itens-ja-adicionados
locale: pt
kiStatus: Backlog
internalReference: 452053
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Ao utilizar o "_addToCart"_ mutação do "_checkout-graphql"_ em um carrinho onde um determinado item já foi adicionado sem "_opções_", tentar incluí-lo novamente, desta vez com "_opções_", não vai funcionar corretamente. A mutação não registrará as "_opções_" enviadas e também retornará um erro se elas estiverem relacionadas com informações de "_subscrição_".

Neste contexto, a propriedade "_opções_" é utilizada para declarar "_assemblyOptions_", tanto para "_composition_" ou "_inputValues_", que também é utilizada no lugar de "_itemAttachments_" e para incluir "_subscriptionsData_".

Comportamentos atuais:
- _addToCart_ **sem** enviar "_opções_" para um item já adicionado **também sem** "_opções_" simplesmente atualizará sua quantidade **para** o número dado
- _addToCart_ com ou sem envio de "_opções_" para um item já adicionado **com**"_opções_" funcionará para incluir **novos**/repetentes itens com a quantidade dada

Onde a questão acontece:
- _addToCart_ enviar "opções" para um item já adicionado sem "opções".

As "_opções_" não serão registradas (nem atualizando ou funcionando como um novo item) no OrderForm, mas funcionarão para atualizar a quantidade do item já adicionado - da mesma forma que o primeiro comportamento descrito.

O pior cenário acontece se você estiver enviando uma "_opção_" relacionada às informações de assinatura. A mutação "_addToCart"_ tem uma ação encadeada para atualizar a seção "_subscriptionsData_" do orderForm com as informações deste "_opção_", e neste caso, falhará, devolvendo erros para a operação - mas também fazendo a ação anterior, que atualiza a quantidade.

Para registro, a mutação "_updateItems"_ não funciona para adicionar itens nem para adicionar/remover "_opções_" a um item já adicionado.


## Simulação


Considerando esta mutação:

    mutação ($orderFormId: ID, $items: [ItemEntrada]) {Adicionar ao carrinho (orderFormId: $orderFormId, itens: $items) { ...  }}

Primeiro pedido, que funciona bem:

    {"itens": [ {"id": 123, "quantidade": 1, "vendedor": "1" } ]}

Segunda solicitação, incluindo o mesmo item, mas com informações de assinatura:

    {"itens": { {"id": 123, "índice": 0, "quantidade": 1, "vendedor": "1", "opções": [ { {"assemblyId": "assemblyId": "vtex.subscription", "inputValues": {"vtex.subscription.key.frequency": "1 mês" }        }     ]    }  ]}

A resposta:

    {"dados": nulos, "erros": {\i1}"mensagem": "pedido falhou com o código de status 400", ...          "resposta": {"dados": [...]: { "campos": [...]: {}, "operaçãoId": "acdb9ef5-59dc-49a7-9d79-d3fb895d81fe", "error": {"código": "1", "mensagem": "Assinatura inválida", "exceção": nulo }            }, ...    } ]}


## Workaround


N/A

