---
title: 'Marketplace: Seller Invite'
id: 6rb2FkcslmDueJ689Ulb9A
status: PUBLISHED
createdAt: 2021-08-12T12:36:37.703Z
updatedAt: 2023-03-31T14:52:27.801Z
publishedAt: 2023-03-31T14:52:27.801Z
firstPublishedAt: 2021-08-12T15:49:50.572Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: marketplace-invited-sellers
locale: en
legacySlug: marketplace-invited-sellers-beta
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

The **Invited Sellers** page in the _Marketplace_ module is where marketplace operators can invite sellers to connect to their marketplace. To access this page, in your Admin, go to _MARKETPLACE > Seller Invite_. The page allows you to invite: 

- **Online stores hosted on VTEX:** connects their VTEX account as a new seller on the marketplace.  
- **Online stores that are not hosted on VTEX:** includes instructions for creating an account on the VTEX Seller Portal.

In addition to sending invitations, the page also displays a list of sellers to give visibility over the process. At the top of the list, you can search for sellers by name or email and filter results by status. Sellers can have two types of status:

- **Invited:** indicates sellers who have received an invitation to sell on the marketplace but have not created their VTEX account or connected their existing account yet.  
- **Accepted:** indicates sellers who have accepted the invitation and created or connected their account.

For new sellers to integrate with your marketplace, you must perform the following actions on the VTEX platform: [Invite](#inviting-sellers) and [Connect](#connecting-sellers).

![EN seller invite](//images.ctfassets.net/alneenqid6w5/3kCM8CHXpzssH5MWf6txLh/48e7ae5bdb892b7e0b0811c2d868a8b4/EN_Seller_invite.jpg)

## Inviting sellers

You can invite sellers by sending them a link by email with all the necessary information for integrating with the marketplace. To invite a new seller, follow the steps below:

1. In the _MARKETPLACE_ section, access the **Seller Invite** page.     
3. Click on `Invite seller`.    
4. Fill in the seller’s **General data**:
    - **Seller name:** name of the seller's sales rep, who will orchestrate the connection on the seller’s side. This person must have an [OMS user role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access).     
    - **Email:** email of the seller's sales rep, who will receive the invitation for creating the account or connecting an existing one.  
5. Select the type of seller — `Common` or `White label`.    
6. Toggle the **Share marketplace catalog** option if you want the seller to import your products and category tree.     
7. If you enabled the switch in the previous step, you have to determine how to share your catalog with the seller:
    - **Sales Channel:** defining the sales channel ([trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)) associated with the products and category tree you want to share with the seller.
    - **Collection:** defining a [collection](https://help.vtex.com/en/tutorial/tipos-de-colecao--5tKnhh8tMGIrVL7Fqirq7n) with the products and category tree to share with the seller.     
8. Click on `Send invite`.     

The seller will receive an invitation by email to sell on your marketplace. 

>ℹ️ The link sent to the seller by email is valid for seven days. Once the link is opened, the seller has six hours to complete the registration form, without interruption. 
> If the registration cannot be completed within six hours, the marketplace needs to send the invitation again. To resend the invitation, access MARKETPLACE > Invite sellers. Select the seller in the list and click on the  <i class="fas fa-paper-plane"></i> Resend invitation button.

## Connecting sellers

Once the seller accepts the invitation and completes their account registration, you need to connect them to your marketplace. After connecting the seller, its status changes from _Invited_ to _Active_, and the seller is then listed on the Sellers Management page. Follow the steps below to connect a seller:

1. In the _MARKETPLACE_ section, access the **Invite Sellers** page.        
3. In the row of the desired seller, click on the icon  <i class="fas fa-link"></i> Connect seller.   
 Note that this action will only be available for sellers with the `Accepted` status.   
4. Toggle the **Activate seller later** option if you want to prevent the seller from receiving orders. You can enable it later on the Sellers Management page.  
5. Click on `Add`.  

Once the seller is connected, its profile will no longer be displayed on the Invited Sellers list. It will be transferred to the Sellers Management page. Connecting a seller with the toggle "Activate seller later" button enabled will list the seller on the Sellers Management page as inactive.
