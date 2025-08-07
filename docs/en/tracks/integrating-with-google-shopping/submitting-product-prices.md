---
title: 'Submitting product prices'
id: 1wZhEoyuWujmj0lKaWO71X
status: PUBLISHED
createdAt: 2024-09-13T18:31:27.381Z
updatedAt: 2024-11-01T13:50:33.954Z
publishedAt: 2024-11-01T13:50:33.954Z
firstPublishedAt: 2024-09-13T18:42:39.217Z
contentType: trackArticle
productTeam: Channels
slugEN: submitting-product-prices
locale: en
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: integrating-with-google-shopping
---

The [price](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) of your product on Google Shopping is determined when you choose the trade policy. It is essential to pay attention to a few things.

If your trade policy includes [list prices](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) and [computed prices](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#preco-computado), the latter will be sent to Google Shopping. For these promotions to be displayed on Google Shopping, the products must meet the following requirements in the Merchant Center:  

- The base price, or a higher amount, must have been charged for 30 days, consecutively or not, in the last 200 days.  
- The base price must be valid.  
- The promotional price must be lower than the base price.  
- The promotion discount must be greater than 5% and less than 90% off the base price.  

Once your products meet all the requirements listed above, the tool applies the promotional value previously configured on VTEX to the Google Shopping views.  

## Discount linked to payment method  

You can activate a discount linked to a payment method in two steps: First, [configure the discount](#configuring-discounts) and the payment method. Then, activate the discounts in the [connector configuration](https://help.vtex.com/en/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl). 

### Configuring discounts  

To configure a discount linked to a payment method, see the following documentation:

1. [Set a discount using the checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api) to enter the desired payment method in the `paymentSystemToCheckFirstInstallment` variable and simulate a shopping cart to make sure the payment method was updated.  
2.  [Configuring a discount for orders paid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt) to link an SKU to a payment method.  
3. [Configuring discounts for orders paid in full on Google Shopping](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista-para-google-shopping--40K3R5d4NogMvCzIWdWt3e).  

After following these instructions, you should activate the connector by [configuring the connector](https://help.vtex.com/en/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl).

<div class="alert alert-warning">
  When multiple sellers are linked to a product in your store, the rule for Google Shopping is to offer the best discount available.
  </div>

 <div class="alert alert-danger">
  Each promotion created can belinked to only one payment method for the discount to be sent to Google Shopping.
  </div> 
