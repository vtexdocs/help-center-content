---
title: 'Cancelar e estornar um pedido no VTEX Sales App'
id: UAahHrTwypk1HhoyyMd2W
status: PUBLISHED
createdAt: 2021-11-09T14:00:04.800Z
updatedAt: 2023-05-31T16:06:08.789Z
publishedAt: 2023-05-31T16:06:08.789Z
firstPublishedAt: 2021-11-09T14:09:59.855Z
contentType: trackArticle
productTeam: Shopping
slugEN: cancel-and-refund-an-order-on-instore
locale: pt
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: instore-usando-o-app
order: 18
---


Quando um cliente solicitar o cancelamento de um pedido realizado pelo VTEX Sales App, o vendedor precisa seguir os procedimentos descritos neste artigo.

## Cenário 1: o cliente não está mais na loja

Se o pedido tiver sido pago por **Venda direta - Débito ou Crédito** e o cliente não estiver mais presente na loja física — ou seja, não puder passar o cartão no terminal — é necessário  realizar o cancelamento em **Pedidos** > **Todos os pedidos**, no Admin VTEX. Esse procedimento só pode ser realizado por um usuário com o [perfil de acesso OMS - Full access](/pt/tutorial/como-criar-perfil-de-acesso/#oms-full-access), seguindo as orientações do tutorial [Cancelar pedido](/pt/tutorial/como-cancelar-pedido--tutorials_186).

Neste caso, o pedido não será cancelado de imediato. A variação de tempo é determinada pelo adquirente e pode levar de 30 minutos a 24 horas.

## Cenário 2: o cliente está na loja 

Já nos casos em que o cliente está na loja quando solicita o cancelamento, é necessário seguir os passos abaixo.

1. No menu do VTEX Sales App, clique em <span id="svg-container"><svg alt="sprite-svg" xmlns="http://www.w3.org/2000/svg" style="width: 0px; height: 0px;"><symbol id="nc-bag-22" viewBox="0 0 16 16"><path fill="currentColor" d="M14 5.8c-.1-.5-.5-.8-1-.8h-1V4c0-2.2-1.8-4-4-4S4 1.8 4 4v1H3c-.5 0-.9.3-1 .8l-2 9c-.1.6.4 1.2 1 1.2h14c.6 0 1.1-.6 1-1.2l-2-9zM6 4c0-1.1.9-2 2-2s2 .9 2 2v1H6V4z"></path></symbol></svg><svg width="16" height="16" style="fill: rgb(125, 126, 128); color: rgb(125, 126, 128); vertical-align: middle;"><use xlink:href="#nc-bag-22"></use></svg></span> `Últimas vendas`.
2. Na lista de pedidos, clique na linha do pedido a ser cancelado.
3. Clique em `Cancelar venda total` para cancelar o pedido completo ou em `Cancelar venda deste pacote` para cancelar apenas os itens de um pacote específico.
4. Uma vez no modal de confirmação, clique em `Cancelar venda total` ou em `Cancelar venda de pacote` para prosseguir, dependendo da opção selecionada no passo anterior.
5. Depois, siga as instruções específicas para estornar o pagamento, de acordo com o meio de pagamento escolhido:

    - [Dinheiro](#dinheiro)
    - [Venda direta - Débito ou Crédito](#venda-direta-debito-ou-credito)

### Dinheiro

Caso o pedido cancelado tenha sido pago em dinheiro, o vendedor precisa estornar o pedido manualmente, devolvendo o dinheiro ao cliente em mãos.

Após os passos descritos [anteriormente](#cenario-2-o-cliente-esta-na-loja), o vendedor verá a tela abaixo, que informa que o pagamento **Dinheiro** já foi estornado.

![estornar-pagamentos-instore-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/cancelar-e-estornar-um-pedido-no-instore_1.png)

Para retornar para a página de detalhes do pedido cancelado, é preciso clicar na seta <i class="fas fa-arrow-left"></i> na barra superior do VTEX Sales App.

### Venda direta - Débito ou Crédito

No caso de pedidos pagos por **Venda direta - Débito ou Crédito** em que o cliente solicita o cancelamento enquanto está na loja física, o vendedor precisa estornar o pagamento manualmente pelo aplicativo do VTEX Sales App.

Após os passos descritos no [Cenário 2](#cenario-2-o-cliente-esta-na-loja) para cancelar o pedido, o vendedor verá a listagem de pagamentos realizados referentes ao pedido.

Para estornar o pagamento por **Venda direta - Débito ou Crédito**:

1. Clique em `Estornar` para ser redirecionado para o app do VTEX Payment.
2. No app do VTEX Payment, aguarde a exibição da mensagem: _Insira ou passe o cartão_.
3. Em seguida, insira o cartão utilizado na compra no mesmo terminal em que o pagamento foi realizado.
4. Aguarde o terminal processar o estorno. Quando o terminal informar que o estorno foi realizado com sucesso e que o cartão já pode ser removido, retire o cartão da máquina.
5. O app do VTEX Payment vai reconduzir o vendedor ao VTEX Sales App, onde vai aparecer uma tela de confirmação.
6. Clique em `Selecionar pagamentos` para retornar à listagem de pagamentos relacionados ao pedido.
7. Repita o mesmo procedimento caso existam outros pagamentos relacionados ao pedido. Caso contrário, para retornar para a página de detalhes do pedido cancelado, é preciso clicar na seta <i class="fas fa-arrow-left"></i> na barra superior do VTEX Sales App.
