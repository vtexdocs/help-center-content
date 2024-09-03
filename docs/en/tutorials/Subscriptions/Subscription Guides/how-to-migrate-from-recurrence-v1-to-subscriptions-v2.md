---
title: 'How to migrate from Recurrence to Subscriptions module'
id: 3nJ4pbsRHEyKmvoN0foYRi
status: ARCHIVED
createdAt: 2020-02-19T20:12:20.544Z
updatedAt: 2021-04-20T19:49:22.182Z
publishedAt: 
firstPublishedAt: 2020-03-02T01:17:13.783Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: how-to-migrate-from-recurrence-v1-to-subscriptions-v2
locale: en
legacySlug: how-to-migrate-from-recurrence-v1-to-subscriptions-v2
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

The **Subscriptions System** is an app developed by VTEX to facilitate recurring sales, replacing the *Recurrence* module. It works as an automatic scheduler, executing a repurchase at the frequency requested by the customer. 
Your costumers indicate how often they want to repeat the purchase of a specific SKU, and the system resubmits the purchase order. This purchase is made automatically every scheduled period, with the same characteristics that were configured in the original order. Subscriptions is a simple way to save your customer's time, bringing another scheduled sales flow to your store.


Your store can fit into one of three scenarios within the process of migrating to the Subscriptions module:  

**1. The store has the Recurrence installed, but it is not being used.**   
The store does not have active customers actually using the recurrence. In this case, we recommend that you follow the [Subscriptions module configuration](https://help.vtex.com/en/tutorial/how-to-configure-subscriptions%20--1FA9dfE7vJqxBna9Nft5Sj) process normally. No data should migrate.  


**2. The Recurrence is installed and there are active customers.**
In that case, follow the step by step below.  

**3. The Recurrence module is not installed.**
In this case, we do not recommend installing the Recurrence module. You must [configure the Subscriptions module](https://help.vtex.com/en/tutorial/how-to-configure-subscriptions%20--1FA9dfE7vJqxBna9Nft5Sj) directly.  


## Migrating to the Subscriptions module

 1. Configure the [Subscriptions module](https://help.vtex.com/en/tutorial/how-to-configure-subscriptions%20--1FA9dfE7vJqxBna9Nft5Sj) in your store.  

 2. Validate your store's [front-end customizations](https://help.vtex.com/en/subcategory/cms-settings--6kovkwzMRyeOOc2iEC4suM).  

 > *You can customize the purchase flow and the My Account module*.  

 3. Customize the **transactional emails** for your Subscriptions.  

 > *Check out the complete step by step [here](https://help.vtex.com/en/tutorial/transactional-emails-for-subscription-orders--2NYHqHMRqZ43Cn6s84ZCB5)*.  

 4. Validate your store's **integrations linked to Subscriptions.**  

 > *Integrations can involve your store's ERP and CRM, among other services and platforms. Check out our API documentation [here](https://developers.vtex.com/reference/subscriptions-api-v2-overview)*.  

 5. Validate the **transactions and payment methods.**  

 > *Check out more information for this step [here](https://help.vtex.com/en/tutorial/how-to-configure-subscriptions%20--1FA9dfE7vJqxBna9Nft5Sj)*.  

 6. Associate the **SKU attachments** created in step 1 with the desired SKUs.  

 7. **Test the complete flow.**  

 > *Make a trial purchase following this flow:*  
*a) Purchase of any SKU through a test user.  
b) Check if the initial transaction was approved, or if there was a payment error.  
c) Check the after-sales operation (logistic settings, e-mails from the message center, OMS operation and the Subscriptions module).  
d) Create the Subscription (Steps 1 to 6).  
e) Make a new purchase, this time adding the Subscription for that SKU.  
f) Validate the new transaction.*  

 8. Request **data migration** from your store's subscriptions.  

 > *Request [VTEX via ticket](https://support.vtex.com/hc/pt-br) to migrate data from subscription orders already made in Recurrence to the Subscriptions module. VTEX will be responsible for the correct data migration*.


### VTEX monitoring

After you perform the steps above, VTEX also offers the following benefits:

- **Training with your store's team**: migration meeting for training on the Admin's new interface.

- **Monitoring of the operation**: close monitoring before, during and after launch, by your VTEX Account Manager and VTEX Experts.
