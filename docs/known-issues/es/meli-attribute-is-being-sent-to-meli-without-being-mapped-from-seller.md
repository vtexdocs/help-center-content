---
title: '[MELI] El atributo se envía a MELI sin que el vendedor lo asigne.'
id: CILYWlvEAlXkcvEYuZ99m
status: PUBLISHED
createdAt: 2023-10-30T10:09:31.578Z
updatedAt: 2023-11-30T11:05:05.907Z
publishedAt: 2023-11-30T11:05:05.907Z
firstPublishedAt: 2023-10-30T10:09:32.150Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-el-atributo-se-envia-a-meli-sin-que-el-vendedor-lo-asigne
locale: es
kiStatus: Fixed
internalReference: 791380
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema que todavía necesita más investigación y detalles, Pero hay algunas categorías mapeadas dentro de la característica Mapper, y para algunos atributos que no fueron mapeados pero que actualmente están siendo enviados a MELI.

Esto resultará en que algunos SKUs serán exportados y otros no ya que el primer SKU incluye un atributo no deseado, y el segundo SKU no será exportado ya que MELI tiene reglas que requieren que todas las variantes dentro del mismo producto deben tener las mismas combinaciones de atributos.



## Simulación



Dentro del menú de productos puente, verá un error para algunos SKUs como se ve a continuación:
**No se permiten variaciones con diferentes combinaciones de atributos.**

Esto se debe a que el primer SKU exportado tiene un atributo no deseado, y el resto de SKUs no están siendo enviados a ese atributo.



## Workaround


¿Existe alguna solución para este error? En caso afirmativo, descríbala aquí. En caso negativo, escriba "N/A" o "No hay solución disponible". No elimine esta sección si no hay solución, por favor.





