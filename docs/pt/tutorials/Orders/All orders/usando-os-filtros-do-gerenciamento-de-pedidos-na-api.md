---
title: 'Usar os filtros do Gerenciamento de pedidos na API'
id: tutorials_753
status: ARCHIVED
createdAt: 2017-04-27T21:58:17.338Z
updatedAt: 2022-10-21T00:14:29.132Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.267Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: using-orders-managment-filters-in-api
locale: pt
legacySlug: usando-os-filtros-do-oms-em-sua-api
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Esse artigo tem o objetivo de demonstrar maneiras de usar os filtros aplicáveis pela API do Gerenciamento de Pedidos nas consultas por API.

Você pode consultar a listagem com todas as APIs disponíveis no Gerenciamento de Pedidos em [nossa documentação para desenvolvedores](https://developers.vtex.com "nossa documentação para desenvolvedores").

O exemplo utilizado é a API de consulta aos pedidos: http://{NOMEDALOJA}.vtexcommercestable.com.br/api/oms/pvt/orders/, onde serão listados todos os pedidos de 15 em 15 de forma paginada.

### Aplicando os filtros

1. Acesse o módulo Gerenciamento de Pedidos;
2. Clique no símbolo de filtros.

Usaremos o filtro pela data de criação do pedido em um intervalo que traga todos os pedidos realizados **há um mês** e que estejam no status **pronto ****para manuseio.**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/usando-os-filtros-do-gerenciamento-de-pedidos-na-api_1.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/usando-os-filtros-do-gerenciamento-de-pedidos-na-api_2.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/usando-os-filtros-do-gerenciamento-de-pedidos-na-api_3.png)

Quando feitos os filtros, será gerada uma URL no próprio navegador com os parâmetros selecionados:
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/usando-os-filtros-do-gerenciamento-de-pedidos-na-api_4.png)

Então, é preciso decodificar a URL para ser interpretada pela interface de REST.
Uma ferramenta ágil para ajustar isso manualmente é a [URL dencoder](http://meyerweb.com/eric/tools/dencoder/ "URL dencoder").

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/usando-os-filtros-do-gerenciamento-de-pedidos-na-api_5.png)

Feito isso, basta copiar a extensão da URL a partir do “?” e colar na estrutura de origem para a URL de request. 
Ex.: `http://nomedaloja.vtexcommercestable.com.br/api/oms/pvt/orders/?orderBy=creationDate,desc&amp;f_creationDate=creationDate:[2014-09-03T03:00:00.000Z TO 2014-10-04T02:59:59.999Z]&amp;f_statusDescription=Pronto para o manuseio`

Para usar a paginação e determinar a quantidade de registros por página, insira os parâmetros `_&amp;page=1&amp;per_page=100_`.
