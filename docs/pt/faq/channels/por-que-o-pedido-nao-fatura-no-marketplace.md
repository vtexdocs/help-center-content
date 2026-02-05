---
title: 'Por que o pedido não fatura no marketplace?'
id: frequentlyAskedQuestions_715
status: PUBLISHED
createdAt: 2017-04-27T22:28:23.898Z
updatedAt: 2020-05-11T15:48:16.337Z
publishedAt: 2020-05-11T15:48:16.337Z
firstPublishedAt: 2017-04-27T23:02:33.970Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-isnt-the-order-invoiced-on-the-marketplace
locale: pt
legacySlug: por-que-o-pedido-nao-fatura-no-marketplace
---

Este cenário é caracterizado pela inserção da nota fiscal e a fatura do pedido na VTEX, mas a permanência do status anterior no marketplace.

## Verifique o Bridge

Como em qualquer passo da compra, algo pode ocorrer com a integração. Porém, isso sempre estará logado no bridge, para ajudar a entender e saber como corrigir.

[Saiba como analisar erros de integração no Bridge.](/pt/docs/tutorials/verificando-integracao-no-bridge)

## Insira a chave de acesso com a nota fiscal

Para realizar o faturamento dos pedidos na CNova é necessário o fornecimento da Chave de Acesso da Nota Fiscal** **no momento da inserção da nota fiscal no pedido. Sem isto, não é possível inserir dados de rastreio na VTEX pela CNova. 

O impacto disto é que conseguimos ir até o status faturado apenas na VTEX, sendo necessário a atualização manual diretamente no backoffice da Nova.com.

A Chave de Acesso da Nota Fiscal é um instrumento auxiliar para consulta da NF-e que permite ao detentor desse documento confirmar a sua efetiva existência, nome do campo Invoice Key:

[]![ChaveDeAcesso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/channels/por-que-o-pedido-nao-fatura-no-marketplace_1.png)

**Lembre-se!** Este dado é criado na geração da Nota Fiscal e comporta ao ERP. Caso tenha um, solicite-o.

Esse valor pode ser inserido manualmente pelo admin ou pela [API de notificação da fatura](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), pelo campo **invoiceKey**.
