---
title: 'Integrate with Carrefour'
id: 1Qgdsh2o0QAocUyoUaSqSW
status: DRAFT
createdAt: 2017-05-10T16:54:21.574Z
updatedAt: 2020-03-06T13:56:49.855Z
publishedAt: 
firstPublishedAt: 2017-05-10T19:07:44.997Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integrate-with-carrefour
locale: en
legacySlug: integrate-with-carrefour
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Before setting up the integration of your store with Carrefour, you must check the two topics below:

- **Criação da loja no Carrefour**: upon closing the partnership agreement with Carrefour, request the creation of your store on Mirakl;
- **Tenho multiloja (loja A e loja B)**: for multistores, two environments must be created with Carrefour: one for store A, and another for store B. Carrefour enables creating sub-stores. However, when we developed the integration, we chose not to use this system in order to avoid that a product is sent to one store and then, on Carrefour’s platform, it is marked to be sold in all multistores, even if on the VTEX platform the product is set up to be sold in only one multistore.  This way, we avoid orders with unavailable SKU errors.

To set up the integration, first you must get the Mirakl API key. This key is used in the communication between VTEX and Carrefour.

If you do not know where this key is placed, log on to Carrefour's platform using the **Master** user.

On the upper right-hand corner, click on the e-mail (the same that you used for logging on to Carrefour), and then click on the **Chave da Api** on the menu placed on the left side of the screen.

The key that appears on the screen is the information that you will need to register the integration in the VTEX Bridge module.

![Carrefour1](https://images.contentful.com/alneenqid6w5/3J1VMlsGsMswagSeG2y0EK/d054fac671b13f5dca7f627aa5121c97/Carrefour1.png)

### Configuring integration in Bridge

On the VTEX platform, follow the steps below:

1. Access the **Bridge** module;
2. Click on the **Marketplace** tab;
3. On Carrefour's card, click on the **Integrar** button. 

The following options will appear:

- **Integração ativa**: when marked as “Yes,” it will enable the export of products, prices, inventories, tracking and orders. when marked as “No,” the integration will be disabled, and the affiliate and the permissions for access to Carrefour will be erased; 
- **E-mail de notificação**: E-mail of the person responsible for following the integration with Carrefour;
- **ShopKey**: Access key generated in Carrefour’s integration portal;
- **Taxa de divergência**: Ratio for acceptance of differences in value for the order included. Any order with a difference between the Marketplace selling price and the price to be calculated by the Seller will be compared to this value. If the difference (in percentage terms) is less than the value entered in this field, the order will be included. Otherwise, the order will be denied and the retailer will be informed;
- **Política comercial**: ID of the sales policy to be used for the partner.
- **Mapeamento de SLA de tipo Normal:** Here you must enter [type of carrier](/en/tutorial/how-does-the-type-of-delivery-work) VTEX that you want to use for `Normal` delivery.
- **Mapeamento de SLA de tipo Expressa:** Here you must enter [type of carrier](/en/tutorial/how-does-the-type-of-delivery-work) VTEX that you want to use for `Express` delivery.
- **Mapeamento de SLA de tipo Econômica:** Here you must enter [type of carrier](/en/tutorial/how-does-the-type-of-delivery-work) VTEX that you want to use for `Economical` delivery.
- **Mapeamento de SLA de tipo Agendada:** Here you must enter [type of carrier](/en/tutorial/how-does-the-type-of-delivery-work) VTEX that you want to use for `Scheduled` delivery.

>⚠️ Warning: you must fill at least one of the SLA mapping fields. If none of them is filled, it will not be possible to simulate freight at VTEX and, consequently, the orders made at Carrefour will not be integrated. Also, it will not be possible to save the integration record without any of the fields being filled.

After completing the setup of this screen, click on the **Salvar Configuração** button. 

### How the integration works for product, stock and price

Carrefour works with the integration of products and offers. In the first case, a batch is sent with various products; in the second case, a batch is sent with several offers.

When the product is indexed, a notification is sent to Carrefour's integration, which receives and stores it.

Each 10 minutes, a worker is run to check all notifications and verifies whether the product is already listed with Carrefour. If the product has not been listed, the integration will send a product notification (product information) and an offer notification (price information and SKU inventory).

If the product has been listed, the integration will send only an offer notification. 

The integration generates a product batch and an offer batch, sending these two batches to Carrefour, which will issue a batch ID. These batches will also be processed, and it will be necessary to search for the results of batch processing to find out any errors in the product or offer.

Three minutes after sending the batches, the integration will search for the results of batch processing to know whether the processing was successfull, or if any errors were found.  Then, the integration will send this information to Bridge. 

A product whose processing was successful will not necessarily be available for sale on Carrefour's website.  There is also another process for approval of products that is carried out by the Carrefour team.

### How the order integration works

Each 5 minutes, the integration searches for new orders in Carrefour’s API in order to import them to VTEX. 

Orders whose payments have not been confirmed by Carrefour will not be imported to VTEX, since Carrefour will only make available data regarding the delivery of the product after the payment is acknowledged.  To import the order to VTEX, the delivery information is required. 

When the integration searches for the product in Carrefour, before the importing, it verifies whether the SKUs of the order are available for sale in accordance with Carrefour’s sales policy, as well as if the SKU exists at VTEX, since Carredour allows registering SKUs manually in its platform.  However, **não recomendamos o cadastro manual!**.

Finally, the existence of an order delivery SLA is checked. 

If an error occurs during the integration of the order, this information is sent to Bridge, where it is possible to view the error. After correcting the error, the order just has to be reprocessed.  

When an order is reprocessed, a maximum of 5 attempts to integrate the order with the store should be made within a period of 15 minutes. This means the reprocessing results may take up to 15 minutes to appear on Bridge. 

### Order cancelation information

Carrefour does not make available the cancellation of the order directly through the integration API. When an order is cancelled at the store, we send a message to Carrefour’s integration API, although this does **not** mean that the order will be cancelled. To confirm the cancellation of the order, a contact with Carrefour is required.

### Information about tracking and delivered order

The information regarding the **nota fiscal**, **tracking number** and **pedido entregue** to the customer are forwarded to Carrefour as they arrive to the VTEX platform. 
The information on **tracking number** and **pedido entregue**, for example, must be sent to OMS. Only then the integration will be able to notify Carrefour.

### Consulting freight

Carrefour allows shipping to be checked directly with VTEX. To do so, the shipping URL must be informed.

URL: http://portal.vtexcommercestable.com.br/api/carrefourintegration/pub/{STORENAME}/freight
Replace {STORENAME} with the accountname of your store at VTEX.

In the absence of the shipping URL, Carrefour will use its own shipping list, which will probably be different from that registered in your store at VTEX.
