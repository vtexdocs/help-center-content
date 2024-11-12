---
title: 'searchNavigator control multi-selection filter disregards searched term'
id: ijtyA8hzgsgSYwa6EoyES
status: PUBLISHED
createdAt: 2017-08-29T15:40:30.287Z
updatedAt: 2022-12-22T20:43:23.408Z
publishedAt: 2022-12-22T20:43:23.408Z
firstPublishedAt: 2017-08-29T19:10:56.767Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slugEN: searchnavigator-control-multiselection-filter-disregards-searched-term
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

>⚠️ **Warning**: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.

When a user searches for a term and thereafter applies a filter to the multi-selection options (in the searchNavigator control), the searched term is initially removed from the query, meaning that the filter ignores the term and performs the search query only by considering the options chosen by the user.

![search result](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.gif)

## Simulation

To simulate this scenario: 
1. Configure the searchNavigator control in a template that has the searchResult control (Search, Department, Category, etc). Read more on controls by [clicking here](http://help.vtex.com/en/tutorial/--tutorials_563)
2. Through CSS, leave the multi-selection option for HTML rendering through control available
3. Access the site and search for a term that contains products
4. In the filter multi-selection options (searchNavigator), choose an option (Brand, Category, Specs) and click on the button to apply the filters
5. Done! After applying the filter, the searched term is initially removed from the context and the search is only processed with the selected filter

## Workaround

TO avoid this scenario, don't use the multi-selection searchNavigator control filters. 

