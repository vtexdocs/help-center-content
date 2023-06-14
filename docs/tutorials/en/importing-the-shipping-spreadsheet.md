---
title: 'Importing the shipping spreadsheet'
id: 45I9m2rknucSmYigA2AE0G
status: DRAFT
createdAt: 2018-02-28T19:46:49.085Z
updatedAt: 2021-07-12T13:41:11.689Z
publishedAt: 
firstPublishedAt: 2018-02-28T21:32:16.417Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: importing-the-shipping-spreadsheet
legacySlug: importing-the-shipping-spreadsheet
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

<div class="alert alert-info">
Warning: This documentation is being updated to reflect the concept change from Dashboards to <a href="https://help.vtex.com/en/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">shipping strategy</a>.
</div>


Before importing the data, it is important to have the VTEX model worksheet saved on your machine, that is, a spreadsheet __identical to our model worksheet__, including the cells formatting, with the header, and already in _.xls_ format (Excel 97-2003). To get the template, click on the __Spreadsheet Model Download link__, which is inside the carrier's settings screen.

1. Access the __Inventory & Shipping__ module
2. Click on __Dashboard__
3. Then, on the carrier you want to import the freight values from
4. Click on __Update spreadsheet__ then on __Choose file__
5. Select the previously saved file on your machine, with the specifications defined above
6. To finish, click on __Save__

After that, a color orange stripe will highlight the carrier included on the freight table, with the message _Processing_. The time of uploading depends on the size of the spreadsheet.

<div class="alert alert-warning">
Remember that each new import overwrites the information that was imported before.
</div>

<div class="alert alert-warning">
<strong>1st Note:</strong> If the 65,536 lines of the <em>.xls</em> version are insufficient for the registration of all freight values of the carrier, you must create a new tab, with the same header, on the same file, to continue filling out the information.
</div>

<div class="alert alert-warning">
<strong>2nd Note:</strong>Pay attention to the file size. If it is bigger than 10MB, you will need to compress it with a <em>.zip</em> extension. This Zip file must also have 10MB tops for the upload to be successful. If somehow it still exceeds that limit, we recommend you to split it between more carriers.
</div>

## How to convert a shipping spreadsheet

If you are going offer delivery services from Correios and your spreadsheet is not in VTEX standards, follow the steps below, access the [integrador correios](http://clientes.xpagencia.com.br/ferramentas/logistics/transportadoras/planilha), tool provided by the XP agency.

### Related articles:
[Building the freight spreadsheet](/en/tutorial/building-a-freight-spreadsheet)
[Registering Carriers](/en/tutorial/registering-a-carrier/)

