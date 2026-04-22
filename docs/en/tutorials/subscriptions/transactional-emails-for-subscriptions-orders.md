---
title: 'Transactional emails for subscriptions orders'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2025-10-24T14:47:50.280Z
publishedAt: 2025-10-24T14:47:50.280Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: transactional-emails-for-subscriptions-orders
legacySlug: transactional-emails-for-subscription-orders
locale: en
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

All communication with your customer about [Subscriptions](/en/docs/tutorials/how-subscriptions-work) will take place through the **Email Templates** module. Transactional emails related to subscriptions are fully customizable and are installed by default in the VTEX Admin.

To access transactional emails for subscriptions orders, check out the walk-through below:

1. In the VTEX Admin, go to **Store Settings > Email Templates > Templates**, or type **Templates** in the search bar at the top of the page.
2. Search for _Subscriptions_ in the search box, or use the filters.
3. Click on the card of the desired template to configure it.
4. Make the desired changes.
5. Clique `Save`.

You can also [create your own email template](/en/docs/tutorials/understanding-the-message-center).

## How your customer tracks their subscription orders

> ℹ️ In [My Account](/en/docs/tutorials/how-my-account-works), customers can only access their orders from the last two years.

Each action that occurs within the **Subscriptions** order flow contains a trigger that sends an email notifying your customer. After activating the subscription, your customer will receive emails with details of the status of each subscription order every time they perform an action.

It is not necessary to activate the email sending manually, since they are sent automatically according to each scenario included in **Email Templates**. However, if you wish, you can disable the sending of specific emails:

1. In the VTEX Admin, go to **Store Settings > Email Templates > Templates**, or type **Templates** in the search bar at the top of the page.
2. Search for _Subscriptions_ in the search box, or use the filters.
3. Click on the card of the desired template to configure it.
4. Uncheck the `Enable sending emails?` box, that is checked by default.
5. Click `Save`.

## Default email templates

The table below shows the default email templates for **Subscriptions**:

| **Nome do template** | **ID** | **Descrição** |
| --- | --- | --- |
| Subscriptions - New | `vtexcommerce-subscriptions-create` | Nova assinatura criada com sucesso.<br><br>Existe um período de 30 minutos entre a criação da assinatura e o disparo da notificação do template `vtexcommerce-subscriptions-create`. |
| Subscriptions - Edited | `vtexcommerce-subscriptions-update` | Assinatura atualizada com sucesso. |
| Subscriptions - Cancelled | `vtexcommerce-subscriptions-cancel` | Assinatura cancelada com sucesso. |
| Subscriptions - Skipped | `vtexcommerce-subscriptions-skip` | Pedido de assinatura “pulado” pelo cliente. |
| Subscriptions - Paused | `vtexcommerce-subscriptions-stop` | Assinatura pausada. Nenhum pedido de assinatura será criado até que a assinatura seja reativada. |
| Subscriptions Reactivated | `vtexcommerce-subscriptions-reactivated` | Assinatura reativada. A nova data de execução será recalculada e os pedidos voltarão a ser executados na data definida. |
| Subscriptions - Next Order | `vtexcommerce-subscriptions-reminder` | Lembrete de que a data da próxima compra do pedido de assinatura será em dois dias. |
| Subscriptions Expired | `vtexcommerce-subscriptions-expired` | Período de assinatura expirado. |
| vtexcommerce-subscriptions-neworder | `vtexcommerce-subscriptions-neworder` | Assinatura gerou um novo pedido. |
| Subscriptions - Item Unavailable | `vtexcommerce-subscriptions-partialorder` | Pedido de assinatura foi gerado parcialmente. Você pode ativar esse template quando a loja não tem todos os SKUs do pedido ou não tem a quantidade necessária de SKU em estoque. |
| Subscriptions - No Order | `vtexcommerce-subscriptions-noorder`| Pedido de assinatura não gerado. Você pode ativar esse template quando a loja não tem nenhum dos SKUs do pedido em estoque. |
| Subscriptions - Error | `vtexcommerce-subscriptions-failorder`| Pedido de assinatura não pode ser gerado. |
| Subscription - Payment Not Approved | `vtexcommerce-subscriptions-payment-not-approved` | Pagamento não aprovado do pedido de assinatura. |
