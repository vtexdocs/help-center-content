---
title: 'Cookie de segmento atualizado somente após a atualização da página'
id: 3QBmp4D2tvIAxEzEy2LpNf
status: PUBLISHED
createdAt: 2022-11-01T16:33:05.698Z
updatedAt: 2024-01-10T17:18:13.115Z
publishedAt: 2024-01-10T17:18:13.115Z
firstPublishedAt: 2022-11-01T16:33:06.403Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: segment-cookie-updated-only-after-refreshing-the-page
locale: pt
kiStatus: Backlog
internalReference: 647116
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Alguns recursos e componentes da VTEX podem usar dados solicitados do cookie de segmento para apresentar informações (como preço, dados de promoção, disponibilidade de SKU etc.) na vitrine. Esse cookie é armazenado no navegador do usuário quando a sessão é criada. Às vezes, principalmente em cenários dinâmicos em que é necessário fazer alterações na fachada, o que aciona uma atualização do Cookie Segment, o cookie em si perde alguns dados, o que é resultado de um comportamento no tempo de execução de renderização que não aciona a alteração do segmento no contexto

Como recuperar informações da sessão:
https://developers.vtex.com/vtex-rest-api/reference/getsession

Você pode obter os dados do cookie de segmento por meio do token de segmento:

- Abra o console do navegador;
- Decodifique o token de segmento apresentado no objeto de tempo de execução de renderização;
- No console, execute:` atob(__RUNTIME__.segmentToken)`
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Store%20Framework/cookie-de-segmento-atualizado-somente-apos-a-atualizacao-da-pagina_1.png)

## Simulação



- Selecione uma loja que apresente informações com base nos dados de um cookie de segmento:
- Ex.: Preços diferentes são mostrados com base na identificação do cliente - relacionados a tabelas de preços;
- Obtenha os dados do cookie de segmento em diferentes cenários usando o aplicativo que recupera a identificação do usuário;



## Workaround


Atualizar a página





