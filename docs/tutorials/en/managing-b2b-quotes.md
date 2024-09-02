---
title: 'Managing B2B quotes'
id: 34EDJHyBVsewtRu0NnPMCq
status: PUBLISHED
createdAt: 2024-08-08T11:03:45.696Z
updatedAt: 2024-08-30T11:11:24.892Z
publishedAt: 2024-08-30T11:11:24.892Z
firstPublishedAt: 2024-08-08T17:16:35.983Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slug: managing-b2b-quotes
locale: en
legacySlug: managing-b2b-quotes
subcategory: 74CLq9axeDw1YPzAtCpktn
---

The **B2B Quotes** app allows customers using the [B2B Organizations](https://help.vtex.com/pt/tutorial/gerenciamento-de-organizacoes-b2b--1UwNCWhML3BsV6anpoUvVZ) app to request quotes for their shopping carts and save them for future use, including items, quantities, and prices. This facilitates price negotiations with the store's sales associates and order approval flows within the organization.

In this article, you'll find:

- [Access permissions](#access-permissions)
- [My quotes](#my-quotes)
- [Creating quotes or saving carts](#creating-quotes-or-saving-carts)
- [Quote details](#quote-details)
- [Editing quotes](#editing-quotes)

## Access permissions
You must configure some [permissions](#access-permissions) to access B2B Quotes. Permission for using quotes and saved carts may vary depending on the user role.

|                                            |                                                                                                                                          |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|                                            |                                                                                                                                          |
| Permission                                 | Roles                                                                                                                                    |
| Create quotes and carts                    | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver<br>Organization Buyer |
| Access quotes and carts of my cost centers | Sales Representative<br>Organization Approver<br>Organization Buyer                                                                      |
| Access my organization quotes and carts    | Sales Manager<br>Organization Admin                                                                                                      |
| Access all quotes and carts                | Store Admin<br>Sales Admin                                                                                                               |
| Create orders from quotes and carts        | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver                       |
| Reject quotes and carts                    | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver                       |
| Edit quotes and carts of my cost centers   | Sales Representative                                                                                                                     |
| Edit my organization quotes and carts      | Sales Manager                                                                                                                            |

## My quotes
The **B2B Quotes** app enables the page **My Quotes**, which is an interface for managing quotes and carts saved in the store. To access this page, you must be logged in and have the required [permissions](access-permissions).

To access **My Quotes**, follow the instructions below:

1. Access the store and log in.
2. Click **Hello, {user name}**.
3. Click **My Account**.
4. Click **Quotes and Saved Carts** in the sidebar.

On this page, you can use the following features:

- **Search bar:** Allows you to search for specific quotes or saved carts by name.
- **Filters:** Allows you to filter the saved quotes or carts displayed by Status, Organization, or Cost Center. The last two options are available in More.
- **New quote:** Allows you to create a quote or saved cart by clicking the `New Quote` button. See more details in the [Creating quotes or saving carts](#creating-quotes-or-saving-carts) section.

The list of quotes and saved carts displays the following information:

- Ref. Name: Reference name of the quote or saved cart.
- Subtotal: Subtotal of the saved cart or the one in the quote.
- Created by: Email of the user who created the quote or saved the cart.
- Created on: Date the quote or saved cart was created, in `MM/DD/YYYY` format.
- Expiration: Expiration date of the quote or saved cart, in `MM/DD/YYYY` format.
- Status: Current status of the quote or saved cart, which can be:
  - Ready: The quote or saved cart is ready to be used in an order.
  - Pending: The quote is awaiting review and adjustment by a sales user.
  - Revised: The quote is awaiting further review and additional adjustments by a sales user.
  - Rejected:The quote or saved cart has been rejected and cannot be used in an order.
  - Expired: The quote or saved cart has expired and cannot be used in an order.
  - Placed: The quote or saved cart was used in an order and cannot be used again.
- Last Update: Date of the last update of the quote or saved cart, in `MM/DD/YYYY` format.
- Organization: Name of the organization with which the quote or saved cart is associated.
- Cost Center: Name of the cost center with which the quote or saved cart is associated.

Users can click any row or the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> and then click Details to view and edit the information of a quote, depending on their permissions.

![My quotes - EN](https://images.ctfassets.net/alneenqid6w5/53BQDZh9EBc8OrFTxfO1eD/9aa6c7d1954fbd7112da3c65220d70cb/My_Quotes.png)

## Creating quotes or saving carts
To create a quote or saved cart, you must have the [Create Quotes and Carts permission](#create-quotes-and-Carts-permission). After adding products to the cart, use the cart content to create a saved cart or request a quote. Follow the instructions below:

<ol>
   <li>
      Add products to the shopping cart.
      <ul>
         <li>Click <strong>Create Quote</strong> in the shopping cart.</li>
      </ul>
   </li>
   <li>
      Go to the storefront and click <strong>Hello, {username}</strong>. Click <strong>My Account</strong>.
      <ul>
         <li>Click <strong>Quotes and Saved Carts</strong> in the sidebar.</li>
      </ul>
   </li>
   <li>Click <strong>New Quote</strong>.</li>
   <li>Access the <code>/b2b-quotes/create</code> route.</li>
   <li>Enter the name of the quote or the saved cart.</li>
   <li>
      Make sure that all the information on the Create Quote page is correct:
      <ul>
         <li><strong>Original Subtotal:</strong> Shopping cart subtotal not considering discounts.</li>
         <li><strong>Percentage Discount:</strong> Percent of the discount given by a sales associate.</li>
         <li><strong>Quoted Subtotal:</strong> Subtotal of the quote with discounts given by sales associates.</li>
         <li><strong>Image:</strong> Image of the selected product.</li>
         <li><strong>Ref. Code:</strong> Reference code of the selected product.</li>
         <li><strong>Name:</strong> Product name.</li>
         <li><strong>Original Price:</strong> Original price of the product.</li>
         <li><strong>Quoted Price:</strong> Product price considering the discounts given by sales associates.</li>
         <li><strong>Quantity:</strong> Number of items.</li>
         <li><strong>Total:</strong> Total amount considering the quoted price and the number of items.</li>
      </ul>
   </li>
   <li>Write a note in the <strong>Add Note</strong> field, if necessary.</li>
</ol>
<div class = "alert alert-info">
   Notes added here will be visible as part of the Update History of the quote or saved cart and can be seen by the sales associates or other members of your organization and cost center. For example: if a user wants to ask for a specific discount from the sales associate in the B2B store, they can enter this request as a note.
</div>
<ol start="8">
   <li>
      Click one of the following options:
      <ul>
         <li>
            <strong>Save for Later:</strong> Creates a saved cart. The status of the newly created saved cart will be set to <strong>Ready</strong>, which means that it can be used immediately in an order by any user within that organization or cost center who has the <a href="#">permission</a> to Create Orders from Quotes and Carts.
         </li>
         <li>
            <strong>Save Quote:</strong> Creates a quote. The status of the newly created quote will be set to <strong>Pending</strong>, which means that it will need to be reviewed and adjusted by a sales associate before any special discounts can be applied.
         </li>
      </ul>
   </li>
</ol>

A quote is essentially a saved cart with the original quantities and prices of the items in the user's shopping cart.

![Create Quote - EN](https://images.ctfassets.net/alneenqid6w5/sIVQqxw1NtZLbqtI3K4we/88ce527cb1318d54dc13242660b04d2a/Create_quote.png)

## Quote details
The Quote Details page displays all the information about a quote or saved cart, as well as the actions available based on the status and [user permissions](#access-permissions). To access this page, go to **My Account > Quotes and Saved Carts**.

On this page, you will see the following information:

- **Name:** Reference name of the quote or saved cart.
- **Original Subtotal:** Shopping cart subtotal without discounts.
- **Percentage Discount:** Percent of the discount given by a sales associate.
- **Quoted Subtotal:** Subtotal of the quote with discounts given by sales associates.
- **Expiration:** Expiration date of the quote or saved cart, in `MM/DD/YYYY` format.
- **Status:** Current status of the quote or saved cart, as displayed on the **My Quotes page**.
- **Image:** Image of the selected product.
- **Ref. Code:** Reference code of the selected product.
- **Name:** Product name.
- **Original Price:** Original price of the product.
- **Quoted Price:** Product price considering the discounts given by sales associates.
- **Quantity:** Number of items.
- **Total:** Total value considering the price quoted and the number of items.
- **Update History:** Includes a history of all events related to the quote, such as its creation and discounts given, including notes, if any.
- **Add Note:** Optional field for writing comments or notes. Notes added here will be visible as part of the Update History of the quote or saved cart. For example, if a user wants to ask for a specific discount from the sales associate, they can enter this request as a note.

![Quotes Details - EN](https://images.ctfassets.net/alneenqid6w5/5XLea07XtuCRfGJyvX819I/3f0a860131ed34dfac7c3d0089c1a00d/Quotes_details.png)

## Editing quotes
Users with [editing permissions](#access-permissions), usually associated with sales or store administrator roles, can edit quotes on the Quote Details page as follows:

- **Edit the price or quantity of each SKU:** Edit directly in the **Quoted Price** and Quantity columns of the product list within the quote.
- **Apply Percentage Discount:** Apply a percentage discount to the quote by dragging the discount bar to the desired percentage. This will override any changes made to individual product prices.
- **Expiration Date Change:** Change the expiration date of the quote.
- **Add Note:** Write a comment (optional).

After editing the quote details page, save the quote by clicking `Save Quote`. This will set the status of the quote to **Ready** and notify all users who have previously interacted with the quote of the change by email.

## Requesting additional adjustments to a quote
Users without editing permissions, but with [access permissions](#access-permissions), can add additional notes to a quote or cart unless its current status is **Ready**, **Pending** or **Reviewed**.

When a sales associate adjusts and saves a quote, the status changes to **Ready**. Then, a member of the organization can add notes and click **Send to Sales Associate**, changing the status to **Reviewed**. This allows the member of the organization to request additional adjustments to prices or quantities.

## Rejecting a quote or saved cart

Users with the [permission](#access-permissions) to **Reject** Quotes and Carts can reject a quote or saved cart if the current status is **Ready**, **Pending** or **Reviewed** by clicking `Decline` on the quote details page. A declined quote or saved cart can no longer be edited or used in an order.

## Using a quote or saved cart in an order
 Users with [permission](#access-permissions) to place **Orders** from Quotes and Carts can use a quote or saved cart in an order if the current status is **Ready**, **Pending** or **Reviewed**.

To use the quote, click `Use Quote` on the quote details page. You will be redirected to checkout, with the content of the quote or saved cart added to your current cart. All items that were previously in your cart will be removed.

<div class="alert alert-warning">
If the <a href="https://help.vtex.com/en/tutorial/b2b-checkout-settings--u7wG1SjmeCqXCSF2UsVok"> Checkout Settings</a> app is installed, the checkout will be blocked until you place the order. This means that you won't be able to edit product quantities or add or remove new products. If there are not enough items in stock to meet the quantity specified in the quote or saved cart, the system will automatically adjust the quantity. If a product is not available, the checkout will allow you to remove it from the cart.
</div>

After placing the order, the status of the quote or saved cart will automatically change to **Placed**, preventing its further use.
