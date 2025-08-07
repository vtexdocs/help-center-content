---
title: 'Entendendo o relatório de assinaturas'
id: 3RtHQowB4Vjf6O19YwRLu1
status: PUBLISHED
createdAt: 2025-04-11T15:36:03.548Z
updatedAt: 2025-04-11T20:09:12.975Z
publishedAt: 2025-04-11T20:09:12.975Z
firstPublishedAt: 2025-04-11T15:41:29.370Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: understanding-the-subscription-report
legacySlug: entendendo-o-relatorio-de-assinaturas
locale: pt
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

O relatório de assinaturas é um documento em formato `.csv` com informações sobre as assinaturas, como data da criação, email do cliente, SKUs ativos da assinatura, entre outros dados.

Você pode gerar o relatório utilizando o endpoint [Generate 
report](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3?endpoint=post-/api/rns/pvt/reports/-reportName-/documents).

Existem os seguintes tipos de relatórios:
- [Assinaturas com status](#assinaturas-com-status)
- [Assinaturas programadas entre datas](#assinaturas-programadas-entre-datas)
- [Assinaturas atualizadas entre datas](#assinaturas-atualizadas-entre-datas)
- [Assinaturas criadas entre datas](#assinaturas-criadas-entre-datas)
- [Assinaturas executadas entre datas](#assinaturas-executadas-entre-datas)

<div class="alert alert-info">
  <p>Você também pode usar o endpoint <a href=https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#get-/api/rns/pvt/reports>List report templates</a> para descobrir que tipos de relatório você consegue gerar.</p>
</div>

Neste artigo, você saberá mais detalhes sobre cada informação que os diferentes tipos de relatório de assinaturas retornam.

## Assinaturas com status
O relatório `subscriptionsWithStatus` retorna dados de assinaturas com base no status da execução do ciclo.

As colunas correspondem a uma informação específica sobre a assinatura, conforme descrito abaixo.

| **Nome do campo** | **Descrição** |
| :---:  | :--- |
| ID | ID da assinatura. |
| Customer Email | Email do cliente. |
| Customer Id | ID do cliente. |
| Status | <p> Status da assinatura no momento de gerar o relatório. </p> <p> `TRIGGERED`: Uma execução do ciclo de assinatura foi acionada. </p> <p> `IN_PROCESS`: A assinatura está sendo processada pelo sistema (status temporário). </p> <p> `FAILURE`: Ocorreu um erro interno na execução da assinatura. </p> <p> `SUCCESS`: O ciclo de assinatura foi processado com sucesso. </p> <p> `EXPIRED`: A assinatura não foi renovada e ultrapassou a data limite vigente. </p> <p> `ORDER_ERROR`: O ciclo de assinatura não foi executado devido a um erro no _place order_ do pedido. </p> <p> `PAYMENT_ERROR`: O ciclo de assinatura não foi executado devido a um erro no pagamento. </p> <p> `SKIPED`: Uma execução de ciclo de assinatura foi ignorada e a assinatura será executada no próximo ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: Um ciclo de assinatura foi executado com sucesso e o pedido atrelado não possui itens. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: Um ciclo de assinatura foi executado com sucesso e possui um pedido parcial atrelado. </p> <p> `RE_TRIGGERED`:  Uma re-execução de ciclo da assinatura foi acionada manualmente. </p> <p> `SCHEDULE_UPDATED`: A data da próxima execução de ciclo da assinatura foi atualizada. </p> 
| Has Active Items | <p> Informa se a assinatura tem itens ativos. </p> <p> `TRUE`: Tem itens ativos. </p> <p> `FALSE`: Não tem itens ativos. </p> 
| Is Skipped | <p> Informa se o ciclo da assinatura será pulado. </p> <p> `TRUE`: O ciclo será pulado. </p> <p> `FALSE`: O ciclo não será pulado. </p> 
| Next Purchase Date | Data da próxima compra. |
| Last Purchase Date | Data da última compra. |
| Periodicity | Periodicidade da assinatura. |
| Interval | Intervalo da assinatura. |
| Purchase Day | Dia da compra da assinatura. |
| AddressId | ID do endereço do cliente. |
| AddressType | Tipo do endereço. |
| PaymentSystem Name | Tipo de pagamento da assinatura. |
| Account Id | ID da conta. |
| Selected Sla | O [Service Level Agreement (SLA)](https://vtex.com/br-pt/privacy-and-agreements/agreements/) escolhido. |
| Cycle | Número que identifica o ciclo da assinatura. |
| Created At | Data de criação da assinatura. |
| Last Update | Última atualização da assinatura. |
| Subscriptions Items Count | Contagem de itens da assinatura. |
| Subscriptions Item Id | ID dos itens da assinatura. |
| Subscriptions Item Status | Status dos itens da assinatura. |
| Subscriptions Item Sku Id | SKU dos itens da assinatura. |
| Subscriptions Item PriceAtSubscriptionDate | Valor dos itens no momento da assinatura. |
| Subscriptions Item Quantity | Quantidade de itens na assinatura. |
| Subscriptions Item Is Skipped | <p> Informa se os itens serão pulados. </p> <p> `TRUE`: Os itens serão pulados. </p> <p> `FALSE`: Os itens serão ser pulados. </p> 
| Subscriptions Item Cycle | Ciclo dos itens da assinatura. |
| Subscriptions Item OriginalOrder | Pedido original dos itens da assinatura. | 

## Assinaturas programadas entre datas
O relatório `subscriptionsScheduledBetweenDate` retorna dados de assinaturas programadas entre um período de datas.

As colunas correspondem a uma informação específica sobre a assinatura, conforme descrito abaixo.

| **Nome do campo** | **Descrição** |
| :---:  | :--- |
| ID | ID da assinatura. |
| Customer Email | Email do cliente. |
| Customer Id | ID do cliente. |
| Status | <p> Status da assinatura no momento de gerar o relatório. </p> <p> `TRIGGERED`: Uma execução do ciclo de assinatura foi acionada. </p> <p> `IN_PROCESS`: A assinatura está sendo processada pelo sistema (status temporário). </p> <p> `FAILURE`: Ocorreu um erro interno na execução da assinatura. </p> <p> `SUCCESS`: O ciclo de assinatura foi processado com sucesso. </p> <p> `EXPIRED`: A assinatura não foi renovada e ultrapassou a data limite vigente. </p> <p> `ORDER_ERROR`: O ciclo de assinatura não foi executado devido a um erro no _place order_ do pedido. </p> <p> `PAYMENT_ERROR`: O ciclo de assinatura não foi executado devido a um erro no pagamento. </p> <p> `SKIPED`: Uma execução de ciclo de assinatura foi ignorada e a assinatura será executada no próximo ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: Um ciclo de assinatura foi executado com sucesso e o pedido atrelado não possui itens. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: Um ciclo de assinatura foi executado com sucesso e possui um pedido parcial atrelado. </p> <p> `RE_TRIGGERED`:  Uma re-execução de ciclo da assinatura foi acionada manualmente. </p> <p> `SCHEDULE_UPDATED`: A data da próxima execução de ciclo da assinatura foi atualizada. </p> 
| Has Active Items | <p> Informa se a assinatura tem itens ativos. </p> <p> `TRUE`: Tem itens ativos. </p> <p> `FALSE`: Não tem itens ativos. </p> 
| Is Skipped | <p> Informa se o ciclo da assinatura será pulado. </p> <p> `TRUE`: O ciclo será pulado. </p> <p> `FALSE`: O ciclo não será pulado. </p> 
| Next Purchase Date | Data da próxima compra. |
| Last Purchase Date | Data da última compra. |
| Periodicity | Periodicidade da assinatura. |
| Interval | Intervalo da assinatura. |
| Purchase Day | Dia da compra da assinatura. |
| AddressId | ID do endereço do cliente. |
| AddressType | Tipo do endereço. |
| PaymentSystem Name | Tipo de pagamento da assinatura. |
| Account Id | ID da conta. |
| Selected Sla | O [Service Level Agreement (SLA)](https://vtex.com/br-pt/privacy-and-agreements/agreements/) escolhido. |
| Cycle | Número que identifica o ciclo da assinatura. |
| Created At | Data de criação da assinatura. |
| Last Update | Última atualização da assinatura. |
| Subscriptions Items Count | Contagem de itens da assinatura. |
| Subscriptions Item Id | ID dos itens da assinatura. |
| Subscriptions Item Status | Status dos itens da assinatura. |
| Subscriptions Item Sku Id | SKU dos itens da assinatura. |
| Subscriptions Item PriceAtSubscriptionDate | Valor dos itens no momento da assinatura. |
| Subscriptions Item Quantity | Quantidade de itens na assinatura. |
| Subscriptions Item Is Skipped | <p> Informa se os itens serão pulados. </p> <p> `TRUE`: Os itens serão pulados. </p> <p> `FALSE`: Os itens não serão pulados. </p> 
| Subscriptions Item Cycle | Ciclo dos itens da assinatura. |
| Subscriptions Item OriginalOrder | Pedido original dos itens da assinatura. | 

## Assinaturas atualizadas entre datas
O relatório `subscriptionsUpdatedBetweenDate` retorna dados de assinaturas atualizadas entre um período de datas.

As colunas correspondem a uma informação específica sobre a assinatura, conforme descrito abaixo.

| **Nome do campo** | **Descrição** |
| :---:  | :--- |
| ID | ID da assinatura. |
| Customer Email | Email do cliente. |
| Customer Id | ID do cliente. |
| Status | <p> Status da assinatura no momento de gerar o relatório. </p> <p> `TRIGGERED`: Uma execução do ciclo de assinatura foi acionada. </p> <p> `IN_PROCESS`: A assinatura está sendo processada pelo sistema (status temporário). </p> <p> `FAILURE`: Ocorreu um erro interno na execução da assinatura. </p> <p> `SUCCESS`: O ciclo de assinatura foi processado com sucesso. </p> <p> `EXPIRED`: A assinatura não foi renovada e ultrapassou a data limite vigente. </p> <p> `ORDER_ERROR`: O ciclo de assinatura não foi executado devido a um erro no _place order_ do pedido. </p> <p> `PAYMENT_ERROR`: O ciclo de assinatura não foi executado devido a um erro no pagamento. </p> <p> `SKIPED`: Uma execução de ciclo de assinatura foi ignorada e a assinatura será executada no próximo ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: Um ciclo de assinatura foi executado com sucesso e o pedido atrelado não possui itens. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: Um ciclo de assinatura foi executado com sucesso e possui um pedido parcial atrelado. </p> <p> `RE_TRIGGERED`:  Uma re-execução de ciclo da assinatura foi acionada manualmente. </p> <p> `SCHEDULE_UPDATED`: A data da próxima execução de ciclo da assinatura foi atualizada. </p> 
| Has Active Items | <p> Informa se a assinatura tem itens ativos. </p> <p> `TRUE`: Tem itens ativos. </p> <p> `FALSE`: Não tem itens ativos. </p> 
| Is Skipped | <p> Informa se o ciclo da assinatura será pulado. </p> <p> `TRUE`: O ciclo será pulado. </p> <p> `FALSE`: O ciclo não será pulado. </p> 
| Next Purchase Date | Data da próxima compra. |
| Last Purchase Date | Data da última compra. |
| Periodicity | Periodicidade da assinatura. |
| Interval | Intervalo da assinatura. |
| Purchase Day | Dia da compra da assinatura. |
| AddressId | ID do endereço do cliente. |
| AddressType | Tipo do endereço. |
| PaymentSystem Name | Tipo de pagamento da assinatura. |
| Account Id | ID da conta. |
| Selected Sla | O [Service Level Agreement (SLA)](https://vtex.com/br-pt/privacy-and-agreements/agreements/) escolhido. |
| Cycle | Número que identifica o ciclo da assinatura. |
| Created At | Data de criação da assinatura. |
| Last Update | Última atualização da assinatura. |
| Subscriptions Items Count | Contagem de itens da assinatura. |
| Subscriptions Item Id | ID dos itens da assinatura. |
| Subscriptions Item Status | Status dos itens da assinatura. |
| Subscriptions Item Sku Id | SKU dos itens da assinatura. |
| Subscriptions Item PriceAtSubscriptionDate | Valor dos itens no momento da assinatura. |
| Subscriptions Item Quantity | Quantidade de itens na assinatura. |
| Subscriptions Item Is Skipped | <p> Informa se os itens serão pulados. </p> <p> `TRUE`: Os itens serão pulados. </p> <p> `FALSE`: Os itens não serão pulados. </p> 
| Subscriptions Item Cycle | Ciclo dos itens da assinatura. |
| Subscriptions Item OriginalOrder | Pedido original dos itens da assinatura. | 

## Assinaturas criadas entre datas
O relatório `subscriptionsCreatedBetweenDate` retorna dados de assinaturas criadas entre um período de datas.

As colunas correspondem a uma informação específica sobre a assinatura, conforme descrito abaixo.

| **Nome do campo** | **Descrição** |
| :---:  | :--- |
| ID | ID da assinatura. |
| Customer Email | Email do cliente. |
| Customer Id | ID do cliente. |
| Status | <p> Status da assinatura no momento de gerar o relatório. </p> <p> `TRIGGERED`: Uma execução do ciclo de assinatura foi acionada. </p> <p> `IN_PROCESS`: A assinatura está sendo processada pelo sistema (status temporário). </p> <p> `FAILURE`: Ocorreu um erro interno na execução da assinatura. </p> <p> `SUCCESS`: O ciclo de assinatura foi processado com sucesso. </p> <p> `EXPIRED`: A assinatura não foi renovada e ultrapassou a data limite vigente. </p> <p> `ORDER_ERROR`: O ciclo de assinatura não foi executado devido a um erro no _place order_ do pedido. </p> <p> `PAYMENT_ERROR`: O ciclo de assinatura não foi executado devido a um erro no pagamento. </p> <p> `SKIPED`: Uma execução de ciclo de assinatura foi ignorada e a assinatura será executada no próximo ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: Um ciclo de assinatura foi executado com sucesso e o pedido atrelado não possui itens. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: Um ciclo de assinatura foi executado com sucesso e possui um pedido parcial atrelado. </p> <p> `RE_TRIGGERED`:  Uma re-execução de ciclo da assinatura foi acionada manualmente. </p> <p> `SCHEDULE_UPDATED`: A data da próxima execução de ciclo da assinatura foi atualizada. </p> 
| Has Active Items | <p> Informa se a assinatura tem itens ativos. </p> <p> `TRUE`: Tem itens ativos. </p> <p> `FALSE`: Não tem itens ativos. </p> 
| Is Skipped | <p> Informa se o ciclo da assinatura será pulado. </p> <p> `TRUE`: O ciclo será pulado. </p> <p> `FALSE`: O ciclo não será pulado. </p> 
| Next Purchase Date | Data da próxima compra. |
| Last Purchase Date | Data da última compra. |
| Periodicity | Periodicidade da assinatura. |
| Interval | Intervalo da assinatura. |
| Purchase Day | Dia da compra da assinatura. |
| AddressId | ID do endereço do cliente. |
| AddressType | Tipo do endereço. |
| PaymentSystem Name | Tipo de pagamento da assinatura. |
| Account Id | ID da conta. |
| Selected Sla | O [Service Level Agreement (SLA)](https://vtex.com/br-pt/privacy-and-agreements/agreements/) escolhido. |
| Cycle | Número que identifica o ciclo da assinatura. |
| Created At | Data de criação da assinatura. |
| Last Update | Última atualização da assinatura. |
| Subscriptions Items Count | Contagem de itens da assinatura. |
| Subscriptions Item Id | ID dos itens da assinatura. |
| Subscriptions Item Status | Status dos itens da assinatura. |
| Subscriptions Item Sku Id | SKU dos itens da assinatura. |
| Subscriptions Item PriceAtSubscriptionDate | Valor dos itens no momento da assinatura. |
| Subscriptions Item Quantity | Quantidade de itens na assinatura. |
| Subscriptions Item Is Skipped | <p> Informa se os itens serão pulados. </p> <p> `TRUE`: Os itens serão pulados. </p> <p> `FALSE`: Os itens não serão pulados. </p> 
| Subscriptions Item Cycle | Ciclo dos itens da assinatura. |
| Subscriptions Item OriginalOrder | Pedido original dos itens da assinatura. | 

## Assinaturas executadas entre datas
O relatório `executionsBetweenDate` retorna dados de assinaturas executadas entre um período de datas.

As colunas correspondem a uma informação específica sobre a assinatura, conforme descrito abaixo.

| **Nome do campo** | **Descrição** |
| :---:  | :--- |
|  Id | ID da assinatura. |
| OrderGroup | ID do pedido gerado pela execução do relatório.
| E-mail | Email do cliente. |
| Customer Id | ID do cliente. |
| Skus | SKUs dos produtos da assinatura. |
| Order | Número do pedido. |
| Value | Valor da assinatura. |
| cycleCount | Número que identifica o ciclo da assinatura. |
| date | Data de criação da assinatura.
| IsInRetry | <p> Informa se a execução foi resultado de uma retry. </p> <p> `TRUE`: A execução foi resultado de retry. </p> <p>`FALSE`:  A execução não foi resultado de retry. </p> 
| Status | <p> Status da assinatura no momento da execução do relatório. </p> <p> `TRIGGERED`: Uma execução do ciclo de assinatura foi acionada. </p> <p> `IN_PROCESS`: A assinatura está sendo processada pelo sistema (status temporário). </p> <p> `FAILURE`: Ocorreu um erro interno na execução da assinatura. </p> <p> `SUCCESS`: O ciclo de assinatura foi processado com sucesso. </p> <p> `EXPIRED`: A assinatura não foi renovada e ultrapassou a data limite vigente. </p> <p> `ORDER_ERROR`: O ciclo de assinatura não foi executado devido a um erro no _place order_ do pedido. </p> <p> `PAYMENT_ERROR`: O ciclo de assinatura não foi executado devido a um erro no pagamento. </p> <p> `SKIPED`: Uma execução de ciclo de assinatura foi ignorada e a assinatura será executada no próximo ciclo. </p> <p> `SUCCESS_WITH_NO_ORDER`: Um ciclo de assinatura foi executado com sucesso e o pedido atrelado não possui itens. </p> <p> `SUCCESS_WITH_PARTIAL_ORDER`: Um ciclo de assinatura foi executado com sucesso e possui um pedido parcial atrelado. </p> <p> `RE_TRIGGERED`:  Uma re-execução de ciclo da assinatura foi acionada manualmente. </p> <p> `SCHEDULE_UPDATED`: A data da próxima execução de ciclo da assinatura foi atualizada. </p> 
| messageParsed | Mensagem retornada pelo checkout durante a execução da assinatura. |
| CreatedAt | Data da criação da assinatura.
| LastUpdate | Data da última atualização da assinatura. |
| ActiveSkus | SKUs ativos na assinatura. |

