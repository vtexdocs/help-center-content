---
title: "Repetidas atualizações de UTM não são guardadas no cookie"
id: 7CVw4A7scMoKag4UsScSkM
status: PUBLISHED
createdAt: 2018-06-28T22:14:17.988Z
updatedAt: 2022-12-22T20:45:23.945Z
publishedAt: 2022-12-22T20:45:23.945Z
firstPublishedAt: 2018-06-28T22:16:35.648Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: repetidas-atualizacoes-de-utm-nao-sao-guardadas-no-cookie
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao atualizar mais de uma vez o valor da mesma UTM, este valor não é guardado no cookie, não sendo utilizado no pedido.

## Simulação

1. Acesse um ambiente com a utm_source=1. O cookie IPS será atualizado para parceiro=1.
2. Depois, acesse o ambiente com utm_source=2. O cookie será atualizado para parceiro=2.
3. Então, ao fazer login com utm_source=3, o cookie permanecerá como parceiro=2, mas com validade atualizada.


## Workaround

Não existe solução de contorno atualmente para este cenário.

