---
title: 'Adicionar valores de campo de documento com Dynamic Expressions'
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
legacySlug: dynamic-expressions
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Use dynamic expressions para adicionar um valor de campo do documento. Por exemplo, você pode configurar o e-mail do cliente para enviar e-mails de marketing dinamicamente usando triggers.

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

Padrão:

`{!fieldName}`
    
Exemplo:

`{!email}`
    
Acessar campos aninhados usando um ponto.

`{!order.clientProfiledata.email}`
