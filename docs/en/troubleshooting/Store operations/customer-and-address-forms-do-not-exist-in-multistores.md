---
title: 'Customer and Address forms do not exist in multistores'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2024-11-21T14:53:44.434Z
publishedAt: 2024-11-21T14:53:44.434Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: customer-and-address-forms-do-not-exist-in-multistores
locale: en
legacySlug: creating-customer-and-address-forms-in-new-stores
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:  Master Data v1, Customer, Address, Multistore
---

In Master Data v1, the Customer and Address forms are, by default, only created in the account's main store. For this reason, when creating a [multistore](https://help.vtex.com/pt/tutorial/criar-subconta-multiloja-multidominio--tutorials_510), the forms are not created automatically.

>⚠️ This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use.
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Master Data version characteristics
>  </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
> </a>
> 

## Solution

Follow the instructions below for each multistore where you want to create the Customer and Address forms:

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data**.  
2. After authentication, enter the following URL in your browser's address bar to make a GET request to the API: `{storename}.vtexcrm.com.br/api/crm/pvt/provisioning`.  Replace `{storename}` with the name of your store.

   This request will create the forms in the multistore. The result will be a blank screen in the browser, indicating a **200 OK** status response.  
3. In Master Data, click `Advanced Settings`.  
4. In the option **Do you want to clear the cache?**, click `Yes`.  
5. Click the **Applications** tab to return to the Master Data homepage.  
6. Click the `Reload Applications` button.

Once you have completed these steps, the Customer and Address forms will be available in Master Data.