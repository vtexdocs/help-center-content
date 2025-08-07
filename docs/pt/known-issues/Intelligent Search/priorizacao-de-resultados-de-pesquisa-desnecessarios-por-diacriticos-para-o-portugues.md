---
title: "Priorização de resultados de pesquisa desnecessários por diacríticos para o português"
id: 3lbgwHFc9RLusAnZnvnE1H
status: PUBLISHED
createdAt: 2024-05-07T15:24:18.404Z
updatedAt: 2024-05-07T16:55:01.818Z
publishedAt: 2024-05-07T16:55:01.818Z
firstPublishedAt: 2024-05-07T15:24:19.224Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: priorizacao-de-resultados-de-pesquisa-desnecessarios-por-diacriticos-para-o-portugues
locale: pt
kiStatus: Backlog
internalReference: 1028763
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A Pesquisa Inteligente prioriza os resultados que têm uma correspondência exata, considerando os diacríticos do termo pesquisado e os produtos.

Em alguns idiomas, eles podem gerar palavras completamente diferentes, mas para outros, isso não é importante o suficiente ou pode estar relacionado a erros de digitação frequentes.

Em português, diacríticos como acento agudo, acento circunflexo e til se enquadram nesse cenário. Um produto ou um termo de pesquisa sem o diacrítico priorizará alguns produtos em detrimento de outros, dependendo de como eles estão registrados. Para esse idioma, a normalização é esperada.

## Simulação


Em uma loja em português, a busca por "tênis" apresentará primeiro os produtos com "tenis" (correspondência exata com diacríticos) e só depois os resultados com "tênis" (correspondência exata ignorando os diacríticos)

## Workaround


Recomenda-se que o catálogo de produtos mantenha sempre a mesma escrita para seus produtos. Se não for aplicável, um sinônimo pode ajudar a manter os termos equivalentes.

