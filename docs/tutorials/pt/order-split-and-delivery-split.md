---
title: 'Divisão de pedidos e divisão de entregas'
id: jQvzA6QgSd51e2p6bthoV
status: PUBLISHED
createdAt: 2021-09-27T21:06:59.520Z
updatedAt: 2023-01-13T18:53:14.386Z
publishedAt: 2023-01-13T18:53:14.386Z
firstPublishedAt: 2021-09-27T21:12:55.418Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: divisao-de-pedidos-e-divisao-de-entregas
legacySlug: divisao-de-pedidos-e-divisao-de-entregas
subcategory: 6XAvmMxp7yyY06ewYMuggs
---


Na plataforma VTEX, há cenários em que o cliente final recebe seu pedido em diferentes pacotes. Este artigo apresenta uma visão geral sobre a **divisão de pacotes (ou divisão de entregas)** e a **divisão de pedidos**, além de indicar as configurações que podem ser realizadas por parte do lojista.

Veja a seguir as principais diferenças entre os cenários de divisão de pedidos e divisão de pacotes.

* **[Divisão de pedidos](#divisao-de-pedidos):** ocorre quando há mais de um seller atendendo a uma mesma compra. Isso significa que, se há três sellers para atender a uma única compra, há três pedidos gerados. 
* **[Divisão de pacotes](#divisao-de-pacotes-entregas):** ocorre quando há mais de uma entrega para um pedido. Por exemplo, quando um único seller é responsável pela entrega, mas a entrega do pedido é feita em mais de uma remessa de pacote. 

 <div class = "alert alert-info">
Sempre que há uma divisão de pedidos, há divisão de pacotes. Além disso, um seller pode optar por dividir um único pedido em mais de um pacote; portanto, ao final da compra, o número de pacotes será sempre maior ou igual ao número de pedidos gerados.
</div>

Para facilitar a identificação dos casos em que há divisão de pedidos e divisão de entregas, confira alguns exemplos abaixo:

## Divisão de pedidos

É preciso mais de um seller para atender ao pedido.

### Exemplos

* **O cliente seleciona sellers diferentes:** ao realizar uma compra, o cliente seleciona propositalmente itens de diferentes lojas. É possível que ele selecione produtos do marketplace e de um seller, ou de dois ou mais sellers.

    Nesse caso, haverá entregas distintas para um único pedido — _divisão do pedido e da entrega_ — e a plataforma divide o pedido automaticamente para o lojista, pois cada seller é responsável por sua entrega. 

* **Divisão entre Sellers White Label:** o cliente faz as compras, mas a plataforma escolhe quem entregará o pedido. A escolha de qual seller realizará a entrega dos itens será baseada em critérios de prioridade. Nesse caso, o cliente não escolhe os itens de diferentes sellers propositalmente, nem tem a informação de quais sellers farão a entrega do pedido. 

    Quando isso acontece, ao final da compra o lojista vê o pedido dividido — _divisão do pedido e da entrega_. A escolha de seller é feita automaticamente. Caso queira saber como é realizada, consulte o artigo [Algoritmo de seleção de Sellers White Label](https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-white-label-sellers--3MemNQ4pKkWCpMdzI27AHa).

## Divisão de pacotes (entregas)

O pedido é atendido por um único seller, mas é preciso realizar mais de uma entrega para que todos os itens do pedido cheguem ao destinatário.

### Exemplos:

* **Diferentes modalidades de entrega:** ocorre, por exemplo, quando em um mesmo carrinho há um item que será entregue de forma expressa e outro pela modalidade de frete tradicional. Nesse caso, para que a venda seja concretizada e seja possível entregar o máximo de itens do carrinho, a plataforma _divide a entrega._ 

    Essa divisão é feita de forma automática e nativa para as lojas que possuem o Checkout V6, por meio do campo `allowMultipleDeliveries` indicado como `true` na API [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). A configuração padrão vem como "ativa" para que seja possível a realização de compras com modalidades de entrega diferentes em um mesmo carrinho.

<div class="alert alert-danger">
  Não recomendamos operar a loja com o campo <code>allowMultipleDeliveries</code> indicado como <i>false</i>. Nesta configuração, quando existirem itens no carrinho que não possuam nenhum método de entrega do tipo delivery em comum, ou seja, os SLAIDs são distintos, e o carrinho tenha algum pickup-point, não será possível concluir o pedido.
</div>

* **Estoques distintos:** uma única loja oferece todos os itens de um pedido, mas estes estão em estoques diferentes. Então é preciso _dividir os pacotes de entrega,_ mas sem dividir o pedido entre lojas distintas. Isso é feito automaticamente pela plataforma.
