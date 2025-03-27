---
title: 'Os cookies de sessão são compartilhados entre diferentes vinculações quando não estão no mesmo nível de caminho'
id: 4pKeUI7qtdByaQowYs19Et
status: PUBLISHED
createdAt: 2023-10-25T01:06:04.190Z
updatedAt: 2023-10-25T01:06:04.707Z
publishedAt: 2023-10-25T01:06:04.707Z
firstPublishedAt: 2023-10-25T01:06:04.707Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: session-cookies-are-shared-between-different-bindings-when-they-are-not-in-the-same-path-level
locale: pt
kiStatus: No Fix
internalReference: 925071
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os cookies para informações da sessão são exclusivos da vinculação de conta específica, mas as vinculações que não estão no mesmo nível de caminho podem receber cookies de níveis inferiores, causando problemas.

Se forem da mesma conta, as informações da sessão serão misturadas e substituirão os parâmetros críticos. Se forem de contas diferentes, isso poderá bloquear as solicitações, gerando erros como "solicitações entre contas não são permitidas".

## Simulação


Um exemplo de cenário é uma loja que usa o caminho raiz `/` para seu idioma padrão (inglês) e `/fr` para um segundo idioma (francês). As informações da loja em inglês podem afetar a loja em francês e vice-versa.

Outro exemplo é uma loja B2C em `/us` para o país específico e a loja B2B em `/us/corporate`

## Workaround


As lojas que compartilham o mesmo host/domínio podem manter o mesmo padrão para seu caminho sem misturar níveis diferentes. Ideias de alternativas para os exemplos apresentados seriam `/en` versus `/fr` (ambos usando um caminho de nível único) e `/us/personal` versus `/us/corporate` (caminho de dois níveis).




