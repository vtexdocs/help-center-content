---
title: 'Avoiding CORS in your MasterData requests'
id: 6eJe5PG2JiOOYOKM2ywaYg
status: ARCHIVED
createdAt: 2018-11-19T19:52:49.941Z
updatedAt: 2022-08-04T22:36:18.442Z
publishedAt: 
firstPublishedAt: 2018-11-19T20:10:34.548Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slug: avoid-cors-in-your-masterdata-requests
locale: en
legacySlug: avoid-cors-in-your-masterdata-requests
---

## What is CORS (Cross-Origin Resource Sharing)
Before we begin, it is important to explain that CORS is not an error but a security mechanism designed to protect users from dangerous Javascript and unwarranted HTTP requests

CORS is triggered when an HTTP requests...: 

- ...a different domain (ex: vtex.com calls vtexcommercestable.com)
- ...a different sub domain (ex: store.com calls blog.store.com)
- ...a different port (ex: store.com calls store.com:3001)
- ...a different protocol (ex: site at https://store.com calls http://store.com)

## Why do we want to avoid CORS:
Your browser will block every requests that fits into one of the four conditions above, this might cause unexpected site behaviour and general frustration as some functionality might cease to function.

Furthermore, every time that the browser has to check if the backend supports cross origin resource sharing, an additional OPTION request is sent back to MasterData.  Improperly configured websites generate a great deal of these avoidable requests.

## Proper use
A JQuery correctly searching inside a MasterData entity using relative path.
Notice how the account name is omitted.


    $.getJSON("/foobar/dataentities/SL/search?_....
    
    


Incorrectly calling MasterData
Notice how the __account name AND 'vtexcommercestable'__ show up as part of the endpoint.

    https://account.vtexcommercestable.com.br/api/dataentities/SL/search



