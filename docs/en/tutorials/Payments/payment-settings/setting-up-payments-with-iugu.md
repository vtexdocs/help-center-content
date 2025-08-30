---
title: 'Setting up payments with iugu'
id: 2c1nAo5iR6jG1UySzRB89t
status: PUBLISHED
createdAt: 2022-03-31T18:58:08.146Z
updatedAt: 2025-08-15T14:01:20.485Z
publishedAt: 2025-08-15T14:01:20.485Z
firstPublishedAt: 2022-03-31T19:22:31.835Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-iugu
legacySlug: setting-up-payments-with-iugu
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[iugu](https://partnerportal.vtex.com/iugu-156/p) is a VTEX partner solution that offers the following payment options through [transparent checkout](https://help.vtex.com/en/tutorial/what-is-transparent-checkout--2Y4ECegUmcYUggmck2GOwe): credit card, pix and bank slip. Furthermore, it is possible to carry out [recurrence](https://help.vtex.com/en/tutorial/how-to-set-up-recurrence-in-payment-conditions--6EGuoAytLqU2CqUuaI2GUW) and [split payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) operations (receivables and transactions) between marketplaces.

To add iugu to your store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __iugu__ in the search bar and click on the name of the provider.
4. In the __App key__ and __App token__ fields, enter the information provided by iugu ([Account ID and API Key](https://dev.iugu.com/docs/configurando-conector-iugu-na-vtex#localizando-id-da-conta-e-chave-api-no-painel-da-iugu)).
5. If you wish to modify the identification name to be displayed for the iugu provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. If you wish to use the bank slip as a payment method, in __Provider fields__, fill in the field __Prazo de vencimento do boleto (em dias)__ with the same value configured in your customer area on the iugu portal.
9. In __Tempo limite de validade do Pix (minutos)__, select the period available for the customer to make the payment through Pix.
10. Click `Save`.

## Setting up payment conditions

To process credit card, pix and bank slip payment methods with iugu in your store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on the desired payment method (credit card brand name, pix or bank slip).
4. Fill the __Condition name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. In __Process with provider__ select the iugu option.
7. For credit card payments, select whether you want to use an anti-fraud system by selecting the __Use anti-fraud solution__ option. It is also possible to configure whether credit card payments should be made [in full or in installments (with and without interest)](https://help.vtex.com/en/tutorial/condicoes-de-pagamento--tutorials_455#payment-in-full).
8. If you wish, you can also configure [special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
9. Click `Save`.

After following the indicated steps, iugu provider may take up to 10 minutes to appear at your store's checkout as a payment option.

> ⚠️ Before carrying out transactions by credit card, PIX or bank slip with iugu in your store, check whether these payment methods are already enabled in [your customer area on the iugu portal](https://dev.iugu.com/docs/configurando-conector-iugu-na-vtex#configurando-condi%C3%A7%C3%B5es-de-pagamento).

## Setting up split payment on the marketplace with iugu

To process payments on [marketplace with split payment](https://help.vtex.com/en/tutorial/payments-in-vtex-marketplaces--2kYOfWCZYweJkYl18bw9yD#payment-split) with iugu it is necessary to register sellers of your store with the same CNPJ (seller identification number) in the VTEX Admin and in your customer area on the iugu portal.

Find out more about creating sellers on VTEX at [Adding a seller](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) and access iugu documentation to create subaccounts (sellers) via [area of client](https://support.iugu.com/hc/pt-br/articles/4411276874779-Como-criar-uma-subconta-pelo-painel-iugu-) or [API](https://dev.iugu.com/docs/configurar-subconta-por-api).

### Enable payout split with iugu

To enable payout split with iugu in your store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. Type the name __iugu__ in the search bar and click on the name of the provider.
3. In __Details__, click on the `Edit` button.
4. In __Payment control__, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
5. Click `Save`.

> ⚠️ The payout split option is not available for use in a test environment.

After following the steps indicated, the payout split functionality with the iugu provider may take up to 10 minutes to be activated in your store.

> ⚠️ To define specific commissions for each seller in your store, access **Marketplace > Sellers> Management** in the VTEX Admin, select the desired seller and enter the commission values in **Commissions**.

## Setting up recurrence with iugu

To make [recurrence](https://help.vtex.com/en/tutorial/how-to-set-up-recurrence-in-payment-conditions--6EGuoAytLqU2CqUuaI2GUW) available as a special payment condition through iugu, it is necessary:

- Enable recurrence mode in the VTEX Admin.
- Configure credit card or bank slip payment methods in the VTEX Admin and iugu.
- Configure the [subscriptions](https://help.vtex.com/en/tutorial/how-to-configure-subscriptions--1FA9dfE7vJqxBna9Nft5Sj) functionality in your store.
