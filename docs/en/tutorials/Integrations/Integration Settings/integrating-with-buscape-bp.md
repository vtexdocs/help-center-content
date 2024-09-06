---
title: 'Integrating with Buscapé (BP+)'
id: tutorials_410
status: ARCHIVED
createdAt: 2017-04-27T22:06:11.212Z
updatedAt: 2021-08-16T13:39:50.468Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:23.878Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: integrating-with-buscape-bp
locale: en
legacySlug: integrating-with-buscape-bp
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

### First Steps

Several steps are essential for us to initiate the configurations.

1. [Contract the channel](/en/tutorial/configuring-logistics-for-a-marketplace).
2. Configure the [sales](/en/tutorial/configuring-a-marketplace-sales-policy/);
3. Configure the [logistics](/en/tutorial/configuring-logistics-for-a-marketplace) for this Sales Policy;
4. Get in touch with Buscapé and obtain the authtoken – Token for access to the API: thiago.rotondo@buscapecompany.com

### How to configure

1. Access the **Bridge** module;
2. Click on the **Marketplaces** tab;
3. In the Buscapé card, click on **Integrar**;
4. Complete the fields as detailed below;
5. Click on the **Salvar configuração** button. It will only be active if all configurations are correct.

>⚠️ Attention! For the trade policy it is necessary at least one bank slip or a credit card to be configured. That is, it is necessary to configure the payment methods for the specific sales channel.

### Fields

1. **Chave de Acesso à API**: Key provided by Buscapé itself (AuthToken) for identifying the Store on the Partner’s system.
2. **Id do Afiliado**: ID of the Affiliate to be created on OMS. In the case of Buscapé, we recommend entering `BSC`.
3. **Política Comercial**: ID of the Sales Policy to be used for the Buscapé partner.
4. **CNPJ:** fill in this field with your store's CNPJ. If this field is not filled, you will not be able to invoice the orders update their status in Buscapé.
5. **Título do anúncio:** In this field, you must choose the format of the name that your product will have in Buscapé.
6. **Enviar preço de boleto:**  If your product has benefits based on payment per bank slip, the promotional price will be sent.
7. **Domínio enviado no link do produto**: Field used to put together the link of the product to be displayed on the Buscapé site. (example: http://www.mitienda.com.br)
8. **Taxa de Divergência de Preço**: Rate of acceptance for discrepancies in the values of the order integrated. [Any order with a discrepancy between the selling price on the marketplace and the price that would have been calculated by the seller](http://help.vtex.com/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado/ "Any order with a discrepancy between the selling price on the marketplace and the price that would have been calculated by the seller")[will be compared with this value](http://help.vtex.com/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado/ " will be compared with this value"). If the discrepancy (as a percentage) is less than the value defined in this field, the order will be integrated. Otherwise, the order will be rejected and the storeowner informed.
9. **E-mails para notificações**: If an order experiences an error at the time of integration on VTEX, an e-mail will be sent, with the possible cause of this, to the email address(es) registered here.

After the configurations, the integration automatically sends all products associated to the trade policy determined for Buscapé.

### URLs

Integration with Buscapé requires the following URLs for its operation:

- Callback URL (to insert the order into VTEX)

```http://{accountName}.vtexcommercestable.com.br/api/buscapeintegration/event/order```

- Inventory URL (check inventory at VTEX)

```http://{accountName}.vtexcommercestable.com.br/api/buscapeintegration/stockkeepingunit/availability```
