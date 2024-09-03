---
title: 'Null column error when trying to import freight spreadsheet'
id: 5I6sN4rFqE6UMu6eMc8UEk
status: PUBLISHED
createdAt: 2018-09-28T15:57:20.736Z
updatedAt: 2021-08-11T17:13:54.626Z
publishedAt: 2021-08-11T17:13:54.626Z
firstPublishedAt: 2018-09-28T17:34:33.499Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slug: erro-de-coluna-nula-ao-tentar-importar-planilha-de-frete
locale: en
legacySlug: erro-de-coluna-nula-ao-tentar-importar-planilha-de-frete
---

When uploading a freight spreadsheet, you may encounter the *"A column {name-of-column} from line {line-number} cannot be null"* error.

This error occurs when the imported freight spreadsheet __has a tab outside the default format __.

Generally, the tab outside default format does not contain any important information. To solve the problem, __delete the tabs outside default format__, check if the tabs within default format have the correct information and try the upload again.

>⚠️ In case the spreadsheet is over 10 MB, you’ll need to compact it in .zip format. The .zip archive should have less than 10 MB. Otherwise, the upload won’t work.

## Obtain spreadsheet with default format

To ensure that your freight spreadsheet had the tabs with default format, we recommend downloading the spreadsheet in the correct format. To do this, follow the steps below:

1. In your store’s admin menu, click on __Inventory & shipping__
2. Select __Shipping strategy__
3. In __Carriers__, select the desired carrier
4. In the **Shipping Rates** section, click on __Download spreadsheet__
5. The freight spreadsheet with the correct format should be sent to your e-mail
6. Upon receiving the e-mail, decompress the spreadsheet
7. [Fill out the spreadsheet](http://help.vtex.com/en/tutorial/building-a-freight-spreadsheet)  with the desired values
8. [Import the freight spreadsheet](http://help.vtex.com/en/tutorial/importing-the-shipping-spreadsheet)
