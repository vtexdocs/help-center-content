---
title: 'Aba My Authentication do My Account'
id: 5OETzDR8d5qt13atEBxsB9
status: PUBLISHED
createdAt: 2021-07-26T14:25:34.550Z
updatedAt: 2021-09-27T20:51:42.279Z
publishedAt: 2021-09-27T20:51:42.279Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slug: aba-my-authentication-do-my-account
locale: pt
legacySlug: aba-my-authentication-do-my-account
announcementImageID: ''
announcementSynopsisPT: 'My Authentication é uma aba do My Account que permite o gerenciamento de senhas e sessões de login.'
---

My Authentication é uma aba que aparece no painel do My Account dentro da loja e está disponível em todas as contas da VTEX.

<div class="alert alert-danger">
Esta mudança afetará todas as lojas da VTEX. Como a mudança interfere em alguns componentes na UI da loja, é necessário que você faça alterações manuais nas configurações da sua loja até a data limite de 29/09.
</div>

## O que muda?

Esta aba é um local onde os usuários serão capazes de gerenciar a sua senha. Na aba também é possível gerenciar as sessões de login, permitindo ao usuário encerrar outras sessões remotamente. Mais detalhes sobre o uso da aba podem ser encontrados na seção [Autenticação do artigo Configurar o My Account](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh).

![My Authentication app PT](//images.ctfassets.net/alneenqid6w5/20aIW7imMlRsfDbKYu9IuM/1f8fe73f29fcee82f33e27aa07daa83f/My_Authentication_app_PT.png)

![My Authentication Session Management PT](//images.ctfassets.net/alneenqid6w5/3qxpIRREWnGmRmv97jhOML/0b818eb59e66b445874945c9e0784e9c/My_Authentication_Session_Management_PT_blur.png)

No dia 29/09 o componente de gerenciamento de senha também será removido do perfil do usuário para evitar a sua duplicidade. As imagens abaixo mostram exemplos de página de perfil do usuário com e sem o componente de gerenciamento de senha.

![My Account with password PT](//images.ctfassets.net/alneenqid6w5/6L8Do8W0nbG4jfKE04ddpj/2a78bae58eb46f9ec94c7bb70ccbe11c/My_Account_with_password_PT.png)

![My Account no password PT](//images.ctfassets.net/alneenqid6w5/22CaEOhOusmmDM73taAw6R/65082d69145a716441e2d2b555798c72/My_Account_no_password_PT.png)

## Por que realizamos essa mudança?

A funcionalidade de gerenciamento de sessões de login permite dar mais segurança aos usuários da loja e será importante para implementar futuras mudanças na plataforma. As futuras mudanças incluem oferecer sessões de login com maior duração e renovação automática de sessão. O reposicionamento do componente de gerenciamento de senha para o My Authentication será feito porque acreditamos que faz mais sentido atribuir essa funcionalidade à aba do que à seção de perfil do usuário.

Para facilitar a transição, ela será feita em duas etapas:

1. Agora será disponibilizada a opção de ativar a aba para ser mostrada na UI da loja e o componente de mudança de senha estará disponível tanto no perfil do usuário quanto na aba.
2. No dia 29/09 a aba será forçadamente ativada em todas as contas e o componente de mudança de senha no perfil do usuário será removido.

Nesse intervalo entre as duas etapas, você terá tempo para fazer as modificações necessárias para que a aba funcione apropriadamente.

## O que precisa ser feito?

Agora que o My Authentication está disponível, você deve tornar a aba visível no perfil do usuário da sua loja.

Como a habilitação da aba insere um elemento na UI da loja, ela pode precisar de customização manual de aparência antes de estar visível publicamente para seguir a identidade visual da loja. Antes de tornar a aba visível na loja de forma pública, você pode acessá-la por uma URL e decidir se ela precisa de customização.

- Caso a sua loja seja VTEX IO, utilize o endereço `https://{account}.myvtex.com/account#/authentication`, substituindo `{account}` pelo nome da conta.
- Caso a sua loja não use o VTEX IO, utilize o endereço `https://{account}.vtexcommercestable.com.br/_secure/account#/authentication`, substituindo `{account}` pelo nome da conta.

<div class="alert alert-warning">
Antes de acessar a aba de autenticação pela URL é preciso fazer login na loja com uma conta de usuário.
</div>

Para realizar a customização de aparência da aba, peça para o desenvolvedor seguir o artigo [My Authentication Customization Guide using CMS](https://developers.vtex.com/vtex-rest-api/docs/ui-customization-my-authentication), para lojas que não utilizam o VTEX IO, ou o artigo [My Authentication Customization Guide on VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-my-authentication), para lojas do VTEX IO, no nosso portal para desenvolvedores.

Para tornar a aba My Authentication visível publicamente na sua loja:

1. No painel lateral esquerdo do Admin, vá até a seção **CONFIGURAÇÕES DA CONTA**.
2. Clique em **Aplicativos**.
3. Clique em **Meus aplicativos**.  
![My apps menu PT](//images.ctfassets.net/alneenqid6w5/4oRHARlS6i4lZac17nyHhC/600c792e5f1d3854175315a1854c85bc/My_apps_menu_PT.png)
4. Vá até o app **My Account** e clique em `Configurações`.  
![My apps installed PT](//images.ctfassets.net/alneenqid6w5/5umcJos7Uz0wnmv0VsZs3Y/20d89a53135279f89f0484c0bfef5685/My_apps_installed_PT.png)
5. Na seção **AUTHENTICATION** das configurações do app, marque a caixa `Visible`.
6. Clique em `Salvar`.  
![My Authentication visible setting PT](//images.ctfassets.net/alneenqid6w5/5104wJeIBEUYXI7hfkRdH0/537169239dc172ce1fe772aa91d75b92/My_Authentication_visible_setting_PT.png)

Também é possível acessar diretamente as configurações do app My Account no Admin por uma URL.
- Caso a sua loja seja VTEX IO, utilize o endereço `https://{account}.myvtex.com/admin/apps/vtex.my-account@1.x/setup`, substituindo `{account}` pelo nome da conta.
- Caso a sua loja não use o VTEX IO, utilize o endereço `https://{account}.myvtex.com/admin/apps/vtex.my-account@0.x/setup`, substituindo `{account}` pelo nome da conta.

Após habilitar a visibilidade da aba **Autenticação**, ela aparecerá no perfil de usuário da loja. Ela pode ser acessada por qualquer usuário pelo painel lateral esquerdo.

![My Authentication app PT](//images.ctfassets.net/alneenqid6w5/20aIW7imMlRsfDbKYu9IuM/1f8fe73f29fcee82f33e27aa07daa83f/My_Authentication_app_PT.png)
