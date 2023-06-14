---
title: Managing components versions in Site Editor
id: 28j8Tw5oG0ZYja2kdk7ovM
status: DRAFT
createdAt: 2021-09-21T21:19:25.083Z
updatedAt: 2021-09-21T21:23:36.788Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: VTEX IO
author: 
slug: managing-components-versions-in-site-editor
legacySlug: managing-components-versions-in-site-editor
subcategory: 9Arh3cJIOYlfSD1MUC2h3
---

You can create versions of the same component, i.e., Slider Layout, in your store's Admin through Site Editor. 

Imagine that you want a different version of your store’s Slider Layout for Black Friday, with new promotions showing up, and you want to test with this version or schedule to when you want to show in your store. The feature **versions** allows you to create, plan, and try new versions of the same component without compromising the component’s current version in your store.

![gif-versions]()

In this tutorial, check out the sections:

[Creating a new version](#creating-a-new-version)
[Activating versions](#activating-versions)
[Deleting versions](#deleting versions)

> info - The feature **versions** is available to any block in Site Editor.

## Creating a new version 
To illustrate how you can create a new content version in Site Editor, we will use the [Slider Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) block as an example.

Go to your VTEX store’s Admin.
In the side menu, click on **CMS** > **Site Editor**.
Click on the **Slider-Layout** block, select **VERSIONS** and click on **NEW VERSION**

	![gif-new-version]()

In the field **Untitled content**, write the desired name’s content.

Click on `SAVE`

Once you have saved it, the component’s new version is created. However, **it is not activated in your store yet**, and to activate it check out the section **[Activating versions](#activating-versions)**.

## Activating versions

After [creating a new content version in Site Editor](#creating-a-new-content-version), you are able to activate it through [**more options**](#activating-via-more-options) or the [**Visibility**](#activating-via-visibility-section). Follow the sections below to activate the content in your store.

> :warning: To illustrate how you can activate content in Site Editor, we will use the [Slider Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) block as an example. However, the feature **versions** is available to any block in Site Editor.

### Activating via more options

Go to your VTEX store’s Admin.
In the side menu, click on **CMS** > **Site Editor**.
Click on the **Slider-Layout** block, select **VERSIONS** .
Choose the content you want to activate and click on `more options` > **Activate**.

     ![gif-versions]()

Now, your content is activated in your store.

> :warning: you can only have one content active at a time. If you activate one content, the others are deactivated.

### Activating via Visibility section

The visibility section allows you to choose if the component version will be activated now, scheduled or if you will create an inactivated version. 

      ![visibility-img]()

Go to your VTEX store’s Admin.
In the side menu, click on **CMS** > **Site Editor**.
Click on the **Slider-Layout** block, select **VERSIONS** .
Click on the content you want to activate.

      ![gif-versions]()

Go to the **Visibility** section, and there, select when the content is available.

Activate now
The content will be activated immediately and will deactivate the current version.
Schedule a start date
Schedule the date and time to activate the content.
Schedule an end date
Schedule the date and time when to deactivate the content.

> :warning:  If you do not select the Visibility section options, you are only creating the new version, but it is still deactivated.

After selecting when the content will be available, choose where do you want it to be applied

**this URL** - 
**this template** - 

Since you have set up the visibility section, click on `SAVE`.

## Deleting versions

If you do not desire to have a component version saved to use, you can delete it following the next steps.

> :warning: To illustrate how you can activate content in Site Editor, we will use the [Slider Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) block as an example. However, the activate button is available to any block in Site Editor.

Go to your VTEX store’s Admin.
In the side menu, click on **CMS** > **Site Editor**.
Click on the **Slider-Layout** block, select **VERSIONS** .
Choose the content you want to delete and click on `more options` > **Delete**.

     ![gif-versions]()

The interface will ask if you are sure to delete the content. Click on `DELETE` to permanently exclude the version.

