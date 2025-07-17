---
title: "Os compradores não podem fazer login se houver uma configuração incorreta nas organizações/centros de custo"
id: r5p7K15FkbZUDSOUQ6hGz
status: PUBLISHED
createdAt: 2023-11-30T22:21:39.852Z
updatedAt: 2024-11-01T13:30:43.637Z
publishedAt: 2024-11-01T13:30:43.637Z
firstPublishedAt: 2023-11-30T22:21:40.638Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: os-compradores-nao-podem-fazer-login-se-houver-uma-configuracao-incorreta-nas-organizacoescentros-de-custo
locale: pt
kiStatus: Fixed
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



