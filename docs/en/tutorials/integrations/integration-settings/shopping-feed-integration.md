---
title: 'Shopping Feed Integration'
id: 1DK5fzpuJTpAC8MzCgwgJ8
status: PUBLISHED
createdAt: 2024-11-05T14:04:46.232Z
updatedAt: 2024-11-05T14:39:56.514Z
publishedAt: 2024-11-05T14:39:56.514Z
firstPublishedAt: 2024-11-05T14:39:56.514Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: shopping-feed-integration
legacySlug: shopping-feed-integration
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

The Shopping Feed platform allows global brands to centralize, optimize, and track the distribution of their product catalog across marketplaces, comparison sites, affiliate networks, and retargeting campaigns. Integrating a VTEX store with the Shopping Feed connector enables the store to use Shopping Feed's ecommerce feed management solution to increase the visibility and profitability of its products on Amazon, Google Shopping, Facebook, eBay, Criteo, Etsy, and [others](https://shoppingfeed.com/en/channels).  

> ⚠️ To integrate with Shopping Feed, you must contact the [VTEX support team](/support?/cultureInfo=en) before following this tutorial.  

![Logo shopping feed](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/shopping-feed-integration_1.png)

Once the connector app is configured, your catalog feed will be available on ShoppingFeed, and your products will be ready to be published on the channels of your choice. As you sell across different channels, orders, and product stock levels will automatically stay synchronized between VTEX and Shopping Feed.   

> ⚠️ To perform the integration with the connector, you must already have a Shopping Feed account. [Request a demo](https://content.shoppingfeed.com/request-a-demo) on the platform's website.  

## Installation and Configuration 

This section explains how to install and configure the app. Once completed, you will be ready to create your product feed.  
To install the app in your store, follow the steps below:

1. In VTEX Admin, go to **Apps > App Store.**  
2. In the search bar, type **Shopping Feed.**   
3. Click the `Get app` button.   
4. Enter the VTEX account name in the **Account Information** field.   
5. Click the `Confirm` button.    
6. Click the `Install` button.    

> ℹ️ The app will be installed in the account entered in step 3. If you want to get the app for more than one account, you will need to complete the process for each account.  

To configure the connector, follow the steps below:  

1. In the app card, click **Settings.**   
2. Fill in the fields shown in the image below. The fields in the Cron jobs section should be modified according to [this guide](https://crontab.guru/).  

![crontab shopping feed](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/shopping-feed-integration_2.png)

After the app is installed in the store, a new menu option becomes available in the VTEX Admin under **Apps > Installed Apps > Shopping Feed.**  

> ⚠️ Before starting the configurations, you must have your [Shopping Feed credentials](/support?/cultureInfo=en).  

Each sales channel on Shopping Feed that the seller wants to integrate needs to be configured in the connector. For this, the processes for **Configure Affiliate for ShoppingFeed** and **Create feed** must be repeated for each sales channel.  

## Configure Affiliate for ShoppingFeed  

The affiliate ID will be used in the **Prefix for Imported Orders - Affiliate ID** field. To create a new affiliate, follow the tutorial [Configure Affiliate](/en/tutorial/configuring-affiliates--tutorials_187#how-to-set-it-up).

> ⚠️ For each sales channel on Shopping Feed that the seller wants to integrate, the processes for **Configure Affiliate for Shopping Feed** and **Product Feed Creation** must be repeated.  

### Create feed

To create a feed, follow the steps below:  

1.In the VTEX Admin, access **Apps > Installed Apps > Purchase Feed - Configuration List.**  
2. Click the `Create new configuration` button.   
3. Fill in the following fields:  
   - **ShoppingFeed Store ID:** ID of the Shopping Feed store you wish to connect. This data was defined in the platform configuration.  
   - **VTEX Affiliate ID:** The ID of the VTEX Affiliate will be used as a prefix for the imported orders from Shopping Feed and created in VTEX.   
   - **ShoppingFeed Store TOKEN:** token for the Shopping Feed Store you want to connect to.   
   - **Locale Feed:** language you want for the feed. The available languages are those linked to the VTEX sales channels.   
4. In the **Catalog** section, select the following options:  
   - Tick this if you want to export also the non-sellable items.   
   - If you want to send product categories as **Category Name** or **Category Path.**    
5. In the **Orders** section, make the following configurations:  
   - Enable **Enable cancellation call** if you want the cancellation in Shopping Feed to be triggered upon receiving a cancellation in VTEX.   
   - Enable **Split by customer** if you want the orders where only the last name is required in Shopping Feed to be split in VTEX to fill in the first and last name.  
   - Enable **Include test orders** if you want test orders to be imported into VTEX as well.  
   - In the field `Date from which to import orders`, fill in the date of the first order import.   
   - In the field `Shipment by Channel Sales Policy`, fill in which shipping policy should be associated with the integration of the channel you are registering.    
6. Click the `Add` button and fill in the **[VTEX Shipping Policy](/en/tutorial/creating-a-shipping-policy--66rJO4LKBdyMJOH6Z3dsaT)** and **Shopping Feed Courier** fields.  
7. Click the `Save` button.  

![config app shopping feed](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/shopping-feed-integration_3.png)

> ❗ Each time a new feed is created, it is necessary to refresh all feeds by clicking on **<i class="fas fa-ellipsis-v" aria-hidden="true"></i>Menu > Force all feeds.**
