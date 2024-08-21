---
title: 'Affiliates Program app'
id: 7IpHHHcjjWxdmSRMw1FMPQ
status: PUBLISHED
createdAt: 2022-11-07T14:17:36.954Z
updatedAt: 2023-03-29T14:35:30.885Z
publishedAt: 2023-03-29T14:35:30.885Z
firstPublishedAt: 2022-11-07T22:17:42.126Z
contentType: tutorial
productTeam: Apps
author: 5l9ZQjiivHzkEVjafL4O6v
slug: affiliates-program-app
locale: en
legacySlug: affiliates-program-app
subcategory: 6GWaAkVqXQYN79ilMgUsPr
---

<div class = "alert alert-info">
The <b>Affiliates Program</b> is an app that is only supported by <a href="https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">VTEX IO</a> stores and is not available for stores that use <a href="https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">Legacy Portal CMS</a> or <a href="https://www.faststore.dev/tutorials/cms/0#vtex-headless-cms">Headless CMS</a>. Please visit the Affiliates Program app developer guide to install and configure the app on your VTEX store. 
</div>

In the **Affiliates Program** app, an affiliate is someone who partners with your VTEX store to promote sales in exchange for a commission. The term is, therefore, different from the [usual concept of an affiliate at VTEX](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). 

The **Affiliates Program** app generates a specific URL from your VTEX store to your [registered affiliates](#adding-an-affiliate). When the affiliate shares the URL with a customer who buys using the link, the affiliate gets a commission. 

The app creates two page groups after being installed in your VTEX environment:

- [Affiliate pages](#affiliate-pages)
- [VTEX Admin pages](#vtex-admin-pages)

### Affiliate Pages

The app creates three types of affiliate pages, available to them without any access to your store's VTEX Admin, as shown in the table below:

| **Type** | **URL** |
| ---------- | ---------- |
| Affiliate page | `{storeName.com}/affiliates/{affiliateSlug}` |
| Affiliate profile page | `{storeName.com}/affiliates/{affiliateSlug}/profile` |
| Registration form page | `{storeName.com}/affiliate/form` |

The **affiliate page** is the VTEX store URL that they will share with the customers. The following image shows an example:

![print_affiliates_url_en](https://images.ctfassets.net/alneenqid6w5/63BnppaNSakcI7YJVX2mAV/6d0e53ff26c4f9c7f3d9fbd3cebf4db9/print_affiliates_url_en.png)

The **affiliate profile page** is an interface where the affiliate can track and manage their orders and commissions. The image below shows an example:

![affiliate_profile_page_en](https://images.ctfassets.net/alneenqid6w5/7kNS1iqcYLpB7roih4QdiF/9f11c3ffaa7aac74fe70ab6268679b74/print_profile_en.png)

The **registration page** allows those who are interested in becoming affiliates to fill in their information to apply for VTEX store registration. 

<div class = "alert alert-info">
The affiliate pages are customizable. Learn more in the <a href="https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app">Affiliates Program app</a> developer's guide.
</div>

### VTEX Admin pages

The **Affiliates Program app** creates interfaces in the VTEX Admin for you to manage all affiliate-related content. 

After [installing](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app#installation) the app, the following pages become available in your VTEX Admin under **Other > Affiliates**: 

- [Affiliate Management](#affiliate-management)
- [Order Management](#order-management)
- [Commission Management](#commission-management)

If your store uses the [New VTEX Admin](https://content.vtex.com/join-new-admin-beta-program-en/), go to **Apps > Affiliates**. 

## Affiliate Management

The **Affiliate Management** page allows you to do the following:

- [Add an affiliate](#adding-an-affiliate)
- [Search for affiliates](#searching-for-affiliates)
- [Filter affiliates](#filtering-affiliates)
- [View affiliate details](#viewing-affiliate-details)
- [Edit an affiliate](#editing-an-affiliate)

![affiliates_management_page_en](https://images.ctfassets.net/alneenqid6w5/7E41Gki569BjcMFnhsttH9/6ea891b6bd27373375fb3d808b26d97c/affiliates_management_page_en.png)

### Adding an affiliate

Click the `Add Affiliate` button to create a new affiliate, fill in the fields displayed, and click `Save`.

> The following fields are required: _Name, Email, URL identifier_, and _Phone_.

### Searching for affiliates

Enter any of the following information in the search bar to search for an affiliate: _Affiliate ID, Name, Store Name, Email_, or _Phone_.

>⚠️ In the **Affiliates Program app**, not only is the term affiliate different from the [usual VTEX affiliate concept](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0), but the `Affiliate ID` does not correspond to the default code. In the app, the `Affiliate ID` is an alphanumeric code automatically generated when you create a new affiliate.

### Filtering affiliates

To filter the affiliate search, click `All` <i class="fas fa-toggle-on"></i> and select the desired option. The default `All` option searches all of your affiliates, and the other options are approval-related: `Yes` for approved affiliates and `No` for non-approved ones.

### Viewing affiliate details

To view affiliate details, on the affiliate row, click <i class="fas fa-ellipsis-v"></i> **More actions**, and then click <i class="fas fa-eye"></i> **Details**. You will be redirected to a page where you can view information about the affiliate and also do the following: 

- **Activate affiliate:** Click the toggle under `Active?` <i class="fas fa-toggle-on"></i>.
- **Access the [Order Management page](#order-management) of the affiliates:** Click the `Order Management` button.
- **Edit affiliate:** Click the `Edit` button.

### Editing an affiliate

If you need to edit an affiliate and change its information, follow the steps below:

1. In the row related to the affiliate, click <i class="fas fa-ellipsis-v"></i> **More actions**.
2. Click <i class="fas fa-pencil-alt"></i> **Edit**. 
3. Change the information added.
4. Click `Save`.

## Order Management

The **Order Management** page allows you to do the following:

- [Monitor data](#monitoring-data)
- [Search for orders](#searching-for-orders)
- [Filter orders](#filtering-orders)
- [Export order spreadsheet](#exporting-the-order-list)
- [View order details](#viewing-order-details)

![orders_management_page_en](https://images.ctfassets.net/alneenqid6w5/4oecP3rDffWqrP0KtvOhrp/9f63b76106915d023708574ad68f3d18/orders_management_page_en.jpg)

### Monitoring data

At the top of the page, you see the following metrics about orders placed through the links of one or more affiliates:

- **Total Orders:** Total number of affiliate orders.
- **Order Total:** Sum of the order values, calculated from the item prices without shipping costs.
- **Order Total Commission:**  Sum of the amounts of affiliate commissions on orders.

<div class = "alert alert-info">
To track an order flow, click the <code>Order ID</code>. This will redirect you to the VTEX Admin under <b>Orders > All Orders</b>.
</div>

### Searching for orders

Type the `affiliate ID` related to the order into the search bar to find an order. You can do this by using filters, as seen [below](#filtering-orders).

### Filtering orders

You can filter the order search by the following criteria:

- **Order status:** The default option is to show all orders. To choose a status, click **All Orders** <i class="fas fa-angle-down"></i> and select one of the options: _Created, Payment approved, Payment Pending, Invoiced_, or _Canceled_. Learn more in [Order Flow and Status](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196).
- **Order Date:** Filter from a range of days and hours when the orders were created. To do so, the `From` field sets a start date and the `To` field sets the end date.

### Exporting the order list

The **Affiliates Program app** allows you to export a list with a CSV extension of your affiliate orders. 

>⚠️ To enable the list export function, you must first set up email templates described in the [Affiliates Program app](https://developers.vtex.com/vtex-developer-docs/docs/affiliates-program-app#email-templates) developer's guide.

After configuration, click **Export** on the **Order Management** page to export the list. The following confirmation message will be displayed:

 > _The report is being generated and will be_ _sent to your email._

The generated file will be sent to the email address of the [user](https://help.vtex.com/en/tutorial/gerenciando-usuarios--tutorials_512) who is currently logged in. The exported content refers to the total of orders in the list at the time of export. If a filter is active, only the selected offers will be exported. 

### Viewing order details

To see an order data, in the row for the order click <i class="fas fa-ellipsis-v"></i> **More Actions**, and then click <i class="fas fa-eye"></i> **Details**. 

## Commission Management

The **Commission Management** page allows you to do the following:

- [Search for commissions](#searching-for-commissions)
- [Edit commissions](#editing-commissions)
- [Export commission spreadsheet](#exporting-commission-spreadsheet)
- [Import commissions](#importing-commissions)
- [Download last import](#downloading-the-last-import)

![commissions_ management_page_en](https://images.ctfassets.net/alneenqid6w5/4sPaoOQE8vAbN9tsCMS7zt/73d8406a30e628474923dfb098dc53da/commissions__management_page_en.png)

### Searching for commissions

To search for order commissions, in the search bar of the Commissions tab, type the `SKU ID` of the order, which is the [SKU identification number](https://help.vtex.com/en/tutorial/descobrir-o-id-de-um-sku--4VQZsYeb3igGK2YowuEYWW). 

### Editing commissions

You can change the commission percentage by following the steps below:

1. On the Commissions tab, in the row for the commission you want to edit, click <i class="fas fa-ellipsis-v"></i> **More actions**.
2. Click <i class="fas fa-pencil-alt"></i> **Edit**. 
3. In the modal that opened, enter the desired commission number. Decimals are not accepted.
4. Click `Confirm`.

The following message will be displayed:

> _Commission updated successfully_

### Exporting commission spreadsheet

To export a SKU commission spreadsheet with a CSV extension, at the top of the **Commission Management** page, click **Export**. The following confirmation message should be displayed:

> _The report is being generated and will be sent to your email._

The file will be sent to the email address of the [user](https://help.vtex.com/en/tutorial/gerenciando-usuarios--tutorials_512) who is currently logged in.

<div class = "alert alert-info">
The exported content refers to the list SKU commissions at the time of export. Only the selected SKU commissions will be exported if a filter is active.
</div>

### Importing commissions

You can update commissions in bulk by SKU by following the steps below. You can use a sample template by clicking `XLSX Template`.

1. Go to the **Import Commissions** tab.
2. Drag and drop the CSV or XLSX file format into the dotted area, or click `Choose a file`.
3. Click `Send File`.

Check if the following message is displayed:

> _The file is being processed_

The name of the submitted fileadded file name will appear next to the `Last Import` field.

<div class = "alert alert-info">
You can identify the import information and the user by hovering over the <code>?</code> symbol next to <code>Last Import</code>.
</div>

### Downloading the last import

The last imported file isavailable for download. To download it, go to the **Import Commissions** tab, find the file next to `Last Import` and click it.
