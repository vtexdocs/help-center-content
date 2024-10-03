---
title: 'Placing a regular order using VTEX APIs'
id: 5NEGP7hofS4eMMSWgeAY82
status: ARCHIVED
createdAt: 2017-12-29T14:54:18.987Z
updatedAt: 2021-10-25T23:51:41.642Z
publishedAt: 
firstPublishedAt: 2017-12-29T14:56:06.826Z
contentType: tutorial
productTeam: Others
author: 5Hp3cEFKikMGWycwa42QuG
slugEN: how-to-place-a-regular-order-using-vtex-apis
locale: en
legacySlug: how-to-place-a-regular-order-using-vtex-apis
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

In this tutorial, you will learn how to place a simple **REGULAR** order (placed, paid and delivered under the liability of one single player).

Let's start!

>⚠️ **Important:** For any authentication required by the APIs presented in this tutorial, you must provide a valid **AppToken** and **AppKey** registered in the **License Manager** module of your account and empowered with enough permissions.

**REQUIRED PERMISSIONS**

The table below presents the minimum required permissions set.

| Product     | Permission     |
| ---------- | ---------- |
| Checkout          | Allows access to all carts; Allows access to all orders; Cancellation of Orders |
| Payments      | Make Payments; View Payment Data |
| VTEX Fulfilment   | Create Orders; Obtain purchase information |
| OMS       | Notify Payments; View Orders; Cancel Orders |
| Checkout (when placing the order for __existing users__)| Allows access to all carts; Allows access to all orders; Cancellation of Orders |

## Simulate a cart

The very first thing that you should do is to check if the Seller (in this case, your own store) is able to fulfill a given cart. Thus, a **simulation** request is exactly how your system will know which delivery and payment options are available, if any.

In order to do so, you just have to send a **POST** request to the following endpoint:
`https://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/orderforms/simulation`
(if needed, you can specify a **Sales Channel** using the parameter **"sc"**)

with the Headers:
```
Content-Type: application/json
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
```

and the **cart description** within its payload. 
For example, to simulate an order of **one** single unit of the product with **SKU ID** "1" to the ZIP Code 33301 in the USA:

>**Note**: You must use an ISO ALPHA-3 Code for the **"country"** value.

```json
{
  "items": [
    {
      "id": "1", 
      "quantity": 1,
      "seller": "1"
    }
  ],
  "postalCode": "33301",
  "country": "USA"
}
```

If everything went fine and you received a **200 OK** response code without any **error messages**, we are able to proceed. 

From the response content, you will be mostly using the blocks **items**, **"logisticsInfo"** and **"paymentData"**. More information about each of them will be provided in the next steps.

## Check if a customer already exists in your database
Everytime you attempt to place an order, you have to provide an e-mail address to identify the customer. Once an order gets successfully placed, the provided e-mail address is assigned to a client profile of your store.
>**Important:** Your system will only be allowed to **reuse** or **update** an existing customer profile by placing a **new order** if the credentials being used at the moment have the **Checkout** Permissions listed in the beginning of this tutorial.

Therefore, you might want to verify if a given e-mail address already is linked to a customer of yours, so you can avoid any permission issues and also retrieve any stored information.

