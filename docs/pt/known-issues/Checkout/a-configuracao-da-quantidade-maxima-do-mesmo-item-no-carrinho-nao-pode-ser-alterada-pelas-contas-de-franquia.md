---
title: "A configuração da quantidade máxima do mesmo item no carrinho não pode ser alterada pelas contas de franquia"
id: 5NqcSpcmPXEJE4KIkp6eZE
status: PUBLISHED
createdAt: 2022-05-12T14:52:33.074Z
updatedAt: 2025-04-22T19:37:16.136Z
publishedAt: 2025-04-22T19:37:16.136Z
firstPublishedAt: 2022-05-12T14:52:33.334Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-configuracao-da-quantidade-maxima-do-mesmo-item-no-carrinho-nao-pode-ser-alterada-pelas-contas-de-franquia
locale: pt
kiStatus: Backlog
internalReference: 325273
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A configuração da quantidade máxima do mesmo item no carrinho não pode ser alterada por contas de franquia (vendedor whitelabel) e portal do vendedor, pois ocorre em uma tela de catálogo legado (/admin/Site/ConfigForm.aspx) - módulo que é removido das contas de franquia, pois elas herdam os produtos da conta principal.

## Simulação



- Entre em um ambiente de conta de franquia ou de vendedor whitelabel
- Acesse a tela "CMS > Configurações > guia Geral" no administrador ou vá diretamente para a página /admin/Site/ConfigForm.aspx
- Observe que não é possível acessar o conteúdo dessa áre

## Workaround


Solicite a configuração via ticket para a VTEX.




