---
title: 'A configuração da quantidade máxima do mesmo item no carrinho não pode ser alterada pelas contas de franquia'
id: 5NqcSpcmPXEJE4KIkp6eZE
status: PUBLISHED
createdAt: 2022-05-12T14:52:33.074Z
updatedAt: 2023-10-18T14:34:56.570Z
publishedAt: 2023-10-18T14:34:56.570Z
firstPublishedAt: 2022-05-12T14:52:33.334Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: maximum-quantity-setting-of-the-same-item-in-the-cart-cannot-be-changed-by-franchise-accounts
locale: pt
kiStatus: Backlog
internalReference: 325273
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A configuração da quantidade máxima do mesmo item no carrinho não pode ser alterada por contas de franquia (vendedor whitelabel), pois ocorre em uma tela de catálogo herdada (/admin/Site/ConfigForm.aspx) - módulo que é removido das contas de franquia, pois elas herdam os produtos da conta principal.

## Simulação



- Entre em um ambiente de conta de franquia ou de vendedor whitelabel
- Acesse a tela "CMS > Configurações > guia Geral" no administrador ou vá diretamente para a página /admin/Site/ConfigForm.aspx
- Observe que não é possível acessar o conteúdo dessa áre

## Workaround


Solicite a configuração via ticket para a VTEX.




