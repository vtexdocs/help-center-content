---
title: 'Integration configurations'
id: 6EYEy1jRiAj465WOnhiczD
status: PUBLISHED
createdAt: 2019-11-18T13:39:42.709Z
updatedAt: 2022-04-08T20:49:56.270Z
publishedAt: 2020-02-13T15:01:19.456Z
firstPublishedAt: 2019-11-19T17:28:38.037Z
contentType: trackArticle
productTeam: Channels
slugEN: integration-configurations
locale: en
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugEN: wish-integration
order: 5
---


The following steps must be implemented in the app:

## Setting the trade policy

1. Using the selector, you'll need to define which trade policy will be used with Wish  ([preset during step 2](/en/tracks/configure-wish-integration--50hbG4bzhSIhjz1lzqI1g43OHGQIQmt1dKw9RwKruE7H))
2. After selecting the trade policy, click on "Continue".
 
## Shipping configurations

Shipping items using Wish ranges from the all-encompassing to the very specific. You can set a general shipping value for any region worldwide, just as you can set a value for a country's specific subregion.

> ℹ️ NOTE: Wish demands that product prices and shipping be sent in USD. However, it does convert order values into BRL directly, making issuing invoices much easier. This means to highlight that priority will always be given to the **more specific** shipping rate configuration. Let's have a look at the following example for further clarity: | Shipping      | Specification | Price   | | ---------- | ---------- | ---------- | | Standard     |            | U$ 30,00   | | By country   | Brazil  | U$ 25,00   | | By country   | US     | U$ 20,00   | | By subregion | New York (metropolitan region)  | U$ 10,00 | | By subregion | New York (state)              | U$ 15,00 | | By subregion | Chicago (metropolitan region) | U$ 10,00 | - If we're shipping to Miami, for example, the cost would be U$ 20,00 as in fits under Cost to US, which is more specific than Standard Shipping. - However if we're shipping to Germany, for example, the cost would fall under the Standard Shipping of U$ 30,00. - But if we're shipping to New York (State) the price would be _U$ 15,00_ Let's get some more insight on each of the shipping types: ### Standard shipping Represents the most macro shipping rate available and can be used for both worldwide and local shipping. _Ex: if you set the price for standard shipping at U$ 30,00 and don't have any other more specific shipping rate, then this will be the set shipping price for anywhere in the world. This means that shipping something to Mexico would cost the same as shipping something to Portugal, to New York or Seattle or anywhere else._ ### Shipping by country Refers to the default shipping rate for a specific country. It's therefore possible to have different shipping rates for different countries. [Click here for more on Wish's shipping by country settings](https://merchantfaq.wish.com/hc/pt/articles/205212607-Como-configuro-as-minhas-configura%C3%A7%C3%B5es-de-frete-). _Ex: the shipping price for Brazil is U$ 20,00 while for Argentina it stands at U$ 25,00._ ### Shipping by subregions Refers to the specific rate for a country's subregions. You can therefore set different shipping rates for different subregions belonging to the same country. _Ex: the shipping rate to New York (metropolitan region) is U$ 10,00, while the rate for NY (State) is U$ 15,00._ 

> ℹ️ OBS: shipping by region is only available to sellers that use **Wish Express** [(additional info here).]([https://merchantfaq.wish.com/hc/en-us/articles/360018939394-How-to-Ship-Wish-Express-to-Brazil]) To configure Wish Express, simply follow [these steps.]([https://merchantfaq.wish.com/hc/en-us/articles/232047747-Wish-Express-Sign-Up-Flow])
  
Specify if you'll use Wish Express in the setup. In case you won't, you may skip to next step.

Remember that the shipping rate will be automatically set based on the [Logistics module shipping tables](/en/tracks/logistics-101--13TFDwDttPl9ki9OXQhyjx/2Pj1gKR80QIuUhc0orMraD). This means that it the shipping will be dynamic and may vary due a change in the carrier's price table or even according to item availability.

_ex: Carrier X has a shipping rate of U$ 7,00 to Atlanta (metropolitan region) in its price table. However, that price table is updated to U$ 9,55. Next time the inventory is updated, the shipping rate for that region will be updated for your Wish products._
 
## Defining the available carriers

To indicate which of your store's carriers corresponds to [those accepted by Wish](https://merchant.wish.com/documentation/shippingproviders), you'll need to perform a from/to in your configuration.

  1. Using the first selector (_dropdown_), indicate which carrier will be used for Wish;
  2. Using the second selector, indicate which VTEX [carrier type](/en/docs/tutorials/how-does-the-type-of-delivery-work) would correspond to the one selected during the previous step;
    _Ex: Suppose that you're using TNT as a carrier and that your VTEX Logistics panel identifies this carrier or delivery type as "standard". Therefore, the field should be called "Standard". Remember that the word should exactly match the one appearing in your Logistics module. 
  
  3. Click on "save" to conclude the setup.

> ℹ️ OBS: if a non-Wish certified carrier is added, orders will not benefit from tracking, and consequently, **no commission** will be transferred. Use extra caution when performing this step.

## Price divergence rates
 
 Any order that has a difference between the sales price of the _marketplace_ and the price determined by the _seller_ is, by default, not integrated with VTEX. Therefore, we have a mechanism in place to accept the divergence automatically, which works by setting an acceptable rate for the price divergence.

The value (in %) of how much the order value may differ from the original value should be given in this field.

_Ex: The set rate is 10%. The original order value should be U$ 100, but it came from Wish at U$ 109, so considering the set rate, the order will be integrated. However, if the order comes in at U$ 150, then it would have been denied and displayed in the [Orders tab (within the Admin integrations section)](/en/docs/tutorials/checking-integrations-in-bridge)._

## Currency conversion

**Wish requires product prices and shipping rates to be sent in USD.** Both the shipping table as well as the VTEX pricing module infer the currency from the trade policy being used. 

As previously indicated in step [passo 2.1](/en/tracks/integrating-with-wish--50hbG4bzhSIhjz1lzqI1g4/3OHGQIQmt1dKw9RwKruE7H), our trade policy uses BRL (R$). Therefore, the following steps must be followed in order to convert to USD:

In the `"Dollar quotation (USD)"`, fill in the exchange from (R$) to dollar (US$).

_Ex: if US$ 1,00 = R$ 4,00 , then fill in 4,00._
