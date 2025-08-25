---
title: 'Additional shipping costs'
id: 2vqGwMn0LabkOHY6zSHYNV
status: PUBLISHED
createdAt: 2021-08-18T19:48:01.276Z
updatedAt: 2023-03-29T18:32:47.454Z
publishedAt: 2023-03-29T18:32:47.454Z
firstPublishedAt: 2021-08-18T19:54:49.257Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: additional-shipping-costs
legacySlug: additional-shipping-costs, understanding-the-additional-shipping-cost
locale: en
subcategoryId: 7uJcyu0VawEm8ggqKu404u
---

Additional shipping costs are extra charges added to the shipping rate as established in [shipping policies](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140). So, when configuring costs for shipping items, you can set a fixed rate and include additional charges. Together, these values will compose the [shipping rate](https://help.vtex.com/en/tutorial/gerenciar-valores-de-frete--tutorials_141). 

![Tarifa envio EN](//images.ctfassets.net/alneenqid6w5/21DY5nCwLfuquTatiw2Q3e/8aa8e3fcbe570f3862e3e31b3a7db0eb/Tarifa_envio_EN.svg)

You can configure the following additional costs:

* [Weight-based shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV#weight-based-additional-shipping-charge);
* [Price-based shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV#price-based-additional-charge);
* [Insurance charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV#additional-insurance-charge);
* [Extra shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV#additional-shipping-charge).

![adicionais frete EN](//images.ctfassets.net/alneenqid6w5/3j3VNUKq6qTGJRfGWGbc14/eee27446335556a96fece61f8d2f0e8f/adicionais_frete_EN.svg)

> ❗ Note that all of them can be simultaneously considered for composing the shipping rate. The final calculation of the [shipping rate](https://help.vtex.com/en/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM) is the sum of all additional charges plus the flat rate. The shipping rate is not the total shipping cost.

## Weight-based additional shipping charge

This is the extra cost based on the package’s weight. The amount configured for this charge will be added to each unit of weight that exceeds the initial limit. So, for policies that contain a weight-based additional shipping charge, an extra fee will be charged for delivering packages whose weight exceeds the initial limit. 

The additional amount is calculated by multiplying the weight-based charge configured in the shipping policy by the difference between the package’s weight and the initial weight limit.

_Total weight-based charge = (product weight - initial weight limit) × (weight-based charge)_

### Example

For example, for a given shipping rate, the weight range accepted by the shipping policy is 300 g to 500 g (as you can see in the table below), the **weight-based additional charge** is US$ 0.10. This means that for every gram the package exceeds the initial limit of 300 g, the cost will be increased by US$ 0.10. 

Consider a 350-g package with the following characteristics:

Flat rate: US$ 10.00  
Additional insurance charge: US$ 0.00  
Price-based additional charge: US$ 2.00  
**Weight-based additional charge**: US$ 5.00  
_The calculation of the weight-based monetary value for delivering a 350-g package will be._ 
Additional shipping charge: 10%      

Result:

Additional shipping charge: ($10 + $0 + $2 + $5) x 10% = $1.70  
Additional shipping costs: ($2 + $5 + $1.70) = $8.70  
Shipping rate: ($10 + $8.70) = $ 18.70  

### Configuration instructions 

There are two ways to configure the weight-based additional charge:

* Using the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127): in the _PriceByExtraWeight_ column.
* In the [Shipping rates](https://help.vtex.com/en/tutorial/gerenciar-tarifas-de-envio--tutorials_141) page: in the _Additional value per weight_ field.

To learn more, access their tutorials.

![faixa-peso EN](//images.ctfassets.net/alneenqid6w5/4s9nSGox3lNthbGiDUdOFq/df911253923073437cf3708e1d2b753b/faixa-peso_EN.png)

## Price-based additional charge

This is the extra cost based on the cart price. When you configure this charge, an extra cost proportional to the cart price will be added to the shipping rate. 

### Example

For example, a shipping policy that contains an additional charge of 5% based on the **cart price**. Suppose a cart's worth is US$ 180.00. The additional charge for delivering it will be US$ 9.00. This value will then be added to the shipping rate.

So the calculation will be as follows:

Flat rate: US$ 10.00  
Additional insurance charge: US$ 0.00  
Price-based additional charge: US$ 9.00  
Weight-based additional charge: US$ 5.00  
Additional shipping charge: 10%  

Result:

Additional shipping charge: ($10+$0+$9+$5)x10%=$2,4  
Additional shipping costs:($9+$5+$2,4)=$16,4  
Shipping rate: ($10+$16,4)=$26,4  

> ❗ Note that the calculation of the price-based charge considers the cart's total price — without discounts and promotions. If the price-based charge is lower than the insurance charge, it will not be considered for the total shipping cost.

### Configuration instructions 

There are two ways to configure the price-based additional charge:

* Using the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127): in the _PricePercent_ column.
* In the [Shipping rates](https://help.vtex.com/en/tutorial/gerenciar-tarifas-de-envio--tutorials_141) page: in the _Additional value_ field.

To learn more, access their tutorials.

## Additional insurance charge

This is the extra cost for shipping insurance. If you include it in your shipping policy, an absolute value will be added to the shipping rate.

### Example

When you enter [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) costs for selected zip codes or polygons in the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127), if there is an **insurance charge** set to US$ 3.00, an amount of US$ 3.00 will be added to all deliveries to those locations.

Consider a package with the following characteristics:

Flat rate: US$ 15.00  
Additional insurance charge: US$ 3.00  
Weight-based additional charge: US$ 0.00  
Weight-based additional charge: US$ 5.00  
Additional shipping charge: 10%  

Result:

Additional shipping charge: ($15 + $3 + $0 + $5) x 10% = $ 2.3  
Additional shipping costs: ($3 + $5 + $2.3) = $ 10.3  
Shipping rate: ($15 + $10.3) = $25.3  

### Configuration instructions 

You can only configure the additional insurance charge via the [shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127) in the _MinimumValueInsurance_ field.

> ❗ If the price-based charge is lower than the insurance charge, it will not be considered for the total shipping cost.

## Additional shipping charge

This is the extra cost charged on the shipping rate. After considering all additional charges and the fixed rate, the shipping charge is calculated and refers to a percentage of the shipping rate. 

This is the final charge to be calculated, according to the following formula:

### Example

Consider a package with the following characteristics:

Flat rate: $ 15.00  
Additional charges (weight, price, and insurance): $ 6.00  
Additional shipping charge: 10%  

The result would be:  
Additional shipping charge: $2.10  
Shipping rate: ($15 + $6) + ($2.10) = $23.10  

### Configuration instructions 

To configure the additional shipping charge, go to the left-side menu in the VTEX Admin.

1. In the VTEX Admin, go to **Store settings > Shipping > Settings**, or type *Shipping* in the search bar at the top of the page and select *Store settings / Shipping*.    
2. In the section **Additional shipping rate**, enter a value.
    If you want to include a 10% fee, fill in the field with 10. Use a period to indicate the decimal place, such as 1.67.
3. Click on `Save`.

![adicional configuracoes EN](//images.ctfassets.net/alneenqid6w5/2pVEQFyDHdXcZYpkQW85m0/2a2708eaac81731568792959f167bdd9/adicional_configuracoes_EN.png)
