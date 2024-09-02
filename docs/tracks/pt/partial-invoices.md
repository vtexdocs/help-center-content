---
title: 'Faturas parciais'
id: q9GPspTb9cHlMeAZfdEUe
status: PUBLISHED
createdAt: 2022-06-20T20:13:46.342Z
updatedAt: 2024-04-01T17:51:08.329Z
publishedAt: 2024-04-01T17:51:08.329Z
firstPublishedAt: 2022-06-20T20:21:34.641Z
contentType: trackArticle
productTeam: Post-purchase
slug: faturas-parciais
locale: pt
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugPT: pedidos
---

Ao faturar um pedido, nem sempre o valor registrado na nota fiscal corresponde ao valor inicial do pedido. Isso ocorre nos seguintes cenários: 

* Quando um pedido sofre alteração em seu valor, por descontos ou acréscimos.  
* Quando há [alteração de itens de um pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).  
* Quando há a devolução de itens de um pedido.  
* Quando é necessário faturar itens individualmente.

Em todos estes casos é necessário inserir uma nota fiscal parcial, ou mais de uma nota fiscal, para atingir o valor total do pedido.  

## Comportamentos de faturas parciais 

As faturas parciais causam as seguintes ações no OMS, e demais sistemas da VTEX:

* As faturas parciais inseridas nos pedidos também disparam liquidações parciais na transação. O valor total do pedido será atualizado após a inserção da nota fiscal, e corresponde ao que é liquidado pelo gateway de pagamentos da VTEX.   
* É feito o reembolso automático ao consumidor, caso haja estorno de valores.  
* Se eventualmente o lojista identificar que um item precisa ser removido juntamente com seu valor, a alteração do pedido com o valor descontado poderá ser feita, dado que as notas fiscais anteriores só liquidam seus valores correspondentes e mantiveram o resto do valor liquidado em aberto.  
* Como a fatura parcial só liquida o valor correspondente à fatura, é possível solicitar alterações de valores no pedido. Com a fatura parcial, a transação ainda fica em aberto.
* Não é possível [cancelar pedidos](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido faturados parcialmente. Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
* Valores maiores ou iguais ao total do pedido seguem o fluxo para faturado. Qualquer nota inserida além desses valores entrará como Nota Fiscal Avulsa que não receberá atualização de tracking.  

>ℹ️ A funcionalidade faturas parciais está disponível para toda a base de clientes VTEX, mas a liquidação parcial no gateway está em fase Beta. Além disso, para que as faturas parciais inseridas nos pedidos disparem liquidações parciais na transação, é necessário usar um conector que utiliza o [Payment Provider Protocol](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Conectores legados não possuem suporte à funcionalidade.

## Enviar fatura parcial

Para enviar uma fatura parcial, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Busque o pedido pela barra de busca ou utilizando os [filtros](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192).  
3. Clique no pedido para acessar a página de [Detalhes do pedido](https://help.vtex.com/pt/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl). 
4. Clique no botão `Faturar`.  
5. Clique em `Enviar nota fiscal avulsa`.  
6. No campo **Valor**, selecione a opção `Valor`.
7. Digite o valor desejado.
8. Clique em `Salvar nota fiscal`.

> Após o faturamento, faça uma [alteração no pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

É possível acompanhar todos os eventos da transação, após as mudanças ocorridas ao pedido, ao clicar em [Ver detalhes da transação](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy).

>ℹ️ Também é possível realizar as mesmas ações por meio da nossa API de Orders. Para isso, confira os endpoints: [Register Change on Order](https://developers.vtex.com/vtex-rest-api/reference/registerchange), [Invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification), [Retrieve Payment transaction](https://developers.vtex.com/vtex-rest-api/reference/getpaymenttransaction), e [Update order's partial invoice (send tracking number)](https://developers.vtex.com/vtex-rest-api/reference/updatepartialinvoicesendtrackingnumber).

## Saiba mais

- [Página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl)   
- [Alteração de itens de um pedido finalizado](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190)  
- [Alterar valor total do pedido](https://help.vtex.com/pt/tutorial/alterar-valor-final-do-pedido--2asq4BmxvSD8Tw9xpfZuMo)  
- [Faturar um pedido](https://help.vtex.com/pt/tutorial/how-to-manually-invoice-an-order--7p1h852V5t54KyscpgxE2v)
