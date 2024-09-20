---
title: 'Media - Overview'
id: 31fhjHTt4TBoo50AmGQ9b2
status: PUBLISHED
createdAt: 2023-05-29T23:26:35.354Z
updatedAt: 2024-07-03T19:28:25.937Z
publishedAt: 2024-07-03T19:28:25.937Z
firstPublishedAt: 2023-05-30T18:01:54.161Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: media-overview
locale: en
legacySlug: media-overview
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

Media is a feature responsible for managing your store's media files, such as images and videos. For images, you can upload and organize files up to 5 MB in the following formats: `png`, `jpg`, `gif`, `svg` and `webp`. For videos, you can add a URL to the externally hosted video provider, e.g. YouTube or Vimeo.

>⚠️ For upload, files must have a lowercase extension (e.g., `store.png`) and be up to **5 MB**.

![Media Overview](//images.ctfassets.net/alneenqid6w5/3HL6n5pBx5OpIyJMmPccuZ/4151c07cdf6675310b41607256633894/en-media-overview.png)

In addition, Media is integrated with **Site Editor** and **Headless CMS**. This integration allows you to access and manage Media directly through VTEX CMS solutions.

In this guide, you will learn how to:

- [Access Media](#accessing-media)
- [Manage files in Media](#managing-files-in-media)

## Accessing Media
There are three ways to access Media:

- **Media**: In the VTEX Admin, go to **Storefront > Media**.

- **Site Editor** (for stores using the Store Framework): In the VTEX Admin, go to **Storefront > Site Editor**, choose a block that contains an image (e.g. Carousel), and click `Add`. A Media panel will open.

- **Headless CMS**: In the VTEX Admin, go to **Storefront > Headless CMS**. Choose one of the created pages, such as a product page. From the available sections, select one to which you can add an image, e.g. , [Hero](https://developers.vtex.com/docs/guides/faststore/organisms-hero), and click the Hero image component. A Media panel will open.

>⚠️ Note that the section must use the [media-gallery](https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections#step-3-adding-sections-to-the-headless-cms) to leverage Media. For [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore) projects, the sections that use the <i>media-gallery</i> widget are [Navbar](https://developers.vtex.com/docs/guides/faststore/organisms-navbar) and [Hero](https://developers.vtex.com/docs/guides/faststore/organisms-hero).

In the following image, you can see an overview of the Media interface and the actions available for managing your media files:

![Media Features](//images.ctfassets.net/alneenqid6w5/2teyzkUy2zP5vjMLPxlXgD/7466fed34ed8183fde0b9d61e68b9e1f/en-media-features.png)

| Field | Description |
| ---------- | ------------- |
| **I - Search Field** | Search for available files in Media. |
| **II - Sort by** | Sort how files are displayed in the interface based on the filters: `Newest`, `Oldest`, `Name (A-Z)`, and `Name (Z-A)`. |
| **III - Pages** | Browse the available file pages. |
| **IV - View Mode** | Choose the view mode for the files: `List View` or `Grid View`. |
| **V - Add Image** | Upload a new file from your device. |

## Managing files in Media
See in the sections below the actions available for managing files in Media:

### Uploading images 
In Media, you can upload images, and the feature supports the following formats: `png`, `jpg`, `gif`, `svg` and `webp`, with a file size limit of 5 MB. To start uploading your store’s image, follow these steps:

1. On the **Media** page or panel, click `Add New` and click `Image`.

>⚠️ In the Media panel available in the Headless CMS and Site Editor, you can drag and drop images.

2. Choose the image you want to upload and click `Open`.

>⚠️ Please note that Media accepts the following formats: `png`, `jpg`, `gif`, `svg`, and `webp`, in lowercase and with a file size limit of 5 MB.

3. After the image is loaded, a success message will be displayed.

Now, you can perform other actions by clicking `More actions` (three vertical dots) on the image thumbnail and choosing one of the following actions:

| Field | Description |
| ---------- | ------------- |
| **Preview** | Opens the image on a new page. |
| **Copy URL** | Copies the URL of the image so that you can use it in other sections of your store. |
| **Download** | Downloads the image to your computer. |
| **Delete** |	Deletes the image from the repository. |

>⚠️ Deleting the image will only remove it from the Media repository. If you have added the image to a Hero component, for example, the image will continue to be used in that component. However, you will not be able to use it in other components.

### Adding videos
Besides images, in Media, you can also store videos and then use them in your store to create visual appeal for users navigating the store.

1. On the **Media** page, click `Add New` and choose `Video`.
2. In the modal, enter the video’s name and its URL accordingly.

- **Video Name:** Add a name for the video that helps you better identify it in the gallery.
- **Video URL:** Add the video’s URL.

3. Click `Add Video`. 

With the video added, you can choose what to do with the video by clicking on the menu `⋮` in the video’s thumbnail:

- **Copy URL**: Get the video’s URL address to use in your store through the Headless CMS.
- **Open Video**: See a preview of the video in a new browser tab.
- **Delete**: Delete the video from your Gallery.

### Adding a video to content in Headless CMS
Integrating multimedia content, such as videos, into your Headless CMS can enhance the user experience of your website. Follow the steps below to add videos to your store.

1. In the VTEX Admin, go to **Storefront > Headless CMS**.
2. Select the [Project](https://help.vtex.com/en/tutorial/managing-projects--42IpDFqTVTESH8DCypJMPM) where you want to add the video.
3. Choose a page to add the video, e.g. **Home**.
4. With the **Home** page open, in the **Sections** tab, add (`+`) a section that has the `media-gallery` Widget, e.g. Hero.
5. In the Hero fill the following fields:

- **URL address**: paste the URL that you copied from the Media.
- **Video description**: Image description for accessibility.

6. Click `Save`. 
7. If you want to check your changes before publishing it, click `Preview`.

### Canceling an upload

- **Images**

If you are uploading a new image and do not want to continue, you can cancel the upload by clicking the `X` overlay on the image thumbnail.

- **Videos**

Once you have uploaded the video, hover over the video's thumbnail, click on the menu (`⋮`), and choose **Delete**. If this video is already in use somewhere in your store, it will remain there, but it won't be available for future use. 

