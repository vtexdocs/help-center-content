---
title: 'SKU admin se rompe al enviar un código de referencia de más de 50 caracteres'
id: 3AhyVsOpwkRUEHT77Wcc1A
status: PUBLISHED
createdAt: 2023-08-21T17:52:27.931Z
updatedAt: 2023-08-21T17:52:28.799Z
publishedAt: 2023-08-21T17:52:28.799Z
firstPublishedAt: 2023-08-21T17:52:28.799Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: sku-admin-se-rompe-al-enviar-un-codigo-de-referencia-de-mas-de-50-caracteres
locale: es
kiStatus: Backlog
internalReference: 884789
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se espera que el usuario pueda cambiar el código de referencia de la SKU utilizando el admin. Sin embargo, cuando se introduce un valor de más de 50 caracteres, el administrador se bloquea y muestra un mensaje de error.


##

## Simulación



- Ir al admin de una SKU: `/admin/Site/SkuForm.aspx?IdSku=`
- Ir al campo **Código de referencia** y poner un valor con más de 50 caracteres como:

    ABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEW

- Haga clic en salve
- Aparecerá un mensaje "algo ha ido mal" en la parte frontal.



## Workaround


No envíe más de 50 caracteres en el campo **Código de referencia** de una SKU




