---
title: 'How to integrate with Mercado Livre'
id: tutorials_416
status: DRAFT
createdAt: 2017-04-27T22:06:05.698Z
updatedAt: 2020-03-06T13:56:49.727Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.390Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrating-with-mercado-livre
locale: en
legacySlug: integrating-with-mercado-livre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

This tutorial will teach you step by step how to set up the integration of your store with __Mercado Livre__.

The tutorial is divided into four stages:

1. [Integration settings](/en/tutorial/integrating-with-mercado-livre#integration-settings)
2. [Template configuration](/en/tutorial/integrating-with-mercado-livre#template-configuration)
3. [Logistics configuration](/en/tutorial/integrating-with-mercado-livre#logistics-configuration)
4. [Integration authorization at the Bridge panel](/en/tutorial/integrating-with-mercado-livre#authorize-integration-at-the-bridge-panel)

Follow each of these steps in order for the integration to take place correctly.



## Integration settings

### First steps

The initial steps are essential for a successful configuration:

1. Set up a [commercial policy](/en/tutorial/configuring-a-marketplace-sales-policy/) to integrate with Mercado Livre.
2. Set up the [logistics](/en/tutorial/configuring-logistics-for-a-marketplace/) for this trade policy. This will be the logistics responsible for the delivery of orders made in Mercado Livre.
3. You should contact the `commercial@mercadolivre.com` email to create your Mercado Livre account and set the commercial details.

### Set up the Mercado Livre panel at VTEX Bridge

1. In the Admin menu, click on __Integrations__.
2. Click on __Settings__.
3. Look for the __Mercado Livre__ box and click __Integrate__.
4. Fill in the __fields__ displayed on the screen. Below, we will detail how to fill each field.
5. Click the __Save Configuration__ button.

### Field Detailing

&bull; __Id do afiliado__ (__Affiliate ID__): This field must be filled in with an [affiliate](/en/faq/what-is-affiliate) ID that does not exist in the OMS affiliate directory. The ID accepts only three digits and consonants. Suggestions: `MLB`,` MML` or `MRC`. If you have multi-domain integration settings, pay attention to the affiliate ID. This field should have a different value for each domain.

&bull; __Política comercial__ (__Trade policy__): ID of the trade policy that will be used for Mercado Livre. It is the products of this trade policy that will be sent to Mercado Livre.

&bull; __Tipo de anúncio__ (__Ad Type__): This field can be filled with *Clássico* ("Classic") or *Premium (12x sem juros)* ("Premium (12x without interest)"). You must choose what type of ad you want for your products in Mercado Livre. Each type of ad has a commission amount to be paid to Mercado Livre. To know the value of these commissions, contact Mercado Livre.

&bull; __Título do anúncio__ (__Ad Title__): In this field, you must choose the format of the name that your product will have in Mercado Livre. It's important to pay attention to the number of characters in the title. In Mercado Livre, there's a restriction of 60 characters.

&bull; __Descrição do produto__ (__Product description__): This field can be filled with *plain/text* or *html*. Descriptions with HTML __are not accepted__ for stores in Brazil and Argentina, being obligatory the choice of the *plain/text* option. For these countries, HTML tags will be ignored by Mercado Livre. For other countries, HTML customizations are still allowed. See the section __Template Configuration__ for the tags accepted by Mercado Livre.

&bull; __Associar produtos aos pick-up points cadastrados__ (__Associate products to the registered pick-up points__): Check this flag if you want your pickup points settings to be reflected in Mercado Livre. Please note that only the settings made in the [Pickup Points section](/en/tutorial/registering-pickup-points) of the __Logistics__ module are eligible for this flag.

&bull; __Taxa de divergência de preço (Percentual)__ (__Price divergence rate (Percentage)__): Rate of acceptance of an order's value divergence. Any order that has a divergence between the marketplace's selling price and the price determined by the seller [will be compared with this value](/en/faq/why-was-the-order-closed-with-the-wrong-price). If the percentage divergence is less than the value defined in this field, the order will be integrated normally. Otherwise, it will not be integrated and you will be [notified in the Bridge module](/en/tutorial/checking-integrations-in-bridge).

&bull; __Id da loja oficial no mercado livre__ (__ID of the official store in Mercado Livre__): If your store is eligible to be an official store in Mercado Livre, you must fill this field with your Mercado Livre store ID. This information can be obtained in your commercial contract with Mercado Livre. The ID usually consists of three or four numbers. Examples: __160__, __1406__.

&bull; __Estoque mínimo__ (__Minimum stock__): As communication between VTEX and Mercado Livre systems does not update some of the information in real time, the stock displayed in Mercado Livre may be out of time if compared to the actual inventory of the product in your store. In order to avoid non-stock sales, you must fill in this field with a minimum security inventory value. Thus, when the stock in Mercado Livre reaches this value, the ad will be paused in order to avoid sales of products without stock.

&bull; __Atributos omitidos no template do produto__ (__Hidden Attributes in the Product Template__): We will see below that in the template configuration for Mercado Livre, you may include the product attributes that you want to be displayed in the template. Setting this field allows you to omit attributes that you do not want to appear in Mercado Livre template.

>⚠️ The *Atualizar descrição do anúncio ("Refresh ad description"), Texto para avaliação automática do comprador ("Text for automatic buyer evaluation") and E-mail do afiliado ("Affiliate E-mail")* fields will be discontinued in the UI. Therefore, they do not need to be filled out. The APIs will continue to be active.

### Sending Product Attributes to Mercado Livre

<div class = "alert alert-danger">
This step is only required for stores that sell products like <strong>clothing, shoes and bags</strong>. If your store has these types of product, it's necessary to register their specifications. Go to <a href="https://help.vtex.com/en/tutorial/sending-clothes-shoes-and-bags-attributes-to-mercado-livre">this article</a> to learn how to perform such registration. If your store does not have these products, go directly to the <strong>Template configuration</strong> step.
</div>

__You've finished configuring the *first step* of the integration. Now let's go to the __Template Configuration__ step.



## Template configuration

>❗ For stores in Brazil and Argentina, **Mercado Livre does not accept HTML or CSS template customizations** (with the exception of the &lt;br&gt; tag for line breaks). For stores in other countries, Iframes, Scripts, Forms, Inputs, Meta, Object and Embed tags are not allowed.

In order for your product to be offered in Mercado Livre, it is necessary to configure the ad template where the product will be displayed. To set up this template, follow the step-by-step instructions below:

1. Access the **Message Center** module.
2. Search for the template **Bridge - integração Mercado Livre**.
3. Enter the product variables that you want to display in the template. The available variables are listed below.
4. Click **Save**.

Below, we list the variables available to be displayed in your Mercado Livre ad template:

``{{DESCRICAO}}``: Variable that returns the __description of the product__ registered in VTEX.

``{{IMAGENS}}``: Contains the link to the __main product picture__ registered in VTEX.

``{{TITULO}}``: Contains the __product name__. The product name will be displayed according to the format chosen in the __Ad Title__ field, set up in the first step of this tutorial, in the __Bridge__ panel.

``{{NOME_ATRIBUTO_PRODUTO}}``: Inserts into the template the __value__ of a specific product attribute. That way you need to tell which attribute you want to display. Example: To display the value of an attribute called "Technical detail", you must insert the variable `{{DETALHE_TECNICO}}` into the template. The variable must always be written in uppercase letters, replacing the spaces of the attribute name with underscore (\_), and also should not have accentuation.

If you want to include all attributes and attributes values in the template, you must include in your template the code described below. This is the structure that should be used to render all the attributes of the product and their respective values in the template:

``{{#each ATRIBUTOS}} {{NOME}} – {{VALOR}} <br> {{/each}}``

>ℹ️ If you want to hide some attribute in the template, you can do this in the **Bridge** panel by filling in the **Atributos omitidos no template do produto** field ("Attributes hidden in the product template") as explained in the **Set up the Mercado Livre panel at VTEX Bridge** section from the previous step.

__Great!__ You have completed the *second stage* of the integration! Now, we will set up the logistics for the delivery of orders made in Mercado Livre.



## Logistics configuration

The configuration of the logistics to meet the orders made at Mercado Livre has some peculiarities. __It is Mercado Livre who determines the type of freight that your store should set up__. The choice of this type of freight occurs due to the commercial agreement that your store made with Mercado Livre. Check with Mercado Livre which type of freight your store should set up.

The freights can be of __two types__:

### Mercado Envios 1 (ME1)

In the ME1 mode, __it is the store who performs the delivery of the order__. This means that the store is responsible for sending the products. Here's how to properly configure ME1 in VTEX:

1. At the time the purchase closing, Mercado Livre does not conduct real-time freight simulations at VTEX. The calculation of freight is carried out through a freight spreadsheet that you must send to Mercado Livre. This sending does not happen from VTEX. Contact Mercado Livre to find out more details about sending this freight worksheet.
2. Whenever an order is closed at Mercado Livre, VTEX will attempt to integrate this order into our OMS. Within the integration routine, the system performs a __freight simulation__ on VTEX to know which carrier should deliver the order. __Without the carrier data, the order can not be integrated__.
3. Since Mercado Livre has already performed the freight calculation with the values of the spreadsheet sent in the first step, there could be some difference between the value calculated by Mercado Livre and the one calculated in the freight simulation on VTEX. __This difference in values could lead to errors while integrating the orders__. To avoid this scenario, __we strongly recommend registering a free shipping promotion for Mercado Livre affiliate__. To learn how to create this promotion, [see our tutorial](/en/tutorial/configuring-a-promotion-for-a-marketplace/).
4. With free shipping, __there will be no competition between the freight value calculated by VTEX and the one calculated by Mercado Livre__. Thus, the information of the carrier that will make the delivery will be saved in the order and the integration will be successful.

Thus, you will have all the necessary information in VTEX to deliver the order.

### Mercado Envios 2 (ME2)

In the ME2 mode, __Mercado Livre is responsible for delivering the order__. Therefore, when an order is made with ME2 freight, the order will be integrated into VTEX without the freight value.

As delivery of the order will not be made by your store, the delivery type field in the order's JSON will be filled with the value `vtex:fob_xxxx`, where `xxxx` is the ID of your stock where the SKU was reserved. `FOB` is the acronym for *Free on board*. This type of delivery indicates that the process of sending the products will be the marketplace's responsibility.

In this mode, there are two ways of delivering the products. These ways are defined by your commercial agreement with Mercado Livre. Follow the steps below so that the order is correctly fulfilled by Mercado Livre:

#### Store takes the package to the delivery point determined by Mercado Livre

1. After the order is integrated with VTEX, access the order in the __OMS__ module.
2. On the order screen, look for the box with the title __ETIQUETA DE ENTREGA__ and click on the link with the name of the carrier that will make the delivery. This link opens a tab with the label that contains the delivery information.
3. Print the label and paste it into the delivery package.
4. Take the package to the delivery point informed by Mercado Livre.
5. Mercado Livre will send the products to the final customer.

#### Mercado Livre takes the products from your store's distribution center (Mercado Envios Coleta)

In this scenario, Mercado Livre gets the products directly from the distribution centers used by your store and delivers them to the final customer.

>⚠️ We do not recommend using the *Entrega a combinar* ("to be arranged") type. In closed orders with this type of delivery, as we do not have the delivery address information, the order will not be integrated with VTEX. For an order to be properly integrated, it must have the delivery information. Therefore, we always recommend using **Mercado Envios**.


### 


__That's it!__ You have finished the *third step*! Now you already have the necessary information to handle the freight of orders made at Mercado Livre. Let's move on to the final step: __Authorizing your integration__.



## Category and variations mapping

To go through this process, read the [category, variations, and attributes mapping article](/en/tutorial/category-variations-and-attributes-mapping). After doing that, just keep following the instructions below.


## Authorize integration at the Bridge panel

After completing the above configurations, you must authorize your integration with Mercado Livre. Follow the steps below:

>⚠️ Mercado Livre requires that the authorization is made by the **Master User** of the Mercado Livre account.

1. Access the __Bridge__ module.
2. Click on __Settings__.
3. On Mercado Livre card, click __Authorization__.
4. Click __Desejo me autenticar__ ("I want to authenticate").
5. You will be redirected to the Mercado Livre environment. Login with the __Master User__ of the account in Mercado Livre.
6. Still at the Mercado Livre environment, click the __Allow__ button.
7. You will be redirected back to VTEX.

__Congratulations! Now your store is integrated with Mercado Livre!__
