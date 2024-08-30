---
title: 'Guia de integração de ERPs'
id: 3VuOwNLmb624ImooEIIkmO
status: DRAFT
createdAt: 2017-09-11T20:55:01.200Z
updatedAt: 2020-06-04T01:06:47.552Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:05:36.380Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: guia-de-integracao-de-erps
locale: pt
legacySlug: guia-de-integracao-de-erps
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

>❗ Este guia de integração está desatualizado e será arquivado em **junho de 2020**. Não recomendamos o uso do Webservice desde o lançamento da [nova API do Catálogo](https://developers.vtex.com/changelog/new-endpoints-available-in-catalog-api" target="_blank). Confira o [novo guia de integração para ERP](https://developers.vtex.com/docs/erp-integration-guide" target="_blank) disponível no nosso Developer Portal.

A integração de ERPs com lojas VTEX é realizada através de webservice (SOAP:XML), e API REST (JSON). O [webservice VTEX](https://help.vtex.com/tutorial/manual-das-classes-e-metodos-usados-no-webservice--tutorials_749) deve ser usado o mínimo possível para os processos de integração. Hoje com exceção do **catálogo**, todos os outros módulos da VTEX possuem APIs REST bem definidas e de alta performance.

Conheça mais sobre nossas [interfaces de integração](http://help.vtex.com/pt/tutorial/interfaces-de-integracao).

## Integração rápida de catálogo

Uma integração expressa, somente com os fluxos básicos e necessários. Saiba mais [aqui](/pt/tutorial/guia-de-integracao-de-erps-catalogo-expresso).

## Integração completa de Catálogo

Uma integração completa, a maioria dos fluxos, envolve mais esforço na implementação. Saiba mais [aqui](/pt/tutorial/guia-de-integracao-de-erps-catalogo-completo)

## Integração de preços

A atualização dos preços na loja deve ser feita através da API REST de Pricing, disponíveis no [Developer Docs](https://developers.vtex.com/reference/pricing-api-overview).

## Integração de estoque

A atualização dos estoques da loja deve ser feita através da API REST de Logistics, disponíveis no [Developer Docs](http://help.vtex.com/developer-docs/).

## Integração de pedidos

O ERP busca uma lista de pedidos disponíveis para integração, busca cada pedido na VTEX e insere no ERP, avisa a VTEX que o pedido está no ERP. Depois o ERP envia Nota Fiscal e Tracking para a VTEX. Saiba mais [aqui](/pt/tutorial/guia-de-integracao-de-erps-pedidos).


### Pooling

O envio ou consumo de dados num processo de integração deve ser executado somente quando necessário, ou seja, o dado só deve ser enviado do ERP para a plataforma VTEX quando ele realmente for alterado.

É aconselhado **NÃO** fazer uma integração que varre entidades inteiras do ERP e atualiza todos os dados na plataforma VTEX de tempos  em tempos. Além de consumir e processar dados desnecessariamente, isso não funcionaria para lojas com mais de 5 mil SKUs no catálogo.

### Ferramentas de Apoio ao Integrador

Recomendamos algumas ferramentas que são de extrema importância para qualquer integrador:

#### SoapUI

Esta ferramenta é muito importante no processo de integração, pois ela permite simular os métodos do webservice, gerando automaticamente o request XML.

Saiba mais em: [Testar Web Service com SoapUI](/pt/tutorial/testando-webservice-com-soapui).

#### Postman

Ferramenta que permite testar, armazenar histórico, salvar coleções de requests do acesso de todas as APIs dos modulos VTEX  (OMS, Logistics, Pricing, GCS, etc).

É de suma importância que o integrador tenha o conhecimento de ferramentas desse tipo, ou outras parecidas antes de inciar um processo de integração usando webservice SOAP ou APIs REST VTEX.

## Acesso e Credenciais

Toda chamada feita ao web service deve ser em "https" e um usuário e senha são exigidos para iniciar a conexão. As chamadas para as APIs REST também devem ser feitas em "https" e devem conter em seu header as chaves de autenticação.

O endpoint do webservice para trabalhar com os métodos de catálogo é `https://webservice-ACCOUNTNAME.vtexcommerce.com.br/service.svc?wsdl`. As APIs REST possuem seus próprios endpoints em `https://api.vtex.com`.

- [Como configurar usuários pro webservice](/pt/faq/como-criar-usuario-webservice)
- [Como se autenticar na API](/pt/faq/como-autenticar-na-api)

Para fins de rastreabilidade, cada integração (diferentes sistemas ou ERP) deve possuir seu usuário exclusivo.

Nota: O webservice VTEX trabalha com esquema de escalonamento na demanda, podendo assim escalar novas máquinas de acordo com a demanda de acesso. Por esse motivo, clients instalados em sistemas operacionais que fazem caches longos de DNS não são suportados (Windows XP, Windows Server 2003, versões antigas de Apache).
