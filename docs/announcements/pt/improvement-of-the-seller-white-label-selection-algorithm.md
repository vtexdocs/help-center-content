---
title: "Aperfeiçoamento do algoritmo de seleção de Sellers White Label"
id: 2BI2ZElxvLvsfZsly9lLsx
status: PUBLISHED
createdAt: 2021-03-04T00:33:02.559Z
updatedAt: 2021-03-12T00:14:09.119Z
publishedAt: 2021-03-12T00:14:09.119Z
contentType: updates
productTeam: Shopping
author: 30TBnJ838LXSZvdJFlcB8H
slug: aperfeicoamento-do-algoritmo-de-selecao-de-sellers-white-label
legacySlug: aperfeicoamento-do-algoritmo-de-selecao-de-sellers-white-label
announcementImageID: ""
announcementSynopsisPT: Entenda o funcionamento da lógica de escolha de sellers para entrega ou retirada
---

Quando uma loja conta com múltiplos sellers para ampliar sua oferta de produtos e capacidade logística, é possível que existam inúmeras combinações de preço e prazo de entrega disponíveis para um mesmo SKU. Para garantir que as melhores alternativas sejam apresentadas para o comprador, codificamos diversos filtros e regras de negócio no [algoritmo de seleção de sellers](https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-white-label-sellers--3MemNQ4pKkWCpMdzI27AHa?&utm_source=autocomplete) do checkout. 

O algoritmo de seleção de sellers foi modificado com o intuito de adequar as opções de entrega e retirada para o cliente tendo como prioridade a maior cobertura de itens do carrinho. Isso significa que antes mesmo de aplicar os critérios de valor e prazo de entrega, ou distância de retirada, o algoritmo tentará garantir que todos os itens do carrinho estejam em estoque. 

Adicionalmente, o algoritmo minimiza a quantidade de sellers escolhidos para realizar a entrega do pedido, com a intenção de otimizar os custos de entrega dos pedidos.

## O que mudou?

O algoritmo de seleção de sellers foi atualizado para assegurar a maior cobertura possível dos itens do carrinho nas opções de entrega e retirada. Agora o algoritmo garante que, para pedidos  que necessitem de até até 6 sellers para realizar a entrega, nenhum produto fique indisponível no checkout. 

Além disso, para escolha de sellers que oferecem a opção de retirada, o algoritmo priorizará sempre a distância da localização de referência sobre critérios de preço e prazo para retirada.

<div class="alert alert-warning">
Atenção: A atualização do algoritmo se aplica para Seller White Label, e inclui <a href="https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa">Contas Franquia</a>. O algoritmo de seleção de sellers é aplicado quando o cliente consulta as opções de entrega. Isso significa que ele é aplicado na previsão de entrega no carrinho ou na etapa de entrega e retirada do checkout.
</div>

##  Por que realizamos esta mudança?

O objetivo da mudança é auxiliar na redução da taxa de abandono de carrinho por parte dos compradores nas lojas de clientes VTEX. Impactando diretamente na taxa de conversão. 

Com a alteração no algoritmo, a lógica de seleção dos sellers torna-se mais inteligente, mostrando opções de entrega e retirada mais assertivas aos compradores.

 Principais benefícios:
- Maior disponibilidade dos itens no carrinho. 
- Melhores opções de entrega e retirada, considerando rapidez e economia.

## O que precisa ser feito?

Nenhuma ação é necessária. A atualização do algoritmo acontecerá automaticamente para todas as lojas.

