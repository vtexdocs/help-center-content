---
title: 'Novo recurso: Login persistente para manter clientes autenticados por mais tempo'
status: PUBLISHED
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
publishedAt: 2026-10-16T00:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: new-feature-persistent-login-to-keep-customers-authenticated-longer
locale: pt
announcementSynopsisEN: 'New persistent login feature allows merchants to configure how long customers stay logged in, from 1 to 365 days.'
tags:
  - Novo recurso
  - Autenticação
  - Admin
---

A VTEX lançou um novo recurso de **login persistente** que permite que você configure por quanto tempo seus clientes permanecem autenticados em sua loja virtual. Agora é possível manter seus clientes conectados por até 365 dias, sem exigir um novo login a cada 24 horas.

## Por que implementamos este recurso?

O login persistente foi desenvolvido para melhorar a experiência de compra de seus clientes, especialmente aqueles que visitam sua loja frequentemente. Com este recurso, você reduz o atrito causado pela expiração de sessão, permitindo que seus clientes permaneçam conectados durante o período que você configurar.

## Como funciona?

Quando um cliente acessa sua loja, ele recebe um cookie de acesso com duração fixa de 24 horas. Com o login persistente habilitado, a plataforma também emite um token de atualização responsável por renovar o acesso do cliente sem exigir um novo login, durante o período que você definir (de 1 a 365 dias).

Pontos importantes sobre o funcionamento:

* O recurso é opcional e vem desabilitado por padrão
* A duração é configurável: qualquer número inteiro de dias, de **1** a **365**
* Alterações na configuração valem apenas para novos logins (sessões ativas não são afetadas)
* As lojas com Store Framework, CMS Portal (Legado) e FastStore SDK têm renovação automática do acesso

![Login persistente - Card na página de Autenticação](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2026/october/2026-10-16-novo-recurso-login-persistente-para-manter-clientes-autenticados-por-mais-tempo_1.png)

## Como habilitar o login persistente?

O recurso está disponível na página **Autenticação** do Admin VTEX. Para habilitar:

1. No Admin VTEX, acesse **Configurações da conta > Autenticação**
2. Na aba **Loja virtual**, localize o card **Login persistente**
3. Clique no interruptor para habilitar a funcionalidade
4. (Opcional) Clique em `Editar` para configurar a duração desejada

A duração padrão é de 1 dia no primeiro uso, mas você pode alterá-la a qualquer momento para qualquer valor entre 1 e 365 dias.

![Configuração da duração do login persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2026/october/2026-10-16-novo-recurso-login-persistente-para-manter-clientes-autenticados-por-mais-tempo_2.png)

## Requisitos

Para habilitar ou modificar o login persistente, você deve ter um [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) com o recurso **Write Account Config**, na categoria Account Configuration do produto VTEX ID.

## O que precisa ser feito?

Nenhuma ação é necessária se você não desejar ativar este recurso, já que o login persistente vem desabilitado por padrão. Para começar a usar, basta habilitar a funcionalidade conforme descrito acima.

Para mais informações, consulte o guia completo: [Configurar login persistente para clientes](/pt/docs/tutorials/configurar-login-persistente-para-clientes).
