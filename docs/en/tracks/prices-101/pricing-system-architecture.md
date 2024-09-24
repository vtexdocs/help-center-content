---
title: 'Pricing system architecture'
id: 7GptzvlPDVM11ojEjywIQx
status: PUBLISHED
createdAt: 2019-07-04T13:51:00.418Z
updatedAt: 2024-04-22T19:20:30.485Z
publishedAt: 2024-04-22T19:20:30.485Z
firstPublishedAt: 2019-07-17T19:40:40.258Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: pricing-system-architecture
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

## Definition

The prices module architecture is organized based on **three fundamental concepts**:

- Prices
- Price Tables
- Price tables application contexts

**Prices** represent your SKU sales value information. These prices are stored in **price tables**. In turn, these price tables can be applied to different **contexts**.

These may be:

- a **trade policy**
- a group of your store's **authenticated customers**
- your store's **traffic origin** (UTMs)
- **benefit conditions**

Below, we can see a blueprint of how the concepts of *prices*, *price table* and *context* are related to one another:

![Architecture-EN](https://images.ctfassets.net/alneenqid6w5/6e0dbJq89EfPqJTKUiuju8/b0acbc822f1da5c78e100c075831982d/Architecture__2_.svg)

## Computed price

There are some criteria that the system takes into account when deciding what **an SKU's selling price for a specific price table** should be. This price is called **computed price**.

The pricing module takes these 4 criteria into account when calculating a price table's computed price:

- Base Price
- Price Rule
- Rounding Rules
- Fixed Price

1. In cases where the SKU only has the *base price* set, the computed price for a specific price table will be equal to the **base price**.
![rule1-EN](//images.ctfassets.net/alneenqid6w5/49vh298CSTLJBLWRvAt9Wx/b6e4cd1212dfbcffbeff6e8feafc7a3d/rule1__1_.svg) 

2. When the SKU has a *price rule* configured for a specific price table, the computed price will be equal to **the base price, modified by the price rule**
![rule2-EN](//images.ctfassets.net/alneenqid6w5/49T4V2FxtwLPfQdPWp27Hm/746255f33fb8d0dc0fc6696808971e37/rule2__1_.svg) 

3. In another scenario, we will consider a SKU with a *base price*, a *price rule* and *rounding rules*. **The computer price for a specific price table will be the result of these three factors**. First, the base price will be changed by the price rule. Afterwards, the psychological pricing's rounding takes place.
![rule3-EN](//images.ctfassets.net/alneenqid6w5/7xwUkHqOkGx6toE6qkXQ2M/ab20002cafca089dcfbb909970dd4e4b/rule3__1_.svg) 

4. Lastly, if the SKU has a *fixed price*, **a specific price table's computed price will be equal to the fixed price**. This price weighs more than any of the others, which results in the pricing module *ignoring the other prices* when a fixed price is associated to an SKU. 
![rule4-EN](//images.ctfassets.net/alneenqid6w5/7qQe04LL529cFeyW2UjGws/3b80fb4386164dd52d792c81bf4956c0/rule4__1_.svg)

## Validating a computed price

To check an SKU's sales price for a specific price table, you can query the **computed price value** in the **Price List** section in admin. In the example below, we can see that the computed price for **SKU 14** in **trade policy table 1** is equal to **334,62**:
![computed-price-en](//images.ctfassets.net/alneenqid6w5/4LtPPVFSSHGOZAENhHeRyZ/56a5705d20dff8ebe13d8fdfa181a330/computed-price-en.png)

You can also check an SKU's computed price in a price table by **making an API request**. To achieve this, you'll need to send a **GET** to the [Get Computed Price by price table or trade policy](https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-) call.

This request returns an SKU's `sellingPrice` from price table `1`. **This is the information that *Pricing* shows as *the SKU's selling price***. 

