---
title: 'Como é feita a aprovação de pagamento do boleto?'
createdAt: 2019-01-24T20:45:53.873Z
updatedAt: 2026-11-19T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: how-are-the-payments-made-through-boletos-approved
locale: pt
hidden: false
---

Existem duas possibilidades de configuração de boleto bancário: com as informações bancárias cadastradas diretamente no módulo **Pagamentos** ou passando por um gateway de pagamento. [Veja nosso manual de criação de boleto bancário](/pt/docs/tutorials/como-configurar-boleto-bancario).

Nos dois casos, o pedido fica com o status **Pagamento Pendente** até que o pagamento seja notificado à VTEX e aprovado, e só então segue seu fluxo normal. Se o boleto não for pago, o pedido é cancelado depois dos prazos explicados em [Em quanto tempo um pedido de boleto sem pagamento é cancelado?](/pt/docs/tutorials/em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado).

A forma de aprovação depende do tipo de configuração:

## Diretamente pela VTEX

Neste tipo de configuração, a loja ou algum sistema precisa avisar à VTEX que o pagamento foi realizado. Essa notificação pode ser feita por [conciliação bancária](/pt/docs/tutorials/conciliacoes-bancarias/), [por API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/payments/-paymentId-/payment-notification) ou manualmente em **Pedidos > Transações**, como descrito em [Aprovar pagamento de boleto](/pt/docs/tutorials/como-aprovar-pagamento/).

> ⚠️ Ao aprovar o pagamento manualmente, o pedido segue adiante mesmo que o boleto não tenha sido pago, por isso confirme o recebimento do valor antes de cada aprovação. A aprovação manual exige um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) com o recurso `Notify payment` do License Manager.

## Com um gateway externo

Neste caso, é preciso que o gateway cadastrado faça a comunicação de pagamento com a VTEX, da mesma maneira que ocorre com um cartão de crédito, por exemplo. Se o boleto já foi pago e o pedido continua com o status **Pagamento Pendente**, verifique nos logs da transação se há uma falha de comunicação com o gateway, como explicado em [Verificar erros ou problemas em uma transação](/pt/docs/tutorials/verificar-erros-ou-problemas-em-uma-transacao), e entre em contato com o gateway para resolvê-la.

Também é possível fazer a aprovação de pagamento manualmente em **Pedidos > Transações**, como descrito em [Aprovar pagamento de boleto](/pt/docs/tutorials/como-aprovar-pagamento/). Nesse caso, valem o aviso e a permissão indicados em [Diretamente pela VTEX](#diretamente-pela-vtex).
