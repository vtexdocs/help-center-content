---
title: Por que o pedido foi fechado pelo marketplace sem estoque?
id: frequentlyAskedQuestions_710
status: DRAFT
createdAt: 2017-04-27T22:28:42.230Z
updatedAt: 2021-06-28T20:41:42.563Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:34.065Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-o-pedido-foi-fechado-sem-estoque
legacySlug: por-que-o-pedido-foi-fechado-sem-estoque
---

O modulo Integrações informa o status dos pedidos fechados por marketplaces. Algumas vezes, o motivo para um pedido não ter sido integrado é que o produto está sem estoque. Neste caso, esta é a mensagem exibida:

__Não há SLA disponível para um ou mais itens do pedido. Possíveis causas:Falta de estoque.Produto(s) não está(ão) na coleção.Produto(s) inativo(s).O CEP de entrega não é atendido.__

Este artigo tem como objetivo esclarecer o motivo de esse cenário ocorrer. Existem duas possibilidades:

## Estoque raso

Estoque raso é quando existe uma quantidade de itens disponíveis menor que a quantidade de canais em que esses itens podem ser vendidos. Ou seja, é quando a quantidade de itens é pequena e os canais de venda concorrem por eles. Geralmente, acontece quando existe somente um item em estoque, mas em casos de promoção, por exemplo, pode ocorrer com mais de um item.

Isto é, esse cenário se dá quando mais de um canal (loja e marketplace, por exemplo) vendem em um curto espaço de tempo o mesmo item do SKU.

Exemplo:

1. O marketplace consulta o estoque na VTEX e ele está positivo: __1 unidade__.
2. Enquanto isso, a loja principal fecha uma compra com este mesmo item.
3. O marketplace termina o processo de compra e tenta a integração do pedido.
4. Neste momento, o item já foi vendido no passo 2, logo, o pedido não poderá ser integrado sem a ação no Integrações.

## Interrupção da consulta ao estoque

Isso ocorre quando a consulta ao frete, seja ao valor ou ao estoque, sofre alguma interrupção. Ou seja, quando a consulta ao estoque na VTEX não pôde ser realizado pelo marketplace. Normalmente, isso ocorre quando o marketplace faz uma consulta http e não tem a resposta no tempo previsto, assumindo, então, seu próprio valor para estoque. Esse cenário pode ocorrer para o Walmart, que faz a consulta em tempo real na VTEX.

Algumas integrações, como o Mercado Livre, não consomem informação de Estoque em tempo real, ou seja, o estoque é aquele conforme última atualização feita pelo Integrações.

## Como resolver

Em ambos os casos, o pedido poderá ser integrado efetuando-se a devida correção de estoque na Logística e em seguida [reprocessando o pedido no Integrações](http://help.vtex.com/pt/tutorial/verificando-integracao-no-bridge).
