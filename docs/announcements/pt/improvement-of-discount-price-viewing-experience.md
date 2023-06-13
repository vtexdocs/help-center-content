---
title: Melhoria na visualização de preços com desconto
id: 2qU1yejVHL8xbLjxmNrXvk
status: DRAFT
createdAt: 2021-04-19T13:06:53.118Z
updatedAt: 2021-04-19T13:59:58.942Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slug: melhoria-na-visualizacao-de-precos-com-desconto
legacySlug: melhoria-na-visualizacao-de-precos-com-desconto
announcementImageID: 
announcementSynopsisPT:  Melhoria na visualização de preços no Checkout quando há descontos aplicáveis a um número limitado de parcelas.
---

Aprimoramos a maneira como preços de parcelas são calculados e exibidos a usuários no Checkout de modo que descontos são exibidos apenas nos contextos adequados.

## O que mudou?

Antes desta mudança, era possível ocorrer erros de visualização no resumo do pedido caso fosse [configurado um desconto](https://developers.vtex.com/vtex-developer-docs/docs/using-checkout-api-to-set-a-discount) aplicável apenas em pedidos pagos com um número limitado de parcelas.

Considere, por exemplo, um usuário que vê um produto que custa R$ 600,00, elegível para um desconto de 10% em caso de pagamento à vista. A pessoa procede para o checkout e chega à página do resumo do pedido, na qual deverá selecionar as opções de pagamento. Estes são os três erros principais que poderiam ocorrer:

- O usuário ainda não selecionou um número de parcelas e o preço é exibido sem descontos, mesmo na opção elegível.
![O usuário ainda não selecionou um número de parcelas](//images.ctfassets.net/alneenqid6w5/4dFdvU6HcZGvBWSpr0VI04/fe470a5050d3c66d98b21d978f968036/image6.png)

- O usuário selecionou um número de parcelas não elegível para desconto e o preço é exibido sem descontos, mesmo na opção elegível (à vista).
![O usuário selecionou um número de parcelas não elegível para desconto](//images.ctfassets.net/alneenqid6w5/nY13uDOX3JBOJvCN5Oj2i/d931d2d73ffb7f1b8c8ddbf7310b7bc9/image8.png)

- O usuário selecionou um número de parcelas elegível (à vista) para desconto e o desconto é exibido mesmo em opções não elegíveis.
![O usuário selecionou um número de parcelas elegível para desconto (à vista)](//images.ctfassets.net/alneenqid6w5/3hRThIcKzoGWirn17UIXqV/bd64d486417ca73e2d510fc03e4ddd05/image2.png)

Com essa mudança, o desconto será sempre exibido corretamente apenas nas opções de parcelamento elegíveis.
![O desconto será sempre exibido corretamente apenas nas opções de parcelamento elegíveis.](//images.ctfassets.net/alneenqid6w5/XBFP0W5B1wlGwpoz3In3W/99a531d3dbd3eeae102536126c849212/image4.png)

## Por que realizamos essa mudança?

Essa mudança melhora a experiência de compra dos usuários. Também reduz discrepâncias e reclamações depois da compra, já que o consumidor sabe exatamente o que esperar. Discrepâncias como essas podem até gerar consequências legais, que devem ser mitigadas com a atualização.

## O que precisa ser feito?

A melhoria na visualização de preços será implementada automaticamente na interface do Checkout para todas as contas. Nenhuma ação é necessária para lojas que usam a interface nativa do Checkout da VTEX.

No entanto, isso não se aplica caso a sua loja use nossa API do Checkout conectada a uma outra interface de usuário, como com apps ou sites proprietários. Neste caso, você já pode implementar a melhoria usando a nova [rota de API orderForm installments](https://developers.vtex.com/vtex-developer-docs/reference/orderform#orderforminstallments). Desta forma, não ocorrerão mais as discrepâncias descritas acima.

