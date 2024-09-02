---
title: 'Os compradores não podem fazer login se houver uma configuração incorreta nas organizações/centros de custo'
id: r5p7K15FkbZUDSOUQ6hGz
status: PUBLISHED
createdAt: 2023-11-30T22:21:39.852Z
updatedAt: 2023-12-01T20:19:35.375Z
publishedAt: 2023-12-01T20:19:35.375Z
firstPublishedAt: 2023-11-30T22:21:40.638Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: os-compradores-nao-podem-fazer-login-se-houver-uma-configuracao-incorreta-nas-organizacoescentros-de-custo
locale: pt
kiStatus: Backlog
internalReference: 945609
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um usuário tem a primeira organização atribuída a ele inválida com o ID do centro de custo errado, o login falha sem nenhuma mensagem.

Haverá a mensagem `"App storefront-permissions failed, resulting in an error building the session"` na resposta da sessão.

## Simulação



- Crie uma organização com o ID de centro de custo incorreto;
- Faça login no site

## Workaround


Corrija o ID do centro de custo associado à organização ou exclua a organização.



