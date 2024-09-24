---
title: 'Ao tentar aprovar pagamento, Gerenciamento de Pedidos retorna erro. O que fazer?'
id: 1cbaJI69pSMWkugoUkmQ8O
status: PUBLISHED
createdAt: 2017-12-21T14:02:07.873Z
updatedAt: 2023-03-31T12:47:47.903Z
publishedAt: 2023-03-31T12:47:47.903Z
firstPublishedAt: 2017-12-21T14:35:13.955Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slug: ao-tentar-aprovar-pagamento-gerenciamento-de-pedidos-retorna-erro
locale: pt
legacySlug: aprovar-pagamento-oms-erro-authorize-fulfillment
---

Um erro comum na aprovação do pagamento, no módulo **Pedidos**, é o de falta de estoque para determinado SKU incluído no carrinho. Ele pode ocorrer quando um pedido é aprovado e a reserva do item já foi liberada ou cancelada anteriormente.

Neste caso, ao tentar aprovar o pagamento em **Pedidos**, você verá um erro parecido com os seguintes:

![error authorize fulfillment](//images.contentful.com/alneenqid6w5/5Wvwem2kucqsOIYKq4WW00/23b0ffb4209565da148382c3299e2bac/error_authorize_fulfillment.png)

Para confirmar se o problema é este, na página de [detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), clique em `Ver interações` para ver os detalhes do pedido.

Caso haja um erro como "A reserva solicitada *00-abc* não pôde ser garantida para o pedido *00-xyz*", é porque algum dos SKUs incluídos no carrinho não tem estoque disponível, o que inviabiliza que a compra seja aprovada. Neste caso, corrigir o estoque deve permitir que o pedido siga seu fluxo.

Saiba mais no artigo [Verificar detalhes de erros nos pedidos](/pt/faq/como-verificar-detalhes-de-erros-nos-pedidos).
