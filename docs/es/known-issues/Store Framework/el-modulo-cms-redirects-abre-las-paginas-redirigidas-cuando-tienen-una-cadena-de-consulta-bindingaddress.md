---
title: 'El módulo CMS Redirects abre las páginas redirigidas cuando tienen una cadena de consulta bindingAddress'
id: 2qYP0Jfxx6TxmR75YjALtk
status: PUBLISHED
createdAt: 2024-10-10T19:11:34.872Z
updatedAt: 2024-10-11T13:32:27.904Z
publishedAt: 2024-10-11T13:32:27.904Z
firstPublishedAt: 2024-10-10T19:11:36.240Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: cms-redirects-module-does-open-redirects-pages-when-they-have-a-bindingaddress-query-string
locale: es
kiStatus: Backlog
internalReference: 1115321
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se navega por una tienda con una cadena de consulta de dirección vinculante (principalmente tiendas transfronterizas), y se intenta abrir una redirección específica a través del módulo CMS Redirects, la página no se abre. Esto ocurre porque la consulta realizada a rewriter cuenta la querystring como parte de la variable a buscar:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/el-modulo-cms-redirects-abre-las-paginas-redirigidas-cuando-tienen-una-cadena-de-consulta-bindingaddress_1.png)

Esta búsqueda errónea conduce al KI: 729503 que afecta a las redirecciones construidas con cadenas de consulta.


##

## Simulación


Intente abrir una redirección en una tienda transfronteriza o en cualquier tienda con una cadena de consulta bindingAddress.



## Workaround


Gestione sus redirecciones a través de CLI u hoja de cálculo





