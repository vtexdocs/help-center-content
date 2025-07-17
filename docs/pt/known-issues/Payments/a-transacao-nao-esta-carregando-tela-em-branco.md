---
title: "A transação não está carregando - tela em branco"
id: 6hGcfZMaAafL3etTmRWhEJ
status: PUBLISHED
createdAt: 2025-01-02T19:23:09.538Z
updatedAt: 2025-01-03T15:36:03.341Z
publishedAt: 2025-01-03T15:36:03.341Z
firstPublishedAt: 2025-01-02T19:23:10.500Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: a-transacao-nao-esta-carregando-tela-em-branco
locale: pt
kiStatus: Backlog
internalReference: 1157426
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar acessar uma transação específica, ela é carregada indefinidamente em uma tela em branco.

## Simulação



1. Acesse o URL diretamente:
`https://.myvtex.com/admin/pci-gateway/#/transactions/`
2. Verifique na guia de rede das ferramentas de desenvolvimento se a única rota que não está sendo carregada é `/interactions`.
3. Como validação final, tente acessar a rota `/interactions` diretamente e receba um erro `504 Gateway Timeout`

## Workaround


É impossível excluir o registro de interações, mas o serviço externo que chama o gateway várias vezes pode reduzir sua frequência, impedindo a ocorrência de novos casos.





