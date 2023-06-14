---
title: 'Setting up an A/B test with Master Data trigger'
id: 4xFzBMHYty6gmEosWGWMC0
status: DRAFT
createdAt: 2018-04-02T17:58:30.057Z
updatedAt: 2022-08-03T00:23:33.093Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:23.597Z
contentType: tutorial
productTeam: Financial
author: authors_64
slug: setting-up-a-b-test
legacySlug: setting-up-a-b-test
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

The VTEX Master Data Trigger configuration has a property called __weight__.

It's an integer field in which you can put a number between 0 and 100. This number is a percentage value of distribution between triggers.

This feature works only if you have at least two actions with value in the `weight` property. 

Example 1: A/B Test between two triggers with 50% of load.

```json
    {
    	"properties": { ... },
    	"v-triggers": [
    		{
    			"name": "scenario-1",
    			"weight": 50,
          ...
    		},
    		{
    			"name": "scenario-2",
    			"weight": 50,
          ...
    		}
    	]
    }
```

Example 2: A/B Test between four triggers with different weights.
```json
    {
    	"properties": { ... },
    	"v-triggers": [
    		{
    			"name": "scenario-1",
    			"weight": 40,
          ...
    		},
    		{
    			"name": "scenario-2",
    			"weight": 30,
          ...
    		},
    		{
    			"name": "scenario-3",
    			"weight": 20,
          ...
    		},
    		{
    			"name": "scenario-4",
    			"weight": 10,
          ...
    		}
    	]
    }
```
