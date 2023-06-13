---
title: As variações da SKU não retornam no PLP
id: 6AOmkZe06SmXpVqwQqTZdp
status: PUBLISHED
createdAt: 2022-10-19T12:20:41.544Z
updatedAt: 2022-11-25T21:57:22.673Z
publishedAt: 2022-11-25T21:57:22.673Z
firstPublishedAt: 2022-10-19T12:20:42.317Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: as-variacoes-da-sku-nao-retornam-no-plp
kiStatus: Backlog
internalReference: 569563
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A apresentação das variações da SKU no PLP é limitada às variações disponíveis, independentemente da configuração do prumo skusFilter. De acordo com nossa análise, o search-graphql não está fornecendo todas as variações conforme o retorno API, portanto o ProductContextProvider não recebe todas as variações.



## Simulação


- Acesse o PLP e encontre um produto que tenha algumas variações que não estão disponíveis;
- Verifique se os componentes que realizam a filtragem SKU estão configurados corretamente com o prumo skusFilter, com o valor "ALL";
- Acesse o PDP do produto em questão e veja todas as variações que retornam no ProductContextProvider



## Workaround


N/A

