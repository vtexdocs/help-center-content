---
title: 'O botão "Ir para pagamento" não funciona na divisão da entrega ao alternar entre as opções de Entrega e Coleta'
id: 4VDxpsWl6N0SjriaqUtXG9
status: PUBLISHED
createdAt: 2023-02-17T18:03:49.526Z
updatedAt: 2023-02-17T18:03:49.948Z
publishedAt: 2023-02-17T18:03:49.948Z
firstPublishedAt: 2023-02-17T18:03:49.948Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-botao-ir-para-pagamento-nao-funciona-na-divisao-da-entrega-ao-alternar-entre-as-opcoes-de-entrega-e-coleta
locale: pt
kiStatus: Backlog
internalReference: 756587
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um carrinho com pelo menos 2 produtos onde há uma divisão de entrega em que um dos itens está disponível para retirada e o outro apenas para entrega programada, a IU não permitirá a etapa de pagamento quando você mudar entre as opções de retirada e entrega se o primeiro item no carrinho for aquele com entrega programada


##

## Simulação



- Tenha pelo menos 2 itens no carrinho onde um deles está programado para entrega e o outro, pickup;
- Certifique-se de que o item para entrega programada é o primeiro no carrinho
- Selecione a data de entrega programada para cada item;
- Ir para a opção de coleta;
- Voltar para a Opção de Entrega (a data já estará preenchida);
- Tente clicar no botão "Ir para pagamento", você não será capaz de fazê-lo.


##

## Workaround


Selecione novamente as datas programadas para os itens.




