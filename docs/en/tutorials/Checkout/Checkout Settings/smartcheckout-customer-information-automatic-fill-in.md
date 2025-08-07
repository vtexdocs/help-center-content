---
title: 'SmartCheckout - Customer information automatic fill-in'
id: 2Nuu3xAFzdhIzJIldAdtan
status: PUBLISHED
createdAt: 2022-05-26T11:11:00.643Z
updatedAt: 2025-02-18T14:57:12.649Z
publishedAt: 2025-02-18T14:57:12.649Z
firstPublishedAt: 2022-06-01T16:54:34.605Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: smartcheckout-customer-information-automatic-fill-in
legacySlug: smartcheckout-customer-information-automatic-fill-in
locale: en
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

With SmartCheckout, the customer's information is automatically filled in at Checkout, and you are only required to enter your store's email. This function reduces the purchase time as customers do not need to re-enter their data for each purchase made at the same store.

<div class="alert alert-info">
For SmartCheckout to reuse the information at Checkout, the customer must have already made a previous purchase or must have created a profile in the store.
</div>

## Customer information

The information previously entered in the [Master Data](https://help.vtex.com/en/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629#) is automatically filled in the customer data fields at checkout. The list below shows the default connection between these data. However, it may vary depending on the country:

- Customer (CL)
   - email
   - firstName
   - lastName
   - homePhone
   - document
   - documentType

- Address (AD)
   - addressName
   - addressType
   - country
   - state
   - postalCode or geoCoordinates
   - street
   - receiverName

<div class = "alert alert-warning">
If one or more fields have not been properly filled in in the Master Data, SmartCheckout will not automatically populate the customer information fields at Checkout. In this case, customers will have to fill in their identification data manually for each purchase. 
</div>

## Purchasing with SmartCheckout

At checkout, the customer's information is automatically filled in as follows:

1. After accessing the VTEX store, the customers choose the products they want to buy and add them to the shopping cart.
2. Upon selecting `Finish order` em **My cart**, they are asked to provide their email address.
3. SmartCheckout verifies whether the email address belongs to a store customer or not. 
4. After the email is verified, the customer’s identification fields are automatically filled in with the data from the Master Data at Checkout.

<div class = "alert alert-warning">
To protect customer data, personal information will be shown only partially on the checkout page (part of the data is hidden using the <a href="https://help.vtex.com/en/tutorial/what-is-the-pci-ssc--4jo3Vkox3amSO2w4qIWa0E#">PCI-DSS</a> payment security standard). This procedure allows the customers to identify whether their current data is correct and, if needed, to also select different addresses for delivery.
</div>
<ul>
5. The customer chooses the delivery and payment methods, and completes the purchase order.
</ul>
<div class = "alert alert-warning">
If payment with a credit or debit card is chosen, the following additional security criteria will apply:
  <ul>
    <li>The CVV (Card Verification Value) will be requested for final validation and completion of the purchase order.</li>
    <li>The customer won't be able to pay with a debit or credit card if the address is different from the one stored on the profile.</li>
   </ul>
</div>

Changes to the stored data, such as address or phone number, will only be allowed once the customer is [authenticated in the store](https://help.vtex.com/en/tutorial/como-meu-cliente-pode-fazer-login-na-minha-loja--3FCNpwbpZe0U4auiI4CC0C#). 

For more information on data protection, visit [SmartCheckout Security](https://help.vtex.com/en/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

### Learn more

 * [Import customer data](https://help.vtex.com/en/tutorial/import-customer-data--2zWYVOyj0sISYQmeUwCsI0)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
