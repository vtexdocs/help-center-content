---
title: "Tradução incorreta para campos diferentes com o mesmo valor original"
id: 5amLWqGy7TPh7tk4KnLTmW
status: PUBLISHED
createdAt: 2024-02-16T00:05:00.562Z
updatedAt: 2025-06-26T19:24:51.387Z
publishedAt: 2025-06-26T19:24:51.387Z
firstPublishedAt: 2024-02-16T00:05:01.618Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: traducao-incorreta-para-campos-diferentes-com-o-mesmo-valor-original
locale: pt
kiStatus: Fixed
internalReference: 982848
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O Intelligent Search pode usar a tradução errada para um campo cujo valor no idioma principal é o mesmo entre campos diferentes.


## Simulação


Considerando dois campos (categoria e especificação) de um produto em uma loja com "nl-BE" como idioma padrão e "fr-BE" como um idioma adicional com os seguintes valores:


- categoria
  - nl-BE = médio
  - fr-BE = moyens
- especificação
  - nl-BE = médio
  - fr-BE = midi

Em uma incompatibilidade, a tradução "fr-BE" para o campo de especificação pode ser indexada erroneamente como "moyens" em vez de "midi"

## Workaround


N/A




