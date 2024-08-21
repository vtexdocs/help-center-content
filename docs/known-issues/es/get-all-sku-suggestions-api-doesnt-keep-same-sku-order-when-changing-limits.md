---
title: "La API 'Obtener todas las sugerencias de SKU' no mantiene el mismo orden de SKU al cambiar los límites."
id: 4wQbZm9rFc8iD2xYwEiAlQ
status: PUBLISHED
createdAt: 2022-12-05T14:49:46.856Z
updatedAt: 2024-03-01T21:06:12.857Z
publishedAt: 2024-03-01T21:06:12.857Z
firstPublishedAt: 2022-12-05T14:49:47.309Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: la-api-obtener-todas-las-sugerencias-de-sku-no-mantiene-el-mismo-orden-de-sku-al-cambiar-los-limites
locale: es
kiStatus: No Fix
internalReference: 367187
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



La API "Obtener todas las sugerencias de SKU" tiene un límite de 20 skus por página.

Documentación de la API: https://developers.vtex.com/vtex-rest-api/reference/get-suggestions#getsuggestions

En el día a día esto perturba el funcionamiento del Marketplace porque cada vez que el marketplace hace una petición cambiando los límites para obtener los siguientes 20 skus, el orden de los skus también cambia y esto da la impresión de tener skus duplicados.

Al solicitar esta API utilizando parámetros de consulta como "sellerId" se produce este comportamiento. Al solicitar la API sin parámetros de consulta, es posible utilizar el recurso "Next" para evitar este problema.



###

## Simulación



1. Solicite la API "Obtener todas las sugerencias de SKU" utilizando los parámetros de consulta: "sellerId";
2. Cambia los límites en los params "**_de "** y "**_a "** para obtener los siguientes skus;
3. 3. Compruebe si en esta página hay una SKU que ya aparecía en las páginas anteriores.





## Workaround



Para evitar esta situación, utilice la hoja de cálculo de exportación en la interfaz de usuario o utilice la API sin parámetros.

