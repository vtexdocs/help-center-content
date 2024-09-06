---
title: 'Error 400 (Bad Request) al acceder a la página de filtro con carácter especial en el valor'
id: 1mHUPIG42A0UUoAwac8IYE
status: PUBLISHED
createdAt: 2017-09-18T19:12:57.298Z
updatedAt: 2022-12-22T20:45:33.631Z
publishedAt: 2022-12-22T20:45:33.631Z
firstPublishedAt: 2017-09-18T19:28:01.968Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: error-400-bad-request-al-acceder-a-la-pagina-de-filtro-con-caracter-especial-en-el-valor
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al aplicar un filtro por especificación (menú lateral) con carácter especial, el sistema devuelve una pantalla blanca con el siguiente error 400: "Bad Request! Scripts are not allowed!"



## Simulación

Para simular el comportamiento:

1. Configure un valor de campo (especificación de producto o SKU) con carácter especial (paréntesis, por ejemplo) en cualquier categoría;
2. En el catálogo, seleccione un producto de la categoría y lo configure con el valor de especificación creado en el primer paso. Guarde el producto.
3. Espere la indexación;
4. Acceda a la categoría directamente por el sitio;
5. En el filtro lateral (control SearchResult), haga clic en el valor de especificación (filtro) configurado con el carácter especial;
6. Error 400: Bad Request! Scripts are not allowed!

## Workaround

Para evitar el problema, siempre que posible no utilize caracteres especiales en los valores de especificación de producto y/o SKU.

