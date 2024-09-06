---
title: 'Setting up triggers in Master Data v2'
id: 54eVOFGhS0EWyAUieoqKWo
status: ARCHIVED
createdAt: 2018-04-02T18:01:34.840Z
updatedAt: 2022-07-05T16:36:30.189Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:46:07.420Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: setting-up-triggers
locale: en
legacySlug: setting-up-triggers
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

>ℹ️ This article talks about Master Data v2. If you want to use Master Data v1, check out the steps explained in [this article](https://help.vtex.com/pt/tutorial/creating-trigger-in-master-data--tutorials_1270).

A Master Data trigger is an action executed after an insert or update. 

## JSON Properties:

| Property  | Description                                        |
|-----------|----------------------------------------------------|
| name      | trigger name                                       |
| active    | boolean to enable or disable the trigger           |
| condition | rule that validates the document before execution  |
| runAt     | schedule the action to some time in the future     |
| weight    | percentage value used for A/B test                 |
| retry     | customize the retry policy                         |
| action    | the action that will be executed                   |

### name
It's the trigger name and must be a string value with limit of 100 characters.

### active
Boolean value that indicates if the trigger is either enabled or disabled.

### condition
The rule is the same for the search route. Example: `status=ready-for-handling`
To get futher information, check the developer docs for Master Data search route.

### runat
In case of scheduling an action in the future you can use the `runAt` property.

Example 1: To schedule the execution 10 minutes after:
```json
    {
    	"dateTime": "now",
    	"increment": {
    		"addMinutes": 10
    	}
    }
```

Example 2: To schedule the execution 6 months after the field value `createdIn`

```json
    {
    	"dateTime": "{!createdIn}",
    	"increment": {
    		"addMonths": 6
    	}
    }
```

### weight
An integer field used to distribute actions. See more information in the article [Setting up an A/B test with Master Data trigger](/en/tutorial/setting-up-a-b-test).

### retry
By default, VTEX Master Data makes 3 attempts in an interval of 10 minutes. Use this property to override such behaviour.

Example: attempt 5 times in an interval of 30 minutes

```json
    {
    	"times": 5,
    	"delay": {
    		"addMinutes": 30
    	}
    }
```

### action
There are 3 types of actions: `Call an HTTP Request`, `send an email` and `save in other data entity`.

Setting up an HTTP Request action:

```json
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
```

Setting up an email action:
```json
    {
    	"type": "email",
    	"provider": "default",
    	"subject": "My email with VTEX Master Data",
    	"to": [
    		"{!email}",
    		"test@email.com"
    	],
    	"bcc": [
    		"myemail@test.com"
    	],
    	"replyTo": "noreply@company.com",
    	"body": "My email with document {!id}."
    }
```

Setting up an action saving a document to other data entity:
```json
    {
    	"type": "save",
    	"dataEntity": "copy",
    	"json": {
    		"id": "{!id}",
    		"message": "{!message}",
    		"custom": "created/updated by VTEX Master Data triggers"
    	}
    }
```

## Complete example

```json
    {
    	"properties": {},
    	"v-triggers": [
    		{
    			"name": "copy-document",
    			"active": true,
    			"condition": "status=window-to-cancel",
    			"action": {
    				"type": "save",
    				"dataEntity": "copy",
    				"json": {
    					"id": "{!id}",
    					"message": "{!message}",
    					"custom": "created/updated by VTEX triggers"
    				}
    			},
    			"retry": {
    				"times": 5,
    				"delay": {
    					"addMinutes": 30
    				}
    			}
    		}
    	]
    }
```
