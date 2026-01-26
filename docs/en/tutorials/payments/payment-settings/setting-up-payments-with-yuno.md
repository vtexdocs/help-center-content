---
title: 'Setting up payments with Yuno'
id: h7PS0vDJJokqI9axZPNzE
status: PUBLISHED
createdAt: 2023-04-14T12:42:43.736Z
updatedAt: 2025-11-21T13:28:27.182Z
publishedAt: 2025-10-24T13:28:27.182Z
firstPublishedAt: 2023-04-14T13:21:45.782Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-yuno
legacySlug: setting-up-payments-with-yuno
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Yuno payment provider. With this provider, your store can make sales through ards (credit, debit, private label, cob-branded), notes payable, bank slips, PIX, PSE, among others.

To configure Yuno, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Yuno** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Yuno.
5. If you wish to modify the identification name to be displayed for the Yuno provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. En **Liquidación automática**, seleccione una de las siguientes opciones:
- **Utiliza comportamiento recomendado por el procesador de pagos**: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).
- **Liquidación automática inmediatamente después de la autorización del pago**: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.
- **Liquidación automática inmediatamente después del análisis antifraude**: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").
- **Desactivado**: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.

8. In **Provider Fields**, configure the fields **Affiliation Name**, **Account ID**, **Public API Key**, **Private Secret Key**, **Main Account Name**, **Main Account App key**, **Main Account App token**, **Soft Descriptor**, **Create Customer**, and **VTEX IO orderPlaced page URL** according to the provider's instructions.
9. Click `Save`.

To configure the payment methods to be processed by Yuno, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Yuno connector may take up to 10 minutes to appear at your store's checkout as a payment option.
