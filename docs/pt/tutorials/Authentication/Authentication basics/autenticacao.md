---
title: 'Autenticação'
id: 21CkKHLKP1o41lUpGhuRUs
status: PUBLISHED
createdAt: 2021-10-25T19:06:37.982Z
updatedAt: 2024-02-26T20:32:47.823Z
publishedAt: 2024-02-26T20:32:47.823Z
firstPublishedAt: 2021-11-08T18:39:50.432Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: authentication
locale: pt
legacySlug: pagina-de-autenticacao
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

A autenticação é o procedimento para validar a identidade de usuários. Na VTEX, esse processo ocorre em três situações diferentes:

* [Login](#login): responsável por verificar e validar a identidade dos usuários que desejam acessar uma loja virtual ou o Admin da VTEX.
* [Desenvolvimento de Integrações](#desenvolvimento-de-integracoes): responsável por autenticar solicitações realizadas às APIs da VTEX a partir de integrações com serviços externos. Essa validação geralmente é realizada através de chaves de API ou tokens de usuário.
* [Desenvolvimento de apps](#desenvolvimento-de-apps): responsável por garantir a legitimidade da comunicação entre os aplicativos desenvolvidos com VTEX IO e as APIs da VTEX. Essa validação geralmente é realizada através de tokens de autenticação.

## Login

Na VTEX, a autenticação por login ocorre em dois contextos: na loja virtual, quando clientes realizam login para acessar seu perfil ou para realizar uma compra, e no Admin, quando usuários administrativos realizam login para operar o ambiente administrativo da loja.

É necessário configurar qual método de autenticação será ofertado em cada contexto. Confira as opções disponíveis na tabela a seguir:

| Forma de login | Descrição | Loja virtual | Admin |
|---|---|---|---|
| Código de acesso | Um código numérico aleatório é enviado para o email do usuário, que informa o código para realizar o login. | Pode ser habilitada | Sempre habilitada |
| Senha | O usuário pode registrar uma senha e efetuar o login usando o email e a senha cadastrados. Lojistas podem optar por [aplicar a expiração de senha](#aplicar-expiracao-de-senha) após um período específico para usuários do Admin. | Pode ser habilitada | Sempre habilitada. A expiração de senha pode ser habilitada. |
| Facebook | O usuário faz login usando sua conta do Facebook. Confira o guia [Configurar login com Facebook e Google](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513) para mais detalhes. | Pode ser habilitada | Indisponível |
| Google | O usuário faz login usando sua conta do Google. Confira o guia [Configurar login com Facebook e Google](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513) para mais detalhes. | Pode ser habilitada | Pode ser habilitada |
| Integração com outros provedores de identidades | O usuário pode fazer login usando sua conta de outros provedores de identidades externos, a partir de uma integração. Confira o guia para desenvolvedores [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) para mais detalhes. | Pode ser habilitada, utilizando o protocolo OAuth.  Confira o guia para desenvolvedores [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2) para mais detalhes. | Pode ser habilitada, utilizando o protocolo SAML. Confira o guia para desenvolvedores [Admin (SAML 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) para mais detalhes. |

>ℹ️ Pelo menos uma das formas de login da tabela acima deve estar habilitada para a loja virtual.

>⚠️ Para logar no Admin VTEX, é preciso ter um [usuário](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512) administrativo cadastrado. Os [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) relacionados ao usuário e as permissões incluídas no perfil determinam quais [recursos](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) ele pode utilizar no Admin.

### Habilitar formas de login

Na página **Autenticação**, é possível escolher quais formas de login você deseja oferecer aos clientes da sua loja e aos usuários administrativos que terão acesso ao Admin da sua conta.

![Página de autenticação](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Confira o passo a passo a seguir para habilitar os métodos de login desejados:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.

    Você será direcionado(a) para a aba **Loja virtual**, que lista os métodos de login disponíveis na sua loja virtual. Nesta aba, é possível habilitar os métodos desejados para o login de clientes.

    Para configurar formas de login no Admin para usuários administrativos, clique na aba **Admin**.

    Consulte a tabela na seção [Login](#login) para entender os métodos de login disponíveis e acessar a documentação que explica como configurá-los.

### Aplicar expiração de senha para usuários do Admin

Se a opção de login com senha estiver habilitada, é possível determinar que senhas de usuários do Admin devem expirar após uma quantidade determinada de dias. Para isso, siga as instruções abaixo:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.
3. Clique na aba **Admin**.
4. Na linha **Senha**, clique em `Editar`.
5. Marque a opção **Aplicar expiração de senha**.
6. Selecione um período após o qual a senha dos usuários administrativos se tornará inválida. É possível escolher **15**, **30** ou **90 dias**.
7. Clique em `Salvar`.

Após o período definido, ao realizar uma tentativa de login, o usuário precisará redefinir a senha.

## Desenvolvimento de integrações

Ao desenvolver integrações utilizando as [APIs](https://developers.vtex.com/docs/guides/getting-started) da VTEX, é preciso fornecer parâmetros de autenticação para realizar as operações desejadas. Veja a seguir os métodos disponíveis:

* **Chaves de aplicação (appKeys):** as [chaves de aplicação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) são utilizadas para autenticar solicitações às APIs da VTEX. Os administradores da loja podem criar chaves e associá-las a [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete), com permissão para utilizar determinados [recursos](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) da plataforma. Mais informações estão disponíveis no guia para desenvolvedores [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys).
* **Tokens de usuário:** os tokens de usuário são usados para autenticar solicitações de API, especialmente para aplicativos [frontend](https://help.vtex.com/pt/tracks/desenvolvimento-de-loja--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl) desenvolvidos com VTEX IO. Veja como usar no guia para desenvolvedores [API authentication using user tokens](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens).

## Desenvolvimento de apps

O uso de tokens de autenticação (auth tokens) é necessário para autenticação no desenvolvimento de apps em VTEX IO. Mais detalhes estão disponíveis no guia para desenvolvedores [App authentication using auth tokens](https://developers.vtex.com/docs/guides/app-authentication-using-auth-tokens).

