---
title: 'Gift Card Data Pipeline'
id: 4XAnyc4scy3OG6RdnD7OEf
status: PUBLISHED
createdAt: 2024-09-02T18:39:23.356Z
updatedAt: 2025-03-07T11:30:02.556Z
publishedAt: 2025-03-07T11:30:02.556Z
firstPublishedAt: 2024-09-02T19:20:54.808Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: gift-card-data-pipeline
locale: en
legacySlug: gift-card-data-pipeline
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

The `gift cards` dataset includes historical information on gift cards that have been created or modified. This dataset only provides information on gift cards created natively within VTEX, using the [Giftcard API](https://developers.vtex.com/docs/api-reference/giftcard-api).

<div class="alert alert-warning"> 
Gift cards created through customized or external apps will not appear in this data model.
</div>

This section includes the following information:

- [Gift card data characteristics](#gift-card-data-characteristics)  
- [Table gift_cards_events_raw](#table-gift-cards-events-raw)  
- [Analyses with gift cards](#analyses-with-gift-cards)  
- [Correlations with other data](#correlations-with-other-data)  

## Data Characteristics

| **Characteristic** | **Description** |
|:---:|:---:|
| **Data source** | Obtained from information in the [Audit](/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA). |
| **Availability** | VTEX Admin. |
| **History** | Data is maintained for two years, starting in 2024 for customers already using the VTEX platform. |
| **Minimum update interval** | One hour. |

## Table: gift_cards_events_raw

Below are the fields that constitute the table:  

| **Column Name** | **Column Type** | **Column Description** |
|:---:|:---:|:---:|
| account_name | character varying(255) | Name of the account related to the gift card operation. |
| event_date | timestamp with time zone | Date and time of the given operation. |
| operation | character varying(200) | Type of operation. |
| subject_id | character varying(200) | Subtype of operation. |
| author_id | character varying(1000) | Author of the operation. |
| giftcardid | character varying(5000) | Id of the gift card used on the operation. Only available for operations `CREATE_GIFT_CARD` or `EDIT_GIFT_CARD`. |
| giftcardvalue | character varying(5000) | Value of the gift card used on the operation. Only available for operations `CREATE_GIFT_CARD` or `EDIT_GIFT_CARD`. |
| edit_initial_value | character varying(5000) | Initial value of the gift card, before the edit operation. Only available for operation `EDIT_GIFT_CARD`. |
| edit_final_value | character varying(5000)	 | Final value of the gift card, after the edit operation. Only available for operation `EDIT_GIFT_CARD`. |
| batch_id | character varying(100) | Identifier used when data is loaded into the table for quality control of data ingestion. |

## Analyses with Gift Cards

Here are some analyses you can perform with the gift cards table:  

- **List of Created Gift Cards:** review the current list of created gift cards.  
- **Audit Gift Card Information:** examine activities related to your gift cards, including identifying who created a specific gift card and viewing the edit history of a gift card.  

## Correlations with Other Data

Gift card data is related to order data, providing a comprehensive analysis of purchases and sales. Here are some examples:  

- **Most Used Gift Cards:** Combining this data model with [order](/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz) data, you can understand how gift cards are being utilized and monitor their usage.  
- **Impact on Sales:** Similarly, combining with [order](/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz) data allows you to assess how gift cards influence sales.  

### Discover other Datasets

- [Catalog](/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventory](/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navigation](/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)
- [Payments](/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)
- [Orders](/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)
- [Promotions](/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Bridge logs](/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

