---
title: 'Cómo funciona el flujo para guardar documentos'
id: 1abjrkwcROMUyiEoEkmCWE
status: ARCHIVED
createdAt: 2017-12-10T17:32:00.685Z
updatedAt: 2022-08-04T22:35:40.821Z
publishedAt: 
firstPublishedAt: 2017-12-10T17:39:18.212Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slugEN: how-the-documents-saving-flow-works
locale: es
legacySlug: como-funciona-el-flujo-para-salvar-documentos
subcategoryId: 5gtjaqCG7eIseyCI0aSqc2
---

La siguiente imagen muestra el flujo para guardar documentos en Master Data. Vamos a explicar cada paso.

![Save flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Master%20Data/Master%20Data's%20overview/como-funciona-el-flujo-para-salvar-documentos_1.png)

#### Guardar llamada de API
Ocurre cuando el usuario llama a la API para guardar documentos (POST, PUT o PATCH).
#### Resolve ID
Agregar un ID al documento. Si el ID no existe en el contenido, Master Data intenta obtener el documento por índice (clave alternativa). Si el documento por índice no existe, se crea un nuevo identificador.
#### Validar Schema
Validar el contenido con JSON Schema (si el parámetro `_schema` existe en la consulta).
#### Lock
Después de este paso, sólo una operación se puede realizar por ID o clave alternativa.
#### Obtener campos cambiados
Obtener la última versión del documento en la base de datos y compararlo con el contenido. Si hay algún cambio, se avanza hacia el siguiente paso.
#### Validar la Cláusula de Condición
Si pasa el parámetro `_where` en la consulta, Master Data realizará la validación en este momento.
#### Persistencia en la base de datos
Guardar el documento en la base de datos.
#### Enfilear para el proceso del worker
Enfilear la operación. Algun tiempo después, el *Background Worker* iniciará las operaciones de backgroud (validación con otros schemas e indización).
