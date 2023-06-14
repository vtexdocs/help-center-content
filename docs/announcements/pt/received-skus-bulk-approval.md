---
title: "SKUs Recebidos: aprovação em massa "
id: PC9nNmPKePbiuH8pDoG9g
status: PUBLISHED
createdAt: 2020-09-04T19:13:19.581Z
updatedAt: 2021-03-26T15:49:22.429Z
publishedAt: 2021-03-26T15:49:22.429Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: skus-recebidos-aprovacao-em-massa
legacySlug: skus-recebidos-aprovacao-em-massa
announcementImageID: ""
announcementSynopsisPT: Agora é possível selecionar até 25 SKUs em massa no painel SKUs Recebidos. Também criamos uma API nova para isso.
---

Marketplaces gerenciam os produtos de seus sellers a partir do painel [SKUs Recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396). É por lá que podem revisar e aprovar os produtos enviados por sellers. No painel é possível selecionar SKUs de forma massiva, aprovando ou rejeitando itens de uma só vez. 

## O que mudou?

Agora é possível fazer uma seleção em massa de até **25** itens por página. Até então só era possível selecionar até 15 SKUs por página. Essa melhoria traz mais agilidade para operações que contam com a aprovação manual de ofertas.  

Além da mudança no painel SKUs Recebidos, criamos uma nova API que acompanha a melhoria. A API [Match Received SKUs Individually](https://developers.vtex.com/vtex-developer-docs/reference/match-received-skus-1) era até então a responsável pela aprovação individual de SKUs. Desenvolvemos uma [nova API](https://developers.vtex.com/vtex-developer-docs/reference/match-received-skus-1#match-multiple-received-skus), que aprova até 25 SKUs por chamada. Ambas APIs estarão disponíveis para o uso. 

## O que preciso fazer?

Se sua loja possui alguma integração que utiliza nossa API de Suggestions, poderá utilizar nosso novo endpoint para trazer mais eficiência para a sua operação. Confira nossa [documentação no Developer Portal](https://developers.vtex.com/vtex-developer-docs/reference/match-received-skus-1#match-multiple-received-skus) para saber mais. 

Essa funcionalidade do painel SKUs Recebidos já está disponível no seu Admin VTEX, e não altera nenhuma configuração ou dado da sua loja. É uma melhoria na interface, que facilita o uso do painel no dia a dia da sua equipe. 

Para utilizá-la, siga os passos abaixo:

1. No módulo *Marketplace*, acesse a aba **Sellers**.  
2. Clique em **SKUs Recebidos**.   
3. No final da página, em **Mostrar linhas**, altere para `25` a quantidade de itens na página.  
4. Clique na caixa de seleção **SKU**.  
5. Clique em **Aprovar como produto novo**, ou selecione a ação desejada entre as opções do botão **Mais**.  

