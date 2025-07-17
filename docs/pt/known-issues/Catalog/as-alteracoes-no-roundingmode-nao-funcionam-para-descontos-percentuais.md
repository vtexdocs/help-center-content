---
title: "As alterações no RoundingMode não funcionam para descontos percentuais"
id: yFJqHZeZu98rZfUnAVtR3
status: PUBLISHED
createdAt: 2025-03-12T16:53:44.101Z
updatedAt: 2025-03-12T16:53:45.144Z
publishedAt: 2025-03-12T16:53:45.144Z
firstPublishedAt: 2025-03-12T16:53:45.144Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: as-alteracoes-no-roundingmode-nao-funcionam-para-descontos-percentuais
locale: pt
kiStatus: Backlog
internalReference: 1192809
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, quando um usuário deseja alterar o comportamento de como suas promoções arredondam o desconto, a plataforma VTEX oferece 3 opções:

**Preciso** --> nenhum arredondamento é usado
**Ceiling** --> os descontos nominais são arredondados para cima (ou seja, 14,56 se transforma em 14,6)
**Floor** --> os descontos nominais são arredondados para baixo (ou seja, 14,56 se transforma em 14,5)

No entanto, esperava-se que esses arredondamentos também funcionassem para o desconto percentual, mas isso não acontece.

## Simulação


Uma alteração no modo de arredondamento deve ser solicitada inicialmente à equipe de suporte da VTEX.

Depois disso, crie um cenário de promoção conforme descrito acima, testando tanto um desconto nominal (no qual você verá o arredondamento entrar em vigor) quanto um desconto percentual (no qual o arredondamento não entrará em vigor)

## Workaround


nenhum





