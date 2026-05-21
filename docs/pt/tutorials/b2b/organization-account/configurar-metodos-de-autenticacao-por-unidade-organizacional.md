---
title: 'Configurar métodos de autenticação por unidade organizacional'
createdAt: '2026-05-21T14:37:00.000Z'
updatedAt: '2026-05-21T14:37:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: configure-authentication-methods-per-organizational-unit
locale: pt
---

No B2B, cada unidade organizacional pode ter suas configurações de autenticação definidas de forma independente. Isso permite que diferentes filiais ou divisões de uma mesma organização utilizem formas de login distintas conforme suas necessidades.

## Configurações disponíveis

As configurações de autenticação são divididas em dois grupos principais: **Identificação do usuário** e **Métodos de autenticação**. Cada grupo pode ter uma ou mais opções habilitadas, dependendo das necessidades da organização.

### Identificação do usuário

Define quais identificadores o usuário pode informar ao iniciar o login (nome de usuário, email ou ambos nome de usuário e/ou email).

| Identificador | Descrição |
| :---- | :---- |
| **Nome de usuário** | O usuário informa seu nome de usuário para iniciar o login. |
| **Email** | O usuário informa seu endereço de email para iniciar o login. |

### Métodos de autenticação

Define como o usuário será autenticado após a identificação (por senha, provedor de identidade externo ou ambos).

| Método | Descrição |
| :---- | :---- |
| **Password** | O usuário é autenticado com senha cadastrada na plataforma VTEX. |
| **IdP externo (SSO)** | O usuário é redirecionado para um provedor de identidade externo configurado pelo lojista para autenticação via Single Sign-On. Saiba mais em [Habilitar login na organização via provedor de identidade (IdP) externo](https://help.vtex.com/pt/docs/tutorials/habilitar-login-na-organizacao-via-provedor-de-identidade-idp-externo). |

É possível habilitar uma ou mais opções em cada grupo. Opções não habilitadas ficam indisponíveis para os membros da unidade organizacional.

## Pré-requisitos

* Ter o perfil **Organizational Unit Admin** na organização compradora.
* Para habilitar o login via IdP externo, o lojista precisa ter configurado previamente o provedor de identidade no Admin VTEX. Saiba mais em [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) e [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).
* Ter o app [vtex.login-alternative-key](https://developers.vtex.com/docs/apps/vtex.login-alternative-key) instalado na loja.

## Configurar métodos de autenticação na Conta da Organização

Para configurar os métodos de autenticação diretamente pela [tela inicial da Conta da Organização](https://help.vtex.com/pt/docs/tutorials/conta-da-organizacao#acessando-a-conta-da-organizacao), siga os passos abaixo:

1. Acesse a loja pelo navegador e faça login com seu usuário.
2. No menu superior, clique em **Company**. O painel da organização será exibido.
3. Clique em **Manage**.
4. Se quiser configurar os métodos da organização principal, prossiga para a etapa 5. Se quiser configurar uma unidade organizacional filha, clique em **Organizational Units** e depois no nome da unidade.
5. Clique no menu **⋮** e, em seguida, em **Authentication**.
6. No modal **Authentication**, configure as opções desejadas:

   * Em **User identification**, marque os identificadores que os membros poderão usar para iniciar o login (**username**, **email** ou ambos).
   * Em **Authentication methods**, marque os métodos de autenticação disponíveis (**password**, **external IdP** ou ambos). Desmarque os que não devem estar disponíveis.
7. Clique em **Save**.

## Configurar métodos de autenticação via API

Também é possível gerenciar os métodos de autenticação por unidade organizacional via API. Os endpoints disponíveis são:

| Método | Endpoint | Descrição |
| :---- | :---- | :---- |
| `GET` | [Get organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#get-/api/vtexid/organization-units/-unitId-/settings) | Consulta os métodos de autenticação configurados para uma unidade organizacional. |
| `POST` | [Set organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#post-/api/vtexid/organization-units/-unitId-/settings) | Define os métodos de autenticação de uma unidade organizacional. |
| `PATCH` | [Update organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#patch-/api/vtexid/organization-units/-unitId-/settings) | Atualiza parcialmente os métodos de autenticação de uma unidade organizacional. |
| `DELETE` | [Delete organization unit authentication setting](https://developers.vtex.com/docs/api-reference/vtex-id-api#delete-/api/vtexid/organization-units/-unitId-/settings) | Remove um método de autenticação de uma unidade organizacional. |

## Saiba mais

* [Habilitar login na organização via provedor de identidade (IdP) externo](https://help.vtex.com/pt/docs/tutorials/habilitar-login-na-organizacao-via-provedor-de-identidade-idp-externo)
* [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide)
* [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2)
