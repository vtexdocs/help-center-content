---
title: 'Control de mensaje de bienvenida'
id: 2YESFUOMCQSs86uUC2aEkQ
status: PUBLISHED
createdAt: 2018-02-07T13:50:22.318Z
updatedAt: 2019-12-31T15:19:24.685Z
publishedAt: 2019-12-31T15:19:24.685Z
firstPublishedAt: 2018-02-07T17:03:19.936Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: welcome-message-control
locale: es
legacySlug: control-de-mensaje-de-bienvenida
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El control `<vtex.cmc:welcomeMessage/>` renderiza un mensaje de bienvenida, que se debe utilizar en la barra superior de la tienda.

Vea un ejemplo en la siguiente imagen.

![welcome1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Código HTML renderizado

A continuación se muestra un ejemplo del código renderizado por este control:

```html
<div class="welcome col-xs-5">
	<script>
	    $(document).ready(function () {
	        vtexid.setScope('1acde8b8-c134-45ca-bda6-8496f39d6734');
	        vtexid.setScopeName('lojadobreno');
	        $('body').on('click', '#login', function () {
	            vtexid.start(
	                    {
	                        returnUrl: '/produto-teste/p',
	                        userEmail: '',
	                        locale: 'en-US',
	                        forceReload: false
	                    });
	        });
	    });
	</script>
	<div class="ajax-content-loader" rel="/no-cache/user/welcome">
	    <p class="welcome">
	    Bem-vindo!
	    <em><a id="login">Já é cadastrado?
	    </a></em>
	    </p>
	</div>
</div>
```

## Script de activación de login

Tenga en cuenta que el control renderiza un código HTML con el mensaje de bienvenida y también un script.

Este script se activa cuando el usuario hace clic en el elemento de ID `"login"`, que por defecto viene con el mensaje "Já é cadastrado?" ("¿Ya está registrado?"), y es responsable de llevar al usuario a la pantalla de login.

## Cookie

El script renderizado por el control también crea una cookie responsable de informar a la tienda que el usuario está conectado.

Otros servicios de VTEX utilizan el mismo cookie (por ejemplo, el de evaluaciones de productos), y así tienen que pedir de nuevo que el usuario inicie sesión.

En el script del ejemplo anterior, el método que crea este cookie es `vtexid.setScope()`.

Aún siguiendo el ejemplo anterior, el cookie creado sería el siguiente: `userGUID=1acde8b8-c134-45ca-bda6-8496f39d6734`
