---
title: 'Recusar solicitação de cancelamento do pedido'
id: F2n0h1TeQ5td540Gjyff4
status: PUBLISHED
createdAt: 2023-09-21T02:29:56.663Z
updatedAt: 2024-10-11T21:30:57.446Z
publishedAt: 2024-10-11T21:30:57.446Z
firstPublishedAt: 2023-09-21T16:08:07.567Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: declining-order-cancellation
locale: pt
legacySlug: negacao-de-cancelamento-de-pedido
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Há muitos cenários em que o cancelamento de um pedido é necessário, seja pelo seller, marketplace ou cliente. No entanto, em alguns casos o cancelamento de um pedido acarreta em uma perda financeira significativa para o seller, por isso ele pode recusar uma solicitação de cancelamento do pedido.

O fluxo de pedidos tem uma[ janela para cancelamento](https://help.vtex.com/pt/tutorial/order-flow-and-status--tutorials_196) (carência) na qual o cliente pode cancelar automaticamente um pedido. Com exceção desse período, o seller pode recusar uma solicitação de cancelamento do pedido, independente se ela foi realizada pelo cliente ou pelo marketplace. 

> **Exemplo:** um seller vende produtos personalizáveis em um marketplace.  Porém, depois de comprar um item e uma vez que o período de cancelamento tenha terminado, o cliente decide cancelar o pedido entrando em contato com o marketplace. Se o marketplace cancelar o pedido, o seller terá uma perda financeira, pois um produto personalizável dificilmente poderá ser vendido a outro cliente, por isso o seller decide recusar a solicitação de cancelamento.

Para conferir nosso conteúdo para desenvolvedores, veja [Order canceling improvements](https://developers.vtex.com/docs/guides/order-canceling-improvements).

>ℹ️ Neste artigo, os termos marketplace e seller se referem ao [marketplace VTEX](https://help.vtex.com/pt/tutorial/marketplace-strategies-at-vtex--tutorials_402#ser-um-marketplace-vtex) e ao [seller VTEX](https://help.vtex.com/pt/tutorial/marketplace-strategies-at-vtex--tutorials_402#sendo-seller-vtex). A funcionalidade de recusar solicitação de cancelamento não está disponível para sellers e marketplaces externos.

>⚠️ Não é possível [cancelar pedidos](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido [faturados parcialmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

## Diagrama de cancelamento de pedido recusado
A imagem a seguir mostra o fluxo de recusa da solicitação de cancelamento de um pedido após a janela para cancelamento:

![order cancel diagram](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/recusar-solicitacao-de-cancelamento-do-pedido_1.png)

Segue a descrição de cada etapa:

1. O cliente entra em contato com o marketplace para cancelar um pedido ou o faz através da [Minha Conta](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
2. O marketplace envia uma solicitação de cancelamento ao seller. Nesta etapa, o [status do pedido](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) para o marketplace é `aguardando decisão do seller`. 
3. Se o pedido estiver dentro da janela para cancelamento, ele será cancelado automaticamente, seguindo o comportamento padrão da plataforma. As próximas etapas se aplicam quando a janela para cancelamento termina.
4. O seller recebe a solicitação de cancelamento do pedido e decide se vai aceitá-la ou não. As próximas etapas se aplicam quando o seller decide não cancelar o pedido.

  >❗ Para recusar uma solicitação de cancelamento do pedido, o status do pedido para o marketplace e para o seller deve ser o seguinte:
>
> ***Status do marketplace:** Aguardando decisão do seller.
>
> ***Status do seller:** Cancelamento solicitado.
> 

5. O seller recusa o cancelamento do pedido e notifica o marketplace.
6. Depois que o marketplace recebe a solicitação recusada, o pedido progride no fluxo de pedidos.

## Recusar uma solicitação de cancelamento do pedido

A solicitação de cancelamento de um pedido pode ser feita pelo marketplace ou pelo cliente através da [Minha conta](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh). Quando feita diretamente pela **Minha conta,** o cliente recebe uma mensagem de confirmação de que a solicitação foi enviada com sucesso. 

Depois disso, o pedido permanecerá com o [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) de `cancelamento solicitado` para o marketplace e `aguardando decisão do seller` para o seller até que ele aceite ou não a solicitação. 

>⚠️ Se, dentro de 30 dias, o seller não fizer nada em relação à solicitação de cancelamento do pedido, o pedido será cancelado automaticamente pela plataforma da VTEX.

Para recusar uma solicitação de cancelamento do pedido pelo Admin VTEX, siga os passos a seguir:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos** ou digite [Todos os pedidos](https://help.vtex.com/en/tutorial/all-orders--2QTduKHAJMFIZ3BAsi6Pi) na barra de busca no topo da página.
2. Selecione o pedido desejado para acessar a página [Detalhes do pedido](https://help.vtex.com/en/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl).
3. Na parte superior da página, clique em Recusar. 

  ![deny cancel request](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/recusar-solicitacao-de-cancelamento-do-pedido_2.png)

4. Preencha o pop-up **Solicitação de cancelamento** com o motivo da recusa da solicitação de cancelamento do pedido.

  ![deny_cancel_request_reason_PT_v2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/recusar-solicitacao-de-cancelamento-do-pedido_3.png)

  >⚠️ Lembre-se de que a mensagem contida nesse campo poderá ser exibida ao cliente pela [Minha conta](https://help.vtex.com/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh) ou enviada pelo marketplace.

5. Clique em `Recusar solicitação`.

Em seguida, a solicitação de cancelamento do pedido é recusada e o pedido progride no fluxo para os seguintes status:

- **Para o markatplace:** `Pagamento aprovado`.
- **Para o seller:** `Pronto para manuseio` ou `Preparando entrega`, dependendo do status anterior à solicitação de cancelamento.
