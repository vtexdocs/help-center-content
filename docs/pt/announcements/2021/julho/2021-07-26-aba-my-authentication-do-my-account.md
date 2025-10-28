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
slugEN: 2021-07-26-my-authentication-section-in-my-account
locale: pt
legacySlug: aba-my-authentication-do-my-account
announcementImageID: 'undefined'
announcementSynopsisPT: 'My Authentication é uma aba do My Account que permite o gerenciamento de senhas e sessões de login.'
---

My Authentication é uma aba que aparece no painel do My Account dentro da loja e está disponível em todas as contas da VTEX.

> ❗ Esta mudança afetará todas as lojas da VTEX. Como a mudança interfere em alguns componentes na UI da loja, é necessário que você faça alterações manuais nas configurações da sua loja até a data limite de 29/09.

## O que muda?

Esta aba é um local onde os usuários serão capazes de gerenciar a sua senha. Na aba também é possível gerenciar as sessões de login, permitindo ao usuário encerrar outras sessões remotamente. Mais detalhes sobre o uso da aba podem ser encontrados na seção [Autenticação do artigo Configurar o My Account](/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh).

![My Authentication app PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_1.png)

![My Authentication Session Management PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_2.png)

No dia 29/09 o componente de gerenciamento de senha também será removido do perfil do usuário para evitar a sua duplicidade. As imagens abaixo mostram exemplos de página de perfil do usuário com e sem o componente de gerenciamento de senha.

![My Account with password PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_3.png)

![My Account no password PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_4.png)

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

> ⚠️ Antes de acessar a aba de autenticação pela URL é preciso fazer login na loja com uma conta de usuário.

Para realizar a customização de aparência da aba, peça para o desenvolvedor seguir o artigo [My Authentication Customization Guide using CMS](https://developers.vtex.com/vtex-rest-api/docs/ui-customization-my-authentication), para lojas que não utilizam o VTEX IO, ou o artigo [My Authentication Customization Guide on VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-my-authentication), para lojas do VTEX IO, no nosso portal para desenvolvedores.

Para tornar a aba My Authentication visível publicamente na sua loja:

1. No painel lateral esquerdo do Admin, vá até a seção **CONFIGURAÇÕES DA CONTA**.
2. Clique em **Aplicativos**.
3. Clique em **Meus aplicativos**.  
![My apps menu PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_5.png)
4. Vá até o app **My Account** e clique em `Configurações`.  
![My apps installed PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_6.png)
5. Na seção **AUTHENTICATION** das configurações do app, marque a caixa `Visible`.
6. Clique em `Salvar`.  
![My Authentication visible setting PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_7.png)

Também é possível acessar diretamente as configurações do app My Account no Admin por uma URL.
- Caso a sua loja seja VTEX IO, utilize o endereço `https://{account}.myvtex.com/admin/apps/vtex.my-account@1.x/setup`, substituindo `{account}` pelo nome da conta.
- Caso a sua loja não use o VTEX IO, utilize o endereço `https://{account}.myvtex.com/admin/apps/vtex.my-account@0.x/setup`, substituindo `{account}` pelo nome da conta.

Após habilitar a visibilidade da aba **Autenticação**, ela aparecerá no perfil de usuário da loja. Ela pode ser acessada por qualquer usuário pelo painel lateral esquerdo.

![My Authentication app PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2021/julho/2021-07-26-aba-my-authentication-do-my-account_8.png)
