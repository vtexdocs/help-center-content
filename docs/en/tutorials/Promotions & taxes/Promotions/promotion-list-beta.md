---
title: 'Promotion List'
id: 4yB7nNdliiFxBTXE19GCIi
status: PUBLISHED
createdAt: 2022-05-05T13:39:53.273Z
updatedAt: 2023-07-24T13:34:09.177Z
publishedAt: 2023-07-24T13:34:09.177Z
firstPublishedAt: 2022-05-05T13:52:17.590Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: promotion-list-beta
locale: en
legacySlug: promotions-list-beta
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The VTEX platform allows you to optimally and practically add different promotion types suited for different scenarios. Through a centralized interface for managing promotions, your store can offer more benefits focused on customer attraction and retention.

The **Promotions** module is flexible when it comes to creating promotion scenarios with specific conditions for different contexts. Besides filtering and exporting promotions, you can view the active ones and archive them.

Access the page in the VTEX Admin through the <i class="fas fa-bullhorn"></i> **Promotions > Promotions**.

The page displays the list of your store's promotions and their basic information:

| **Field name** | **Description** |
|---|---|
| `Name` | Promotion name. |
| `From` | Promotion start date. |
| `To` | Promotion end date. |
| `Status` | Promotion status, which can be: <p> __Active:__ when a promotion is active.</p> <p>__Scheduled:__ when the promotion was scheduled.</p> <p>__Paused:__ when the promotion is paused. <p>__Completed:__ when the promotion ended.</p> |

![listadepromocoes en](https://images.ctfassets.net/alneenqid6w5/3QkCDSGnYVvzz6ygn3ZUm8/c790e13db5f9ce7b8e9fa276478813d1/listadepromocoes_en.gif)

You can sort the promotions by name, date, or status. To do this, click on the title of the column with the information you want to use as sorting criteria.

All the features available on the page will be described in the following sections:

- [Creating promotions](#creating-promotions)
- [Archived promotions](#archived-promotions)
- [Searching promotions](#search-promotions)
- [Exporting promotions](#export-promotions)
- [Promotion usage](#promotion-usage)
- [Filtering promotions](#filter-promotions)
- [Action menu in the promotion list](#actions-menu-in-the-promotion-list)

## Creating promotions

To add a new promotion, click the `Create Promotion` button. Then, you can select the following types of promotions: 

- [Regular](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI)
- [Buy Together - Bundle](/en/tutorial/compre-junto--tutorials_323)
- [More for Less](/en/tutorial/leve-mais-por-menos--tutorials_325)
- [Progressive Discount](/en/tutorial/desconto-progressivo--tutorials_324)
- [Buy One Get One](/en/tutorial/compre-e-ganhe--tutorials_322)
- [Campaign Promotion](/en/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume)

## Archived promotions

To access the **Archived Promotions** page, click the <i class="fas fa-ellipsis-v"></i> icon and then <i class="fas fa-box"></i>. 

You can unarchive or duplicate archived promotions by clicking the <i class="fas fa-ellipsis-v"></i> icon. When you unarchive a promotion, its status will change to `Paused`.

## Search promotions

You can use the search bar to search for a specific promotion by name, description, or UTM.

## Export promotions

You can download a CSV file with the promotions available in your store and their respective information. To do this, click the <i class="fas fa-download"></i> `Export` button next to the search bar. The exported file considers the filters applied to the list and does not include archived promotions.

The file contains the following information about each promotion:

| **Column** | **Description** |
|---|---|
| `ID` | The promotion ID. |
| `Name` | The promotion name. |
| `Discount Type` | Type of discount applied in the promotion. |
| `From` | The promotion start date. |
| `To` | The promotion end date. |
| `Status` | The current promotion status. Possible options are **Active**, **Scheduled**, **Paused**, or **Completed**. |

## Promotion usage

![usodaspromoções en](https://images.ctfassets.net/alneenqid6w5/5cvRZbj2TqwHuQcx6jjqm4/d94a8916fcd88257d83f8c8edd0a0dbf/usodaspromo____es_en.JPG)

To view the total of your active promotions and the remaining quota for new promotions, click `Promotion usage`. 

By default, the maximum number of active promotions is 100. If you need to increase this limit, please contact [our Support](https://support.vtex.com/hc/en-us/requests).

## Filter promotions

![filtrodepromocoes en](https://images.ctfassets.net/alneenqid6w5/5ejpdUDVPbixeLp6nmDB1q/d637dba80b4cbda6194cae7cbf630785/filtrodepromocoes_en.gif)

The promotion list can be filtered according to your needs by using the following filters:

- **Discount type:** The type of discount that will be applied to the promotion. The options are: [Regular](/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [Buy Together - Bundle](/en/tutorial/buy-together--tutorials_323), [More for Less](/en/tutorial/creating-a-more-for-less-promotion--tutorials_325), [Progressive Discount](/en/tutorial/progressive-discount--tutorials_324), [Buy One Get One](/en/tutorial/buy-one-get-one--tutorials_322), and [Campaign Promotion](/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume).
- **Status:** The status of the promotion. The options are: `Active`, `Scheduled`, `Paused`, and `Completed`.
- **Last modified:** Last update history for the last 12 months, 3 months, 30 days, 7 days, or the day before the query.
- **Trade policy:** Trade policy under which the promotion will be applied.
- **UTM:** URL parameters used to track traffic. The options are `With UTM` and `Without UTM`. 

Select the desired filters and click on `Apply` to filter the promotions. To cancel the selection, click on `Clear` on the desired filters.

## Actions menu in the promotion list

By clicking on the <i class="fas fa-ellipsis-v"></i> icon in a promotion, you can perform the following actions:

- <i class="far fa-check-circle"></i> __Edit:__ edit the promotion
- <i class="far fa-times-circle"></i> __Deactivate:__ pause the promotion.
- <i class="far fa-clone"></i> __Duplicate:__ create a copy of the promotion.
- <i class="fas fa-archive"></i> __Archive:__ archive the promotion. The promotion will automatically be moved to the *[Archived Promotions](#archived-promotions)* page.

#### Learn more
- [What are utm_source, utm_campaign, and utm_medium](/en/tutorial/o-que-sao-utm-source-utm-campaign-e-utm-medium--2wTz7QJ8KUG6skGAoAQuii)

