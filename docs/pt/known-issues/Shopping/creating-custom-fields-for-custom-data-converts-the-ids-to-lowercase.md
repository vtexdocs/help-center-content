---
title: "A criação de 'custom fields' para 'custom data' converte os IDs para letras minúsculas"
id: 6oCXPldEYkC9HG1fw3G3RL
status: PUBLISHED
createdAt: 2019-02-19T18:52:45.049Z
updatedAt: 2019-12-31T15:16:46.219Z
publishedAt: 2019-12-31T15:16:46.219Z
firstPublishedAt: 2019-02-19T21:28:51.583Z
contentType: knownIssue
productTeam: Shopping
author: authors_4
tag: Checkout
slug: a-criacao-de-custom-fields-para-custom-data-converte-os-ids-para-letras
locale: pt
kiStatus: Closed
internalReference: 
---

## Sumário

Ao criar "custom fields" na seção de "custom data" através da API do checkout, os "ids" das "apps" informadas são convertidas para letra minúsculas.

## Simulação

1. Utilizar a API "[POST Update Custom Fields](https://documenter.getpostman.com/view/18468/vtex-checkout-api/6Z2QYJM#dc90afae-a4e5-59c5-1854-fc0fa81c99ee)";
2. Enviar uma "app" que tenha o "id" com letra maiúscula (por exemplo, "customFieldTest");
3. Observar na resposta da requisição que o "id" foi convertido para letras minúsculas (no exemplo acima, ficaria "customfieldtest").

## Workaround

Atualmente é uma restrição da API, não sendo possível contornar ester cenário. Os Custom Fields do Custom Data devem ser usados com letras minúsculas.

