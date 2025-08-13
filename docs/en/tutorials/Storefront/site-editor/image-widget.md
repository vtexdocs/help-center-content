---
title: 'Reusing images with Image Widget'
id: 7pRSVI2xXpQUzjUZj0m4ov
status: PUBLISHED
createdAt: 2021-06-30T18:06:46.531Z
updatedAt: 2024-03-27T14:07:43.190Z
publishedAt: 2024-03-27T14:07:43.190Z
firstPublishedAt: 2021-07-02T21:20:16.653Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: image-widget
legacySlug: image-widget
locale: en
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

Image widget is a modal repository for blocks that allow image uploads in [Site Editor](https://help.vtex.com/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW). With this modal repository, you can upload, store, and manage your store’s images and use them on different pages, such as Home, Product, or Newsletter.

For instance, you may want to add a new image to your store's __Carousel__ block. You can use the Image Widget to upload the image.

In the following section, [Accessing Image Widget](#accessing-image-widget), learn how to use it.

## Accessing Image Widget

Blocks on Site Editor, which allow you to upload an image, have the Image Widget modal. In this article, we will use the __Carousel__ block as an example.
The steps to access the Image Widget are as follow:

1. In the VTEX Admin, access **Storefront > Site Editor**.
2. In the right column, select the block to which you desire to upload an image.
3. In __BANNERS__, click on `ADD.`
4. Click in the __Banner Image__ placeholder.

Once you have completed the previous steps, the Image Widget modal will open on your screen.
Now that you know how to access the Image Widget, see what you can do next:

- [Adding an image](#adding-an-image)
- [Replacing an image](#replacing-an-image)
- [Removing an image](#removing-an-image)

### Adding an image

After [accessing the Image Widget](#accessing-image-widget), you can add images to it:

> ⚠️ When adding new images in the Image Widget modal using a [development workspace](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-workspace),  the performed settings will be saved directly in the master workspace. In other words, they will immediately be reflected in your store's modal.
<br>

> ⚠️ The maximum file size supported by Image Widget is 4 MB.

1. Click on `Add new.`
2. Choose the image you want to add and click on `Open`.
3. The modal closes by itself. Click on `APPLY`.

After completing the previous step, your image will be in the block and in your Image Widget repository and is ready to be used on your store pages. 

Once you have added an image to the modal, see what else you can do with it in the article [Features within Image Widget](#features-within-image-widget).

#### Features within Image Widget

Other features in the modal are searching for images, filtering them by order, and viewing your pictures in a list or grid.

Furthermore, If you [added images](#adding-an-image) to your modal, now you can preview them, copy an image URL, download them, and delete them from your repository. 

With the modal open, click on `more actions` in an image thumbnail.

| Options    | Description    |
| ---------- | ---------- |
| __Preview__ | Opens a new page to show a preview of the picture.|
| __Copy URL__| Allows you to copy the image’s URL and use it in other sections of your store.|
| __Download__ | Downloads the image to your computer.|
| __Delete__   | Removes the image from the repository.|

### Replacing an image
Go to the block in which you want to replace a picture and:
1. Click on `More actions` in an image thumbnail, and select __replace.__
2. Click on `More Actions` again and select __Replace.__
3. With the modal open, click on an image to replace.
4. Click `APPLY`.

### Removing an image
To remove a picture in the desired block, click on `More actions` in an image thumbnail and select __remove__. After this, the image will no longer be visible in the block.

> ⚠️ When you remove an image, it does not mean it was deleted from the repository. To do that, check the section [Features within Image Widget](#features-within-image-widget).
