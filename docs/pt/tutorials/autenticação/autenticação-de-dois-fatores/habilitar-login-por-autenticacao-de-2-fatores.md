---
title: 'Habilitar login por autenticação de dois fatores'
id: 4Ae1fcQi12g8u4SkQKCqWQ
status: PUBLISHED
createdAt: 2017-11-09T00:46:29.023Z
updatedAt: 2025-08-26T16:31:38.221Z
publishedAt: 2025-08-26T16:31:38.221Z
firstPublishedAt: 2017-11-09T13:09:54.237Z
contentType: tutorial
productTeam: Identity
author: authors_24
slugEN: enabling-2-factor-authentication-login
legacySlug: habilitar-login-por-autenticacao-de-2-fatores
locale: pt
subcategoryId: 4sY1T2qdFehvVmC0tL5xW3
---

A autenticação de dois fatores (2FA) é um método de autenticação que aumenta muito a segurança do login em sua loja.

Isto porque, no momento do login, além de exigir o e-mail e a senha, o sistema exige uma chave de acesso (que, no caso da VTEX, pode ser um código enviado por SMS ou gerado por aplicativo).

Como essa chave é gerada no momento do login e tem prazo de validade curto, torna-se quase impossível que alguém entre em sua loja usando seus dados sem autorização. Sem o 2FA, basta que alguém saiba seu e-mail e sua senha para ter amplo acesso à conta da sua loja.

> ❗ A autenticação de dois fatores (2FA) é **obrigatória** no Admin da VTEX.<br><br>Sem 2FA, não é possível fazer login usando email e senha.<br><br>O 2FA não é obrigatório para outros métodos de login (Google, Facebook ou código de acesso).

> ℹ️ Em algumas empresas, operadores de televendas não podem usar telefone celular. Por isso, usuários que tiverem apenas o [perfil de acesso de televendas](/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#call-center-operator) não são obrigados a habilitar autenticação de dois fatores.

## Habilitar o 2FA

Se você ainda não configurou a autenticação de dois fatores, sempre que você acessa o Admin usando email e senha, aparece uma tela em que é ofertada a configuração do 2FA.

Há duas opções de autenticação:

- Por chave gerada por um __aplicativo__ de autenticação.
- Por chave enviada por mensagem de telefone (__SMS__).

![2FA - Select - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autentica%C3%A7%C3%A3o/autentica%C3%A7%C3%A3o-de-dois-fatores/habilitar-login-por-autenticacao-de-2-fatores_1.png)

> ❗ Recomendamos fortemente que você **escolha a opção de autenticação por aplicativo**, uma vez que a autenticação por SMS depende do funcionamento da operadora de telefonia. Pelo aplicativo, a chave de acesso estará sempre à disposição quando for necessária. Se você configurou o 2FA por SMS e o código está demorando a chegar, provavelmente a causa do problema está na operadora de telefone. Opte por [habilitar o 2FA por aplicativo](#habilitar-o-2fa-por-aplicativo).

### Habilitar o 2FA por aplicativo

Para usar uma chave gerada por aplicativo de autenticação, siga os passos abaixo:

1. Baixe o aplicativo __Google Authenticator__ ([App Store](https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR)).
  ![2FA - App Download - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autentica%C3%A7%C3%A3o/autentica%C3%A7%C3%A3o-de-dois-fatores/habilitar-login-por-autenticacao-de-2-fatores_2.png)
2. Use o aplicativo para ler o QR Code com a câmera do seu celular. Sua conta da VTEX será adicionada ao aplicativo, com um código de 6 dígitos.
![mfa código](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autentica%C3%A7%C3%A3o/autentica%C3%A7%C3%A3o-de-dois-fatores/habilitar-login-por-autenticacao-de-2-fatores_3.jpg)
3. Insira o código exibido no aplicativo para concluir seu login. O código do app é atualizado periodicamente. Consulte-o sempre que necessário.
  ![2FA - App Insert Code - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autentica%C3%A7%C3%A3o/autentica%C3%A7%C3%A3o-de-dois-fatores/habilitar-login-por-autenticacao-de-2-fatores_4.png)

> ℹ️ Se você fizer login usando email e senha no mesmo navegador, a chave de acesso será solicitada **a cada 10 dias**. Quando isso acontecer, consulte o código no aplicativo.

### Habilitar o 2FA por SMS

Para usar uma chave enviada por mensagem de texto, siga os passos abaixo:

1. Insira seu número de celular para enviarmos o código por SMS. Inclua o código de país e área.

  ![2FA - SMS Insert Phone - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autentica%C3%A7%C3%A3o/autentica%C3%A7%C3%A3o-de-dois-fatores/habilitar-login-por-autenticacao-de-2-fatores_5.png)

2. Você receberá uma mensagem de texto da VTEX no celular indicado. Insira a chave de 6 dígitos para concluir seu login.

   ![2FA - SMS Insert Code - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autentica%C3%A7%C3%A3o/autentica%C3%A7%C3%A3o-de-dois-fatores/habilitar-login-por-autenticacao-de-2-fatores_6.png)

> ⚠️ Não podemos garantir que sua operadora de telefonia conseguirá entregar a chave de acesso sempre que necessário. Caso a mensagem de texto da VTEX não chegue, tente reenviar o código ou [habilitar o 2FA por aplicativo](#habilitar-o-2fa-por-aplicativo).

## Modificar configurações de 2FA

Para modificar as configurações de verificação em duas etapas, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email, e depois em **Configurações do usuário**.
2. Clique em **Verificação em duas etapas** para visualizar suas configurações.
3. Para alterar suas configurações de 2FA, siga os passos apresentados para habilitar 2FA por [SMS](#habilitar-o-2fa-por-sms) e [aplicativo](#habilitar-o-2fa-por-aplicativo).

## Recuperar acesso ao Admin VTEX

Se você perder o acesso ao método de autenticação escolhido e não estiver conseguindo fazer login, tente outro método de login ou siga os passos do artigo [Redefinir senha de acesso ao Admin VTEX](/pt/tutorial/redefinir-senha-de-acesso-ao-admin-vtex--frequentlyAskedQuestions_531).

Uma vez que tiver informado o código de acesso e redefinido a senha, você poderá alterar o método de autenticação de dois fatores conforme as instruções deste guia.

