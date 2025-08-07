---
title: "O indexador cria uma resposta de disponibilidade inconsistente para mercados regionalizados"
id: 19LGbEIzW6uPgRN4reWsLv
status: PUBLISHED
createdAt: 2025-01-31T16:44:34.154Z
updatedAt: 2025-01-31T17:00:35.561Z
publishedAt: 2025-01-31T17:00:35.561Z
firstPublishedAt: 2025-01-31T16:44:34.817Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: o-indexador-cria-uma-resposta-de-disponibilidade-inconsistente-para-mercados-regionalizados
locale: pt
kiStatus: Backlog
internalReference: 1172289
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o indexador, ao verificar se um item está disponível para um marketplace, executa uma simulação de checkout.

Esse processo cria um JSON com vários campos, no qual o campo "stockBalance", do checkout, é considerado para determinar a disponibilidade de um item em um canal de vendas.

No entanto, um item pode estar disponível mesmo com stockBalance = 0, quando ele só tem estoque proveniente de vendedores regionalizados, o checkout usa outro campo para atualizar a propriedade "availability".

O indexador deve considerar esse último caso e essa inconsistência pode, às vezes, causar o comportamento de não mostrar corretamente a disponibilidade do item em sua resposta.

É importante observar que isso não afeta a disponibilidade real do item, pois esses itens só serão exibidos ao regionalizar previamente e também é necessário manter o sinalizador "mostrar sem estoque" definido como verdadeiro, conforme descrito neste outro caso de problema: https://help.vtex.com/en/known-issues/product-unavailable-even-with-franchised-stock--58KRJl4MFOaeb5KUYGmH8G

## Simulação


1 - ter um produto disponível somente para vendedores regionalizados
2 - verifique seus dados indexados em um canal de vendas que só tenha ofertas para esse vendedor
3 - ele será mostrado como indisponível, mesmo que tenha estoque para os vendedore

## Workaround


Defina mais de 1 unidade de estoque para o próprio marketplace se as informações de dados indexados forem cruciais para sua operação.

Além disso, as próximas atualizações dos mecanismos de busca da VTEX abordarão essa questão.


