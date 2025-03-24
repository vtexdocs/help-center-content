---
title: 'Adding document field values with Dynamic Expressions'
id: sYxPeSFaPAuQ8OY6MO2eG
status: ARCHIVED
createdAt: 2018-04-09T16:36:32.999Z
updatedAt: 2022-08-04T22:35:17.223Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:37:10.772Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slugEN: dynamic-expressions
locale: en
legacySlug: dynamic-expressions
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Use dynamic expressions to add a document field value. For example, you can configure the client email to send marketing emails dynamically using triggers.

- trigger JSON
```json
    {
      "action": {
        "to": "{!email}"
      }
    }
```
    
- client document
```json
    {
      "email": "client@email.com"
    }
```
    

## Setting up dynamic expressions

Pattern:

`{!fieldName}`
    
Example:

`{!email}`
    
Access nested fields using a dot.

`{!order.clientProfiledata.email}`
