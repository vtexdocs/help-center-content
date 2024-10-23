---
title: 'Habilitar login por autenticação de dois fatores'
id: 4Ae1fcQi12g8u4SkQKCqWQ
status: PUBLISHED
createdAt: 2017-11-09T00:46:29.023Z
updatedAt: 2024-03-12T17:52:28.500Z
publishedAt: 2024-03-12T17:52:28.500Z
firstPublishedAt: 2017-11-09T13:09:54.237Z
contentType: tutorial
productTeam: Identity
author: authors_24
slugEN: enabling-2-factor-authentication-login
locale: pt
legacySlug: habilitar-login-por-autenticacao-de-2-fatores
subcategoryId: 4sY1T2qdFehvVmC0tL5xW3
---

A autenticação de 2 fatores (2FA) é um método de autenticação que aumenta muito a segurança do login em sua loja.

Isto porque, no momento do login, além de exigir o e-mail e a senha, o sistema exige uma chave de acesso (que, no caso da VTEX, pode ser um código enviado por SMS ou gerado por aplicativo).

Como essa chave é gerada no momento do login e tem prazo de validade curto, torna-se quase impossível que alguém entre em sua loja usando seus dados sem autorização. Sem o 2FA, basta que alguém saiba seu e-mail e sua senha para ter amplo acesso à conta da sua loja.

>❗ A partir do dia **16 de novembro de 2017**, a autenticação de 2 fatores (2FA) torna-se **obrigatória para todos os e-mails** no Admin da VTEX.
>
> 
>
> Sem 2FA, você **não conseguirá logar** usando e-mail e senha.
>
> 
>
> Essa obrigatoriedade vale apenas para login com e-mail e senha, e não para os demais métodos de login (Google, Facebook e token).

## Como habilitar o 2FA

Se você ainda não configurou a autenticação de 2 fatores, sempre que você acessa o Admin usando e-mail e senha, aparece uma tela em que é ofertada a configuração do 2FA.

Há duas opções de autenticação:

- Por chave gerada por um __aplicativo__ de autenticação.
- Por chave enviada por mensagem de telefone (__SMS__).

![2FA - Select - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_1.png)

>❗ Recomendamos fortemente que você **escolha a opção de autenticação por aplicativo**, uma vez que na autenticação por SMS você depende de que não haja falhas na operadora de telefonia. Pelo aplicativo, a chave de acesso estará sempre à disposição quando for necessária.

>❗ Se você configurou o 2FA por SMS e o código está demorando a chegar, provavelmente a causa do problema está na operadora de telefone. Habilite o 2FA por aplicativo, como explicado abaixo.

### Habilitar o 2FA por aplicativo

Para usar uma chave gerada por aplicativo de autenticação:

1. Baixe o aplicativo __Google Authenticator__ ([App Store](https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR)).
  ![2FA - App Download - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_2.png)
2. Use o aplicativo para ler o QR Code com a câmera do seu celular.
![mfa código](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_3.jpg)
3. Sua conta da VTEX será adicionada ao aplicativo, com um código de 6 dígitos. Insira o código para concluir seu login.

  *O código do app é atualizado periodicamente. Não será necessário memorizá-lo, basta consultar o aplicativo sempre que precisar.*
  ![2FA - App Insert Code - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_4.png)

>ℹ️ Se você fizer login usando e-mail e senha no mesmo computador, a chave de acesso será solicitada **a cada 3 dias**. Quando isso acontecer, basta consultar o código no aplicativo.

### Habilitar o 2FA por SMS

Para usar uma chave enviada por mensagem de texto:

1. Insira seu número de celular para enviarmos o código por SMS - não se esqueça de colocar o código de país e área.

  ![2FA - SMS Insert Phone - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_5.png)

2. Você receberá uma mensagem de texto da VTEX no celular indicado. Insira a chave de 6 dígitos para concluir seu login.

   ![2FA - SMS Insert Code - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_6.png)

>⚠️ Não podemos garantir que sua operadora de telefonia conseguirá entregar a chave de acesso sempre que necessário. Caso a mensagem de texto da VTEX não chegue, tente reenviar o código ou [habilitar o 2FA por aplicativo](#habilitar-o-2fa-por-aplicativo).

### 2FA para operadores de televendas

Como em algumas empresas operadores de televendas não podem usar telefone celular, usuários VTEX que tiverem apenas o perfil de acesso de televendas não são obrigados a habilitar autenticação de 2 fatores.

## Modificar configurações de 2FA

Para modificar as configurações de verificação em duas etapas:

1. Acesse suas configurações de usuário, clicando no círculo com suas iniciais no canto superior-direito do Admin.

  ![2FA - User Initials - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_7.png)

2. Clique em **Verificação em 2 passos** para visualizar suas configurações.

  ![2FA - My User - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Two-factor authentication/habilitar-login-por-autenticacao-de-2-fatores_8.png)

3. Você poderá então alterar suas configurações seguindo passos similares aos apresentados nas seções acima para habilitar 2FA por [SMS](#habilitar-o-2fa-por-sms) e [aplicativo](#habilitar-o-2fa-por-aplicativo). 
