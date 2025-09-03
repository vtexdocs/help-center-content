---
title: 'Offer Quality Filters'
id: 4xm0gi8leCyxHj8YdgHSJH
status: PUBLISHED
createdAt: 2023-02-27T12:15:26.682Z
updatedAt: 2024-06-20T21:38:38.621Z
publishedAt: 2024-06-20T21:38:38.621Z
firstPublishedAt: 2023-02-27T19:32:00.584Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: offer-quality-filters
legacySlug: offer-quality-filters
locale: en
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

[Marketplaces](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-marketplace) need to review and approve offers submitted by sellers to add products to the catalog. In the VTEX Admin, this [cataloging process](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) is done through the Received SKUs page.

Quality criteria are important for the marketplace's operation so that the offers submitted to the page meet the requirements relevant to the curation of your catalog.

**Offer quality filters** is the page where marketplaces add and manage the requirement groups applied to the received SKU cataloging process. To access it, in your VTEX Admin, go to **Marketplace > Offer Quality** or type __"Offer Quality"__ in the search bar.

![EN offer quality](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/offer-management/offer-quality-filters_1.png)

In this article, learn how to:

* [View Default Rules](#viewing-default-requirements). 
* [Create requirement groups](#creating-requirement-groups). 
* [Activate and deactivate requirement groups](#activating-and-deactivating-requirement-groups). 
* [Edit and delete requirement groups](#editing-and-deleting-requirement-groups). 
* [Move mandatory and optional requirements](#moving-mandatory-and-optional-requirements).  
* [Catalog offers with requirements](#cataloging-offers-with-requirements). 

## Advantages of using this feature

Once the requirements are created, the offers submitted by sellers that do not meet the criteria are automatically rejected and separated from the others so that the marketplace can identify them and ask the sellers to correct them. Thus, the number of offers the marketplace's catalog team must review decreases, increasing the curation process's efficiency. Learn more in the Cataloging offers with requirements section.

The feature allows the marketplace operator to perform many actions, each offering a different advantage for their business, as described in the following table.

| Feature action                                                                                                                                                                              | Advantage                                                                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Create requirements to filter offers submitted on the Received SKUs page.                                                                                                                   | Scales up the seller and product onboarding, boosting time-to-revenue in the marketplace channel.                      |
| Define to which sellers, categories, or brands the rules will apply and exception cases.                                                                                                    | It refines the criteria used for the rejection and approval process of offers.                                         |
| View which offers have been rejected for not meeting the mandatory and/or optional requirements, moving them to the "Pending", "Review", and "Rejected" tabs based on the requirements met. | It enables the marketplace catalog team to review each offer individually to see why it did not meet the requirements. |
| Bring more transparency to the cataloging criteria for submitted offers and how sellers and offers do or do not comply.                                                                     | It allows you to identify which sellers and offer types do not meet the requirements, speeding up corrections.         |

## Viewing Default requirements
![EN Default requirements](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/offer-management/offer-quality-filters_2.png)

The page, by default, has some pre-configured requirements that will apply to all categories, sellers, and brands, called _Default requirements_. Some of these criteria are natively configured in [VTEX Matcher](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424), the tool applied to VTEX marketplaces to support the cataloging process of submitted offers.

You cannot disable the _Default requirements_. They are visible on the Offer quality filters page to show you which rules already applies to all submitted offers.

To view the rules that are already active by default, on the Offer quality filters page, select the `Default requirements` requirement group and see the options:

- Has a maximum number of character limit of 150. 
- Up to 50 images. 
- Ref ID has a maximum character limit of 50. 
- EAN has a maximum character limit of 50. 

> ℹ️ You can configure VTEX Matcher's auto-approval of offers via [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig) REST API calls. These are different criteria than the ones available on the Offer Quality filters page and apply to the automatic approval of offers from specific sellers.

## Creating requirement groups

Create requirement groups to set rules that apply to sellers, categories, or marketplaces. Requirement groups apply rules to the fields listed below. Learn more about each Requirement type.

- [Price](#price) 
- [Quantity in stock](#quantity-in-stock)
- [Number of images](#number-of-images)
- [Description](#description)
- [Title](#title)
- [EAN](#ean)
- [Ref ID](#ref-id)
- [Seller brand](#seller-brand)
- [Brand](#brand)
- [Category](#category)
- [Seller category](#seller-category)
- [SKU specification](#sku-specification)
- [Product specification](#product-specification)

You can create mandatory and/or optional requirements. Learn more about the implications of each requirement in [Cataloging offers with requirements](#cataloging-offers-with-requirements).

> ℹ️ Notice that each requirement group holds only one value. Therefore, you need to create another requirement group to add more than one value. For example, if the marketplace wants to add the words "Shirts" and "T-shirts" as mandatory requirements for the Seller brand field, you need to create a requirement group for "Shirts" and another one for "T-shirts".

Follow the steps below to create a new requirement group:

   1. In the VTEX Admin, go to _Marketplace > **Offer Quality**_.
   2. Select an option:
      -	**Add mandatory requirements group**: The requirements that are essential for an offer to be eligible to be listed in your marketplace's catalog. Learn more about the effects of mandatory requirements in [Cataloging offers with requirements](#cataloging-offers-with-requirements).
      -	**Add your first optional requirements group**: The requirements that are desirable for an offer to be eligible to be listed in your marketplace catalog. Learn more about the implications of optional requirements in [Cataloging offers with requirements](#cataloging-offers-with-requirements).
   3. Fill in the [form fields](#form-fields):  
      a. Group information  
      b. Segmentation  
      c. Add exception cases (optional)  
      d. Add requirement  
   4. After adding requirements, click `Confirm`.  
   5. Click `Save`.  

You must enable requirement groups if you want them to be applied to received SKUs. Learn more in the [Activating and deactivating requirement groups](#activating-and-deactivating-requirement-groups) section.

### Form fields

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Form section</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Field</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Description</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Group information</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Group name</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Add the name that will identify the requirement group for your team. Examples: Requirements for Seller ABC, Image requirements, Filters for Shirts category.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Segmentation</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Categories</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define whether the requirements will apply to one or more categories.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Brands</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define whether the requirements will apply to one or more seller brands.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sellers</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define whether the requirements will apply to one or more marketplace sellers.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent"> </span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Add exception cases</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Categories</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define which categories are not affected by this requirement group.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Brands</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define which brands will not be affected by this requirement group.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Sellers</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define which sellers will not be affected by this requirement group.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="3"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Add requirement</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent"> </span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Offer field</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Select which field will be affected by the requirement from the options:</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Category</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Seller category</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Description</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">EAN</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Product specification</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">SKU specification</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Brand</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Seller brand</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Number of images</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Price</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Quantity in stock</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Ref ID</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Image size</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">-   </span>	<span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Title</span><br><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Learn more in the Requirement types section.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Operation</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Select the operation applied to that field, such as "Is", "Is not", "Equal to", "Minimum", or others. See all available options in the Requirements types section.</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Values</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Define the values that will be affected by the operation. Their filling depends on the selected operation. In some operations, the "values" field will allow the insertion of more than one value. See all available options in Requirement types.</span></td>
  </tr>
</tbody>
</table>

### Requirement types

You can create groups of rules for different business applications. Each requirement group has the field, operation, and values that the retailer defines. See below the requirement types and operations available for each.

#### Price

- **At least**: The minimum price value required for the received offers.
-	**At most**: The maximum price value required for the received offers.

#### Quantity in stock

-	**At least**: The minimum stock value required for the received offers.
- **At most** The maximum stock value required for the received offers.

#### Number of images

-	**At least**: Defines the minimum number of images required to validate an offer.
- **At most**: Defines the maximum number of images required to validate an offer.
-	**Is:** Defines the exact number of images required to validate an offer.

#### Description

- **Has the word**: Defines a string that must be in the offer description.
- **Doesn't have the word**: Defines a word that must not be in the offer description.
-	**Doesn't have the character type**: Defines a character that must not be in the offer description.
-	**Has a maximum number of characters of**: Defines the maximum character limit in the offer description.
-	**Has a minimum number of characters of**: Defines the minimum character limit in the offer description.
-	**Filled**: Defines that the description must be filled in.

#### Title

-	**Has the word**: Defines a word that must be in the offer title. You can add more terms by creating another requirement group.
-	**Doesn't have the word**: Defines a word that must not be in the offer title. You can add more terms by creating another requirement group.
-	**Doesn't have all characters in**: Defines whether all characters in the title should be in uppercase or lowercase.
-	**Has a maximum number of characters**: Defines the maximum character limit in the offer title.
-	**Has a minimum number of characters**: Defines the minimum character limit in the offer title.
-	**Filled**: Defines that the title must be filled in.

#### EAN

-	**Filled**: Defines that the EAN field must be filled in the offer.
- **Has a number of characters equal to**: Defines that the EAN must have a specific number of characters.

#### Ref ID

-	**Filled**: Defines that the Ref ID field must be filled in.
- **Has a number of characters equal to**: Defines that the Ref ID must have a specific number of characters.

#### Seller brand

-	**Is**: Defines that the offer brand field must correspond to a specific value.
-	**Is not**: Defines that the offer brand field must not match a value set in the rule.
-	**Has not**: Defines a word that must not be in the offer brand. You can add more terms by creating another requirement group.
- **Has**:  Defines the word that must be in the offer brand. You can add more terms by creating another requirement group.
-	**Filled**: Defines that the brand field must be filled in.

#### Brand

This field is populated by [VTEX Matcher](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) when the brand submitted by the seller has been mapped. This rule allows you to validate that sellers only send previously mapped brands or block a specific brand that has been mapped in the past.

-	**Is mapped**: Defines that the brand submitted by the seller must be mapped in the VTEX Matcher.
-	**Is**: Defines that the offer brand field must correspond to a specific value.
-	**Is not**: Defines that the offer brand field must not correspond to a value specified in the rule.

#### Category

This field refers to the mapped categories or the offer field populated if the marketplace has already mapped the seller category.

-	**Is**: Defines that the offer category field must correspond to a specific value.
-	**Is not**: Defines that the offer category field must not correspond to a specific value.
-	**Has**: Defines a value that must be in the seller category.
-	**Has not**: Defines a value that must not be in the seller category.
-	**Filled**: Defines that the "Category" field must be filled in.

#### Seller category

-	**Is**: Defines that the offer _Category_ field must correspond to a specific value.
-	**Is not**: Defines that the offer _Category_ field must not correspond to a specific value.
-	**Has**: Defines a value that must be in the seller category.
-	**Has not**: Defines a value that must not be in the seller category.
- **Filled**: Defines that the _Category_ field must be filled in.

#### SKU specification

-	**Filled**: Defines that the SKU specification must be filled in.
-	**Not filled**: Defines that the SKU specification must not be filled in.
-	**Has**: Defines a value that must be in the SKU specification.
-	**Has not**: Defines a value that must not be in the SKU specification.

#### Product specification

-	**Filled**: Defines that the product specification must be filled in.
- **Not filled**: Defines that the product specification must not be filled in.
-	**Has**: Defines a value that must be in the product specification.
-	**Has not**: Defines a value that must not be in the product specification.

## Activating and deactivating requirement groups

The marketplace chooses when the requirements created will be applied to new received SKUs and even to the previous ones. So, the page allows you to activate and deactivate all requirement groups created for the filters to be applied to all the offers received by sellers.

Note that by activating the requirements, offers will be automatically rejected or submitted for manual review based on the set criteria.

Follow the steps below to activate the requirements created:

1. In the VTEX Admin, go to _Marketplace_ > **Offer Quality**.
2. Select the `Active` option.
3. Check an option from:
     - New offers and existing pending SKUs
     - Only new offers
4. Click **Activate**.

Select the **Inactive > Confirm** to deactivate.

## Editing and deleting requirement groups

To edit requirement groups, on the Offer Quality filters page, **select the desired group > click menu > Edit > change the desired fields > Save**.

To delete requirement groups, **select the desired group > click menu > Delete group > Delete**.

## Moving mandatory and optional requirements

You can move a requirement created as optional to mandatory and vice versa. To do this, on the Offer Quality filters page, **select the desired group > click menu > Move to optional/mandatory requirements > Confirm**.

## Cataloging offers with requirements

Once the requirement groups have been created and activated, they take effect following the set rules. This means that all offers submitted by sellers will be filtered according to the criteria defined for sellers, brands, or categories to get to the Received SKUs page, where the [cataloging process](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) happens.

The following table describes what each requirement type triggers for offers that do or do not meet the set criteria.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Requirement type</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Requirement action</span></th>
    <th class="tg-1wig"><span style="font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Where the offers are sent</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax" rowspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Mandatory requirements</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">They automatically reject offers that do not meet the set criteria and send them to the Rejected tab.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Rejected tab</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">They send offers that meet the set criteria to the Pending tab.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pending tab</span></td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Optional requirements</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">They send to the Review tab offers that don't meet the requirements.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Review tab</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">They send offers that meet the set criteria to the Pending tab if they also meet the mandatory requirements.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pending tab</span></td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">No requirements configured</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Offers are sent to the Pending tab.</span></td>
    <td class="tg-0lax"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent">Pending tab</span></td>
  </tr>
</tbody>
</table>

