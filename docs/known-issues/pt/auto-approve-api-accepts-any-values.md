---
title: Auto aprova API aceita quaisquer valores
id: kLl4mtwKPPqW6jk5hZMWs
status: PUBLISHED
createdAt: 2022-12-12T14:18:51.059Z
updatedAt: 2022-12-12T14:18:51.733Z
publishedAt: 2022-12-12T14:18:51.733Z
firstPublishedAt: 2022-12-12T14:18:51.733Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: auto-aprova-api-aceita-quaisquer-valores
kiStatus: Backlog
internalReference: 713704
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a API de aprovação automática não está verificando se o vendedor existe, o que pode levar a configurações incorretas.

/suggestions/configuration/autoapprovation/toggle/seller/1a?sellerId=

Se a identificação do vendedor acima for enviada, por exemplo, usando um caractere sensível ao caso diferente: Myseller ao invés de myseller, a API responderá com 200OK e a aprovação automática será, enganosamente, definida como verdadeira. Entretanto, o próprio vendedor não terá sua auto-aprovação ativada, uma vez que a cadeia precisa ser uma correspondência exata para que funcione.




##

## Simulação



1. Usando a API de ajustes de auto-aprovação, defina uma seqüência semelhante à do vendedor, mas não uma correspondência exata
2. Verifique se este valor será definido como verdadeiro e a API não responderá com uma mensagem indicando que não existe um vendedor para este valor.
3.


##

## Workaround


Se sua aprovação automática não estiver funcionando, verifique duas vezes se há algum personagem com um caso diferente ou uma leve diferença.

