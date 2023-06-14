---
title: "A entidade de pedidos do Master Data v2 será deprecada"
id: 2A1FAUTdp2AgDNw9O2Y9za
status: CHANGED
createdAt: 2023-04-10T14:41:54.108Z
updatedAt: 2023-04-18T20:22:09.303Z
publishedAt: 2023-04-11T12:53:40.163Z
contentType: updates
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: a-entidade-de-pedidos-do-master-data-v2-sera-deprecada
legacySlug: a-entidade-de-pedidos-do-master-data-v2-sera-deprecada
announcementImageID: ""
announcementSynopsisPT: A VTEX irá deprecar a entidade de pedidos do Master Data v2 em outubro de 2023. Adapte as integrações da sua loja.
---

O [Master Data v2](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) é uma solução da plataforma VTEX para banco de dados, que é altamente customizável. Uma de suas entidades de dados nativas armazena informações de pedidos e alguns desenvolvedores a utilizam para realizar integrações de pedidos com serviços externos como sistemas de gerenciamento de estoque ou recursos.

Entretanto, a VTEX já disponibiliza o [feed e hook de pedidos](https://developers.vtex.com/vtex-rest-api/docs/orders-feed), uma solução mais adequada ao desenvolvimento deste tipo de integração.

## O que mudou?

Esta mudança ocorre em duas fases, [algumas contas VTEX já não têm mais acesso à feature](#contas-ja-impactadas), enquanto [outras terão até o fim de setembro de 2023 para se adequar](#contas-que-serao-impactadas). Veja os detalhes abaixo para entender em que grupo você se encaixa.

Para ambos os grupos, a perda de funcionalidade significa, por hora, apenas que a VTEX não popula mais a entidade com os dados dos pedidos da conta. As contas impactadas em cada fase ainda poderão visualizar informações registradas previamente na entidade de pedidos do Master Data v2.

### Contas já impactadas

As contas que usavam esta feature anteriormente e não interagiram com a entidade de pedidos do Master Data v2 no ano de 2022, já foram impactadas. Ou seja, a VTEX não registra mais os pedidos nesta entidade, mas ainda é possível visualizar pedidos registrados anteriormente.

### Contas que serão impactadas

A partir de outubro de 2023 a entidade de dados de pedidos do Master Data v2 será deprecada para todas as contas. Isso inclui contas que nunca interagiram com a entidade e também aquelas que interagiram recentemente.

Isto significa que a VTEX não registrará mais dados de pedidos na entidade. Ainda será possível visualizar informações registradas previamente.

## O que precisa ser feito?

Entre em contato com o time de desenvolvimento da sua loja para garantir que suas integrações de pedido não dependam da entidade de dados de pedidos do Master Data v2 até o fim de setembro de 2023.

[Contas que já foram impactadas](#contas-ja-impactadas) não interagiram com a entidade de pedidos no ano de 2022, então é provável que já não possuam integrações dependentes deste recurso. Entretanto, recomendamos que entre em contato com seu time de desenvolvimento para garantir que as integrações de pedidos estão adequadas.

Caso sua operação possua este tipo de integração, o time de desenvolvimento da sua loja deverá adaptá-la para usar o feed ou hook de pedidos, como descrito nos seguintes documentos técnicos:
- [Feed e hook de pedidos](https://developers.vtex.com/vtex-rest-api/docs/orders-feed)
- [Implementando integrações de pedidos](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)

