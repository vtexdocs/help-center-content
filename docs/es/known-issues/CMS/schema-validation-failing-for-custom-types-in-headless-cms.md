---
title: 'Fallo de validación de esquema para tipos personalizados en Headless CMS'
id: 2dcDsFQkqbNqJZXEzztQ11
status: PUBLISHED
createdAt: 2023-09-19T21:43:59.145Z
updatedAt: 2023-09-19T21:43:59.945Z
publishedAt: 2023-09-19T21:43:59.945Z
firstPublishedAt: 2023-09-19T21:43:59.945Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: fallo-de-validacion-de-esquema-para-tipos-personalizados-en-headless-cms
locale: es
kiStatus: Backlog
internalReference: 903687
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Tenemos validaciones de esquema que fallan en campos requeridos sin valor por defecto en Headless CMS para tipos de página personalizados, la librería que usamos está considerando que falla pero los campos requeridos se rellenan correctamente


##

## Simulación



Crear una estructura de esquema para una página específica con un campo obligatorio y no poner un valor por defecto para este campo obligatorio


    ... "obligatorio": ["field1"],"properties": {"field1": {"title": "campo", "type": "string", "description": "Some description" }}...



##

## Workaround


Ponga un valor por defecto en los campos obligatorios





