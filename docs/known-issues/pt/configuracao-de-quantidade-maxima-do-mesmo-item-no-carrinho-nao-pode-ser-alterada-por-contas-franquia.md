---
title: 'Configuração de quantidade máxima do mesmo item no carrinho não pode ser alterada por contas franquia'
id: 5NqcSpcmPXEJE4KIkp6eZE
status: PUBLISHED
createdAt: 2022-05-12T14:52:33.074Z
updatedAt: 2022-11-25T21:51:53.882Z
publishedAt: 2022-11-25T21:51:53.882Z
firstPublishedAt: 2022-05-12T14:52:33.334Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: configuracao-de-quantidade-maxima-do-mesmo-item-no-carrinho-nao-pode-ser-alterada-por-contas-franquia
locale: pt
kiStatus: Backlog
internalReference: 325273
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A configuração da quantidade máxima do mesmo item no carrinho não pode ser alterada pelas contas de franquia (vendedor whitelabel), pois ocorre em uma tela de catálogo legado (/admin/Site/ConfigForm.aspx) - módulo que é removido das contas de franquia, pois elas herdam os produtos da conta-mãe.



## Simulação


 1- Entre em um ambiente de conta de franquia ou de vendedor de whitelabel

2- Acesse a tela "CMS > Configurações > guia Geral" do administrador, ou vá diretamente para a página /admin/Site/ConfigForm.aspx

3- Note que não é possível acessar o conteúdo desta área




## Workaround


Solicitar a configuração internamente à equipe do PTA via ticket do tipo tarefa.

