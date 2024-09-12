---
title: 'V2 da API de Checkout e Fulfillment já está em beta (migração será finalizada em 23 de maio)'
id: 2h5VNlwg3OUOSKeWqyac8q
status: PUBLISHED
createdAt: 2018-02-07T12:10:09.771Z
updatedAt: 2019-12-31T15:12:56.320Z
publishedAt: 2019-12-31T15:12:56.320Z
contentType: updates
productTeam: Shopping
author: authors_24
slug: v2-da-api-de-checkout-e-fulfillment-ja-esta-em-beta-migracao-sera
locale: pt
legacySlug: v2-da-api-de-checkout-e-fulfillment-ja-esta-em-beta-migracao-sera
announcementImageID: ''
announcementSynopsisPT: 'A V2 traz uma série de melhorias em relação à versão anterior e remove alguns campos e rotas que já estavam obsoletos.'
---

>❗ A migração para a v2 da API de Checkout e Fulfillment já foi finalizada em **23/05/2018**

>⚠️ O prazo foi alterado de **21/05** para **23/05** (2 dias) devido à necessidade de testes complementares.

Já está em beta a Versão 2 da API de Checkout e Fulfillment. E, a partir de __23 de maio__, ela será aplicada para todas as lojas. A V2 traz uma série de melhorias em relação à versão anterior e remove alguns campos e rotas que já estavam obsoletos. 

>⚠️ **Atenção**
>
> 
> Recomendamos que você faça todos os testes para avaliar os impactos e adaptar suas integrações e customizações antes do prazo final.
>
>  
> Assim, quando realizarmos a migração para a nova versão da API, sua loja vai ter uma transição tranquila.

Confira abaixo tudo o que muda com a nova versão da API de Checkout e Fulfillment (e o que está em beta ou em stable):

- Remoção dos campos __defaultPicker__, __handlerSequence__ e __handling__ do objeto __items__, tanto na resposta das rotas do carrinho como na dos pedidos (BETA). Esses campos foram criados para uma funcionalidade que não está mais sendo usada e nunca são preenchidos hoje em dia.
- Alteração do campo __checkToSavePersonDataByDefault__ para __saveUserData__, no objeto __storePreferencesData__ das respostas do carrinho e do pedido (BETA). __ATENÇÃO:__ durante o período de migração, é recomendado que se mantenha a leitura dos dois campos por questões de compatibilidade, mas sempre dando preferência para o novo.
- Remoção dos objetos __attachmentId__ (ou __id__, dependendo da rota), que fazem parte dos grupos de attachment (__shippingData__, __clientProfileData__, __giftRegistryData__ etc.), tanto na resposta das rotas do carrinho como na dos pedidos. Essa mudança resolve questões de redundância (BETA).
- Remoção do campo __templateOptions__ no objeto __storePreferencesData__ das respostas do carrinho e do pedido (BETA). A funcionalidade que foi pensada inicialmente com esse campo não foi completamente desenvolvida e hoje retorna sempre o mesmo valor.
- Remoção do campo __itemAttachment__ (já obsoleto) no objeto __items__, tanto na criação dos carrinhos e pedidos como na obtenção de pedidos (BETA). Esse campo está sendo removido por redundância com o __attachments__ (que já está em STABLE) e foi mantido até hoje por compatibilidade, já que sua primeira versão não era uma lista.
- O campo __shippingEstimate__ dos __SLAs__, tanto da resposta do carrinho como na do pedido, agora suportam valores em horas (h) e minutos (m) (BETA).
- A rota de callback (autorização na finalização do pedido) `{host}/gatewayCallback/{gatewayReferenceId}/{transactionId}/{messageCode}` (GET) será removida e deve ser substituída pela rota `{host}/gatewayCallback/{orderGroup}/{messageCode}` (GET). Essa mudança está em BETA, mas a rota correta já está em STABLE.
- Remoção dos campos __merchantName__, __transactionId__ e __payments__ do objeto __paymentData__ na resposta das rotas `{host}/api/checkout/pub/orders/order-group/{order-group}`, `{host}/api/checkout/pub/orders` (GET) e `{host}/api/checkout/pub/orders/{orderId}`. Essa mudança está em BETA e remove campos obsoletos e redundantes em relação aos que já existem no campo __transactions__ (que já está em STABLE com todas as informações acima).
- Remoção da rota `{host}/api/checkout/pvt/orders/order-import` de importação de pedido (BETA).
- Remoção do campo __products__ das respostas e das requisições das rotas do carrinho. Essa funcionalidade nunca foi totalmente implementada e está sendo descontinuada (BETA).
- Remoção do suporte da queryString __product__ na rota `{host}/checkout/cart/add`. Essa funcionalidade nunca foi totalmente implementada e está sendo descontinuada (BETA).
- Remoção do objeto __expectedOrderFormSections__ no request das rotas do carrinho. Agora, todos os campos serão retornados (BETA).
- Remoção do campo __stockBalance__ do objeto __logisticsInfo__ na resposta da rota `{host}/api/checkout/pub/orderForms/simulation`. __Importante:__ esse campo ainda estará disponível na rota privada `{host}/api/checkout/pvt/orderForms/simulation` (BETA).
- Remoção da rota `{host}/api/checkout/pvt/orders/{orderId}/updateShippingEstimateDate` (BETA).
- Correção dos casos de erro que deveriam retornar código __500__, mas estavam apresentando o __400__ (BETA).
