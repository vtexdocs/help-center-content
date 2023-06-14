---
title: 'Sending products to Amazon'
id: 5xklf2wSdeztQh4iy5kJvD
status: PUBLISHED
createdAt: 2019-02-28T23:12:40.204Z
updatedAt: 2023-03-16T19:46:44.241Z
publishedAt: 2023-03-16T19:46:44.241Z
firstPublishedAt: 2019-02-28T23:13:35.624Z
contentType: trackArticle
productTeam: Channels
slug: sending-products-to-amazon
locale: en
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: amazon-integration
---

Once you have configured the initial integration settings, you can send products to the Amazon catalog. To speed up the process of cataloging products on Amazon and making them available for sale, you will need to map the characteristics of the products in your VTEX store to the characteristics of the same products in your Amazon store. To perform the mapping, you must:

1. [Download the Amazon general category template](#1-amazon-general-categories-template)
2. [Download the Amazon mandatory attributes template](#2-amazon-attributes-template)
3. [Pre-configure the catalog](#3-pre-configuring-the-catalog)
4. [Download the mapping template](#4-mapping-spreadsheet)
5. [Fill out the mapping template](#5-filling-in-the-mapping-spreadsheet)
6. [Upload the completed mapping template](##6-uploading-the-mapping-template)

## 1. Amazon general categories template

Amazon uses the [global categories](https://help.vtex.com/en/tutorial/configurando-a-categoria-global--tutorials_188) registered on the VTEX platform to map products. Therefore, it is important that the equivalence between the global categories in VTEX and the categories in Amazon is done correctly.

To learn about the categories accepted by Amazon, please download the [Amazon general categories template.xlsx.](https://drive.google.com/uc?export=download&id=1GC5Guic4k_8C2ZnEGQUoDqT2cdJzp-Ti) This template will be used for consultation purposes only.

## 2. Amazon attributes template

Amazon has reference attributes for certain product features that must be considered when mapping attributes.

To know which attributes are accepted by Amazon according to each column of the mapping template, please download the [Amazon attributes template.xlsx.](https://drive.google.com/uc?export=download&id=1UkcrfPopMg-cnrSDOF0qt51NRIXgzi0r) This template will be used for consultation purposes only.

In this template, each tab corresponds to a global subcategory on Amazon. When you click on a tab, the template displays the subcategories present within the selected global category.

## 3. Pre-configuring the catalog

Before mapping the products in your store, you must configure the following [fields for the product](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) you want to send to Amazon:

- [Global category](#global-category)
- [EAN](#ean)

### Global category

The integration uses [global categories](https://help.vtex.com/en/tutorial/configurando-a-categoria-global--tutorials_188) to identify your products and match them to Amazon's catalog. During the mapping process, the system matches each VTEX global category with Amazon's [general categories](#amazon-general-categories-template). This way, we send the products to the correct categories and with the necessary product attributes.

Therefore, it is required that all products in your catalog are sorted and [configured with the appropriate global category](https://help.vtex.com/en/tutorial/configurando-a-categoria-global), otherwise, you will be unable to send your products to Amazon.

When configuring a global category on the VTEX platform, please consider the Amazon global categories, as this information will be used when [filling out the Amazon mapping template](#5-filling-in-the-mapping-spreadsheet).

#### Configuring the global category

To configure a global category in the VTEX environment according to the global categories on Amazon, please follow the steps below:

1. In the [Amazon attributes template](#1-amazon-general-categories-template) find the category that will be used for your products.
2. In the [Amazon general categories template](#2-amazon-attributes-template) filter column I - **Cat-Amazon-General** and select the desired category.
3. In the [Amazon general categories template](#2-amazon-attributes-template), identify which category tree will apply to VTEX by viewing columns B, C, D and/or E.
4. In VTEX Admin, go to the *CATALOG*, module and select the **Products and SKUs** tab. 
5. Find the product by searching for the desired category in the search field.
6. Click on `Edit`.
7. On the product page, find the `VTEX global category` field.
8. Fill out the [VTEX global category](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global) field with the name of the category you found in step 3.
9. Click on `Save`.

#### Example of how to use the templates for consultation 

In the Amazon attributes template, we will use the **Health** category as an example:
![categoriageral01](//images.contentful.com/alneenqid6w5/154htyPg3K3IZ6Wxej3kek/a446c9815c249dda3084aa1773b76b3a/categoriageral01.JPG)

In the Amazon general categories template, filter column I (Cat-Amazon-General) by clicking on **Filter > Health > OK**.
![categoriageral02](//images.contentful.com/alneenqid6w5/2PTS1fxztRjYHaAicwVH7W/f44b94c30ca7401ec08a19c467ee8912/categoriageral02.JPG)

Following the previous example, filter columns B, C, and D in the **Health & Beauty > Personal care > Massage & Relaxation** tree.
![categoriageral03](//images.contentful.com/alneenqid6w5/1p0cIHz7bp8HHuzud1H4zE/e79bf00cbe09f7b1fb155730cfc401f8/categoriageral03.JPG)

Now that you have found the Amazon general category, go back to the Admin to [configure the VTEX global category](https://help.vtex.com/es/tutorial/configurando-a-categoria-global--tutorials_188) according to the Amazon general category. 

### EAN

Because Amazon's catalog is unique, Amazon requires that products shipped have an [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) code, so they can display products from all sellers in the storefront and in the checkout. Therefore, make sure your products have valid EAN codes registered before configuring the integration.

#### EAN exemption

However, there are situations in which [Amazon exempts the retailer from entering the EAN](https://sellercentral.amazon.com.br/gp/help/200426310). In this case, the exemption must be configured in both Amazon and VTEX. 

If Amazon has already granted EAN exemption for your store, please [submit a support ticket](https://support.vtex.com/hc/en-us) with the subject "Amazon - EAN exemption" to request VTEX to do the same. To obtain the EAN exemption, the integration must already be configured before you make the request via support ticket.

To find out if you are eligible to request EAN exemption, you must ensure that you fit into the following scenarios:

- Own brand or handcrafted products, as well as product kits.
- Products for which the manufacturer does not have a barcode. 
- Products that do not have an EAN code. Example: mobile phone accessories.
- Product kits/bundles. Example: shirts + belt

##### Tips for sending products with EAN exemption

After the EAN exemption has been requested and approved, with the definition of [Category](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3UYjVS03JbleGPh0Ckpic1?&utm_source=autocomplete) and [Brand](https://help.vtex.com/pt/tutorial/cadastrando-marcas--tutorials_1414), the product must be sent via integration with the exact same information approved on Amazon, such as:

- Brand name
- Accentuation 
- Uppercase and lowercase letters
- Approved category
- Product manufacturer number

It is important to ensure that the brand name is spelled the same on Amazon and that the product manufacturer number (a single field without repetition) is correct, preventing products from using the title and image of another product.

Amazon Brand Registry unlocks a suite of tools designed to help you develop and protect your brand, creating a better sales experience.

Whether you are selling a brand's products or your own branded products, Amazon must approve it before you can use its platform to list products. To register your own brand, please follow the instructions on [Amazon's website](https://brandservices.amazon.com/brandregistry/eligibility).

If you want to sell a product that is associated with another owner (creating a new ASIN), it is important to pay attention to the [approvals](https://sellercentral.amazon.com/gp/help/help.html/?itemID=G201844590&ref_=xx_G201844590_a_r0_cont_sgsearch).

## 4. Mapping spreadsheet

In this step, you will need to categorize product variations and attributes and send them to the marketplace. This information is sent using the mapping template, which establishes the equivalence between the categories, variations and attributes of your store and the standards adopted by Amazon.

Download the [Amazon mapping template.xlsx](https://assets.ctfassets.net/alneenqid6w5/4mNcXF4yS3160xUGgCZVQC/caf8cfc88b316bc9878000264e16e30b/Planilha_modelo.xlsx) and fill it out. This file will be submitted to Amazon afterwards.

## 5. Filling in the mapping spreadsheet

The template contains the following columns:

| Column | Name | Description |
| ---------- | ---------- | ---------- | 
| A | CategoryID | Category ID on VTEX |
| B | VariationTheme | The way the SKU varies according to its category on Amazon. When mapping products, the VariationTheme order of the categories is taken into account | 
| C | Type | There are two specification types: Variation and Information |
| D | VTEXSpecification | Name of the SKU field used in your VTEX store |
| E | AmazonSpecification | Name of the attribute accepted by Amazon |
| F | VTEXValue | Name of the value used in the SKU field on the VTEX platform |
| G | AmazonValue | Name of the values accepted by Amazon |

<div class="alert alert-info">
The Amazon mapping template is case-sensitive.
</div>

Follow the steps below for each product:

1. Fill in the **CategoryID** column with the category code.
2. Fill in the **VariationTheme** column with the information about color and/or size, if you have a variation registered. The first **VariationTheme** in the category is used to submit the fields for the products/SKUs. Follow this pattern:
   * If the product has differences in terms of size and color, use *SizeColor*. 
   * If the product has differences in terms of color, use *Color*.
   * If the product has differences in terms of size, use *Size*.
3. Fill in the **Type** column with a specification type:
   * **Variation**: type intended to differentiate between SKUs. If the **VariationTheme** column is filled in, the **Type** column must always be filled in as *Variation*.
   * **Information**:  type intended to complement information about the products. If the **VariationTheme** column is filled in, the column **Type** must always be filled in as *Information*.
4. Fill in the **VTEXSpecification** column with the name of the product attribute in your VTEX store. 
5. Fill in the **AmazonSpecification** column with the name of the product attributes on Amazon.
6. Fill in the **VTEXValue** column with the values of the product attribute on VTEX.
7. Fill in the **AmazonValue** column with the attribute values accepted by Amazon. To view the values accepted by Amazon, go to the [Amazon required attribute spreadsheet](#2-amazon-attributes-template) and look for the `VALORES VÁLIDOS` tab.

<div class="alert alert-warning">
Depending on the category, the <b>VariationTheme</b> values may be similar. There are categories in which <b>VariationTheme</b> can be: <i>SizeColor</i>, <i>Color</i> e <i>Size</i>, while there are other categories in which it can be: <i>ColorSize</i>, <i>Color</i> e <i>Size</i>. The difference is in the order. In <i>SizeColor</i>, the checkboxes on the product page will be sorted by size and color, while in <i>ColorSize</I> they will be sorted by color and size. Pay attention to the values valid for each category that will be mapped. 
</div>

### Example

| CategoryID | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 212 | SizeColor | Variation | Size | Size | S | S |
| 212 | SizeColor | Variation | Size | Size | M | M |
| 212 | SizeColor | Variation | Size | Size | L | L |

## 6. Uploading the mapping template

After filling in the spreadsheet, go to Integrations in the Admin menu:

1. Access the Admin.
2. In the *MARKETPLACE*, module, click on **Integrations**. 
3. Select **Settings**.
4. Select the Amazon card and click on the `gear icon` <i class="fas fa-cog"></i>.
5. Next, click on `Upload mapping template`.
6. Select the completed mapping template and click on `Upload file`.

If no error has occurred during the process, the products will be sent to Amazon with their respective attributes.  

## 7. Automatic matching

Whenever a [SKU](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) with a registered [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) is sent to Amazon, the marketplace performs a matching process, combining offers for the same product using its EAN.  

The EAN added on VTEX is used to match the corresponding [ASIN](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) (Amazon Standard Identification Number) on Amazon. This matching happens automatically; however, it may not be done correctly.  

<div class= "alert alert-info">
We recommend that the seller review all products in the `Processed with warning` status. Products that do not have a matching EAN and ASIN need to be resent.  
</div>

Follow the steps below to filter products that were not processed correctly:  

1. In the VTEX Admin, go to __Marketplace > Integrations > Products__.  
2. Filter the products with the Affiliate field filled in with Amazon and the Status field with the value Warning. You will see the products that have not been processed with the matching EAN and ASIN and will be able to resend them.  

