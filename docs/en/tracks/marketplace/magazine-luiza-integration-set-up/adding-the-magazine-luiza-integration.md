---
title: 'Adding the Magazine Luiza integration'
id: 4QWLcDhsh2GSSamouyu6M0
status: PUBLISHED
createdAt: 2018-10-17T12:39:05.174Z
updatedAt: 2021-03-18T19:30:46.167Z
publishedAt: 2021-03-18T19:30:46.167Z
firstPublishedAt: 2018-11-06T02:08:03.031Z
contentType: trackArticle
productTeam: Channels
slugEN: adding-the-magazine-luiza-integration
locale: en
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugEN: magazine-luiza-integration-set-up
order: undefined
---

The integration with Magazine Luiza happens through IntegraCommerce, an integrator that mediates the information sent by VTEX and passes it on to Magazine Luiza. So VTEX integrates with IntegraCommerce, but in the end its products are addressed to Magazine Luiza.

1. On the Admin sidebar, click __Integrations__.
2. Access the __Settings__ option.
3. Look for the __Magazine Luiza__ box and click __Integrate__.
4. Fill in the __fields__ displayed on the screen. Below, we will detail how to fill each one of them.
5. After everything is correctly completed, click on the __Save Settings__ button.

With this integration, it will be possible to __create new accounts__ and also __migrate existing accounts (soon)__ in Magazine Luiza. The step-by-step below is suitable for both cases.

> ⚠️ **Note:** Currently **you can not migrate old accounts**. We are working on that and soon this migration will be done automatically.


## Detailing the fields

&bull; __Integration*:__ Check `Enabled` for the integration to start operating. If you check `Disabled`, the entire integration settings will be deleted, including the affiliate.

&bull; __Affiliate ID*:__ this field must be filled in with an [affiliate](/en/faq/what-is-affiliate) ID that doesn't already exist in the affiliate registration. The ID accepts only three digits (all must be consonants). Suggestion: `MGZ`.

If you have [multi-domain integration settings](/en/tutorial/creating-multi-store-multi-domain), pay special attention to the affiliate ID, because this field should have a different value for each domain.

If you are migrating an account, we will take advantage of the affiliate already used for the old integration and we'll start using it in this integration.

&bull; __Trade policy\*:__ The trade policy ID that will be used for integrating with Magazine Luiza. It is the products of this trade policy that will be sent to the marketplace.

&bull; __Percentual of tolerance in the divergence of the order value\*:__ it's the acceptance rate of the difference in an order value. Any order that has a difference between the marketplace's selling price and the price determined by the seller [will be compared to this value](/en/faq/why-was-the-order-closed-with-the-wrong-price). If the divergence, in percent, is less than the value defined in this field, the order will be integrated normally. Otherwise, the order will not be integrated and you will be able to see it in the [orders tab (within the integrations section in Admin)](/en/docs/tutorials/checking-integrations-in-bridge).

&bull; __Customizable SLA Mapping\*:__ in these fields you should do a correspondence between the [types of carrier](/en/docs/tutorials/how-does-the-type-of-delivery-work) registered in IntegraCommerce and those registered in VTEX logistics. When doing the mapping, click the `+` button to save it.

_`Ex:` Imagine that you use Correios (PAC) as a carrier, that your Carrier Type in IntegraCommerce is 'Normal' and that in the VTEX logistics panel it is called 'Usual'. Then, you must fill in the first field with "Normal" and the second one with "Usual". Remember that the words should be exactly the same as those registered in the logistics._

&bull; __Minimum stock\*:__ You must fill this field with a minimum security stock value. Although the communication between VTEX and Magazine Luiza systems is fast, the stock displayed in the marketplace may be outdated compared to the actual product stock in your store (even by a few minutes). Thus, when the stock in VTEX reaches this value, the integration will zero the inventory so that there's no sales of products without stock.

_Caption:_<br />
`*` Required fields.<br />

Once the fields are filled in, click the __"Save Settings"__ button.

*__That's it.__ After completing this step, your store is already fully integrated with Magazine Luiza.*
