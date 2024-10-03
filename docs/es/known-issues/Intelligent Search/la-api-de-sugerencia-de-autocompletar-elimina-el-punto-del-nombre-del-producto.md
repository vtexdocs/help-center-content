---
title: "La API de sugerencia de autocompletar elimina el punto '.' del nombre del producto"
id: 55185IvERIwGQ3kH6H510O
status: PUBLISHED
createdAt: 2024-04-10T13:58:51.138Z
updatedAt: 2024-04-10T13:58:52.084Z
publishedAt: 2024-04-10T13:58:52.084Z
firstPublishedAt: 2024-04-10T13:58:52.084Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-suggestion-api-removes-the-dot-from-the-product-name
locale: es
kiStatus: Backlog
internalReference: 1014701
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Este problema se produce cuando se busca un término y la sugerencia de autocompletar devuelve el nombre del producto sin el carácter de punto ".", aunque exista en el nombre del producto, lo que da lugar a resultados de búsqueda incorrectos.


##

## Simulación



1. GET` https://..com.br/api/io/_v/api/intelligent-search/autocomplete_suggestions?query=`.
2. Observa las sugerencias de autocompletar que te proporciona el sistema.
3. Observe que falta el carácter punto en el nombre del producto seleccionado.

Por ejemplo, si se busca el término "auriculares" en la API de sugerencias de autocompletar, los resultados de la sugerencia, si contienen un punto en el nombre, se mostrarán como "Auriculares Bluetooth 5 0" en lugar de tener el punto en el número "5.0". El formato correcto debería ser "Auriculares Bluetooth 5.0".

Cuando se utilice esta sugerencia en la API product_search, no devolverá resultados.



## Workaround


N/A





