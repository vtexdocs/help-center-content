---
title: 'Agora você pode integrar pedidos de marketplace com divergência de preço'
id: 2hbmlBKFeU0OsECukOcw4w
status: PUBLISHED
createdAt: 2018-11-12T17:52:20.888Z
updatedAt: 2020-09-04T21:12:19.603Z
publishedAt: 2020-09-04T21:12:19.603Z
contentType: updates
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slugEN: 2018-11-12-boost-your-marketplace-sales
locale: pt
legacySlug: aumente-suas-vendas-em-marketplace
announcementImageID: ''
announcementSynopsisPT: 'A nova funcionalidade facilita a identificação de pedidos com divergência no preço e permite sua loja recuperar vendas.'
---

>⚠️ Desde que este anúncio foi publicado, deixou de ser necessário entrar em contato com o suporte da VTEX para integrar pedidos com divergência de preço. Você **não** precisa mais abrir um ticket para usar essa feature. Basta, em vez disso, acessar a feature pelo Admin, em **Gerenciamento de pedidos** > **Autorização de pedidos**.

Agora, você tem a opção de integrar aqueles pedidos que vêm do marketplace com alguma divergência no preço. Para isso, introduzimos o novo status `waiting-for-manual-authorization` no fluxo de pedido que permite a integração manual nesses casos. 

Mudanças de preço podem demorar certo tempo para serem refletidas no marketplace. Antes, quando uma compra era realizada nesse meio tempo, o pedido se perdia no fluxo. A nova funcionalidade facilita a identificação de pedidos que se enquadram nesses casos, permitindo que você faça a integração deles. Assim, __sua loja pode recuperar vendas e faturar ainda mais em períodos como a Black Friday__, em que alterações são feitas com maior frequência e em curtos espaços de tempo.

## O que muda?
A nova feature é opcional e depende de algumas configurações simples, descritas abaixo. __Se você decidir não fazer essas configurações, o fluxo atual de pedido permanece inalterado__.

## O que você precisa fazer para usar
Se sua loja possui __integração externa com marketplaces__ (e você deseja usar a nova feature), siga os passos abaixo:

1. O integrador do marketplace (_responsabilidade marketplace_) vai precisar passar a flag `isCreatedAsync` no PlaceOrder (dentro do body).  
2. [Abra um ticket](https://support.vtex.com/hc/pt-br/requests) com nosso time de suporte, informando: o __Account__, a __lista de e-mails com autorização para integrar pedidos com divergência__ e o __percentual que pode ser aprovado__. 
3. Depois de realizar os passos acima, basta usar o filtro do módulo de __Gerenciamento de pedidos__ (antigo OMS) para identificar os que estão no novo status (`waiting-for-manual-authorization`). Os usuários autorizados vão poder aprovar ou negar os pedidos, de acordo com os critérios da sua loja.

Se a sua loja possui __integração com marketplaces certificados__ (usando o Bridge), a flag será acionada automaticamente. Você só vai precisar cumprir as etapas descritas nos passos `2`e `3`.

>ℹ️ Lembre-se de que as integrações de pedido devem ser feitas usando as seguintes APIs [Get Order](https://developers.vtex.com/reference/orders#getorder) e [Get Feed Order Status](https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus).
