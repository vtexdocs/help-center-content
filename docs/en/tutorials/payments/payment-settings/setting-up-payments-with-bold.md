---
title: 'Setting up payments with Bold'
id:
status: PUBLISHED
createdAt: 2026-01-26T00:00:00.000Z
updatedAt: 2026-01-26T00:00:00.000Z
publishedAt: 2026-01-26T00:00:00.000Z
firstPublishedAt: 2026-01-26T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-bold
legacySlug: setting-up-payments-with-bold
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Bold payment provider. With this provider, your store can make sales through Paga en línea con Bold.

To configure Bold, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Bold** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Bold.
5. If you wish to modify the identification name to be displayed for the Bold provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select or complete the fields **account_name** according to the provider's  instructions.
8. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the __+__ button.
3. Click on **Paga en línea con Bold**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, Bold may take up to 10 minutes to appear at your store's checkout as a payment option.
