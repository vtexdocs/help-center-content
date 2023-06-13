---
title: How to set up the global checkout
id: tutorials_1929
status: DRAFT
createdAt: 2017-04-27T21:55:50.812Z
updatedAt: 2022-07-22T18:55:28.876Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:50.616Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: configuring-the-global-checkout
legacySlug: configuring-the-global-checkout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

The global checkout setup of your store enables you to sell to several countries regardless of the country of origin of your VTEX account.

In order to have a complete global Checkout experience, it is also important that your store be displayed in other languages. For more information about this settings, visit the article about [displaying store in another language](https://help.vtex.com/en/tutorial/displaying-the-store-in-another-language).

## Showing new document and phone fields

To view document and phone typing options different from those used by the store country, follow the steps below:

1. On the Admin menu, access __Checkout__.
2. Click on the gear in the website you want to edit.
3. Click on __Code__.
4. On Files, click on `checkout5-custom.css`.
5. Add the code below.
6. Click on __Save__.

```css
/* /files/checkout5-custom.css */

/* Displays the option to enter a foreign document */
.document-box { display: block; }

/* Displays the option to enter an international phone */
.phone-box { display: block; }
```

`.document-box { display: block; }` shows the option to type a foreign document number.
`.phone-box { display: block; }` shows the option to type an international phone number.


Two new buttons will be shown in your Checkout:

- "I don't have CPF."
- "I don't have a Brazilian phone."

## Showing new delivery and invoice addresses

### Deliveries

Let us assume that you intend to make a delivery for a customer located in England. To enable this delivery you must create a new carrier that will perform deliveries in this country. Then, add a new shipping worksheet with a column named “Country” and with the “GBR” value.

1. [Create a new carrier](/en/tutorial/registering-a-carrier/).
2. For the new carrier, create a shipping worksheet with the column “Country” using the 3-digit ISO code of the country.

<div class="alert alert-info">
The value of the column “Country” must be the 3-digit ISO code of the countries. In order to check the codes, we recommend the website<a href="https://countrycode.org/">https://countrycode.org/</a>.
</div>

After having defined the delivery settings for the countries intended, a new field will be shown on the delivery form of your checkout allowing the user to choose the desired international delivery option. 

### Invoices

By unchecking the "My invoice address is the same as the delivery" box, the user can enter a new invoice address among the available countries for delivery. However, nothing prevents this user from having an international credit card from other countries not available in your store.

To allow billing for a credit card whose invoice address is in another country, you must make on your store page a country select field appear on "Invoice Address".

The display of all countries on the *Invoice Address* field can be activated on your store layout (CSS) with the code below:

```css
/* Show all countries */
.CountrySelector--all-countries { display: block; }
/* Hide delivery countries */
.CountrySelector { display: none; } 
```


