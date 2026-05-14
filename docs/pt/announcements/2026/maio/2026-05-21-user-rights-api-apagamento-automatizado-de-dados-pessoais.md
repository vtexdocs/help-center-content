---
title: "User Rights API: exclusão automatizada de dados pessoais"
createdAt: 2026-05-21T14:00:00.000Z
updatedAt: 2026-05-21T14:00:00.000Z
contentType: updates
productTeam: Identity
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2026-05-21-user-rights-api-automated-personal-data-erasure
locale: pt
announcementSynopsisPT: 'A nova User Rights API permite automatizar solicitações de exclusão de dados pessoais (LGPD/GDPR) na plataforma VTEX.'
tags:
  - Nova funcionalidade
  - Master Data
  - Identity
---

A VTEX lançou a **User Rights API**, que permite automatizar o processo de exclusão de dados pessoais de compradores na plataforma, em conformidade com as regulamentações LGPD e GDPR ("direito ao esquecimento").

> ℹ️ Esta funcionalidade está em fase open beta.

> ⚠️ Os fluxos de direitos de usuário disponíveis nesta API se aplicam apenas a compradores não corporativos. Eles não se aplicam a compradores B2B ou usuários do Admin.

## O que mudou?

Anteriormente, a exclusão de dados pessoais padrão da plataforma exigia um [fluxo manual via Copilot](https://help.vtex.com/docs/tutorials/erasing-customer-data). Agora, os lojistas podem integrar seus sistemas com a nova API para automatizar esse processo.

> ℹ️ Dados pessoais armazenados em entidades customizadas do Master Data continuam seguindo o processo existente descrito em [Apagando dados de clientes](https://help.vtex.com/docs/tutorials/erasing-customer-data).

## Por que fizemos essa mudança?

Para oferecer aos lojistas uma forma eficiente e escalável de atender às solicitações de exclusão de dados pessoais, eliminando a necessidade de processos manuais para cada solicitação individual.

## O que precisa ser feito?

Nenhuma ação é obrigatória. O fluxo manual existente continua disponível. Para adotar o fluxo automatizado:

* Consulte o [guia de integração da User Rights API](https://developers.vtex.com/docs/guides/user-rights-data-erasure) para implementar o fluxo completo.
* Veja a referência dos endpoints na [documentação da API](https://developers.vtex.com/docs/api-reference/user-rights-api).
