---
title: 'Usuários e perfis de acesso'
createdAt: 2020-01-07T19:24:22.388Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: users-and-access-profiles
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
order: 2
---

O controle de acesso ao Admin VTEX é baseado em **usuários** e **perfis de acesso**, garantindo que cada pessoa tenha acesso apenas às funcionalidades necessárias para suas tarefas.

## Usuários

Um **usuário administrativo** é qualquer pessoa cadastrada com acesso ao Admin da sua loja. Cada usuário é identificado por email e precisa ter ao menos um perfil de acesso associado.

**O que você pode fazer:**
- Criar, editar e excluir usuários
- Associar perfis de acesso aos usuários
- Exportar lista de usuários

**Onde gerenciar:** _Configurações da conta > Usuários_

> ℹ️ Saiba mais em [Gerenciar usuários administrativos](/pt/docs/tutorials/gerenciar-usuarios-administrativos).

## Perfis de acesso

Um **perfil de acesso** é um conjunto de permissões que determina quais funcionalidades um grupo de usuários pode acessar na plataforma. As permissões são baseadas em **recursos** do License Manager.

O License Manager verifica se o usuário possui os recursos necessários para realizar cada ação na VTEX (acessar uma página, fazer chamada de API, etc.). Sem os recursos adequados, a requisição é negada.

**Onde gerenciar:** _Configurações da conta > Perfis de acesso_

> ℹ️ Saiba mais em [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso).

### Tipos de perfis

| Tipo | Descrição | Exemplos | Documentação |
|------|-----------|----------|--------------|
| **Predefinidos** | Perfis prontos oferecidos pela VTEX que cobrem os casos de uso mais comuns. | Owner (Admin Super), Call Center Operator, Finance, Logistics | [Perfis de acesso predefinidos](/pt/docs/tutorials/perfis-de-acesso-predefinidos) |
| **Personalizados** | Perfis customizados criados selecionando apenas os recursos necessários para cada grupo de usuários. | Perfil para equipe de Catálogo, perfil para operadores de marketplace | [Criar perfil de acesso](/pt/docs/tutorials/criar-perfil-de-acesso) |

## Usuário Titular

Toda conta VTEX tem um **usuário Titular** único, que é o principal responsável pela loja. Este usuário:

- Tem acesso total a todas as funcionalidades
- Pode realizar ações críticas (reindexação, fullcleanup, autorizações especiais)
- Recebe comunicações importantes da VTEX

> ⚠️ Usuário Titular ≠ perfil Owner (Admin Super). O Titular é único por conta, enquanto Owner é um perfil que pode ser atribuído a múltiplos usuários.

> ℹ️ Saiba mais em [O que é o usuário Titular](/pt/docs/tutorials/o-que-e-o-usuario-titular).

## Princípio do menor privilégio

Sempre aplique o **menor privilégio necessário**: cada usuário deve ter apenas os perfis e recursos estritamente necessários para suas atividades. Isso reduz riscos de segurança e facilita o controle.

**Boas práticas:**
- Minimize usuários com perfil Owner (Admin Super)
- Revise acessos e chaves de API periodicamente (pelo menos uma vez ao ano)
- Remova usuários inativos imediatamente
- Use emails corporativos, não pessoais
- Evite contas compartilhadas (ex: admin@empresa.com)
- Exija 2FA para todos os usuários administrativos
- Considere usar login corporativo (SSO)

> ℹ️ Saiba mais em [Boas práticas de gestão de acessos para lojas](/pt/docs/tutorials/boas-praticas-de-gestao-de-acessos-para-lojas).

## Saiba mais

- [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) - Guia completo sobre controle de acesso
- [Boas práticas de gestão de acessos para lojas](/pt/docs/tutorials/boas-praticas-de-gestao-de-acessos-para-lojas)
- [Gerenciar usuários administrativos](/pt/docs/tutorials/gerenciar-usuarios-administrativos)
- [Criar perfil de acesso](/pt/docs/tutorials/criar-perfil-de-acesso)
- [Perfis de acesso predefinidos](/pt/docs/tutorials/perfis-de-acesso-predefinidos)
- [Recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager)
- [O que é o usuário Titular](/pt/docs/tutorials/o-que-e-o-usuario-titular)
- [Transferência de propriedade da loja](/pt/docs/tutorials/transferencia-de-propriedade-da-loja)
