---
title: "Attachents API"
id: 7KMb6nh0ulcWdEfz7USbPg
status: PUBLISHED
createdAt: 2023-09-11T19:02:51.514Z
updatedAt: 2023-09-11T19:02:52.164Z
publishedAt: 2023-09-11T19:02:52.164Z
firstPublishedAt: 2023-09-11T19:02:52.164Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachents-api-doesnt-allow-null-domainvalues-and-it-should
locale: en
kiStatus: Backlog
internalReference: 897480
---

## Summary


The update requests for the /api/catalog/pvt/attachment/ API isn't allowing updates for the domain Value field as a null value.

This field is nullable, so this API response is incorrectly responding with:

`{`
`  "Message": "DomainValues in Domain at position 1 can not be null or empty value"`
`}`


##

## Simulation


1 - Create an attachment via UI or API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - try updating it sending the domainValue field as a null, for example:

`{`
`  "Id": 123,`
`  "Name": "payload with null domain",`
`  "IsRequired": true,`
`  "IsActive": true,`
`  "Domains": [`
`      {`
`          "FieldName": "Basic test",`
`          "MaxCaracters": "354534",`
`          "DomainValues": ""`
`      }`
`  ]`
`}`

3 - a "Bad request" response type will be shown to you, when it actually should accept null values for this field.


##

## Workaround


Update the permitted values manually, via UI or create them already null (the POST method is working, the PUT isn't).





