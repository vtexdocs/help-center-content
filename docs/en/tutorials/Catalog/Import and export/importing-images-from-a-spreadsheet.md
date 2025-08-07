---
title: 'Importing images from a spreadsheet'
id: tutorials_262
status: PUBLISHED
createdAt: 2017-04-27T22:11:24.581Z
updatedAt: 2025-06-12T17:13:49.153Z
publishedAt: 2025-06-12T17:13:49.153Z
firstPublishedAt: 2017-04-27T23:03:11.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: importing-images-from-a-spreadsheet
legacySlug: importing-images-via-a-worksheet
locale: en
subcategoryId: 2u48reCb68K48EAcm86ccM
---

It is essential to register product images, otherwise the products themselves will be inactive. Importing images from an Excel template is the fastest way to do so, since the task will be done in bulk.

To import images in bulk, follow the step-by-step instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click **Import and export**.
3. Click the **Import images** tab.
4. Click [here](https://docs.google.com/spreadsheets/d/17ItiEncnnioxLZFLiKDTxs5Yj0D6tn-i/edit?usp=sharing&ouid=115538149359194322936&rtpof=true&sd=true) to download the template sheet in the format admitted by  the system (.xls), so that you can import product images seamlessly.
5. Fill in the template according to the description in the [Filling in a template to import images](#filling-in-a-template-to-import-images) section. Then, save it to your computer.
6. Click the <i class="fas fa-folder-open"></i> `Select file...` button.
7. Look for the file saved in your computer and click `Open`.
8. In the **Notification email** field, enter an email address to receive notifications about the import procedure. By default, you will use the email you have registered to access VTEX Admin.
9. Click `Import`.

The system will process your request internally and will send a notification to your registered email to inform you whether the processed file showed an error message or not while importing the images.

Completion time will depend on the file size. If the template has more than 2,000 rows, we recommend you to divide the template into two files or more.

Finally, if the products on the template rows are successfully processed, they will be placed on the indexing queue.

<div class="alert alert-danger">
<p>Every time you import a template including image information, the system uploads a new image for the SKU concerned. We advise you to be on the lookout for potential duplications.</p>
<p>If you reimport a template with information previously sent to VTEX, the first image won't be overwritten during import: the image will be duplicated in the SKU registration.</p>
</div>

## Filling in a template to import images

Below, you'll find information on how to fill in each field in the image import template:

- [URL](#url)
- [Image name](#image-name)
- [Image text](#image-text)
- [Label](#label)
- [SkuId](#skuid)
- [SKUReferenceCode](#skureferencecode)

### URL

<div class="alert alert-info">
<p>This is a mandatory field. No special characters, periods or accents are admitted on the image name.</p>
</div>

It is the URL of the image to be linked to the SKU, which must be public and hosted on an FTP server where the image link originates. The URL must start with the HTTP protocol identifier (`http://`) and end with the file extension (`.jpg`, `.png` or `.gif`). Example: `http://www.imageexample.com.br/imagem03/teste01/exemplo15.jpg`.

To avoid any possible mistakes, you should verify the image URL you entered in the template: it should go from `http://` to the file extension. Otherwise, the system will not be able to access the URL and the image will not be imported.

You don't need to have your own FTP server to forward the image URLs. You may host that data on free websites and external or internal FTP servers, if they use the HTTP protocol.

In addition, you can use an external provider to authenticate the URL.

<div class="alert alert-warning">
  <p>The recommended size for each image must be below 3,000 KB (3 MB).</p>
</div>

### Image name

<div class="alert alert-info">
<p>This is a mandatory field. Special characters, accents or blank spaces are not admitted.</p>
</div>

The image name starts after the last /in the image URL and ends with the file extension. Therefore, this field must be filled in with the file name and extension (`.jpg`, `.png` or `.gif`). Example: `exemplo15.jpg`.

The file manager in CMS Legacy Portal will link the file name to the image.

### Image text

<div class="alert alert-info">
<p>Special characters and accents are not allowed in this field.</p>
<p>The <strong>Label</strong> and <strong>TextoImagem</strong> fields should have different values.</p>
</div>

The **Image text** field needs to be filled in with the text to be linked to the image. It will remain in the SKU registration in the **Images** tab, in the **Text** field.

### Label

<div class="alert alert-info">
<p>This is a mandatory field. Special characters, accents or blank spaces are not admitted.</p>
<p>The <strong>Label</strong> and <strong>TextoImagem</strong> fields should have different values.</p>
</div>

**Label** is the "tag" used to simplify template organization for your website pages, since it refers to its value. Examples: frontal, side, upper.

### SkuId

<div class="alert alert-info">
<p>This is a mandatory field. The informed ID must match an existing SKU ID in the catalog.</p>
</div>

The SKU ID is the code that identifies the SKU to which the image will be linked to. You can get this code by exporting **Products and SKUs**. For further information, read [How to export a product spreadsheet](https://help.vtex.com/en/tutorial/how-to-export-a-product-spreadsheet--2sIroGeqZqaN3NAvaSGwWV).

### SKUReferenceCode

The SKU reference code is the code that appears in the SKU registration, in the **SKUReferenceCode** field. This is a mandatory field.
