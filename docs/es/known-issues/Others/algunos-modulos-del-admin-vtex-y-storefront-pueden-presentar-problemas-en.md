---
title: "Algunos módulos del Admin VTEX y storefront pueden presentar problemas en Firefox 89.0"
id: 10BUSPqviNy4VQzuIbllKL
status: PUBLISHED
createdAt: 2021-06-08T17:54:36.813Z
updatedAt: 2022-12-22T15:07:43.284Z
publishedAt: 2022-12-22T15:07:43.284Z
firstPublishedAt: 2021-06-08T19:41:46.005Z
contentType: knownIssue
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Checkout,Payments,Store Framework
slugEN: algunos-modulos-del-admin-vtex-y-storefront-pueden-presentar-problemas-en
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Algunos módulos del Admin VTEX pueden no cargar en Firefox 89.0 debido a la nueva opción de «Protección antirrastreo mejorada» del navegador, que está activada de forma predeterminada.

Este problema también puede afectar el storefront y la página de checkout cuando los clientes finales accedan a la tienda a través de Firefox 89.0.


## Simulación

Si usted o los clientes de su tienda han actualizado su navegador Firefox a la versión 89.0, es probable que su tienda y algunos módulos del Admin VTEX no se carguen.


## Workaround

Para solucionar este problema, debe desactivar la opción de rastreo:
1. Acceda a su __Admin VTEX, o tienda__, a través de Firefox 89.0.
2. Haga clic en el ícono de __escudo__ junto a la URL.
3. __Desactive__ la opción `«La protección antirrastreo mejorada está activada en el sitio»`.

No se preocupe: desactivar esta opción no significa que su tienda estará desprotegida.

<div class= "alert alert-info">
Si después de estos pasos su Admin VTEX o tienda aún no se carga, le sugerimos que intente acceder con otro navegador.
</div>

![Firefox bug ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Others/algunos-modulos-del-admin-vtex-y-storefront-pueden-presentar-problemas-en_1.jpg)

