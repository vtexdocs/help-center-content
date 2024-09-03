---
title: 'Mapping categories, brands and specifications for the marketplace'
id: tutorials_1521
status: PUBLISHED
createdAt: 2017-04-27T21:56:09.345Z
updatedAt: 2022-10-31T15:54:10.443Z
publishedAt: 2022-10-31T15:54:10.443Z
firstPublishedAt: 2017-04-27T23:03:50.588Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: mapping-categories-and-brands-for-the-marketplace
locale: en
legacySlug: mapping-categories-and-brands-for-the-marketplace
subcategoryId: 24EN0qRBg4yK0uusGUGosu
---

When a store acts as a marketplace, it is important to remember that the sellers' catalogs have a completely independent structure. In order to make definitions between both catalogs compatible, [categories](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), [brands](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) and [specifications](https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) have to be mapped when sellers:

- Send their products for the first time  
- Send products with data that has not been mapped before  

This allows entering the products sent by the seller with equivalent information in the marketplace catalog. It is important to note that sending a new item whose information is not yet mapped does not modify values already mapped in the marketplace. To map brands, categories, and specifications:

 1. In the *Marketplace* section of your admin, go to the __Sellers__.  
 2. Click __Categories and brands__.  
 3. Click __New mapping__.  
 4. Select a seller from the dropdown and click __Add__.  
 5. For the seller that was added to the panel:  
  a. [Map the categories](https://help.vtex.com/en/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapping-categories).  
  b. [Map the brands](https://help.vtex.com/en/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapping-brands).  
  c. [Map the specifications](https://help.vtex.com/en/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapping-specifications).  
 6. Click __Update mapping__.  

## Mapping Categories
After the seller sends the products to the marketplace, the marketplace has to map the categories. Matching between marketplace and seller categories is done through a template.  

### Using the template
You can download the updated template by clicking the Download current mapping table button in the seller you added to the Categories and brands page. The template contains the following columns: 

| Column | Name                               | Description                                                                                                                                            |
|--------|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| A      | Marketplace categories             | This is the category name in the VTEX marketplace. The number in square brackets is the marketplace category ID.                                       |
| B      | Categories sent by seller          | This is the category name in the seller's catalog. If the mapping has not been done before, this column will have empty cells.                         |
| C      | Unmapped categories sent by seller | Seller categories that have not been mapped yet. If this column is empty, it means that the seller has not sent their products to the marketplace yet. |

To complete the template:  

1. Check all the categories in __column A__. These are the values that you will match with the seller's categories from column C in step 2.  
2. Fill __column B__ with the matching category from __column C__.   
3. Repeat the process until __column C__ is empty.  
4. Save the template __XLS file__.  
5. In *Categories mapping*, upload the updated template using the __Change categories mapping button__.   

>ℹ️ If the program you used for opening the template uses semicolons (“;”) as separators, you have to replace them with commas (“,”) before importing the file.

### Example
In this example, we downloaded the current template, which has the following values in the columns:

| Marketplace categories                  | Categories sent by seller | Unmapped categories sent by seller |
|-----------------------------------------|---------------------------|------------------------------------|
| [3] Women \| [2] Accessories \| [8] Bag |                           | <br>Jeans / Shorts                 |
| [3] Women \| [28] Jeans                 |                           | Beach / Bags                       |
|                                         |                           | Jeans / Bermudas                   |

We will map the seller's categories, trying to find the best possible match with the existing marketplace categories. After the mapping is done, the template will look as follows:

| Marketplace categories                  | Categories sent by seller | Unmapped categories sent by seller |
|-----------------------------------------|---------------------------|------------------------------------|
| [3] Women \| [2] Accessories \| [8] Bag | Beach / Bags              | <br>                               |
| [3] Women \| [28] Jeans                 | Jeans / Shorts            |                                    |
| [3] Women \| [28] Jeans                 | Jeans / Bermudas          |                                    |

>ℹ️ Note that more than one category in the seller's catalog fell in the same marketplace category (Women / Jeans). In that case, duplicate the row in **Marketplace categories** and paste the values from <i>Unmapped categories sent by seller</i> into each duplicated row.

## Mapping Brands
After the seller [sends the products to the marketplace](https://help.vtex.com/en/tutorial/entendendo-a-catalogacao-de-produtos-para-o-marketplace), the marketplace has to map the brands. Matching between marketplace and seller brands is done through a template.  

### Using the template
You can download the updated template by clicking the Download current mapping table button in the seller you added to the *Categories and brands* page. The template contains the following columns: 

| Column | Name                           | Description                                                                                                          |
|--------|--------------------------------|----------------------------------------------------------------------------------------------------------------------|
| A      | Marketplace brands             | This is the brand name in the VTEX marketplace. The number in square brackets is the marketplace brand ID.           |
| B      | Brands sent by seller          | This is the brand name in the seller's catalog. If the mapping has not been done before, this column will be empty.  |
| C      | Unmapped brands sent by seller | Seller brands that have not been mapped yet.                                                                         |

1. Check all the brands in __column A__. These are the values that you will match with the seller's brands from column C in step 2.  
2. Fill __column B__ with the matching brand from __column C__.   
3. Repeat the process until __column C__ is empty.  
4. Save the template __XLS file__.  
5. In *Brands mapping*, upload the updated template using the __Change categories mapping__ button.   

>ℹ️ If the program you used for opening the template uses semicolons (“;”) as separators, you have to replace them with commas (“,”) before importing the file.

### Example
In this example, we downloaded the current template, which has the following values in the columns:

| Marketplace brands | Brands sent by seller | Unmapped brands sent by seller |
|--------------------|-----------------------|--------------------------------|
| Adidas             |                       | Animale                        |
| C&A                |                       | Farm                           |
| Animale            |                       |                                |
| Farm               |                       |                                |

We will map the seller's brands by matching the existing marketplace brands with the ones sent by the seller. After the mapping is done, the template will look as follows:

| Marketplace brands | Brands sent by seller | Unmapped brands sent by seller |
|--------------------|-----------------------|--------------------------------|
| Adidas             |                       |                                |
| C&A                |                       |                                |
| Animale            | Animale               |                                |
| Farm               | Farm                  |                                |

Note that not all marketplace brands had a match in this case. This varies depending on the seller's product offering and the variety of marketplace brands.

## Mapping Specifications

Specifications are additional properties that can be added to your store's products or SKUs. After the seller sends the products, the marketplace has to map the product and SKU specifications. Mapping is done manually through the Categories and brands page to match the fields between the marketplace and the seller. 

When a seller submits a product with a specification that has not been mapped by the marketplace and the marketplace [approves](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) this product, a new SKU is created, even though there is already a SKU in the marketplace catalog to associate it with. The unmapped specification (for example, color) or its value (for example, yellow) will be registered as an **unstructured attribute** in the marketplace catalog, but **will not be displayed in the marketplace storefront**. Therefore, it is necessary to map all the specifications and their values so that they are visible to buyers. You can view the unstructured attributes in your Admin. Go to *Catalog > Products and SKUs > choose an item from the list > click the Specifications tab*.

To map product and SKUs’ specifications, follow the steps below:

1. In *Specifications mapping*, click __Map product/SKU specifications.__
2. In the Seller column, enter the specification value that matches the __seller__ catalog.     
3. In the *Marketplace* column, enter the value that matches the specification in the __marketplace__ catalog. You can find it by navigating the category tree available in Products > Catalog > Categories.      
4. Click __Add new entry__ to repeat the process until all seller specifications have a match.      
4. Click __Update mapping__.       

### Example
We will map the seller's specifications by matching the existing marketplace specifications with the ones found in the seller catalog. Note that all divergent specifications have to be mapped, even if the only difference is word capitalization. After the mapping is done, the table will look as follows:

| Seller | Marketplace |
|--------|-------------|
| VOLTS  | Volts       |
| 10     | 12          |
| size   | Size        |
| Woman  | women       |
| l      | L           |
| NUMBER | Number      |

### Specifications and received SKUs approval

Specification mapping is applied on the marketplace website in different ways, depending on the actions done in the [Received SKUs](https://help.vtex.com/pt/tutorial/entendendo-a-catalogacao-de-produtos-para-o-marketplace) module when approving seller SKUs:

- __Link to existing SKU:__ the specification mapping is ignored by the marketplace system because the SKU already exists in the marketplace with the same specifications.    
- __Link to an existing product:__ the specification mapping is only considered for SKU specifications because the product specifications already exist in the marketplace.    
- __Approve as new product:__ the mapping is applied in full for product and SKU specifications coming from the seller.    

## Learn more

- [Approving products](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus/)  
- [Creating a trade policy](https://help.vtex.com/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)    
- [Trade policy for marketplaces](https://help.vtex.com/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)  

