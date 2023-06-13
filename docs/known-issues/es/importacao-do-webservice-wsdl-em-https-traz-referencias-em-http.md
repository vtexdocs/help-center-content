---
title: Importación del webservice (WSDL) en HTTPS trae referencias en HTTP
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

## Sumario

Al importar el WSDL del webservice en HTTPS (https://webservice-\[tienda].vtexcommerce.com.br/service.svc?wsdl) se muestran referencias en HTTP.

Algunos ambientes de desarrollo pueden presentar errores 401 (usuario no autorizado) por cuenta de ello, como el siguiente ejemplo de mensaje:

```
The document was understood, but it could not be processed.
  - The WSDL document contains links that could not be resolved.
  - There was an error downloading 'http://webservice-[Tienda].vtexcommerce.com.br/AdminWebService/Service.svc?xsd=xsd2'.
  - The request failed with HTTP status 401: Access Denied.
Metadata contains a reference that cannot be resolved: 'https://webservice-[Tienda].vtexcommerce.com.br/service.svc?wsdl'.
The HTTP request is unauthorized with client authentication scheme 'Anonymous'. The authentication header received from the server was 'Basic Realm="Please Login to VtexID"'.
The remote server returned an error: (401) Unauthorized.
If the service is defined in the current solution, try building the solution and adding the service reference again.
```

## Simulación

En su ambiente de desarrollo, basta con importar el WSDL como en el ejemplo anterior. Aunque su autenticación esté configurada, es posible que errores de autorización se presenten para links adicionales.

## Workaround

La importación y configuración de autenticación se realizaron a la dirección `https://webservice-[Tienda].vtexcommerce.com.br/service.svc?wsdl`, y el error se presentó a la dirección `http://webservice-[Tienda].vtexcommerce.com.br/AdminWebService/Service.svc?xsd=xsd2` (que es una referencia del WSDL inicial).

Para evitar este problema, sólo hay que configurar la autenticación también para estos WSDL adicionales, o simplemente importar el WSDL inicial ya en HTTP.

Posteriormente, tenga atención en actualizar las referencias a HTTPS. Para la seguridad de la información, es esencial que los intercambios de datos sean estrictamente por HTTPS.

