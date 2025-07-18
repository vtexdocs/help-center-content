---
title: "Como funciona a Alterar pedido (Beta)"
id: 56TO0bOFXsfmpc7YZ3wIUZ
status: PUBLISHED
createdAt: 2023-11-27T14:51:09.723Z
updatedAt: 2024-10-10T18:45:53.114Z
publishedAt: 2024-10-10T18:45:53.114Z
firstPublishedAt: 2023-11-27T22:39:50.675Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: how-change-order-works-beta
locale: pt
legacySlug: como-funciona-a-alterar-pedido-beta
subcategoryId: 3LQ1Tl0u4frEOd45BkjFAm
---

>ℹ️ Essa funcionalidade está em fase beta, o que significa que estamos trabalhando para aprimorá-la. Se você deseja utilizar a **Alterar pedido (Beta)**, entre em contato com [nosso Suporte](https://help.vtex.com/pt/support) e informe o(s) [account name(s)](https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) nos quais deseja ativá-la.

A funcionalidade **Alterar pedido (beta)** permite que você mude um pedido de diversas maneiras, seja a mudança motivada pela vontade do cliente, pela indisponibilidade de produtos ou outros motivos. Os principais tipos de alteração de pedidos são:

* **Adicionar:** uma quantidade de itens ou novos produtos.
* **Remover:** uma quantidade parcial ou total de itens.
* **Alterar peso:** os itens podem passar a ter um peso maior ou menor.
* **Substituir itens:** trocar itens por outros, incluindo itens precificados por peso.
* **Alterar preço:** mudar valor total do pedido.

Para ver o passo a passo completo de como realizar cada ação, veja a documentação [Como alterar pedidos (Beta)](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw). O artigo atual aborda outros aspectos da **Alterar pedido (Beta)** e está organizado da seguinte forma:

- [Alterações pelo Admin VTEX e API](#alterações-pelo-admin-vtex-e-api)
- [Características gerais](#características-gerais)
- [Mudanças de preço](#mudanças-de-preço)

## Alterações pelo Admin VTEX e API

Existem duas vias pelas quais um pedido pode ser alterado, veja os detalhes na tabela a seguir:

| **Como alterar** | **Descrição** | **Status que admite alteração** |
|:---|:---|:---|
| Via Admin VTEX | A alteração é feita pela [página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), que pode ser acessada em **Pedidos > Todos os pedidos**, selecionando o pedido desejado. Também é possível acessar o pedido usando a barra de busca no topo do Admin VTEX. Para isso, clique sobre a barra, selecione a opção **Pedidos** e utilize algum dos seguintes critérios: ID do pedido, Nome do cliente, Email do cliente, Documento do cliente. **Artigo no Help Center:** [Como alterar pedidos (Beta)](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw) | `preparando entrega` |
| Via API | Altera pelos endpoints: [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview), [Get order change detail](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-), [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes), [Retry order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry), [Cancel order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel), [Get Change order settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings), [Update Change order settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings) | `ready-for-handling`, `handling`, `waiting-for-fulfillment`, `ready for invoicing` |

O histórico de alterações do pedido fica registrado na sua [página de detalhes](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), na seção **Histórico de itens alterados**. Para consultar essa informação por API, utilize o endpoint [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes).

## Características gerais

A **Alterar pedidos (beta)** possui características específicas, como apresentado na tabela a seguir:

| **Aspecto** | **Descrição** |
|:---|:---|
| Número de alterações do pedido | Não existe um limite para quantas vezes um pedido pode ser alterado. |
| Pedidos incompletos | Não é possível alterar [pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294), aqueles que não têm todas as informações necessárias para serem processados pela plataforma VTEX. |
| Contas franquia | É possível alterar pedidos nos quais o seller é um conta franquia. |
| Marketplace VTEX, certificado, parceiro e externo | A alteração de pedidos se comporta de forma diferente nos vários cenários de marketplace na VTEX: é possível alterar pedidos de lojas que atuam tanto como seller VTEX quanto como [marketplace VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex); é possível alterar pedidos de [Multilevel Omnichannel Inventory (MOI)](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) quando são realizados em [marketplaces externos](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces); não é possível alterar pedidos realizados em [marketplaces certificados](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados) e [marketplaces parceiros](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-parceiros). |
| Reserva | A [reserva](https://help.vtex.com/pt/tutorial/how-does-reservation-work--tutorials_92) de itens em cenários de alteração de pedidos é automática. |
| Atualização de inventário | Ao alterar um pedido, o [inventário](https://help.vtex.com/pt/tutorial/inventory-management--tutorials_139) da loja não é atualizado automaticamente, isso precisa ser feito pela loja no Admin VTEX em **Catálogo > Estoque > Gerenciamento de inventário**, ou via API, usando o endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-). |
| Permissão no Licence Manager | Para um usuário ser capaz de alterar pedidos, o seu [perfil de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) precisa estar associado a pelo menos um dos seguintes [recursos do Licence Manager](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3): `Orders Full Access`, `Change order`. |

## Mudanças de preço

Quando a alteração de itens do pedido aumenta ou diminui o valor original da compra, a comunicação do módulo **Pedidos** é feita de forma automática com **Pagamentos** e acontece da seguinte forma:

* **Preço menor após alteração:** uma notificação é enviada ao [gateway](https://help.vtex.com/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) de pagamento para estornar o valor que deve ser devolvido ao cliente.
* **Preço maior após alteração:** uma notificação é enviada ao gateway de pagamento para solicitar que o cliente pague o valor adicional.

Veja na tabela abaixo mais informações sobre pagamento e fatura na alteração de pedidos:

| **Aspecto** | **Informações** |
|:---|:---|
| Condições para aumentar preço do pedido | Só é possível aumentar o preço de um pedido quando ele atende aos seguintes critérios: o pedido foi feito com cartão de crédito, [promissórias](https://help.vtex.com/pt/tutorial/setting-up-payments-notes--5pW7avTwtyQcMu4uiW8quQ) ou [customer credit](https://help.vtex.com/pt/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0); o [adquirente](https://help.vtex.com/pt/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E) do pedido permite transações sem o código CVV; o adquirente do pedido permite duas transações de cobrança no mesmo pedido. Se o [conector](https://help.vtex.com/pt/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA) não permitir alterações para valores maiores, uma nova transação será realizada com o valor excedente, e a transação não terá vínculo com o pedido original. |
| Alteração de pedido liquidado | No [fluxo de transação](https://help.vtex.com/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y), o pedido pode ser alterado no status `settled` (liquidado), desde que cumpra as seguintes condições: o pedido foi feito com um cartão de crédito; a liquidação do pagamento ocorre antes do pedido ser faturado; o conector de pagamento está configurado para permitir reembolsos parciais. Atualmente, a [Adyen](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) é o único conector de pagamento que suporta essa operação. Pedidos em que a transação se encontra com status `finished` (concluído) não podem ser alterados. |
| Transação compartilhada entre sellers e marketplace | É possível alterar pedidos que envolvem mais um de seller e pagamentos no ambiente do marketplace, ou seja, cenários com [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx). |
| Descontos | Não é possível alterar o pedido aplicando descontos maiores ou iguais ao valor total do pedido original. |
| Fatura | Com relação à [fatura](https://help.vtex.com/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT), a alteração de pedidos se comporta da seguinte forma: se o pedido já foi [faturado](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v) por completo, ele não pode mais ser alterado; pedidos ainda não faturados ou apenas [parcialmente faturados](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) podem sim ser alterados; o valor das faturas parciais do pedido alterado precisa ser igual ou maior que o valor de uma fatura já emitida; se o valor total do pedido alterado for menor do que o valor de uma fatura já emitida, ele não pode ser alterado. Em geral, é o faturamento do pedido que deflagra a liquidação do pagamento. Este comportamento é diferente para lojas que configuraram a [liquidação automática](https://help.vtex.com/pt/tutorial/configuring-maximum-automatic-payment-settlement-time-frame--7dwcaxrcgcFJUk7umqPBw2). |
