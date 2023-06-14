---
title: 'Sending HTTP requests with triggers'
id: 3YsGpf87z2auKSK2UKmOEg
status: DRAFT
createdAt: 2018-04-02T20:54:32.885Z
updatedAt: 2020-07-29T21:06:01.103Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:44.286Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: sending-http-requests-with-triggers
legacySlug: sending-http-requests-with-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

The HTTP request properties are:

| Field     | Description     |
| ---------- | ---------- |
| type       | The action type must be `http`       |
| uri       | The complete uri with protocol       |
| method       | The request method for the desired action       |
| headers       | An object with necessary headers       |
| body       | The request content in case of POST/PUT/PATCH methods       |

### Dynamic Expressions

Use dynamic expressions to use document properties in these settings. To further information take a look at the article about [Dynamic Expressions](/en/tutorial/dynamic-expressions).

### POST:

```json
    {
      "properties": { ... },
      "v-triggers": [
        {
          "type": "http",
	        "uri": "http://mydomain.com/api/test",
	        "method": "POST",
	        "headers": {
		        "content-type": "application/json"
	        },
	        "body": {
		        "id": "{!id}",
		        "test": "TestValue",
		        "count": 25
	        }
        }
      ]
    }
```

### GET:

```json
    {
      "properties": { ... },
      "v-triggers": [
      {
        "type": "http",
	      "uri": "http://mydomain.com/api/{!id}",
	      "method": "GET",
	      "headers": {
		      "content-type": "application/json"
	      }
      ]
    }
```
