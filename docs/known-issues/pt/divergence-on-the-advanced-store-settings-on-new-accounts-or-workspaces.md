---
title: 'Divergência nas configurações avançadas do Store em novas contas ou espaços de trabalho'
id: 1Jt8McqXjYAxfJNkBZHt4j
status: PUBLISHED
createdAt: 2024-07-11T18:16:01.106Z
updatedAt: 2024-07-11T18:16:02.006Z
publishedAt: 2024-07-11T18:16:02.006Z
firstPublishedAt: 2024-07-11T18:16:02.006Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: divergencia-nas-configuracoes-avancadas-do-store-em-novas-contas-ou-espacos-de-trabalho
locale: pt
kiStatus: Backlog
internalReference: 1064235
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em novos espaços de trabalho ou contas que nunca alteraram as configurações avançadas das Configurações da loja, é possível verificar uma inconsistência entre as informações na interface do usuário e o sinalizador aplicado à conta.

## Simulação



- Criar um novo espaço de trabalho
- Vá para Configurações do Store na guia Avançado
- Veja que alguns sinalizadores estão definidos na interface do usuário
- Verifique as configurações usando o plug-in de configurações com o seguinte comando `vtex settings get vtex.store`.
- Veja que os sinalizadores não são aplicados

## Workaround


Clique no botão "Save" (Salvar) na interface do usuário




