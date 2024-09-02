---
title: 'Los caracteres invisibles en los nombres de categoría provocan errores de "página no encontrada".'
id: 4np2BZUF1EmlLmV0KTpnrf
status: PUBLISHED
createdAt: 2024-07-05T13:11:13.031Z
updatedAt: 2024-07-05T13:11:14.090Z
publishedAt: 2024-07-05T13:11:14.090Z
firstPublishedAt: 2024-07-05T13:11:14.090Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: los-caracteres-invisibles-en-los-nombres-de-categoria-provocan-errores-de-pagina-no-encontrada
locale: es
kiStatus: Backlog
internalReference: 1061149
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al crear categorías a través de la API o del panel de administración, el nombre de la categoría no se valida correctamente, lo que permite incluir caracteres invisibles. Dado que el nombre de la categoría se utiliza para generar la URL de la categoría, estos caracteres invisibles también se incluyen en la URL. Esto provoca que la página de la categoría no funcione correctamente y devuelva un error de "Página no encontrada".


##

## Simulación



1. Crea una categoría con un carácter invisible en su nombre utilizando la API o el panel de administración.
2. Acceda a la URL de la API para esta categoría.
3. Observe el error "Página no encontrada".



## Workaround



La solución consiste en eliminar el carácter invisible del nombre de la categoría, lo que también actualizará la URL de la página, resolviendo el problema.




