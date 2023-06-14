---
title: 'Sending emails with triggers in Master Data v2'
id: 1gMSksj9SuW8EwyscsgKGK
status: DRAFT
createdAt: 2018-04-02T22:56:53.499Z
updatedAt: 2022-08-04T22:35:02.087Z
publishedAt: 
firstPublishedAt: 2018-05-03T19:45:51.230Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: sending-emails-with-triggers
locale: en
legacySlug: sending-emails-with-triggers
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Configure email actions in VTEX Master Data triggers. You can find more information about creating triggers in the article [Setting up triggers in Master Data v2
](https://help.vtex.com/en/tutorial/setting-up-triggers--54eVOFGhS0EWyAUieoqKWo).

## Properties

| Field     | Description     |
| ---------- | ---------- |
| type*       | The action type must be `email` |
| provider*       | Message Center provider name (usually named as `default`) |
| from*       | define name and email of from address |
| to*       | list of emails that email will be sended |
| replyTo*       | list of addresses to reply |
| subject*       | subject line for this e-mail |
| body*       | the message body |
| bcc       | address collection that contains the blind carbon copy (BCC) |

\* Required

## Dynamic Expressions

Use dynamic expressions to deal with document properties in these settings. For more information, take a look at the [article on Dynamic Expressions](/en/tutorial/dynamic-expressions).

## JSON Schema example:

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
