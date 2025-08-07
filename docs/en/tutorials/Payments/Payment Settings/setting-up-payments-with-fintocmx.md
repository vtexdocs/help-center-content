---
title: 'Setting up payments with FintocMX'
id: 7t2zlQouUitrKupdfEpJyw
status: PUBLISHED
createdAt: 2024-12-11T18:03:58.871Z
updatedAt: 2024-12-11T18:18:47.441Z
publishedAt: 2024-12-11T18:18:47.441Z
firstPublishedAt: 2024-12-11T18:18:47.441Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fintocmx
legacySlug: setting-up-payments-with-fintocmx
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the FintocMX payment provider.

Through this provider, your store can make sales using different payment methods, such as Fintoc.

To configure FintocMX, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **FintocMX** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account FintocMX.
5. If you wish to modify the identification name to be displayed for the FintocMX provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select or complete the fields **Secret Key** according to the provider`s instructions.
8. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click on __Fintoc__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click `Save`.

After following the indicated steps, FintocMX may take up to 10 minutes to appear at your store's checkout as a payment option.
