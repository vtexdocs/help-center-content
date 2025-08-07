---
title: "Cálculo de faturamento de ordens usando o valor da fatura de entrada na validação da fatura de saída"
id: kEjeBKkJMpUDR0JdX6fZv
status: PUBLISHED
createdAt: 2023-11-06T11:39:27.169Z
updatedAt: 2023-11-09T20:47:52.250Z
publishedAt: 2023-11-09T20:47:52.250Z
firstPublishedAt: 2023-11-06T11:39:28.035Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: calculo-de-faturamento-de-ordens-usando-o-valor-da-fatura-de-entrada-na-validacao-da-fatura-de-saida
locale: pt
kiStatus: Fixed
internalReference: 930491
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante o processo de envio de faturas, é possível que o usuário envie faturas de saída e de entrada, mas se forem feitas duas faturas parciais em um pedido, uma de saída e outra de entrada, o sistema soma esses valores para validar se o pedido pode receber uma nova fatura, impossibilitando que pedidos cujo item foi faturado e depois devolvido não tenham seu valor total faturado.

Isso ocorre porque a API Orders atualmente realiza uma validação de valor para determinar se deve permitir que uma nova fatura de saída seja feita para o pedido, mas o cálculo está considerando a soma de todas as faturas, independentemente do tipo (entrada ou saída), fazendo com que o sistema entenda que não há mais valor a ser faturado.

## Simulação



1- Criar um pedido com duas unidades do mesmo SKU
2- Faturar apenas uma dessas unidades
3- Agora faça uma nova fatura de entrada para a unidade faturada na etapa anterior.
4- Agora tente faturar a unidade restante do pedido.
5- Nesse momento, você receberá uma mensagem genérica na interface do usuário indicando que não é possível faturar o item.




## Workaround


Não há nenhuma solução alternativa disponível.





