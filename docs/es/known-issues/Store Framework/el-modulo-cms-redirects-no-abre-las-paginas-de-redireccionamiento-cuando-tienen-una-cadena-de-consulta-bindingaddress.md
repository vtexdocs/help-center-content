---
title: "El módulo CMS Redirects no abre las páginas de redireccionamiento cuando tienen una cadena de consulta bindingAddress"
id: 2qYP0Jfxx6TxmR75YjALtk
status: PUBLISHED
createdAt: 2024-10-10T19:11:34.872Z
updatedAt: 2024-11-28T17:29:31.405Z
publishedAt: 2024-11-28T17:29:31.405Z
firstPublishedAt: 2024-10-10T19:11:36.240Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: el-modulo-cms-redirects-no-abre-las-paginas-de-redireccionamiento-cuando-tienen-una-cadena-de-consulta-bindingaddress
locale: es
kiStatus: Backlog
internalReference: 1115321
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se navega por una tienda con una cadena de consulta de dirección vinculante (principalmente tiendas transfronterizas), y se intenta abrir una redirección específica a través del módulo CMS Redirects, la página no se abre. Esto ocurre porque la consulta realizada a rewriter cuenta la querystring como parte de la variable a buscar:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Store%20Framework/el-modulo-cms-redirects-no-abre-las-paginas-de-redireccionamiento-cuando-tienen-una-cadena-de-consulta-bindingaddress_1.png)

Esta búsqueda errónea conduce al KI: 729503 que afecta a las redirecciones construidas con cadenas de consulta.


##

## Simulación


Intente abrir una redirección en una tienda transfronteriza o en cualquier tienda con una cadena de consulta bindingAddress.



## Workaround


Gestione sus redirecciones a través de CLI u hoja de cálculo





