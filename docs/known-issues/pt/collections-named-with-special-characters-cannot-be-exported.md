---
title: 'As coleções nomeadas com caracteres especiais não podem ser exportadas'
id: 516zuwek2Gfwd0U99si2XU
status: PUBLISHED
createdAt: 2023-08-22T12:46:46.230Z
updatedAt: 2023-12-12T14:21:31.164Z
publishedAt: 2023-12-12T14:21:31.164Z
firstPublishedAt: 2023-08-22T12:46:46.895Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: as-colecoes-nomeadas-com-caracteres-especiais-nao-podem-ser-exportadas
locale: pt
kiStatus: Backlog
internalReference: 683343
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Espera-se que uma coleção possa ser exportada no administrador. Entretanto, coleções com nomes que contenham símbolos como `$` , `+` ou `,` não podem ser exportadas.

## Simulação



- Crie uma coleção com `$` , `+` ou `,` no nome
- Tente exportar a coleção
- Um erro será exibido no administrador



## Workaround


Remova o caractere




