---
title: "Mudança no formato do campo Authorized Date da planilha de exportação de pedidos visa garantir a qualidade dos nossos dados"
id: 4bEpPLIkpG90dJ3QCIujx1
status: CHANGED
createdAt: 2019-05-23T13:42:37.232Z
updatedAt: 2020-11-27T19:40:28.883Z
publishedAt: 2019-12-31T15:13:08.423Z
contentType: updates
productTeam: Post-purchase
author: 5DnIDwto7E6PRpdH1Kpdyu
slug: mudanca-no-formato-do-campo-authorized-date
legacySlug: mudanca-no-formato-do-campo-authorized-date-da-planilha-de-exportacao-de
announcementImageID: ""
announcementSynopsisPT: Novo formato do campo `Authorized Date` garante um entendimento mais claro da data em que o pedido foi autorizado
---

A partir de 12 de junho de 2019, faremos uma alteração no formato do campo `Authorized Date`, que pode ser encontrado no [relatório de pedidos](https://help.vtex.com/pt/tutorial/exportando-pedidos-no-gerenciamento-de-pedidos--tutorials_6417) exportado do módulo de Gerenciamento de Pedidos.

## Principais Vantagens

O novo formato do campo `Authorized Date` garante um entendimento mais claro e fácil da data em que o pedido foi autorizado. Além disso, ele segue o padrão das outras datas que já existem neste relatório, tornando mais fácil e intuitiva a manipulação dos dados.

## O que você precisa fazer
Caso você utilize alguma macro ou automação que leve em conta o campo `Authorized Date`, é necessário ficar atento para receber o campo na formatação `yyyy-MM-dd HH:mm:ss`, onde:

- `yyyy` é o ano com 4 dígitos
- `MM` é o mês com dois dígitos
- `dd` é o dia com dois dígitos
- `HH` é a hora, em formato 24 horas, com dois dígitos
- `mm` são os minutos com dois dígitos
- `ss` são os segundos com dois dígitos
