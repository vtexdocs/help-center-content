---
title: 'La validación de la API de actualización y creación de archivos adjuntos en el campo DomainValues no funciona.'
id: 1NAwwi7C65xM2G61uaTLrB
status: PUBLISHED
createdAt: 2023-02-09T16:10:03.814Z
updatedAt: 2024-07-01T18:48:48.654Z
publishedAt: 2024-07-01T18:48:48.654Z
firstPublishedAt: 2023-02-09T16:10:04.449Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-validacion-de-la-api-de-actualizacion-y-creacion-de-archivos-adjuntos-en-el-campo-domainvalues-no-funciona
locale: es
kiStatus: No Fix
internalReference: 751091
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A través de la interfaz de usuario (directamente en VTEX admin) es posible crear un archivo adjunto sin el campo **Valores permitidos** lleno:
 ![](https://vtexhelp.zendesk.com/attachments/token/8rFw6593yoVr64CViajezsXW0/?name=image.png)

Sin embargo, a través de la API existe esta validación para este campo:

    <Error> <Mensaje>DomainValues en Domain en la posición 0 no puede ser nulo o un valor vacío</Mensaje></Error>


Lo que significa que no se puede crear un adjunto como este:

    { "Id": 6, "Name": "Test", "IsRequired": false, "IsActive": true, "Domains": [ { "FieldName": "test", "MaxCaracters": "20", "DomainValues": ""      }  ]}




##

## Simulación



## Workaround



