---
title: 'La solución SAML no permite enviar el SAMLRequest como query string en el login del CRM'
id: 55LggncuX9oIB0PNS6q7jY
status: PUBLISHED
createdAt: 2023-04-13T14:23:33.505Z
updatedAt: 2023-04-13T14:23:34.141Z
publishedAt: 2023-04-13T14:23:34.141Z
firstPublishedAt: 2023-04-13T14:23:34.141Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: the-saml-solution-doesnt-allow-sending-the-samlrequest-as-query-string-in-the-crm-login
locale: es
kiStatus: Backlog
internalReference: 789146
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos proveedores SAML necesitan recibir parámetros como query string, pero nuestra solución SAML no permite enviar estos parámetros (como parámetros SAMLRequest y SAMLResponse) como query string en el login CRM porque el sistema CRM utiliza una versión del sistema de login, que no soporta esta característica.


##

## Simulación



## Workaround



