---
title: 'Importação do webservice (WSDL) em HTTPS traz referências em HTTP'
id: 4dnbERTOWkWAkkmSg4i0w8
status: PUBLISHED
createdAt: 2018-08-06T15:10:50.988Z
updatedAt: 2019-12-31T15:17:21.585Z
publishedAt: 2019-12-31T15:17:21.585Z
firstPublishedAt: 2018-08-06T15:38:43.436Z
contentType: knownIssue
productTeam: Reliability
author: authors_4
tag: Web Service
slug: importacao-do-webservice-wsdl-em-https-traz-referencias-em-http
kiStatus: Closed
internalReference: 
---

## Sumário

Ao importar o WSDL do webservice em HTTPS (https://webservice-[loja].vtexcommerce.com.br/service.svc?wsdl) são apresentadas referências em HTTP.

Alguns ambientes de desenvolvimento podem apresentar erros 401 (usuário não autorizado) por conta disso, como o exemplo de mensagem a seguir:

```
The document was understood, but it could not be processed.
  - The WSDL document contains links that could not be resolved.
  - There was an error downloading 'http://webservice-[Loja].vtexcommerce.com.br/AdminWebService/Service.svc?xsd=xsd2'.
  - The request failed with HTTP status 401: Access Denied.
Metadata contains a reference that cannot be resolved: 'https://webservice-[Loja].vtexcommerce.com.br/service.svc?wsdl'.
The HTTP request is unauthorized with client authentication scheme 'Anonymous'. The authentication header received from the server was 'Basic Realm="Please Login to VtexID"'.
The remote server returned an error: (401) Unauthorized.
If the service is defined in the current solution, try building the solution and adding the service reference again.
```



## Simulação

Em seu ambiente de desenvolvimento, basta a importação do WSDL como no exemplo acima. Ainda que sua autenticação esteja configurada, é possível que erros de autorização sejam apresentados para links adicionais.

## Workaround

A importação e configuração de autenticação foram feitos para o endereço `https://webservice-[Loja].vtexcommerce.com.br/service.svc?wsdl`, e o erro foi apresentado para o endereço `http://webservice-[Loja].vtexcommerce.com.br/AdminWebService/Service.svc?xsd=xsd2` (que é uma referência do WSDL inicial).

Para contornar este problema, basta configurar a autenticação também para estes WSDL adicionais, ou simplesmente importar o WSDL inicial já em HTTP.

Posteriormente, atente-se em atualizar as referências para HTTPS. Para segurança da informação, é essencial que trocas de dados sejam estritamente por HTTPS.

