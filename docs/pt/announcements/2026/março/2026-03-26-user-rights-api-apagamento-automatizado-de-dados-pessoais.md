---
title: "User Rights API: apagamento automatizado de dados pessoais"
createdAt: 2026-03-26T14:00:00.000Z
updatedAt: 2026-03-26T14:00:00.000Z
contentType: updates
productTeam: Identity
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2026-03-26-user-rights-api-automated-personal-data-erasure
locale: pt
announcementSynopsisPT: 'A nova User Rights API permite automatizar solicitações de apagamento de dados pessoais (LGPD/GDPR) na plataforma VTEX.'
tags:
  - Nova funcionalidade
  - Master Data
  - Identity
---

A VTEX lançou a **User Rights API**, que permite automatizar o processo de apagamento de dados pessoais de compradores na plataforma, em conformidade com as regulamentações LGPD e GDPR ("direito ao esquecimento").

## O que mudou?

Anteriormente, o apagamento de dados pessoais padrão da plataforma exigia um [fluxo manual via Copilot](https://help.vtex.com/docs/tutorials/erasing-customer-data). Agora, os lojistas podem integrar seus sistemas com a nova API para automatizar esse processo.

O fluxo funciona em duas etapas:

1. **Criar uma solicitação de apagamento:** envie o email do comprador e receba um ID de job.
2. **Acompanhar o status:** consulte o ID do job periodicamente até que o apagamento seja concluído.

> ℹ️ Dados pessoais armazenados em entidades customizadas do Master Data continuam seguindo o processo existente descrito em [Apagando dados de clientes](https://help.vtex.com/docs/tutorials/erasing-customer-data).

## Por que fizemos essa mudança?

Para oferecer aos lojistas uma forma eficiente e escalável de atender às solicitações de apagamento de dados pessoais, eliminando a necessidade de processos manuais para cada solicitação individual.

## O que precisa ser feito?

Nenhuma ação é obrigatória. O fluxo manual existente continua disponível. Para adotar o fluxo automatizado:

* Consulte o [guia de integração da User Rights API](https://developers.vtex.com/docs/guides/user-rights-data-erasure) para implementar o fluxo completo.
* Veja a referência dos endpoints na [documentação da API](https://developers.vtex.com/docs/api-reference/user-rights-api).
