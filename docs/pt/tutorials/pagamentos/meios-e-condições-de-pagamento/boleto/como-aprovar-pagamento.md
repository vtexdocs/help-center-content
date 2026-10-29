---
title: 'Aprovar pagamento de boleto'
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2026-10-29T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: approving-payment-of-the-bank-payment-slip
locale: pt
hidden: false
---

A aprovação do pagamento confirma que o cliente pagou o valor do pedido e permite que o pedido avance no fluxo. Em pedidos pagos com boleto, você pode fazer essa aprovação manualmente no módulo Pedidos ou por API.

> ⚠️ Ao aprovar o pagamento, o pedido segue adiante mesmo que o boleto não tenha sido pago. Como as [integrações com ERPs](https://developers.vtex.com/docs/guides/erp-integration-guide) seguem o [fluxo de pedidos](/pt/docs/tutorials/fluxo-e-status-de-pedidos), o pedido também é integrado normalmente ao back office da loja. Por isso, recomendamos cautela: confirme o recebimento do valor antes de aprovar cada pagamento. Se um pagamento for aprovado por engano, você pode [cancelar o pedido](/pt/docs/tutorials/como-cancelar-pedido).

Para aprovar o pagamento manualmente, siga os passos a seguir:

1. No Admin VTEX, acesse **Pedidos > Transações**, ou digite **Transações** na barra de busca no topo da página.
2. Busque a transação pelo e-mail, nome ou documento do cliente, ou por outro dado listado em [Buscar transações no Pagamentos](/pt/docs/tutorials/transacoes-como-buscar), e clique sobre ela. Se você estiver na página de detalhes do pedido, clique em **Detalhes da transação** para abrir a transação diretamente.
3. No card do pagamento por boleto, clique em `Notificar pagamento`.

![NotificarPT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/boleto/como-aprovar-pagamento_1.png)

**Após a aprovação do pagamento, o pedido entrará no fluxo normal de compra.**

> ℹ️ Para aprovar pagamentos, você precisa ter um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) com o [recurso do License Manager](/pt/docs/tutorials/recursos-do-license-manager) `Notify payment`, na categoria `OMS access` do produto **OMS**.

Para aprovar o pagamento por API, veja a documentação do endpoint [Send payment notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/payments/-paymentId-/payment-notification).

