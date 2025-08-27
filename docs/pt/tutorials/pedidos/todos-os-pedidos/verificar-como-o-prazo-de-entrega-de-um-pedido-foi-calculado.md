---
title: 'Verificar como o prazo de entrega de um pedido foi calculado'
id: 6Qj4Y9TIYMOKGk2MOwaSEq
status: PUBLISHED
createdAt: 2018-01-12T13:16:12.591Z
updatedAt: 2023-03-29T20:46:38.254Z
publishedAt: 2023-03-29T20:46:38.254Z
firstPublishedAt: 2018-01-12T14:11:38.576Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: checking-how-an-order-delivery-deadline-was-calculated
legacySlug: verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado
locale: pt
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Você pode verificar como o prazo de entrega de um pedido foi calculado por meio da __Simulação de envio__, no módulo __Envio__.

### Exemplo

Digamos que você deseja saber quais foram os critérios que a plataforma usou para calcular o tempo de entrega do pedido de ID `930221070506-01`, realizado em 06 de Maio.

Em primeiro lugar, vamos entrar no módulo __Todos os pedidos__ para ver o pedido.

![2019-06-05 13 51 56-Todos os pedidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado_1.png) 

>No canto superior direito, você vê a __data em que o pedido foi realizado__ (6 MAI 2019).
>E na seção de Itens a Faturar em baixo, você vê o __prazo de entrega do pedido__ (22 MAI 2019).

Agora vamos entrar no módulo __Envio__ e simular o frete desse pedido.

Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Simulação de Envio**, ou digite *Simulação de Envio* na barra de busca no topo da página.  
2. Insira o nome ou o ID de cada SKU que estava no carrinho do pedido que você deseja investigar, incluindo a quantidade de cada um deles.![2019-06-05 14 07 20-Simulador de envio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado_2.png)
3. Insira o CEP do pedido.
4. Clique em __Simular frete__.

No exemplo abaixo, note que 4 transportadoras foram consideradas, e 12 foram desconsideradas.

![2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado_3.png)

Consultando mais uma vez a tela de detalhes do pedido, vemos que o tipo de entrega escolhido pelo cliente para esse pedido foi o __Expressa__, e que a transportadora escolhida pela plataforma para realizar esse pedido foi a __Expressa & CO__.

![3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado_4.png)

Portanto, voltando à simulação de frete, no módulo Envio, concluímos que a primeira opção foi a escolhida nesse pedido - e que, portanto, o prazo de entrega total do pedido foi de 12 dias.

![4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado_5.png)

Agora basta clicar em __detalhar__ para ver os tempos de custo que foram usados no cálculo desse prazo de entrega.

![5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado_6.png)

Cada um dos três tempos de custo corresponde ao que foi definido para as três etapas da rota de logística: estoque, doca e transportadora.

### Artigos relacionados

- [Como é calculado o prazo de entrega do pedido](/pt/tutorial/como-e-calculado-o-prazo-de-entrega-do-pedido)
