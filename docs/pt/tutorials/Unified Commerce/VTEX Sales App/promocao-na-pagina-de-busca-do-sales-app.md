---
title: 'Promoção na página de busca do Sales App'
id: 2g9JmTLKYASz8jxme2pyc9
status: PUBLISHED
createdAt: 2024-08-19T11:11:42.781Z
updatedAt: 2024-10-18T12:07:33.298Z
publishedAt: 2024-10-18T12:07:33.298Z
firstPublishedAt: 2024-08-20T13:54:03.140Z
contentType: tutorial
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: promotions-on-the-sales-app-search-page
locale: pt
legacySlug: promocao-na-pagina-de-busca-do-sales-app
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

A funcionalidade de [promoção](https://help.vtex.com/pt/tutorial/lista-de-promocoes-beta--4yB7nNdliiFxBTXE19GCIi#criar-promocoes) na página de busca do [Sales App](https://help.vtex.com/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6cq4E1JCmA6vCvBCCtAgIM) foi criada para lojistas que desejam destacar ofertas especiais diretamente nos resultados de busca da Página de Listagem de Produtos (PLP). Isso proporciona uma melhor experiência de compra, promove a interação com os clientes e aumenta a visibilidade de produtos com múltiplas promoções.

Para refletir uma promoção corretamente no Sales App:

- Marque a promoção como destaque ao criá-la no Admin VTEX. Apenas promoções destacadas aparecerão no Sales App.
- Insira um campo chamado `salesAppHighlight` com o valor `true` na seção de **informações adicionais** para destacar a promoção na imagem do produto.
- Insira na seção **informações adicionais** um campo com o nome `salesAppDisplayName`. Como valor, adicione o texto que irá sobrescrever o nome padrão da promoção exibido na página de busca. Por exemplo, “Frete grátis”.

>ℹ️ Caso deseje que a promoção seja exclusiva para o Sales App, é necessário configurar a 
>     [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) 
>     específica para o Sales App.

Quando um produto tem múltiplas promoções associadas a ele, o vendedor de uma loja física pode visualizar todas as opções clicando na *tag* da promoção exibida nos resultados de busca.

A imagem a seguir ilustra uma promoção disponível na Página de Listagem de Produtos (PLP).

![promoção em destaque](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Unified%20Commerce/VTEX%20Sales%20App/promocao-na-pagina-de-busca-do-sales-app_1.png)

