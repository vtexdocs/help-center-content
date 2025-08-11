---
title: 'Nova regra de desempate de pedidos na VTEX otimiza a distância até o comprador'
id: 5pSsuRw6WaoUfznwh0HWXe
status: PUBLISHED
createdAt: 2025-07-03T18:17:29.710Z
updatedAt: 2025-07-07T14:43:10.095Z
publishedAt: 2025-07-07T14:43:10.095Z
contentType: updates
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: new-vtex-order-tiebreaking-rule-shortest-distance
locale: pt
legacySlug: nova-regra-desempate-vtex-pedidos-menor-distancia
announcementImageID: ''
announcementSynopsisPT: 'Nova regra de desempate na VTEX prioriza sellers com entregas de menor distância até o comprador.'
---

Pensando em aprimorar a experiência dos compradores, implementamos uma nova regra para o último critério de desempate na [alocação de pedidos na VTEX](https://help.vtex.com/pt/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa). A partir de 07/07/2025, em vez de uma escolha aleatória, o desempate será determinado pela menor distância entre o seller e o comprador.

## O que mudou?

O fluxo atual de alocação de pedidos segue as etapas abaixo:

1. Eliminação de sellers que não atendem à [localidade do pedido](https://help.vtex.com/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) ou não possuem estoque suficiente para pelo menos um item do carrinho.
2. Redução do conjunto de sellers para até doze, considerando:
    * **Para entrega**: menor custo de frete (cadastrado na [tabela de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127)) e prazo.
    * **Para retirada**: menor custo de frete (cadastrado na [tabela de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127)), prazo, e menor distância entre o comprador e o ponto de retirada.
    * Quantidade de estoque como critério de desempate.
3. Dentre os até doze sellers selecionados anteriormente, priorização considerando:
    * Menor preço do total dos itens e maior disponibilidade do carrinho.
    * Menor custo total.
    * Menor prazo de entrega.
    * Em caso de empate, um seller é selecionado aleatoriamente.

A partir de 07/07/2025, caso haja empate no último critério, a escolha será feita pelo seller ou conjunto de sellers com a menor distância até o comprador, substituindo o processo de escolha aleatória. 

## Por que fizemos essa mudança?

Antes, o desempate aleatório nem sempre maximizava a experiência do comprador ou otimizava os custos dos sellers. Com a nova regra baseada na distância, verificamos os seguintes efeitos:

* Redução em até 25% a distância média percorrida nas entregas.
* Aumento da eficiência logística e da alocação de até 40% dos pedidos em sellers mais próximos do comprador.
* Promoção de uma experiência de compra mais sustentável e econômica para lojistas e consumidores.

## O que precisa ser feito?

Nenhuma ação é necessária para começar a usar a nova regra de alocação de pedidos. A atualização será implementada automaticamente em todas as lojas VTEX. 

Caso não deseje a implementação da nova regra, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