To check an e-mail address for existing profiles, just send a **GET** request to the endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/profiles?email={{emailAddress}}`

If the response to this request returns any content, it means that the email address already is assigned to a profile. In this case, you would like to collect some information like its **"userProfileId"** and a **"addressId"** (in the **"availableAddresses"** array) that will be used in the next step.

## Build the **"orderForm"**
The **orderForm** of a **simple** order consists, basically, in **five** main elements:

1. **"items"**.
2. **"clientProfileData"**.
3. **"shippingData"** - **"address"**.
4. **"shippingData"** - **"logisticsInfo"**.
5. **"paymentData"**.

### "items"
This is the core of your order, it's an array that contains the **products (SKUs)** that will be ordered.

From the cart simulation response obtained from the first step of this tutorial, use the **"items"** block to obtain the necessary information.

Thus, considering only one item in the cart, build a block with the following structure:

```json
"items": [{
  "id": "1",
  "quantity": 1,
  "seller": "1",
  "price": 10000,
  "rewardValue": 0,
  "offerings": [],
  "priceTags": [],
  "isGift": false
}]
```

### "clientProfileData"
As it name says, this object contains the information about the purchasing customer.

Considering that you're going to place the order in for a **new customer**, please use the following example to fit your needs:

```json
"clientProfileData": {
  "email": "email@domain.com",
  "firstName": "Testing",
  "lastName": "VTEX",
  "document": "078051120",
  "documentType": "ssn",
  "phone": "1234567890",
  "corporateName": null,
  "tradeName": null,
  "corporateDocument": null,
  "stateInscription": null,
  "corporatePhone": null,
  "isCorporate": false
}
```
>**Note:** If you're placing the order for an existing user (and have all the required permissions), you can send the **"email"** value within the **"clientProfileData"**. Also, if you intend to update any information, just send it as well.

### "shippingData" - "address"
This object contains address information. It will have the same structure for shipping or billing usages.

Refer to the example below to create your own **"address"** object.

```json
"address": {
  "addressType": "residential",
  "receiverName": "Testing VTEX",
  "postalCode": "33301",
  "city": "Fort Lauderdale",
  "state": "FL",
  "country": "USA",
  "street": "110 East Broward Blvd",
  "number": null,
  "neighborhood": null,
  "complement": "Suite 1700",
  "reference": null,
  "geoCoordinates": []
}
```
>**Note:** if you want to use an address information retrieved from an existing user profile, just send its **""addressId"** value within this **"address"** object.

### "shippingData" - "logisticsInfo"
The **"logisticsInfo"** is an array that contains the selected delivery option (with apportioned freight costs) for each object present in the **"items"** array indicated by the **"itemIndex"** value.

As we have only one product in the cart in this example, there will be also only one object in the **"logisticsInfo"** array.

Then, considering a non-scheduled delivery, in the **"logisticsInfo"** array from the cart simulation response, choose an option within the **"slas"** array. 
From the chosen option, get the values **"id"** and **"price"** and build a **"logisticsInfo"** block like the example below, where the **"selectedSla"** value is the **"id"** of the selected **"slas"** object.

```json
"logisticsInfo": [{
  "itemIndex": 0,
  "selectedSla": "Regular",
  "price": 100
}]
```
>**Note:** The **"itemIndex"** value represents the position of the referred **"item"** in the **"items"** array. 

### "paymentData"
This block informs the payment method and installment options (if available) selected for the order.

>**Note:** For this tutorial, we will consider a **single payment** method with a **single installment** and **no interest**.

In the **"installmentOptions"** array from the **"paymentData"** object returned in the cart simulation response, browse to the desired payment system (use the **"paymentName"** value as reference) and check if it has an object within its **"installments"** array with the **"count"** value **"1"**. If yes, get its **"paymentSystem"** value.

With this information, build the **"paymentData"** like the example below. 
Since we have no interest applied nor multiple installments, the **"referenceValue"** and **"value"** values will be the same and the **"installments"** value will be **"1"**.
>**Note:** The **"paymentData"** total **"value"** should be the **sum** of both item and the selected shipping option prices.

```json
"paymentData": {
  "id": "paymentData",
  "payments": [{
    "paymentSystem": "1",
    "referenceValue": 10100,
    "value": 10100,
    "installments": 1
  }]
}
```

## Place the order
The last step before placing the order, is to compile all the previous components in a **"orderForm"**. Therefore, using all the elements presented as examples in this tutorial, your **"orderForm"** should look like this:

```json
{
  "items": [{
    "id": "1",
    "quantity": 1,
    "seller": "1",
    "price": 10000,
    "rewardValue": 0,
    "offerings": [],
    "priceTags": [],
    "isGift": false
  }],
  "clientProfileData": {
    "email": "email@domain.com",
    "firstName": "Testing",
    "lastName": "VTEX",
    "document": "078051120",
    "documentType": "ssn",
    "phone": "1234567890",
    "corporateName": null,
    "tradeName": null,
    "corporateDocument": null,
    "stateInscription": null,
    "corporatePhone": null,
    "isCorporate": false
  },
  "shippingData": {
    "id": "shippingData",
    "address": {
      "addressType": "residential",
      "receiverName": "Testing VTEX",
      "postalCode": "33301",
      "city": "Fort Lauderdale",
      "state": "FL",
      "country": "USA",
      "street": "110 East Broward Blvd",
      "number": "110",
      "neighborhood": "Broward",
      "complement": "Suite 1700",
      "reference": null,
      "geoCoordinates": []
    },
    "logisticsInfo": [{
      "itemIndex": 0,
      "selectedSla": "Regular",
      "price": 100
    }]
  },
  "paymentData": {
    "id": "paymentData",
    "payments": [{
      "paymentSystem": "1",
      "referenceValue": 10100,
      "value": 10100,
      "installments": 1
    }]
  }
}
```
>**Note:** Observe that the **"shippingData"** object contains both the **"address"** and the **"logisticsInfo"** objects. Also, it has the value **"id"** as **"shippingData"**.

Now that you have all the required information to place the order, you need to send this **"orderForm"** through a **PUT** request to the following endpoint:
`http://{{accountName}}.vtexcommercestable.com.br/api/checkout/pub/orders `
(also if needed, you can specify a **Sales Channel** using the parameter **"sc"**)

