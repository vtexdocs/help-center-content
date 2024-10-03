---
title: 'Os pedidos com itens na matriz MarketplaceItems não estão abrindo na Nova IU de administração'
id: 3tj9AKklBHm4tCKYgrfDi5
status: PUBLISHED
createdAt: 2022-09-13T03:06:57.141Z
updatedAt: 2023-09-28T15:01:19.205Z
publishedAt: 2023-09-28T15:01:19.205Z
firstPublishedAt: 2022-09-13T03:06:57.675Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-with-items-on-array-marketplaceitems-is-not-opening-on-new-ui-admin
locale: pt
kiStatus: Fixed
internalReference: 656821
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Alguns pedidos têm a matriz "marketplace Items" preenchida com mais itens do que a matriz "items" do pedido json. Essa configuração é normal e se refere, por exemplo, à "lista de presentes de casamento".
Mas a nova interface do usuário não está preparada para lidar com esse tipo de pedido com itens em "marketplace Items" e quebrou a página com uma mensagem de erro:


"Sorry, something went wrong on our side.
Tente novamente ou atualize a página.
Voltar para a lista"


## Simulação



Crie um pedido com o catálogo usando a matriz "marketplace Items". Depois disso, você pode tentar ver o pedido na interface de usuário do administrador. A interface do usuário falhará e mostrará uma mensagem de erro

## Workaround


Use a IU antiga para abrir o pedido.





