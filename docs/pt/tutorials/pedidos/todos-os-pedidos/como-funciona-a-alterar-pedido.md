---
title: 'Como funciona a Alterar pedido'
id: 56TO0bOFXsfmpc7YZ3wIUZ
status: PUBLISHED
createdAt: 2023-11-27T14:51:09.723Z
updatedAt: 2025-06-11T14:18:22.910Z
publishedAt: 2025-06-11T14:18:22.910Z
firstPublishedAt: 2023-11-27T22:39:50.675Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-order-modification-works
legacySlug: como-funciona-a-alterar-pedido-beta
locale: pt
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

A funcionalidade **Alterar pedido** permite que você mude um pedido de diversas maneiras, seja a mudança motivada pela vontade do cliente, pela indisponibilidade de produtos ou outros motivos. Os principais tipos de alteração de pedidos são: 

* **Adicionar:** uma quantidade de itens ou novos produtos.
* **Remover:** uma quantidade parcial ou total de itens.
* **Alterar peso:** os itens podem passar a ter um peso maior ou menor.
* **Substituir itens:** trocar itens por outros, incluindo itens precificados por peso.
* **Alterar preço:** mudar valor total do pedido.

Para ver o passo a passo completo de como realizar cada ação, veja a documentação [Como alterar pedidos](/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw). O artigo atual aborda outros aspectos da **Alterar pedido** e está organizado da seguinte forma:

* [Alterações pelo Admin VTEX e API](#alteracoes-pelo-admin-vtex-e-api)
* [Características gerais](#caracteristicas-gerais)
* [Mudanças de preço](#mudancas-de-preco)

## Alterações pelo Admin VTEX e API

Existem duas vias pelas quais um pedido pode ser alterado, veja os detalhes na tabela a seguir:

| **Como alterar** | **Descrição** | **Status que admite alteração** |
|:---:|:--- |:--- |
| Via Admin VTEX | A alteração é feita pela [página de detalhes do pedido](/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), que pode ser acessada em **Pedidos > Todos os pedidos**, selecionando o pedido desejado.Também é possível acessar o pedido usando a barra de busca no topo do Admin VTEX. Para isso, clique sobre a barra, selecione a opção **Pedidos** e utilize algum dos seguintes critérios:<ul><li>ID do pedido</li><li>Nome do cliente</li><li>Email do cliente</li><li>Documento do cliente</li></ul>**Artigo no Help Center:** [Como alterar pedidos](/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw) | <ul><li>`preparando entrega`</li></ul> |
| Via API | Altera pelos endpoints:<ul><li>[Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)</li><li>[Get order modifications detail](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)</li><li>[Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)</li><li>[Retry order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)</li><li>[Cancel order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)</li><li>[Get Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings)</li><li>[Update Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings)</li></ul> | <ul><li>`handling`</li><li>`waiting-for-fulfillment`</li><li>`ready for invoicing`</li></ul> |

O histórico de alterações do pedido fica registrado na sua [página de detalhes](/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), na seção **Histórico de itens alterados**. Para consultar essa informação por API, utilize o endpoint [Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes).

## Características gerais

A **Alterar pedidos** possui características específicas, como apresentado na tabela a seguir:

| **Aspecto** | **Descrição** |
| :---: | :--- |
| Número de alterações do pedido | Não existe um limite para quantas vezes um pedido pode ser alterado. |
| Pedidos incompletos | Não é possível alterar [pedidos incompletos](/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294), aqueles que não têm todas as informações necessárias para serem processados pela plataforma VTEX. |
| Contas franquia | É possível alterar pedidos nos quais o seller é um conta franquia. |
| Marketplace VTEX, certificado, parceiro e externo | A alteração de pedidos se comporta de forma diferente nos vários cenários de marketplace na VTEX:<ul><li>É possível alterar pedidos de lojas que atuam tanto como seller VTEX quanto como [marketplace VTEX](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex).</li><li>É possível alterar pedidos de [Multilevel Omnichannel Inventory (MOI)](/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) quando são realizados em [marketplaces externos](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).</li><li>Não é possível alterar pedidos realizados em [marketplaces certificados](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados) e [marketplaces parceiros](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-parceiros).</li></ul> |
| Reserva | A [reserva](/pt/tutorial/how-does-reservation-work--tutorials_92) de itens em cenários de alteração de pedidos é automática. |
| Atualização de inventário | Ao alterar um pedido, o [inventário](/pt/tutorial/inventory-management--tutorials_139) da loja não é atualizado automaticamente, isso precisa ser feito ela loja no Admin VTEX em **Catálogo > Estoque > Gerenciamento de inventário**, ou via API, usando o endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-). |
| Permissão no Licence Manager | Para um usuário ser capaz de alterar pedidos, o seu [perfil de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) precisa estar associado a pelo menos um dos seguintes [recursos do Licence Manager](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3):<ul><li>`Orders Full Access`</li><li>`Change order`</li></ul> |

## Mudanças de preço

Quando a alteração de itens do pedido aumenta ou diminui o valor original da compra, a comunicação do módulo **Pedidos** é feita de forma automática com **Pagamentos** e acontece da seguinte forma:

* **Preço menor após alteração:** O comportamento depende do status do pagamento no [fluxo de transação](/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y).
    *  Se o pagamento foi liquidado (status `settled`), uma notificação é enviada ao [gateway](/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) de pagamento para estornar o valor que deve ser devolvido ao cliente.
    * Se o pagamento ainda não foi liquidado, uma notificação é enviada ao gateway para modificar o total do pedido.
* **Preço maior após alteração:** uma notificação é enviada ao gateway de pagamento para solicitar que o cliente pague o valor adicional.

Veja na tabela abaixo mais informações sobre pagamento e fatura na alteração de pedidos:

| **Aspecto** | **Informações** |
|:---:|:--- |
| Condições para aumentar preço do pedido | Só é possível aumentar o preço de um pedido quando ele atende aos seguintes critérios:<ul><li>O pedido foi feito com cartão de crédito, [promissórias](/pt/tutorial/setting-up-payments-notes--5pW7avTwtyQcMu4uiW8quQ) ou [customer credit](/pt/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0).</li><li>O [adquirente](/pt/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E) do pedido permite transações sem o código CVV.</li><li>O adquirente do pedido permite duas transações de cobrança no mesmo pedido.</li></ul>Se o [conector](/pt/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA) não permitir alterações para valores maiores, uma nova transação será realizada com o valor excedente, e a transação não terá vínculo com o pedido original. |
| Alteração de pedido liquidado | No [fluxo de transação](/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y), o pedido pode ser alterado no status `settled` (liquidado), desde que cumpra as seguintes condições:<ul><li>O pedido foi feito com um cartão de crédito.</li><li>A liquidação do pagamento ocorre antes do pedido ser faturado.</li><li>O conector de pagamento está configurado para permitir reembolsos parciais. Atualmente, a [Adyen](/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) é o único conector de pagamento que suporta essa operação.</li></ul>Pedidos em que a transação se encontra com status `finished` (concluído) não podem ser alterados. |
| Transação compartilhada entre sellers e marketplace | É possível alterar pedidos que envolvem mais um de seller e pagamentos no ambiente do marketplace, ou seja, cenários com [split de pagamento](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx). |
| Descontos | Não é possível alterar o pedido aplicando descontos maiores ou iguais ao valor total do pedido original. |
| Fatura | Com relação à [fatura](/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), a alteração de pedidos se comporta da seguinte forma:<ul><li>Se o pedido já foi [faturado](/pt/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v) por completo, ele não pode mais ser alterado.</li><li>Pedidos ainda não faturados ou apenas [parcialmente faturados](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) podem sim ser alterados.</li><li>O valor das faturas parciais do pedido alterado precisa ser igual ou maior que o valor de uma fatura já emitida.</li><li>Se o valor total do pedido alterado for menor do que o valor de uma fatura já emitida, ele não pode ser alterado.</li></ul>Em geral, é o faturamento do pedido que deflagra a liquidação do pagamento. Este comportamento é diferente para lojas que configuraram a [liquidação automática](/pt/tutorial/configuring-maximum-automatic-payment-settlement-time-frame--7dwcaxrcgcFJUk7umqPBw2). |

