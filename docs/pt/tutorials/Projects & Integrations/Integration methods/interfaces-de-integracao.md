---
title: 'Como funcionam as interfaces de integração da VTEX'
id: tutorials_743
status: ARCHIVED
createdAt: 2017-04-27T21:59:00.743Z
updatedAt: 2020-06-04T01:31:18.846Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:41.246Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integration-interfaces
locale: pt
legacySlug: interfaces-de-integracao
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

As interfaces de integração permitem realizar o controle de estoque com relação a pedidos realizados, baixas de reserva, manuseio de preços, tanto para definição de valores de tabela e para aplicações de campanhas promocionais, além do faturamento, associação de nota fiscal à compra, expedição, entre outros diversos recursos. Isto é, permite gerenciar toda suas relações de produtos, preços, estoques, administração de pedido, transportadoras, entre outros através de seu ERP e outros sistemas.

No sistema da VTEX, você conseguirá realizar as integrações através de diferentes Interfaces: __API REST__ (linguagem em JSON) e __Web Service__ (linguagem em SOAP - XML) - que está em desuso.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Para que a integração aconteça, é necessário que exista um sistema para fazer a comunicação entre o ERP (ou outros sistemas) e a VTEX. Esse sistema específico é chamado de __Integrador__ ou __Middleware__. Geralmente, o próprio fornecedor do sistema desenvolve seu integrador, mas também pode ser desenvolvido pela própria loja ou por uma agência contratada pela loja.

Para integrar ERPs à VTEX, use o nosso [guia de integração com ERPs](/pt/tutorial/guia-de-integracao-de-erps).

## Interfaces

### API REST

Esta interface é a mais atual e mais recomendada para se utilizar junto ao sistema da VTEX.

Apenas para o Catálogo (Categorias, Marcas, Produtos e SKUs) o WebService pode realizar algumas ações que as APIs por enquanto não alcançam realizar. Entretanto, as disponibilizações de novas APIs ocorrem com frequência e podem ser acompanhadas em nosso [Developer Docs](http://help.vtex.com/developer-docs/).

Por utilizar linguagem JSON, seu processamento é muito mais leve e simples em estrutura, que lhe permite trabalhar maiores números de requisições e até arquitetar fluxos para alimentar um B.I. Essa é a linguagem utilizada para a comunicação entre os módulos VTEX.

Essa interface possui suas particularidades em relação a autenticação, estruturação de parâmetros de busca, body para requests e requests que não precisam de body, entre outras. Também teremos para cada módulo da VTEX (Gerenciamento de pedidos, Pagamentos, MasterData, entre outros), suas respectivas bibliotecas de APIs cada uma para com sua função.

Veja abaixo documentações que podem auxiliar a iniciar as integrações pela interface de API REST:

- [Bibliotecas de APIs por Módulos](http://help.vtex.com/developer-docs/)
- [Autenticando-se com usuário e senha na Interface API REST](https://help.vtex.com/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2)
- [Usando os filtros do Gerenciamento de pedidos em sua API](/pt/tutorial/usando-os-filtros-do-oms-em-sua-api/)
- [Tabela de status de pedidos (todas as interfaces)](/pt/faq/tabela-de-status-de-pedidos-omsmeus-pedidospci-gatewayapi-restwebservice/)

### Web Service

>⚠️ O Web Service VTEX deve ser usado o mínimo possível para os processos de integração.

Com exceção do Catálogo (Categorias, Marcas, Produtos e SKUs), que está com sua API REST em desenvolvimento, todos os outros módulos da VTEX possuem APIs REST bem definidas e de alta performance.

Nosso webservice trabalha com uma biblioteca de WSDL completa e fácil de adaptação para as integrações em diferentes tipos de programações. Nessa, teremos todos os métodos hoje disponível para as diferentes aplicações para com os recursos de sua organização.

Assim como a interface de API REST, essa interface possui suas particularidades em relação a autenticação, versões, tipos de dados, estre outras.

Veja abaixo documentações para auxiliarem a iniciar as integrações pela Interface de Web Service:

- [Integração de ERPs com lojas VTEX](http://vtex.github.io/docs/integracao/erp/index.html)
- [Como se autenticar no Webservice](/pt/faq/como-criar-usuario-webservice/)
- [Utilizando o SOAP UI para reproduzir cenário do Web Service](http://help.vtex.com/pt/tutorial/testando-webservice-com-soapui/)
- [Manual das Classes e Métodos usados no WebService](http://help.vtex.com/pt/tutorial/manual-das-classes-e-metodos-usados-no-webservice/)


