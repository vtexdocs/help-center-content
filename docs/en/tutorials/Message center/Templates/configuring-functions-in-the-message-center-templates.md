---
title: 'How to set up functions in the Message Center templates'
id: tutorials_440
status: ARCHIVED
createdAt: 2017-04-27T22:05:34.696Z
updatedAt: 2021-10-15T16:03:41.137Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.692Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: configuring-functions-in-the-message-center-templates
locale: en
legacySlug: configuring-functions-in-the-message-center-templates
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

The purpose of this article is to present the most used commands and all the functions that can be used to boost your store’s templates.

To configure its templates, Message Center uses a language called **HandleBars**, which is quite simple, with only a few commands, making it easy to implement while expanding its customization.

When editing the email, it is possible to use a range of variables provided by the system. Use of these variables in the email layout has the following Handlebars syntax: `{{class.attribute}}`

_classe.atributo_ are obtained using the JSON Data field. E.g.:

**Important**: The JSON attributes are the same for every VTEX store, however the values may differ depending on the way you configured your store. So it is important to remember to configure your store relying on the info displayed by the GetOrder API of your store.

**JSON Data**
```
“_accountInfo”: { 
  “HostName”: “lojavirtual” 
}
```

**Template HTML**
`<strong>{{_accountInfo.HostName}}</strong> => lojavirtual`

![exemplohtml](//images.ctfassets.net/alneenqid6w5/2L8EnLX9I4gqOyaKUY4wGw/47d7e0db874a73e9569d6ddabe69b470/exemplohtml.png)

The above example can have different values when comparing Sellers and Marketplaces.

### Functions

The use of the functions follows the following syntax: `{{funcão classe.atributo}}`

**JSON Data**
```
"items": [ 
{ 
  "name": "Produto A", 
  "sellingPrice": 20000, 
  "priceValidUntil": "2050-05-30T21:00:00Z", 
  "deliveryTime": "8bd" 
}, 
{
  "name": "Produto B", 
  "sellingPrice": 3000, 
  "priceValidUntil": "2050-09-23T11:00:00Z", 
  "deliveryTime": "10d" 
} 
]
```

- **formatCurrency:**Formats a value for currency
`{{formatCurrency items.0.sellingPrice}}`

Result: R$ 200,00

- **formatUSDCurrency:** Formats a value for the american decimal pattern
`{{formatUSDCurrency items.0.sellingPrice}}`

Result: $ 200.00

- **formatCurrencyWithoutDecimals:** Formats a value for the currency without the decimal places
`{{formatCurrencyWithoutDecimals items.0.sellingPrice}}`

Result: R$ 200

- **multiplyCurrency:** Formats a value for currency and multiplies it by a value
This function has the following syntax: `{{formatCurrency classe.atributo multiplicador}}`
`{{formatCurrency items.0.sellingPrice 4}}`

Result: R$ 800,00

- **formatDate:** Formats a date to its (dd/mm/yyyy) default value
`{{formatDate items.0.priceValidUntil}}`

Result: 30/05/2050

- **formatDateTime:** Formats a date to its (dd/mm/yyyy hh:mm:ss) value
`{{formatDateTime items.0.priceValidUntil}}`

Result: 30/05/2050 21:00:00

- **formatDateUtc:** Formats the date to its (dd/mm/yyyy mh:mm:ss) default value and converts it to the local UTC
`{{formatDateUtc items.0.priceValidUntil}}`

Result: 30/05/2050 18:00:00 (-3h, for example)

- **replace:** Its function is to replace a given value with another
This function has the following syntax: `{{replace classe.atributo "Valor Substituído" "Valor Novo"}}`
`{{replace deliveryTime "bd" " dias úteis"}}`

Result: 8 business days

### Examples

```
{{#each items}} 
{{name}} 
Entrega{{#each ../shippingData.logisticsInfo}} 
{{#eq itemId ../id}} 
{{#each slas}} 
{{#eq ../selectedSla id}} 
{{#if deliveryWindow}} 
agendada entre{{formatDateTime deliveryWindow.startDateUtc}} e {{formatDateTime deliveryWindow.endDateUtc}} 
{{else}} 
em até{{#hasSubStr shippingEstimate 'bd'}} 
{{replace shippingEstimate 'bd' ' dias úteis.'}} 
{{else}} 
{{replace shippingEstimate 'd' ' dias.'}} 
{{/hasSubStr}} 
{{/if}} 
{{/eq}} 
{{/each}} 
{{/eq}} 
{{/each}} 
{{quantity}}x R$ {{formatCurrency sellingPrice}} 
{{/each}}
```

**Result:**
![](//images.contentful.com/alneenqid6w5/5cRmcM2692G60Ok6gSAWmo/f7196556f5360f632dbccf47f837b5b9/3.1.jpg)
