---
title: "Seletor de SKU com contextos múltiplos"
id: 4n6ap30jnJOrzflLCnVziO
status: PUBLISHED
createdAt: 2024-01-29T13:31:21.812Z
updatedAt: 2024-07-11T19:19:22.383Z
publishedAt: 2024-07-11T19:19:22.383Z
firstPublishedAt: 2024-01-29T13:31:22.391Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: seletor-de-sku-com-contextos-multiplos
locale: pt
kiStatus: Fixed
internalReference: 341322
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O seletor de SKU dentro da exibição modal/rápida não está no mesmo contexto que está na página de pesquisa e na página do produto.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Store%20Framework/seletor-de-sku-com-contextos-multiplos_1.png)


 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Store%20Framework/seletor-de-sku-com-contextos-multiplos_2.png)

## Simulação



- Vá para qualquer loja que tenha uma visualização rápida e um seletor de SKU.
- Escolha uma SKU e vá para o modo de visualização rápida
- Altere a SKU dentro do modal de visualização rápida
- Saia do modo de visualização rápida e você perceberá que o SKU não mudou, ele apenas mudou dentro do contexto da visualização rápid

## Workaround


N/A

