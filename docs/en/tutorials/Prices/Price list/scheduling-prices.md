---
title: 'Scheduling prices'
id: 4vVha6TGzYkguWuMOqCcCk
status: PUBLISHED
createdAt: 2017-12-27T16:18:43.304Z
updatedAt: 2024-09-06T19:59:43.713Z
publishedAt: 2024-09-06T19:59:43.713Z
firstPublishedAt: 2018-01-04T15:12:09.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: scheduling-prices
locale: en
legacySlug: scheduling-price-on-pricing-v2
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

In the Prices module, you can schedule fixed prices for the products in your store. The scheduling dates must follow the standardization [RFC3339](https://www.ietf.org/rfc/rfc3339.txt). It is possible to specify a time zone, which can be either UTC or GMT. If this is not configured, UTC time will be used.

This article will cover the following topics:

- [Scheduling fixed prices in the Admin](#scheduling-fixed-prices-in-the-admin)
- [Filling in the fixed price fields](#filling-in-the-fixed-price-fields) 
- [Scheduling prices by importing a fixed price template](#scheduling-prices-by-importing-a-fixed-price-template)
- [Scheduling prices via API](#scheduling-prices-via-api)

## Scheduling fixed prices in the Admin

To schedule prices in the Admin, please follow the steps below.

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Select a SKU price cell from the desired price table.
3. Click on `Define fixed prices`.
4. Under **Fixed prices**, click on `Add another price`.
5. Fill in the [fields](#filling-in-the-fixed-price-fields).
6. Click on `Save`.

### Filling in the fixed price fields

- **Minimum quantity:** the minimum SKU quantity for the fixed price to be applied.
- **Price:** fixed price amount.
- **Set list price:** choose if you want to add <i class="fas fa-toggle-on"></i> or not <i class="fas fa-toggle-off"></i> a list price.
- **List price:** suggested retail price for the SKU.
- **Schedule fixed price:** choose if you want to schedule <i class="fas fa-toggle-on"></i> or not <i class="fas fa-toggle-off"></i> a fixed price.
- **Status:** status indicating whether the price scheduling is **active** or **inactive**.
- **Start date:** indicates the date from which the fixed price will be valid.  
- **Start time:** indicates the time from which the fixed price will be valid.  
- **End date:** indicates the date from which the fixed price will no longer be valid.  
- **End time:** indicates the time from which the fixed price will no longer be valid.  

>ℹ️ When scheduling prices in the Admin, the time zone considered will be the one used in the user’s computer.

## Scheduling prices by importing a fixed price template

You can also schedule prices by importing a fixed price template. To do this, please follow the steps below:

1. In the VTEX Admin, go to **Prices > Price list**, or type **Price list** in the search bar at the top of the page.
2. Click on the 📥 icon to export the template to be filled in.
![Agendar preços - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20list/scheduling-prices_1.png)
3. Select only the **Fixed prices table** option.
4. Click on `Export 1 table`.

The template will be sent to your email and you can download it. After downloading the template, fill in the columns with the following information:

- **SKU ID:** the ID of the SKU to which you want to add the fixed price.
- **Trade policy:** the name or ID of the trade policy to which the fixed price will be applied.
- 
- **List price:** suggested retail price for the SKU.
- **Min quantity:** the minimum SKU quantity for the fixed price to be applied.
- **Date from:** the date and time from which the fixed price will be valid, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format. -
- **Date to:** the date and time from which the fixed price will no longer be valid, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) format.

>ℹ️ The **Date From** and **Date To** fields follow the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt" target="_blank) format, which includes the time zone. For example, if a promotion starts or ends at 10:00 PM on December 30, 2024, in Argentina (time zone GMT-3), the value to be entered will be: `2024-12-30T22:00:00-03:00`. If the time zone is not specified, the system will assume UTC. To indicate a price valid from midnight (00:00) UTC on the same day, the field should contain: `2024-12-30T00:00:00Z`.

![Agendar preço fixo planilha PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20list/scheduling-prices_2.png)

Once you have finished filling in the template, you must import it into the store. Please follow the steps below:

1. In the VTEX Admin, go to *Prices > Price list*, or type *Price list* in the search bar at the top of the page.
2. Click on the 📤 icon to import the completed template.
3. Select only the **Fixed prices table** option.
4. If you want to overwrite existing fixed prices with those in your template, select **Overwrite all existing prices**. If there are no fixed prices in your store, nothing will be overwritten. 
5. Click on `Import fixed prices table`.
6. Select the desired template from your computer files. It will be automatically submitted and the fixed prices will be saved.

## Scheduling prices via API

Use the [Create or update price or fixed price](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-) endpoint of the Pricing API to schedule a fixed price via API.
