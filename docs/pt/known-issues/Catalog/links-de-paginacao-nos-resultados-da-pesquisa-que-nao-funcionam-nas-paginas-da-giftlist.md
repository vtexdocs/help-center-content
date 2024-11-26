---
title: 'Links de paginação nos resultados da pesquisa que não funcionam nas páginas da Giftlist'
id: 1w6h5MwZthKMM8rvqXZtQi
status: PUBLISHED
createdAt: 2022-11-02T14:01:35.650Z
updatedAt: 2024-02-16T20:26:50.585Z
publishedAt: 2024-02-16T20:26:50.585Z
firstPublishedAt: 2022-11-02T14:01:36.502Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pagination-links-on-search-results-not-working-on-giftlist-pages
locale: pt
kiStatus: No Fix
internalReference: 481330
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Links de paginação em `SearchResult' que não funcionam em `Giftlist'.



## Simulação


- Acesse uma Giftlist com produtos suficientes para ter paginação, use um modelo padrão sem nenhuma personalização;
- Verifique os links de paginação:

 ![](https://vtexhelp.zendesk.com/attachments/token/LAmUCIdMsybPqVkRGh9TcNq99/?name=inline-998244926.png)

- Estes links não funcionam.



## Workaround


- Use uma personalização JS para carregar o pedido corretamente, por exemplo, o pedido deve ser algo assim (pode ser verificado nas ferramentas de desenvolvimento cromado): `buscapagina?PS=16&sl=7ec035e2-ab04-40c0-9cf0-cc669725b10a&cc=16&sm=0&PageNumber=2`

