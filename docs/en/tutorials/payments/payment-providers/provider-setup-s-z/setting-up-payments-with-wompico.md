---
title: 'Setting up payments with WompiCo'
createdAt: 2026-11-27T00:00:00.000Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-wompico
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the WompiCo payment provider. Through this provider, your store can make sales using WompiCo.

To configure WompiCo, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **WompiCo** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click **Authorize via OAuth**. At this point, you will be redirected to the provider's page, where you must access your account and authorize the connection of VTEX to your WompiCo account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the WompiCo provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **WompiCo**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/docs/tutorials/special-conditions).
7. Click `Save`.

After following the indicated steps, WompiCo may take up to 10 minutes to appear at your store's checkout as a payment option.
