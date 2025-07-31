---
title: "El indexador de catálogos genera documentos de traducción no válidos"
id: 3pbXOA3DQILdu05tAwjlVM
status: PUBLISHED
createdAt: 2024-02-29T18:02:38.600Z
updatedAt: 2025-07-24T17:50:39.534Z
publishedAt: 2025-07-24T17:50:39.534Z
firstPublishedAt: 2024-02-29T18:02:39.430Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-indexador-de-catalogos-genera-documentos-de-traduccion-no-validos
locale: es
kiStatus: No Fix
internalReference: 991494
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se indexa un producto con información traducida, se consulta la aplicación Mensajes. Se supone que estas peticiones deben durar menos de 3s, y cuando tardan más, la indexación falla y genera un documento de traducción no válido.

Este escenario generará errores en el historial de indexación con el mensaje "translations is smaller than context".


##

## Simulación


No hay una manera fácil de reproducir este escenario, pero las cuentas con muchos idiomas o muchos campos para traducir son más susceptibles a este escenario.



## Workaround


N/A




