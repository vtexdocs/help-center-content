---
title: 'Search by geo coordinates'
id: 5fxWoPd11Cyk6OoG0sMWQ6
status: ARCHIVED
createdAt: 2018-04-26T22:29:52.462Z
updatedAt: 2022-08-04T22:35:26.226Z
publishedAt: 
firstPublishedAt: 2018-04-27T14:20:45.626Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: search-by-geo-coordinates
locale: en
legacySlug: search-by-geo-coordinates
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

>⚠️ **Attention:** This is a BETA version.

### Setting up JSON Schema

To enable search by geo coordinates, the JSON Schema must contain an object with two properties `latitude` and `longitude`:

    {
    	"properties": {
    		"{{yourFieldName}}": {
    			"type": "object",
    			"properties": {
    				"latitude": { "type": "number" },
    				"longitude": { "type": "number" }
    			},
    			"additionalProperties": false
    		}
    	}
    }

And, must be configured as indexed:

    {
     "v-indexed": [ "{{yourFieldName}}" ]
    }

### Saving documents

To save a document, it must contain the object value configured as geocoordinate:

    {
      "{{yourFieldName}}": {
        "latitude": {{value}},
        "longitude": {{value}}
      }
    }

### Filtering

To filter documents that are nearby of some geo coordinate (measured in km), add a filter in the querystring:

     {{yourFieldName}}={{latitudeValue}},{{longitudeValue}},{{integer}}km

     address.location=-23.01227,-43.46163,25km

### Ordering by distance

To order documents by distance of a given geo coordinate, just add it to the querystring:

     _sort={{yourFieldName}} {{asc/desc}} {{latitudeValue}},{{longitudeValue}} km

     _sort=address.location asc -23.01227,-43.46163 km

When Master Data order results by a geocoordinate field a new field is available: `_sort`. This field could be added in `_fields` parameter to retrive the distance between the geocoordinate in sort query.

### Real example

JSON Schema:

    {
		"properties": {
			"name": {
				"type": "string"
			},
			"isActive": {
				"type": "boolean"
			},
			"address": {
				"type": "object",
				"properties": {
					"state": {
						"type": "string"
					},
					"location": {
						"type": [
							"null",
							"object"
						],
						"properties": {
							"latitude": {
								"type": "number"
							},
							"longitude": {
								"type": "number"
							}
						},
						"additionalProperties": false
					}
				}
			}
		},
		"v-indexed": [
			"name",
			"isActive",
			"address"
		],
		"v-default-fields": [
			"id",
			"name",
			"address",
			"_sort"
		]
	}

Query:

    /search?address.location=-23.01227,-43.46163,100km&_schema=v1&_sort=address.location asc -23.01227,-43.46163 km&_fields=id,_sort

Result:

    [
    	{
    		"id": "AME",
    		"_sort": [
    			0
    		]
    	},
    	{
    		"id": "BAR",
    		"_sort": [
    			10.71936198115181
    		]
    	},
    	{
    		"id": "BAN",
    		"_sort": [
    			14.87184710662879
    		]
    	},
    	{
    		"id": "BRX",
    		"_sort": [
    			27.607623540300178
    		]
    	}
    ]
