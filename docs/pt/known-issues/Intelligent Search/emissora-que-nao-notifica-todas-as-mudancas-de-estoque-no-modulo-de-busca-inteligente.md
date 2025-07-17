---
title: "Emissora que não notifica todas as mudanças de estoque no módulo de Busca Inteligente"
id: XLozPnuonjPImtZa8bWAz
status: PUBLISHED
createdAt: 2022-10-24T12:26:59.536Z
updatedAt: 2025-02-17T14:01:02.310Z
publishedAt: 2025-02-17T14:01:02.310Z
firstPublishedAt: 2022-10-24T12:27:00.490Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: emissora-que-nao-notifica-todas-as-mudancas-de-estoque-no-modulo-de-busca-inteligente
locale: pt
kiStatus: Fixed
internalReference: 683345
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Há alguns cenários onde os produtos que não devem ser exibidos devido ao fato de não estarem disponíveis são exibidos na tela, isto acontece porque às vezes o sistema falha ou mesmo não há notificações do sistema de transmissão para o módulo de busca, isto acontece com as notificações de estoque que consequentemente não aciona uma nova indexação.


##

## Simulação



Vá a uma loja, e assim que ela for atualizada é possível ver alguns produtos que não devem ser devolvidos exibidos na tela, mesmo quando estão corretamente configurados, isto acontece devido à falta de notificações da emissora, quando se atualiza os produtos ela tem o comportamento esperado.


##

## Workaround



Reindexar os produtos com problemas.

