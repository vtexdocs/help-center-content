---
title: 'Pix: FAQ'
createdAt: 2020-11-18T20:17:08.672Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: pix-faq
locale: pt
hidden: false
---

O Pix é o meio de pagamento instantâneo do [Banco Central do Brasil](https://www.bcb.gov.br/) (Bacen). Lojas VTEX podem configurar o Pix como meio de pagamento e oferecê-lo aos clientes no checkout.

Este artigo reúne as principais dúvidas sobre a escolha do parceiro que processa os pagamentos do seu ecommerce, a integração desse parceiro com a VTEX via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol), a configuração do Pix no Admin VTEX e a experiência de pagamento dos seus clientes.

## Parceiros e integração

### Preciso de um parceiro de pagamentos para aceitar o Pix?

Sim. Para que os pagamentos via Pix sejam processados, você precisa ter um parceiro de pagamentos, que pode ser um banco, um adquirente ou um gateway.

### Quais são os provedores de pagamento já disponíveis?

Os provedores que já processam pagamentos via Pix na VTEX aparecem na opção __Processar com o provedor__, durante a [configuração do Pix](/pt/docs/tutorials/configurar-pix-como-meio-de-pagamento). Se o seu banco, adquirente ou gateway não aparece nessa lista, ele ainda não está integrado à VTEX para esse meio de pagamento. Nesse caso, entre em contato com o parceiro e solicite que ele faça a integração via [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol), seguindo a [documentação de integração específica para o Pix](https://developers.vtex.com/docs/guides/payments-integration-pix-instant-payments-in-brazil).

### Como a plataforma exibe o QR Code da minha loja para o cliente? Como funciona essa integração?

No momento da finalização da compra, o parceiro de pagamentos integrado à VTEX envia o QR Code ao sistema interno da VTEX por meio de uma chamada de API, e a VTEX exibe esse QR Code no checkout para que o cliente pague o pedido.

### Posso usar o Pix em um marketplace com split de pagamento?

Não. O Pix não é suportado em marketplaces que realizam split da transação. Para entender os modelos de split disponíveis e os meios de pagamento compatíveis com cada um, consulte [Split de pagamento](/pt/docs/tutorials/split-de-pagamento).

### Pagamentos via Pix são afetados pelo Contingency Mode?

Não. O [Contingency Mode](/pt/docs/tutorials/mode-off-faq) não bloqueia transações via Pix. Ainda assim, outros problemas podem interromper o processamento do pagamento e, nesses casos, novas tentativas geralmente ocorrem a cada 5 minutos.

## Configuração

### Como posso configurar o Pix em meu ecommerce?

Depois que o seu parceiro de pagamentos concluir a integração via Payment Provider Protocol, você pode configurar o Pix como meio de pagamento no Admin VTEX seguindo o tutorial [Configurar Pix como meio de pagamento](/pt/docs/tutorials/configurar-pix-como-meio-de-pagamento).

### Posso aceitar pagamentos com Pix usando o Mercado Pago?

Sim. Para aceitar Pix com o Mercado Pago Pro, você precisa [configurar o Mercado Pago Pro como meio de pagamento](/pt/docs/tutorials/como-configurar-mercado-pago-pro-como-meio-de-pagamento) e cadastrar uma chave Pix no Mercado Pago.

### Há algum custo adicional para aceitar o Pix em meu ecommerce?

Não. A VTEX não cobra nada a mais por pagamentos via Pix. O custo de processamento desse meio de pagamento deve ser negociado com o provedor de pagamentos escolhido, seja ele um gateway, um adquirente ou um banco.

### Posso oferecer desconto para pagamentos via Pix?

Sim. Ao [criar uma promoção regular](/pt/docs/tutorials/promocao-regular), use a condição __Meios de pagamento__ e selecione o Pix. A promoção só se aplica quando o pedido usa um único meio de pagamento; portanto, não se aplica a pedidos divididos entre Pix e vale-presente.

### Posso aceitar Pix na loja física pelo VTEX Sales App?

Sim, em lojas no Brasil. Além de configurar a condição de pagamento via Pix, você precisa definir que o Pix seja exibido no aplicativo. Consulte o passo a passo em [Configurar Pix](/pt/docs/tracks/configurar-pix) no VTEX Sales App.

## Experiência do cliente

### Como é a tela de pagamento do Pix que vai aparecer para o meu cliente?

A opção de pagar via Pix aparece na lista do checkout, junto com as outras opções de pagamento. Quando o cliente seleciona o Pix, é gerado um QR Code com as informações da compra, e o cliente tem até a expiração desse QR Code para pagar na instituição financeira de sua preferência.

![Checkout_Pix](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/pix/pix-faq_1.png)

![QRCode_Pix](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/pix/pix-faq_2.png)

### O que acontece com o pedido quando o QR Code expira?

O tempo de expiração do QR Code é informado pelo provedor de pagamentos em cada transação e pode variar de 15 a 60 minutos. Se o cliente não realiza o pagamento dentro desse prazo, o pedido é cancelado e é necessário realizar uma nova compra. Para alterar o tempo de expiração na sua loja, entre em contato com o seu provedor de pagamentos.

### Quando um pedido pago com Pix entra na receita aprovada?

Diferentemente dos pedidos pagos com cartão de crédito, que entram na receita aprovada quando o adquirente valida o saldo e os dados do cartão, os pedidos pagos com Pix só entram depois da confirmação do pagamento. Para saber mais, consulte [Compreenda o valor da receita aprovada](/pt/docs/tutorials/compreenda-o-valor-da-receita-aprovada).

### É possível dividir um pagamento entre Pix e outra forma de pagamento?

Atualmente, na VTEX, só é possível dividir um pagamento entre Pix e [vale-presente](/pt/docs/tutorials/gift-card).

### Como funciona o reembolso de um pagamento via Pix?

O reembolso de pagamentos via Pix depende do provedor de pagamentos. Se o provedor processa reembolsos de Pix automaticamente pela integração com a VTEX, o reembolso é concluído pela plataforma. Caso contrário, o provedor indica à VTEX que o reembolso deve ser feito manualmente, e você precisa concluí-lo diretamente com o provedor, fora da plataforma. Para saber mais sobre reembolsos totais e parciais, consulte [Reembolso de pagamentos](/pt/docs/tutorials/reembolso-de-pagamentos).

## Referência de API

### Como a forma de pagamento Pix é identificada no JSON do endpoint Get order?

No JSON de resposta do endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-) da Orders API, o Pix é identificado em `paymentData.transactions[].payments[]` pelo campo `paymentSystemName`, com o valor `Pix`, e pelo campo `group`, com o valor `instantPayment`.
