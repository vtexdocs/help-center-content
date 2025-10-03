---
title: 'Adding Media to the message'
id: 6XfWIo7fpN4VJLzZTud2UP
status: PUBLISHED
createdAt: 2025-09-17T13:56:46.780Z
updatedAt: 2025-10-03T14:20:03.799Z
publishedAt: 2025-10-03T14:20:03.799Z
firstPublishedAt: 2025-10-03T14:20:03.799Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-media-to-the-message
legacySlug: adding-media-to-the-message
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

You can add media to your message on our platform. Whether images, audio, or videos, there are two different ways to add them: using a URL or uploading the file directly from your computer.

### Using a URL
  1. Within your project, click on the **Flows Module** ;

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/adding-media-to-the-message_1.png)

  2. Choose an existing flow or create a new one;
  3. Add a new action card, click on **Files** , and choose between **Image URL** , **Audio URL** , **Video URL** , **PDF Document URL** , or insert the chosen media URL.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/adding-media-to-the-message_2.png)

### Using a file from your computer

Add a new action card, click on **Files** , choose the **Upload File** option, and select the file directly from your computer.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/adding-media-to-the-message_3.png)

### Limitations

There is a file size limit for uploads, as every request takes a certain amount of time, and a timeout may occur when trying to execute the request. The maximum allowed file size is 32MB, but there are some caveats:

  * It's a maximum of 32MB upload OR 30 seconds attempting to upload. So, if the file is smaller than 32MB but the internet is slow enough that it takes more than 30 seconds to attach, the upload will fail due to exceeding the request time.
  * If the communication channel is WhatsApp, it has its own rules, as shown in their [documentation](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#supported-media-types). We can see that videos and audio have a maximum size limit of 16MB (if you upload a 20MB video to the Weni platform, it will be saved on the platform, but when attempting to send it, WhatsApp won't execute the delivery). Documents have a maximum limit of 100MB each (however, the Weni platform supports up to 32MB).
