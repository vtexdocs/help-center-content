---
title: 'Shipping costs and simulation'
id: 3by48jFhzpZEseYFpH9uVt
status: PUBLISHED
createdAt: 2022-03-08T15:06:14.717Z
updatedAt: 2022-03-10T16:31:46.970Z
publishedAt: 2022-03-10T16:31:46.970Z
firstPublishedAt: 2022-03-08T18:28:59.554Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: shipping-costs-and-simulation
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

## Total shipping cost

The sum of all the fees required to ship orders is called [total shipping cost](/en/tutorial/total-shipping-cost--5bwhIO108VA5Y2YOpef9lV). This cost considers the [shipping rates](/en/tutorial/shipping-rates--1Balpg3rv0854udEPedvMM), as defined in the shipping policies, and the loading dock costs. 

Both costs are considered when displaying the total shipping cost at checkout. When the customer informs their delivery details at the end of the shopping experience, the platform calculates the shipping options and rates and shows them to the customer. 

You can define your shipping costs via:

* Admin: 
    * In the section `Shipping strategy`: using the [shipping rate template](/en/tutorial/shipping-rate-template--tutorials_127) of a shipping policy to add costs in bulk.
    * In the section `Shipping rates`: add costs one at a time and check the existing ones. Learn how to use this section in the article [Managing shipping rates](/en/tutorial/managing-shipping-rates--tutorials_141).
* API: using the [Freight values API](https://developers.vtex.com/vtex-rest-api/reference/createupdatefreightvalues).

After defining the rates on the platform, we recommend making sure they have been correctly set up using the [Shipping simulator](/en/tutorial/shipping-simulation--tutorials_144).

## Shipping simulator

Once you have set up the [shipping strategies](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3) and the items for sale in the inventory, check whether these settings reflect what is expected, for example, if the products listed in the inventory actually offer shipping options for customers.  

To do this validation, you can use the [Shipping simulator](/en/tutorial/shipping-simulation--tutorials_144). This tool allows retailers to see the delivery scenarios available for a product to specific locations. With this tool, retailers can see:

* Whether the product is available for delivery to a certain region.
* The shipping options for that product.
* The carriers available to perform the delivery and the reasons for disregarding other carriers.
* The shipping rates, if any.
* Whether there are pickup points available for that product.
* Which [white label seller](/en/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa) will deliver the product. 

<div class = "alert alert-info">
You can also simulate shipping options via the <a href="https://developers.vtex.com/vtex-rest-api/reference/calculatesla">SLA calculation API</a>. 
</div>
