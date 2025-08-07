---
title: 'Out-of-stock errors in marketplace integration orders'
id: s1i5OCcPFslrMkZJLDnfP
status: PUBLISHED
createdAt: 2021-07-28T19:50:13.475Z
updatedAt: 2023-03-28T14:41:11.666Z
publishedAt: 2023-03-28T14:41:11.666Z
firstPublishedAt: 2021-07-28T19:55:21.464Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: out-of-stock-errors-in-marketplace-integration-orders
legacySlug: out-of-stock-errors-in-marketplace-integration-orders
locale: en
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

When an order placed on a marketplace is not integrated with VTEX, an error message indicates the type of problem that has occurred. You can view the integration status of the order in your Admin, in **MARKETPLACE > Connections > Orders**. To view the error message, click on the order.

Error messages often refer to out-of-stock items. One of the simplest ways to check if a SKU is available is to perform a [shipping simulation](https://help.vtex.com/en/tutorial/simulacao-de-frete). The Shipping Simulator tool allows you to check the delivery conditions of the product without actually creating an order.

Out-of-stock errors can occur for different reasons. Here are the most common:

- **Items unavailable**: one or more SKUs in the order are unavailable, you must [update the number of SKUs in stock](https://help.vtex.com/en/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo).
- **Inactive SKU:** the SKU is not active, which prevents it from being integrated. Check the status of the item in your Admin, in _Catalog > Products and SKUs._
- **Negative inventory:** a [negative inventory balance](https://help.vtex.com/en/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0#why-is-my-inventory-negative) occurs when there are more reserved items than the total quantity in stock.
- **Item not in collection or trade policy:** check if the SKU is marked correctly in the collection or trade policy defined for the marketplace. Learn more in the article [Associating SKUs with a trade policy](https://help.vtex.com/en/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

After resolving the error, the order must be manually reprocessed. In your Admin, go to **MARKETPLACE > Connections > Orders** and click on the order with the error. Click on the **Actions** button and choose the **Reprocess** option.

<div class="alert alert-info">
If the error persists, please open a <a href="https://help.vtex.com/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM">VTEX support ticket</a>.
</div>

### Learn more

- [Minimum stock control for integrations](https://help.vtex.com/en/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Setting up the Alert Low Inventory](https://help.vtex.com/en/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
- [Setting up Future Inventory](https://help.vtex.com/en/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4)
