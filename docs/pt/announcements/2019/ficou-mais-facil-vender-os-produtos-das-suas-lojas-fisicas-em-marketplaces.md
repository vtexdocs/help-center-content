---
title: 'Ficou mais fácil vender os produtos das suas lojas físicas em marketplaces'
id: 2rOEBV0tOAoZIgow7CODyj
status: PUBLISHED
createdAt: 2019-03-12T21:54:26.822Z
updatedAt: 2021-09-28T10:10:28.471Z
publishedAt: 2021-09-28T10:10:28.471Z
contentType: updates
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slugEN: now-its-easier-to-sell-the-products-from-your-physical-stores-in
locale: pt
legacySlug: ficou-mais-facil-vender-os-produtos-das-suas-lojas-fisicas-em-marketplaces
announcementImageID: ''
announcementSynopsisPT: 'Agora, ao integrar a conta principal a um marketplace, os estoques das contas-franquia são considerados automaticamente.'
---

Você já pode oferecer os produtos de toda sua rede de lojas físicas em __marketplaces externos__, sem esforço. Através do __Multilevel Omnichannel Inventory__, as [contas-franquia](/pt/faq/definicoes-de-conta-franquia-e-seller-white-label#o-que-e-uma-conta-franquia), quando criadas, já estão completamente integradas à conta principal. Isso significa que, quando a conta principal configurar uma integração com um marketplace externo, o estoque das contas-franquias também será considerado no processo, ou seja, não será mais preciso gerenciar cada conta-franquia individualmente para integrá-la ao marketplace. 

## Principais vantagens

- Configuração de integração com um marketplace externo em apenas uma conta, a principal. 
- Poder de Omnichannel no seu negócio, como utilizar as contas-franquias para pickup points, por exemplo.
- Simplificação das APIs do Checkout.

## O que você precisa fazer

A única configuração necessária é a integração da conta principal com o marketplace externo. No momento em que isso for feito, os estoques de todas as contas-franquia vinculadas à principal também serão enviados para o marketplace. Essa é uma nova característica das contas-franquia, que já está ativa para facilitar sua vida na hora integrar sua operação com marketplaces.

> ⚠️ **A integração automática do estoque das contas-franquia só está disponível por enquanto para marketplaces externos**.

## O que mudou

O Multilevel Omnichannel Inventory foi lançado trazendo um novo aliado para operações omnichannel. Porém, para que ele possa ser usado, é preciso que a loja que será apenas __marketplace__ no fluxo do pedido (o elo mais próximo ao cliente), ajuste suas __APIs de Checkout__ de acordo com as mudanças abaixo: 

- `AffiliateId`, `marketplacePaymentValue`, `marketplaceOrderGroup` e `marketplaceServicesEndpoint` são os 4 novos campos obrigatórios do PlaceOrder do Checkout. O campo `paymentData` não é mais necessário.
- Nova rota para o andamento do pedido após aprovação do marketplace (Marketplace Order Authorization). 
- Marketplace precisa suportar nova rota para ser notificado de cancelamento do seller (ou do agente intermediário) e para receber nota fiscal do seller (ou do agente intermediário). 

Para saber mais sobre Multilevel Omnichannel Inventory e as mudanças nas APIs do Checkout, acesse [este artigo do Help](https://help.vtex.com/pt/business-guides/ofereca-os-produtos-da-sua-rede-de-lojas-fisicas-em-marketplaces-externos--6s64bV8Dqb5QN6sqIfPzcA). 

> ❗ <body> <li>O termo Marketplace Recursivo foi substituído por**Multilevel Omnichannel Inventory.**</li> <li>A funcionalidade não permite [change seller](https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?). <li>Essa solução é destinada à integração com Marketplaces externos, e não marketplaces que já possuem uma [integração nativa VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex).</li> <li>Leia o artigo [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) e confira as restrições de uso detalhadamente.</li> </body>
