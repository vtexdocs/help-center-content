---
title: 'Diferencias entre el valor de especificación en las API y el portal'
id: 29Utcf4B7PBZitEHxrZwbE
status: PUBLISHED
createdAt: 2023-06-29T20:11:49.484Z
updatedAt: 2023-07-06T13:41:29.683Z
publishedAt: 2023-07-06T13:41:29.683Z
firstPublishedAt: 2023-06-29T20:11:50.157Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: differences-between-specification-value-on-apis-and-portal
locale: es
kiStatus: Backlog
internalReference: 853184
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente estas dos APIs ("api/catalog" y "api/catalog_system" GET Specification Value) están consultando diferentes tablas en la base de datos de catálogos. Se supone que los valores son los mismos en ambas tablas, sin embargo los escenarios con caracteres especiales pueden divergir.

Esto también se refleja en el Portal y en los PDP, ya que la información se está generando basándose en la tabla incorrecta. Los caracteres especiales aparecen como "????" en el frontend.


##

## Simulación



## Workaround



