---
title: 'Nem todos os skus são devolvidos na planilha de especificação do produto/sku'
id: 3fo3A4mQ1YjyJH7yWETk8J
status: PUBLISHED
createdAt: 2022-08-31T20:34:22.708Z
updatedAt: 2022-11-25T21:43:32.209Z
publishedAt: 2022-11-25T21:43:32.209Z
firstPublishedAt: 2022-08-31T20:34:23.219Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: nem-todos-os-skus-sao-devolvidos-na-planilha-de-especificacao-do-produtosku
locale: pt
kiStatus: Fixed
internalReference: 649316
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Este comportamento acontece quando uma categoria tem muitas especificações e muitos skus. Dessa forma, ao exportar a planilha, eventualmente o limite de excelência será atingido (cerca de 65k).

Quando isto acontece, a planilha não retorna um erro, ela apenas corta os skus que estão acima deste limite.

O resultado é que nem todos os skus serão devolvidos neste cenário.



## Simulação



1. Exportar uma planilha de especificação do produto/sku;
2. 2. Verificar que está no limite do Excel;
3. Verificar se a categoria tem um grande número de especificações e skus sobre ela;
4. Verificar se faltam alguns skus na planilha.



## Workaround



Uma alternativa seria verificar se as especificações precisam existir em um nível superior da categoria ou apenas em um nível inferior. Dessa forma, menos skus e especificações seriam devolvidas e o limite seria mais difícil de ser alcançado.

