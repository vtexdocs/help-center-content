---
title: 'New offer model on Mercado Libre'
id: 3g7c72gcJk6WvKXNGfPTkb
status: PUBLISHED
createdAt: 2025-06-30T16:52:13.856Z
updatedAt: 2025-07-24T17:00:22.767Z
publishedAt: 2025-07-24T17:00:22.767Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-06-30-new-offer-model-on-mercado-libre
locale: en
legacySlug: new-offer-model-on-mercado-libre
announcementImageID: 'undefined'
announcementSynopsisEN: 'Learn about the offer model that allows different sales conditions for the same product.'
---

The new offer model on **Mercado Libre** allows sellers to configure different sales conditions for each product SKU, such as individual pricing for variations.    

The [integration with Mercado Libre](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) is available in Argentina, Brazil, Chile, Colombia, Ecuador, Mexico, Peru, Uruguay, and Venezuela.  

## What has changed?

In the previous model, offers were created in the marketplace when sellers sent products through their store's integration with Mercado Libre. All SKUs of a product were linked to the same offer, without the option to separate attributes like price, stock origin, shipping type, or discounts individually.  

![uptin1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/june/2025-06-30-new-offer-model-on-mercado-libre_1.jpg)

In the new model, offers are created by sending SKUs to the marketplace. To group the SKUs of a product, **Mercado Libre** automatically identifies their similar characteristics and creates a set called **Family**.  

So, when creating a new offer, Mercado Libre will use the SKU attributes such as size and color to group them into a **Family**.  

![uptin-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2025/june/2025-06-30-new-offer-model-on-mercado-libre_2.png)

## What needs to be done?
Accounts already integrated with Mercado Libre will be migrated automatically. This advertising model is only available through Mercado Libre.

To migrate existing offers to the new model, sellers must:

1. In the VTEX Admin, go to **Marketplace > Connections > Marketplaces and Integrations.**   
2. Click the Mercado Libre integration.  
3. Click the `Upload spreadsheet` button.  
4. Click `Download the template` and complete the spreadsheet with the Mercado Libre offer IDs.  
5. Upload the completed spreadsheet.  

After completing these steps, all the offers selected for migration are evaluated by Mercado Libre. Eligible offers will be migrated to the new model.  
Ineligible offers will be rejected and continue to function and receive maintenance as they currently do. New offers created after the migration will use the new model.  
