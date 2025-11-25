---
title: 'Cadastrar dados fiscais extras (NCM e ICMS) em um produto para o VTEX Sales App'
id: 51xsyWzGiQ08KMO2EaaGAa
status: PUBLISHED
createdAt: 2017-08-14T23:24:39.793Z
updatedAt: 2025-11-25T14:50:57.382Z
publishedAt: 2023-05-31T14:50:57.382Z
firstPublishedAt: 2017-08-14T23:35:56.687Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slugEN: guide-to-integration-of-orders-managment-with-electronic-tax-coupon-for-vtex-sales-app
legacySlug: guia-de-integracao-do-oms-com-cf-e-para-o-vtex-instore,guia-de-integracao-do-gerenciamento-de-pedidos-com-cf-e-para-o-vtex-instore
locale: pt
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

O **VTEX Sales App** é uma das nossas principais soluções para operações de Comércio Unificado. Ele é um aplicativo que permite integrar seus canais de venda online e físicos, colocando seus clientes no centro do negócio.

Utilizando o **Sales App**, vendedores de lojas físicas podem atender clientes de uma maneira personalizada e realizar o processo de venda completo, desde ajudá-los a escolher os melhores produtos até o pagamento e a entrega.

Este artigo explica como gerenciar cupons fiscais para pedidos realizados no **Sales App**.

No Brasil, impostos estaduais e federais são incluídos no valor dos produtos. Essas informações devem ser cadastradas como [especificações](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) nos produtos da sua loja. Dessa forma, o VTEX Sales App envia qualquer especificação de produto para o pedido final, onde os middlewares de integração - um software que age como uma ponte entre componentes de um ecommerce - podem usá-la no momento em que forem emitir os cupons fiscais.

Um exemplo é a Nomenclatura Comum do Mercosul (NCM), que define a alíquota de impostos comum ao bloco. Durante o cadastro de produtos a serem disponibilizados no ecommerce, você encontra [esse campo no Catálogo como **Código fiscal**](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-produto). Contudo, o **Sales App** busca essa informação como uma especificação de produto chamada NCM.

Para viabilizar a venda de produtos em lojas físicas, é necessário atrelar o Imposto sobre Circulação de Mercadorias e Serviços (ICMS) do produto por estado no Brasil. Essa informação deve ser cadastrada como campo de especificação para cada produto (ICMS_RJ, ICMS_SP). Importante lembrar que só é necessária essa configuração caso haja loja física operando com VTEX Sales App naquele estado.

Quaisquer outros dados fiscais necessários para seu cenário de negócio, como PIS e COFINS, por exemplo, podem ser criados como campos de especificação de produtos e estarão disponíveis no OMS.

É possível cadastrar especificações de produto por API ou pelo Admin VTEX:

* **Via API:** veja [Specifications](https://developers.vtex.com/docs/guides/specifications).
* **Via Admin VTEX:** veja [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto).

Para consultar os pedidos faturados realizados no **Sales App**, no Admin VTEX acesse **Pedidos > Todos os pedidos** e [filtre seus pedidos](https://help.vtex.com/pt/docs/tutorials/filtrar-todos-pedidos) usando o filtro **Outros > inStore > true**.
