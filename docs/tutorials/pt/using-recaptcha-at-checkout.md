---
title: 'reCAPTCHA no Checkout'
id: 18Te3oDd7f4qcjKu9jhNzP
status: PUBLISHED
createdAt: 2021-08-03T12:53:12.155Z
updatedAt: 2023-03-21T17:52:28.440Z
publishedAt: 2023-03-21T17:52:28.440Z
firstPublishedAt: 2021-08-03T13:51:19.441Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: recaptcha-no-checkout
locale: pt
legacySlug: recaptcha-no-checkout
subcategory: 3shmvletqbB206RqbY2vYQ
---


O reCAPTCHA é uma solução utilizada para validação de usuário real em pedidos que serão pagos com cartão de crédito ou débito. Ele prevê cenários em que programas maliciosos são utilizados para fraudes, evitando acesso de falsos usuários. 

Para dar maior segurança, a VTEX disponibiliza o [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) checkbox e indica aos clientes que o habilitem para proteger a criação e o pagamento de pedidos. Essa versão do reCAPTCHA é otimizada e o usuário deverá apenas clicar no <i class="far fa-check-square"></i> _(checkbox),_ e só será apresentado o desafio de validação caso o Google desconfie do usuário.

A exigência do reCAPTCHA vai seguir a opção configurada pela loja através da [API de configuração do checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Para saber mais sobre a ativação confira este artigo sobre o [uso de reCAPTCHA para integrações](https://developers.vtex.com/vtex-rest-api/docs/recaptcha).

Antes da ativação, é importante atentar-se à:

* **Adequação da interface:** ao ativar a funcionalidade é necessário adequar a interface (web  e mobile) que cria pedidos na conta da sua loja (caso esse passo não seja realizado, a criação dos pedidos será prejudicada). Saiba mais sobre como adequar a interface com o[ guia de reCAPTCHA para integrações.](https://developers.vtex.com/vtex-rest-api/docs/recaptcha)
* **Consequência para a conta**: a habilitação da funcionalidade implica o seu uso em toda conta, incluindo o uso em todas as lojas e subcontas.
* **Realização de testes:** para realizar testes da funcionalidade é necessário uma um [ambiente Beta](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu),e utilizar do [Checkout V6](https://help.vtex.com/pt/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH). 

## Regra de aplicação

A regra de aplicação do reCAPTCHA em compras com cartão pode ter [diferentes configurações](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

A opção recomendada pela VTEX é a [VTEX criteria](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Dessa forma,  será aplicado um algoritmo próprio para decidir a necessidade do desafio de reCAPTCHA. Ele é mantido e evoluído pela VTEX, sendo mais ou menos abrangente conforme os padrões de comportamento observados.

Sua intenção é buscar o menor volume de uso necessário (focando na experiência do usuário), mas sem deixar de aplicar a proteção necessária. As sessões tidas como confiáveis ficam isentas de reCAPTCHA. Assim, o reCAPTCHA só é ativado para sessões potencialmente maliciosas.

## Experiência de compra com VTEX Criteria

Levando em consideração os fatores mencionados acima, a experiência de compra com cartão de débito ou crédito tende a seguir o fluxo abaixo. Isso minimiza a incidência de alguns tipos de fraudes e ataques com o mínimo de fricção para o usuário.

![reCAPTCHA scenariosPT](//images.contentful.com/alneenqid6w5/3gA55NZPuxpKOxCZxvbhgj/383565089037ce6be7d7b0a05df2c8fe/reCAPTCHA_scenarios.jpg)
Como mostrado na imagem acima, existem diferentes possibilidades de resultado neste fluxo:

1. Se o algoritmo do VTEX Criteria não considerar a sessão suspeita, a plataforma prossegue normalmente com a compra.

2. Caso contrário, a interface deverá exibir o reCAPTCHA Checkbox, a qual deverá ser marcada pelo cliente. Se o reCAPTCHA não considerar o comportamento suspeito ao marcar a Checkbox, a compra prossegue normalmente.
![newCaptchaAnchor](https://images.ctfassets.net/alneenqid6w5/2lv7PfOmkakDcSkNbAITtK/f4d75c1fab0fc5789b22fb1b259e7560/newCaptchaAnchor.gif)
3. Se o reCAPTCHA ainda considera o comportamento suspeito, a interface exibirá o desafio.
![desafio recaptcha](//images.contentful.com/alneenqid6w5/3wg7F9nmxJwZ8jxUJKb8OT/8276208bf8d6db1f086f33df1e8a3641/desafio_recaptcha.png)
4. Se o desafio for resolvido com sucesso, a plataforma prossegue com a compra. Caso contrário, o comportamento é considerado compatível com o de um bot e a plataforma não finaliza a compra.

