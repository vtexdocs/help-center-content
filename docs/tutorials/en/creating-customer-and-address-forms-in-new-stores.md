---
title: 'Creating Customer and Address forms in new stores'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2024-06-11T17:38:43.775Z
publishedAt: 2024-06-11T17:38:43.775Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: creating-customer-and-address-forms-in-new-stores
locale: en
legacySlug: creating-customer-and-address-forms-in-new-stores
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

In Master Data, customer and address forms are not created by default for all new stores. They are available only in the main store account. This occurs whenever multi-stores are created.

<div class="alert alert-warning">
This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Master Data version characteristics
 </a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
</a>
</li>
</ul>
</div>

You can produce these forms automatically, following the instructions below for each store.

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. After authentication, access the following URL, to make a requisition (GET) from the API: `{storename}.vtexcrm.com.br/api/crm/pvt/provisioning`. Replace `{storename}` with your store's name.

  The result will be a blank screen on the browser, but this corresponds to a status __200 OK__ response.
3. Wait a few minutes and then click on **Advanced Settings** in Master Data.
4. Under **Do you want to clear the cache?** click on **Yes**.
5. Click on the **Applications** tab to go back to the Master Data home page.
6. Click on **Reload Applications**.

After this, the **Profile System** application forms should be available in your Master Data.
