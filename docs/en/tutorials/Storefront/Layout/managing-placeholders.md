---
title: 'Managing placeholders'
id: 29Y7r9JqcWIqmGipReGLQI
status: PUBLISHED
createdAt: 2022-01-10T22:19:18.057Z
updatedAt: 2022-01-10T22:27:37.181Z
publishedAt: 2022-01-10T22:27:37.181Z
firstPublishedAt: 2022-01-10T22:26:52.895Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1DedyaVUPp5wLAvjY7wKKv
slug: managing-placeholders
locale: en
legacySlug: managing-placeholders
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Placeholders allow the store to insert four types of elements on its page:
- Banner
- DHTML Banner
- Collection
- HTML

In practice, a placeholder is a configurable snippet of code that meets store-defined conditions.

For example, you could insert a placeholder on the homepage and set it as a banner; and then pick three different images for this banner, each activated on a specific date range.

### Inserting the placeholder in the template

First of all, to create a new placeholder, you need to insert the control that will define it in the template.

This is the placeholder control: `<vtex:contentPlaceHolder id="" />`

It creates a configurable element in the part of the code where it is inserted.

It is important to enter an `id` value. It will be the identifier of that placeholder in the system.

![6 1](//images.ctfassets.net/alneenqid6w5/5TcE6FWxp9xwmSl2fQCYMa/bb0a3544af3d95d1d59e9f484ba61984/6_1.png)

### Configuring the placeholder

Once the placeholder control has been inserted into the template, you can configure it in the settings of the layout that uses this template.

1. Open the layout and then click on the **Settings** tab. The new placeholder should appear there, with the name equal to the id value defined in the control. For now, this placeholder is empty, meaning there are no objects inside it.
![6 2](//images.ctfassets.net/alneenqid6w5/3sr9POkZJdqXMiUC45nIeZ/440a22c2e88050d9b1e82cfe155938e9/6_2.png)
2. To insert an object, click on **add object**.
3. Then choose the object type and click on the **Add** button.
4. Finally, click on the **Save Settings** button.

You can now edit the object inserted in the placeholder.

To do this, click on the pencil icon inside the object, and then click on **add content**.

![6 3](//images.ctfassets.net/alneenqid6w5/4Mgr9vmPRKmzTGu7ntH6u6/201c7b83ce8cef556a4a802b5a457359/6_3.png)

You can now name this object, upload images to it and configure the conditions under which it will be rendered.

At the end, click on the __Add Content List__ button and then save the content.
