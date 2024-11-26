---
title: 'Welcome message control'
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
locale: en
legacySlug: welcome-message-control
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

The control `<vtex.cmc:welcomeMessage/>` renders a welcome message, which should be used in the store topbar.

See an example in the image below.

![welcome1](https://images.contentful.com/alneenqid6w5/2z4iyUDAm0muKc4OCOUOa2/9e6f37d39596161bfe1721effdceb692/welcome1.png)

## HTML code rendered

Here is an example of the code rendered by this control:

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

## Login trigger script

Note that the control renders an HTML code with the welcome message and also a script.

This script is triggered when the user clicks on the element with ID `"login"`, which by default comes with the message "Já é cadastrado?" ("Already registered?"), and is responsible for taking the user to the login screen.

## Cookie

The script rendered by the control also creates a cookie responsible for informing the store that the user is logged in.

Other VTEX services use the same cookie (for example, product reviews), so they don't need to ask the user to sign in again.

See in the example script above that the method which creates this cookie is `vtexid.setScope()`.

Still following the example above, the cookie created would be the following: `UserGUID=1acde8b8-c134-45ca-bda6-8496f39d6734`
