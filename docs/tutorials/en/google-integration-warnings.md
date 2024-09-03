---
title: 'Google integration warnings'
id: 4BC0Epit2hACKbkBSqDR2A
status: PUBLISHED
createdAt: 2024-07-01T15:16:46.324Z
updatedAt: 2024-08-12T21:09:51.480Z
publishedAt: 2024-08-12T21:09:51.480Z
firstPublishedAt: 2024-07-01T16:13:33.089Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: google-integration-warnings
locale: en
legacySlug: google-integration-warnings
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

When integrating a VTEX store with Google Shopping, the seller must complete the [Sending products to Google Shopping](https://help.vtex.com/en/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/5L5LnccDCj5lJk8H95GQ82) process. Google may or may not approve these products.  

## Product integration status

The integration status is an informative message about the status of the seller's products with the Google Shopping integration. You can find three categories of messages: **error messages, warning messages, and success messages.**  

To check the product integration status, go to the VTEX Admin **Marketplace > Connections > Products**, or type **Products** in the top search bar.  

The table below shows which messages belong to which status:  

| **Status** | **Message** | **Details** | **Impact on the offer** |
|:---:|:---:|:---:|:---:|
| **Processed with error** | **SKU from `accountName` was not integrated.** **We noticed some problems** | Inactive product or SKU, Invalid price and SKU out of stock. | If the adjustments are not made, the products will not be integrated.|
| **Processed with warning** | **SKU from `accountName` integrated. See offer. But we noticed some missing data** | EAN/UPC and manufacturer code, Size, Color, Gender and Age group. |  If applicable to the product and required data is missing, the offer may have low visibility or be rejected. |
| **Processed with success** | **SKU from `accountName` integrated. See offer. Add following data to increase offer visibility** | [Product Highlights](https://support.google.com/merchants/answer/7052112?hl=pt-BR#zippy=%2Coutros-requisitos%2Ccomo-formatar-os-dados-do-produto:~:text=produtos%20s%C3%A3o%20veiculados.-,Opcional%3A,-envie%20o%20atributo) | If applicable and if the optional attributes indicated by Google are met, the offer can improve visibility. |

## Completing required fields for Google

When a product has the status **Processed with error or Processed with warning**, it means that one or more of the required data for integrating the catalog with Google Shopping has not been completed or configured.  

Below are the required fields and how to complete them:  

**Price:** Required field that must be completed by entering the price type you want to display in Google Shopping.
To identify the SKU price integration error with Google, see the documentation [Checking integrations](https://help.vtex.com/en/tutorial/verificando-integracao-no-bridge/#preco).  

**Availability:** Required field. If the integration of a SKU shows an error, see [Inventory management](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139) and [Warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).   

<div class=”alert alert-info”>
A product description differs from the title or product name.
</div>  

**EAN/UPC:** Required field in the [Catalog module](https://help.vtex.com/en/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) that must be completed with the SKU's unique identification code (barcode) with up to 13 numeric characters.  

**Manufacturer code:** Required field in the [Catalog module](https://help.vtex.com/en/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe) that must be completed with the code provided by the manufacturer to identify their product. If a product has a specific code, this field must be completed.  

<div class=”alert alert-info”>
The codes EAN/UPC and Manufacturer's code are required when selling manufactured products. See when to apply the <a href https://support.google.com/merchants/answer/6324461?hl=pt-BR&ref_topic=6324338&sjid=10867212756007821438-SA>EAN/UPC</a> or the <a href https://support.google.com/merchants/answer/6324482?hl=pt-BR&ref_topic=6324338&sjid=10867212756007821438-SA>Manufacturer's Code</a> to a product.
</div>   

**Size:** Required field only for clothing products that correspond to the category [ID1604](https://support.google.com/merchants/answer/6324492?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) and footwear that correspond to the category [ID187](https://support.google.com/merchants/answer/6324492?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) on Google. If applicable to your product, enter the SKU size.  

The Size field is a [custom field](https://help.vtex.com/en/tutorial/criando-um-campo-de-produto--tutorials_106) and must be created by the seller. See below the field name and type.  

|**Field name**|**Field type**|
|:---:|:---:|
| Size | Text |

This field type supports alphanumeric values such as ** S, M, L, XL, 9.5, 10, 6.5, 3.5**.

**Color:** Required field only for clothing items and accessories that correspond to [category ID166](https://support.google.com/merchants/answer/6324487?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) on Google. If applicable to your product, enter the SKU color.  

The Color field is a [custom field](https://help.vtex.com/en/tutorial/criando-um-campo-de-produto--tutorials_106) and must be created by the seller. See below the field name and type.  

| **Field name** | **Field type** |
|:---:|:---:|
| Color | Text |

This field type supports alphanumeric values such as **Green, Black, Yellow, Pink**.

<div class=”alert alert-info”>
Each SKU only allows one color.
</div>   

**Gender:** Required field only for clothing items and accessories that correspond to [category ID166](https://support.google.com/merchants/answer/6324479?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1) on Google. If applicable to your product, enter the SKU gender.  

The Gender field is a [custom field](https://help.vtex.com/en/tutorial/criando-um-campo-de-produto--tutorials_106) and must be created by the seller. See below the field name and type.  

| **Field name** | **Field type** | **Field value** |
|:---:|:---:|:---:|
| Gender | Combo | Male, Female and Unissex |

This field requires entering predefined values. Only the values listed under field value will be accepted by the Google integration.

**Age Group:** Required field for clothing items and accessories that correspond to [category ID166](https://support.google.com/merchants/answer/6324463?sjid=6190195010935556339-SA&visit_id=638479454885115656-3876849034&rd=1#:~:text=Veja%20a%20seguir%20os%20valores%20aceitos%20para%20este%20atributo%3A) on Google. If applicable to your product, enter the SKU age group.  

The **Age group** field is a [custom field](https://help.vtex.com/en/tutorial/criando-um-campo-de-produto--tutorials_106) and must be created by the seller. See below the field name and type.  

| **Field name** | **Field type** | **Field value** |
|---|---|---|
| Age Group | Combo |Newborn (up to 3 months old), Infant (3 to 12 months old), Toddler (from 1 to 5 years old), Kids (5 to 13 years old) and Adult (13 years old or more)|

This field requires entering predefined values. Only the values listed under field value will be accepted by the Google integration.

