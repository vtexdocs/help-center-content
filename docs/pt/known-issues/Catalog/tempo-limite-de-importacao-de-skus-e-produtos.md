---
title: "Tempo limite de importação de SKUs e produtos"
id: 4024mtNGbNcdAJMJT2dxge
status: PUBLISHED
createdAt: 2025-03-28T14:05:27.181Z
updatedAt: 2025-03-28T14:05:27.800Z
publishedAt: 2025-03-28T14:05:27.800Z
firstPublishedAt: 2025-03-28T14:05:27.800Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: tempo-limite-de-importacao-de-skus-e-produtos
locale: pt
kiStatus: Backlog
internalReference: 1201280
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o módulo de catálogo pode apresentar um tempo limite em qualquer uma de suas operações se a quantidade de dados usados for muito grande.

O módulo "Import & Export" é um desses casos. Dependendo da quantidade de produtos, skus e dados relacionados nas planilhas importadas, e também da quantidade de dados associados a eles, a operação pode levar muito tempo para ser processada (mais de 50s) e, eventualmente, levar a um erro de timeout.

## Simulação


Esse problema é difícil de simular, a menos que o usuário tenha uma configuração de catálogo específica. Tente importar planilhas grandes (mais de 1.000 registros) para usuários com um catálogo complexo, possivelmente eles enfrentarão o problema de tempo limite.



## Workaround


Divida seus dados em partes menores.





