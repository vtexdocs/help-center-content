---
title: 'Dados de intermediador para vendas em marketplaces VTEX'
id: 1gNXqhQbudnvOkx7uHfoPB
status: PUBLISHED
createdAt: 2021-06-10T18:39:24.021Z
updatedAt: 2022-01-11T20:41:00.728Z
publishedAt: 2022-01-11T20:41:00.728Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-06-10-intermediary-information-for-sales-on-vtex-marketplaces
locale: pt
legacySlug: dados-de-intermediador-para-vendas-em-marketplaces-vtex
announcementImageID: 'undefined'
announcementSynopsisPT: 'Estão sendo disponibilizados dados de intermediador para vendas feitas em marketplaces VTEX.'
---

Sellers que vendem seus produtos em marketplaces VTEX agora têm acesso aos dados de identificação do intermediador e método de pagamento para vendas feitas nestes marketplaces. Clientes VTEX que operam como marketplaces também passarão a enviar essas informações a seus sellers (VTEX e não VTEX).

Agora você pode acessar ambas informações do intermediador e método de pagamento usando a request de [Get order](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder) na API de Orders.

## Por que fizemos esta mudança?

Informações contidas em notas fiscais de ecommerce podem variar de acordo com a legislação de cada país. É possível, por exemplo, que seja necessária a identificação do intermediador e inclusão do método de pagamento para vendas feitas por um marketplace. 

Em decorrência de requisitos legais acerca da emissão de notas fiscais de vendas intermediadas, como a [NT 2020.006](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=/RzDxklkYPU=) no Brasil, nós fizemos essa melhoria para que nossos clientes sejam capazes de cumprir com estes requisitos. Dado que essas informações não se tratam de dados pessoais protegidos por legislações ao redor do mundo, essa mudança foi aplicada a todas as lojas da VTEX, sem exceções.

## O que precisa ser feito?

Se a sua loja está sujeita a requisitos legais como exemplificados acima e opera como seller de outras lojas VTEX, quaisquer integrações que se destinam a emitir notas fiscais poderão ser atualizadas para incluir estas informações.

Para identificar o intermediador (marketplaces integrados nativamente listados acima), use o campo [`affiliateId`](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder). 

Para identificar o meio de pagamento usado, acesse este guia sobre como [recuperar dados  de vendas em marketplace com a API de orders](https://developers.vtex.com/vtex-rest-api/docs/fetching-marketplace-payment-method-data-with-the-orders-api).

