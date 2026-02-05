---
title: 'Resolução de erros de divergência de preço em pedidos de marketplace'
id: 6MbmPX4SKyRkcTJxVhRna8
status: PUBLISHED
createdAt: 2021-08-03T21:56:44.320Z
updatedAt: 2023-03-29T21:22:43.831Z
publishedAt: 2023-03-29T21:22:43.831Z
firstPublishedAt: 2021-08-03T22:16:58.511Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: troubleshooting-price-divergence-errors-in-marketplace-orders
legacySlug: resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

No Admin VTEX, em **Marketplace > Conexões > Pedidos**, a mensagem de erro de divergência de valores em marketplace é a seguinte:

> `O preço do pedido no marketplace é diferente do seu valor determinado na VTEX. Para integrar automaticamente pedidos com divergência de valores no OMS, acesse Pedidos > Gerenciamento de pedidos > Autorização de pedidos, e configure uma regra de Divergência de valores.`

Quando o preço definido por um seller é diferente do preço oferecido pelo marketplace, pedidos realizados em marketplaces podem não ser processados corretamente. Na VTEX, o fluxo de Autorização de pedidos permite o controle e a aprovação automática desses pedidos, a partir da configuração que o seller faz de uma [regra de Divergência de valores](/pt/docs/tutorials/regra-de-divergencia-de-valores).

Para aderir ao fluxo de Autorização de pedidos, você precisa [configurar uma regra de Divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores). Somente usuários com [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) Admin Super (_Owner_) ou OMS Full podem fazer isso.

> ℹ️ Uma vez que você [configure a regra de Divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores), ela passa a valer para todos os marketplaces nos quais você seja um seller.

Para marketplaces VTEX, marketplaces externos e conectores certificados (parceiros), enquanto a regra de Divergência de valores não for criada, pedidos com erro de divergência de preço são aprovados automaticamente.

Para [conectores nativo](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), enquanto o seller não configura a regra de Divergência de valores, pedidos com divergência de preço ficam retidos. É possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos**.

### Saiba mais

- [Por que o pedido foi fechado com um preço errado?](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado--frequentlyAskedQuestions_708)
- [Erros de falta de estoque na integração de pedidos de marketplace](/pt/docs/tutorials/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace)
- [Erros de SLA na integração de pedidos de marketplace](/pt/docs/tutorials/erros-de-sla-na-integracao-de-pedidos-de-marketplace)
