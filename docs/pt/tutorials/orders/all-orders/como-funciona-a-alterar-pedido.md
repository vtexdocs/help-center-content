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

Para ver o passo a passo completo de como realizar cada ação, veja a documentação [Como alterar pedidos](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw). O artigo atual aborda outros aspectos da **Alterar pedido** e está organizado da seguinte forma:

* [Alterações pelo Admin VTEX e API](#alteracoes-pelo-admin-vtex-e-api)
* [Características gerais](#caracteristicas-gerais)
* [Mudanças de preço](#mudancas-de-preco)

## Alterações pelo Admin VTEX e API

Existem duas vias pelas quais um pedido pode ser alterado, veja os detalhes na tabela a seguir:

| **Como alterar** | **Descrição** | **Status que admite alteração** |
|:---:|:--- |:--- |
| Via Admin VTEX | <p>A alteração é feita pela <a href="https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl">página de detalhes do pedido</a>, que pode ser acessada em <b>Pedidos > Todos os pedidos</b>, selecionando o pedido desejado.</p><p>Também é possível acessar o pedido usando a barra de busca no topo do Admin VTEX. Para isso, clique sobre a barra, selecione a opção <b>Pedidos</b> e utilize algum dos seguintes critérios:</p><p><ul><li>ID do pedido</li><li>Nome do cliente</li><li>Email do cliente</li><li>Documento do cliente</li></ul></p><p><b>Artigo no Help Center:</b> <a href="https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw">Como alterar pedidos</a></p> | <p><ul><li><code>preparando entrega</code></li></ul></p> |
| Via API | Altera pelos endpoints:<p><ul><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order modifications</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order modifications</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order modifications detail</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes">Get order modifications history</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry">Retry order modifications</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel">Cancel order modifications</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings">Get Order modifications settings</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings">Update Order modifications settings</a></li></ul></p> | <p><ul><li><code>handling</code></li><li><code>waiting-for-fulfillment</code></li><li><code>ready for invoicing</code></li></ul></p> |

O histórico de alterações do pedido fica registrado na sua [página de detalhes](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), na seção **Histórico de itens alterados**. Para consultar essa informação por API, utilize o endpoint [Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes).

## Características gerais

A **Alterar pedidos** possui características específicas, como apresentado na tabela a seguir:

| **Aspecto** | **Descrição** |
| :---: | :--- |
| Número de alterações do pedido | Não existe um limite para quantas vezes um pedido pode ser alterado. |
| Pedidos incompletos | Não é possível alterar <a href="https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294">pedidos incompletos</a>, aqueles que não têm todas as informações necessárias para serem processados pela plataforma VTEX. |
| Contas franquia | É possível alterar pedidos nos quais o seller é um conta franquia. |
| Marketplace VTEX, certificado, parceiro e externo | <p>A alteração de pedidos se comporta de forma diferente nos vários cenários de marketplace na VTEX:</p><p><ul><li>É possível alterar pedidos de lojas que atuam tanto como seller VTEX quanto como <a href="https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex">marketplace VTEX</a>.</li><li>É possível alterar pedidos de <a href="https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4">Multilevel Omnichannel Inventory (MOI)</a> quando são realizados em <a href="https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces">marketplaces externos</a>.</li><li>Não é possível alterar pedidos realizados em <a href="https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados">marketplaces certificados</a> e <a href="https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-parceiros">marketplaces parceiros</a>.</li></ul></p> |
| Reserva | A <a href="https://help.vtex.com/pt/tutorial/how-does-reservation-work--tutorials_92">reserva</a> de itens em cenários de alteração de pedidos é automática. |
| Atualização de inventário | Ao alterar um pedido, o <a href="https://help.vtex.com/pt/tutorial/inventory-management--tutorials_139">inventário</a> da loja não é atualizado automaticamente, isso precisa ser feito ela loja no Admin VTEX em <b>Catálogo > Estoque > Gerenciamento de inventário</b>, ou via API, usando o endpoint <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-">Update inventory by SKU and warehouse</a>. |
| Permissão no Licence Manager | <p>Para um usuário ser capaz de alterar pedidos, o seu <a href="https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">perfil de acesso</a> precisa estar associado a pelo menos um dos seguintes <a href="https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">recursos do Licence Manager</a>:</p><p><ul><li><code>Orders Full Access</code></li><li><code>Change order</code></li></ul></p> |

## Mudanças de preço

Quando a alteração de itens do pedido aumenta ou diminui o valor original da compra, a comunicação do módulo **Pedidos** é feita de forma automática com **Pagamentos** e acontece da seguinte forma:

* **Preço menor após alteração:** O comportamento depende do status do pagamento no [fluxo de transação](https://help.vtex.com/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y).
    *  Se o pagamento foi liquidado (status `settled`), uma notificação é enviada ao [gateway](https://help.vtex.com/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) de pagamento para estornar o valor que deve ser devolvido ao cliente.
    * Se o pagamento ainda não foi liquidado, uma notificação é enviada ao gateway para modificar o total do pedido.
* **Preço maior após alteração:** uma notificação é enviada ao gateway de pagamento para solicitar que o cliente pague o valor adicional.

Veja na tabela abaixo mais informações sobre pagamento e fatura na alteração de pedidos:

| **Aspecto** | **Informações** |
|:---:|:--- |
| Condições para aumentar preço do pedido | <p>Só é possível aumentar o preço de um pedido quando ele atende aos seguintes critérios:</p><p><ul><li>O pedido foi feito com cartão de crédito, <a href="https://help.vtex.com/pt/tutorial/setting-up-payments-notes--5pW7avTwtyQcMu4uiW8quQ">promissórias</a> ou <a href="https://help.vtex.com/pt/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0">customer credit</a>.</li><li>O <a href="https://help.vtex.com/pt/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E">adquirente</a> do pedido permite transações sem o código CVV.</li><li>O adquirente do pedido permite duas transações de cobrança no mesmo pedido.</li></ul></p><p>Se o <a href="https://help.vtex.com/pt/tutorial/o-que-e-conector--3lze0Cu0bmyC6u2o2iaeEA">conector</a> não permitir alterações para valores maiores, uma nova transação será realizada com o valor excedente, e a transação não terá vínculo com o pedido original.</p> |
| Alteração de pedido liquidado | <p>No <a href="https://help.vtex.com/pt/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y">fluxo de transação</a>, o pedido pode ser alterado no status `settled` (liquidado), desde que cumpra as seguintes condições:</p><p><ul><li>O pedido foi feito com um cartão de crédito.</li><li>A liquidação do pagamento ocorre antes do pedido ser faturado.</li><li>O conector de pagamento está configurado para permitir reembolsos parciais. Atualmente, a <a href="https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv">Adyen</a> é o único conector de pagamento que suporta essa operação.</li></ul><p><p>Pedidos em que a transação se encontra com status `finished` (concluído) não podem ser alterados.</p> |
| Transação compartilhada entre sellers e marketplace | É possível alterar pedidos que envolvem mais um de seller e pagamentos no ambiente do marketplace, ou seja, cenários com <a href="https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx">split de pagamento</a>. |
| Descontos | Não é possível alterar o pedido aplicando descontos maiores ou iguais ao valor total do pedido original. |
| Fatura | <p>Com relação à <a href="https://help.vtex.com/pt/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT">fatura</a>, a alteração de pedidos se comporta da seguinte forma:</p><p><ul><li>Se o pedido já foi <a href="https://help.vtex.com/pt/tutorial/como-faturar-um-pedido--7p1h852V5t54KyscpgxE2v">faturado</a> por completo, ele não pode mais ser alterado.</li><li>Pedidos ainda não faturados ou apenas <a href="https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">parcialmente faturados</a> podem sim ser alterados.</li><li>O valor das faturas parciais do pedido alterado precisa ser igual ou maior que o valor de uma fatura já emitida.</li><li>Se o valor total do pedido alterado for menor do que o valor de uma fatura já emitida, ele não pode ser alterado.</li></ul></p><p>Em geral, é o faturamento do pedido que deflagra a liquidação do pagamento. Este comportamento é diferente para lojas que configuraram a <a href="https://help.vtex.com/pt/tutorial/configuring-maximum-automatic-payment-settlement-time-frame--7dwcaxrcgcFJUk7umqPBw2">liquidação automática</a>.</p> |

