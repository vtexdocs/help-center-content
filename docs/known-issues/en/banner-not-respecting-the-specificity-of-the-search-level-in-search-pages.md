---
title: Banner not respecting the specificity of the search level in search pages
id: 4FnLaP0Ftm4TJZaTBnLHXQ
status: PUBLISHED
createdAt: 2022-10-11T14:56:22.264Z
updatedAt: 2022-11-25T21:57:33.961Z
publishedAt: 2022-11-25T21:57:33.961Z
firstPublishedAt: 2022-10-11T14:56:22.795Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: banner-not-respecting-the-specificity-of-the-search-level-in-search-pages
kiStatus: Backlog
internalReference: 566809
---

## Summary



If we have a banner for a department and another one for a category inside this department, the banner query won't respect the specificity of the category tree, we will always get the first one of the API

https://github.com/vtex-apps/search/blob/26307cb3e2466a385a6c90565e076600d637509b/react/components/Banner/index.tsx#L75-L79

This is applied to the entire category tree or specification levels



## Simulation




- Go to: /admin/search/banners/
- Create a banner for a department (it should be created first)
- Create a banner for a category inside this department
- Go to the category page (client's site)
- It will match both and will return the first one to be shown



## Workaround


Create banners for the more specific ones first and after that for the more generic ones. Example: Create banners first for subcategories first, then categories, and then department

OR

Create all banners that you want to use, and then, deactivate and activate the more generic banners following the rule that I shared previously.
Example: Deactivate and activate Subcategories, then Categories, and then Departments

 it will guarantee that the most generic banners will be displayed as the last one in the API response

https://search.biggylabs.com.br/search-api/v1/AccountName/api/split/banner_search/category-1/yourDepartment/category-2/yourCategory

