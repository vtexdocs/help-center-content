---
title: 'Chaves de API para integrações'
id: 6Ymo5bNMyEYBGsTmbTC3H9
status: PUBLISHED
createdAt: 2020-01-07T20:16:48.764Z
updatedAt: 2026-05-21T19:06:00.000Z
publishedAt: 2026-05-21T19:06:00.000Z
firstPublishedAt: 2020-01-13T14:32:53.804Z
contentType: trackArticle
productTeam: Identity
slugEN: api-keys-for-integrations
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
order: 4
---

Para conectar sua loja VTEX com sistemas externos (ERPs, ferramentas de marketing, plataformas de gestão), use **chaves de API** para autenticar essas integrações de forma segura.

Chaves de API são credenciais que permitem sistemas externos acessarem as APIs da VTEX. Cada chave consiste em:

- **API Key**: identificador público da chave.
- **API Token**: senha secreta (exibida apenas uma vez na criação).

As chaves precisam estar ativas e ter [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) associados que determinam quais recursos podem acessar.

## Tipos de chaves

| Tipo | Descrição | Casos de uso | Documentação |
|------|-----------|--------------|--------------|
| **Chaves internas (geradas)** | Criadas no Admin VTEX. Você tem controle total para criar, editar perfis, renovar e revogar. | Integrações com ERP, automações internas, scripts customizados | [Chaves geradas](/pt/docs/tutorials/chaves-geradas) |
| **Chaves externas (terceiros)** | Criadas por parceiros/apps. Você controla apenas os perfis de acesso na sua conta. | Apps da VTEX App Store, integrações com parceiros certificados | [Chaves externas](/pt/docs/tutorials/chaves-externas) |

## Gerenciar chaves de API

**Onde gerenciar:** _Configurações da conta > Chaves de API_

**O que você pode fazer:**
- Visualizar todas as chaves (internas e externas)
- Criar chaves internas
- Adicionar chaves externas
- Editar perfis de acesso
- Ativar/inativar chaves
- Renovar tokens
- Excluir chaves
- Exportar lista para auditoria

> ℹ️ Saiba mais em [Chaves de API](/pt/docs/tutorials/chaves-de-api).

## Princípio do menor privilégio

Associe apenas os perfis estritamente necessários. Exemplos:
- Integração que **só lê pedidos** → apenas perfil de leitura de Pedidos
- ERP que gerencia estoque → apenas perfis de Catálogo e Logística

## Renovação e alertas

Renove tokens periodicamente (3-6 meses para chaves críticas). Configure [alertas automáticos](/pt/docs/tutorials/configurar-alerta-para-renovar-tokens-de-api) para não esquecer.

> ⚠️ O token de API é exibido apenas uma vez na criação. Armazene com segurança.

## Requisitos de permissão

Perfil [User Administrator - RESTRICTED](/pt/docs/tutorials/perfis-de-acesso-predefinidos#user-administrator-restricted) ou perfil customizado com recursos:
- View API Keys
- Edit API Keys  
- Renew API Token
- Edit API Keys settings

## Boas práticas

- Use nomes descritivos
- Aplique menor privilégio
- Armazene tokens com segurança (nunca em código-fonte)
- Renove periodicamente
- Audite e remova chaves desnecessárias
- Revogue imediatamente se comprometida
- Nunca use código client-side para integrações
- Não compartilhe tokens por email, chat ou tickets

> ℹ️ Saiba mais em [Boas práticas para chaves de API](/pt/docs/tutorials/boas-praticas-chaves-de-api).

## Saiba mais

- [Chaves de API](/pt/docs/tutorials/chaves-de-api)
- [Boas práticas para chaves de API](/pt/docs/tutorials/boas-praticas-chaves-de-api)
- [Chaves geradas](/pt/docs/tutorials/chaves-geradas)
- [Chaves externas](/pt/docs/tutorials/chaves-externas)
- [Renovar token de API](/pt/docs/tutorials/renovar-token-de-api)
- [Configurar alerta para renovar tokens de API](/pt/docs/tutorials/configurar-alerta-para-renovar-tokens-de-api)
- [Exportar chaves de API](/pt/docs/tutorials/exportar-chaves-de-api)
- [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso)
- [Recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager)
- [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) (para desenvolvedores)
