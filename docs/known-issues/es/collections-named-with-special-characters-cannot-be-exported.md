---
title: 'Las colecciones nombradas con caracteres especiales no se pueden exportar'
id: 516zuwek2Gfwd0U99si2XU
status: PUBLISHED
createdAt: 2023-08-22T12:46:46.230Z
updatedAt: 2023-12-12T14:21:31.164Z
publishedAt: 2023-12-12T14:21:31.164Z
firstPublishedAt: 2023-08-22T12:46:46.895Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: las-colecciones-nombradas-con-caracteres-especiales-no-se-pueden-exportar
locale: es
kiStatus: Backlog
internalReference: 683343
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se espera que una colección pueda ser exportada en el admin. Sin embargo, las colecciones con nombres que contienen símbolos como `$` , `+` o `,` no se pueden exportar.


##

## Simulación



- Crear una colección con `$` , `+` o `,` en el nombre
- Intente exportar la colección
- Aparecerá un error en el admin



## Workaround


Elimine el carácter




