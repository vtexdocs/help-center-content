---
title: 'Adding a seller'
id: tutorials_392
status: PUBLISHED
createdAt: 2017-04-27T22:07:15.357Z
updatedAt: 2023-04-17T22:11:37.326Z
publishedAt: 2023-04-17T22:11:37.326Z
firstPublishedAt: 2017-04-27T23:03:22.826Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: adding-a-seller
locale: en
legacySlug: configuring-the-seller
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

*Seller management* is the module where marketplace operators can manage sellers and invite them to connect to the marketplace and sell their products. In this module, it is possible to invite different types of sellers, as follows:

- VTEX Store [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) is the page where marketplace operators add sellers, enter their information, and manage their status. This article will guide you through the steps needed to add a new seller. Information entered when creating a seller is not visible on the marketplace storefront and is only viewed by marketplace users at their VTEX Admin at **Marketplace > Management**.

To add an unidentifiable seller, aka [white label seller](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa), this model must be provided for in your contract with VTEX. In case you need to make changes to your contract, please contact your VTEX sales representative and submit a request to [add a franchise account](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) through our Support. Every franchise account is created as a white label seller. It is not possible to change the seller type after its creation. 

>ℹ️ If you want to find new partners to sell in your marketplace, use the __Find sellers__, which facilitates the identification and the communication between marketplaces and sellers operating in the VTEX ecosystem, as well as certified partners.

1. In your VTEX Admin, go to _MARKETPLACE > Management_.    
2. Click `Add Seller`.      
3. Choose an integration type between the **VTEX Seller** and the **External Seller**.    
4. Complete the fields, as described below.     
5. Click `Save`.     

**Integration**
- **VTEX seller’s account**: Enter the [account name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) of the seller.  
- **Affiliate ID**: Enter the identification code of the [affiliate](https://help.vtex.com/en/tutorial/como-configurar-afiliado--tutorials_187), defined by the seller when adding their marketplace. It always consists of three consonants, whether they are repeated or not. Vowels are not accepted.  
- **Pause seller after creation**: Select the checkbox so that the seller is created as `Paused`. By selecting this box, you can add the seller, catalog their offers and run all the necessary tests before making them available on your storefront to take orders.  

**Exclusive fields for the integration of external sellers**
- **Fulfillment URL**: URL of the API responsible for fulfilling the seller's orders. It must be informed by the seller to the marketplace.  
- **User**: Username, if you are using a hub to integrate with the external seller.   
- **Password**: User password, if you are using a hub to integrate with the external seller.  

**Basic seller information**
- **Seller name**: Name of the store that will sell in your marketplace.  
- **Seller ID**: Code for internal identification of the seller. The seller can create whatever ID is best for them, but the code will not be editable afterwards. Rules for creating the code:    
    - Do not insert spaces or special characters.  
    - Preferably, use only lowercase letters, as the field is case-sensitive.
    - Use up to 50 characters.  
    - Avoid using only the word “list” as your ID.  
    - For white label sellers, the ID has to start with the [account name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) of the marketplace, followed by the code of your choice. E.g., marketplaceseller1.  
- **Seller groups**: Keyword that identifies the group the seller belongs to, to be filtered in the sellers list. Define a new keyword to create a new group or repeat one already used to link the seller to one or more existing groups. You can create groups for comprehensive sellers, franchise accounts, third party sellers, premium partners, or any other category that applies to your business. Know more in [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv).

**Trade agreements**
- **Marketplace trade policies**: Select the [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) that are valid for the seller to link your products and sales conditions to different contexts. For example, a trade policy used on the website and a trade policy used in an app.    
- **Product commissioning**: Define the commissioning percentage that applies to the seller's products.  
- **Shipping commissioning**: Define the commissioning percentage that applies to the shipping cost of the seller's orders.  
- **Add commissioning by category**: When checking this option, select the categories from your catalog that will have specific commissioning percentages associated with the seller. You can define the commissioning percentage by product and/or shipping for the selected category.   
- **Enable seller share in purchases with shopping vouchers**: Field that allows the use of marketplace shopping vouchers on seller products, when sellers process payments. It identifies purchases made with a gift card so that only the final price (with the due discounts applied) is paid to the seller. When payments are only processed by the marketplace, this field is not applicable.   

**Additional information**

- **Add logo**: Upload the image of the seller's logo in PNG, JPG, or JPEG format. The acceptable size is up to 500kb.  
- **CNPJ (Company registration number):** Company registration number of the seller.   
- **Email**: Email address of the manager in charge.  
- **Description:** Text that identifies the seller. It must be written with a commercial tone, as the content can appear in the marketplace window display when customizing the CMS.  
- **Delivery policy**: Text describing the delivery policy previously agreed upon by the marketplace and the seller.  
- **Exchanges and returns**: Text describing the exchange and return policy previously agreed upon by the marketplace and the seller.  
- **Privacy and security policy**: Text describing the security policy previously agreed upon by the marketplace and the seller.  

>ℹ️ In the new version of the page, released on 2022, we have removed the Catalog Endpoint field from the screen, as it is no longer needed for integration with new sellers. If necessary, it is still possible to manage the fields via API.

Once you have filled out the form and clicked **Save**, your seller will be added to the marketplace. To complete your store's configuration as a marketplace, you must also [map brands, categories, and specifications from the seller's catalog](https://help.vtex.com/en/tutorial/mapeando-categorias-e-marcas-para-marketplace/) and [approve the ads added](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus/).

## Learn more

- [Creating a trade policy](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)  
- [Seller management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv)
- [Configuring a VTEX marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)  
- [Actions for a VTEX marketplace operation](https://help.vtex.com/en/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev) 

