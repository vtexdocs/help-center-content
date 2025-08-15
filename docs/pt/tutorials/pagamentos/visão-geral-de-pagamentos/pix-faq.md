---
title: 'Pix: FAQ'
id: 3lx7zCU2lQroTEBCYKYbo3
status: PUBLISHED
createdAt: 2020-11-18T20:17:08.672Z
updatedAt: 2023-03-29T13:42:54.111Z
publishedAt: 2023-03-29T13:42:54.111Z
firstPublishedAt: 2020-11-18T21:03:41.790Z
contentType: tutorial
productTeam: Financial
author: 6MG4UmqXWpy4nggXB7KIai
slugEN: pix-faq
legacySlug: pix-faq
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Desde o dia 16 de novembro de 2020, o Pix - novo método de pagamento instantâneo do Banco Central (Bacen) - está funcionando com operação completa em todo território brasileiro.

Desse modo, clientes VTEX têm a opção de configurar o Pix como meio de pagamento e oferecê-lo ao seus clientes como um meio de pagamento no Checkout, caso seja da escolha do cliente.

Neste artigo, reunimos algumas dúvidas sobre o processo de escolha de parceiro responsável pelo processamento dos pagamento do seu ecommerce, como integrar-se com a VTEX via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol) e sobre a configurar do meio de pagamento em si no nosso Admin.

Confira as principais dúvidas a seguir.

### Eu sou obrigado a ter um parceiro de pagamentos pra aceitar o Pix?

Sim. Para que os pagamentos via Pix sejam processados, você precisa necessariamente ter um parceiro de pagamentos: banco, adquirente ou gateway. 

### O meu banco pode aparecer na lista de afiliações, provedores de pagamento, da VTEX? 

Sim. Ele só precisa, primeiro, integrar-se à VTEX para processar pagamentos realizados via Pix.

Caso o seu banco não apareça nas opções de "afiliação", na tela de integração do Pix, entre em contato diretamente com a instituição para que os responsáveis realizem a integração com a VTEX via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol) - nosso protocolo de pagamentos.

### Quais são os provedores de pagamento já disponíveis?

Durante o procedimento de [configuração do PIX](https://help.vtex.com/pt/tutorial/setting-up-pix-as-a-payment-method--5sbNavMSJY4jyLmLKRHiOf#), na opção __Processar com a afiliação__, você poderá verificar os provedores disponíveis para processar pagamentos via PIX na VTEX.

Caso o parceiro responsável pelo processamento dos pagamentos do seu ecommerce não esteja nessa lista, você pode contatá-lo diretamente e solicitar a integração com a VTEX via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol).

Você pode conferir a documentação para integração de parceiros específica para o caso do Pix [neste link](https://developers.vtex.com/docs/guides/payments-integration-pix-instant-payments-in-brazil).

### Por que o meu parceiro de pagamentos - adquirente, banco ou gateway - não está aparecendo no campo de "afiliação" no fluxo do Pix?

Isso acontece porque o seu parceiro ainda não está integrado com a VTEX para processar pagamentos via Pix.

### Como posso configurar o Pix em meu e-commerce?
Uma vez que o cliente tenha contactado seu parceiro de pagamentos e realizado corretamente a integração via Payment Provider Protocol, é possível configurar o Pix como meio de pagamento na sua loja via Admin. Para configurá-lo corretamente, [acesse o tutorial](https://help.vtex.com/pt/tutorial/configurar-pix-como-meio-de-pagamento).

### Já posso aceitar pagamentos com Pix usando o Mercado Pago?

Sim! Para aceitar Pix no Mercado Pago Pro o cliente precisa apenas habilitar o checkout Pro e ter uma chave pix criada com o Mercado Pago.

### Há algum custo adicional para aceitar o Pix em meu ecommerce?

Não. A VTEX não cobra nada a mais para pagamentos via Pix.

O custo de processamento desse meio de pagamento deve ser negociado com o provedor de pagamentos escolhido - gateway, adquirente ou banco).

### Como é a tela de pagamento do Pix que vai aparecer para o meu cliente?

A opção de pagar via Pix aparecerá na lista, junto com as outras opções de pagamento. 

Quando o usuário clicar no Pix, um QR Code que comporta as informações da compra será gerado. A partir daí, o usuário tem dez minutos para efetuar a transação com a sua instituição financeira de preferência.

![Checkout_Pix](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/vis%C3%A3o-geral-de-pagamentos/pix-faq_1.png)

![QRCode_Pix](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/vis%C3%A3o-geral-de-pagamentos/pix-faq_2.png)

### É possível dividir um pagamento entre Pix e outra forma de pagamento?

Atualmente, na VTEX, é possível dividir um pagamento somente entre Pix e [Giftcard](https://help.vtex.com/pt/tutorial/gift-card--tutorials_995).

### Como a plataforma irá subir o nosso QR Code para o consumidor? Como funciona essa integração?

O parceiro de pagamentos configurado para processar o Pix na sua loja deverá estar integrado com a VTEX. 

Essa integração prevê que, no momento de finalização da compra, esse parceiro envie o QR Code em uma chamada via API para o sistema interno da VTEX. Em seguida, a VTEX exibe esse QR Code no Checkout para que o pedido possa ser pago pelo consumidor.

### Como será identificada a forma de pagamento PIX dentro do JSON que compõe a API Get Order?

O campo que identifica o meio de Pagamento Pix no JSON da API "Get order" é o "paymentSystemName" = "Pix".

### Qual é a nomenclatura do Pix no campo "Group"?

A nomenclatura do Pix no campo "Group" é "instantPayment".
