---
title: 'Timeout na aprovação manual de produtos'
id: 7JfgNTNNPiKnpuSZZcRvx9
status: PUBLISHED
createdAt: 2021-08-31T18:29:22.514Z
updatedAt: 2022-12-22T20:41:19.464Z
publishedAt: 2022-12-22T20:41:19.464Z
firstPublishedAt: 2021-08-31T18:36:01.637Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slugEN: timeout-when-approving-products-manually
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Marketplaces, ao tentarem [aprovar produtos manualmente](https://help.vtex.com/pt/tutorial/manual-sku-cataloging--tutorials_396) no módulo SKUs Recebidos, recebem  o erro na tela: “Erro não especificado. Tente novamente.” Um dos motivos para que esse erro ocorra é o _Timeout_, uma forma do sistema indicar ao usuário que o comando levou mais tempo que o esperado para completar a ação requerida. 


## Simulação

Esse erro ocorre quando marketplaces tentam o seguinte processo:

1. Acesse em *MARKETPLACE*, a seção __Sellers__.  
2. Clique na página  __SKUs Recebidos__.   
3. Na aba *Pendentes*, selecione um SKU da lista.  
4. Clique em `APROVAR COMO NOVO PRODUTO`.  
5. Preencha os campos de __Categoria__ e __Marca__.   
6. Clique em `APROVAR`.      

Caso a mensagem de erro  “Erro não especificado. Tente novamente.” apareça na tela, ocorreu o erro de Timeout.   


## Workaround

Para evitar esse problema, atualize a página e tente aprovar o SKU manualmente novamente.


