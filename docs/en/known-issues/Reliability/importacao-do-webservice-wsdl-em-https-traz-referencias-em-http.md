---
title: "Webservice import (WSDL) in HTTPS brings references in HTTP"
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
slugEN: importacao-do-webservice-wsdl-em-https-traz-referencias-em-http
locale: en
kiStatus: Closed
internalReference: 
---

## Summary

When importing the webservice's WSDL in HTTPS (https://webservice-\[store].vtexcommerce.com.br/service.svc?wsdl) references are shown in HTTP.

Some development environments may display 401 errors (unauthorized user) because of this, such as the following message sample:

```
The document was understood, but it could not be processed.
  - The WSDL document contains links that could not be resolved.
  - There was an error downloading 'http://webservice-[Store].vtexcommerce.com.br/AdminWebService/Service.svc?xsd=xsd2'.
  - The request failed with HTTP status 401: Access Denied.
Metadata contains a reference that cannot be resolved: 'https://webservice-[Store].vtexcommerce.com.br/service.svc?wsdl'.
The HTTP request is unauthorized with client authentication scheme 'Anonymous'. The authentication header received from the server was 'Basic Realm="Please Login to VtexID"'.
The remote server returned an error: (401) Unauthorized.
If the service is defined in the current solution, try building the solution and adding the service reference again.
```

## Simulation

In your development environment, just import the WSDL as in the example above. Even though your authentication is configured, it is possible that authorization errors appear for additional links.

## Workaround

The authentication import and configuration was made to the address `https://webservice-[Store].vtexcommerce.com.br/service.svc?wsdl`, and the error was presented to the address `http://webservice-[Store].vtexcommerce.com.br/AdminWebService/Service.svc?xsd=xsd2` (which is an initial WSDL reference).

To work around this problem, simply configure the authentication for these additional WSDLs, or import the initial WSDL already in HTTP.

Subsequently, make sure you update the references for HTTPS. For information security, it is essential that data exchanges happen strictly through HTTPS.

