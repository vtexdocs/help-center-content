---
title: 'Register payment and anti-fraud providers'
id: tutorials_444
status: PUBLISHED
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2024-01-22T20:37:11.273Z
publishedAt: 2024-01-22T20:37:11.273Z
firstPublishedAt: 2017-04-27T23:03:24.823Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: registering-gateway-affiliations
locale: en
legacySlug: registering-gateway-affiliations
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

VTEX allows you to set up different providers: gateways, acquirers, sub-acquirers, [orchestrators](https://www.y.uno/br), [PSPs](https://en.wikipedia.org/wiki/Payment_service_provider), and more. These allow you to provide your customers with different payment methods and conditions and antifraud protection services. Previously, these settings were referred to in our system as "gateway providers".

The provider management screen allows you to:

- [Add new providers](#adding-providers)
- [View added providers](#viewing-added-providers)
- [Edit provider settings](#editing-provider-settings)

![interface_provedor_EN_1](https://images.ctfassets.net/alneenqid6w5/6721j5gbs4JkxAFJ9QPQve/7a033eb73b124608c07471301501da64/artigo_interface_provedor_EN_1.jpg)

## Adding providers

To add a new payment or antifraud provider to your store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. Click `New Provider`.
3. Click on your preferred payment provider.
4. Complete the __App key__ and __App token__ fields with the information supplied by the payment provider.
5. If a warning message is displayed indicating that you need to install the app, click the __Install App__ button and follow the installation instructions. This message is only displayed for some gateway provider types. 
6. Click `Save`.

>ℹ️ If there are other fields to be completed besides App key and App token (Step 6), the gateway provider must be configured according to the specific tutorial. For more information, see the [Payment Settings](https://help.vtex.com/en/subcategory/payment-settings--3tDGibM2tqMyqIyukqmmMw) subsection.

>❗ The credentials used to complete the App key and Appn token fields must be supplied by the payment provider to identify the store. [Credentials generated in the Admin](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) starting with `vtexappkey-` should be used.

To configure the payment methods that will be processed by your chosen payment provider, read [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

To set special conditions for payment methods, read [Configuring payment special  conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).

![interface_provedor_EN_2](https://images.ctfassets.net/alneenqid6w5/2uzCrSICV4zlbieq13Vky0/06ebd4ed620be2fd6a2ea7f3b61e25e7/artigo_interface_provedor_EN_2.JPG)

## Viewing added providers

The main provider management screen, available in the VTEX Admin under __Store Settings > Payments > Providers__, displays all the payment or antifraud providers in a store. To allow quick access to information on specific providers, you can search or use filters.

### Searching for providers

To search for providers by name, go to the provider management page and enter the name of the provider you want to find.

![interface_provedor_EN_3](https://images.ctfassets.net/alneenqid6w5/1AVxMc8gzpBLTaoOM3DqJt/1c93dc9bbf26acf87e54224c5471407f/artigo_interface_provedor_EN_3.JPG)

### Filtering providers

To select the providers using filters, go to the provider management page and apply one or more of the filters shown below:

- __Name__: Select the payment provider using the name by checking the box or using the menu search bar.

![interface_provedor_EN_4](https://images.ctfassets.net/alneenqid6w5/3HWuAtg2Ei867PMhqqXTpZ/c5e5aa3880b070e45a891d477906b78d/artigo_interface_provedor_EN_4.JPG)

- __Type__: Select to display payment providers, antifraud providers, or both.

![interface_provedor_EN_5](https://images.ctfassets.net/alneenqid6w5/34wou6AALCHGCAMSufWpxZ/2dde50a266e104a6f1652e7d7294d560/artigo_interface_provedor_EN_5.JPG)

- __Environment__: Select the providers by type of operating environment (production or test).

![interface_provedor_EN_6](https://images.ctfassets.net/alneenqid6w5/36BloW94uLYLN7qGFO1HeP/bb0b07f72dac4a7b01f5e94aa388899c/artigo_interface_provedor_EN_6.JPG)

>❗ To clear the applied filters and see all the providers in the store again, click the `Clear All` button.

## Editing provider settings

To edit the settings of existing payment or antifraud providers in the store, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. Click the desired payment or antifraud provider.
3. On the provider configuration screen, click `Edit`.
4. Make the necessary changes and click `Save`.

![interface_provedor_EN_7](https://images.ctfassets.net/alneenqid6w5/49bqIpjzfjB6VGrjwMiYEK/6dffc24a68b01dd43309f119907ed1d0/artigo_interface_provedor_EN_7.JPG)

>❗ Before changing the provider's settings, such as authorization details, processing mode, or refund type, ensure the new information entered will not affect your store's performance.

