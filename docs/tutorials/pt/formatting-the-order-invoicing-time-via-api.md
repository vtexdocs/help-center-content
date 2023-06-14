---
title: 'Formatar o horário de faturamento do pedido via API'
id: HTD83Y8FMswUAgc4YaeYa
status: DRAFT
createdAt: 2017-12-18T18:14:17.484Z
updatedAt: 2022-08-30T22:01:56.346Z
publishedAt: 
firstPublishedAt: 2017-12-18T21:12:57.335Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: formatar-o-horario-de-faturamento-do-pedido-via-api
legacySlug: formatar-o-horario-de-faturamento-do-pedido-via-api
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Ao enviar os dados da nota fiscal para um marketplace via API, fique atento ao formato correto do JSON:

```
{
 "type":"Output",
 "issuanceDate":"2017-10-05T11:32:11",
 "invoiceNumber":"9999",
 "invoiceValue":"10000",
 "invoiceKey": null,
 "invoiceUrl": null,
 "courier": null,
 "trackingNumber": null,
 "trackingUrl": null,
 "items": [
   {
     "id": "1234",
     "price": 10000,
     "quantity": 1
    }
  ]
 }
```

A propriedade responsável por informar a data e o horário do faturamento é a `issuanceDate`.

Este campo segue o padrão de fuso horário UTC 0. Se deseja incluir um horário com um fuso horário específico (por exemplo, "UTC -3"), você deve usar o seguinte formato:

`"issuanceDate": "2017-10-05T11:32:11-0300"`

Note que integrações que buscam dados de pedidos no sistema da VTEX também devem atentar-se ao fuso horário e fazer as adequações necessárias.

__Atenção__: não insira nenhum espaço na data.

Veja em nossa [documentação técnica](https://developers.vtex.com/reference/invoice#updatepartialinvoicesendtrackingnumber) os detalhes de como deve ser formatado o request.
