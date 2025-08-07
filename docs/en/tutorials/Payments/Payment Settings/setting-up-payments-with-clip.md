---
title: 'Setting up payments with Clip'
id: 2xtInjWMbY3N7bEiYdkfHO
status: PUBLISHED
createdAt: 2025-05-30T17:26:28.618Z
updatedAt: 2025-06-12T14:55:25.590Z
publishedAt: 2025-06-12T14:55:25.590Z
firstPublishedAt: 2025-05-30T17:46:56.723Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-clip
locale: en
legacySlug: setting-up-payments-with-clip
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Clip payment provider. With this provider, your store can make sales through Clip.

To configure Clip, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Clip** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Clip.
5. If you wish to modify the identification name to be displayed for the Clip provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Provider Fields**, select or complete the fields **Credencial publica**, **Credencial Privada**, **Personalizar pagos**, **Metodos de pago aceptados (debit,credit,cash,bank_transfer)**, **¿ Quieres aceptar tarjetas internacionales ?**, **Marcas de pago aceptados (visa,mastercard,amex,carnet,discover,diners)**, **¿ Aceptas 3 meses sin intereses ?**, **Monto mínimo de compra para 3 meses sin intereses**, **¿ Aceptas 6 meses sin intereses ?**, **Monto mínimo de compra para 6 meses sin intereses**, **¿ Aceptas 9 meses sin intereses ?**, **Monto mínimo de compra para 9 meses sin intereses**, **¿ Aceptas 12 meses sin intereses ?**, **Monto mínimo de compra para 12 meses sin intereses**, **¿ Aceptas 18 meses sin intereses ?**, **Monto mínimo de compra para 18 meses sin intereses**, **¿ Aceptas 24 meses sin intereses ?**, **Monto mínimo de compra para 24 meses sin intereses**, **Mostrar propinas**, and **Duración del checkout (horas)** according to the provider`s instructions.
8. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the __+__ button.
3. Click on **Clip**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you want, you can also [configure special payment conditions](/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Click on `Save`.

After following the indicated steps, Clip may take up to 10 minutes to appear at your store`s checkout as a payment option.
