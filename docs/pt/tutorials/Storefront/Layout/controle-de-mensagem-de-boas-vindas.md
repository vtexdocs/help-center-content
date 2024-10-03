---
title: 'Controle de mensagem de boas vindas'
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
locale: pt
legacySlug: controle-de-mensagem-de-boas-vindas
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O controle `<vtex.cmc:welcomeMessage/>` renderiza uma mensagem de boas vindas, que deve ser usada na topbar da loja.

Veja um exemplo na imagem abaixo.

![welcome1](https://images.contentful.com/alneenqid6w5/2z4iyUDAm0muKc4OCOUOa2/9e6f37d39596161bfe1721effdceb692/welcome1.png)

## Código HTML renderizado

Veja abaixo um exemplo do código renderizado por esse controle:

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

## Script de acionamento do login

Note que o controle renderiza um código HTML com a mensagem de boas vindas e também um script.

Esse script é acionado quando o usuário clica no elemento de id `"login"`, que por padrão vem com a mensagem "Já é cadastrado?", e é responsável por levar o usuário para a tela de login.

## Cookie

O script renderizado pelo controle também cria um cookie responsável por informar à loja que o usuário está logado. 

Outros serviços da VTEX usam o mesmo cookie (por exemplo, o de avaliações de produtos), e assim não preciam pedir novamente que o usuário faça login.

Veja no script do exemplo acima que o método que cria esse cookie é o `vtexid.setScope()`.

Ainda seguindo o exemplo acima, o cookie criado seria o seguinte: `UsuarioGUID=1acde8b8-c134-45ca-bda6-8496f39d6734`
