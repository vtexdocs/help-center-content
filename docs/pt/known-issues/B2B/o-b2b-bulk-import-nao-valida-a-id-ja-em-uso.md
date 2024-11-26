---
title: 'O B2B Bulk Import não valida a ID já em uso'
id: 2zXPi9LJ2vP3wBkdF8xaVS
status: PUBLISHED
createdAt: 2024-11-04T14:32:24.901Z
updatedAt: 2024-11-04T14:32:26.116Z
publishedAt: 2024-11-04T14:32:26.116Z
firstPublishedAt: 2024-11-04T14:32:26.116Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-bulk-import-doesnt-validate-id-already-in-use
locale: pt
kiStatus: Backlog
internalReference: 1128764
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao importar organizações e centros de custo por meio de importação em massa, não há validação para verificar se o ID já está em uso. Isso permite iniciar a importação e pode fazer com que o processo fique travado.

## Simulação



- Preencha o arquivo de modelo com uma organização ou um ID de centro de custo já em uso;
- Enviar o arquivo para validação; a resposta é que o arquivo é válido

## Workaround


Use outro ID quando possível.




