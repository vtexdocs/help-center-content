---
title: Saving documents with triggers
id: 2j6N4aqbty6akUsiU2aCeo
status: DRAFT
createdAt: 2018-04-10T15:06:46.310Z
updatedAt: 2020-07-29T19:59:22.912Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:45:36.448Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: saving-documents-with-triggers
legacySlug: saving-documents-with-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Request properties:

| Field     | Description     |
| ---------- | ---------- |
| dataEntity       | The data entity name       |
| json       | The object that will be saved       |

## Dynamic Expressions

Use dynamic expressions to use document properties in these settings. To further information take a look at the article on [Dynamic Expressions](/en/tutorial/dynamic-expressions):

## Example

```
    {
      "properties": { ... },
      "v-triggers": [
        {
          "type": "save",
	        "json": {
		        "name": "{!name}"
	        }
        }
      ]
    }
```
