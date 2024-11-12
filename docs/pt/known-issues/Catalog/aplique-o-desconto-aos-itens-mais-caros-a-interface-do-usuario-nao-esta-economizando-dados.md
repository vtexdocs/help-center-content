---
title: 'Aplique o desconto aos itens mais caros - a interface do usuário não está economizando dados.'
id: 6VQuVOAtzbA6OyjDEi2bHh
status: PUBLISHED
createdAt: 2024-04-03T17:29:36.171Z
updatedAt: 2024-04-03T17:29:37.024Z
publishedAt: 2024-04-03T17:29:37.024Z
firstPublishedAt: 2024-04-03T17:29:37.024Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: apply-the-discount-to-the-most-expensive-items-ui-not-saving-data
locale: pt
kiStatus: Backlog
internalReference: 1011071
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao usar a UI de promoções, a tentativa de salvar manualmente a opção "Aplicar aos itens mais caros" não funcionará e o seletor permanecerá na opção do tipo mais barato.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Simulação


1 - Acesse a interface do usuário de promoções: https://account_name.myvtex.com/admin/promotions

2 - Na interface de usuário de promoções, selecione a opção "Apply the discount to the most expensive items" (Aplicar o desconto aos itens mais caros)

3 - Salve a promoção

4 - Acesse-a novamente, e a caixa para aplicar o desconto na opção mais barata será selecionada

## Workaround


Em vez disso, use a API de salvamento de promoções https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration





