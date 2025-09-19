---
title: 'Novos eventos disponíveis no módulo Audit'
id: 36HT3LaI5wORvV9uaDKCwy
status: PUBLISHED
createdAt: 2023-04-18T20:01:44.458Z
updatedAt: 2023-04-18T20:46:27.347Z
publishedAt: 2023-04-18T20:46:27.347Z
contentType: updates
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-04-18-new-events-available-in-the-audit-module
locale: pt
legacySlug: novos-eventos-disponiveis-no-modulo-audit
announcementImageID: 'undefined'
announcementSynopsisPT: 'O Audit está disponibilizando novos eventos relacionados aos módulos VTEX ID, License manager e Pricing.'
---

O [Audit](/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA) é um módulo que registra eventos que acontecem na sua loja VTEX, possibilitando auditoria futura. A VTEX realizou uma melhoria no Audit, que agora registra uma gama maior de eventos.

## O que mudou?

A VTEX adicionou os seguintes eventos à [lista de eventos registrados pelo Audit](/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ):

### VTEX ID

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Ação**
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">**Descrição do evento**
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">**Detalhes do evento**
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordCreated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Usuário registra uma senha pela primeira vez na loja ou no Admin VTEX.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordUpdated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Usuário altera sua senha da loja ou do Admin VTEX.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">IdentityProviderChanged
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Mudança de configurações de provedor de identidade. Por exemplo: criação de integração OAuth customizada, alteração de informações em configuração de OAuth existente, entre outros.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Provedor de identidade.
   </td>
  </tr>
</table>

### License Manager

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Ação**
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">**Descrição do evento**
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">**Detalhes do evento**
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Block AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Bloqueio de chave de aplicação.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Chave de aplicação bloqueada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Accept Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Aceite de convite para se tornar usuário titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário que aceitou o convite.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Criação de usuário ou alteração de informações de usuário.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Account
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Criação de conta ou edição de informações de conta.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Conta criada ou alterada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Edição de perfil de acesso.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Perfil de acesso editado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Exclusão perfil de acesso.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Perfil de acesso excluído.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unblock AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Desbloqueio de chave de aplicação.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Chave de aplicação desbloqueada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Allowed
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acesso a recurso permitido.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Chave do recurso e ID do usuário ao qual foi permitido.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Cancel Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cancelamento de convite para usuário titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário convidado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Exclusão de usuário.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário excluído.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Update Binding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Atualização de binding.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding atualizado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Denied
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Acesso a recurso negado.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Chave do recurso e ID do usuário ao qual foi negado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create New AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Criação de chave de aplicação.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Chave de aplicação criada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Criação de convite para usuário titular.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID do usuário convidado.
   </td>
  </tr>
</table>

### Pricing

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Ação**
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">**Descrição do evento**
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">**Detalhes do evento**
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Fixed Price Modified
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Alteração de preço fixo.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificação do preço fixo alterado.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Catalog Step
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Criação ou alteração de uma regra de preço
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Regra de preço criada ou alterada.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Deleted Fixed Prices From Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Exclusão de preço fixo da respectiva tabela de preços.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificação da tabela e do preço excluído.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Compatibility Post Prices
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Alteração de preço utilizando a API de compatibilidade com o contrato do PricingV1
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identificação do preço alterado.
   </td>
  </tr>
</table>

> ℹ️ Confira a [lista completa de eventos disponíveis no Audit](/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ).

## O que precisa ser feito?

A mudança no Audit já está ativa para todas as contas, registrando a lista de eventos citada acima. Nenhuma ação é necessária.

