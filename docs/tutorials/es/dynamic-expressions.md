---
title: 'Agregar valores de campo de documento con Dynamic Expressions'
id: sYxPeSFaPAuQ8OY6MO2eG
status: DRAFT
createdAt: 2018-04-09T16:36:32.999Z
updatedAt: 2022-08-04T22:35:17.223Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:37:10.772Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: dynamic-expressions
locale: es
legacySlug: dynamic-expressions
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Use dynamic expressions para agregar un valor de campo de documento. Por ejemplo, usted puede configurar el e-mail del cliente para enviar e-mails de marketing de forma dinámica mediante triggers.

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

## Configurando dynamic expressions

Patrón:

`{!fieldName}`
    
Ejemplo:

`{!email}`
    
Acceda a los campos anidados usando un punto.

`{!order.clientProfiledata.email}`
