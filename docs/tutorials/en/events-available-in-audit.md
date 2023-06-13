---
title: Events available in Audit
id: 6r1Mzcu5NmkmmDLJlz9CCZ
status: PUBLISHED
createdAt: 2022-06-22T16:05:16.214Z
updatedAt: 2023-04-25T14:51:35.871Z
publishedAt: 2023-04-25T14:51:35.871Z
firstPublishedAt: 2022-06-22T16:28:52.801Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: events-available-in-audit
legacySlug: events-available-in-audit
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

Below, you will find a list of the potential events available in [Audit](https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA#) for each app.

<div class = "alert alert-info">
In case you encounter an event in Audit which has not been included in this list, please contact us through the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmnotPvPjw-SjiE7lt2Nt3RQgNUe10ixXZmuO2v9enOJReoQ/viewform">documentation feedback page</a>.
</div>

<div class="alert alert-warning">
In the Audit filter options, you can find the <code>Profile System</code> option and the applications mentioned below. As this option refers to features in closed beta, most accounts will not have events associated with them.
</div>

## Catalog admin

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Product Activation
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Product activation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Product ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Product Commercial Condition Change
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in product commercial condition.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Product ID and changed list of conditions.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Attachment Association    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">SKU Attachment Association.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">SKU ID, name and attachment ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Archive Upload    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File delivery.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File name.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Field Activation    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Catalog field activation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Field name, ID and status.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Seller Binding    
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">SKU and seller binding.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Seller’s ID, SKU ID in seller’s catalog and SKU ID in the marketplace catalog.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Seller Unbinding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Removal of SKU and seller binding.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Seller’s ID, SKU ID in seller’s catalog and SKU ID in the marketplace catalog.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">SKU Seller Removal
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Removal of seller SKU.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">SKU ID in seller’s catalog.
   </td>
  </tr>
</table>

## Pricing

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Price
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation or change of a SKU price.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">SKU ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Price Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation or change of a price table.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identifies the created or changed table.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Price Tables
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation or change of multiple price tables.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identifies the created or changed tables.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Price Deleted
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of a SKU price.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">SKU ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Config
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation or change of price settings.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identifies the created or changed configuration.
   </td>
  </tr>

  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Fixed Price Modified
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change of fixed price.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the fixed price changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Catalog Step
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation or change of a price rule.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Price rule created or changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Deleted Fixed Prices From Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of fixed price from the related price table.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the table and the deleted price.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Compatibility Post Prices
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change of price using the compatibility API with the PricingV1 contract
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the changed price.
   </td>
  </tr>
</table>

## Logistics

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Carrier Create
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carrier creation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carrier ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Carrier Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carrier update.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carrier ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Carrier Delete
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carrier deletion.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Carrier ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Dock Create
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Loading dock creation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Loading dock ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Dock Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Loading dock update.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Loading dock ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Dock Delete
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Loading dock deletion.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Loading dock ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse Create
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse creation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse update.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse Delete
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse deletion.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Warehouse ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Pickup Point Save
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Pickup point creation or change.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Pickup point ID.
   </td>
  </tr>
</table>

## OMS

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Start Handling
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Informs VTEX that the store has started handling an order. This helps order workflow.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Order ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Status
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Changes order status.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Order ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Payment Notification
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sends payment notification of certain orders.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Order ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Changes price module settings.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Short description of the change.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resend Last Email
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resends the last email related to the order in the Message Center.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Order ID.
   </td>
  </tr>
</table>

## Promotions

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Rate Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in fee settings.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Fee configuration ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Promotion Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in promotion settings.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Promotion configuration ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Coupon Configuration
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Coupon change.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Coupon code.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unarchived Calculator
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Unarchived promotion or fee.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Promotion or fee configuration ID.
   </td>
  </tr>
</table>

## Checkout

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Configured OrderForm
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in OrderForm settings, which is in charge of running the store checkout.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Action description (“configurated OrderForm”)
   </td>
  </tr>
</table>

## Portalv2

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Configuration Updated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in portal settings.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">“*”
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Saved
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in portal file.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File name changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Site Created
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Website creation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Name of the created website.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Template Updated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Changes in portal template.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Template name changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Page Updated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Page changes.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Page name.
   </td>
  </tr>
</table>

## Portal CMS

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Update
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change in portal file.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File name and ID changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Upload
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Portal file upload.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File name changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">File Deleted
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File removal.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">File name and ID changed.
   </td>
  </tr>
</table>

## Conditions

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PutCondition
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Condition creation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the condition created.
   </td>
  </tr>
</table>

## VTEX ID

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordCreated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation of a first-time password in the store or the VTEX Admin
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">User ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordUpdated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change of store or VTEX Admin password by the user.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">User ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">IdentityProviderChanged
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identity provider configuration change. For example: Creating a customized OAuth integration and changing information in an existing OAuth configuration.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identity provider.
   </td>
  </tr>
</table>

## License Manager

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Block AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key blocking.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key blocked.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Accept Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Accept the invitation to become the sponsor user.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of the user who accepted the invitation.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Create a user or change user information.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">User ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Account
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Create an account or edit account information.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Created or changed account.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Access role editing.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Role edited.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of a role.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Role deleted.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unblock AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key unlocking.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Unblocked application key.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Allowed
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource access allowed.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource key and user ID to which access has been allowed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Cancel Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cancellation of sponsor user invitation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of invited user.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of a user.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of deleted user.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Update Binding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding update.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding updated.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Denied
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource access denied.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource key and user ID to which access was denied.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create New AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation of application key.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key created.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation of a sponsor user invitation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of invited user.
   </td>
  </tr>
</table>

