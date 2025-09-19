---
title: 'Creating pickup points'
id: 2R5ClQiwe4KoSQgsuiOw4E
status: PUBLISHED
createdAt: 2017-10-25T17:20:03.898Z
updatedAt: 2023-03-29T20:26:32.719Z
publishedAt: 2023-03-29T20:26:32.719Z
firstPublishedAt: 2017-10-30T18:28:31.695Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: creating-pickup-points
legacySlug: how-to-import-pickup-points-using-spreadsheets, adding-pickup-points
locale: en
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Pickup points are physical locations where customers can pick up orders placed on ecommerce platforms. Configuring pickup points is an optional step in your store's [shipping strategy](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3). 

You can create pickup points using the [Create/update pickup point API](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1#createupdate) or via VTEX Admin. This article explains how to perform the second process.

There are two ways to create a pickup point in the Admin:

* [Creating pickup points individually](#creating-pickup-points-individually)
* [Creating pickup points using the template](#reating-pickup-points-using-the-template)

> ⚠️ Creating pickup points is one of the steps required for the feature to work properly. Please refer to the article [pickup points](/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) to see the other [settings necessary](/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R#setup) to make pickup points available to your customers.

## Creating pickup points individually

1. In the VTEX Admin, go to **Shipping > Pickup points**, or type *Pickup points* in the search bar at the top of the page. 
3. Click <i class="fas fa-plus"></i> `Add pickup point`.
4. Fill in the [fields](#fields).
5. Click `Save changes`.

### Fields

#### General information

* **Name:** name of the pickup point as it will be displayed at checkout.
* **ID:** identification of the pickup point. If this field is not filled in, the system will choose an ID automatically. Do not use space characters.
* **Third-party pickup point:** check this box if the pickup point is not related to your store. Third-party pickup points are displayed with less relevance than those of your own store.

  > ❗ The **Third-party pickup point** configuration currently is not available.

Select <i class="fas fa-toggle-on"></i> to activate the pickup point.

#### Pickup point address

* **Country:** the country where the pickup point is located.
* **Search address:** enter the address information for the search. You can use the zip code, street, city, number, and additional address information. 
* To edit the address information, click `Edit`. 
* To add a different address, click `Clear` and search again.> ℹ️ The address information and the location on the map will be displayed at checkout.

#### Additional information

* **Pickup instructions:** enter information that will help your customer pick up the packages at the pickup point. For example, at which door the items can be picked up or which documents the customer must present when picking up their order. These instructions will be displayed at checkout, when the customer chooses the pickup point. 
* **Tags:** add tags to group pickup points. These tags are used to link [shipping policies](/en/tutorial/shipping-policy--tutorials_140) to pickup points.  

#### Business Hours

* **Days of the week:**
    1. Check the boxes for the days the pickup point will be available for your customers to pick up their orders. 
    2. Select the pickup point's business hours for each day.> ℹ️ If this field is not filled in, the platform will consider that the pickup point operates 24 hours a day.

* **Exceptions or holidays:** to add specific days when the pickup point is not operating, follow the steps below.
    3. Click `Add an exception`;
    4. Fill in the day and time;
    5. Click on `Add`.

> ⚠️ The business hours defined for a pickup point are for informative purposes only and are not used for SLA calculation. To change the settings that influence the delivery time frame, please specify the business hours in the [shipping policy](/en/tutorial/shipping-policy--tutorials_140) related to the pickup point. Holidays must be configured on the [Holidays page](/en/tutorial/registering-holidays--2ItOthSEAoyAmcwsuiO6Yk), so that they can be considered in the delivery time calculation.

## Creating pickup points using the template

You can create pickup points by importing the template (XLS file). This way, you can create more than one pickup point at a time.

> ℹ️ The XLS file must not exceed 10MB (approximately 50,000 pick points). If necessary, you can upload more than one template.

1. In the VTEX Admin, go to **Shipping > Pickup points**, or type *Pickup points* in the search bar at the top of the page. 
2. Click <i class="fas fa-upload"></i> `Upload an XLS`.
3. Download the template and fill in the [fields](#template-fields).> ℹ️ Please note that the template comes with example values, which must be replaced with the data from your store's pickup points.
4. After uploading the template, click `OK`.   

### Template fields

Fill in the template according to the information in the table below.

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 2px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 2px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Template column**
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Description**
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Required field**
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">**Example**
   </th>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**ID**
   </td>
   <td>Identification code of the pickup point.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">123</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Name**
   </td>
   <td>Name of the pickup point displayed to the customer at checkout.
   </td>
   <td><center>Yes</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Pickup point A</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Description**
   </td>
   <td>Description of the pickup point displayed at checkout.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Store located in mall X</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Instructions**
   </td>
   <td>Instructions to facilitate the pickup.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Pick up your package at the main entrance</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**CountryName**
   </td>
   <td>Country where the pickup point is located.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">United States</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**City**
   </td>
   <td>City where the pickup point is located.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Los Angeles</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**PostalCode**
   </td>
   <td>Zip code of the pickup point location. 
   </td>
   <td><center>Yes</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">90007</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**CountryAcronym**
   </td>
   <td>3-digit country code according to ISO 8601 (RFC 3339).
   </td>
   <td><center>Yes</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">USA</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**State**
   </td>
   <td>State where the pickup point is located (abbreviation).
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">CA</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Latitude**
   </td>
   <td>Latitude of the pickup point.
   </td>
   <td><center>Yes</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">-22,94</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Longitude**
   </td>
   <td>Longitude of the withdrawal point. 
   </td>
   <td><center>Yes</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">-43</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Neighborhood**
   </td>
   <td>Neighborhood where the pickup point is located.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Downtown Los Angeles</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Street**
   </td>
   <td>Street where the pickup point is located.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">S Grand Avenue</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Number**
   </td>
   <td>Number (address) of the pickup point.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">300</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Complement**
   </td>
   <td>Additional address information.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">#100</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**Reference**
   </td>
   <td>Reference point to help the customer find the pickup point.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">In front of the park</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**IsActive**
   </td>
   <td>Enter <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span> to activate the pickup point or <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">false</span> to deactivate it. Active pickup points are displayed at checkout.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">**BusinessHours**
   </td>
   <td>Indicates the operating hours of the pickup point. It must be filled in as follows:
<body>
<ul>
<li>WeekDay,StartTime,EndTime, without spaces, separated by commas. </li>
<li>Add one weekday at a time, with its respective opening hours, separated by semicolons (;). </li>
<li>The days of the week must be filled in according to the following codes: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.</li>
<li>Times must follow the 24-hour standard and the hh:mm format, where hh represents the hour and mm represents the minutes.</li>
This field is not considered for SLA calculation.  To change the settings that influence the delivery time frame, please specify the hours of operation in the [shipping policy](/en/tutorial/shipping-policy--tutorials_140) related to the pickup point. Holidays must be configured on the [Holidays](/en/tutorial/registering-holidays--2ItOthSEAoyAmcwsuiO6Yk) page, so that they can be considered in the delivery time calculation.
</ul>
</body>
   </td>
   <td><center>No</center>
   </td>
   <td>For example, if a pickup point operates on Mondays and Tuesdays from 9:00 am to 6:00 pm, the field must be filled in as follows: <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">1,09:00:00,18:00:00;2,09:00:00,18:00:00;</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">PickupHolidays
   </td>
   <td>Fill in this field if there are days when the pickup points are not available. It must be filled in as follows:
<body>
<ul>
<li>Date,StartTime,EndTime, without using spaces, separated by commas. </li>
<li>The date must be entered following the format yyyy-mm-dd, where yyyy represents the year, mm represents the month, and dd represents the day.</li>
<li>Holidays must be added one by one. To add more than one holiday, separate them using semicolons (;), without using spaces.</li>
<li>Times must follow the 24-hour standard and the hh:mm format, where hh represents the hour and mm represents the minutes.</li>
</ul>
</body>
   </td>
   <td><center>No</center>
   </td>
   <td>A holiday on December 28, 2018 would be filled in as follows:
<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">2018-12-28,00:00,00:00</span>
A holiday on November 25, 2016 with operation starting at 1:00 pm would be filled in as follows: 
<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">2016-11-25,00:00, 13:00;2018-11-17T00:00:00Z,00:00,00:00</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">Tags
   </td>
   <td>Enter tags to identify a group of pickup points.
   </td>
   <td><center>No</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">pickup1;pickup2;pickup3</span>
   </td>
  </tr>
  </table>
