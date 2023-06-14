---
title: Scheduling content updates 
id: 5L93gED3wgSRoWpFJlJ2ns
status: PUBLISHED
createdAt: 2021-10-28T18:52:57.668Z
updatedAt: 2023-03-27T13:53:54.461Z
publishedAt: 2023-03-27T13:53:54.461Z
firstPublishedAt: 2021-12-16T17:04:14.266Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slug: scheduling-content-updates
legacySlug: scheduling-content-updates
subcategory: 9Arh3cJIOYlfSD1MUC2h3
---

<div class="alert alert-warning" role="alert">
<p> The scheduled update can take up to 30 minutes to take effect and be shown on your page.</p>
</div>

After [creating a new content version in Site Editor](https://help.vtex.com/en/tutorial/gerenciando-versoes-de-conteudo--4loXo98CZncY0NnjKrScbG?&utm_source=autocomplete), you can schedule it to be published on your store by using the **Visibility** feature.

The Visibility feature allows you to immediately activate the new content version on your store, schedule when to publish the content or when to deactivate the new version.  You can also choose where you want to apply the new version: to one route (**this URL**) or to routes that share the same template (**this template**).

To illustrate how you can activate a new content version in Site Editor, we will use the [Slider-Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) block as an example.

1. In the VTEX Admin, access **Storefront > Site Editor**.

2. Click on the desired block (e.g., Slider-Layout) and select **VERSIONS.**

3. Click on the content you want to publish.

4. Go to the **Visibility** section and  select when you want to activate the content.

| Function   | Description |
| ---------- | ----------  |
| **Activate now** | The content will be activated immediately. |
| **Schedule a start date** | Schedule the date and time when the content must be activated. |
| **Schedule an end date** | Schedule the date and time when the content must be deactivated. Once the content is deactivated, the latest version will replace it.|

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
If you do not select the options in the Visibility section,the new version will be saved, but will not yet be published on your store.
</div>
6. After selecting when the content will be published, choose where  you want it to be applied:

<ul>
  <li><b>this URL:</b> the content will only be available  for one route of your choice.</li>
  <li><b>this template:</b> the content will be available for all routes with the same template.</li>
</ul>
5. Once you have configured the Visibility section, click on `SAVE`.

