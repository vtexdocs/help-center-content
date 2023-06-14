---
title: 'Enviar e-mails com triggers no Master Data'
id: 1gMSksj9SuW8EwyscsgKGK
status: DRAFT
createdAt: 2018-04-02T22:56:53.499Z
updatedAt: 2022-08-04T22:35:02.087Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:45:51.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: enviar-emails-com-triggers-no-master-data
legacySlug: enviar-emails-com-triggers-no-master-data
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Veja como configurar ações de e-mail via triggers do Master Data. Mais informações sobre criação de triggers podem ser encontradas no artigo [Configurar triggers no Master Data v2](https://help.vtex.com/pt/tutorial/setting-up-triggers--54eVOFGhS0EWyAUieoqKWo).

## Propriedades

| Campo     | Descrição     |
| ---------- | ---------- |
| type*       | O tipo da ação deve ser `email` |
| provider*       | Message Center provider name (normalmente nomeado `default`) |
| from*       | Define nome e e-mail do endereço de remetente |
| to*       | Lista de endereços para os quais o e-mail será enviado |
| replyTo*       | Lista de endereços de reply |
| subject*       | Assunto do e-mail |
| body*       | O corpo da mensagem |
| bcc       | Coleção de endereços com a blind carbon copy (BCC) |

\* Obrigatório

## Dynamic Expressions

Use dynamic expressions para lidar com propriedades de documentos. Para mais informações, leia o [artigo sobre Dynamic Expressions](/pt/tutorial/dynamic-expressions).

## Exemplo de JSON Schema:

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
