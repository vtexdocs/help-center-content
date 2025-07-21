---
title: "La solución SAML no permite enviar el SAMLRequest como query string en el login del CRM"
id: 55LggncuX9oIB0PNS6q7jY
status: PUBLISHED
createdAt: 2023-04-13T14:23:33.505Z
updatedAt: 2025-02-05T19:56:21.696Z
publishedAt: 2025-02-05T19:56:21.696Z
firstPublishedAt: 2023-04-13T14:23:34.141Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: la-solucion-saml-no-permite-enviar-el-samlrequest-como-query-string-en-el-login-del-crm
locale: es
kiStatus: Backlog
internalReference: 789146
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunos proveedores SAML necesitan recibir parámetros como query string, pero nuestra solución SAML no permite enviar estos parámetros (como parámetros SAMLRequest y SAMLResponse) como query string en el login CRM porque el sistema CRM utiliza una versión del sistema de login, que no soporta esta característica.


##

## Simulación



## Workaround



