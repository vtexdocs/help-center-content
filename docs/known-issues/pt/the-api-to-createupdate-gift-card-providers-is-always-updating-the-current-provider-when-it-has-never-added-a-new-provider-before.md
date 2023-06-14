---
title: 'A API para criar/atualizar fornecedores de cartões-presente está sempre atualizando o fornecedor atual quando ele nunca adicionou um novo fornecedor antes.'
id: 4W5sYMJegRRJIGqa4yhvUQ
status: PUBLISHED
createdAt: 2023-03-10T19:05:01.536Z
updatedAt: 2023-03-10T19:05:02.545Z
publishedAt: 2023-03-10T19:05:02.545Z
firstPublishedAt: 2023-03-10T19:05:02.545Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-api-para-criaratualizar-fornecedores-de-cartoespresente-esta-sempre-atualizando-o-fornecedor-atual-quando-ele-nunca-adicionou-um-novo-fornecedor-antes
kiStatus: Backlog
internalReference: 768954
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar adicionar uma nova identificação de fornecedor pela primeira vez em uma conta, em vez de adicionar um novo fornecedor, o atual fornecedor nativo (VtexGiftCard) é atualizado.


##

## Simulação


Use nossa API para atualizar um provedor quando a conta nunca tiver adicionado um novo provedor.


##

## Workaround


Para adicionar um novo fornecedor, você deve primeiro salvar as informações de nosso fornecedor nativo de cartões-presente. Uma vez salvas as informações, você pode então adicionar o novo provedor com sucesso.




