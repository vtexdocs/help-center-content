---
title: 'Order Allocation Algorithm (Beta)'
id: 1zLCAyEdnVe3EsE9Kz88xA
status: PUBLISHED
createdAt: 2022-07-12T23:39:25.008Z
updatedAt: 2023-03-21T17:27:34.101Z
publishedAt: 2023-03-21T17:27:34.101Z
firstPublishedAt: 2022-07-12T23:51:23.186Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slug: order-allocation-algorithm-beta
locale: pt
legacySlug: order-allocation-algorithm-beta
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

<div class="alert alert-info">
<p>Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

**Order Allocation Algorithm** é o algoritmo da plataforma VTEX que busca selecionar os sellers capazes de enviar os pedidos com os menores custos de [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) e de [transportadoras](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) configuradas.

O **Order Allocation Algorithm** funciona de formas diferentes para envio do tipo retirada e entrega, como pode ser visto na tabela a seguir:

| **Entrega** | **Retirada** |
| ---------- | ---------- |
| 1. Após o consumidor informar sua localidade, na etapa do carrinho, o algoritmo identifica o endereço. | 1. Igual. |
| 2. O algoritmo verifica quais [zonas de envio](#zonas-de-envio) cobrem o endereço. | 2. Igual. |
| 3. O algoritmo identifica quais [opções de envio](#opcoes-de-envio) estão associadas a essas zonas de envio. | 3. Igual. |
| 4. O algoritmo busca as estimativas de entrega (ou SLA) de cada uma dessas opções de envio. | 4. Igual. |
| 5. Para cada estimativa de entrega, o algoritmo calcula qual é a combinação de [fulfillment points](#fulfillment-points) e [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) que cobre os itens do carrinho buscando os menores custos possíveis. Esse custo é calculado a partir da [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127). | 5. Para cada estimativa de envio, o algoritmo ordena os [fulfillment points](#fulfillment-points) que possuem os itens do carrinho em estoque, de acordo com a distância entre o [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) e a localidade do consumidor, ordenando da menor distância para a maior. Se há pontos de retirada com a mesma distância, o desempate é feito pelo custo da [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127). |
| 6. Para cada opção de envio aplicável, o algoritmo calcula a tarifa a ser apresentada ao consumidor no checkout, de acordo com a regra de precificação configurada na opção de envio. | 6. O algoritmo calcula a tarifa a ser apresentada ao consumidor no checkout, de acordo com a regra de precificação configurada na opção de envio. |
| 7. Na etapa do checkout, são apresentadas ao consumidor as opções de envio selecionadas, com a previsão do tempo e custo da entrega. | 7. Na etapa do checkout, são apresentados ao consumidor todos os pontos de retirada que cobrem os itens do carrinho. |

<br>

<div class = "alert alert-info">
O critério prioritário do <a href="https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">algoritmo atual</a> é buscar a menor quebra de pacotes do pedido. O <b>Order Allocation Algorithm</b> tem como critério principal buscar os menores custos de envio para o lojista.
</div>

As próximas seções apresentam detalhes sobre o funcionamento do algoritmo e estão divididas em:

- [Zonas de envio](#zonas-de-envio)
- [Opções de envio](#opçoes-de-envio)
- [Fulfillment points](#fulfillment-points)

## Zonas de envio

Zona de envio é uma delimitação geográfica que estabelece a região para a qual determinadas opções de envio são válidas. Uma opção de envio sempre tem as mesmas condições, ainda que para zonas de envio diferentes. Veja a seguir um exemplo de como as opções de envio se relacionam com as zonas de envio: 

> Exemplo: para a zona de envio A, existem duas opções de envio, uma chamada _Expressa_, com entrega em 2 dias úteis, e outra chamada _Normal_, com entrega em 5 dias úteis. Para a zona de envio B, as opções de envio são a _Super Expressa_, com entrega em 1 dia útil, e _Normal_, com entrega em 5 dias úteis.

A partir do momento que o consumidor informa sua localidade no carrinho, o **Order Allocation Algorithm** identifica quais são as zonas de envio que abrangem essa localidade e quais [opções de envio](#opcoes-de-envio) configuradas pelo lojista são válidas para a região.

## Opções de envio

A configuração de uma forma de envio válida para uma zona de envio é chamada de [opção de envio](https://help.vtex.com/pt/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL). Por meio do módulo **Opções de envio**, o lojista dispõe de um mesmo ambiente para criar e gerenciar suas opções de envio. Na configuração de uma opção de envio, o lojista determina:

- O nome da opção de envio que aparece no checkout para o consumidor.
- O tipo de envio, se entrega ou retirada.
- O prazo de envio.
- As zonas de envio para as quais a opção de envio é válida.
- A tarifa de envio a ser cobrada do consumidor.

Depois que o **Order Allocation Algorithm** identifica as opções de envio válidas para a localidade do consumidor, ele calcula quais são as combinações de [fulfillment points](#fulfillment-points) da loja que atendem o carrinho no prazo previsto.

## Fulfillment points

Fulfillment point é um espaço físico com produtos que podem ser enviados para atender o pedido do consumidor. Lojas e centros de distribuição são alguns exemplos. 

A malha logística da loja permite que um pedido seja atendido por múltiplas combinações de fulfillment points. O **Order Allocation Algorithm** busca as combinações que oferecem menor custo para o lojista.

Ao analisar combinações de fulfillment points, o algoritmo considera:

- O local de onde o item do pedido vai sair.
- A [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) sendo utilizada.

Por meio da política de envio, o **Order Allocation Algorithm** simula as combinações de fulfillment points buscando os menores custos para o lojista. O processo é feito por meio de consultas a [planilhas de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) e análise de custos com [transportadoras](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).

<div class = "alert alert-info">
No <a href="https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">algoritmo atual</a>, muitas vezes o lojista configura a <a href="https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127">planilha de frete</a> com os valores que ele deseja apresentar para o consumidor no checkout, e não o custo real com as transportadoras. Com o <b>Order Allocation Algorithm</b>, o lojista não precisa considerar como o custo na planilha de frete se reflete na experiência de compra do consumidor, pois isso passa a ser determinado por configurações nas <a href="https://help.vtex.com/pt/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL">opções de envio</a>. Além disso, o <b>Order Allocation Algorithm</b> se torna mais preciso ao ter como referência os custos reais com transportadoras.
</div>

Após analisar as simulações possíveis, o **Order Allocation Algorithm** determina para cada opção de envio um resultado de combinações de fulfillment points. No checkout, o consumidor é apresentado a todas as opções de envio que possuem pelo menos uma combinação válida de fulfillment points que atendem o pedido.
