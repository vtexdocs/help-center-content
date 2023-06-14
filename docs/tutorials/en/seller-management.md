---
title: 'Seller Management '
id: 6eEiOISwxuAWJ8w6MtK7iv
status: PUBLISHED
createdAt: 2022-02-01T21:36:48.023Z
updatedAt: 2023-03-13T18:58:17.497Z
publishedAt: 2023-03-13T18:58:17.497Z
firstPublishedAt: 2022-02-02T18:34:52.667Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: seller-management
locale: en
legacySlug: seller-management-beta
subcategory: 2xWRgEIlR2ookieEmm4KQu
---

**Seller Management** is the page where marketplace operators [add sellers](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392), input their information, and manage their status. The page features metrics that allow marketplaces to assess their operation. It is also possible to apply filters to the seller list and group sellers using the _Group_ option. 

![Seller management gif 2022 launch](https://images.ctfassets.net/alneenqid6w5/6nedzBeTr3y9d47ArKh40r/d280e61590f95fcd669cf45b137790f8/Seller_Management.gif)

## Metrics

The page displays general metrics for the sellers:  

- **Total sellers:** All sellers integrated to the marketplace, including active and paused sellers.    
- **Active sellers:** Sellers who are receiving orders in the marketplace. By clicking on this metric, the list will be filtered by active sellers. To activate a seller, click on its status in the list and select _active_.    
- **Paused sellers:** Sellers who are not listed on the storefront and no longer receive orders in the marketplace. By clicking on this metric, the list will be filtered by paused sellers. To pause a seller, click on its status in the list and select _paused_.      
- **Pending offers:** All pending offers from your sellers, within a period of 180 days. By clicking on this metric, you will be redirected to the [Received SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) page.    

## Filters

You can use the search bar to search for a seller by name, ID, company registration number, internal identification, or CSC, and filter by:

- **Status:** Whether the seller is active or paused.    
- **Integration:** The type of integration used for each seller.    
 - **Visibility:** Whether the seller's store is visible in your marketplace storefront or whether the seller is a [white label seller](https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#o-que-e-um-seller-white-label), whose store is not displayed to the customer.     
- **Groups:** Allows you to group sellers with similar characteristics. This filter includes the groups created when [Adding a seller](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) or Managing groups.  

## Groups
Groups help your operation manage multiple sellers in a more efficient and scalable way. Sellers can be grouped into one or more groups according to your needs, using names of your choice. You can manually create, edit, and delete groups when adding a seller.

This feature allows merchants to better monitor their operations by:
- Identifying sellers' business models as 1P, 3P, or franchise accounts.  
- Grouping sellers that will participate in a specific promotion.  
- Grouping sellers that are active in a certain product category.  

You can create groups manually by clicking on Add sellers or Manage groups. Once created, you can edit and delete each one.  

![Seller management](https://images.ctfassets.net/alneenqid6w5/1dkekloSl228CxABGgylD7/fc25e05f46cc203be9777110c6bacbde/seller_management_en.png)  

## Managing groups  

The Manage groups feature allows you to create groups, and edit and delete one or more groups. In the VTEX Admin, go to __Marketplace > Seller Management > Manage groups.__   

On the Group management page, you will find the following options:
  - Add group    
  - Edit group  
  - Search by group, when you enter group name keywords in the search bar.  

    Each group has the following fields  

| **Field** | **Description** |  
|:---:|:---:|  
| Group | The group name defined when the group was created or renamed. |  
| Active sellers  | Number of active sellers in a group, the ones that are selling their products on the marketplace. |  
| Paused sellers  | Number of inactive sellers in a group, the ones that are not selling their products on the marketplace. |  
| Created | Date when the marketplace created the respective group. |  
| Actions | - Rename <br> - Delete |  

When you click a group, you will be able to see editing options such as seller status, integration type, pending offers, and actions such as seller details and seller orders. On the group page, you can search for sellers by name or filter them.  

### Best practices for using groups
We suggest following the best practices below when creating groups.

- Create up to 100 different groups.  
- Assign up to 100 groups to the same seller.  
- Avoid simultaneous access by different accounts when creating, editing and deleting groups.    
- Avoid simultaneous access by different accounts when assigning groups to sellers.  
- You can use special characters when naming groups.  
- Seller management is not case sensitive.  
- We do not store a history of creation or changes made to groups and sellers.  

## Seller list

The list has a column with the sellers' names and IDs, and it can be filtered it by status, integration, and active offers. By clicking on a seller, you will be redirected to the Seller details page, where you can view and edit their basic information. 

By clicking on the <i class="fas fa-ellipsis-v"></i> button in the seller row, the following actions are displayed:  

- **Seller details:** Redirects to the Seller details page, where you can view or edit information.  
- **Orders:** Redirects to the All orders page in the VTEX OMS, filtered by the orders from the selected seller.  

<div class="alert alert-info">
Please note that the list is sorted alphabetically. To view data for all sellers, navigate between the results pages by clicking on the <i class="fas fa-angle-left"></i> and <i class="fas fa-angle-right"></i> arrows at the bottom of the page. Use the filters to refine your results.
  </div>

### Identifiable sellers and unidentifiable sellers (white label)

The _label _icon next to the seller's name indicates whether the store is visible in your marketplace. Sellers can have two types of visibility:

- **Identifiable seller:** The seller is visible in your marketplace storefront and can be chosen by the consumer. The filled label icon means that the seller is identifiable.  
- **Unidentifiable seller (white label):** [White label sellers](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label) are franchise accounts on VTEX. They are not displayed in the storefront, and are automatically selected by the checkout system for order fulfillment. The transparent label icon means that the seller is not identifiable.  

If you would like to add a white label seller, this model must be covered by your contract with VTEX. In case you need to make changes to your contract, please contact your VTEX sales representative and submit a request to [add a franchise account](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) through our Support. Every franchise account is created as a white label seller. It is not possible to change the seller type after its creation.

### Bulk actions
You can perform bulk actions by clicking on the checkbox on the left of the list to select multiple sellers. A menu will be displayed with the options to **pause**, **activate**, or **add sellers to a group**.

By pausing sellers, you can catalog their offers and perform all the necessary tests before making them available on your storefront to take orders, for example.

## Learn more
- [Adding a seller](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392)
- [Configuring a VTEX marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)  
- [Actions for a VTEX marketplace operation](https://help.vtex.com/en/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)
