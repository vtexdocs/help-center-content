---
title: 'Mercado Libre Envios'
id: 4fbF0Glf0R2YUCxYof4aIL
status: PUBLISHED
createdAt: 2025-09-29T19:29:40.317Z
updatedAt: 2025-09-29T19:55:28.724Z
publishedAt: 2025-09-29T19:55:28.724Z
firstPublishedAt: 2025-09-29T19:55:28.724Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: mercado-libre-envios
legacySlug: mercado-libre-envios
locale: en
subcategoryId: 
---

The Mercado Libre integration provides logistics models that allow fast deliveries using the infrastructure of sellers or partners. [**Envios Flex**](#envios-flex) and [**Envios Turbo**](#envios-turbo) are the available options.  
Both options can be configured and managed through the VTEX Admin interface through **VTEX Admin > Marketplace > Mercado Libre > Preferences > Logistics.**  

> ℹ️ Mercado Libre defines what sellers and which of their offers are eligible to use **Flex** and **Turbo** shipping. 

## Envios Flex

**Envios Flex** is the option for **same-day** delivery. This means that orders placed before the cut-off time you set are delivered to the buyer on the same day. This option only works in specific urban areas, determined based on your warehouse address. 

### Activating Envios Flex 

To activate this shipping option, follow the steps below:

1. In VTEX Admin, go to **Marketplace > Mercado Libre > Preferences > Logistics > Envios Flex.**    
2. Click **Delivery windows.**    
3. Choose between the options **Same-day delivery** and **Next-day delivery.**   
4. Configure the following information:  
 - Delivery days  
 - Delivery hours
 - Shipping capacity  
 - Cut-off time
5. Click the `Save` button.  
6. In the **Coverage area** side tab, select the regions where you want to offer **Envios Flex**.  
7. Click the `Save` button.  

### Additional settings

For the **Envios Flex** option to work correctly, you must follow these steps after [activation](#activating-envios-flex):  

1. Create a [custom field](/en/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) in the [Categories](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf) module for each category where you want to apply **Envios Flex**.  The field must be created with the following specifications:

| **Field type** | **Field name** |**Field value**|
|:---:|:---:|:---:|
| CheckBox | Flex |Activate|

> ❗ The **type** and **name** must be exactly as shown in the table above, otherwise the shipping option won't work. 

2. After creating the field, you must enable it for each product eligible for the shipping option.

#### Deactivating Envios Flex

To deactivate the **Envios Flex** option, follow these steps:

1. In VTEX Admin, go to **Marketplace > Mercado Libre > Preferences > Logistics > Envios Flex.**  
2. Click the actions menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Click the **Deactivate Envios Flex** option.  
4. In the modal window that appears on screen, click the `Continue to Mercado Libre` button.  
5. In the Mercado Libre Seller Learning Center, deactivate the shipping option.  

## Envios Turbo

**Envios Turbo** is an extension of **Envios Flex**, and it will only work if [**Envios Flex**](#envios-flex) is activated. This is an **express** delivery option, where orders are delivered within **three hours** after the purchase. This option only works within a radius of up to eight kilometers (5 miles) calculated from the address of your warehouse.

**Envios Turbo** only applies to products with the following characteristics:  

| **Height** | **Width** |**Length**|**Weight**|
|:---:|:---:|:---:|:---:|
| 70 centimeters (27.7 inches) | 70 centimeters (27.7 inches) |70 centimeters (27.7 inches) | 30 kilograms (66 pounds)|

### Configuring Envios Turbo

To configure the **Envios Turbo** option, you must follow these steps:

1. Set the **delivery hours** by selecting at least three delivery time slots.   
2. Set the **Coverage radius.**  

> ℹ️ The times shown on the setup screen are fixed and can't be customized.

#### Activating Envios Turbo

To activate this shipping option, follow the steps below:

1. In VTEX Admin, go to **Marketplace > Mercado Libre > Preferences > Logistics > Envios Turbo.**  
2. Click **Delivery windows.**  
3. Select the delivery time slots.  
4. Set the **Maximum shipping.**  
5. Click the `Save` button.  
6. On the **Coverage radius**  side tab, select the distance radius where you want to offer **Envios Turbo.**  
7. Click the `Save` button.  

#### Deactivating Envios Turbo

To deactivate the **Envios Turbo** option, follow these steps:

1. In VTEX Admin, go to **Marketplace > Mercado Libre > Preferences > Logistics > Envios Turbo.**  
2. Click the actions menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.  
3. Click the **Deactivate Envios Turbo** option.  
4. In the modal window that appears on screen, click the `Continue to Mercado Libre` button.  
5. In the Mercado Libre Seller Learning Center, deactivate the shipping option.

