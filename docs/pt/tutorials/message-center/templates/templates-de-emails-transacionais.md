---
title: 'Templates de emails transacionais referentes ao pedido'
id: 3g2S2kqBOoSGcCaqMYK2my
status: PUBLISHED
createdAt: 2018-11-06T21:01:19.818Z
updatedAt: 2025-06-04T13:15:36.864Z
publishedAt: 2025-06-04T13:15:36.864Z
firstPublishedAt: 2018-11-07T18:11:42.445Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slugEN: order-transactional-email-templates
legacySlug: lista-de-templates-de-e-mail-no-message-center
locale: pt
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

O objetivo deste artigo é listar os templates de emails transacionais padrão referentes ao fluxo de um pedido. Além disso, vamos especificar o gatilho necessário para o disparo de cada email.

<div class="alert alert-warning">
Atenção: pedidos de origem Fulfillment não recebem emails transacionais da VTEX. Ou seja, neste caso, o disparo de emails fica a cargo do próprio marketplace.
</div>

Para acessar os templates, siga os passos abaixo.

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates**, ou digite **Templates** na barra de busca no topo da página.
2. Clique em __Templates__.
3. Na barra de busca, digite o nome ou a chave do template que deseja encontrar. Consulte a lista abaixo para mais informações.

| Template | Chave | Descrição | Gatilho |
|-|-|-|-|
| Order confirmation | vtexcommerce-new-order | Email enviado quando o pedido é concluído. | Checkout cria um novo pedido. |
| Replace Order | vtexcommerce-replace-order | Email enviado quando o pedido é substituído com sucesso. | Checkout cria um novo pedido e informa o __Gerenciamento de pedidos__ sobre a substituição. |
| Order change payment | vtexcommerce-order-change-payment | Notificação de forma de pagamento alterada. | O cliente altera a forma de pagamento e o Checkout notifica o __Gerenciamento de pedidos__ sobre a alteração. |
| Payment pending | vtexcommerce-payment-pending | Notificação de pagamento pendente. | O __Gerenciamento de pedidos__ envia o email 48 horas após a finalização do pedido. |
| Payment approved | vtexcommerce-payment-approved | Notificação de pagamento aprovado. | O status do pedido muda para __Pagamento Aprovado__. |
| Change of information order | vtexcommerce-order-changed | Notificação de que o [pedido foi alterado](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190). | O Checkout notifica um evento de alteração no pedido (desconto, adição de itens ou remoção de itens). |
| Order changed | vtexcommerce-order-changed-v2 | Notificação de que [o pedido foi alterado](https://help.vtex.com/pt/tutorial/como-alterar-pedidos--7btlG91rb6sHpW1dkd2kBw). | O Checkout notifica um evento de alteração no pedido (aumento ou diminuição de preço, adição, remoção ou substituição de itens, alteração de peso). |
| Order invoiced | vtexcommerce-order-invoiced | Notificação de que o pedido foi faturado. | O status do pedido muda para __Faturado__. |
| Cancel billed request | vtexcommerce-order-invoiced-with-cancel-request | Notificação de que o pedido não pode ser cancelado após ser faturado. | O Seller recusa um pedido de cancelamento quando o pedido está no status __Preparando Entrega__. |
| Cancel shipped order | vtexcommerce-order-shipped-with-cancel-request | Notificação de que o pedido não pode ser cancelado após ser enviado. | O Seller recusa um pedido de cancelamento quando o pedido já possui um número de rastreio ou uma URL de rastreio. |
| Order shipped | vtexcommerce-order-shipped | Notificação de que o pedido foi enviado. | O pedido recebe uma nota fiscal e um número de rastreio ou uma URL de rastreio. Em caso de primeiro envio, será necessário preencher as duas informações: `trackingNumber` e `trackingURL`. |
| Shipping Update | vtexcommerce-order-shipping-update | Notificação dos eventos da entrega, como "coletado pela transportadora" e "saiu para entrega", por exemplo. | O pedido precisa ter a nota fiscal, e um número de rastreio e uma URL de rastreio vinculada à nota. Além disto, deve ter os eventos da entrega, que é a informação principal deste template. |
| Order delivered | vtexcommerce-order-shipping-finished | Notificação de que a entrega foi realizada. | O pedido precisa ter a nota fiscal, e um número de rastreio e uma URL de rastreio vinculada à nota. O Seller confirma a entrega do pedido. Essa ação muda o valor do campo `isDelivered` para `true` no json do pedido. |
| Order cancelled | vtexcommerce-order-cancelled | Notificação de cancelamento do pedido. | Status do pedido muda para __Cancelado__. |
| [Order Refund](https://help.vtex.com/pt/tutorial/template-de-e-mail-transacional-para-pedido-estornado--5uy6FCBb6DLyIJlSDeM10G) | vtexcommerce-order-refund | Notificação de estorno. | O lojista insere o invoice com o valor estornado pela API [Order Invoice Notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), com o campo `type` contendo o valor `input`. No Admin, esse evento é disparado quando se clica no botão  **Fazer devolução de itens**, na tela de detalhes do pedido. |
