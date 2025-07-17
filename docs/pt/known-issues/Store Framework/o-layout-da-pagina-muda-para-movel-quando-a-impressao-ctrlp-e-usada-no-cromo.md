---
title: "O layout da página muda para móvel quando a impressão (ctrl+p) é usada no Cromo"
id: 1mPBRf1IhLj27liWa040XG
status: PUBLISHED
createdAt: 2022-03-21T17:40:17.848Z
updatedAt: 2022-11-25T22:14:09.694Z
publishedAt: 2022-11-25T22:14:09.694Z
firstPublishedAt: 2022-03-21T17:40:18.209Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-layout-da-pagina-muda-para-movel-quando-a-impressao-ctrlp-e-usada-no-cromo
locale: pt
kiStatus: No Fix
internalReference: 454680
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

O layout da página muda para a versão móvel ao imprimir (CTRL+P) é ativado duas vezes no Google Chrome Desktop.

## Simulação

No desktop do Google Chrome, vá para qualquer página da loja e pressione CTRL+P, depois cancele-o e CTRL+P novamente. Mesmo se a impressão for cancelada novamente, o layout da página permanece como móvel até que seja atualizado.

Este problema não acontece em todas as lojas que utilizam o Store Framework.

## Workaround

Nenhuma solução conhecida, embora alguma manipulação do CSS com `@media print` possa resolver o problema.

Como o comportamento para reproduzir esta questão é muito específico e incomum, isto não é muito impactante para nenhuma loja.

