---
title: "'Invalid header signature' error when trying to import freight spreadsheet"
id: qruKcwf7zwwOcGWA6mkgK
status: PUBLISHED
createdAt: 2018-10-02T16:01:21.654Z
updatedAt: 2019-12-31T14:24:22.719Z
publishedAt: 2019-12-31T14:24:22.719Z
firstPublishedAt: 2018-10-02T16:04:23.257Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slug: erro-invalid-header-signature-ao-tentar-importar-planilha-de-frete
locale: en
legacySlug: erro-invalid-header-signature-ao-tentar-importar-planilha-de-frete
---

When uploading a freight spreadsheet, you can come across the error "*Invalid header signature; read {serialNumber}, expected {serialNumber}*".

This error occurs when the freight spreadsheet is imported with the __.xlsx__ extension.

To solve the problem, it is necessary to adjust the freight spreadsheet to the __.xls__ extension and [import the freight spreadsheet](http://help.vtex.com/en/tutorial/importing-the-shipping-spreadsheet) again.

<div class="alert alert-warning">
In case the spreadsheet is over 10 MB, you’ll need to compact it in .zip format. The .zip archive should have less than 10 MB. Otherwise, the upload won’t work.
</div>

