---
title: "Indisponibilidade de itens na alocação do aplicativo de vendas com ponto de coleta (heurística inadequada na seleção de vendedores)"
id: 4Bz10krfrQ9oe1eMESQoJE
status: PUBLISHED
createdAt: 2025-05-28T13:45:31.752Z
updatedAt: 2025-05-28T13:56:34.113Z
publishedAt: 2025-05-28T13:56:34.113Z
firstPublishedAt: 2025-05-28T13:45:32.913Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: indisponibilidade-de-itens-na-alocacao-do-aplicativo-de-vendas-com-ponto-de-coleta-heuristica-inadequada-na-selecao-de-vendedores
locale: pt
kiStatus: Backlog
internalReference: 1234534
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao fazer um carrinho por meio do aplicativo de vendas, o sistema insere a informação `"checkedIn:true"` e registra/associa o formulário de pedido a um ponto de coleta, o que é feito pela variável "`checkedInPickupPointId"`, a partir da qual o estágio de alocação pode falhar para um ou mais itens contidos no carrinho, retornando `"unavailableItemFulfillment`" para ele.

Isso ocorre porque a heurística de seleção de vendedor inicialmente usa o endereço do ponto de coleta para estimativas, mas na próxima etapa, durante o atendimento, pode usar o endereço do cliente dependendo do retorno na solicitação e, como consequência, o sistema não pode garantir que todos os itens possam ser atendidos pelo(s) vendedor(es) selecionado(s) na primeira etapa, levando a uma falha na alocação de parte dos itens - mesmo quando eles poderiam ser atendidos por outro vendedor adequado, mas que não foi incluído na etapa inicial da heurística.

Observe que o erro só se manifesta em fluxos originados do aplicativo Sales com check-in do ponto de coleta.

## Simulação


Esse cenário pode não ser replicável devido às suas características, mas, em alguns casos, é possível executar as seguintes etapas para replicá-lo:

1-Montar um carrinho por meio do aplicativo de vendas, o que fará com que o OrderForm tenha `"isCheckedIn: true"` e "`checkedInPickupPointId`" definidos.

2 - Adicione dois ou mais produtos ao carrinho, garantindo que apenas parte deles esteja disponível no estoque do ponto de coleta escolhido.

3-Veja se pelo menos um dos itens retorna uma mensagem "unavailableItemFulfillment" ao simular ou fechar o pedido

## Workaround


Como solução alternativa ou definitiva, recomenda-se avaliar a ativação de "Delivery Promise (DP)" na heurística da conta afetada.






