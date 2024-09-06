---
title: 'Não pode pagar com MercadoPago Redirect e Vale no carrinho com produto do Seller'
id: 2WwCIW6chacwYakYUemOyQ
status: PUBLISHED
createdAt: 2017-11-15T14:46:42.109Z
updatedAt: 2022-12-22T15:06:24.179Z
publishedAt: 2022-12-22T15:06:24.179Z
firstPublishedAt: 2017-11-16T17:56:38.376Z
contentType: knownIssue
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Payments
slug: nao-pode-pagar-com-mercadopago-redirect-e-vale-no-carrinho-com-produto
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao comprar em um marketplace e tendo no carrinho um produto de um seller, quando um cliente tenta pagar com MercadoPago3P + Vale compra, no momento em que deveria ser encaminhado para MercadoPago, o checkout lança um aviso informando ao cliente que não pode continuar com a compra.


## Simulação

1. Adicione o vale compra como forma de pagamento no checkout, mas faça um pagamento parcial.
2. Selecione MercadoPago3P para o pagamento da parte restante do pedido.
3. Clique em Comprar Agora e se mostrará o aviso que faz impossível continuar com o pagamento.


## Workaround

É possível realizar uma validação por JS clicando no botão Finalizar Compra. Nesse momento, é verificado se tem um vale compra ativado e, ao mesmo tempo, se foi selecionado o MercadoPago Redirect. Nesse caso, o usuário deve ser informado da restrição e das opções alternativas.


