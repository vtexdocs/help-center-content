---
title: Enviar e-mails con triggers en Master Data
id: 1gMSksj9SuW8EwyscsgKGK
status: DRAFT
createdAt: 2018-04-02T22:56:53.499Z
updatedAt: 2022-08-04T22:35:02.087Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:45:51.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: enviar-emails-con-triggers-en-master-data
legacySlug: enviar-emails-con-triggers-en-master-data
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Vea cómo configurar acciones de e-mail a través de triggers del Master Data. Puede encontrar más información sobre la creación de triggers en el artículo [Configurar triggers en Master Data v2
](https://help.vtex.com/es/tutorial/setting-up-triggers--54eVOFGhS0EWyAUieoqKWo).

## Propiedades

| Campo     | Descripción     |
| ---------- | ---------- |
| type*       | El tipo de acción deve ser `email` |
| provider*       | Message Center provider name (usualmente nombrado `default`) |
| from*       | Define el nombre y el correo electrónico del remitente |
| to*       | Lista de direcciones para las que se enviará el correo electrónico |
| replyTo*       | Lista de direcciones de reply |
| subject*       | Asunto del e-mail |
| body*       | El cuerpo del mensaje |
| bcc       | Colección de direcciones de e-mail con blind carbon copy (BCC) |

\* Obligatório

## Dynamic Expressions

Utilize dynamic expressions para lidar con propiedades de documentos. Para más información, acceda al [artículo sobre Dynamic Expressions](/es/tutorial/dynamic-expressions).

## Ejemplo de JSON Schema:

```json
    {
      "properties": { ... },
      "v-triggers": [
        {
          "type": "email",
          "provider": "default",
          "subject": "Sending email with VTEX Master Data",
          "from": {
            "email": "mailfrom@email.com",
            "name": "My custom name"
          },
          "to": [ "test@test.com" ],
          "cco": [ "testcco@test.com" ],
          "replyTo": "noreply@email.com",
          "body": "VTEX Master Data Triggers email body"
        } 
      ]
    }
```
