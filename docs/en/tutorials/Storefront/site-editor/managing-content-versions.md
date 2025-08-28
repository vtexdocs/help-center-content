---
title: 'Managing content versions'
id: 4loXo98CZncY0NnjKrScbG
status: PUBLISHED
createdAt: 2021-10-28T16:11:05.023Z
updatedAt: 2023-03-24T22:05:07.430Z
publishedAt: 2023-03-24T22:05:07.430Z
firstPublishedAt: 2021-12-16T16:27:38.316Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-content-versions
legacySlug: managing-content-versions
locale: en
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

The version of a block is a copy of its content at a given time. For example, a Carousel can have predefined versions for future marketing campaigns, such as Black Friday and Valentine's Day, with content-specific banners.

With the **Versions** feature, you can create, schedule, and try different contents for a given block without compromising the published version of your store. Every block available in the Site Editor can have multiple versions.

See the following sections on how to:

- [Create a new content version](#creating-a-new-content-version)
- [Activate versions](#activating-versions)
- [Schedule content updates](#scheduling-content-updates)
- [Delete versions](#deleting-versions)

## Creating a new content version 
To illustrate how you can create a new content version for a storefront block in Site Editor, we will use the [Slider-Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) block as an example.

1. In the VTEX Admin, access **Storefront > Site Editor**.

2. Click on the desired block (e.g., Slider-Layout), select **VERSIONS** and click on **NEW VERSION.**

3. In the **Untitled content** field, enter a name to identify your content easily, for example, Black Friday Campaign.

4. Set up the block according to your preference and click on `SAVE`.

Once you have saved your changes, a new version of the block will be created. However, **this version is not publicly available in your store yet**. To publish it, please refer to the **[Activating versions](#activating-versions)** section.

## Activating versions

After [creating a new content version in Site Editor](#creating-a-new-content-version), you can make it publicly available by using the **More options** function. Follow the sections below to publish the content on your store.

1. In the VTEX Admin, access **Storefront > Site Editor**.

2. Click on the desired block (e.g., Slider-Layout), select **VERSIONS.**

3. Choose the content you want to activate and click on `More options` > **Activate.**

> ⚠️ When accessing *Apply to*, the option *this URL* will always appear above *this template*. This means that if the block has two versions, each one with a different application option, the user will only be able to reactivate the version applied in the template if he deletes the version applied by URL. After clicking on `more options` > **Activate**, the new content will be published on your store. <div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px"> You can only have one content active at a time. If you activate one content, the others are deactivated.

## Scheduling content updates

After [creating a new content version in Site Editor](#creating-a-new-content-version), you can schedule the publication of the new version in your store by using the **Visibility** feature.

Please refer to the documentation [Scheduling content updates](https://help.vtex.com/en/tutorial/agendando-atualizacoes-de-conteudo--5L93gED3wgSRoWpFJlJ2ns) to learn how to use the **Visibility** feature.

## Deleting versions

If you want to delete a version of a block, take the following steps to remove it from your saved versions.

1. In the VTEX Admin, access **Storefront > Site Editor**.

2. Click on the desired block and select **VERSIONS.**

3. Choose the content you want to delete and click on `More options` > **Delete.**

4. You will be asked if you are sure you want to delete the content. Click on `DELETE` to permanently remove the version.
