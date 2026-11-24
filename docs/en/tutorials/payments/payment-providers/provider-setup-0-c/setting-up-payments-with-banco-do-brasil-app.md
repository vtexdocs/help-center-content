---
title: 'Setting up payments with Banco do Brasil App'
id:
status: PUBLISHED
createdAt: 2022-11-21T00:00:00.000Z
updatedAt: 2022-11-21T00:00:00.000Z
publishedAt: 2022-11-21T00:00:00.000Z
firstPublishedAt: 2022-11-21T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-banco-do-brasil-app
legacySlug: configurar-pagamento-com-banco-do-brasil-app
locale: en
subcategoryId:
---

At VTEX, it is possible to integrate with the Banco do Brasil App provider. With this provider, your store can make sales through __Pague com BB Pay__.

To configure Banco do Brasil App, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Pague com BB Pay__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the __App key__ and __App token__ fields with data provided by your account Banco do Brasil App.
5. If you wish to modify the identification name to be displayed for the Banco do Brasil App provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In __Provider Fields__, complete the field __Número do Convênio BB Pay__ according to the provider's instructions.
8. Click `Save`.

## Setting up Pague com BB Pay payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click the `+` button.
3. Click __Pague com BB Pay__ option.
4. On the configuration page, activate the condition by clicking __Status__.
5. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
6. If necessary, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions).
7. Click `Save`.

After following the indicated steps, Pague com BB Pay may take up to 10 minutes to appear at your store's checkout as a payment option.
