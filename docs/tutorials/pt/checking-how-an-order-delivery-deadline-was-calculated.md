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
slug: verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado
locale: pt
legacySlug: verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Você pode verificar como o prazo de entrega de um pedido foi calculado por meio da __Simulação de envio__, no módulo __Envio__.

### Exemplo

Digamos que você deseja saber quais foram os critérios que a plataforma usou para calcular o tempo de entrega do pedido de ID `930221070506-01`, realizado em 06 de Maio.

Em primeiro lugar, vamos entrar no módulo __Todos os pedidos__ para ver o pedido.

![2019-06-05 13 51 56-Todos os pedidos](https://images.ctfassets.net/alneenqid6w5/1v711UNCK6lLyGvqXkDkRs/046e6d1af8cb038a15bf1674ea86081c/2019-06-05_13_51_56-Todos_os_pedidos.png) 

>No canto superior direito, você vê a __data em que o pedido foi realizado__ (6 MAI 2019).
>E na seção de Itens a Faturar em baixo, você vê o __prazo de entrega do pedido__ (22 MAI 2019).

Agora vamos entrar no módulo __Envio__ e simular o frete desse pedido.

Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Simulação de Envio**, ou digite *Simulação de Envio* na barra de busca no topo da página.  
2. Insira o nome ou o ID de cada SKU que estava no carrinho do pedido que você deseja investigar, incluindo a quantidade de cada um deles.![2019-06-05 14 07 20-Simulador de envio](https://images.ctfassets.net/alneenqid6w5/2AAUbA9NuAlLWW6tW2eFo8/8499c3f8f6185c2f1f8568fbada87d4e/2019-06-05_14_07_20-Simulador_de_envio.png)
3. Insira o CEP do pedido.
4. Clique em __Simular frete__.

No exemplo abaixo, note que 4 transportadoras foram consideradas, e 12 foram desconsideradas.

![2](https://images.ctfassets.net/alneenqid6w5/GFpG6fdmrpIubx6AClQIx/34d23cc1b849becdf34d0c10ed4d0c54/2.png)

Consultando mais uma vez a tela de detalhes do pedido, vemos que o tipo de entrega escolhido pelo cliente para esse pedido foi o __Expressa__, e que a transportadora escolhida pela plataforma para realizar esse pedido foi a __Expressa & CO__.

![3](https://images.ctfassets.net/alneenqid6w5/5cfMvMBQJ2PH6MSXEPWC8E/42e5889646c37d4ee1595866e3a797f3/3.png)

Portanto, voltando à simulação de frete, no módulo Envio, concluímos que a primeira opção foi a escolhida nesse pedido - e que, portanto, o prazo de entrega total do pedido foi de 12 dias.

![4](https://images.ctfassets.net/alneenqid6w5/51uwhtB3nSKyMtXY2zVbic/a7d28ccb49dd18b1bb60d6e8d9bff73c/4.png)

Agora basta clicar em __detalhar__ para ver os tempos de custo que foram usados no cálculo desse prazo de entrega.

![5](https://images.ctfassets.net/alneenqid6w5/3USKpGaWgl6qHuYqE7iqrY/6158faed327f8bafc30fee04e464f16c/5.png)

Cada um dos três tempos de custo corresponde ao que foi definido para as três etapas da rota de logística: estoque, doca e transportadora.

### Artigos relacionados

- [Como é calculado o prazo de entrega do pedido](/pt/tutorial/como-e-calculado-o-prazo-de-entrega-do-pedido)
