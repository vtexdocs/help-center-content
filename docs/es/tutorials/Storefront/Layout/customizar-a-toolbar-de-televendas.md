---
title: 'Personalizar la toolbar de Televentas'
id: 1XEz1zqO3KyIuwC4asUsOg
status: PUBLISHED
createdAt: 2017-10-06T15:54:18.649Z
updatedAt: 2021-11-30T18:20:26.153Z
publishedAt: 2021-11-30T18:20:26.153Z
firstPublishedAt: 2017-10-06T15:55:58.368Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: customizar-a-toolbar-de-televendas
locale: es
legacySlug: customizar-a-toolbar-de-televendas
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-warning">No se recomienda cambiar la altura del elemento HTML de la toolbar. Se tu tienda tiene un header fijo en la parte superior de la pantalla, hay que utilizar la propiedade css `top` con la altura necesaria para evitar sobreposición entre el header y la barra</div>


La nueva toolbar de televentas puede ser personalizada con los estilos de su tienda o con javascript. Para anular los estilos originales de la toolbar, es necesario hacer la personalización en un archivo **.css** o **.js** y cargarlo en en template de la página.

Para personalizar los estilos de la toolbar, use las clases abajo:


```
.cc-toolbar //Elemento más exterior de la toolbar
.cc-user //Sección con el e-mail del usuario (operador)
.cc-customer //Sección con el e-mail del cliente personificado
.cc-btn-login //Botón de login para personificar cliente
.cc-impersonate //Pop-up con formulario para input del e-mail del cliente
.cc-btn-change //Botón de login para cambiar de cliente personificado
```

Para interactuar con la barra a través de javascript, utilize los IDs abajo como hooks para acceder a sus diferentes elementos en el DOM:

```
#vtex-callcenter //Elemento más exterior de la toolbar
#vtex-callcenter__user-email //Elemento del e-mail del usuario (operador)
#vtex-callcenter__customer-email //Elemento del e-mail del cliente
#vtex-callcenter__customer-email-input //Elemento de input del e-mail del cliente
#vtex-callcenter__customer-login-submit //Elemento de submit del input del e-mail del cliente
``` 

También puedes interactua con la barra utilizando elementos públicos de Javascript:

```
// Login de personificación de cliente
window.cc.impersonate(customer_email)
```

(Donde `customer_email` é una string con el email del cliente)


```
// Logout de personificación de cliente
window.cc.customerLogout()
```
(Retorna `true` si haces logout, retorna `false` si no havia cliente personificado)