with the header:
```
Accept: application/json
Content-Type: application/json
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
```

>**Note:** Please have in mind that almost all of the product, shipping and payment data used in this tutorial are **merely an example** for a fictitious store. That said, using exactly the **"orderForm"** presented in this step probably **will not** work in your own environment. 

If the request gets a **"201 Created"** response code, you must take note of four pieces of information from its response content:

1. **"orderId":** one of the root values in each object from the **"orders"** array.
2. **"transactionId":** one of the root values within the **"paymentData"** object.
3. **"addressId":** if you're going to use the same address for shipping and billing, get this ID from the **"shippingData"** object.
4. **"Vtex_CHKO_Auth":** An authentication cookie that is sent with the response.

>**Attention:** From this moment, you have **5 minutes** to complete the payment process. Otherwise, the order will be automatically **cancelled** and tagged as **"Incomplete"**.

## Send payment information

With the **"orderId"** and **"transactionId"** values in hand, you have to inform to the VTEX platform the payment data that should be used to resolve the order payment.

For this step, you have to make a **POST** request to the endpoint:
`https://{{AccountName}}.vtexpayments.com.br/api/pub/transactions/{{transactionId}}/payments`

with the Header just identifying the **"Content-Type"** value:
```
Content-Type: application/json
```

sending a payload based in the content of the **"paymentData"** present in the **"orderForm"**. 

For most cases, it will look like the following:

```json
[
  {
    "paymentSystem": 1,
    "paymentSystemName": "American Express",
    "group": "creditCardPaymentGroup",
    "installments": 1,
    "installmentsInterestRate": 0,
    "installmentsValue": 10100,
    "value": 10100,
    "referenceValue": 10100,
    "fields": {
      "holderName": "Testing VTEX",
      "cardNumber": "4444 3333 2222 1111",
      "validationCode": "1234",
      "dueDate": "10/20",
      "addressId": {{addressId}}
    },
    "transaction": {
      "id": {{transactionId}},
      "merchantName": {{YOUR-ACCOUNT-NAME}}
    },
    "currencyCode": "USD"
  }
]
```
>**Note #1:** In the **"fields"** object, you are able to send an **"addressId"** to use an existing address record or a new **"address"** object.
>
>**Note #2:** Make sure that all **"value"** values match the information sent when placing the order.

## Request payment processing

Finally, when everything is set, you only have to request to the payments module to process the transactions assigned to the order.

To do so, gather the **"Vtex_CHKO_Auth"** and send a __POST__ request to the endpoint:
`http://{{AccountName}}.vtexcommercestable.com.br/api/checkout/pub/gatewayCallback/{{orderGroup}}`
with its header as follows:
```
Content-Type:application/json
Accept:application/json
Cookie:Vtex_CHKO_Auth={{Vtex_CHKO_Auth}}
```

>**Note #1:** The **"orderGroup"** is the **"orderId"** without the *prefix* after the "-" symbol. 
>This value is also present in the Order Place response.
>
>**Note #2:** Have in mind that this process will use the gateway connectors configured in your VTEX environment. Be careful to avoid any unwanted charges or unexpected payment denials.

## Checking the results

**Great! We're all done.**
To verify if you did everything right, you can simply browse to the order page within your Admin **OMS** interface or request the order information using our **OMS** API:
`http://{{AccountName}}.vtexcommercestable.com.br/api/oms/pvt/orders/{{orderId}}`

If the payment got processed correctly (regardless of the outcome), the order status should not be **"payment-pending"** anymore and you will be able to proceed with this order as your businness requires.

That's it.
See you next time!
