---
title: 'Liquidação de faturas parciais no OMS'
id: 57DxOPAIGassIOYDNPQftv
status: PUBLISHED
createdAt: 2022-06-27T20:36:59.586Z
updatedAt: 2022-08-26T18:00:02.539Z
publishedAt: 2022-08-26T18:00:02.539Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2022-06-27-partial-invoice-settlements-in-oms
locale: pt
legacySlug: liquidacao-de-faturas-parciais-no-oms
announcementImageID: 'undefined'
announcementSynopsisPT: 'Agora, faturas parciais inseridas nos pedidos disparam liquidações parciais na transação.'
---

Ao gerenciar pedidos no OMS, o sistema gerenciador de pedidos da VTEX, inserir a nota fiscal no pedido é um passo obrigatório para que seu status passe para Faturado - sinal de que o pedido foi finalizado com sucesso. É possível inserir uma [nota fiscal completa](/pt/docs/tracks/faturar-um-pedido), ou uma [fatura parcial](/pt/docs/tracks/faturas-parciais), em cenários onde há alterações nos itens ou valor do pedido. 

Desenvolvemos uma melhoria no OMS que fará com que as faturas parciais inseridas nos pedidos também disparem liquidações parciais na transação. O valor total do pedido será atualizado após a inserção da nota fiscal, e corresponde ao que é captado pelo gateway de pagamentos da VTEX. 

> ℹ️ A funcionalidade faturas parciais está disponível para toda a base de clientes VTEX, mas a liquidação parcial no gateway está em fase Beta. Além disso, para que as faturas parciais inseridas nos pedidos disparem liquidações parciais na transação, é necessário usar um conector que utiliza o [Payment Provider Protocol](/pt/docs/tutorials/payment-provider-protocol). Conectores legados não possuem suporte à funcionalidade.

## O que mudou?

Anteriormente, a inserção de uma fatura parcial já disparava uma liquidação total do pedido. Isso significa que mesmo faturando o pedido parcialmente, o gateway da VTEX registrava a liquidação do valor total do pedido antes da alteração. Isso gerava uma inconsistência entre o que a loja recebia de fato de receita, e o que o sistema registrava.

Por esse comportamento, o operador precisava antecipar todas as alterações a serem feitas em um pedido antes de inserir quaisquer notas - mesmo que parciais - pois esse processo já disparava uma liquidação total no valor da transação original do pedido. 

Agora, o gateway liquida o valor correspondente à fatura inserida. Essa mudança também trouxe alguns comportamentos novos ao gerenciar pedidos:

* É possível solicitar alterações de valores no pedido, já que ao inserir uma nota parcial, a transação ainda fica em aberto, esperando o resto do valor ser liquidado ou cancelado - como é o caso de uma alteração do pedido com desconto de valor.  
* É feito o reembolso automático ao consumidor, caso haja estorno de valores. Não é mais preciso enviar a diferença de valor por fora da VTEX.  
* É possível ir faturando os itens conforme a sua disponibilidade. Se eventualmente o operador identificar que um item precisa ser removido juntamente com seu valor, a alteração do pedido, com o valor descontado, poderá ser feita - dado que as notas fiscais anteriores só capturaram seus valores correspondentes e mantiveram o resto do valor liquidado em aberto.  

Saiba mais detalhes em [Faturas parciais](/pt/docs/tracks/faturas-parciais).

## Por que fizemos essa mudança?

Alteramos a arquitetura do OMS para que se adeque à operação dos nossos clientes. Entendemos que este é o comportamento esperado do OMS, ao liquidar o valor atualizado do pedido, após seu faturamento.   

Com isso, desbloqueamos novas ações e comportamentos no dia a dia de operadores de ecommerce que faturam pedidos.  

## O que precisa ser feito?

Não é preciso realizar nenhuma ação ou configuração, o OMS já foi atualizado automaticamente para operar da nova forma. Saiba mais em [Faturas parciais](/pt/docs/tracks/faturas-parciais).

Para reproduzir o comportamento:

1. Insira uma [fatura parcial para o pedido](/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe#enviar-fatura-parcial).

    > Se você utiliza a nova [Página de detalhes do pedido (Beta)](/pt/docs/tutorials/pagina-de-detalhes-do-pedido) , acesse [Faturar um pedido manualmente (Beta)](/pt/docs/tutorials/faturar-um-pedido-manualmente).

2. Faça uma [alteração no pedido](/pt/docs/tutorials/alteracao-de-itens-de-um-pedido-finalizado). 

    > Se você utiliza a nova interface de Detalhes do pedido (Beta), acesse [Como alterar itens do pedido (Beta)](/pt/tutorial/how-to-change-order-items-beta--7jekq618QxgbsOxKkXBjE8).

3. Acompanhe todos os eventos da transação, após as mudanças ocorridas ao pedido, ao clicar em [Ver detalhes da transação](/pt/docs/tracks/ver-detalhes-da-transacao). 

Também é possível realizar as mesmas ações por meio da nossa API de Orders. Para isso, confira os endpoints:

* [Register Change on Order](https://developers.vtex.com/vtex-rest-api/reference/registerchange)
* [Invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification)
* [Retrieve Payment transaction](https://developers.vtex.com/vtex-rest-api/reference/getpaymenttransaction)

