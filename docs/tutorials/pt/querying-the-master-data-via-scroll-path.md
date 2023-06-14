---
title: 'Consultas ao Master Data via rota Scroll'
id: tutorials_4631
status: DRAFT
createdAt: 2017-04-27T21:49:43.180Z
updatedAt: 2022-10-17T20:09:11.259Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: consultas-ao-master-data-via-rota-scroll
locale: pt
legacySlug: consultas-ao-master-data-via-rota-scroll
subcategory: WpbGhubuRZaNZilJSXnqu
---

Para fazer consultas ao Master Data, podem ser usadas as rotas `search`, mais antiga, e `scroll`, desenvolvida posteriormente. O objetivo deste artigo é explicar as principais diferenças entre as duas e detalhar o funcionamento da rota `scroll`.

A rota `search` é bastante utilizada para consultas paginadas. E deve continuar assim. Contudo, quanto maior for o intervalo de documentos, mais lenta será a consulta.

Para obter uma melhor performance em cenários como esse, é preciso realizar um filtro. Diminuir a quantidade de documentos do resultado final é o melhor caminho para que a consulta possa ser executada com mais eficiência.

- A rota `search` é a melhor solução para os cenários em que necessitamos buscar uma coleção de documentos diretamente na loja.
- A rota `scroll` foi desenvolvida para atender aos cenários de integrações externas. Se a sua necessidade for consultar **toda a base** do VTEX Master Data ou se a sua coleção de documentos for **maior que 10 mil**, utilize este recurso.

### Como funciona a rota scroll?

Primeiro, você fará uma consulta na rota `scroll` utilizando os mesmos recursos de filtragem da rota `search`. Na resposta ao seu primeiro request, será obtido um token no header `X-VTEX-MD-TOKEN`.

Utilize esse token para os próximos requests até que retorne uma lista vazia.

### Limitações

1. É permitida somente uma operação por vez. Isso significa que quando você receber um token no primeiro request, precisará terminar a consulta ou aguardar o tempo de expiração do token;
2. O tempo de expiração é de 20 minutos. Se o VTEX Master Data parar de receber requests com o token, ele expirará em 20 minutos e estará apto a receber novas requisições do tipo `scroll`;
3. A quantidade máxima de documentos por request é de **mil**.

Para mais detalhes, veja nossa [documentação de APIs do MasterData](https://developers.vtex.com/reference/master-data-api-v1-overview).

