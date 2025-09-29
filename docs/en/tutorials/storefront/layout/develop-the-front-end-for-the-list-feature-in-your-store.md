---
title: 'Develop the front-end for the list feature in your store'
id: iBCiwkxH8cmk6AcGoYMW0
status: PUBLISHED
createdAt: 2018-08-01T14:38:57.550Z
updatedAt: 2023-03-29T11:56:42.668Z
publishedAt: 2023-03-29T11:56:42.668Z
firstPublishedAt: 2018-08-06T17:06:46.166Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: develop-the-front-end-for-the-list-feature-in-your-store
legacySlug: develop-the-front-end-for-the-list-feature-in-your-store
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

## Make link to access the lists section in your store

The settings below must be made through VTEX Admin, accessing **Storefront > Layout** and clicking on the **CMS** folder.

To create the html element that gives the customer access to the lists in your store's Home, you must include the code below in your template.

```html
<a href=“/giftlist”>Lists</a>
```

The `/giftlist` route acts as the Home of the lists for each client.

## Editing the lists home template

In the `new-Giftlist` template located in your store's CMS, we have already included the `<vtex.cmc:GiftListSearchV2 />` control. This control __renders the lists search__ created by your clients. See below the code rendered by this template.

```html
<div class="giftlist giftlist-search">
    <h2 class="glsearch-title">Search List</h2>
    <fieldset class="glsearch">
        <form name="giftlistsearchform" id="giftlistsearchform" enctype="multipart/form-data">
            <ul class="giftlistsearchul glsearch-ul">
                <li class="glsearch-type">
                    <span>
                        <label for="giftlistsearchtype">List type</label>
                    </span>
                    <select name="giftlistsearchtype" id="giftlistsearchtype">
                        <!-- New options will be added for each list type created in the Admin-->
                        <option value="x">All/Wish list</option>
                    </select>

                </li>
                <li class="glsearch-id">
                    <span>
                        <label for="giftlistsearchid">Reference</label>
                    </span>
                    <input type="text" id="giftlistsearchid" name="giftlistsearchid" placeholder="reference">
                </li>
                <li class="glsearch-name">
                    <span>
                        <label for="giftlistsearchname">Name</label>
                    </span>
                    <input type="text" id="giftlistsearchname" name="giftlistsearchname" placeholder="name">
                </li>
                <li class="glsearch-surname">
                    <span>
                        <label for="giftlistsearchsurname">Last name</label>
                    </span>
                    <input type="text" id="giftlistsearchsurname" name="giftlistsearchsurname" placeholder="last name">
                </li>
                <li class="glsearch-eventlocation">
                    <span>
                        <label for="giftlistsearcheventlocation">Place</label>
                    </span>
                    <input type="text" id="giftlistsearcheventlocation" name="giftlistsearcheventlocation" placeholder="place">
                </li>
                <li class="glsearch-eventcity optional">
                    <span>
                        <label for="giftlistsearcheventcity">City Event</label>
                    </span>
                    <input type="text" id="giftlistsearcheventcity" name="giftlistsearcheventcity" placeholder="city event">
                </li>
                <li class="glsearch-eventdate optional">
                    <span>
                        <label for="giftlistsearcheventdate">Date</label>
                    </span>
                    <input type="text" id="giftlistsearcheventdate" name="giftlistsearcheventdate" placeholder="date">
                </li>

                <li class="glsearch-find">
                    <span>
                        <input type="button" name="giftlistsearchfind" id="giftlistsearchfind" value="Search" class="btn">
                    </span>
                </li>
            </ul>
            <input type="hidden" id="giftlistsearchimagetypeid" name="giftlistsearchimagetypeid" value="3">
        </form>
    </fieldset>
    <div class="glsearch-result"></div>
</div>
```

Inside the `new-GiftList` template, there is a subtemplate with the name `new-GiftList-Sidebar-nav`. This subtemplate contains the code snippet below and can be found in the `Sub Templates` section within `HTML Templates` in your CMS:

```html
<ul class="nav nav-list bs-docs-sidenav giftlist-sidenav">
    <li>[<i class="icon-chevron-right"></i>Search a List](/giftlist/)</li>
    <li>[<i class="icon-chevron-right"></i>Create new List](/giftlist/create/)</li>
    <li>[<i class="icon-chevron-right"></i>Mange my Lists](/giftlist/manage/)</li>
</ul>
```

This code renders a list with __three links__:

1. __Search a List__: This link takes the client to the `/giflist` route, which is the home of the lists and where the searches are carried out by the lists
2. __Create new List__: This link takes the client to the `/giftlist/create` route, where the client creates their lists. In the next steps, we'll explain how list creation is done.
3. __Manage my Lists__: This link takes the client to the `/giftlist/manage` route, where the client can manage their lists. In the next steps, we'll explain how list management is done.

> ❗ Do not uncheck the **Authentication Required** flag already selected by default in the folders below. Identification is required for lists to be displayed for each specific user.

## Editing the list creation template

> ℹ️ Before editing this template, you must [create the List Type](/en/tutorial/creating-a-type-of-list) that will be offered in your store. <!--Reescrever o artigo de tipo de lista -->

The template for creating lists is located in the `giftlist/create` route. The default template for this route is `new-GiftList-Create`, located in the `HTML Templates` section of your CMS.

The list creation template comes with the control `<vtex.cmc:GiftListFormV2 />` by default. This control will render the list creation information __ according to the list type__ that was created.

The `giftlist / create` folder, by default, already comes with the flag marked` Authentication Required`. Because of this, a login will be requested when this section is accessed.

## Edit the list management template

The template for list management is located on the `giftlist / manage` route. The default template for this route is `new-GiftList-manage`, located in the` HTML Templates` section of your CMS.

The list management template comes with the control `<vtex.cmc: GiftListManagerV2 />` by default. This control will render the lists that were created by the client in the `giftlist / create` route.

The `giftlist / manage` folder, by default, already comes with the flag marked` Authentication Required`. Because of this, a login will be requested when this section is accessed.

## Editing the List Editing Template

Within the `<vtex.cmc: GiftListManagerV2 />` control located in the `new-GiftList-manage` template, an` Edit` button is rendered that takes the client to the `giftlist / edit` route. This route reads the `new-GiftList-Edit` template, where the client can edit its lists.

The list editing template comes with the control `<vtex.cmc: GiftListFormV2 />` by default. This control is the same as the `giftlist / create` route template. However, it will not render a list creation form. Considering the editing context, the control will render the information in the chosen list so that the client can edit.
