---
title: 'Cancelar pedido'
id: 4ts2ItvjYo8wm5gg76miS3
status: PUBLISHED
createdAt: 2019-11-18T11:50:32.691Z
updatedAt: 2024-04-01T18:04:36.603Z
publishedAt: 2024-04-01T18:04:36.603Z
firstPublishedAt: 2019-11-18T12:20:50.741Z
contentType: trackArticle
productTeam: Post-purchase
slug: cancelar-pedido
locale: pt
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugPT: pedidos
---

É possível cancelar um pedido na VTEX de três formas distintas:  
- Pelo módulo **Pedidos** no Admin VTEX.
- Por API.
- Por solicitação do próprio cliente.

>⚠️ Uma vez que o pedido seja cancelado, não é possível alterar o seu status. Pedidos com status **Faturado** não podem ser cancelados.

<div class = "alert alert-info">
Não é possível <a href="https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186">cancelar pedidos</a> que já tenham sido <a href="https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">faturados parcialmente</a>. Caso o cliente deseje substituir ou remover itens do pedido, é possível <a href="https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190">alterar o pedido</a>.
</div>

## Cancelamento pelo módulo Pedidos

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique no pedido desejado.
3. No topo da página, clique em `Cancelar pedido`.
4. Clique em `Confirmar`.

- Quando o pedido está nos status **Pronto para Manuseio** ou **Preparando Entrega**, é preciso que o cancelamento seja feito duas vezes. Ao clicar pela primeira vez em "Cancelar", o status é alterado para `Cancelamento Solicitado`.   
- Quando o pedido já se encontra no status `Cancelamento solicitado`, basta clicar novamente em **Cancelar** para que o pedido seja alterado para `Cancelado`.   
- Para continuar com esse pedido, basta inserir a nota fiscal.   

## Cancelamento por API Rest

É possível realizar o cancelamento por meio do seu ERP, utilizando a API [Cancel order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel).

Confira nosso [guia de integração de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing) para o passo a passo completo.

## Cancelamento solicitado pelo cliente

O cliente pode solicitar o cancelamento do pedido por meio da tela de **Meus pedidos**.  

Se o cliente solicitar o cancelamento dentro do período de carência do pedido, que é [configurável pela loja](https://help.vtex.com/pt/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido?locale=pt "Configurar período de carência"), o lojista não precisa aprovar o cancelamento. Considera-se que o fluxo de picking, packing e entrega ainda não se iniciou, portanto o cancelamento não traria ônus à loja.

Após o período de carência, entende-se que a loja já está agindo sobre o pedido. Nesse caso, o lojista deverá confirmar a solicitação de cancelamento.   

Confira nosso artigo sobre o fluxo completo de [cancelamento solicitado pelo cliente](https://help.vtex.com/pt/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente).
