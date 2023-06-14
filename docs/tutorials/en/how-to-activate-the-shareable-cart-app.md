---
title: How to activate the Shareable Cart app (Social Selling)
id: 1lS3fQdXpOoC0BTeVhydfg
status: PUBLISHED
createdAt: 2020-05-01T23:27:25.719Z
updatedAt: 2023-03-29T15:34:32.868Z
publishedAt: 2023-03-29T15:34:32.868Z
firstPublishedAt: 2020-05-01T23:33:47.947Z
contentType: tutorial
productTeam: Apps
author: 56yU9Wz6mLwmzo82TjgAHy
slug: how-to-activate-the-shareable-cart-app
legacySlug: how-to-activate-the-shareable-cart-app
subcategory: 
---

The [Shareable Cart](https://apps.vtex.com/vtex-social-selling/p) app allows sales assistants to select products for their customers and share the cart through channels such as WhatsApp, Facebook Messenger and email.

![Shareable Cart Demo](//images.ctfassets.net/alneenqid6w5/sf2zbYOG7janUXWbgkajd/93aa5f4ea002c5877a9620722af67890/Jy98kJ.gif)

This article explains how to install the app and configure this functionality in your store. After completing the activation steps, your sales assistants will be able to [follow the instructions](https://help.vtex.com/en/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) to start your Social Selling strategies.

## Installation 

To install the app in your store, follow the steps below:

1. Access the [app page](https://apps.vtex.com/vtex-social-selling/p) on VTEX App Store.
2. Click on the **Get** button.
3. Enter your account name in the **Account Info** field.
4. Click on the **Confirm order and begin installation button**.
5. Click on the **Install** button.

After you complete these steps, the app will be installed on the account you entered. The next step is to review the app's settings to adjust it to meet your store's needs. 

<div class="alert alert-warning" role="alert">Your account name is the identifier used to access your Admin. You must replace the <code class="c-link">{accountName}</code> with it in the link <code>https://<span class="c-link">{accountName}</span>.myvtex.com/admin</code></div>

## Configuration

When you finish installing the app in your store, you will be redirected to the configuration page. It can be found in *Apps > My Apps > Social Selling > Settings*.

Check the details of each setting below. If you make any adjustments, be sure to click on the **Save** button for the changes to be applied in your store.

### Activating the app

When enabled, this setting causes the cart sharing interface to appear for users who access your store through the link:

`https://{Your store web address}/checkout/?socialselling=on`

When disabled, the interface no longer appears for all users.

### Adding a sales assistant

This configuration allows you to activate the sales assistant identification through specific fields of the order.

- **Active**: allows you to show or hide the **Add sales assistant code** button on the cart sharing interface.

- **Add utmiCampaign**: provides utmiCampaign for filling `utmiCampaign` for filling

- **Add marketingTag**: provides `marketingTag` for filling

The field in which the salesperson code will be inserted depends on the store needs. In the order form, `utmiCampaign` receives only one value, while `marketingTags` can be filled with multiple values.

If both options are selected, the sales assistant needs to indicate which field he is filling in the cart sharing interface.

<div class="alert alert-info" role="alert">The added information can be found on the <strong>Promotions and Partnerships card</strong> in the <a href="https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/204AjAQseJe8RLUi8GAhiC?locale=pt" target="_blank">orders details</a> or within the <code>marketingData</code> object returned when obtaining the order information using the <a href="https://developers.vtex.com/reference/orders#getorder">Orders API</a>.</div>

### Channels

This setting allows you to activate the desired sharing channels in the cart sharing interface.

- Whatsapp
- Facebook Messenger
- SMS
- Link
- Gmail
- Email

<div class="alert alert-warning" role="alert">Sales assistants will need to log in to the social media accounts and applications used for sharing on the device they use to add items to the cart.</div>

## Customization (optional)

You can change the button colors on your store's cart sharing interface through [Checkout customization](https://help.vtex.com/en/tutorial/configurar-template-no-smartcheckout--frequentlyAskedQuestions_599). 

In the image below, option A shows the original colors and option B shows one possible customization.

![shareable-cart-ui-customization](//images.ctfassets.net/alneenqid6w5/7qzGILGsBqu6sD2n052VQl/ba27c3afc9c744907ac707f10658e8e1/shareable-cart-ui-customization.png)

The code below must be added at the end of the `checkout5-custom.css` or `checkout6-custom.css` file, available for customization in *Store Settings > Checkout > Code*. The file that should be edited depends on the version of the Checkout used by your store.

<div class="alert alert-danger" role="alert"><strong>Warning:</strong> Errors in the checkout customization can break your customers’ purchase flow. If you do not understand the code below, ask your technical team for help.</div>

Then change the properties in the CSS code according to your needs.

```
/* START Pick Color Nuevo Carrito */
.sb-b-erasecart .sb-icon,
.sb-b-erasecart .sb-label,
.sb-b-erasecart a:hover .sb-icon {
   color: #fff!important;
   background-color: #ee38ed!important
}
/* END Pick Color Nuevo Carrito */
/* START Pick Color Codigo Vendedor */
.sb-b-codigovendedor .sb-icon,
.sb-b-codigovendedor .sb-label,
.sb-b-codigovendedor a:hover .sb-icon {
   color: #fff!important;
   background-color: #a62a9a!important
}
/* END Pick Color Codigo Vendedor */
/* START Pick Color Whatsapp */
.sb-b-whatsapp .sb-icon,
.sb-b-whatsapp .sb-label,
.sb-b-whatsapp a:hover .sb-icon {
   color: #fff!important;
   background-color: #ad28ac!important
}
/* END Pick Color Whatsapp */
/* START Pick Color Facebook Messenger */
.sb-b-facebook-messenger .sb-icon,
.sb-b-facebook-messenger .sb-label,
.sb-b-facebook-messenger a:hover .sb-icon {
   color: #fff!important;
   background-color: #8e208d!important
}
/* END Pick Color Facebook Messenger */
/* START Pick Color SMS */
.sb-b-sms .sb-icon,
.sb-b-sms .sb-label,
.sb-b-sms a:hover .sb-icon {
   color: #fff!important;
   background-color: #751b74!important
}
/* END Pick Color SMS */
/* START Pick Color Link */
.sb-b-link .sb-icon,
.sb-b-link .sb-label,
.sb-b-link a:hover .sb-icon {
   color: #fff!important;
   background-color: #5a155a!important
}
/* END Pick Color Link */
/* START Pick Color GMAIL */
.sb-b-gmail .sb-icon,
.sb-b-gmail .sb-label,
.sb-b-gmail a:hover .sb-icon {
   color: #fff!important;
   background-color: #480b48!important
}
/* END Pick Color GMAIL */
/* START Pick Color Email */
.sb-b-email .sb-icon,
.sb-b-email .sb-label,
.sb-b-email a:hover .sb-icon {
   color: #fff!important;
   background-color: #330133!important
}
/* END Pick Color Email */
/* START Pick Color BUTTON OK */
.swal2-styled.swal2-confirm {
   border: 0!important;
   border-radius: .25em!important;
   background: initial!important;
   background-color: #31c431!important;
   color: #fff!important;
   font-size: 1.0625em!important;
}
/* END Pick Color BUTTON OK */
/* START Pick Color BUTTON CANCEL */
.swal2-styled.swal2-cancel {
   border: 0!important;
   border-radius: .25em!important;
   background: initial!important;
   background-color: #a0a0a0!important;
   color: #fff!important;
   font-size: 1.0625em!important;
}
/* END Pick Color BUTTON CANCEL */
```

## Frequently Asked Questions (FAQ)

### How is this functionality technically possible?

The app uses VTEX's [shared cart](https://help.vtex.com/en/tutorial/o-que-e-o-carrinho-compartilhado--3oKJZfoAoUm8g0ukCIGsUu?locale=pt) functionality, which allows more than one customer to add, remove or update items and information from the same cart.

### How to identify sales assistants and promotions?

See some possibilities in the table below. We recommend that the store's technical support team indicates which is the simplest way to meet your business needs.

<table style="border-spacing:0;border-collapse:collapse" class="w-100 center mv7 bb b--gray">
  <thead>
    <tr class="bb b--muted-3">
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Scenario</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Description</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Details</th>
    </tr>
  </thead>
  <tbody>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width:5rem"><strong>1</strong></td>
   <td class="t-body pa5">utmi_campaign + marketingTag</td>
    <td class="t-body pa5" style="min-width:25rem">
      <p><code>utmiCampaign = codigoVendedor</code></p>
      <p><code>marketingTags[1] = promo10off</code></p>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5"><strong>2</strong></td>
   <td class="t-body pa5">marketingTag</td>
   <td class="t-body pa5">
     <p><code>marketingTags[1] = codigoVendedor</code></p>
     <p><code>marketingTags[2] = promo10off</code></p>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5"><strong>3</strong></td>
   <td class="t-body pa5">utmi_campaign + coupon</td>
   <td class="t-body pa5">
     <p><code>utmiCampaign = codigoVendedor</code></p>
     <p><code>coupon = cupomDesconto</code></p>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5"><strong>4</strong></td>
   <td class="t-body pa5">coupon</td>
   <td class="t-body pa5"><code>coupon = cupomDescontoVendedor</code></td>
  </tr>
  </tbody>
</table>

<div class="alert alert-info" role="alert">In Scenario 4 it is necessary to <a href="https://help.vtex.com/en/tutorial/how-to-generate-massive-coupons--frequentlyAskedQuestions_348">generate coupons in bulk</a>, so that each sales assistant has their own coupon for identification and discount activation.</div>

### Who fills in personal details and addresses, sales assistants or customers?

The sales assistant does not need to log in to start browsing and to select the products. The filling in of personal data and address by the sales assistant is **optional**.

Therefore, both the sales assistant and the customer can fill in this data, and it will depend on the customer's preference. **Payment details must always be filled in by the customer**.

### Will the sales assistant have access to sensitive data, such as address and payment information?

No, the sales assistant will not have access to sensitive customer data. Even if the sales assistant fills in personal and delivery details, customers can change them when they receive the link.

Therefore, even if the customer receives a link with the data filled in by the sales assistant, he/she **needs** to confirm on behalf of whom and at which address the purchase will be made.

### How can sales assistants approach customers?

In order for the approach to be effective, ideally, differentiated promotional conditions should be presented to favor assisted sales over purchases made directly through e-commerce.

**If the sales assistant had previous contact** with the customer, he/she can get in touch and assist the sale in real-time, creating the cart as he/she talks to the customer.

**If the sales assistant doesn't have direct contact** with the customer, he/she can create cart options according to the store’s marketing strategy and/or the customer's profile, and then approach the customer in an active way.

### How can the sales assistant track orders?

The customer will always have access to the tracking of his order through the email added to the order. **So it is important to make sure that it is filled out correctly**.

For the sales assistant to also have access, you can:

- Use the company's customer support to assist sales assistants
- Create a custom sales query page

The custom sales query page would be developed using [VTEX APIs](https://developers.vtex.com/docs/getting-started-list-of-rest-apis) to consult which orders used sales assistant codes, give visibility to each order status and facilitate the control of conversion, delivery and commission calculation.

### How do I change a cart that has already been shared? 

Simply open the shared link to load the cart and make the necessary changes. All users with access to the link can see items, add and remove products, and even pay for the order.  

### If I change cart items or information, does it affect other previously shared carts?

No. All changes affect only the cart that has been accessed, identifiable by the orderFormId parameter in the shared link. 

### How long does a shared cart exist for?

Each shared cart created is valid until the purchase is completed or for up to 2 years.

### Why should I create a new cart for every new sale?

The shared cart works just like a normal shopping cart - every buyer must have one. Sharing does not create multiple carts with the selected items, it only allows more than one user to modify its content.

