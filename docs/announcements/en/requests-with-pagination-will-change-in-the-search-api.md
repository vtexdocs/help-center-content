---
title: 'Requests with pagination will change in the search API'
id: 3UZR4qoAisiqE6kmuuYEAc
status: PUBLISHED
createdAt: 2018-01-24T14:11:26.225Z
updatedAt: 2023-12-15T13:03:53.872Z
publishedAt: 2023-12-15T13:03:53.872Z
contentType: updates
productTeam: Identity
author: authors_24
slug: requests-with-pagination-will-change-in-the-search-api
locale: en
legacySlug: requests-with-pagination-will-change-in-the-search-api
announcementImageID: ''
announcementSynopsisEN: 'Starting march 31st, the request header resources for pagination will be deprecated.'
---

<div class = "alert alert-warning">
  <strong>Warning</strong>: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.
</div>

Starting __march 31st__, the  request header `resources` for pagination will be deprecated. As a result, you will have to use the parameters `_from` and `_to` in the URL in order to make a request. For example:

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search?ft=refrigerator&_from=1&_to=30`

This change has already been implemented in the API, but until the due date, both ways to make the request will be permitted. On the other hand, we won't make any changes in the response header `resources` (so it will keep working normally).

<div class="alert alert-warning">
<b>Important:</b><br> 
- The parameters <b>_from</b> and <b>_to</b> must not have a difference bigger than <b>50</b>. This will limit the number of results shown to 50 at a time.<br>
<br>
- There's also a limit of 2500 items for any given search. Because of that, it's not possible to have a value over 2500 at the <b>_to</b> parameter.<br>
</div>

To know more about how pagination requests work in the search API, take a look at this [document](https://developers.vtex.com/docs/api-reference/search-api).
