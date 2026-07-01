---
title: 'Autenticação e segurança'
createdAt: 2020-01-07T21:12:36.958Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: authentication-and-security
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
order: 3
---

A segurança da sua conta VTEX depende de configurações adequadas de autenticação para usuários administrativos (Admin) e clientes (loja virtual).

## Métodos de autenticação disponíveis

A VTEX oferece diferentes métodos de login que podem ser habilitados conforme sua necessidade:

| Método | Admin | Loja virtual |
|--------|-------|--------------|
| Código de acesso | Sempre habilitado | Opcional |
| Senha | Sempre habilitado | Opcional |
| 2FA (obrigatório para Admin) | ✅ Obrigatório | Não aplicável |
| Google | Opcional | Opcional |
| Facebook | Não disponível | Opcional |
| SAML 2.0 | Opcional | Não disponível |
| OAuth 2.0 | Não disponível | Opcional |

**Onde configurar:** _Configurações da conta > Autenticação_

> ℹ️ Saiba mais em [Autenticação](https://help.vtex.com/pt/docs/tutorials/autenticacao).

## Autenticação de dois fatores (2FA)

> ❗ A autenticação de dois fatores (2FA) é **obrigatória** para login no Admin usando email e senha.

O 2FA adiciona uma segunda camada de segurança, exigindo além da senha um código temporário gerado no celular.

Os métodos disponíveis são:

- **App de autenticação (Recomendado)**: use o Google Authenticator para gerar códigos no celular. Funciona offline e é mais seguro.
- **SMS**: receba códigos por mensagem de texto. Depende da operadora de telefonia.

O código é solicitado a cada 10 dias no mesmo navegador.

> ℹ️ Saiba mais em [Habilitar login por autenticação de 2 fatores](https://help.vtex.com/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores).

> ℹ️ Para recuperar acesso, veja [Redefinir senha de acesso ao Admin VTEX](https://help.vtex.com/pt/docs/tutorials/redefinir-senha-de-acesso-ao-admin-vtex).

## Login social (Google e Facebook)

Permita que usuários façam login usando contas do Google ou Facebook, oferecendo conveniência e aproveitando a segurança desses provedores.

- **Google**: disponível para Admin e loja virtual
- **Facebook**: disponível apenas para loja virtual

**Configuração:** requer criar credenciais (Client ID e Client Secret) nos provedores e informá-las no Admin.

> ℹ️ Saiba mais em [Configurar login com Facebook e Google](https://help.vtex.com/pt/docs/tutorials/configurar-login-com-facebook-e-google).

## Expiração de senha

Configure senhas para expirarem automaticamente após 15, 30 ou 90 dias, forçando renovação periódica.

**Onde configurar:** _Configurações da conta > Autenticação > Senha > Editar_

## Integrações avançadas

**SAML 2.0 (Admin)**  
Integre com provedores de identidade corporativos (Azure AD, Okta, etc.)

> ℹ️ Saiba mais em [Admin (SAML 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2).

**OAuth 2.0 (Loja virtual)**  
Integre com provedores externos para experiências personalizadas de login.

> ℹ️ Saiba mais em [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).

## Melhores práticas

- Use 2FA por aplicativo, não SMS
- Configure expiração de senha
- Exija senhas fortes (mínimo 8 caracteres, números, maiúsculas e minúsculas)
- Habilite apenas métodos necessários
- Revise acessos regularmente

## Saiba mais

- [Autenticação](https://help.vtex.com/pt/docs/tutorials/autenticacao)
- [Habilitar login por autenticação de 2 fatores](https://help.vtex.com/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores)
- [Configurar login com Facebook e Google](https://help.vtex.com/pt/docs/tutorials/configurar-login-com-facebook-e-google)
- [Redefinir senha de acesso ao Admin VTEX](https://help.vtex.com/pt/docs/tutorials/redefinir-senha-de-acesso-ao-admin-vtex)
- [Configurar dados pessoais na tela de usuário](https://help.vtex.com/pt/docs/tutorials/configurar-dados-pessoais-na-tela-de-usuario)
