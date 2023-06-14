---
title: 'Aprovar pagamento de boleto'
id: tutorials_184
status: PUBLISHED
createdAt: 2017-04-27T22:16:19.919Z
updatedAt: 2023-03-26T21:44:48.077Z
publishedAt: 2023-03-26T21:44:48.077Z
firstPublishedAt: 2017-04-27T23:00:46.699Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-aprovar-pagamento
locale: pt
legacySlug: como-aprovar-pagamento
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

A aprovação do pagamento é a confirmação de que o valor do pedido foi pago pelo cliente, possibilitando o prosseguimento do pedido. 

Quer o boleto tenha sido realmente pago ou não, o pedido seguirá adiante caso você aprove o pagamento.

Essa aprovação pode ser feita manualmente no módulo Pedidos, conforme abaixo.

1. Acesse o menu **Pedidos > Transações**.
2. Clique sobre a transação desejada.
3. Clique no botão **Notificar Pagamento**.

![NotificarPT](https://images.ctfassets.net/alneenqid6w5/6jQnmZtHygY4csKym2kC0e/f48943b3a025d87ab59a724e17188df3/NotificarPT.png)

**Após a aprovação do pagamento, o pedido entrará no fluxo normal de compra.**

<div class="alert alert-info">
No módulo de Gerenciamento da Conta, o usuário precisa ter um perfil de acesso que inclua a permissão <code>Notify payment</code> para ser capaz de aprovar pagamentos.
</div>

Para aprovar o pagamento por API, veja a [documentação da chamada de notificação de pagamento](https://developers.vtex.com/reference/payment#getorder).

<div class="alert alert-warning">
Como <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide">integrações com ERPs</a> são regidas pelo <a href="https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#">fluxo de pedidos</a>, a aprovação manual de um pagamento dará continuidade à integração deste pedido com o back office da loja normalmente. Portanto recomenda-se cautela ao aprovar pagamentos manualmente, de modo a garantir o recebimento por cada pedido que é processado e enviado.
</div>

