---
title: 'Dados de intermediador para vendas em marketplaces integrados nativamente'
id: 76L5juzkCZa8Bn5vl6U9Cp
status: PUBLISHED
createdAt: 2021-03-31T13:19:17.099Z
updatedAt: 2021-05-25T21:13:24.704Z
publishedAt: 2021-05-25T21:13:24.704Z
contentType: updates
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-03-31-intermediator-data-for-natively-integrated-marketplace-sales
locale: pt
legacySlug: dados-de-intermediador-para-vendas-em-marketplaces-integrados-nativamente
announcementImageID: ''
announcementSynopsisPT: 'Estão sendo disponibilizados dados de intermediador para vendas feitas em marketplaces integrados nativamente.'
---

Lojas que usam integrações nativas da VTEX com marketplaces agora têm acesso a novos campos de dados, notoriamente, dados de intermediador e método de pagamento para vendas feitas nestes marketplaces. Essas integrações são com:
- B2W
- Via Varejo
- Magazine Luiza
- Mercado Livre
- Amazon
- Carrefour
- Netshoes
- Centauro
- Dafiti
- Wish

Agora você pode acessar ambas informações do intermediador e método de pagamento usando a request de Get order na [API de Orders](https://developers.vtex.com/vtex-developer-docs/reference/orders-api-overview).

## Por que fizemos esta mudança?
Informações contidas em notas fiscais de ecommerce podem variar de acordo com a legislação de cada país. É possível, por exemplo, que seja necessária a identificação do intermediador e inclusão do método de pagamento para vendas feitas por um marketplace. 

Em decorrência de requisitos legais acerca da emissão de notas fiscais de vendas intermediadas, como a [NT 2020.006](https://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false&Informe=IqSW/jxfvaw=) no Brasil, nós fizemos essa melhoria para que nossos clientes sejam totalmente capazes de cumprir estes requisitos.

## O que precisa ser feito?
Se a sua loja está sujeita a requisitos legais como exemplificados acima, quaisquer integrações que resultem na emissão de notas fiscais poderão ser atualizadas para incluir estas informações.

Para identificar o intermediador (marketplaces integrados nativamente listados acima), use o campo `affiliateId`. Para identificar o meio de pagamento usado, siga os passos descritos neste guia sobre como [recuperar dados de meio de pagamento em marketplaces](https://developers.vtex.com/vtex-rest-api/docs/fetching-marketplace-payment-method-data-with-the-orders-api).

Você também tem a opção de discriminar se o pagamento foi feito à vista ou em parcelas. Essa informação pode ser encontrada no campo `installments`.

