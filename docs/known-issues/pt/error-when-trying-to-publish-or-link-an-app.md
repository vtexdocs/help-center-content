---
title: 'Erro ao tentar publicar ou vincular um aplicativo'
id: 2WPukfSHWzzIUjIzMJaAEK
status: PUBLISHED
createdAt: 2024-06-27T15:39:00.583Z
updatedAt: 2024-06-27T19:46:21.021Z
publishedAt: 2024-06-27T19:46:21.021Z
firstPublishedAt: 2024-06-27T15:39:01.543Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slug: erro-ao-tentar-publicar-ou-vincular-um-aplicativo
locale: pt
kiStatus: Backlog
internalReference: 1056882
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Nossa equipe investigou que isso normalmente está associado ao desenvolvimento de um aplicativo de grande porte. Isso acontece porque o hub do construtor estourou sua memória devido a muitos arquivos no aplicativo. Atrasos na vinculação do aplicativo também podem estar associados a esse problema

## Simulação


Tente usar o `vtex link` em um aplicativo com um tamanho enorme ou com muitos arquivos. Você poderá receber os seguintes erros:

    11:51:13.298 - error: Workerpool Worker terminado inesperadamente exitCode: `null` signalCode: `SIGABRT` workerpool.script: `/usr/local/data/service/src/node/utils/workers/worker.js` spawnArgs: `/usr/local/bin/node,/usr/local/data/service/src/node/utils/workers/worker.js` spawnfile: `/usr/local/bin/node` stdout: `null` stderr: `null` vtex.builder-hub@0.299.0 11:51:13.299 - error: Falha na compilação do aplicativo com a mensagem: Workerpool Worker terminado Unexpectedly exitCode: `null` signalCode: `SIGABRT` workerpool.script: `/usr/local/data/service/src/node/utils/workers/worker.js` spawnArgs: `/usr/local/bin/node,/usr/local/data/service/src/node/utils/workers/worker.js` spawnfile: `/usr/local/bin/node` stdout: `null` stderr: `null`

    13:30:05.456 - Erro: O aplicativo terminou com o código de saída 15. Será reiniciado em 10s. service-node@6.38.3

## Workaround


Analise o tamanho do aplicativo e de seus arquivos. Se for necessário, tente dividir o aplicativo em aplicativos menores para reduzir o tamanho.




