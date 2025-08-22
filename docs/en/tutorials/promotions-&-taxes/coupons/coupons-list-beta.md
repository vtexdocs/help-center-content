---
title: 'Coupons list'
id: 5z5ya3IonsC2W4B5h4JrsZ
status: CHANGED
createdAt: 2022-04-28T20:47:44.779Z
updatedAt: 2024-08-14T17:44:43.108Z
publishedAt: 2023-04-20T19:11:14.509Z
firstPublishedAt: 2022-04-28T21:03:11.698Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: coupons-list-beta
legacySlug: coupons-list-beta
locale: en
subcategoryId: 1TXh7VjDSIGA2eSI0CmUsi
---

On the **Coupons** page, you can see all the [coupons](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL) created in your store, manage their details and analyze how many times and in which orders they were used.

On this page, you can:

* Search for coupons.
* Export coupons.
* View coupon usage details.
* Filter coupons.
* See the list of active coupons.
* Access the list of archived coupons.
* Create coupons.
* Edit coupons.
* Archive coupons.

To access this page in the VTEX Admin, click **Promotions > Coupons**.

![lista-cupons](//images.ctfassets.net/alneenqid6w5/3KpOX5OW4oM5dBUNxkc0YP/d525a4dd9ed00d8895cd6be9fc96b538/screencapture-coupons-pricingqa-myvtex-admin-coupons-2022-04-29-18_15_22_1.png)

Below you will find a description of the page components and the actions you can perform.

## Top bar

The top bar of the **Coupons** page contains a search field as well as filters and buttons for exporting coupons, consulting coupon usage details and accessing the archived coupon list.  Learn more about each of these possibilities in the sections below.

### Searching for coupons

To find a specific coupon, use the search field. You can search by coupon code, by [UTM source](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) or by [UTM campaign](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii).

### Filtering coupons

Use the filters to view only coupons corresponding to certain criteria. To apply filters, follow the steps below.

1. In the VTEX Admin, go to *Promotions > Coupons*, or type *Coupons* in the search bar at the top of the page.
2. Select the filter you want to use:
   * **Last modified:** Indicates the last time a coupon was modified.
   * **Coupon type:** Indicates if it is a single coupon or a coupon batch. For a better understanding of different coupon types, please read [Coupons](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL).
3. Check the desired option.
4. Click `Apply`.
5. Repeat the process if you want to apply a different filter.

To clear the filters, i.e., to remove the applied filters, you have two options:

* Click <i class="fas fa-times"></i> next to the filter you want to remove.
* Click `Clear all filters` to remove all applied filters.

### Exporting coupons

You can download all your coupons and their details in a CSV file.

To export the coupons, click the button <i class="fa-solid fa-arrow-down-to-line"></i> `Export` next to the search field. The exported list will reflect the applied [filters](#filtering-coupons).

The generated file contains the information described below.

| Column | Description |
|---|---|
| `code` | Coupon code. For a coupon batch, the generated code prefix is indicated. |
| `type` | Indicates whether it is a `single` coupon or a coupon `batch`. For more information on each coupon type, please refer to [Coupons](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL). To learn how to export the codes generated in a coupon batch, please read [Exporting coupon batch codes](#exporting-coupon-batch-codes). |
| `quantity` | The number of coupon codes. For single coupons, the value is always `1`. For coupon batches, the number of codes for a specific coupon batch is indicated. |
| `archived` | Indicates if the coupon is archived (`true`) or active (`false`). |
| `utmSource` | Indicates the UTM source linked to the coupon, if any. |
| `utmCampaign` | Indicates the UTM campaign linked to the coupon, if any. |
| `maxUsage` | The maximum number of times the coupon can be used. |
| `maxItemsPerClient` | Determines the maximum number of products to which the coupon can be applied. The defined quantity is valid for one or more purchases made by the same customer. This option mentions a value only for already existing coupons, configured with this limitation in previous versions of the __Coupons__ module. |
| `expirationIntervalPerUse` | The minimum period of time before a coupon can be reused. |
| `lastModified` | The date the coupon was last modified. |

Here is an example of an exported CSV file:

![cupons-exportados](//images.ctfassets.net/alneenqid6w5/3BiCzXoNpaMM1ZpkBoa3Nr/921b74b837ae69f974aef332dc8d816a/image3.png)

#### Exporting coupon batch codes

The exported CSV file displays one row for a coupon batch, which means it doesn't show all the codes within the coupon batch, only its prefix.

To view or export all the codes within a coupon batch, you must follow the steps below: 

1. Find the coupon batch in the [coupon list](#coupon-list).
2. Click <i class="fas fa-ellipsis-v"></i> on the coupon batch row for more options.
3. Click <i class="fa-solid fa-arrow-down-to-line"></i> **Export**.

    Two options will appear on the screen:

    * <i class="far fa-clone"></i> **Copy all:** Allows you to copy the generated codes to your clipboard. You can also copy each code individually by clicking it.
    * **Export:** Allows exporting the generated coupons to a CSV file. The exported file contains a single column, with one code per row.

![export-coupons](//images.ctfassets.net/alneenqid6w5/P8bIJHkyTTi2jVZ325rko/92c61578ca7684d4f9a80dbcf0b5f690/image_7.png)

### View coupon usage

To view the total number of active coupons and the remaining available space for new coupons, click <i class="fas fa-chart-line"></i> `Coupon usage`.

![coupon-usage](//images.ctfassets.net/alneenqid6w5/CaNOtLMQXu26MGYfaAe4o/7773a8f9dc9f68d349183cad1dcc082a/image_8.png)

You are allowed a maximum of five thousand active coupons. To free up space, you can archive coupons in the [Coupon list](#coupon-list). If you need to increase the limit of active coupons, please contact our [Support team](https://support.vtex.com/hc/en-us/requests).

### Accessing archived coupons

To access the archived coupon list, follow the steps below:

1. In the top right corner of the **Coupons** page, click <i class="fas fa-ellipsis-v"></i> `More`.
2. Click <i class="fas fa-archive"></i> `Archived coupons`.

The archived coupon list presents the same information described in the [Coupon list](#coupon-list), except for the options available in the <i class="fas fa-ellipsis-v"></i> menu of each coupon row. The available options for archived coupons are:

* <i class="fas fa-search"></i> **View:** Allows viewing the details of an archived coupon in a non-editable version of the [create and edit coupon form](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU).
* <i class="fas fa-archive"></i> **Unarchive:** Allows accessing a coupon for usage and editing.

## Creating a coupon

The `Create coupon` button in the top right corner of the page allows you to access the form for creating a coupon. For more information on this procedure, please read [Creating a cupon](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU).

## Coupon list

The coupon list presents all the active coupons in your store, starting with the most recent one. By clicking on a coupon from the list, you will be redirected to the [edit coupon page](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU).

See below for more details on each column of the list:

* **Code:** Displays the coupon code.
* **Coupon type:** Indicates if it is a [single coupon or a coupon batch](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL).
* **UTM source:** Indicates the [UTM source](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) linked to the coupon, if any.
* **UTM campaign:** Indicates the [UTM campaign](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) linked to the coupon, if any.
* **Last edit:** Displays the date the coupon was last modified.
* **Button** <i class="fas fa-ellipsis-v"></i>: Displays a menu with several options, as described below:
   * <i class="fas fa-pencil"></i> **Edit:** Allows accessing the form for editing coupons to view or modify their details. Please read [Creating a coupon](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU) for more details on the form. Option available only for active coupons.
   * <i class="fas fa-archive"></i> **Archive:** Allows archiving the coupon, i.e., deactivate it from being used in the store. Option available only for active coupons.
   * <i class="fas fa-download"></i> **Export:** Opens a modal containing coupon batch codes. You can copy them or export them to a CSV file.  Option available only for coupon batches.
   * <i class="far fa-signal-alt-3"></i> **View usage details:** Opens a modal containing coupon usage information. For more details, please read the [View usage details](#view-usage-details) section. Option available only for active coupons.

### View usage details

The **View usage details** modal presents information on how each coupon was used, as described below:

* **Linked promotions:** Displays the name of the promotion associated with the coupon, if any. By clicking on the promotion name, you will be redirected to the promotion editing page.

    The coupon becomes valid when associated with at least one promotion. To associate it, you must use the same [utm_source or utm_campaign](https://help.vtex.com/en/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) both in the coupon and the promotion fields. Please read [Associating a coupon with a promotion](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU#associating-a-coupon-with-a-promotion) to learn more about this configuration.

* **Usage** (single coupons): Displays the number of times the coupon can be used and the number of remaining uses, if you have set a usage limit.

    This section presents the list of orders in which a coupon has been used and allows you to search by order number. When you click on the order number, you will be redirected to the order details page in **Orders management**.

![view-usage-details](//images.ctfassets.net/alneenqid6w5/1bFOCXCpWwoXzJToacK3BM/628adb058ee54d89dc271d31abb9e26c/view-usage-details.png)

* **General usage of the coupon codes** (coupon batches): Displays the total amount of times of the codes in a coupon batch have been used and the amount of remaining uses, if you have set a usage limit.

   This section also displays the list of codes in the coupon batch and allows you to search for a specific code. When you click on a code, you have access to the list of orders where the code has been used and you can search by an order number. Clicking on an order number will take you to the order details page in **Orders management**.

![select-the-code-coupon-batch](//images.ctfassets.net/alneenqid6w5/25yE4tmkHYDm4MISaz9upH/e30ef211427e536244083f5ad2045fba/selecione-o-codigo-grupo-en.PNG)

## Learn more
* [Coupons](https://help.vtex.com/en/tutorial/coupons-beta--1aAEN3ADpz19ss5JCIEBdL)
* [Creating a coupon](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU)

