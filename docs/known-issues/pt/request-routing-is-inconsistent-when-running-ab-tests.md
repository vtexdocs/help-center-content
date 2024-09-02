---
title: 'O roteamento de solicitações é inconsistente ao executar testes A/B'
id: 5ukS8DTwmWsM0fNWQLYFQ1
status: PUBLISHED
createdAt: 2023-11-08T21:42:53.184Z
updatedAt: 2023-11-08T21:45:26.642Z
publishedAt: 2023-11-08T21:45:26.642Z
firstPublishedAt: 2023-11-08T21:42:53.723Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-roteamento-de-solicitacoes-e-inconsistente-ao-executar-testes-ab
locale: pt
kiStatus: Backlog
internalReference: 931246
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

As solicitações HTTP de navegação da loja não respeitam o cookie de seleção de espaço de trabalho durante a sessão. Na verdade, durante uma única sessão, um usuário pode receber respostas de todos os espaços de trabalho que estão sendo testados.

## Simulação

1. Crie um teste A/B em sua loja usando o VTEX IO CLI
2. Abra a guia "Application" (Aplicativo) no Chrome DevTools (ou equivalente em seu navegador)
    1. Navegue pela loja e limpe o cookie `VtexWorkspace` após cada clique
    2. Você deverá ver os valores mudarem eventualmente, mesmo que o cookie da sessão não tenha sido alterado.
3. Abra a guia "Network" (Rede) no Chrome DevTools (ou equivalente em seu navegador)
    1. Navegue pela loja e observe as solicitações HTTP que são feitas
    2. Você deve ver que a string de consulta `workspace` é definida com valores diferentes durante toda a sessão

## Workaround

Não há nenhuma solução alternativa disponível. Os testes A/B não são recomendados e seus resultados não devem ser considerados corretos até que esse problema conhecido seja corrigido.


