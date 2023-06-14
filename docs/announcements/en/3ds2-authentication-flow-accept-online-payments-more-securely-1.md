---
title: '3DS2 authentication flow: accept online payments more securely'
id: 6UdTjjVU1AcEQ2aE3Ftxsl
status: PUBLISHED
createdAt: 2020-12-21T21:03:33.860Z
updatedAt: 2021-05-20T17:06:23.794Z
publishedAt: 2021-05-20T17:06:23.794Z
contentType: updates
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: 3ds2-authentication-flow-accept-online-payments-more-securely-1
locale: en
legacySlug: 3ds2-authentication-flow-accept-online-payments-more-securely
announcementImageID: ''
announcementSynopsisEN: 'The new protocol offers a more robust and modern process for verifying the end customer data'
---

3DS2 is a payment authentication flow that reduces the possibility of fraud due to a more robust verification process.

The 3DS2 flow brings a new authentication protocol: the system performs several sequences of data verification with payment processors and banks to ensure that the final consumer’s information is true.

### What has changed?

In the previous flow, users were redirected to the bank's page when completing the purchases on SmartCheckout.

There, users needed to install plugins and extensions to be able to confirm their data, which generated friction in the payment flow.

Now, the 3D2S flow can apply three possible authentication processes, which do not require the final consumers to be redirected from the checkout page:

- Password;
- Biometry;
- Code via SMS or email.

In this way, each issuing bank decides which verification process will be used.

### Main benefits

- __Greater security in the purchase process__: a more robust data verification.
- __Flow without redirect__: the user remains on SmartCheckout during payment. That is, it does not leave the store environment.
- __Positive impact on sales conversions__: less friction without redirection, more security with authentications, providing a better user experience and a higher approval rate due to the confidence generated.
- __It follows the rules for European E-commerce__: PSD2 regulation, which requires payments to be authenticated.
- __Liability Shift__: chargeback exemption in cases of fraud, according to additional criteria of the issuing banks and card networks.

### How it works

Initially, the 3DS2 flow will be available for the CieloV3, Adyen and Redsýs connectors. VTEX customers should contact both acquirers to confirm if it will be enabled. 

Then, the client should [open a ticket for VTEX](https://help.vtex.com/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM "open a ticket for VTEX") requiring the functionality's installation. Also, in this same ticket, it's importante to inform the connector and the accounts that will be enabled for 3DS2 flow.

To learn how to enable this flow with Adyen, see [this article](https://help.vtex.com/tutorial/adicionando-suporte-a-3ds-na-integracao-com-a-adyen--3DNZeC9qJaC2GMIw4mawYk?locale=en "this article"). To perform the same process with CieloV3, check out this [tutorial](https://help.vtex.com/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu "tutorial").
