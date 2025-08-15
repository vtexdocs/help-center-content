---
title: 'Erros de integração de pedidos da Amazon'
id: QCOquR8cai882HhDOqNm7
status: PUBLISHED
createdAt: 2021-08-31T15:43:51.365Z
updatedAt: 2023-03-29T23:46:13.266Z
publishedAt: 2023-03-29T23:46:13.266Z
firstPublishedAt: 2021-08-31T16:03:20.021Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-amazon-integration
legacySlug: erros-de-integracao-de-pedidos-da-amazon
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

Na Amazon, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagem de erro

`No available sla to deliver this order`

Erros de SLA significam que um fator está inviabilizando a entrega do pedido ao consumidor final. Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Mensagem de erro

`Order with SKU out of stock`

Há diversas causas para erros relacionados à falta ou insuficiência de estoque. Para identificar a origem do erro e corrigi-lo, confira [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Mensagem de erro

`SKU está inativo ou sem política comercial vinculada`

Somente pedidos de SKUs ativos são integrados, portanto, verifique o _status_ do item no seu Admin VTEX, no módulo **Catálogo > Produtos e SKUs**. É possível ativar o SKU ao [Preencher campos de cadastro de SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), ou [Ativar SKUs em massa](https://help.vtex.com/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).

Se os SKUs do pedido estiverem ativos, isso significa que o problema é os SKUs não estarem vinculados à política comercial usada na Amazon. Neste caso, é necessário [associar o SKU à política comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

____

#### Mensagem de erro

`Sku in order don't belong to a VTEX Store, sku id it's not a integer`

Este erro ocorre quando o SKU do pedido não é identificado na plataforma VTEX. Isso pode ocorrer porque o item foi removido e não existe mais no catálogo, ou porque a Amazon forneceu uma informação incorreta. Portanto, se o SKU constar normalmente no sistema, entre em contato com o marketplace.

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolução de erros de divergência de preço em pedidos de marketplace](https://help.vtex.com/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
