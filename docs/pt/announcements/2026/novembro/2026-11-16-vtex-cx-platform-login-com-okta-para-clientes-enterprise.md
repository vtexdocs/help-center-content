---
title: 'VTEX CX Platform: login com Okta para clientes enterprise'
createdAt: 2026-11-16T12:00:00.000Z
updatedAt: 2026-11-16T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-11-16-vtex-cx-platform-enterprise-okta-login
locale: pt
tags:
  - Novidade
  - VTEX CX Platform
announcementSynopsisPT: 'Clientes enterprise agora podem entrar no VTEX CX Platform com o próprio tenant Okta. A ativação é feita sob demanda, mediante solicitação ao time VTEX.'
---

Clientes enterprise agora podem fazer login no VTEX CX Platform usando o Okta. Para atender às exigências de segurança de empresas que centralizam a autenticação no próprio provedor de identidade, disponibilizamos essa funcionalidade para todos os clientes.

Com o login Okta, os usuários entram com as credenciais corporativas e a verificação em duas etapas segue as regras já definidas no Okta do cliente.

## O que mudou?

Antes, todos os usuários entravam na plataforma com email e senha ou com os botões de login social (GitHub, Google e Microsoft), sem a possibilidade de usar o provedor de identidade da própria empresa.

Agora, a tela de login pede primeiro apenas o email e direciona o usuário conforme o domínio informado:

- **Domínio mapeado para um tenant Okta:** o usuário é redirecionado diretamente ao Okta da empresa, inclusive com a autenticação multifator do Okta configurada. O campo de senha da plataforma não é exibido nessa tentativa.
- **Domínio não mapeado:** o usuário segue para a etapa de senha, como antes.

As opções de login com GitHub, Google e Microsoft continuam disponíveis e não mudaram.

> ℹ️ O acesso às organizações continua sendo feito apenas por convite, e o mapeamento de domínio é restrito a cada cliente: o Okta de uma empresa nunca dá acesso à organização de outra.

## O que precisa ser feito?

Para usar o recurso, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support) e solicite a configuração do mapeamento do domínio de email e da política da sua organização.
